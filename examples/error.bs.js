'use strict';

var BsBox = require("../src/BsBox.bs.js");
var $$String = require("bs-platform/lib/js/string.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

var code = "\n  a\n";

var result = BsBox.compile(code);

if (result.tag) {
  var match = result[0][1];
  var $$console = match[/* console */3];
  var match$1 = match[/* from */1];
  console.log("Error: " + (String(match[/* message */0]) + ("\nLine " + (String(match$1[/* line */0]) + (", column " + (String(match$1[/* column */1]) + ""))))));
  if ($$String.trim($$console) !== "") {
    console.log("\nDetails:\n", $$console);
  }
  
} else {
  Pervasives.failwith("should error");
}

exports.code = code;
exports.result = result;
/* result Not a pure module */
