
/* 
 * Simulates multiple toplevel modules by wrapping "files" in submodules and concatenating them together
 */

type context;
[@bs.val] [@bs.module "vm"] external createContext : Js.t({..}) => context = "";
[@bs.val] [@bs.module "vm"] external runInContext : (string, context) => unit = "";

/* "Print.ml" */
let printCode = {|
  let string =
    Js.log
|};

/* "Print.mli" */
let printInterface = {|
  val string : string -> unit
|};

/* "Hello.ml" */
let helloCode = {|
  let greeting = "Hello"

  let hello name =
    Print.string {j|$greeting $name!|j}
|};

/* "main.ml" */
let mainCode  = {|
  let goodbye () =
    Print.string "Goodbye!"

  let hello_goodbye () =
    Hello.hello "World";
    goodbye ()

  let () =
    hello_goodbye ()
|};

/* wrap in submodules and concatenate */
let combinedCode = {j|
  module Print : sig
    $printInterface
  end = struct
    $printCode
  end

  module Hello = struct
    $helloCode
  end

  $mainCode
|j};

let result =
  BsBox.compile(combinedCode);

switch result {
| Ok({ code, warnings }) => {
    if (String.trim(warnings) !== "") {
      Js.log2("Warnings: ", warnings);
    };

    let context = createContext([%raw "{ console: console, exports: {} }"]);
    let stdlib = Node.Fs.readFileSync("vendor/stdlibBundle.js", `utf8); /* TODO: Why on earth doesn't `Node.Fs` work? */
    runInContext(stdlib, context);
    runInContext(code, context);
  }
| Error({ message, console }) =>
    if (String.trim(console) !== "") {
      Js.log2("Error: ", console)
    } else {
      Js.log2("Error: ", message)
    };
};
