
[@bs.val] external eval : string => 'a = "";

let code  = {|
  let hello thing =
    Js.log {j|Hello $thing!|j}

  let () =
    hello (String.capitalize "world")
|};

let result =
  BsBox.compile(code);

switch result {
| Ok({ code, warnings }) => {
    switch warnings {
    | Some(warnings)  => Js.log2("Warnings: ", warnings);
    | None            => ()
    };

    Js.log(code);
    eval(code);
  }
| Error({ message }) =>
  Js.log2("Error: ", message)
};
