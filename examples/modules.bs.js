'use strict';

var Fs = require("fs");
var Vm = require("vm");
var BsBox = require("../src/BsBox.bs.js");
var $$String = require("bs-platform/lib/js/string.js");

var printCode = "\n  let string =\n    Js.log\n";

var printInterface = "\n  val string : string -> unit\n";

var helloCode = "\n  let greeting = \"Hello\"\n\n  let hello name =\n    Print.string {j|$greeting $name!|j}\n";

var mainCode = "\n  let goodbye () =\n    Print.string \"Goodbye!\"\n\n  let hello_goodbye () =\n    Hello.hello \"World\";\n    goodbye ()\n\n  let () =\n    hello_goodbye ()\n";

var combinedCode = "\n  module Print : sig\n    " + (String(printInterface) + ("\n  end = struct\n    " + (String(printCode) + ("\n  end\n\n  module Hello = struct\n    " + (String(helloCode) + ("\n  end\n\n  " + (String(mainCode) + "\n")))))));

var result = BsBox.compile(combinedCode);

if (result.tag) {
  var match = result[0][1];
  var $$console = match[/* console */3];
  if ($$String.trim($$console) !== "") {
    console.log("Error: ", $$console);
  } else {
    console.log("Error: ", match[/* message */0]);
  }
} else {
  var match$1 = result[0];
  var warnings = match$1[/* warnings */1];
  if ($$String.trim(warnings) !== "") {
    console.log("Warnings: ", warnings);
  }
  var context = Vm.createContext(({ console: console, exports: {} }));
  var stdlib = Fs.readFileSync("vendor/stdlibBundle.js", "utf8");
  Vm.runInContext(stdlib, context);
  Vm.runInContext(match$1[/* code */0], context);
}

exports.printCode = printCode;
exports.printInterface = printInterface;
exports.helloCode = helloCode;
exports.mainCode = mainCode;
exports.combinedCode = combinedCode;
exports.result = result;
/* combinedCode Not a pure module */
