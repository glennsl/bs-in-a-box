
[%raw "require('../vendor/bs.js')"];

type success = {
  code: string,
  warnings: option(string)
};

type result = Js.Result.t(success, string);

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

[@bs.val] [@bs.scope ("window", "ocaml")] external compile : string => string = "";

[%%raw {|
  function _captureConsoleErrors(f) {
    let errors = "";
    const _consoleError = console.error;
    console.error = (...args) => args.forEach(argument => errors += argument + `\n`);

    let res = f();

    console.error = _consoleError;
    return [res, errors ? [errors] : 0];
  }
|}];
[@bs.val] external _captureConsoleErrors : (unit => 'a) => ('a, option(string)) = "";

let compile = code =>
  try {
    let (json, warnings) = 
      _captureConsoleErrors(() =>
        code |> compile
      );
    
    json |> Js.Json.parseExn
         |> InternalResult.unsafeFromJson
         |> InternalResult.toResult
         |> Js.Result.(
           fun | Ok(code) => Ok({ code, warnings })
               | Error(e) => Error(e)
         );
  } {
  | exn =>
    Error({j|Unrecognized compiler output: $exn|j});
  }