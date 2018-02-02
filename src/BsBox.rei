
type success  = { code: string, warnings: option(string) }
and  result   = Js.Result.t(success, string);

let compile : string => result;