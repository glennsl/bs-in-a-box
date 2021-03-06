'use strict';

var Block = require("bs-platform/lib/js/block.js");


  // Load compiler
  require('../vendor/bs.js');

  // Attach to local variable, so we can still access it if the global is overwritten
  var ocaml = global && global.ocaml || window.ocaml;

;

function toResult(jsObj) {
  var match = jsObj.type;
  if (match == null) {
    return /* Ok */Block.__(0, [/* record */[
                /* code */jsObj.js_code,
                /* warnings */""
              ]]);
  } else if (match === "error") {
    return /* Error */Block.__(1, [/* record */[
                /* message */jsObj.text,
                /* from : record */[
                  /* line */jsObj.row,
                  /* column */jsObj.column
                ],
                /* until : record */[
                  /* line */jsObj.endRow,
                  /* column */jsObj.endColumn
                ],
                /* console */""
              ]]);
  } else {
    return /* Ok */Block.__(0, [/* record */[
                /* code */jsObj.js_code,
                /* warnings */""
              ]]);
  }
}


  function _captureConsoleOutput(f) {
    const capture = (...args) => args.forEach(argument => errors += argument + `\n`);

    let errors = "";
    let res;

    if ((typeof process !== "undefined") && process.stdout && process.stdout.write) {
      const _stdoutWrite = process.stdout.write; // errors are written to stdout
      const _stderrWrite = process.stderr.write; // warnings are written to stderr ...
      process.stdout.write = capture;
      process.stderr.write = capture;

      res = f();

      process.stdout.write = _stdoutWrite;
      process.stderr.write = _stderrWrite;
    } else {
      const _consoleLog = console.log;     // errors are written to console.log
      const _consoleError = console.error; // warnings are written to console.error (at least it's consistently incnsistent)
      console.log = capture;
      console.error = capture;

      res = f();

      console.log = _consoleLog;
      console.error = _consoleError;
    }

    return [res, errors ? errors : ""];
  }

;

function compile(code) {
  var match = _captureConsoleOutput((function () {
          return ocaml.compile(code);
        }));
  var consoleOutput = match[1];
  var param = toResult(JSON.parse(match[0]));
  if (param.tag) {
    var error = param[0];
    return /* Error */Block.__(1, [/* `BsCompileError */[
                774283494,
                /* record */[
                  /* message */error[/* message */0],
                  /* from */error[/* from */1],
                  /* until */error[/* until */2],
                  /* console */consoleOutput
                ]
              ]]);
  } else {
    return /* Ok */Block.__(0, [/* record */[
                /* code */param[0][/* code */0],
                /* warnings */consoleOutput
              ]]);
  }
}

function loadModule(name, cmi, cmj) {
  ocaml.load_module("/static/cmis/" + (String(name) + ".cmi"), cmi, "" + (String(name) + ".cmj"), cmj);
  return /* () */0;
}

exports.compile = compile;
exports.loadModule = loadModule;
/*  Not a pure module */
