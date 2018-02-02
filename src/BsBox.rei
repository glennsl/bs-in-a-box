
type success  = { code: string, warnings: option(string) }
and  error    = { message: string, details: option(string) }
and  result   = Js.Result.t(success, error);

let compile : string => result;