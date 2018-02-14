'use strict';

var $$String = require("bs-platform/lib/js/string.js");

function hello(name) {
  var name$1 = $$String.capitalize(name);
  return "Hello " + (String(name$1) + ", I\'m from an external module!\"");
}

exports.hello = hello;
/* No side effect */
