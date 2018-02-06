
type success  = { code: string, warnings: string };
type location = { line: int, column: int }
and  error    = { message: string, from: location, until: location, console: string };

let compile     : string => Js.Result.t(success, [> `BsCompileError(error)]);
let loadModule : (~name: string, ~cmi: string, ~cmj: string) => unit