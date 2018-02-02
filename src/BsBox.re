
[%raw "require('../vendor/bs.js')"];

type success = {
  code: string,
  warnings: option(string)
};

type error = {
  message: string,
  details: option(string)
};

type result = Js.Result.t(success, error);

module InternalResult = {
  type t = {.
    "js_code": Js.nullable(string),
    "text": Js.nullable(string)
  };

  external unsafeFromJson : Js.Json.t => t = "%identity";

  let toResult = jsObj =>
    switch (Js.Nullable.to_opt(jsObj##js_code)) {
    | Some(code)    => Js.Result.Ok(code)
    | None =>
      switch (Js.Nullable.to_opt(jsObj##text)) {
      | Some(error) => Js.Result.Error(error)
      | None        => failwith("unknown response from compiler")
      }
    };
};

[@bs.val] [@bs.scope "ocaml"] external compile : string => string = "";

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
      const _consoleError = console.error;
      console.error = capture;

      res = f();

      console.error = _consoleError;
    }

    return [res, errors ? [errors] : 0];
  }
|}];
[@bs.val] external _captureConsoleOutput : (unit => 'a) => ('a, option(string)) = "";

let compile = code =>
  try {
    let (json, consoleOutput) = 
      _captureConsoleOutput(() =>
        code |> compile
      );
    
    json |> Js.Json.parseExn
         |> InternalResult.unsafeFromJson
         |> InternalResult.toResult
         |> Js.Result.(
           fun | Ok(code)       => Ok({ code, warnings: consoleOutput })
               | Error(message) => Error({ message, details: consoleOutput })
         );
  } {
  | exn =>
    Error({
      message: {j|Unrecognized compiler output: $exn|j},
      details: None
    });
  }