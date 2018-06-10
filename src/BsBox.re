[%%raw {|
  // Load compiler
  require('../vendor/bs.js');

  // Attach to local variable, so we can still access it if the global is overwritten
  var ocaml = global && global.ocaml || window.ocaml;
|}];

type location = {
  line: int,
  column: int
};

type success = {
  code: string,
  warnings: string
};

type error = {
  message: string,
  from: location,
  until: location,
  console: string
};

module InternalResult = {
  type t = {.
    "_type":        Js.nullable(string)
  };

  type internalSuccess = {.
    "js_code":      string
  };

  type internalError = {.
    "js_error_msg": string,
    "row":          int,
    "column":       int,
    "endRow":       int,
    "endColumn":    int,
    "text":         string
  };

  external unsafeFromJson   : Js.Json.t => t = "%identity";
  external unsafeAsSuccess  : t => internalSuccess = "%identity";
  external unsafeAsError : t => internalError = "%identity";

  let toResult = jsObj =>
    switch (Js.Nullable.toOption(jsObj##_type)) {
    | Some("error") => {
        let error = jsObj |> unsafeAsError;
        Belt.Result.Error({
          message: error##text,
          from: { line: error##row, column: error##column },
          until: { line: error##endRow, column: error##endColumn },
          console: ""
        })
      }
    | _ => Belt.Result.Ok({
      code: (jsObj |> unsafeAsSuccess)##js_code,
      warnings: ""
    })
  };
};

[%%raw {|
  function _captureConsoleOutput(f) {
    const capture = (...args) => args.forEach(argument => errors += argument + `\n`);

    let errors = "";
    let res;

    if ((typeof process !== "undefined") && process.stdout && process.stdout.write) {
      const _stdoutWrite = process.stdout.write; // errors are written to stdout
      const _stderrWrite = process.stderr.write; // warnings are written to stderr ...
      process.stdout.write = capture;
      process.stderr.write = capture;

      res = f();

      process.stdout.write = _stdoutWrite;
      process.stderr.write = _stderrWrite;
    } else {
      const _consoleLog = console.log;     // errors are written to console.log
      const _consoleError = console.error; // warnings are written to console.error (at least it's consistently incnsistent)
      console.log = capture;
      console.error = capture;

      res = f();

      console.log = _consoleLog;
      console.error = _consoleError;
    }

    return [res, errors ? errors : ""];
  }
|}];
[@bs.val] external _captureConsoleOutput : (unit => 'a) => ('a, string) = "";

[@bs.val] [@bs.scope "ocaml"] external compile : string => string = "";
let compile = code => {
  let (json, consoleOutput) = 
    _captureConsoleOutput(() =>
      code |> compile
    );
  
  json |> Js.Json.parseExn
       |> InternalResult.unsafeFromJson
       |> InternalResult.toResult
       |> Belt.Result.(
          fun | Ok({ code }) => Ok({ code, warnings: consoleOutput })
              | Error(error) => Error(`BsCompileError({ ...error, console: consoleOutput }))
       );
};

[@bs.val] [@bs.scope "ocaml"] external loadModule : (string, string, string, string) => unit = "load_module";
let loadModule = (~name, ~cmi, ~cmj) =>
  loadModule({j|/static/cmis/$name.cmi|j}, cmi, {j|$name.cmj|j}, cmj);
