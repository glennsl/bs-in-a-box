'use strict';

var BsBox = require("../src/BsBox.bs.js");
var $$String = require("bs-platform/lib/js/string.js");

var code = "\n  let hello thing =\n    Js.log {j|Hello $thing!|j}\n\n  let () =\n    hello (String.capitalize \"world\")\n";

var result = BsBox.compile(code);

if (result.tag) {
  console.log("Error: ", result[0][1][/* message */0]);
} else {
  var match = result[0];
  var warnings = match[/* warnings */1];
  var code$1 = match[/* code */0];
  if ($$String.trim(warnings) !== "") {
    console.log("Warnings: ", warnings);
  }
  console.log(code$1);
  eval(code$1);
}

exports.code = code;
exports.result = result;
/* result Not a pure module */
