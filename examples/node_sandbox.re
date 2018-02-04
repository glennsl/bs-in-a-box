
/* 
 * This example shows how compiled code execution in Node can be sandboxed
 */

type context;
[@bs.val] [@bs.module "vm"] external createContext : Js.t({..}) => context = "";
[@bs.val] [@bs.module "vm"] external runInContext : (string, context) => unit = "";

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
    if (String.trim(warnings) !== "") {
      Js.log2("Warnings:\n", warnings);
    };

    /* Create a sandboxed context.
     *
     * Pass in `console` so we can use Js.log, and create an `exports` object to
     * attach exported functions to (this isn't optional, since bs expects it to exist)
     */
    let context = createContext([%raw "{ console: console, exports: {} }"]);

    /* Read in and evaluate the stdlib in the sandbox */
    let stdlib = Node_fs.readFileSync("vendor/stdlibBundle.js", `utf8); /* TODO: Why on earth doesn't `Node.Fs` work? */
    runInContext(stdlib, context);
    
    /* Evaluate our compiled code */
    runInContext(code, context);

    /* Print out the context to see how it's been changed */
    Js.log("\nPost-evaluation context:");
    Js.log(context);
  }
| Error({ message }) =>
  Js.log2("Error: ", message)
};
