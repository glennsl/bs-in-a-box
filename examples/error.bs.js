// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var BsBox      = require("../src/BsBox.bs.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

var code = "\n  a\n";

var result = BsBox.compile(code);

if (result.tag) {
  var match = result[0];
  var details = match[/* details */1];
  console.log("Caught error: ", match[/* message */0]);
  if (details) {
    console.log("Details:\n", details[0]);
  }
  
} else {
  Pervasives.failwith("should error");
}

exports.code   = code;
exports.result = result;
/* result Not a pure module */
