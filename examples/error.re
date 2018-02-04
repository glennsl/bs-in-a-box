
[@bs.val] external eval : string => 'a = "";

let code  = {|
  a
|};

let result =
  BsBox.compile(code);

switch result {
| Ok(_) =>
  failwith("should error");

| Error({ message, console, from: { line, column } }) =>
  Js.log({j|Error: $message\nLine $line, column $column|j});

  if (String.trim(console) !== "") {
    Js.log2("\nDetails:\n", console);
  };
};
