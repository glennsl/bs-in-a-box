
type location = { line: int, column: int }
and  success  = { code: string, warnings: string }
and  error    = { message: string, from: location, until: location, console: string }
and  result   = Js.Result.t(success, error);

let compile : string => result;