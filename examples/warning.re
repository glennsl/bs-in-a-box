
[@bs.val] external eval : string => 'a = "";

let code  = {|
  let x =
    match 0 with 0 -> ()
|};

let result =
  BsBox.compile(code);

switch result {
| Ok({ code, warnings }) => {
    if (String.trim(warnings) !== "") {
      Js.log2("Warnings:\n", warnings);
    };

    eval(code);
  }
| Error({ message }) =>
  Js.log2("Error: ", message)
};
