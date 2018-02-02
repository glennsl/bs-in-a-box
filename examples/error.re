
[@bs.val] external eval : string => 'a = "";

let code  = {|
  a
|};

let result =
  BsBox.compile(code);

switch result {
| Ok(_) =>
  failwith("should error");

| Error({ message, details }) =>
  Js.log2("Caught error: ", message);

  switch details {
  | Some(details) => Js.log2("Details:\n", details)
  | None          => ()
  };
};
