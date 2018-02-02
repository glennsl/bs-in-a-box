
[@bs.val] external eval : string => 'a = "";

let code  = {|
  a
|};

let result =
  BsBox.compile(code);

switch result {
| Js.Result.Ok(_) =>
  failwith("should error");

| Js.Result.Error({ message, details }) =>
  Js.log2("Caught error: ", message);

  switch details {
  | Some(details) => Js.log2("Details:\n", details)
  | None          => ()
  };
};
