/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var out_of_memory = /* tuple */[
  "Out_of_memory",
  0
];

var sys_error = /* tuple */[
  "Sys_error",
  -1
];

var failure = /* tuple */[
  "Failure",
  -2
];

var invalid_argument = /* tuple */[
  "Invalid_argument",
  -3
];

var end_of_file = /* tuple */[
  "End_of_file",
  -4
];

var division_by_zero = /* tuple */[
  "Division_by_zero",
  -5
];

var not_found = /* tuple */[
  "Not_found",
  -6
];

var match_failure = /* tuple */[
  "Match_failure",
  -7
];

var stack_overflow = /* tuple */[
  "Stack_overflow",
  -8
];

var sys_blocked_io = /* tuple */[
  "Sys_blocked_io",
  -9
];

var assert_failure = /* tuple */[
  "Assert_failure",
  -10
];

var undefined_recursive_module = /* tuple */[
  "Undefined_recursive_module",
  -11
];

out_of_memory.tag = 248;

sys_error.tag = 248;

failure.tag = 248;

invalid_argument.tag = 248;

end_of_file.tag = 248;

division_by_zero.tag = 248;

not_found.tag = 248;

match_failure.tag = 248;

stack_overflow.tag = 248;

sys_blocked_io.tag = 248;

assert_failure.tag = 248;

undefined_recursive_module.tag = 248;

exports.out_of_memory              = out_of_memory;
exports.sys_error                  = sys_error;
exports.failure                    = failure;
exports.invalid_argument           = invalid_argument;
exports.end_of_file                = end_of_file;
exports.division_by_zero           = division_by_zero;
exports.not_found                  = not_found;
exports.match_failure              = match_failure;
exports.stack_overflow             = stack_overflow;
exports.sys_blocked_io             = sys_blocked_io;
exports.assert_failure             = assert_failure;
exports.undefined_recursive_module = undefined_recursive_module;
/*  Not a pure module */


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



function __(tag, block) {
  block.tag = tag;
  return block;
}

exports.__ = __;
/* No side effect */


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_array = __webpack_require__(12);

function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var arity = f.length;
    var arity$1 = arity ? arity : 1;
    var len = args.length;
    var d = arity$1 - len | 0;
    if (d) {
      if (d < 0) {
        _args = Caml_array.caml_array_sub(args, arity$1, -d | 0);
        _f = f.apply(null, Caml_array.caml_array_sub(args, 0, arity$1));
        continue ;
        
      } else {
        return (function(f,args){
        return function (x) {
          return app(f, args.concat(/* array */[x]));
        }
        }(f,args));
      }
    } else {
      return f.apply(null, args);
    }
  };
}

function curry_1(o, a0, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[a0]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return o(a0);
      case 2 : 
          return (function (param) {
              return o(a0, param);
            });
      case 3 : 
          return (function (param, param$1) {
              return o(a0, param, param$1);
            });
      case 4 : 
          return (function (param, param$1, param$2) {
              return o(a0, param, param$1, param$2);
            });
      case 5 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, param, param$1, param$2, param$3);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, param, param$1, param$2, param$3, param$4);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4, param$5) {
              return o(a0, param, param$1, param$2, param$3, param$4, param$5);
            });
      
    }
  }
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    return curry_1(o, a0, arity);
  }
}

function __1(o) {
  var arity = o.length;
  if (arity === 1) {
    return o;
  } else {
    return (function (a0) {
        return _1(o, a0);
      });
  }
}

function curry_2(o, a0, a1, arity) {
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          return app(o(a0), /* array */[a1]);
      case 2 : 
          return o(a0, a1);
      case 3 : 
          return (function (param) {
              return o(a0, a1, param);
            });
      case 4 : 
          return (function (param, param$1) {
              return o(a0, a1, param, param$1);
            });
      case 5 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, param, param$1, param$2);
            });
      case 6 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, param, param$1, param$2, param$3);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3, param$4) {
              return o(a0, a1, param, param$1, param$2, param$3, param$4);
            });
      
    }
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    return curry_2(o, a0, a1, arity);
  }
}

function __2(o) {
  var arity = o.length;
  if (arity === 2) {
    return o;
  } else {
    return (function (a0, a1) {
        return _2(o, a0, a1);
      });
  }
}

function curry_3(o, a0, a1, a2, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[a2]);
      case 3 : 
          return o(a0, a1, a2);
      case 4 : 
          return (function (param) {
              return o(a0, a1, a2, param);
            });
      case 5 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, param, param$1);
            });
      case 6 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, param, param$1, param$2);
            });
      case 7 : 
          return (function (param, param$1, param$2, param$3) {
              return o(a0, a1, a2, param, param$1, param$2, param$3);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2
              ]);
  }
  
}

function _3(o, a0, a1, a2) {
  var arity = o.length;
  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    return curry_3(o, a0, a1, a2, arity);
  }
}

function __3(o) {
  var arity = o.length;
  if (arity === 3) {
    return o;
  } else {
    return (function (a0, a1, a2) {
        return _3(o, a0, a1, a2);
      });
  }
}

function curry_4(o, a0, a1, a2, a3, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[a3]);
      case 4 : 
          return o(a0, a1, a2, a3);
      case 5 : 
          return (function (param) {
              return o(a0, a1, a2, a3, param);
            });
      case 6 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, param, param$1);
            });
      case 7 : 
          return (function (param, param$1, param$2) {
              return o(a0, a1, a2, a3, param, param$1, param$2);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3
              ]);
  }
  
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;
  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    return curry_4(o, a0, a1, a2, a3, arity);
  }
}

function __4(o) {
  var arity = o.length;
  if (arity === 4) {
    return o;
  } else {
    return (function (a0, a1, a2, a3) {
        return _4(o, a0, a1, a2, a3);
      });
  }
}

function curry_5(o, a0, a1, a2, a3, a4, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[a4]);
      case 5 : 
          return o(a0, a1, a2, a3, a4);
      case 6 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, param);
            });
      case 7 : 
          return (function (param, param$1) {
              return o(a0, a1, a2, a3, a4, param, param$1);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4
              ]);
  }
  
}

function _5(o, a0, a1, a2, a3, a4) {
  var arity = o.length;
  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    return curry_5(o, a0, a1, a2, a3, a4, arity);
  }
}

function __5(o) {
  var arity = o.length;
  if (arity === 5) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4) {
        return _5(o, a0, a1, a2, a3, a4);
      });
  }
}

function curry_6(o, a0, a1, a2, a3, a4, a5, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[a5]);
      case 6 : 
          return o(a0, a1, a2, a3, a4, a5);
      case 7 : 
          return (function (param) {
              return o(a0, a1, a2, a3, a4, a5, param);
            });
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5
              ]);
  }
  
}

function _6(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;
  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    return curry_6(o, a0, a1, a2, a3, a4, a5, arity);
  }
}

function __6(o) {
  var arity = o.length;
  if (arity === 6) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5) {
        return _6(o, a0, a1, a2, a3, a4, a5);
      });
  }
}

function curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[a6]);
      case 7 : 
          return o(a0, a1, a2, a3, a4, a5, a6);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6
              ]);
  }
  
}

function _7(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;
  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    return curry_7(o, a0, a1, a2, a3, a4, a5, a6, arity);
  }
}

function __7(o) {
  var arity = o.length;
  if (arity === 7) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6) {
        return _7(o, a0, a1, a2, a3, a4, a5, a6);
      });
  }
}

function curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity) {
  var exit = 0;
  if (arity > 7 || arity < 0) {
    return app(o, /* array */[
                a0,
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  } else {
    switch (arity) {
      case 0 : 
      case 1 : 
          exit = 1;
          break;
      case 2 : 
          return app(o(a0, a1), /* array */[
                      a2,
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 3 : 
          return app(o(a0, a1, a2), /* array */[
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 4 : 
          return app(o(a0, a1, a2, a3), /* array */[
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 5 : 
          return app(o(a0, a1, a2, a3, a4), /* array */[
                      a5,
                      a6,
                      a7
                    ]);
      case 6 : 
          return app(o(a0, a1, a2, a3, a4, a5), /* array */[
                      a6,
                      a7
                    ]);
      case 7 : 
          return app(o(a0, a1, a2, a3, a4, a5, a6), /* array */[a7]);
      
    }
  }
  if (exit === 1) {
    return app(o(a0), /* array */[
                a1,
                a2,
                a3,
                a4,
                a5,
                a6,
                a7
              ]);
  }
  
}

function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;
  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    return curry_8(o, a0, a1, a2, a3, a4, a5, a6, a7, arity);
  }
}

function __8(o) {
  var arity = o.length;
  if (arity === 8) {
    return o;
  } else {
    return (function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
      });
  }
}

exports.app     = app;
exports.curry_1 = curry_1;
exports._1      = _1;
exports.__1     = __1;
exports.curry_2 = curry_2;
exports._2      = _2;
exports.__2     = __2;
exports.curry_3 = curry_3;
exports._3      = _3;
exports.__3     = __3;
exports.curry_4 = curry_4;
exports._4      = _4;
exports.__4     = __4;
exports.curry_5 = curry_5;
exports._5      = _5;
exports.__5     = __5;
exports.curry_6 = curry_6;
exports._6      = _6;
exports.__6     = __6;
exports.curry_7 = curry_7;
exports._7      = _7;
exports.__7     = __7;
exports.curry_8 = curry_8;
exports._8      = _8;
exports.__8     = __8;
/* No side effect */


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var id = [0];

function caml_set_oo_id(b) {
  b[1] = id[0];
  id[0] += 1;
  return b;
}

function get_id() {
  id[0] += 1;
  return id[0];
}

function create(str) {
  var v_001 = get_id(/* () */0);
  var v = /* tuple */[
    str,
    v_001
  ];
  v.tag = 248;
  return v;
}

function isCamlExceptionOrOpenVariant(e) {
  if (e === undefined) {
    return /* false */0;
  } else if (e.tag === 248) {
    return /* true */1;
  } else {
    var slot = e[0];
    if (slot !== undefined) {
      return +(slot.tag === 248);
    } else {
      return /* false */0;
    }
  }
}

exports.caml_set_oo_id               = caml_set_oo_id;
exports.get_id                       = get_id;
exports.create                       = create;
exports.isCamlExceptionOrOpenVariant = isCamlExceptionOrOpenVariant;
/* No side effect */


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Block                   = __webpack_require__(2);
var Caml_builtin_exceptions = __webpack_require__(0);

function caml_obj_dup(x) {
  var len = x.length | 0;
  var v = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    v[i] = x[i];
  }
  v.tag = x.tag | 0;
  return v;
}

function caml_obj_truncate(x, new_size) {
  var len = x.length | 0;
  if (new_size <= 0 || new_size > len) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "Obj.truncate"
        ];
  } else if (len !== new_size) {
    for(var i = new_size ,i_finish = len - 1 | 0; i <= i_finish; ++i){
      x[i] = 0;
    }
    x.length = new_size;
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_lazy_make_forward(x) {
  return Block.__(250, [x]);
}

function caml_update_dummy(x, y) {
  var len = y.length | 0;
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    x[i] = y[i];
  }
  var y_tag = y.tag | 0;
  if (y_tag !== 0) {
    x.tag = y_tag;
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_int_compare(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}

function caml_compare(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return 0;
    } else {
      var a_type = typeof a;
      var b_type = typeof b;
      if (a_type === "string") {
        var x = a;
        var y = b;
        if (x < y) {
          return -1;
        } else if (x === y) {
          return 0;
        } else {
          return 1;
        }
      } else {
        var is_a_number = +(a_type === "number");
        var is_b_number = +(b_type === "number");
        if (is_a_number !== 0) {
          if (is_b_number !== 0) {
            return caml_int_compare(a, b);
          } else {
            return -1;
          }
        } else if (is_b_number !== 0) {
          return 1;
        } else if (a_type === "boolean" || a_type === "undefined" || a === null) {
          var x$1 = a;
          var y$1 = b;
          if (x$1 === y$1) {
            return 0;
          } else if (x$1 < y$1) {
            return -1;
          } else {
            return 1;
          }
        } else if (a_type === "function" || b_type === "function") {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "compare: functional value"
              ];
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
            
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
            
          } else if (tag_a === 248) {
            return caml_int_compare(a[1], b[1]);
          } else if (tag_a === 251) {
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            if (tag_a < tag_b) {
              return -1;
            } else {
              return 1;
            }
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while(true) {
                var i = _i;
                if (i === same_length) {
                  return 0;
                } else {
                  var res = caml_compare(a$1[i], b$1[i]);
                  if (res !== 0) {
                    return res;
                  } else {
                    _i = i + 1 | 0;
                    continue ;
                    
                  }
                }
              };
            } else if (len_a < len_b) {
              var a$2 = a;
              var b$2 = b;
              var _i$1 = 0;
              var short_length = len_a;
              while(true) {
                var i$1 = _i$1;
                if (i$1 === short_length) {
                  return -1;
                } else {
                  var res$1 = caml_compare(a$2[i$1], b$2[i$1]);
                  if (res$1 !== 0) {
                    return res$1;
                  } else {
                    _i$1 = i$1 + 1 | 0;
                    continue ;
                    
                  }
                }
              };
            } else {
              var a$3 = a;
              var b$3 = b;
              var _i$2 = 0;
              var short_length$1 = len_b;
              while(true) {
                var i$2 = _i$2;
                if (i$2 === short_length$1) {
                  return 1;
                } else {
                  var res$2 = caml_compare(a$3[i$2], b$3[i$2]);
                  if (res$2 !== 0) {
                    return res$2;
                  } else {
                    _i$2 = i$2 + 1 | 0;
                    continue ;
                    
                  }
                }
              };
            }
          }
        }
      }
    }
  };
}

function caml_equal(_a, _b) {
  while(true) {
    var b = _b;
    var a = _a;
    if (a === b) {
      return /* true */1;
    } else {
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
        return /* false */0;
      } else {
        var b_type = typeof b;
        if (a_type === "function" || b_type === "function") {
          throw [
                Caml_builtin_exceptions.invalid_argument,
                "equal: functional value"
              ];
        } else if (b_type === "number" || b_type === "undefined" || b === null) {
          return /* false */0;
        } else {
          var tag_a = a.tag | 0;
          var tag_b = b.tag | 0;
          if (tag_a === 250) {
            _a = a[0];
            continue ;
            
          } else if (tag_b === 250) {
            _b = b[0];
            continue ;
            
          } else if (tag_a === 248) {
            return +(a[1] === b[1]);
          } else if (tag_a === 251) {
            throw [
                  Caml_builtin_exceptions.invalid_argument,
                  "equal: abstract value"
                ];
          } else if (tag_a !== tag_b) {
            return /* false */0;
          } else {
            var len_a = a.length | 0;
            var len_b = b.length | 0;
            if (len_a === len_b) {
              var a$1 = a;
              var b$1 = b;
              var _i = 0;
              var same_length = len_a;
              while(true) {
                var i = _i;
                if (i === same_length) {
                  return /* true */1;
                } else if (caml_equal(a$1[i], b$1[i])) {
                  _i = i + 1 | 0;
                  continue ;
                  
                } else {
                  return /* false */0;
                }
              };
            } else {
              return /* false */0;
            }
          }
        }
      }
    }
  };
}

function caml_notequal(a, b) {
  return 1 - caml_equal(a, b);
}

function caml_greaterequal(a, b) {
  return +(caml_compare(a, b) >= 0);
}

function caml_greaterthan(a, b) {
  return +(caml_compare(a, b) > 0);
}

function caml_lessequal(a, b) {
  return +(caml_compare(a, b) <= 0);
}

function caml_lessthan(a, b) {
  return +(caml_compare(a, b) < 0);
}

var caml_int32_compare = caml_int_compare;

var caml_nativeint_compare = caml_int_compare;

exports.caml_obj_dup           = caml_obj_dup;
exports.caml_obj_truncate      = caml_obj_truncate;
exports.caml_lazy_make_forward = caml_lazy_make_forward;
exports.caml_update_dummy      = caml_update_dummy;
exports.caml_int_compare       = caml_int_compare;
exports.caml_int32_compare     = caml_int32_compare;
exports.caml_nativeint_compare = caml_nativeint_compare;
exports.caml_compare           = caml_compare;
exports.caml_equal             = caml_equal;
exports.caml_notequal          = caml_notequal;
exports.caml_greaterequal      = caml_greaterequal;
exports.caml_greaterthan       = caml_greaterthan;
exports.caml_lessthan          = caml_lessthan;
exports.caml_lessequal         = caml_lessequal;
/* No side effect */


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_builtin_exceptions = __webpack_require__(0);

function div(x, y) {
  if (y === 0) {
    throw Caml_builtin_exceptions.division_by_zero;
  } else {
    return x / y | 0;
  }
}

function mod_(x, y) {
  if (y === 0) {
    throw Caml_builtin_exceptions.division_by_zero;
  } else {
    return x % y;
  }
}

function caml_bswap16(x) {
  return ((x & 255) << 8) | ((x & 65280) >>> 8);
}

function caml_int32_bswap(x) {
  return ((x & 255) << 24) | ((x & 65280) << 8) | ((x & 16711680) >>> 8) | ((x & 4278190080) >>> 24);
}

var imul = ( Math.imul || function (x,y) {
  y |= 0; return ((((x >> 16) * y) << 16) + (x & 0xffff) * y)|0; 
}
);

var caml_nativeint_bswap = caml_int32_bswap;

exports.div                  = div;
exports.mod_                 = mod_;
exports.caml_bswap16         = caml_bswap16;
exports.caml_int32_bswap     = caml_int32_bswap;
exports.caml_nativeint_bswap = caml_nativeint_bswap;
exports.imul                 = imul;
/* imul Not a pure module */


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var repeat = ( (String.prototype.repeat && function (count,self){return self.repeat(count)}) ||
                                                  function(count , self) {
        if (self.length == 0 || count == 0) {
            return '';
        }
        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (self.length * count >= 1 << 28) {
            throw new RangeError('repeat count must not overflow maximum string size');
        }
        var rpt = '';
        for (;;) {
            if ((count & 1) == 1) {
                rpt += self;
            }
            count >>>= 1;
            if (count == 0) {
                break;
            }
            self += self;
        }
        return rpt;
    }
);

exports.repeat = repeat;
/* repeat Not a pure module */


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE


var BsBox = __webpack_require__(9);

var code = "\n  let hello thing =\n    Js.log {j|Hello $thing!|j}\n\n  let () =\n    hello (String.capitalize \"world\")\n";

var result = BsBox.compile(code);

if (result.tag) {
  console.log("Error: ", result[0][/* message */0]);
} else {
  var match = result[0];
  var warnings = match[/* warnings */1];
  var code$1 = match[/* code */0];
  if (warnings) {
    console.log("Warnings: ", warnings[0]);
  }
  console.log(code$1);
  eval(code$1);
}

exports.code   = code;
exports.result = result;
/* result Not a pure module */


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE


var Block      = __webpack_require__(2);
var Js_exn     = __webpack_require__(10);
var Pervasives = __webpack_require__(11);

__webpack_require__(20)
;

function toResult(jsObj) {
  var match = jsObj.js_code;
  if (match == null) {
    var match$1 = jsObj.text;
    if (match$1 == null) {
      return Pervasives.failwith("unknown response from compiler");
    } else {
      return /* Error */Block.__(1, [match$1]);
    }
  } else {
    return /* Ok */Block.__(0, [match]);
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

    return [res, errors ? [errors] : 0];
  }

;

function compile(code) {
  try {
    var match = _captureConsoleOutput((function () {
            return ocaml.compile(code);
          }));
    var consoleOutput = match[1];
    var param = toResult(JSON.parse(match[0]));
    if (param.tag) {
      return /* Error */Block.__(1, [/* record */[
                  /* message */param[0],
                  /* details */consoleOutput
                ]]);
    } else {
      return /* Ok */Block.__(0, [/* record */[
                  /* code */param[0],
                  /* warnings */consoleOutput
                ]]);
    }
  }
  catch (raw_exn){
    var exn = Js_exn.internalToOCamlException(raw_exn);
    return /* Error */Block.__(1, [/* record */[
                /* message */"Unrecognized compiler output: " + (String(exn) + ""),
                /* details : None */0
              ]]);
  }
}

exports.compile = compile;
/*  Not a pure module */

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_exceptions = __webpack_require__(4);

var $$Error = Caml_exceptions.create("Js_exn.Error");

function internalToOCamlException(e) {
  if (Caml_exceptions.isCamlExceptionOrOpenVariant(e)) {
    return e;
  } else {
    return [
            $$Error,
            e
          ];
  }
}

function raiseError(str) {
  throw new Error(str);
}

function raiseEvalError(str) {
  throw new EvalError(str);
}

function raiseRangeError(str) {
  throw new RangeError(str);
}

function raiseReferenceError(str) {
  throw new ReferenceError(str);
}

function raiseSyntaxError(str) {
  throw new SyntaxError(str);
}

function raiseTypeError(str) {
  throw new TypeError(str);
}

function raiseUriError(str) {
  throw new URIError(str);
}

exports.$$Error                  = $$Error;
exports.internalToOCamlException = internalToOCamlException;
exports.raiseError               = raiseError;
exports.raiseEvalError           = raiseEvalError;
exports.raiseRangeError          = raiseRangeError;
exports.raiseReferenceError      = raiseReferenceError;
exports.raiseSyntaxError         = raiseSyntaxError;
exports.raiseTypeError           = raiseTypeError;
exports.raiseUriError            = raiseUriError;
/* No side effect */


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Curry                    = __webpack_require__(3);
var Caml_io                  = __webpack_require__(13);
var Caml_obj                 = __webpack_require__(5);
var Caml_sys                 = __webpack_require__(14);
var Caml_format              = __webpack_require__(15);
var Caml_string              = __webpack_require__(17);
var Caml_exceptions          = __webpack_require__(4);
var Caml_missing_polyfill    = __webpack_require__(18);
var Caml_builtin_exceptions  = __webpack_require__(0);
var CamlinternalFormatBasics = __webpack_require__(19);

function failwith(s) {
  throw [
        Caml_builtin_exceptions.failure,
        s
      ];
}

function invalid_arg(s) {
  throw [
        Caml_builtin_exceptions.invalid_argument,
        s
      ];
}

var Exit = Caml_exceptions.create("Pervasives.Exit");

function min(x, y) {
  if (Caml_obj.caml_lessequal(x, y)) {
    return x;
  } else {
    return y;
  }
}

function max(x, y) {
  if (Caml_obj.caml_greaterequal(x, y)) {
    return x;
  } else {
    return y;
  }
}

function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x | 0;
  }
}

function lnot(x) {
  return x ^ -1;
}

var min_int = -2147483648;

function $caret(a, b) {
  return a + b;
}

function char_of_int(n) {
  if (n < 0 || n > 255) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "char_of_int"
        ];
  } else {
    return n;
  }
}

function string_of_bool(b) {
  if (b) {
    return "true";
  } else {
    return "false";
  }
}

function bool_of_string(param) {
  switch (param) {
    case "false" : 
        return /* false */0;
    case "true" : 
        return /* true */1;
    default:
      throw [
            Caml_builtin_exceptions.invalid_argument,
            "bool_of_string"
          ];
  }
}

function string_of_int(param) {
  return "" + param;
}

function valid_float_lexem(s) {
  var l = s.length;
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= l) {
      return $caret(s, ".");
    } else {
      var match = Caml_string.get(s, i);
      if (match >= 48) {
        if (match >= 58) {
          return s;
        } else {
          _i = i + 1 | 0;
          continue ;
          
        }
      } else if (match !== 45) {
        return s;
      } else {
        _i = i + 1 | 0;
        continue ;
        
      }
    }
  };
}

function string_of_float(f) {
  return valid_float_lexem(Caml_format.caml_format_float("%.12g", f));
}

function $at(l1, l2) {
  if (l1) {
    return /* :: */[
            l1[0],
            $at(l1[1], l2)
          ];
  } else {
    return l2;
  }
}

var stdin = Caml_io.stdin;

var stdout = Caml_io.stdout;

var stderr = Caml_io.stderr;

function open_out_gen(_, _$1, _$2) {
  return Caml_io.caml_ml_open_descriptor_out(Caml_missing_polyfill.not_implemented("caml_sys_open not implemented by bucklescript yet\n"));
}

function open_out(name) {
  return open_out_gen(/* :: */[
              /* Open_wronly */1,
              /* :: */[
                /* Open_creat */3,
                /* :: */[
                  /* Open_trunc */4,
                  /* :: */[
                    /* Open_text */7,
                    /* [] */0
                  ]
                ]
              ]
            ], 438, name);
}

function open_out_bin(name) {
  return open_out_gen(/* :: */[
              /* Open_wronly */1,
              /* :: */[
                /* Open_creat */3,
                /* :: */[
                  /* Open_trunc */4,
                  /* :: */[
                    /* Open_binary */6,
                    /* [] */0
                  ]
                ]
              ]
            ], 438, name);
}

function flush_all() {
  var _param = Caml_io.caml_ml_out_channels_list(/* () */0);
  while(true) {
    var param = _param;
    if (param) {
      try {
        Caml_io.caml_ml_flush(param[0]);
      }
      catch (exn){
        
      }
      _param = param[1];
      continue ;
      
    } else {
      return /* () */0;
    }
  };
}

function output_bytes(oc, s) {
  return Caml_io.caml_ml_output(oc, s, 0, s.length);
}

function output_string(oc, s) {
  return Caml_io.caml_ml_output(oc, s, 0, s.length);
}

function output(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "output"
        ];
  } else {
    return Caml_io.caml_ml_output(oc, s, ofs, len);
  }
}

function output_substring(oc, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "output_substring"
        ];
  } else {
    return Caml_io.caml_ml_output(oc, s, ofs, len);
  }
}

function output_value(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_output_value not implemented by bucklescript yet\n");
}

function close_out(oc) {
  Caml_io.caml_ml_flush(oc);
  return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
}

function close_out_noerr(oc) {
  try {
    Caml_io.caml_ml_flush(oc);
  }
  catch (exn){
    
  }
  try {
    return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
  }
  catch (exn$1){
    return /* () */0;
  }
}

function open_in_gen(_, _$1, _$2) {
  return Caml_io.caml_ml_open_descriptor_in(Caml_missing_polyfill.not_implemented("caml_sys_open not implemented by bucklescript yet\n"));
}

function open_in(name) {
  return open_in_gen(/* :: */[
              /* Open_rdonly */0,
              /* :: */[
                /* Open_text */7,
                /* [] */0
              ]
            ], 0, name);
}

function open_in_bin(name) {
  return open_in_gen(/* :: */[
              /* Open_rdonly */0,
              /* :: */[
                /* Open_binary */6,
                /* [] */0
              ]
            ], 0, name);
}

function input(_, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "input"
        ];
  } else {
    return Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
  }
}

function unsafe_really_input(_, _$1, _ofs, _len) {
  while(true) {
    var len = _len;
    var ofs = _ofs;
    if (len <= 0) {
      return /* () */0;
    } else {
      var r = Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
      if (r) {
        _len = len - r | 0;
        _ofs = ofs + r | 0;
        continue ;
        
      } else {
        throw Caml_builtin_exceptions.end_of_file;
      }
    }
  };
}

function really_input(ic, s, ofs, len) {
  if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "really_input"
        ];
  } else {
    return unsafe_really_input(ic, s, ofs, len);
  }
}

function really_input_string(ic, len) {
  var s = Caml_string.caml_create_string(len);
  really_input(ic, s, 0, len);
  return Caml_string.bytes_to_string(s);
}

function input_line(chan) {
  var build_result = function (buf, _pos, _param) {
    while(true) {
      var param = _param;
      var pos = _pos;
      if (param) {
        var hd = param[0];
        var len = hd.length;
        Caml_string.caml_blit_bytes(hd, 0, buf, pos - len | 0, len);
        _param = param[1];
        _pos = pos - len | 0;
        continue ;
        
      } else {
        return buf;
      }
    };
  };
  var scan = function (_accu, _len) {
    while(true) {
      var len = _len;
      var accu = _accu;
      var n = Caml_missing_polyfill.not_implemented("caml_ml_input_scan_line not implemented by bucklescript yet\n");
      if (n) {
        if (n > 0) {
          var res = Caml_string.caml_create_string(n - 1 | 0);
          Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
          Caml_io.caml_ml_input_char(chan);
          if (accu) {
            var len$1 = (len + n | 0) - 1 | 0;
            return build_result(Caml_string.caml_create_string(len$1), len$1, /* :: */[
                        res,
                        accu
                      ]);
          } else {
            return res;
          }
        } else {
          var beg = Caml_string.caml_create_string(-n | 0);
          Caml_missing_polyfill.not_implemented("caml_ml_input not implemented by bucklescript yet\n");
          _len = len - n | 0;
          _accu = /* :: */[
            beg,
            accu
          ];
          continue ;
          
        }
      } else if (accu) {
        return build_result(Caml_string.caml_create_string(len), len, accu);
      } else {
        throw Caml_builtin_exceptions.end_of_file;
      }
    };
  };
  return Caml_string.bytes_to_string(scan(/* [] */0, 0));
}

function close_in_noerr() {
  try {
    return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
  }
  catch (exn){
    return /* () */0;
  }
}

function print_char(c) {
  return Caml_io.caml_ml_output_char(stdout, c);
}

function print_string(s) {
  return output_string(stdout, s);
}

function print_bytes(s) {
  return output_bytes(stdout, s);
}

function print_int(i) {
  return output_string(stdout, "" + i);
}

function print_float(f) {
  return output_string(stdout, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
}

function print_endline(param) {
  console.log(param);
  return 0;
}

function print_newline() {
  Caml_io.caml_ml_output_char(stdout, /* "\n" */10);
  return Caml_io.caml_ml_flush(stdout);
}

function prerr_char(c) {
  return Caml_io.caml_ml_output_char(stderr, c);
}

function prerr_string(s) {
  return output_string(stderr, s);
}

function prerr_bytes(s) {
  return output_bytes(stderr, s);
}

function prerr_int(i) {
  return output_string(stderr, "" + i);
}

function prerr_float(f) {
  return output_string(stderr, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
}

function prerr_endline(param) {
  console.error(param);
  return 0;
}

function prerr_newline() {
  Caml_io.caml_ml_output_char(stderr, /* "\n" */10);
  return Caml_io.caml_ml_flush(stderr);
}

function read_line() {
  Caml_io.caml_ml_flush(stdout);
  return input_line(stdin);
}

function read_int() {
  return Caml_format.caml_int_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
}

function read_float() {
  return Caml_format.caml_float_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
}

function string_of_format(param) {
  return param[1];
}

function $caret$caret(param, param$1) {
  return /* Format */[
          CamlinternalFormatBasics.concat_fmt(param[0], param$1[0]),
          $caret(param[1], $caret("%,", param$1[1]))
        ];
}

var exit_function = [flush_all];

function at_exit(f) {
  var g = exit_function[0];
  exit_function[0] = (function () {
      Curry._1(f, /* () */0);
      return Curry._1(g, /* () */0);
    });
  return /* () */0;
}

function do_at_exit() {
  return Curry._1(exit_function[0], /* () */0);
}

function exit(retcode) {
  do_at_exit(/* () */0);
  return Caml_sys.caml_sys_exit(retcode);
}

var max_int = 2147483647;

var infinity = Infinity;

var neg_infinity = -Infinity;

var nan = NaN;

var max_float = Number.MAX_VALUE;

var min_float = Number.MIN_VALUE;

var epsilon_float = 2.220446049250313e-16;

var flush = Caml_io.caml_ml_flush;

var output_char = Caml_io.caml_ml_output_char;

var output_byte = Caml_io.caml_ml_output_char;

function output_binary_int(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_output_int not implemented by bucklescript yet\n");
}

function seek_out(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_out not implemented by bucklescript yet\n");
}

function pos_out() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_out not implemented by bucklescript yet\n");
}

function out_channel_length() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size not implemented by bucklescript yet\n");
}

function set_binary_mode_out(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode not implemented by bucklescript yet\n");
}

var input_char = Caml_io.caml_ml_input_char;

var input_byte = Caml_io.caml_ml_input_char;

function input_binary_int() {
  return Caml_missing_polyfill.not_implemented("caml_ml_input_int not implemented by bucklescript yet\n");
}

function input_value() {
  return Caml_missing_polyfill.not_implemented("caml_input_value not implemented by bucklescript yet\n");
}

function seek_in(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_in not implemented by bucklescript yet\n");
}

function pos_in() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_in not implemented by bucklescript yet\n");
}

function in_channel_length() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size not implemented by bucklescript yet\n");
}

function close_in() {
  return Caml_missing_polyfill.not_implemented("caml_ml_close_channel not implemented by bucklescript yet\n");
}

function set_binary_mode_in(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_set_binary_mode not implemented by bucklescript yet\n");
}

function LargeFile_000(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_out_64 not implemented by bucklescript yet\n");
}

function LargeFile_001() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_out_64 not implemented by bucklescript yet\n");
}

function LargeFile_002() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size_64 not implemented by bucklescript yet\n");
}

function LargeFile_003(_, _$1) {
  return Caml_missing_polyfill.not_implemented("caml_ml_seek_in_64 not implemented by bucklescript yet\n");
}

function LargeFile_004() {
  return Caml_missing_polyfill.not_implemented("caml_ml_pos_in_64 not implemented by bucklescript yet\n");
}

function LargeFile_005() {
  return Caml_missing_polyfill.not_implemented("caml_ml_channel_size_64 not implemented by bucklescript yet\n");
}

var LargeFile = [
  LargeFile_000,
  LargeFile_001,
  LargeFile_002,
  LargeFile_003,
  LargeFile_004,
  LargeFile_005
];

exports.invalid_arg         = invalid_arg;
exports.failwith            = failwith;
exports.Exit                = Exit;
exports.min                 = min;
exports.max                 = max;
exports.abs                 = abs;
exports.max_int             = max_int;
exports.min_int             = min_int;
exports.lnot                = lnot;
exports.infinity            = infinity;
exports.neg_infinity        = neg_infinity;
exports.nan                 = nan;
exports.max_float           = max_float;
exports.min_float           = min_float;
exports.epsilon_float       = epsilon_float;
exports.$caret              = $caret;
exports.char_of_int         = char_of_int;
exports.string_of_bool      = string_of_bool;
exports.bool_of_string      = bool_of_string;
exports.string_of_int       = string_of_int;
exports.string_of_float     = string_of_float;
exports.$at                 = $at;
exports.stdin               = stdin;
exports.stdout              = stdout;
exports.stderr              = stderr;
exports.print_char          = print_char;
exports.print_string        = print_string;
exports.print_bytes         = print_bytes;
exports.print_int           = print_int;
exports.print_float         = print_float;
exports.print_endline       = print_endline;
exports.print_newline       = print_newline;
exports.prerr_char          = prerr_char;
exports.prerr_string        = prerr_string;
exports.prerr_bytes         = prerr_bytes;
exports.prerr_int           = prerr_int;
exports.prerr_float         = prerr_float;
exports.prerr_endline       = prerr_endline;
exports.prerr_newline       = prerr_newline;
exports.read_line           = read_line;
exports.read_int            = read_int;
exports.read_float          = read_float;
exports.open_out            = open_out;
exports.open_out_bin        = open_out_bin;
exports.open_out_gen        = open_out_gen;
exports.flush               = flush;
exports.flush_all           = flush_all;
exports.output_char         = output_char;
exports.output_string       = output_string;
exports.output_bytes        = output_bytes;
exports.output              = output;
exports.output_substring    = output_substring;
exports.output_byte         = output_byte;
exports.output_binary_int   = output_binary_int;
exports.output_value        = output_value;
exports.seek_out            = seek_out;
exports.pos_out             = pos_out;
exports.out_channel_length  = out_channel_length;
exports.close_out           = close_out;
exports.close_out_noerr     = close_out_noerr;
exports.set_binary_mode_out = set_binary_mode_out;
exports.open_in             = open_in;
exports.open_in_bin         = open_in_bin;
exports.open_in_gen         = open_in_gen;
exports.input_char          = input_char;
exports.input_line          = input_line;
exports.input               = input;
exports.really_input        = really_input;
exports.really_input_string = really_input_string;
exports.input_byte          = input_byte;
exports.input_binary_int    = input_binary_int;
exports.input_value         = input_value;
exports.seek_in             = seek_in;
exports.pos_in              = pos_in;
exports.in_channel_length   = in_channel_length;
exports.close_in            = close_in;
exports.close_in_noerr      = close_in_noerr;
exports.set_binary_mode_in  = set_binary_mode_in;
exports.LargeFile           = LargeFile;
exports.string_of_format    = string_of_format;
exports.$caret$caret        = $caret$caret;
exports.exit                = exit;
exports.at_exit             = at_exit;
exports.valid_float_lexem   = valid_float_lexem;
exports.unsafe_really_input = unsafe_really_input;
exports.do_at_exit          = do_at_exit;
/* No side effect */


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_builtin_exceptions = __webpack_require__(0);

function caml_array_sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  };
  return result;
}

function len(_acc, _l) {
  while(true) {
    var l = _l;
    var acc = _acc;
    if (l) {
      _l = l[1];
      _acc = l[0].length + acc | 0;
      continue ;
      
    } else {
      return acc;
    }
  };
}

function fill(arr, _i, _l) {
  while(true) {
    var l = _l;
    var i = _i;
    if (l) {
      var x = l[0];
      var l$1 = x.length;
      var k = i;
      var j = 0;
      while(j < l$1) {
        arr[k] = x[j];
        k = k + 1 | 0;
        j = j + 1 | 0;
      };
      _l = l[1];
      _i = k;
      continue ;
      
    } else {
      return /* () */0;
    }
  };
}

function caml_array_concat(l) {
  var v = len(0, l);
  var result = new Array(v);
  fill(result, 0, l);
  return result;
}

function caml_array_set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    xs[index] = newval;
    return /* () */0;
  }
}

function caml_array_get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return xs[index];
  }
}

function caml_make_vect(len, init) {
  var b = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    b[i] = init;
  }
  return b;
}

function caml_array_blit(a1, i1, a2, i2, len) {
  if (i2 <= i1) {
    for(var j = 0 ,j_finish = len - 1 | 0; j <= j_finish; ++j){
      a2[j + i2 | 0] = a1[j + i1 | 0];
    }
    return /* () */0;
  } else {
    for(var j$1 = len - 1 | 0; j$1 >= 0; --j$1){
      a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
    }
    return /* () */0;
  }
}

exports.caml_array_sub    = caml_array_sub;
exports.caml_array_concat = caml_array_concat;
exports.caml_make_vect    = caml_make_vect;
exports.caml_array_blit   = caml_array_blit;
exports.caml_array_get    = caml_array_get;
exports.caml_array_set    = caml_array_set;
/* No side effect */


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var Curry                   = __webpack_require__(3);
var Caml_builtin_exceptions = __webpack_require__(0);

function $caret(prim, prim$1) {
  return prim + prim$1;
}

var stdin = undefined;

var stdout = /* record */[
  /* buffer */"",
  /* output */(function (_, s) {
      var v = s.length - 1 | 0;
      if (( (typeof process !== "undefined") && process.stdout && process.stdout.write)) {
        return ( process.stdout.write )(s);
      } else if (s[v] === "\n") {
        console.log(s.slice(0, v));
        return /* () */0;
      } else {
        console.log(s);
        return /* () */0;
      }
    })
];

var stderr = /* record */[
  /* buffer */"",
  /* output */(function (_, s) {
      var v = s.length - 1 | 0;
      if (s[v] === "\n") {
        console.log(s.slice(0, v));
        return /* () */0;
      } else {
        console.log(s);
        return /* () */0;
      }
    })
];

function caml_ml_open_descriptor_in() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_ml_open_descriptor_in not implemented"
      ];
}

function caml_ml_open_descriptor_out() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_ml_open_descriptor_out not implemented"
      ];
}

function caml_ml_flush(oc) {
  if (oc[/* buffer */0] !== "") {
    Curry._2(oc[/* output */1], oc, oc[/* buffer */0]);
    oc[/* buffer */0] = "";
    return /* () */0;
  } else {
    return 0;
  }
}

var node_std_output = (function (s){
   return (typeof process !== "undefined") && process.stdout && (process.stdout.write(s), true);
   }
);

function caml_ml_output(oc, str, offset, len) {
  var str$1 = offset === 0 && len === str.length ? str : str.slice(offset, len);
  if (( (typeof process !== "undefined") && process.stdout && process.stdout.write ) && oc === stdout) {
    return ( process.stdout.write )(str$1);
  } else {
    var id = str$1.lastIndexOf("\n");
    if (id < 0) {
      oc[/* buffer */0] = oc[/* buffer */0] + str$1;
      return /* () */0;
    } else {
      oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(0, id + 1 | 0);
      caml_ml_flush(oc);
      oc[/* buffer */0] = oc[/* buffer */0] + str$1.slice(id + 1 | 0);
      return /* () */0;
    }
  }
}

function caml_ml_output_char(oc, $$char) {
  return caml_ml_output(oc, String.fromCharCode($$char), 0, 1);
}

function caml_ml_input(_, _$1, _$2, _$3) {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_ml_input ic not implemented"
      ];
}

function caml_ml_input_char() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_ml_input_char not implemnted"
      ];
}

function caml_ml_out_channels_list() {
  return /* :: */[
          stdout,
          /* :: */[
            stderr,
            /* [] */0
          ]
        ];
}

exports.$caret                      = $caret;
exports.stdin                       = stdin;
exports.stdout                      = stdout;
exports.stderr                      = stderr;
exports.caml_ml_open_descriptor_in  = caml_ml_open_descriptor_in;
exports.caml_ml_open_descriptor_out = caml_ml_open_descriptor_out;
exports.caml_ml_flush               = caml_ml_flush;
exports.node_std_output             = node_std_output;
exports.caml_ml_output              = caml_ml_output;
exports.caml_ml_output_char         = caml_ml_output_char;
exports.caml_ml_input               = caml_ml_input;
exports.caml_ml_input_char          = caml_ml_input_char;
exports.caml_ml_out_channels_list   = caml_ml_out_channels_list;
/* stdin Not a pure module */

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var Caml_builtin_exceptions = __webpack_require__(0);

function caml_sys_getenv(s) {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    var match$1 = match.env[s];
    if (match$1 !== undefined) {
      return match$1;
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  } else {
    throw Caml_builtin_exceptions.not_found;
  }
}

function caml_sys_time() {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    return match.uptime();
  } else {
    return -1;
  }
}

function caml_sys_random_seed() {
  return /* array */[((Date.now() | 0) ^ 4294967295) * Math.random() | 0];
}

function caml_sys_system_command() {
  return 127;
}

function caml_sys_getcwd() {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    return match.cwd();
  } else {
    return "/";
  }
}

function caml_sys_get_argv() {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    if (match.argv == null) {
      return /* tuple */[
              "",
              /* array */[""]
            ];
    } else {
      return /* tuple */[
              match.argv[0],
              match.argv
            ];
    }
  } else {
    return /* tuple */[
            "",
            /* array */[""]
          ];
  }
}

function caml_sys_exit(exit_code) {
  var match = typeof (process) === "undefined" ? undefined : (process);
  if (match !== undefined) {
    return match.exit(exit_code);
  } else {
    return /* () */0;
  }
}

function caml_sys_is_directory() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_sys_is_directory not implemented"
      ];
}

function caml_sys_file_exists() {
  throw [
        Caml_builtin_exceptions.failure,
        "caml_sys_file_exists not implemented"
      ];
}

exports.caml_sys_getenv         = caml_sys_getenv;
exports.caml_sys_time           = caml_sys_time;
exports.caml_sys_random_seed    = caml_sys_random_seed;
exports.caml_sys_system_command = caml_sys_system_command;
exports.caml_sys_getcwd         = caml_sys_getcwd;
exports.caml_sys_get_argv       = caml_sys_get_argv;
exports.caml_sys_exit           = caml_sys_exit;
exports.caml_sys_is_directory   = caml_sys_is_directory;
exports.caml_sys_file_exists    = caml_sys_file_exists;
/* No side effect */

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Curry                   = __webpack_require__(3);
var Caml_int32              = __webpack_require__(6);
var Caml_int64              = __webpack_require__(16);
var Caml_utils              = __webpack_require__(7);
var Caml_builtin_exceptions = __webpack_require__(0);

function caml_failwith(s) {
  throw [
        Caml_builtin_exceptions.failure,
        s
      ];
}

function parse_digit(c) {
  if (c >= 65) {
    if (c >= 97) {
      if (c >= 123) {
        return -1;
      } else {
        return c - 87 | 0;
      }
    } else if (c >= 91) {
      return -1;
    } else {
      return c - 55 | 0;
    }
  } else if (c > 57 || c < 48) {
    return -1;
  } else {
    return c - /* "0" */48 | 0;
  }
}

function int_of_string_base(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    case 3 : 
        return 2;
    
  }
}

function parse_sign_and_base(s) {
  var sign = 1;
  var base = /* Dec */2;
  var i = 0;
  if (s[i] === "-") {
    sign = -1;
    i = i + 1 | 0;
  }
  var match = s.charCodeAt(i);
  var match$1 = s.charCodeAt(i + 1 | 0);
  if (match === 48) {
    if (match$1 >= 89) {
      if (match$1 !== 98) {
        if (match$1 !== 111) {
          if (match$1 === 120) {
            base = /* Hex */1;
            i = i + 2 | 0;
          }
          
        } else {
          base = /* Oct */0;
          i = i + 2 | 0;
        }
      } else {
        base = /* Bin */3;
        i = i + 2 | 0;
      }
    } else if (match$1 !== 66) {
      if (match$1 !== 79) {
        if (match$1 >= 88) {
          base = /* Hex */1;
          i = i + 2 | 0;
        }
        
      } else {
        base = /* Oct */0;
        i = i + 2 | 0;
      }
    } else {
      base = /* Bin */3;
      i = i + 2 | 0;
    }
  }
  return /* tuple */[
          i,
          sign,
          base
        ];
}

function caml_int_of_string(s) {
  var match = parse_sign_and_base(s);
  var i = match[0];
  var base = int_of_string_base(match[2]);
  var threshold = 4294967295;
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = parse_digit(c);
  if (d < 0 || d >= base) {
    throw [
          Caml_builtin_exceptions.failure,
          "int_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
          
        } else {
          var v = parse_digit(a);
          if (v < 0 || v >= base) {
            throw [
                  Caml_builtin_exceptions.failure,
                  "int_of_string"
                ];
          } else {
            var acc$1 = base * acc + v;
            if (acc$1 > threshold) {
              throw [
                    Caml_builtin_exceptions.failure,
                    "int_of_string"
                  ];
            } else {
              _k = k + 1 | 0;
              _acc = acc$1;
              continue ;
              
            }
          }
        }
      }
    };
  };
  var res = match[1] * aux(d, i + 1 | 0);
  var or_res = res | 0;
  if (base === 10 && res !== or_res) {
    throw [
          Caml_builtin_exceptions.failure,
          "int_of_string"
        ];
  }
  return or_res;
}

function caml_int64_of_string(s) {
  var match = parse_sign_and_base(s);
  var hbase = match[2];
  var i = match[0];
  var base = Caml_int64.of_int32(int_of_string_base(hbase));
  var sign = Caml_int64.of_int32(match[1]);
  var threshold;
  switch (hbase) {
    case 0 : 
        threshold = /* int64 */[
          /* hi */536870911,
          /* lo */4294967295
        ];
        break;
    case 1 : 
        threshold = /* int64 */[
          /* hi */268435455,
          /* lo */4294967295
        ];
        break;
    case 2 : 
        threshold = /* int64 */[
          /* hi */429496729,
          /* lo */2576980377
        ];
        break;
    case 3 : 
        threshold = /* int64 */[
          /* hi */2147483647,
          /* lo */4294967295
        ];
        break;
    
  }
  var len = s.length;
  var c = i < len ? s.charCodeAt(i) : /* "\000" */0;
  var d = Caml_int64.of_int32(parse_digit(c));
  if (Caml_int64.lt(d, /* int64 */[
          /* hi */0,
          /* lo */0
        ]) || Caml_int64.ge(d, base)) {
    throw [
          Caml_builtin_exceptions.failure,
          "int64_of_string"
        ];
  }
  var aux = function (_acc, _k) {
    while(true) {
      var k = _k;
      var acc = _acc;
      if (k === len) {
        return acc;
      } else {
        var a = s.charCodeAt(k);
        if (a === /* "_" */95) {
          _k = k + 1 | 0;
          continue ;
          
        } else {
          var v = Caml_int64.of_int32(parse_digit(a));
          if (Caml_int64.lt(v, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ]) || Caml_int64.ge(v, base) || Caml_int64.gt(acc, threshold)) {
            throw [
                  Caml_builtin_exceptions.failure,
                  "int64_of_string"
                ];
          } else {
            var acc$1 = Caml_int64.add(Caml_int64.mul(base, acc), v);
            _k = k + 1 | 0;
            _acc = acc$1;
            continue ;
            
          }
        }
      }
    };
  };
  var res = Caml_int64.mul(sign, aux(d, i + 1 | 0));
  var or_res = Caml_int64.or_(res, /* int64 */[
        /* hi */0,
        /* lo */0
      ]);
  if (Caml_int64.eq(base, /* int64 */[
          /* hi */0,
          /* lo */10
        ]) && Caml_int64.neq(res, or_res)) {
    throw [
          Caml_builtin_exceptions.failure,
          "int64_of_string"
        ];
  }
  return or_res;
}

function int_of_base(param) {
  switch (param) {
    case 0 : 
        return 8;
    case 1 : 
        return 16;
    case 2 : 
        return 10;
    
  }
}

function lowercase(c) {
  if (c >= /* "A" */65 && c <= /* "Z" */90 || c >= /* "\192" */192 && c <= /* "\214" */214 || c >= /* "\216" */216 && c <= /* "\222" */222) {
    return c + 32 | 0;
  } else {
    return c;
  }
}

function parse_format(fmt) {
  var len = fmt.length;
  if (len > 31) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "format_int: format too long"
        ];
  }
  var f = /* record */[
    /* justify */"+",
    /* signstyle */"-",
    /* filter */" ",
    /* alternate : false */0,
    /* base : Dec */2,
    /* signedconv : false */0,
    /* width */0,
    /* uppercase : false */0,
    /* sign */1,
    /* prec */-1,
    /* conv */"f"
  ];
  var _i = 0;
  while(true) {
    var i = _i;
    if (i >= len) {
      return f;
    } else {
      var c = fmt.charCodeAt(i);
      var exit = 0;
      if (c >= 69) {
        if (c >= 88) {
          if (c >= 121) {
            exit = 1;
          } else {
            switch (c - 88 | 0) {
              case 0 : 
                  f[/* base */4] = /* Hex */1;
                  f[/* uppercase */7] = /* true */1;
                  _i = i + 1 | 0;
                  continue ;
                  case 13 : 
              case 14 : 
              case 15 : 
                  exit = 5;
                  break;
              case 12 : 
              case 17 : 
                  exit = 4;
                  break;
              case 23 : 
                  f[/* base */4] = /* Oct */0;
                  _i = i + 1 | 0;
                  continue ;
                  case 29 : 
                  f[/* base */4] = /* Dec */2;
                  _i = i + 1 | 0;
                  continue ;
                  case 1 : 
              case 2 : 
              case 3 : 
              case 4 : 
              case 5 : 
              case 6 : 
              case 7 : 
              case 8 : 
              case 9 : 
              case 10 : 
              case 11 : 
              case 16 : 
              case 18 : 
              case 19 : 
              case 20 : 
              case 21 : 
              case 22 : 
              case 24 : 
              case 25 : 
              case 26 : 
              case 27 : 
              case 28 : 
              case 30 : 
              case 31 : 
                  exit = 1;
                  break;
              case 32 : 
                  f[/* base */4] = /* Hex */1;
                  _i = i + 1 | 0;
                  continue ;
                  
            }
          }
        } else if (c >= 72) {
          exit = 1;
        } else {
          f[/* signedconv */5] = /* true */1;
          f[/* uppercase */7] = /* true */1;
          f[/* conv */10] = String.fromCharCode(lowercase(c));
          _i = i + 1 | 0;
          continue ;
          
        }
      } else {
        var switcher = c - 32 | 0;
        if (switcher > 25 || switcher < 0) {
          exit = 1;
        } else {
          switch (switcher) {
            case 3 : 
                f[/* alternate */3] = /* true */1;
                _i = i + 1 | 0;
                continue ;
                case 0 : 
            case 11 : 
                exit = 2;
                break;
            case 13 : 
                f[/* justify */0] = "-";
                _i = i + 1 | 0;
                continue ;
                case 14 : 
                f[/* prec */9] = 0;
                var j = i + 1 | 0;
                while((function(j){
                    return function () {
                      var w = fmt.charCodeAt(j) - /* "0" */48 | 0;
                      return +(w >= 0 && w <= 9);
                    }
                    }(j))()) {
                  f[/* prec */9] = (Caml_int32.imul(f[/* prec */9], 10) + fmt.charCodeAt(j) | 0) - /* "0" */48 | 0;
                  j = j + 1 | 0;
                };
                _i = j;
                continue ;
                case 1 : 
            case 2 : 
            case 4 : 
            case 5 : 
            case 6 : 
            case 7 : 
            case 8 : 
            case 9 : 
            case 10 : 
            case 12 : 
            case 15 : 
                exit = 1;
                break;
            case 16 : 
                f[/* filter */2] = "0";
                _i = i + 1 | 0;
                continue ;
                case 17 : 
            case 18 : 
            case 19 : 
            case 20 : 
            case 21 : 
            case 22 : 
            case 23 : 
            case 24 : 
            case 25 : 
                exit = 3;
                break;
            
          }
        }
      }
      switch (exit) {
        case 1 : 
            _i = i + 1 | 0;
            continue ;
            case 2 : 
            f[/* signstyle */1] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            case 3 : 
            f[/* width */6] = 0;
            var j$1 = i;
            while((function(j$1){
                return function () {
                  var w = fmt.charCodeAt(j$1) - /* "0" */48 | 0;
                  return +(w >= 0 && w <= 9);
                }
                }(j$1))()) {
              f[/* width */6] = (Caml_int32.imul(f[/* width */6], 10) + fmt.charCodeAt(j$1) | 0) - /* "0" */48 | 0;
              j$1 = j$1 + 1 | 0;
            };
            _i = j$1;
            continue ;
            case 4 : 
            f[/* signedconv */5] = /* true */1;
            f[/* base */4] = /* Dec */2;
            _i = i + 1 | 0;
            continue ;
            case 5 : 
            f[/* signedconv */5] = /* true */1;
            f[/* conv */10] = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue ;
            
      }
    }
  };
}

function finish_formatting(param, rawbuffer) {
  var justify = param[/* justify */0];
  var signstyle = param[/* signstyle */1];
  var filter = param[/* filter */2];
  var alternate = param[/* alternate */3];
  var base = param[/* base */4];
  var signedconv = param[/* signedconv */5];
  var width = param[/* width */6];
  var uppercase = param[/* uppercase */7];
  var sign = param[/* sign */8];
  var len = rawbuffer.length;
  if (signedconv && (sign < 0 || signstyle !== "-")) {
    len = len + 1 | 0;
  }
  if (alternate) {
    if (base) {
      if (base === /* Hex */1) {
        len = len + 2 | 0;
      }
      
    } else {
      len = len + 1 | 0;
    }
  }
  var buffer = "";
  if (justify === "+" && filter === " ") {
    for(var i = len ,i_finish = width - 1 | 0; i <= i_finish; ++i){
      buffer = buffer + filter;
    }
  }
  if (signedconv) {
    if (sign < 0) {
      buffer = buffer + "-";
    } else if (signstyle !== "-") {
      buffer = buffer + signstyle;
    }
    
  }
  if (alternate && base === /* Oct */0) {
    buffer = buffer + "0";
  }
  if (alternate && base === /* Hex */1) {
    buffer = buffer + "0x";
  }
  if (justify === "+" && filter === "0") {
    for(var i$1 = len ,i_finish$1 = width - 1 | 0; i$1 <= i_finish$1; ++i$1){
      buffer = buffer + filter;
    }
  }
  buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
  if (justify === "-") {
    for(var i$2 = len ,i_finish$2 = width - 1 | 0; i$2 <= i_finish$2; ++i$2){
      buffer = buffer + " ";
    }
  }
  return buffer;
}

function caml_format_int(fmt, i) {
  if (fmt === "%d") {
    return String(i);
  } else {
    var f = parse_format(fmt);
    var f$1 = f;
    var i$1 = i;
    var i$2 = i$1 < 0 ? (
        f$1[/* signedconv */5] ? (f$1[/* sign */8] = -1, -i$1) : (i$1 >>> 0)
      ) : i$1;
    var s = i$2.toString(int_of_base(f$1[/* base */4]));
    if (f$1[/* prec */9] >= 0) {
      f$1[/* filter */2] = " ";
      var n = f$1[/* prec */9] - s.length | 0;
      if (n > 0) {
        s = Caml_utils.repeat(n, "0") + s;
      }
      
    }
    return finish_formatting(f$1, s);
  }
}

function caml_int64_format(fmt, x) {
  var f = parse_format(fmt);
  var x$1 = f[/* signedconv */5] && Caml_int64.lt(x, /* int64 */[
        /* hi */0,
        /* lo */0
      ]) ? (f[/* sign */8] = -1, Caml_int64.neg(x)) : x;
  var s = "";
  var match = f[/* base */4];
  switch (match) {
    case 0 : 
        var wbase = /* int64 */[
          /* hi */0,
          /* lo */8
        ];
        var cvtbl = "01234567";
        if (Caml_int64.lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y = Caml_int64.discard_sign(x$1);
          var match$1 = Caml_int64.div_mod(y, wbase);
          var quotient = Caml_int64.add(/* int64 */[
                /* hi */268435456,
                /* lo */0
              ], match$1[0]);
          var modulus = match$1[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          while(Caml_int64.neq(quotient, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$2 = Caml_int64.div_mod(quotient, wbase);
            quotient = match$2[0];
            modulus = match$2[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus[1] | 0)) + s;
          };
        } else {
          var match$3 = Caml_int64.div_mod(x$1, wbase);
          var quotient$1 = match$3[0];
          var modulus$1 = match$3[1];
          s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          while(Caml_int64.neq(quotient$1, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$4 = Caml_int64.div_mod(quotient$1, wbase);
            quotient$1 = match$4[0];
            modulus$1 = match$4[1];
            s = String.fromCharCode(cvtbl.charCodeAt(modulus$1[1] | 0)) + s;
          };
        }
        break;
    case 1 : 
        s = Caml_int64.to_hex(x$1) + s;
        break;
    case 2 : 
        var wbase$1 = /* int64 */[
          /* hi */0,
          /* lo */10
        ];
        var cvtbl$1 = "0123456789";
        if (Caml_int64.lt(x$1, /* int64 */[
                /* hi */0,
                /* lo */0
              ])) {
          var y$1 = Caml_int64.discard_sign(x$1);
          var match$5 = Caml_int64.div_mod(y$1, wbase$1);
          var match$6 = Caml_int64.div_mod(Caml_int64.add(/* int64 */[
                    /* hi */0,
                    /* lo */8
                  ], match$5[1]), wbase$1);
          var quotient$2 = Caml_int64.add(Caml_int64.add(/* int64 */[
                    /* hi */214748364,
                    /* lo */3435973836
                  ], match$5[0]), match$6[0]);
          var modulus$2 = match$6[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          while(Caml_int64.neq(quotient$2, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$7 = Caml_int64.div_mod(quotient$2, wbase$1);
            quotient$2 = match$7[0];
            modulus$2 = match$7[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$2[1] | 0)) + s;
          };
        } else {
          var match$8 = Caml_int64.div_mod(x$1, wbase$1);
          var quotient$3 = match$8[0];
          var modulus$3 = match$8[1];
          s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          while(Caml_int64.neq(quotient$3, /* int64 */[
                  /* hi */0,
                  /* lo */0
                ])) {
            var match$9 = Caml_int64.div_mod(quotient$3, wbase$1);
            quotient$3 = match$9[0];
            modulus$3 = match$9[1];
            s = String.fromCharCode(cvtbl$1.charCodeAt(modulus$3[1] | 0)) + s;
          };
        }
        break;
    
  }
  if (f[/* prec */9] >= 0) {
    f[/* filter */2] = " ";
    var n = f[/* prec */9] - s.length | 0;
    if (n > 0) {
      s = Caml_utils.repeat(n, "0") + s;
    }
    
  }
  return finish_formatting(f, s);
}

function caml_format_float(fmt, x) {
  var f = parse_format(fmt);
  var prec = f[/* prec */9] < 0 ? 6 : f[/* prec */9];
  var x$1 = x < 0 ? (f[/* sign */8] = -1, -x) : x;
  var s = "";
  if (isNaN(x$1)) {
    s = "nan";
    f[/* filter */2] = " ";
  } else if (isFinite(x$1)) {
    var match = f[/* conv */10];
    switch (match) {
      case "e" : 
          s = x$1.toExponential(prec);
          var i = s.length;
          if (s[i - 3 | 0] === "e") {
            s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
          }
          break;
      case "f" : 
          s = x$1.toFixed(prec);
          break;
      case "g" : 
          var prec$1 = prec !== 0 ? prec : 1;
          s = x$1.toExponential(prec$1 - 1 | 0);
          var j = s.indexOf("e");
          var exp = Number(s.slice(j + 1 | 0)) | 0;
          if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
            var i$1 = j - 1 | 0;
            while(s[i$1] === "0") {
              i$1 = i$1 - 1 | 0;
            };
            if (s[i$1] === ".") {
              i$1 = i$1 - 1 | 0;
            }
            s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
            var i$2 = s.length;
            if (s[i$2 - 3 | 0] === "e") {
              s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
            }
            
          } else {
            var p = prec$1;
            if (exp < 0) {
              p = p - (exp + 1 | 0) | 0;
              s = x$1.toFixed(p);
            } else {
              while((function () {
                      s = x$1.toFixed(p);
                      return +(s.length > (prec$1 + 1 | 0));
                    })()) {
                p = p - 1 | 0;
              };
            }
            if (p !== 0) {
              var k = s.length - 1 | 0;
              while(s[k] === "0") {
                k = k - 1 | 0;
              };
              if (s[k] === ".") {
                k = k - 1 | 0;
              }
              s = s.slice(0, k + 1 | 0);
            }
            
          }
          break;
      default:
        
    }
  } else {
    s = "inf";
    f[/* filter */2] = " ";
  }
  return finish_formatting(f, s);
}

var float_of_string = (
  function (s, caml_failwith) {
    var res = +s;
    if ((s.length > 0) && (res === res))
        return res;
    s = s.replace(/_/g, "");
    res = +s;
    if (((s.length > 0) && (res === res)) || /^[+-]?nan$/i.test(s)) {
        return res;
    }
    ;
    if (/^ *0x[0-9a-f_]+p[+-]?[0-9_]+/i.test(s)) {
        var pidx = s.indexOf('p');
        pidx = (pidx == -1) ? s.indexOf('P') : pidx;
        var exp = +s.substring(pidx + 1);
        res = +s.substring(0, pidx);
        return res * Math.pow(2, exp);
    }
    if (/^\+?inf(inity)?$/i.test(s))
        return Infinity;
    if (/^-inf(inity)?$/i.test(s))
        return -Infinity;
    caml_failwith("float_of_string");
}

);

function caml_float_of_string(s) {
  return Curry._2(float_of_string, s, caml_failwith);
}

var caml_nativeint_format = caml_format_int;

var caml_int32_format = caml_format_int;

var caml_int32_of_string = caml_int_of_string;

var caml_nativeint_of_string = caml_int_of_string;

exports.caml_format_float        = caml_format_float;
exports.caml_format_int          = caml_format_int;
exports.caml_nativeint_format    = caml_nativeint_format;
exports.caml_int32_format        = caml_int32_format;
exports.caml_float_of_string     = caml_float_of_string;
exports.caml_int64_format        = caml_int64_format;
exports.caml_int_of_string       = caml_int_of_string;
exports.caml_int32_of_string     = caml_int32_of_string;
exports.caml_int64_of_string     = caml_int64_of_string;
exports.caml_nativeint_of_string = caml_nativeint_of_string;
/* float_of_string Not a pure module */


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_obj                = __webpack_require__(5);
var Caml_int32              = __webpack_require__(6);
var Caml_utils              = __webpack_require__(7);
var Caml_builtin_exceptions = __webpack_require__(0);

var min_int = /* record */[
  /* hi */-2147483648,
  /* lo */0
];

var max_int = /* record */[
  /* hi */134217727,
  /* lo */1
];

var one = /* record */[
  /* hi */0,
  /* lo */1
];

var zero = /* record */[
  /* hi */0,
  /* lo */0
];

var neg_one = /* record */[
  /* hi */-1,
  /* lo */4294967295
];

function neg_signed(x) {
  return +((x & 2147483648) !== 0);
}

function add(param, param$1) {
  var other_low_ = param$1[/* lo */1];
  var this_low_ = param[/* lo */1];
  var lo = this_low_ + other_low_ & 4294967295;
  var overflow = neg_signed(this_low_) && (neg_signed(other_low_) || !neg_signed(lo)) || neg_signed(other_low_) && !neg_signed(lo) ? 1 : 0;
  var hi = param[/* hi */0] + param$1[/* hi */0] + overflow & 4294967295;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function not(param) {
  var hi = param[/* hi */0] ^ -1;
  var lo = param[/* lo */1] ^ -1;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function eq(x, y) {
  if (x[/* hi */0] === y[/* hi */0]) {
    return +(x[/* lo */1] === y[/* lo */1]);
  } else {
    return /* false */0;
  }
}

function neg(x) {
  if (eq(x, min_int)) {
    return min_int;
  } else {
    return add(not(x), one);
  }
}

function sub(x, y) {
  return add(x, neg(y));
}

function lsl_(x, numBits) {
  if (numBits) {
    var lo = x[/* lo */1];
    if (numBits >= 32) {
      return /* record */[
              /* hi */(lo << (numBits - 32 | 0)),
              /* lo */0
            ];
    } else {
      var hi = (lo >>> (32 - numBits | 0)) | (x[/* hi */0] << numBits);
      return /* record */[
              /* hi */hi,
              /* lo */((lo << numBits) >>> 0)
            ];
    }
  } else {
    return x;
  }
}

function lsr_(x, numBits) {
  if (numBits) {
    var hi = x[/* hi */0];
    var offset = numBits - 32 | 0;
    if (offset) {
      if (offset > 0) {
        var lo = (hi >>> offset);
        return /* record */[
                /* hi */0,
                /* lo */(lo >>> 0)
              ];
      } else {
        var hi$1 = (hi >>> numBits);
        var lo$1 = (hi << (-offset | 0)) | (x[/* lo */1] >>> numBits);
        return /* record */[
                /* hi */hi$1,
                /* lo */(lo$1 >>> 0)
              ];
      }
    } else {
      return /* record */[
              /* hi */0,
              /* lo */(hi >>> 0)
            ];
    }
  } else {
    return x;
  }
}

function asr_(x, numBits) {
  if (numBits) {
    var hi = x[/* hi */0];
    if (numBits < 32) {
      var hi$1 = (hi >> numBits);
      var lo = (hi << (32 - numBits | 0)) | (x[/* lo */1] >>> numBits);
      return /* record */[
              /* hi */hi$1,
              /* lo */(lo >>> 0)
            ];
    } else {
      var lo$1 = (hi >> (numBits - 32 | 0));
      return /* record */[
              /* hi */hi >= 0 ? 0 : -1,
              /* lo */(lo$1 >>> 0)
            ];
    }
  } else {
    return x;
  }
}

function is_zero(param) {
  if (param[/* hi */0] !== 0 || param[/* lo */1] !== 0) {
    return /* false */0;
  } else {
    return /* true */1;
  }
}

function mul(_this, _other) {
  while(true) {
    var other = _other;
    var $$this = _this;
    var exit = 0;
    var lo;
    var this_hi = $$this[/* hi */0];
    var exit$1 = 0;
    var exit$2 = 0;
    var exit$3 = 0;
    if (this_hi !== 0) {
      exit$3 = 4;
    } else if ($$this[/* lo */1] !== 0) {
      exit$3 = 4;
    } else {
      return zero;
    }
    if (exit$3 === 4) {
      if (other[/* hi */0] !== 0) {
        exit$2 = 3;
      } else if (other[/* lo */1] !== 0) {
        exit$2 = 3;
      } else {
        return zero;
      }
    }
    if (exit$2 === 3) {
      if (this_hi !== -2147483648) {
        exit$1 = 2;
      } else if ($$this[/* lo */1] !== 0) {
        exit$1 = 2;
      } else {
        lo = other[/* lo */1];
        exit = 1;
      }
    }
    if (exit$1 === 2) {
      var other_hi = other[/* hi */0];
      var lo$1 = $$this[/* lo */1];
      var exit$4 = 0;
      if (other_hi !== -2147483648) {
        exit$4 = 3;
      } else if (other[/* lo */1] !== 0) {
        exit$4 = 3;
      } else {
        lo = lo$1;
        exit = 1;
      }
      if (exit$4 === 3) {
        var other_lo = other[/* lo */1];
        if (this_hi < 0) {
          if (other_hi < 0) {
            _other = neg(other);
            _this = neg($$this);
            continue ;
            
          } else {
            return neg(mul(neg($$this), other));
          }
        } else if (other_hi < 0) {
          return neg(mul($$this, neg(other)));
        } else {
          var a48 = (this_hi >>> 16);
          var a32 = this_hi & 65535;
          var a16 = (lo$1 >>> 16);
          var a00 = lo$1 & 65535;
          var b48 = (other_hi >>> 16);
          var b32 = other_hi & 65535;
          var b16 = (other_lo >>> 16);
          var b00 = other_lo & 65535;
          var c48 = 0;
          var c32 = 0;
          var c16 = 0;
          var c00 = a00 * b00;
          c16 = (c00 >>> 16) + a16 * b00;
          c32 = (c16 >>> 16);
          c16 = (c16 & 65535) + a00 * b16;
          c32 = c32 + (c16 >>> 16) + a32 * b00;
          c48 = (c32 >>> 16);
          c32 = (c32 & 65535) + a16 * b16;
          c48 += (c32 >>> 16);
          c32 = (c32 & 65535) + a00 * b32;
          c48 += (c32 >>> 16);
          c32 = c32 & 65535;
          c48 = c48 + (a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48) & 65535;
          var hi = c32 | (c48 << 16);
          var lo$2 = c00 & 65535 | ((c16 & 65535) << 16);
          return /* record */[
                  /* hi */hi,
                  /* lo */(lo$2 >>> 0)
                ];
        }
      }
      
    }
    if (exit === 1) {
      if ((lo & 1) === 0) {
        return zero;
      } else {
        return min_int;
      }
    }
    
  };
}

function swap(param) {
  var hi = Caml_int32.caml_int32_bswap(param[/* lo */1]);
  var lo = Caml_int32.caml_int32_bswap(param[/* hi */0]);
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function xor(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] ^ param$1[/* hi */0],
          /* lo */((param[/* lo */1] ^ param$1[/* lo */1]) >>> 0)
        ];
}

function or_(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] | param$1[/* hi */0],
          /* lo */((param[/* lo */1] | param$1[/* lo */1]) >>> 0)
        ];
}

function and_(param, param$1) {
  return /* record */[
          /* hi */param[/* hi */0] & param$1[/* hi */0],
          /* lo */((param[/* lo */1] & param$1[/* lo */1]) >>> 0)
        ];
}

function ge(param, param$1) {
  var other_hi = param$1[/* hi */0];
  var hi = param[/* hi */0];
  if (hi > other_hi) {
    return /* true */1;
  } else if (hi < other_hi) {
    return /* false */0;
  } else {
    return +(param[/* lo */1] >= param$1[/* lo */1]);
  }
}

function neq(x, y) {
  return 1 - eq(x, y);
}

function lt(x, y) {
  return 1 - ge(x, y);
}

function gt(x, y) {
  if (x[/* hi */0] > y[/* hi */0]) {
    return /* true */1;
  } else if (x[/* hi */0] < y[/* hi */0]) {
    return /* false */0;
  } else {
    return +(x[/* lo */1] > y[/* lo */1]);
  }
}

function le(x, y) {
  return 1 - gt(x, y);
}

function to_float(param) {
  return param[/* hi */0] * (0x100000000) + param[/* lo */1];
}

var two_ptr_32_dbl = Math.pow(2, 32);

var two_ptr_63_dbl = Math.pow(2, 63);

var neg_two_ptr_63 = -Math.pow(2, 63);

function of_float(x) {
  if (isNaN(x) || !isFinite(x)) {
    return zero;
  } else if (x <= neg_two_ptr_63) {
    return min_int;
  } else if (x + 1 >= two_ptr_63_dbl) {
    return max_int;
  } else if (x < 0) {
    return neg(of_float(-x));
  } else {
    var hi = x / two_ptr_32_dbl | 0;
    var lo = x % two_ptr_32_dbl | 0;
    return /* record */[
            /* hi */hi,
            /* lo */(lo >>> 0)
          ];
  }
}

function div(_self, _other) {
  while(true) {
    var other = _other;
    var self = _self;
    var self_hi = self[/* hi */0];
    var exit = 0;
    var exit$1 = 0;
    if (other[/* hi */0] !== 0) {
      exit$1 = 2;
    } else if (other[/* lo */1] !== 0) {
      exit$1 = 2;
    } else {
      throw Caml_builtin_exceptions.division_by_zero;
    }
    if (exit$1 === 2) {
      if (self_hi !== -2147483648) {
        if (self_hi !== 0) {
          exit = 1;
        } else if (self[/* lo */1] !== 0) {
          exit = 1;
        } else {
          return zero;
        }
      } else if (self[/* lo */1] !== 0) {
        exit = 1;
      } else if (eq(other, one) || eq(other, neg_one)) {
        return self;
      } else if (eq(other, min_int)) {
        return one;
      } else {
        var other_hi = other[/* hi */0];
        var half_this = asr_(self, 1);
        var approx = lsl_(div(half_this, other), 1);
        var exit$2 = 0;
        if (approx[/* hi */0] !== 0) {
          exit$2 = 3;
        } else if (approx[/* lo */1] !== 0) {
          exit$2 = 3;
        } else if (other_hi < 0) {
          return one;
        } else {
          return neg(one);
        }
        if (exit$2 === 3) {
          var y = mul(other, approx);
          var rem = add(self, neg(y));
          return add(approx, div(rem, other));
        }
        
      }
    }
    if (exit === 1) {
      var other_hi$1 = other[/* hi */0];
      var exit$3 = 0;
      if (other_hi$1 !== -2147483648) {
        exit$3 = 2;
      } else if (other[/* lo */1] !== 0) {
        exit$3 = 2;
      } else {
        return zero;
      }
      if (exit$3 === 2) {
        if (self_hi < 0) {
          if (other_hi$1 < 0) {
            _other = neg(other);
            _self = neg(self);
            continue ;
            
          } else {
            return neg(div(neg(self), other));
          }
        } else if (other_hi$1 < 0) {
          return neg(div(self, neg(other)));
        } else {
          var res = zero;
          var rem$1 = self;
          while(ge(rem$1, other)) {
            var approx$1 = Math.max(1, Math.floor(to_float(rem$1) / to_float(other)));
            var log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
            var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
            var approxRes = of_float(approx$1);
            var approxRem = mul(approxRes, other);
            while(approxRem[/* hi */0] < 0 || gt(approxRem, rem$1)) {
              approx$1 -= delta;
              approxRes = of_float(approx$1);
              approxRem = mul(approxRes, other);
            };
            if (is_zero(approxRes)) {
              approxRes = one;
            }
            res = add(res, approxRes);
            rem$1 = add(rem$1, neg(approxRem));
          };
          return res;
        }
      }
      
    }
    
  };
}

function mod_(self, other) {
  var y = mul(div(self, other), other);
  return add(self, neg(y));
}

function div_mod(self, other) {
  var quotient = div(self, other);
  var y = mul(quotient, other);
  return /* tuple */[
          quotient,
          add(self, neg(y))
        ];
}

function compare(self, other) {
  var v = Caml_obj.caml_nativeint_compare(self[/* hi */0], other[/* hi */0]);
  if (v) {
    return v;
  } else {
    return Caml_obj.caml_nativeint_compare(self[/* lo */1], other[/* lo */1]);
  }
}

function of_int32(lo) {
  return /* record */[
          /* hi */lo < 0 ? -1 : 0,
          /* lo */(lo >>> 0)
        ];
}

function to_int32(x) {
  return x[/* lo */1] | 0;
}

function to_hex(x) {
  var aux = function (v) {
    return (v >>> 0).toString(16);
  };
  var match = x[/* hi */0];
  var match$1 = x[/* lo */1];
  var exit = 0;
  if (match !== 0) {
    exit = 1;
  } else if (match$1 !== 0) {
    exit = 1;
  } else {
    return "0";
  }
  if (exit === 1) {
    if (match$1 !== 0) {
      if (match !== 0) {
        var lo = aux(x[/* lo */1]);
        var pad = 8 - lo.length | 0;
        if (pad <= 0) {
          return aux(x[/* hi */0]) + lo;
        } else {
          return aux(x[/* hi */0]) + (Caml_utils.repeat(pad, "0") + lo);
        }
      } else {
        return aux(x[/* lo */1]);
      }
    } else {
      return aux(x[/* hi */0]) + "00000000";
    }
  }
  
}

function discard_sign(x) {
  return /* record */[
          /* hi */2147483647 & x[/* hi */0],
          /* lo */x[/* lo */1]
        ];
}

function float_of_bits(x) {
  var int32 = new Int32Array(/* array */[
        x[/* lo */1],
        x[/* hi */0]
      ]);
  return new Float64Array(int32.buffer)[0];
}

function bits_of_float(x) {
  var u = new Float64Array(/* float array */[x]);
  var int32 = new Int32Array(u.buffer);
  var x$1 = int32[1];
  var hi = x$1;
  var x$2 = int32[0];
  var lo = x$2;
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

function get64(s, i) {
  var hi = (s.charCodeAt(i + 4 | 0) << 32) | (s.charCodeAt(i + 5 | 0) << 40) | (s.charCodeAt(i + 6 | 0) << 48) | (s.charCodeAt(i + 7 | 0) << 56);
  var lo = s.charCodeAt(i) | (s.charCodeAt(i + 1 | 0) << 8) | (s.charCodeAt(i + 2 | 0) << 16) | (s.charCodeAt(i + 3 | 0) << 24);
  return /* record */[
          /* hi */hi,
          /* lo */(lo >>> 0)
        ];
}

exports.min_int       = min_int;
exports.max_int       = max_int;
exports.one           = one;
exports.zero          = zero;
exports.not           = not;
exports.of_int32      = of_int32;
exports.to_int32      = to_int32;
exports.add           = add;
exports.neg           = neg;
exports.sub           = sub;
exports.lsl_          = lsl_;
exports.lsr_          = lsr_;
exports.asr_          = asr_;
exports.is_zero       = is_zero;
exports.mul           = mul;
exports.xor           = xor;
exports.or_           = or_;
exports.and_          = and_;
exports.swap          = swap;
exports.ge            = ge;
exports.eq            = eq;
exports.neq           = neq;
exports.lt            = lt;
exports.gt            = gt;
exports.le            = le;
exports.to_float      = to_float;
exports.of_float      = of_float;
exports.div           = div;
exports.mod_          = mod_;
exports.div_mod       = div_mod;
exports.compare       = compare;
exports.to_hex        = to_hex;
exports.discard_sign  = discard_sign;
exports.float_of_bits = float_of_bits;
exports.bits_of_float = bits_of_float;
exports.get64         = get64;
/* two_ptr_32_dbl Not a pure module */


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Caml_builtin_exceptions = __webpack_require__(0);

function string_of_char(prim) {
  return String.fromCharCode(prim);
}

function caml_string_get(s, i) {
  if (i >= s.length || i < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}

function caml_create_string(len) {
  if (len < 0) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "String.create"
        ];
  } else {
    return new Array(len);
  }
}

function caml_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}

function caml_fill_string(s, i, l, c) {
  if (l > 0) {
    for(var k = i ,k_finish = (l + i | 0) - 1 | 0; k <= k_finish; ++k){
      s[k] = c;
    }
    return /* () */0;
  } else {
    return 0;
  }
}

function caml_blit_string(s1, i1, s2, i2, len) {
  if (len > 0) {
    var off1 = s1.length - i1 | 0;
    if (len <= off1) {
      for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
        s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
      }
      return /* () */0;
    } else {
      for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
        s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
      }
      for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
        s2[i2 + i$2 | 0] = /* "\000" */0;
      }
      return /* () */0;
    }
  } else {
    return 0;
  }
}

function caml_blit_bytes(s1, i1, s2, i2, len) {
  if (len > 0) {
    if (s1 === s2) {
      var s1$1 = s1;
      var i1$1 = i1;
      var i2$1 = i2;
      var len$1 = len;
      if (i1$1 < i2$1) {
        var range_a = (s1$1.length - i2$1 | 0) - 1 | 0;
        var range_b = len$1 - 1 | 0;
        var range = range_a > range_b ? range_b : range_a;
        for(var j = range; j >= 0; --j){
          s1$1[i2$1 + j | 0] = s1$1[i1$1 + j | 0];
        }
        return /* () */0;
      } else if (i1$1 > i2$1) {
        var range_a$1 = (s1$1.length - i1$1 | 0) - 1 | 0;
        var range_b$1 = len$1 - 1 | 0;
        var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
        for(var k = 0; k <= range$1; ++k){
          s1$1[i2$1 + k | 0] = s1$1[i1$1 + k | 0];
        }
        return /* () */0;
      } else {
        return 0;
      }
    } else {
      var off1 = s1.length - i1 | 0;
      if (len <= off1) {
        for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
          s2[i2 + i | 0] = s1[i1 + i | 0];
        }
        return /* () */0;
      } else {
        for(var i$1 = 0 ,i_finish$1 = off1 - 1 | 0; i$1 <= i_finish$1; ++i$1){
          s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
        }
        for(var i$2 = off1 ,i_finish$2 = len - 1 | 0; i$2 <= i_finish$2; ++i$2){
          s2[i2 + i$2 | 0] = /* "\000" */0;
        }
        return /* () */0;
      }
    }
  } else {
    return 0;
  }
}

function bytes_of_string(s) {
  var len = s.length;
  var res = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    res[i] = s.charCodeAt(i);
  }
  return res;
}

function bytes_to_string(a) {
  var bytes = a;
  var i = 0;
  var len = a.length;
  var s = "";
  var s_len = len;
  if (i === 0 && len <= 4096 && len === bytes.length) {
    return String.fromCharCode.apply(null,bytes);
  } else {
    var offset = 0;
    while(s_len > 0) {
      var next = s_len < 1024 ? s_len : 1024;
      var tmp_bytes = new Array(next);
      caml_blit_bytes(bytes, offset, tmp_bytes, 0, next);
      s = s + String.fromCharCode.apply(null,tmp_bytes);
      s_len = s_len - next | 0;
      offset = offset + next | 0;
    };
    return s;
  }
}

function caml_string_of_char_array(chars) {
  var len = chars.length;
  var bytes = new Array(len);
  for(var i = 0 ,i_finish = len - 1 | 0; i <= i_finish; ++i){
    bytes[i] = chars[i];
  }
  return bytes_to_string(bytes);
}

function caml_is_printable(c) {
  if (c > 31) {
    return +(c < 127);
  } else {
    return /* false */0;
  }
}

function caml_string_get16(s, i) {
  return s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0;
}

function caml_string_get32(s, i) {
  return ((s.charCodeAt(i) + (s.charCodeAt(i + 1 | 0) << 8) | 0) + (s.charCodeAt(i + 2 | 0) << 16) | 0) + (s.charCodeAt(i + 3 | 0) << 24) | 0;
}

function get(s, i) {
  if (i < 0 || i >= s.length) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "index out of bounds"
        ];
  } else {
    return s.charCodeAt(i);
  }
}

exports.bytes_of_string           = bytes_of_string;
exports.bytes_to_string           = bytes_to_string;
exports.caml_is_printable         = caml_is_printable;
exports.caml_string_of_char_array = caml_string_of_char_array;
exports.caml_string_get           = caml_string_get;
exports.caml_string_compare       = caml_string_compare;
exports.caml_create_string        = caml_create_string;
exports.caml_fill_string          = caml_fill_string;
exports.caml_blit_string          = caml_blit_string;
exports.caml_blit_bytes           = caml_blit_bytes;
exports.caml_string_get16         = caml_string_get16;
exports.caml_string_get32         = caml_string_get32;
exports.string_of_char            = string_of_char;
exports.get                       = get;
/* No side effect */


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var not_implemented = (function (s){ throw new Error(s)});

exports.not_implemented = not_implemented;
/* not_implemented Not a pure module */


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Block = __webpack_require__(2);

function erase_rel(param) {
  if (typeof param === "number") {
    return /* End_of_fmtty */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          return /* Char_ty */Block.__(0, [erase_rel(param[0])]);
      case 1 : 
          return /* String_ty */Block.__(1, [erase_rel(param[0])]);
      case 2 : 
          return /* Int_ty */Block.__(2, [erase_rel(param[0])]);
      case 3 : 
          return /* Int32_ty */Block.__(3, [erase_rel(param[0])]);
      case 4 : 
          return /* Nativeint_ty */Block.__(4, [erase_rel(param[0])]);
      case 5 : 
          return /* Int64_ty */Block.__(5, [erase_rel(param[0])]);
      case 6 : 
          return /* Float_ty */Block.__(6, [erase_rel(param[0])]);
      case 7 : 
          return /* Bool_ty */Block.__(7, [erase_rel(param[0])]);
      case 8 : 
          return /* Format_arg_ty */Block.__(8, [
                    param[0],
                    erase_rel(param[1])
                  ]);
      case 9 : 
          var ty1 = param[0];
          return /* Format_subst_ty */Block.__(9, [
                    ty1,
                    ty1,
                    erase_rel(param[2])
                  ]);
      case 10 : 
          return /* Alpha_ty */Block.__(10, [erase_rel(param[0])]);
      case 11 : 
          return /* Theta_ty */Block.__(11, [erase_rel(param[0])]);
      case 12 : 
          return /* Any_ty */Block.__(12, [erase_rel(param[0])]);
      case 13 : 
          return /* Reader_ty */Block.__(13, [erase_rel(param[0])]);
      case 14 : 
          return /* Ignored_reader_ty */Block.__(14, [erase_rel(param[0])]);
      
    }
  }
}

function concat_fmtty(fmtty1, fmtty2) {
  if (typeof fmtty1 === "number") {
    return fmtty2;
  } else {
    switch (fmtty1.tag | 0) {
      case 0 : 
          return /* Char_ty */Block.__(0, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 1 : 
          return /* String_ty */Block.__(1, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 2 : 
          return /* Int_ty */Block.__(2, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 3 : 
          return /* Int32_ty */Block.__(3, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 4 : 
          return /* Nativeint_ty */Block.__(4, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 5 : 
          return /* Int64_ty */Block.__(5, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 6 : 
          return /* Float_ty */Block.__(6, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 7 : 
          return /* Bool_ty */Block.__(7, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 8 : 
          return /* Format_arg_ty */Block.__(8, [
                    fmtty1[0],
                    concat_fmtty(fmtty1[1], fmtty2)
                  ]);
      case 9 : 
          return /* Format_subst_ty */Block.__(9, [
                    fmtty1[0],
                    fmtty1[1],
                    concat_fmtty(fmtty1[2], fmtty2)
                  ]);
      case 10 : 
          return /* Alpha_ty */Block.__(10, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 11 : 
          return /* Theta_ty */Block.__(11, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 12 : 
          return /* Any_ty */Block.__(12, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 13 : 
          return /* Reader_ty */Block.__(13, [concat_fmtty(fmtty1[0], fmtty2)]);
      case 14 : 
          return /* Ignored_reader_ty */Block.__(14, [concat_fmtty(fmtty1[0], fmtty2)]);
      
    }
  }
}

function concat_fmt(fmt1, fmt2) {
  if (typeof fmt1 === "number") {
    return fmt2;
  } else {
    switch (fmt1.tag | 0) {
      case 0 : 
          return /* Char */Block.__(0, [concat_fmt(fmt1[0], fmt2)]);
      case 1 : 
          return /* Caml_char */Block.__(1, [concat_fmt(fmt1[0], fmt2)]);
      case 2 : 
          return /* String */Block.__(2, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 3 : 
          return /* Caml_string */Block.__(3, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 4 : 
          return /* Int */Block.__(4, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 5 : 
          return /* Int32 */Block.__(5, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 6 : 
          return /* Nativeint */Block.__(6, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 7 : 
          return /* Int64 */Block.__(7, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 8 : 
          return /* Float */Block.__(8, [
                    fmt1[0],
                    fmt1[1],
                    fmt1[2],
                    concat_fmt(fmt1[3], fmt2)
                  ]);
      case 9 : 
          return /* Bool */Block.__(9, [concat_fmt(fmt1[0], fmt2)]);
      case 10 : 
          return /* Flush */Block.__(10, [concat_fmt(fmt1[0], fmt2)]);
      case 11 : 
          return /* String_literal */Block.__(11, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 12 : 
          return /* Char_literal */Block.__(12, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 13 : 
          return /* Format_arg */Block.__(13, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 14 : 
          return /* Format_subst */Block.__(14, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 15 : 
          return /* Alpha */Block.__(15, [concat_fmt(fmt1[0], fmt2)]);
      case 16 : 
          return /* Theta */Block.__(16, [concat_fmt(fmt1[0], fmt2)]);
      case 17 : 
          return /* Formatting_lit */Block.__(17, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 18 : 
          return /* Formatting_gen */Block.__(18, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 19 : 
          return /* Reader */Block.__(19, [concat_fmt(fmt1[0], fmt2)]);
      case 20 : 
          return /* Scan_char_set */Block.__(20, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      case 21 : 
          return /* Scan_get_counter */Block.__(21, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 22 : 
          return /* Scan_next_char */Block.__(22, [concat_fmt(fmt1[0], fmt2)]);
      case 23 : 
          return /* Ignored_param */Block.__(23, [
                    fmt1[0],
                    concat_fmt(fmt1[1], fmt2)
                  ]);
      case 24 : 
          return /* Custom */Block.__(24, [
                    fmt1[0],
                    fmt1[1],
                    concat_fmt(fmt1[2], fmt2)
                  ]);
      
    }
  }
}

exports.concat_fmtty = concat_fmtty;
exports.erase_rel    = erase_rel;
exports.concat_fmt   = concat_fmt;
/* No side effect */


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// Generated by js_of_ocaml 2.8.4
(function(bo){"use strict";var
gT=254,anF="get_stats",LT="@[(@[%a)@]@ %s@]",aeU="A private type would be revealed",aX=16777215,uN="translclass.ml",AU="CamlinternalOO",AT="lor",BK="array.unsafe_set",Nj=293,Lb=278,MA="add",BJ="string.set64",anE="$unknown",aeT=":\n ",anD="This class expression is not a class function, it cannot be applied",LS="!",Cm=115,nR="[]",ahU="4.02.3+BS",Ni="float_of_string",aeS="This kind of expression is not allowed as right-hand side of `let rec'",ahT="\\x",ft="block",anC="==[int]",z3="Nativeint",ahS="@[<2>%a =%s@ %a@]",ahR="@[<hv 1>case int %i:@ %a@]",ahQ=" (",aeR="The type parameter",dj="BUCKLE20170901\x84\x95\xa6\xbe\0\0\0?\0\0\0\x0f\0\0\x001\0\0\0,\xb0@@\xa0+bs-platform\xa0\xa0C'lib/es6\xa0\xa0A)lib/amdjs\xa0\xa0B(lib/goog\xa0\xa0@&lib/js@",ahP=1026,ak6="This object is expected to have type",qx="record",gS=1023,anB="caml_int64_compare",aeQ=282,ak5="<hov2>",jf=">",anA="CamlinternalMod",hS="float",AS="virtual flag not support currently",h2="deps_program",Nh="List",ahO=272,ak4=428,BI="Sys",Ng=".cmi",ahN="[?null?undefined]",fw="method",anz="throw",ug="error",aeP="Int32.%s",ahM="output_substring",BH="contains type variables that cannot be generalized",BG="*.",ahL="table",LR="bs.as",ahK="Set.remove_min_elt",mi="<0>",AR="<=.",Cl="e",ahJ="string.unsafe_set",any="Unexpected directive",aeO="Qualified label is not allood",ak3=703,Mz="fn",aeN="\\ ended unexpectedly",ahI="switch*",ahH=669,ahG="init_mod!",kW="Array",n0="int32",Nf="  ",z2="do",anx="[?undefined]",ak2="$great",ak1="Bigarray",Ne="info",ahE="[boolean->bool]",ahF="caml_greaterequal",ej="type",anw="caml_create_string",My=16711680,aeM="This class should be virtual",ak0="[js.obj]",mm=1024,ce=782176664,aeL="bs.",aeK="global ",akZ="get_appears",e7="module",uq="try",Mx="print_endline",anv=-637011940,uf=65280,hR="property_name",akY="The signature for this packaged module couldn't be inferred.",Ck="infinity",ahD="caml_string_notequal",BF="private",ahC=908,aeJ="arg",ahA=602,LQ="sub",ahB="Illegal payload, expect an expression payload instead of type payload",Cj="then",Nd="Filename",ahz="caml_equal",aeI="\\t",ahy=".a",akX="commuting this argument",anu="Bigarray.",ahx="immutable",ant="#>=",nZ=890363064,ans="export_set",aeG="Nativeint.%s",aeH="bs.as is not supported with optional yet",AQ=103,aeF="Invalid \\u escape",akW="raw",akU=-16,akV="@,@[The type constructor@;<1 2>%a@ would escape its scope@]",ahw="<here>",aeE=848,ef="statement",ue=223,akT="@[<2>(seq@ %a@ %a)@]",BE=500,aeD=308,akS="File ",kM=" :",aeC="extension",h$="kind",aeB="min_int",akQ="#<",V="lam_compile_primitive.ml",akR="Expect an expression here",ahv="> ",ahs="tuple arity > 6 not supported yet",aht="Invalid payload",ahu="null_undefined_to_opt",aeA="caml_string_greaterequal",anr="duprecord %a %i",anq="Illegal character (",Nc="open",dR=256,aez="js_stmt_make.ml",akP="Bigarray.dim_",aey="to_int",aex=65520,dm="expression",anp="../",aev="duprecord ",aew="(send",cd="%s",Ci="Assert_failure",aeu="with_loop_mutable_values",ano="This object duplication occurs outside a method definition",BD="string.length",ahr="a.out",ann=-108,qG="lexer.mll",aet="@[<2>(if@ %a@ %a@ %a)@]",akO=129,aes="string.set",anm="Block",mc="get",n3=",",akN=372,kV=">=",uE=-512023670,La=17064,BC="o",ahq="@[<2>(assign@ %a@ %a)@]",akM="return",aer="copy",fs="list",akL="word_size",f7="env.ml",aeq="The constructor",akK="setfield_ptr ",AP="bigarray.array1.get32",akJ="The constructor ",mb=120,aep="#else not terminated",Mw="@[<v>%a%a@]",ma="is not compatible with type",ahp="(stringswitch ",eE="<hov1>",uD="|]",dC=888960333,ml=117,Mv="caml_int_compare",Ch="expect string tuple list",aeo="@[<2>%a@ =@ %a@]",BB=" None",akI="(apply",LP="virtual",bd="<v>",anl="set_var",ank=343,Nb=294,jk="lsr",anj="get_meth",BA="bigarray.array1.unsafe_set32",akG="but was expected to be of type",akH="int_as_pointer",Mu="%sendcache",aen="Uncaught exception: ",AO="Map",h_="length_object",ani="[null->opt]",up="x",Cg="begin",kU="String",aho="(function",Mt="but is used with type",akF="$dot",aem=32767,akE=336,nY="xor",akD="bs.set",ahn="+:=%i",jj="%d",anh="@[<2>(apply@ %a%a)@]",akC="but a pattern was expected which matches values of type",Na="#obj_set_length",ael=200,l$="[",AN="<.",ahm="Cygwin",aek=286,hK="for_ident_expression",qw="meth",ahl="Uncaught exception: %s\n",Ms=" of",ahk="selfpat-",fv="<hv>",akB="char_of_int",Mr="__",K$="expects ",aej="Ancestor names can only be used to select inherited methods",ang="-=",ahj=" does not support [",Bz="bytes.get",akA="revapply",eF=-48,ahi="env_init",qp="set",M$="class type",akz=2048,anf="Rabsent",aky=5246191,aei="Digest.from_hex",kO="int64",jn="but is expected to have type",K_="prerr_endline",ahh="(catch",M_=263,f_="*",ane="@[<2>(while@ %a@ %a)@]",ji=-829230741,LO="module type ",Mq="3",uM="else",aeh="[@@bs.val %S]",hJ="tag_info",Cf="Int32",aeg="max_int",M9=342,akx="@[<2>(ifused@ %a@ %a)@]",ud="Ill defined attribute [",ahg="r",akw="add_mutable_variable",nX="match",By="field",z=246,akv="which is less general than",nQ="instance variable",hQ=833127361,aku="The combination of [",z1=870828711,akt="unsafe_",z0="bigarray.array1.get16",ahf=325,n8=122,anc="caml_obj_tag",and="bs.obj label %s does not support such arg type",aef='File "',zZ="Stack_overflow",ahe="Expect_comma_or_rbrace",anb="Attribute found that conflicts with [@@bs.module].",aee="setfield_imm ",aks=427,ana="with ",AM="such configuration is not supported",akr="Parmatch.get_tag",am$=-48796219,K9="ex",ahd="[raw.exp]",nW="Not_found",Ce="+=",K8="done",akq=-1055161302,aed=-664121736,K7=291,ahc="./",M8="Weak",am_="_to_value",akp="big_endian",uC="warnings.ml",g1=1039100673,LN=24320471,Bx=106,LM="js",am9="External identifiers must be functions",am8="os_type",aec="const",uL=124,fr="?",eC="false",AL="abs.",aeb=133,je="mod",ahb="\\u",akn="makemutable %i",ako="bs.raw",am7=1170,akm="Unsupported pattern in `bs.open`",ad$="String literal not terminated",aea=434,ad_=-36,ad9="ostype_unix",ee="option",aha="Int32.",qF=16777211,AK="array.get",Mp="ast_external_attributes.ml",Bw=32752,dQ="_",ad8="0.",akl="$at",ad7="id",akk="caml_string_equal",akj="Illegal recursive module reference",zY="Invalid_argument",ad6="@[<1>[|@[%s%a@]|]@]",ag$="%LiL",Mo="#is_instance_array",ad4=930693872,ad5="@[<1>[%i:@ @[%a%a@]]@]",ag_="(if",Mn="abs",aki="caml_bswap16",akh=119,LL="&",ag9="complex32",qv="debugger",LK="raise",uB="mutable",am6="++",K6="\\'",AJ="bigarray.array1.unsafe_set16",fy="label",am5="The public method ",ad3="Missing primitive",ag8="caml_int32_bswap",LJ=332,hP="]",l_=858930691,AI=">.",akg="invalid js label ",akf="Expect_colon",am4="6",ag7=135,ake="Attribute found that conflicts with [@@bs.val]",dl="0",nV=": at character number ",akd="caml_notequal",K5="defined_idents",akc="p",K4=121,f6="program",fx="unknown",ag5="@[<2>(%a%a)@]",ag6=536,akb=131,am3="caml_compare",ad2="bad input: format type mismatch between %S and %S",nP="nativeint",LI="`%s",ag4=261,uc=105,f9="object",ad1="break",kR=-944563106,aka="'*'",K3=951458237,am2="@[<1>(%s %a@ @[<v 0>%a@])@]",ag3="ref",uo=251,aj_="#==",aj$="Caml_string",M7="Hashtbl",ad0="extension constructor ",am1="A type variable is unbound in this extension constructor",adZ="_of_",aj9="unsafe_expr",am0="Rpresent None",aj8="bs.uncurry] is not supported yet",Mm="tag",M6=331,adY="Array2",AH=412,adW="caml_ml_open_descriptor_in",adX="bs.meth is not supported in function expression",amZ=253,bn="ctype.ml",zX=362,M5=".cmt",amX="sys.constant_",amY="#fn_method",LH="Change one of them.",amW="nonrec flag",uK=" and ",mk="::",uJ="self-",aj7="/* ",f8="@;<1 -2>",Bv="virtural method not supported",aj6="Recursive modules require an explicit module type.",Bu=351,M4="typeof",ag2="expect label, optional, or unit here",amV="Unbound module type %a",kT="Type",h9="statement_desc",uA="CamlinternalFormatBasics",AG=224,Ml="Number",AF="in",zW=", characters ",dk=250,aj4="E",aj5=222,AE="[| |]",ag1="caml_sys_get_config",ag0="null_to_opt",aj3=-12,aj2=187,agZ=302,amU="empty name encountered",amT="bs.uncurry",aj1=" are incompatible",agY="complex64",Cd="bigarray.array1.set16",adU=17049,adV="caml_array_set",agX="{<",Mk="The record field ",Mj=15720,qo=-201766268,adT=1660,agW="#!=",nU="{",aj0="type ",h1="expression_desc",LG=" `",ajX="item attribute",ajY="instanceof",ajZ="(exit",amS="[raw.stmt]",adS=" argument(s)",b6=100,adR="Fortran",zV="string.unsafe_get16",adQ="nativeint.ml",adP="@[<2>(send%s@ %a@ %a%a)@]",adO="Unbound module ",amR="[typeof]",agV="%s_of_%s",ajW=438,adN="caml_nativeint_compare",LF="%C",hI=1e3,agU=" (which is later used)",ajU="#string_of_small_array",ajV="sys.constant_%s",amQ=-273740300,gR=241718382,agT=277,ajS="cmj files have incompatible versions, please rebuilt using the new compiler : ",ajT="(let",adM=138,ajR="@[<hv 2>type %t +=%s@;<1 2>%a@]",Cc="string.unsafe_set32",ajQ="Unbound instance variable ",h8="btype.ml",ar="@,",ajP="Unicode string is not allowed in pattern match",amP="add_substitue",agS="mutable ",Mi=-950194894,ub="array",amN="This type constructor expands to type",amO="#<=",adL="Error",ajO="elif",kQ=127,ajN=" )",agR="should be an instance of type",adK=273,bc=")",uz="let",adJ="bswap",ajM="Syntax error: ",LE="#default",uy="nan",adI="Expected declaration",agQ="Expect_string_or_rbrace",amM=764223482,adH="%+",kL="/",ua="require",amL="'#'",AD=146,agP="undefined_to_opt",Bt="\\r",amK=177,adG="#recmod#",M3=815031438,adF="Resize_array.get_and_delete_range",zU=" not found.",fq="function",agO="JSON",qu="#row",agN="(try",amJ="a float",AC="This expression has type",agM="|",ajL="Their constraints differ",Bs="End_of_file",Cb="Set",cx="<hv 1>",zS="this is an invalid js regex",zT="..",t$="new",Br="Failure",adE=",\n",adD="$plus",n2="with",adC="field ",LD=3553398,amH="7",amI="Bigarray.blit: dimension mismatch",adB="@[%s@ %a@]",Mh="inherit",ajK=" = ..",ajJ=520,qE=-91,kK="Pervasives",amG="Modules are not allowed in this pattern.",adA="makemutable ",cc="<hv 2>",AB="Only method support currently",Ca="Sys_error",Mg="The type constructor",agL="caml_string_lessthan",M2="fun",agK="warning",amF="[%i]",zR="module type",adz="Node",agJ="of_int",amE=" is never used to build values.\n(However, this constructor appears in patterns.)",ajI="with_in_loop",hH="int_of_string",h0="None",B$=132,AA="##",M1=347,ady="floatfield %i",agH="Comment not terminated",agI="A type variable is unbound in this type declaration",ajH="name",zQ="testbit",LC=284,adx="except a core type",Az="include",nT="unit",zP="functor",amD="dirapply",adw=271,qt="bs.raw can only be applied to a string",g0=288368849,adv="this is not a valid record config",gY="or",Bq="@[<hv 1>default:@ %a@]",ajG=335,amC="but is here applied to ",agG="with (",ajF="caml_get_public_method",M0=240,B_="assert",agF="makeblock %i",agE="@]",amB="scan",LB="Config_whole_compiler",amA=-23,ajE="finally",gX="end",Ay="not",nO="typetexp.ml",K=255,K2="Buffer",agD="Expect_comma_or_rbracket",ajD="bs.deriving",zN=" private",zO="string.get64",K1="init_class",ajC="Pkg",amz=" not found ",adu=-33,gb="exports",n7="||",ajB="$bang",adt="lexing: empty token",ads="stdin",K0="_module",adr="expect `true` or `false` in this field",ajA=")@ %a)@]",amx="Syntax error",amy="bs.val ",bQ=481346541,LA="obj_init",bm=1e8,ajz='case "',hG=" =",adq=" of ",agC="C",amw="Illegal payload, expect an expression payload instead of pattern  payload",MZ=442,adp="+:=",qn="%a",gW=", ",jq="<=",ajy="@[<2>(try@ %a@;<1 -1>with %a@ %a)@]",zM=">=.",amv="Ill-formed list of warnings",amu="(for ",mf="<v 0>",Ax="isout",jp="class",Aw="bswap16",amt="continue",Bp="bs.get/set conflicts with bs.meth",Av=252,agB=400,Mf="cache",ams="an integer",h7="return_expression",ajx="@[<1>(stringswitch %a@ @[<v 0>%a@])@]",Me="caml_sys_getenv",hZ="required_modules",Lz="is not yet completely defined",dn=" ",Au="Undefined_recursive_module",agA="output",adn='@[<hv 1>case "%s":@ %a@]',ado="x86_64-unknown-linux-gnu",agz=" %a",MY="caml_int32_compare",t_=116,zL=137,ajw="__filename",amr="get_hard_dependencies",hY="ident_info",amq="send_",ajv="@ | ",amo="Recursive local constraint when unifying",amp="exceeds max_array_length",As="bigarray.array1.unsafe_get16",At="Set.bal",jd="()",aju=-123,Bn="@.",Bo="%i",amn=147,Bm="bs",agx=312,agy="min_float",MX="`",zK="bytes.length",B9="exception",Bl="default:",amm="This is only allowed when the real type is known.",KY="%s\n",KZ="i",KX='\\"',ajt="Variable ",agw="Error:",ajs="@[%a%a@]",ajr=" =%a@;<1 2>%a",agv="#=",aml="A parameter has type",ajq="@[<hv 1>case tag %i:@ %a@]",Ar="!=.",Md="pattern",ajp="$percent",agu="j",n6=512,agt="None of the patterns in this 'match' expression match values.",amk="A type parameter has type",adm="case tag ",MW="caml_obj_dup",Ly="Bytes",B8="string.unsafe_get",adl="Unbound instance variable %s",amj="Illegal character (%s)",KW="neg",ga="typedecl.ml",cm=128,ami=656,ags=" ->",Bk="int_of_float",ajo=785637236,nS="constructor",ajn=-43,amh=" Display this list of options",Lx="%#",MV="constraint",adk="uint16",t9="[|",adj="fd ",eh="int",ajm=4153489,agr="< ",KV="var",ajl=365,agq="(while",Lw="| ",agp="but is used here with type",ago="caml_string_compare",adi="Marshal.to_buffer: buffer overflow",agn="external expects a single identifier",Aq="Int64",amg="Module ",Mc="mul",adh="$eq",ajj="variant",ajk="`with` construct is not supported in bs.obj ",Mb="initializer",aji=371,amf="$less",zJ="array.set",ame="WARN: %s ",adg="bs.meth",Ma=-88,B7="only a single string is allowed in bs external",agm=409,L$="of",L_="Printf",ajh="caml_string_lessequal",ajg="global %a",Lv="1",Ap="d",ade="Array3",adf="*extension*",agj=247,agk="meth_callback",agl=" does not support such arg type",agi="caml_lessthan",add="caml_make_vect",agg="get_substitution",agh="update_mod!",KU='", line ',agf="mod_",zI="b",aje=109,ajf="but on the right-hand side it has type",amd="funarg",un="external",ajd=667044620,amc="mark_not_dead",ajc=317,Ao="Out_of_memory",ajb="%send",adc=1016606245,An=101,Lu="4",amb="index out of bounds",Bj=3654863,adb="!=[int]",agd="does not meet its constraint: it should be",age="create_object_opt",ama="<hidden>",al$=268,ada=353,aja="js_pass_flatten.ml",al_="Unbound module %a",me="}",Bi="this",ai$=214,hO="jsint",Lt="@",agc=1027,agb="@[<2>(for %a@ %a@ %s@ %a@ %a)@]",ai_="caml_ml_open_descriptor_out",al9=327,ac$="This alias is bound to type",zH="Char",Bh="string.unsafe_get32",Ls=450,ux="downto",B6="force",al8=1073741824,aga=798,ai9="ocaml.doc",MU=113,ai8="Array1",Bg="switch",al7="@[%s@ %a@ %s@]",ai7="5",B5="bytes.unsafe_set",Lr="char",qB="lam_compile_external_obj.ml",al6="bs.get",KT=330,ac9="get_no_side_effect",ac_="_finish",af$="%identity",aR="<1>",af_="Illegal permutation of structure fields",hX="for_direction",al5="generic",al4=" when compiling ",ai6="Unexpected token in conditional predicate",zG="*sth*",ai5="Incorrect FFI attribute found: (bs.new should not carry a payload here)",al3="Expect_eof",L9=388158996,ai3="export",ai4="@}",b0=".",B4="A type parameter occurs several times",di=65535,Lq=329,ai2="Marshal.from_bytes",ac8="<hov 2>",ac7="Unterminated parens in conditional predicate",Bf="isint",af9="This module type is not a signature",ai1=858321333,MT=210,gV="for_ident",Am="bigarray.array1.set64",ai0="It",dO="lam.ml",Lp=257,aS="lam_dispatch_primitive.ml",aiZ="console",af8=" cannot become concrete",Lo="Js_compiler",MS=-101,aiY="selfpat-*",al2="Syntax error: '",qm="bytes_of_string",L7="value",aiX="Only type constructors with identical parameters can be substituted.",L8=301,aiV="(assign",aiW=56320,B3=375,MR="%.12g",uw="has type",qD="typemod.ml",uI="to",ac6="Illegal backslash escape in string or character (",aiU="%nin",zF=114,af7=379,nN="&&",KS="Arg",fp="null",af6="but an expression was expected of type",KR="The type ",al1=15500,dP=123,al0="module ",zE="lxor",aiT=360,gQ='"',af5="ignore",mj="<",bI="(",B2="array.length",af4="ext_list.ml",ac5="%s: %s\n",Ln="%a(%a)",af3="invalid or unused attribute `bs`",Be="polymorphic type annotation not supported yet",alZ="ostype_win32",B1="--help",ac4="Invalid \\x escape",aiS=390,KQ="CamlinternalFormat",MQ="Marshal",jo="The ",alY="@[<2>(catch@ %a@;<1 -1>with (%d%a)@ %a)@]",L6="Tuples must have at least 2 components.",ac3="' might be unmatched",jh="lsl",um="bytes_to_string",aiR="ranlib",ac0=348,ac1="uint8",ac2="bs.obj], [",aiQ=285,af2=999,aiP=164,qs=126,aiO="case int ",Bc="string.set16",Bd="Division_by_zero",af1="In this definition, a type variable has a variance that",hV=4194303,hW="code_info",Bb="==.",hU="int_op",hN="property_map",uH="if",gU=": ",md="-.",af0="caml_register_named_value",afZ="A class cannot be changed from virtual to concrete",aiN="get_in_loop",afY="ostype_cygwin",aiM="[?null]",acZ=57343,ul="nonrec",mh="'",aiK="%i+",aiL="@[<2>(let@ (@[<hv 1>%a@]",acY="This kind of recursive class expression is not allowed",afX="Illegal seek",qC="<error>",acX=157,afW="Unterminated_comment",acW="This is a generative functor. It can only be applied to ()",KP="#apply",afV=" virtual",KO=270,alX="bad input: format type mismatch between ",Lm="noalloc",Al="@ %s",acV="@[%s@ %s@ It",afT="$pipe",afU="caml_string_greaterthan",t8="set_gen.ml",alW=-976970511,aiJ="This type",qA="val",alV=-653901888,afS="with is not supported",alU="-Infinity",afR=" cannot be hidden",jc=2147483647,afQ="<warning>",Ba="string.get",ge="Js",KN=65536,acT="\\\\",acU=567,alT="caml_convert_raw_backtrace_slot",bP="parmatch.ml",alS="but is mixed here with fields of type",KM="prim",Ak="bytes.unsafe_get",acS="Unterminated_string",afP="ast_derive_dyn.ml",A$=275,alR="%lil",uv="-help",h6="pervasives.ml",Ll="sys.ml",alQ="Math",aiI=149,acR="Illegal payload",Lk="The type of this class,",k="@ ",afO=290,alP="#if not terminated",alO=734692674,gP="exception_ident",aiH="add_loop_mutable_variable",alN="Unexpected existential",afN=328,aiG="Parmatch.get_variant_constructors",acQ="Unbound module type ",B0="bigarray.array1.unsafe_get32",uk="Format",aiF="Bigarray.%s[%s,%s]",MP="does not match",hM=729469813,alM="app_",MN=155,MO=2224400062,KL="switch.ml",BZ=-115513698,Aj="float_of_int",alK=858744334,alL="f",alJ="Parmatch.exhaust",acP="@?",afM=416,acO="but is used as an instance of type",afL="Unexpected_token",A_="%a@ %a",alI="#%S",aiD="compiler version mismatch, please do a clean build",aiE="exit",dB="string",BY="printtyp.ml",KK=406480942,Ai="get_used_idents",aiC=0.001,alF=-56,alG=1036668669,alH="length",nM=":",aiB="Nativeint.",aiA=345,BX=192,BW="init_mod",t7="env",A9=245,BU="bigarray.array1.get64",BV="bytes.set",Ah=99999999,acN=320,aiz="caml_float_compare",afK=571,uj="as",BT="regular",fo="true",KJ=359,afJ="%ignore",A8="<loc>",alD="#method_run",alE=-11,aix="get_closured_idents",aiy="new_variable",alC=-110,jm=108,afI="this open statement shadows the ",l9="Map.bal",KI="@[",afH="functor (",KH=65599,afG="import",uG=-45,afF="<>",zC="is not included in",zD="bigarray.array1.unsafe_set64",afE="[undefined->opt]",BS="array.unsafe_get",afD="floatfield ",alB=" : file does not exists",acM="attributes",BR="string.unsafe_set64",Ag="includemod.ml",L5=" type",MM="'.",aiw="Int64.%s",alA=-13,Af="string.set32",afC="0000",acL=363,alz="The combination of [@@bs.obj], [@@bs.uncurry] is not supported yet",I=248,n1="typeclass.ml",aiv="#exn",Ae="Sys_blocked_io",acK="They have different arities",Lj="_none_",aiu="Syntax error: applicative paths of the form F(X).t are not supported when the option -no-app-func is set.",A7="The instance variable ",jl="invalid format ",kN="*predef*",ait=156,acJ="%sendself",A6="CamlinternalLazy",afB="WARN: ",afA="{id=",ais="This class type should be virtual",Ad=-97,air="@[<2>(exit@ %d%a)@]",KF=-69,bZ="<hov>",KG="definition",afz="get_depenencies",aiq="but actually has type",afy="@[The type of this class,@ %a,@ contains type variables that cannot be generalized@]",acH="caml_lessequal",acI="%u",acF="setfloatfield ",hF=110,acG="#fn_run",acE="bs.obj label %s does not support [@bs.unwrap] arguments",nL="%S",KE="2",eg="ident",A5="@{",afx="$slash",aly="Invalid escape code: ",afv="constraint ",afw="X",KD="Digest",BQ="string.unsafe_set16",co="-",gd="@ %a",Li="rec",afu="$prime",jg="asr",acD="caml_update_dummy",Lh="#obj_length",L4=" : file already exists",acC="Js_compiler.Ext_json_parse.Error",alx="used_idents",BP="case",ain=15934,aio="+*",aip="epsilon_float",aft="sint8",uu="self",alw="#>",acB="add_use",Ac="makearray ",afs="s.unwrap] arguments",A4="bigarray.array1.set32",KC=280,b7="typecore.ml",L3="#function_length",ML="Infinity",acA="makeblock ",acz="\\b",Lg="Std_exit",alv="caml_array_get",Ab=-55,acy="Function application with no argument.",l8="translcore.ml",L2="(Program not linked with -g, cannot print stack backtrace)\n",alu="stderr",afr="Lable is not allowed in JS object",afq="Exit",aim=102,acx="'.\n",L1="neg_infinity",Aa=-10,als="$tilde",alt="Marshal.data_size: bad object",Lf="' '",ail="\nThe first one was selected. Please disambiguate if this is wrong.",bY="lam_compile.ml",acw="Win32",eD="bool",aij=989,aik="% ",zB="default",aii="ast_util.ml",BO="Internal",afp="but is here used with type",i="",ui="^",KB=370,KA=" *",h5="undefined",aih="field value",aig="(seq",acv="lam_compile_env.ml",gO="vident",A3="Match_failure",afo="@[<2>(function%a@ %a)@]",afn=6379,aif=" : is a directory",ei="+",z$="update_mod",n5=" : ",alr="The present constructor ",e6="param",aie=384,MK="Parsing",Le="Random",t6="!=",aid="ocaml.text",mg="a",hE="case_clause",aic="The class type",MJ=-32,act="#runtime_apply",acu="string_of_int",afm="Genarray",qz=111,alq=483,zA="lazy",alp="bs.this",Kz="Lexing",acs="$hash",z_="override flag not support currently",L0=361,acr="make",Ky="caml_int64_float_of_bits",acp="tbl.ml",acq=367,afk=" is not mutable",afl="Illegal backslash escape in string or character (%s)",z9="div",kP="%",hL="property",zz="#",aA="matching.ml",z8="bigarray.array1.unsafe_get64",qr=-2147483648,afj="(%a)",cn="@;<1 2>",aco="without label",aib=";",l7="+.",aia=" argument(s),",Kw=15949,Kx="@[%a@ %s@]",MI="precision",h4="binop",afi=".\n",A2="land",ut="=",alo=3458171,aln="get_loop_mutable_values",zy="Primitive ",acm="virtual ",acn=864e5,afh="//",acl="float64",A1="override flag not supported",ack="constructor ",LZ="\n",uF="*opt*",zx="string.get32",acj=447,zw="exn",zv="@;<1 -1>",us="~",alm="max_float",ah$="Internal path",all="really_input",afg='":',fu="and",A0="caml_set_oo_id",LY="NaN",aci="[null/undefined->opt]",cy="camlinternalFormat.ml",uh="while",AZ=-1071146961,LX=1900,aff="J",ur=-34,afe=269,kS=1073741823,Kv=193,AY="Unsupported syntax, expect syntax like `method x () = x ` ",alk="Subst.modtype_path",ach="Arity_1",afc="caml_is_js",afd=505,alj="envs",Ld="Unix",z7="\\n",afb=6380,ali="Only variables are allowed as left-hand side of `let rec'",afa="promote_dead",MH="when",BN=-87,ql="//toplevel//",ae$="conflict attributes found with [",ah_=216,alh=1000000010,acf=" +=",acg="(ifused",ah8="This pattern matches values of type",ah9="0x",MG="js_long.ml",ace="Tnil",AX="\n",n4="Some",eB="variable_declaration",f$=32768,Ku="bs.obj",alf="caml_greaterthan",alg="__dirname",BM="struct",ah7="Ext_list.drop",gc=125,AW="string.get16",ale="Int64.",acd=339,ae_="The classes do not have the same number of type parameters",ald="Expect `then` after conditioal predicate",MF="Obj",alc="This type is recursive",ae9="Invalid code point",ah5=172069535,ah6="%s%i",zu="obj",ala="$star",gZ="lam_compile_external_call.ml",alb="input",ae7=-708948292,ae8="@[<1>[%a]@]@ ",ME="log",ah3="#fn_mk",ah4=165,t5="for",ae6="--",ak$="lam_compile_global.ml",ae4="caml_sys_get_argv",ae5="Undefined",ah2=134,qy="'+'",ak_="cmj files have incompatible versions, please rebuilt using the new compiler : %s",ae3="Attribute found that conflicts with [",aca="ident.ml",acb="setfloatfield %i",acc="caml_int64_to_float",D="<2>",zt="bs.obj label ",qq="sig",z6=",@ ",ab$="field %i",z5="~.",MD=170,ak9="warn",Lc="(module ",MC=560510147,ae1="Their kinds differ",ae2="sint16",z4="/.",LW="lam_stats_util.ml",ab_="float32",ae0="add_defined_ident",aeZ="Their variances do not agree",ah1="self-*",ab9="Bigarray.dim_%i",aeY=378,LV="Printexc",BL="string.unsafe_get64",aeX="$caret",ao=831911763,ak8="camlint",ab8="stdout",ah0="t",AV="Unsupported syntax in js object",ahY="get_mutable_values",ahZ=432,zr="get_defined_idents",zs="==",MB="bool_of_string",ahX="caml_obj_block",aeW="Js object ## expect syntax like obj##(paint (a,b)) ",LU="Records cannot be empty.",h3="finish_ident_expression",ab7=">}",Kt="v",aeV=":=",ahW="%ia",ak7="would escape its scope",ahV=267,hT="mutable_flag",NV=0;function
aoI(){return new
Date().getTime()/hI}function
u1(){return Math.floor(aoI())}function
fz(){this.content={};this.inode=NV++;var
a=u1();this.atime=a;this.mtime=a;this.ctime=a}fz.prototype={exists:function(a){return this.content[a]?1:0},mk:function(b,a){this.content[b]=a},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
Co=kL;function
oe(b,a){if(a.repeat)return a.repeat(b);var
c=i,d=0;if(b==0)return c;for(;;){if(b&1)c+=a;b>>=1;if(b==0)return c;a+=a;d++;if(d==9)a.slice(0,1)}}function
qR(d,e,c){var
b=new
Array(c);for(var
a=0;a<c;a++)b[a]=d[e+a];return b}function
qM(b,c,a){var
d=String.fromCharCode;if(c==0&&a<=4096&&a==b.length)return d.apply(null,b);var
e=i;for(;0<a;c+=mm,a-=mm)e+=d.apply(null,qR(b,c,Math.min(a,mm)));return e}function
cP(a){if(a.t==2)a.c+=oe(a.l-a.c.length,"\0");else
a.c=qM(a.c,0,a.c.length);a.t=0}function
NC(a){if(a.length<24){for(var
b=0;b<a.length;b++)if(a.charCodeAt(b)>kQ)return false;return true}else
return!/[^\x00-\x7f]/.test(a)}function
aoD(e){for(var
k=i,c=i,g,f,h,a,b=0,j=e.length;b<j;b++){f=e.charCodeAt(b);if(f<cm){for(var
d=b+1;d<j&&(f=e.charCodeAt(d))<cm;d++);if(d-b>n6){c.substr(0,1);k+=c;c=i;k+=e.slice(b,d)}else
c+=e.slice(b,d);if(d==j)break;b=d}a=1;if(++b<j&&((h=e.charCodeAt(b))&-64)==cm){g=h+(f<<6);if(f<AG){a=g-12416;if(a<cm)a=1}else{a=2;if(++b<j&&((h=e.charCodeAt(b))&-64)==cm){g=h+(g<<6);if(f<M0){a=g-925824;if(a<akz||a>=55295&&a<57344)a=2}else{a=3;if(++b<j&&((h=e.charCodeAt(b))&-64)==cm&&f<A9){a=h-63447168+(g<<6);if(a<KN||a>1114111)a=3}}}}}if(a<4){b-=a;c+="\ufffd"}else
if(a>di)c+=String.fromCharCode(55232+(a>>10),aiW+(a&gS));else
c+=String.fromCharCode(a);if(c.length>mm){c.substr(0,1);k+=c;c=i}}return k+c}function
aoC(a){switch(a.t){case
9:return a.c;default:cP(a);case
0:if(NC(a.c)){a.t=9;return a.c}a.t=8;case
8:return aoD(a.c)}}function
dD(c,a,b){this.t=c;this.c=a;this.l=b}dD.prototype.toString=function(){return aoC(this)};function
gi(a){a=a
instanceof
dD?a.toString():a;if(a.charCodeAt(0)!=47)a=Co+a;var
d=a.split(kL),b=[];for(var
c=0;c<d.length;c++)switch(d[c]){case"..":if(b.length>1)b.pop();break;case".":break;case"":if(b.length==0)b.push(i);break;default:b.push(d[c]);break}b.orig=a;return b}function
NQ(b,a){throw[0,b,a]}function
a(a){return new
dD(0,a,a.length)}function
CO(c,b){NQ(c,a(b))}var
b8=[0];function
dF(a){CO(b8.Sys_error,a)}var
od=new
fz();od.mk(i,new
fz());function
b_X(b,e){var
b=gi(b),a=od;for(var
d=0;d<b.length;d++){var
c=b[d];if(!a.exists(c))a.mk(c,new
fz());a=a.get(c);if(!(a
instanceof
fz))dF(b.orig+" : not a directory")}a.auto=e;return 0}var
NM=0;function
r(a){return a.l}function
$(a,b){switch(a.t&6){default:if(b>=a.c.length)return 0;case
0:return a.c.charCodeAt(b);case
4:return a.c[b]}}function
uQ(a,b){var
c=a[1]+b[1],d=a[2]+b[2]+(c>>24),e=a[3]+b[3]+(d>>24);return[K,c&aX,d&aX,e&di]}var
qI=Math.pow(2,-24);function
Nz(a,b){var
c=a[1]*b[1],d=(c*qI|0)+a[2]*b[1]+a[1]*b[2],e=(d*qI|0)+a[3]*b[1]+a[2]*b[2]+a[1]*b[3];return[K,c&aX,d&aX,e&di]}function
fB(a){var
b=-a[1],c=-a[2]+(b>>24),d=-a[3]+(c>>24);return[K,b&aX,c&aX,d&di]}function
mr(a){return[K,a&aX,a>>24&aX,a>>31&di]}function
uT(d){var
c=d.length,b=new
Array(c);for(var
a=0;a<c;a++)b[a]=d[a];return b}function
qJ(a,b){var
c=a[1]-b[1],d=a[2]-b[2]+(c>>24),e=a[3]-b[3]+(d>>24);return[K,c&aX,d&aX,e&di]}function
CB(a,b){if(a[3]>b[3])return 1;if(a[3]<b[3])return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
Nx(a){a[3]=a[3]<<1|a[2]>>23;a[2]=(a[2]<<1|a[1]>>23)&aX;a[1]=a[1]<<1&aX}function
an7(a){a[1]=(a[1]>>>1|a[2]<<23)&aX;a[2]=(a[2]>>>1|a[3]<<23)&aX;a[3]=a[3]>>>1}function
uR(e,f){var
c=0,b=uT(e),a=uT(f),d=[K,0,0,0];while(CB(b,a)>0){c++;Nx(a)}while(c>=0){c--;Nx(d);if(CB(b,a)>=0){d[1]++;b=qJ(b,a)}an7(a)}return[0,d,b]}function
CC(a,b){return CB(a,b)<0}function
NN(c){var
a=0,d=r(c),b=10,e=d>0&&$(c,0)==45?(a++,-1):1;if(a+1<d&&$(c,a)==48)switch($(c,a+1)){case
120:case
88:b=16;a+=2;break;case
111:case
79:b=8;a+=2;break;case
98:case
66:b=2;a+=2;break}return[a,e,b]}function
bR(a){CO(b8.Failure,a)}function
uW(a){if(a>=48&&a<=57)return a-48;if(a>=65&&a<=90)return a-55;if(a>=97&&a<=n8)return a-87;return-1}function
an8(f){var
e=NN(f),d=e[0],i=e[1],g=e[2],h=mr(g),j=uR([K,aX,268435455,di],h)[1],c=$(f,d),a=uW(c);if(a<0||a>=g)bR(hH);var
b=mr(a);for(;;){d++;c=$(f,d);if(c==95)continue;a=uW(c);if(a<0||a>=g)break;if(CC(j,b))bR(hH);a=mr(a);b=uQ(Nz(h,b),a);if(CC(b,a))bR(hH)}if(d!=r(f))bR(hH);if(e[2]==10&&CC([K,0,0,f$],b))bR(hH);if(i<0)b=fB(b);return b}function
Ct(a){return(a[3]|a[2]|a[1])==0}function
CA(a){return a[1]|a[2]<<24}function
an6(a){return a[3]<<16<0}function
mp(a){if((a.t&6)!=0)cP(a);return a.c}function
bS(a){CO(b8.Invalid_argument,a)}function
CM(d){d=mp(d);var
e=d.length;if(e>31)bS("format_int: format too long");var
a={justify:ei,signstyle:co,filler:dn,alternate:false,base:0,signedconv:false,width:0,uppercase:false,sign:1,prec:-1,conv:alL};for(var
c=0;c<e;c++){var
b=d.charAt(c);switch(b){case"-":a.justify=co;break;case"+":case" ":a.signstyle=b;break;case"0":a.filler=dl;break;case"#":a.alternate=true;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":a.width=0;while(b=d.charCodeAt(c)-48,b>=0&&b<=9){a.width=a.width*10+b;c++}c--;break;case".":a.prec=0;c++;while(b=d.charCodeAt(c)-48,b>=0&&b<=9){a.prec=a.prec*10+b;c++}c--;case"d":case"i":a.signedconv=true;case"u":a.base=10;break;case"x":a.base=16;break;case"X":a.base=16;a.uppercase=true;break;case"o":a.base=8;break;case"e":case"f":case"g":a.signedconv=true;a.conv=b;break;case"E":case"F":case"G":a.signedconv=true;a.uppercase=true;a.conv=b.toLowerCase();break}}return a}function
Cr(b,f){if(b.uppercase)f=f.toUpperCase();var
e=f.length;if(b.signedconv&&(b.sign<0||b.signstyle!=co))e++;if(b.alternate){if(b.base==8)e+=1;if(b.base==16)e+=2}var
c=i;if(b.justify==ei&&b.filler==dn)for(var
d=e;d<b.width;d++)c+=dn;if(b.signedconv)if(b.sign<0)c+=co;else
if(b.signstyle!=co)c+=b.signstyle;if(b.alternate&&b.base==8)c+=dl;if(b.alternate&&b.base==16)c+=ah9;if(b.justify==ei&&b.filler==dl)for(var
d=e;d<b.width;d++)c+=dl;c+=f;if(b.justify==co)for(var
d=e;d<b.width;d++)c+=dn;return a(c)}function
Nw(g,c){var
a=CM(g);if(a.signedconv&&an6(c)){a.sign=-1;c=fB(c)}var
b=i,h=mr(a.base),f="0123456789abcdef";do{var
e=uR(c,h);c=e[1];b=f.charAt(CA(e[2]))+b}while(!Ct(c));if(a.prec>=0){a.filler=dn;var
d=a.prec-b.length;if(d>0)b=oe(d,dl)+b}return Cr(a,b)}function
b_O(a){var
c=Math.exp(a),b=c-1;return Math.abs(a)>1?b:b==0?a:a*b/Math.log(c)}function
uX(a){a=a
instanceof
dD?a.toString():a;dF(a+": No such file or directory")}function
kX(c){var
a=od;for(var
b=0;b<c.length;b++){if(!(a.exists&&a.exists(c[b])))uX(c.orig);a=a.get(c[b])}return a}function
CQ(b){var
c=gi(b),a=kX(c);return a
instanceof
fz?1:0}function
ie(){bS(amb)}function
u(b,a){if(a>>>0>=b.l)ie();return $(b,a)}function
uO(a,b,c){return a.set1(b,c)}function
anJ(f,e,b,c,d){for(var
a=0;a<d;a++)uO(b,c+a,u(f,e+a));return 0}var
b_n=anJ;function
aN(a){if(a<0)bS("String.create");return new
dD(a?2:9,i,a)}function
ia(b){this.data=b;this.inode=NV++;var
a=u1();this.atime=a;this.mtime=a;this.ctime=a}ia.prototype={truncate:function(){this.data=aN(0);this.modified()},modified:function(){var
a=u1();this.atime=a;this.mtime=a}};function
NX(a){if(a
instanceof
fz)var
b=1,c=0;if(a
instanceof
ia)var
b=0,c=r(a.data);return[0,0,a.inode,b,436,1,1,1,0,c,+a.atime,+a.mtime,+a.ctime]}function
X(a,d){var
a=a+1|0,b=new
Array(a);b[0]=0;for(var
c=1;c<a;c++)b[c]=d;return b}function
u0(a){var
b=bo;if(b.process&&b.process.stdout&&b.process.stdout.write)b.process.stderr.write(a);else{if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.error&&c.error(a)}}function
aoE(e){for(var
f=i,b=f,a,h,c=0,g=e.length;c<g;c++){a=e.charCodeAt(c);if(a<cm){for(var
d=c+1;d<g&&(a=e.charCodeAt(d))<cm;d++);if(d-c>n6){b.substr(0,1);f+=b;b=i;f+=e.slice(c,d)}else
b+=e.slice(c,d);if(d==g)break;c=d}if(a<akz){b+=String.fromCharCode(BX|a>>6);b+=String.fromCharCode(cm|a&63)}else
if(a<55296||a>=acZ)b+=String.fromCharCode(AG|a>>12,cm|a>>6&63,cm|a&63);else
if(a>=56319||c+1==g||(h=e.charCodeAt(c+1))<aiW||h>acZ)b+="\xef\xbf\xbd";else{c++;a=(a<<10)+h-56613888;b+=String.fromCharCode(M0|a>>18,cm|a>>12&63,cm|a>>6&63,cm|a&63)}if(b.length>mm){b.substr(0,1);f+=b;b=i}}return f+b}function
jv(a){var
b=9;if(!NC(a))b=8,a=aoE(a);return new
dD(b,a,a.length)}function
CN(a){throw a}function
NP(){CN(b8.Not_found)}function
ih(c){var
a=bo,b=c.toString();if(a.process&&a.process.env&&a.process.env[b]!=undefined)return jv(a.process.env[b]);NP()}var
cay=Math.log2&&Math.log2(1.12355820928894744e+307)==1020;function
NW(a){if(cay)return Math.floor(Math.log2(a));var
b=0;if(a==0)return-Infinity;if(a>=1)while(a>=2){a/=2;b++}else
while(a<1){a*=2;b--}return b}function
Nu(a){if(!isFinite(a)){if(isNaN(a))return[K,1,0,Bw];return a>0?[K,0,0,Bw]:[K,0,0,aex]}var
f=a==0&&1/a==-Infinity?f$:a>=0?0:f$;if(f)a=-a;var
b=NW(a)+gS;if(b<=0){b=0;a/=Math.pow(2,-ahP)}else{a/=Math.pow(2,b-agc);if(a<16){a*=2;b-=1}if(b==0)a/=2}var
d=Math.pow(2,24),c=a|0;a=(a-c)*d;var
e=a|0;a=(a-e)*d;var
g=a|0;c=c&15|f|b<<4;return[K,g,e,c]}function
Cy(a){return[a[3]>>8,a[3]&K,a[2]>>16,a[2]>>8&K,a[2]&K,a[1]>>16,a[1]>>8&K,a[1]&K]}var
uV=function(){function
f(){this.chunk=[]}f.prototype={chunk_idx:20,block_len:0,obj_counter:0,size_32:0,size_64:0,write:function(b,c){for(var
a=b-8;a>=0;a-=8)this.chunk[this.chunk_idx++]=c>>a&K},write_code:function(c,b,d){this.chunk[this.chunk_idx++]=b;for(var
a=c-8;a>=0;a-=8)this.chunk[this.chunk_idx++]=d>>a&K},finalize:function(){this.block_len=this.chunk_idx-20;this.chunk_idx=0;this.write(32,MO);this.write(32,this.block_len);this.write(32,this.obj_counter);this.write(32,this.size_32);this.write(32,this.size_64);return this.chunk}};return function(a){var
b=new
f(),e=[];function
d(a){if(a
instanceof
Array&&a[0]===(a[0]|0)){if(a[0]==K){b.write(8,18);for(var
c=0;c<3;c++)b.write(8,"_j\0".charCodeAt(c));var
f=Cy(a);for(var
c=0;c<8;c++)b.write(8,f[c]);b.size_32+=4;b.size_64+=3;return}if(a[0]==uo)bR("output_value: abstract value (Abstract)");if(a[0]<16&&a.length-1<8)b.write(8,cm+a[0]+(a.length-1<<4));else
b.write_code(32,8,a.length-1<<10|a[0]);b.size_32+=a.length;b.size_64+=a.length;if(a.length>1)e.push(a,1)}else
if(a
instanceof
dD){var
d=r(a);if(d<32)b.write(8,32+d);else
if(d<dR)b.write_code(8,9,d);else
b.write_code(32,10,d);for(var
c=0;c<d;c++)b.write(8,$(a,c));b.size_32+=1+((d+4)/4|0);b.size_64+=1+((d+8)/8|0)}else
if(a!=(a|0)){var
g=typeof
a;bR("output_value: abstract value ("+g+bc)}else
if(a>=0&&a<64)b.write(8,64+a);else
if(a>=-(1<<7)&&a<1<<7)b.write_code(8,0,a);else
if(a>=-(1<<15)&&a<1<<15)b.write_code(16,1,a);else
b.write_code(32,2,a)}d(a);while(e.length>0){var
c=e.pop(),a=e.pop();if(c+1<a.length)e.push(a,c+1);d(a[c])}b.finalize();return b.chunk}}();function
Cn(b){var
d=b.length,c=1;for(var
a=0;a<d;a++){if(b[a]<0)bS("Bigarray.create: negative dimension");c=c*b[a]}return c}var
uP;function
anN(){if(!uP){var
a=bo;uP=[[a.Float32Array,a.Float64Array,a.Int8Array,a.Uint8Array,a.Int16Array,a.Uint16Array,a.Int32Array,a.Int32Array,a.Int32Array,a.Int32Array,a.Float32Array,a.Float64Array,a.Uint8Array],[0,0,0,0,0,0,0,1,0,0,2,2,0]]}}function
ju(a){return qR(a,1,a.length-1)}function
jr(){bS(amb)}function
qH(b,g,d,l,h,e){var
c=e.length,p=Cn(e);function
A(b){var
d=0;if(c!=b.length)bS("Bigarray.get/set: bad number of dimensions");for(var
a=0;a<c;a++){if(b[a]<0||b[a]>=e[a])jr();d=d*e[a]+b[a]}return d}function
B(b){var
d=0;if(c!=b.length)bS("Bigarray.get/set: wrong number of indices");for(var
a=c-1;a>=0;a--){if(b[a]<1||b[a]>e[a])jr();d=d*e[a]+(b[a]-1)}return d}var
f=h==0?A:B,a=e[0];function
z(a){var
c=f(a),d=b[c];return d}function
y(e){var
d=f(e),c=b[d],a=g[d];return[K,c&aX,c>>>24&K|(a&di)<<8,a>>>16&di]}function
x(d){var
a=f(d),e=b[a],c=g[a];return[gT,e,c]}var
j=d==1?y:d==2?x:z;function
v(c){if(c<0||c>=a)jr();return b[c]}function
w(c){if(c<1||c>a)jr();return b[c-1]}function
u(a){return j([a])}var
t=d==0?h==0?v:w:u;function
o(a,c){b[a]=c}function
n(c,a){b[c]=a[1]|(a[2]&K)<<24;g[c]=a[2]>>>8&di|a[3]<<16}function
m(a,c){b[a]=c[1];g[a]=c[2]}function
J(a,c){var
b=f(a);return o(b,c)}function
I(a,b){return n(f(a),b)}function
H(a,b){return m(f(a),b)}var
k=d==1?I:d==2?H:J;function
F(c,d){if(c<0||c>=a)jr();b[c]=d}function
G(c,d){if(c<1||c>a)jr();b[c-1]=d}function
E(a,b){k([a],b)}var
D=d==0?h==0?F:G:E;function
i(a){if(a<0||a>=c)bS("Bigarray.dim");return e[a]}function
s(c){if(d==0)for(var
a=0;a<b.length;a++)o(a,c);if(d==1)for(var
a=0;a<b.length;a++)n(a,c);if(d==2)for(var
a=0;a<b.length;a++)m(a,c)}function
q(a){if(c!=a.num_dims)bS(amI);for(var
f=0;f<c;f++)if(e[f]!=a.nth_dim(f))bS(amI);b.set(a.data);if(d!=0)g.set(a.data2)}function
M(i,j){var
k,f=1;if(h==0){for(var
a=1;a<c;a++)f=f*e[a];k=0}else{for(var
a=0;a<c-1;a++)f=f*e[a];k=c-1;i=i-1}if(i<0||j<0||i+j>e[k])bS("Bigarray.sub: bad sub-array");var
n=b.subarray(i*f,(i+j)*f),o=d==0?null:g.subarray(i*f,(i+j)*f),m=[];for(var
a=0;a<c;a++)m[a]=e[a];m[k]=j;return qH(n,o,d,l,h,m)}function
L(n){var
i=n.length,j=[],m=[],k;if(i>=c)bS("Bigarray.slice: too many indices");if(h==0){for(var
a=0;a<i;a++)j[a]=n[a];for(;a<c;a++)j[a]=0;k=f(j);m=e.slice(i)}else{for(var
a=0;a<i;a++)j[c-i+a]=n[a];for(var
a=0;a<c-i;a++)j[a]=1;k=f(j);m=e.slice(0,i)}var
o=Cn(m),p=b.subarray(k,k+o),q=d==0?null:g.subarray(k,k+o);return qH(p,q,d,l,h,m)}function
C(i){var
c=[],f=i.length;if(f<1)bS("Bigarray.reshape: bad number of dimensions");var
e=1;for(var
a=0;a<f;a++){c[a]=i[a];if(c[a]<0)bS("Bigarray.reshape: negative dimension");e=e*c[a]}if(e!=p)bS("Bigarray.reshape: size mismatch");return qH(b,g,d,l,h,c)}function
r(d,j){if(h!=d.layout)return d.layout-h;if(c!=d.num_dims)return d.num_dims-c;for(var
a=0;a<c;a++)if(i(a)!=d.nth_dim(a))return i(a)<d.nth_dim(a)?-1:1;switch(l){case
0:case
1:case
10:case
11:var
e,f;for(var
a=0;a<b.length;a++){e=b[a];f=d.data[a];if(e<f)return-1;if(e>f)return 1;if(e!=f)if(e!=f){if(!j)return NaN;if(e==e)return 1;if(f==f)return-1}if(g){e=g[a];f=d.data2[a];if(e<f)return-1;if(e>f)return 1;if(e!=f)if(e!=f){if(!j)return NaN;if(e==e)return 1;if(f==f)return-1}}}break;case
2:case
3:case
4:case
5:case
6:case
8:case
9:case
12:for(var
a=0;a<b.length;a++){if(b[a]<d.data[a])return-1;if(b[a]>d.data[a])return 1}break;case
7:for(var
a=0;a<b.length;a++){if(g[a]<d.data2[a])return-1;if(g[a]>d.data2[a])return 1;if(b[a]<d.data[a])return-1;if(b[a]>d.data[a])return 1}break}return 0}return{data:b,data2:g,data_type:d,num_dims:c,nth_dim:i,kind:l,layout:h,size:p,sub:M,slice:L,blit:q,fill:s,reshape:C,get:j,get1:t,set:k,set1:D,compare:r}}function
anM(a,i,h){anN();var
e=ju(h),f=Cn(e),b=uP[0][a];if(!b)bS("Bigarray.create: unsupported kind");var
g=new
b(f),d=uP[1][a],c=null;if(d!=0)c=new
b(f);return qH(g,c,d,a,i,e)}function
anH(b,a){return anM(12,0,[0,a])}function
b9R(d,e){var
b=uV(d),c=anH(0,b.length);for(var
a=0;a<b.length;a++)uO(c,a,b[a]);return c}function
k0(f){var
a=od,c=gi(f),d,e;for(var
b=0;b<c.length;b++){if(a.auto){d=a.auto;e=b}if(!(a.exists&&a.exists(c[b])))return d?d(c,e):0;a=a.get(c[b])}return 1}function
qL(a){return new
dD(4,a,a.length)}function
n9(b){if(bo.Uint8Array)var
c=new(bo.Uint8Array)(b.l);else
var
c=new
Array(b.l);var
e=b.c,d=e.length,a=0;for(;a<d;a++)c[a]=e.charCodeAt(a);for(d=b.l;a<d;a++)c[a]=0;b.c=c;b.t=4;return c}function
Nn(a){if(a.t!=4)n9(a);return a.c}function
W(h,c){var
e=gi(h),b=od;for(var
f=0;f<e.length-1;f++){var
d=e[f];if(!b.exists(d))b.mk(d,new
fz());b=b.get(d);if(!(b
instanceof
fz))dF(e.orig+L4)}var
d=e[e.length-1];if(b.exists(d))dF(e.orig+L4);if(c
instanceof
fz)b.mk(d,c);else
if(c
instanceof
ia)b.mk(d,c);else
if(c
instanceof
dD)b.mk(d,new
ia(c));else
if(c
instanceof
Array)b.mk(d,new
ia(qL(c)));else
if(c.toString){var
g=a(c.toString());b.mk(d,new
ia(g))}else
bS("caml_fs_register");return 0}function
CS(c){var
a=gi(c),b=kX(a.slice(0,-1));if(b.exists(a[a.length-1]))b.remove(a[a.length-1]);else
uX(c);return 0}function
cau(b,a){var
d=gi(b),c=kX(d);if(k0(a)){if(CQ(a))dF(a.toString()+aif);CS(a)}W(a,c);CS(b);return 0}function
aor(a){a=a
instanceof
dD?a.toString():a;dF(a+": Not a directory")}function
cat(f){var
e=kX(gi(f));if(!(e
instanceof
fz))aor(f);var
d=e.list(),c=new
Array(d.length+1);c[0]=0;for(var
b=0;b<d.length;b++)c[b+1]=a(d[b]);return c}function
aoj(a,b){if(a.refill!=null)dF(afX);a.offset=b;return 0}function
fA(d,e,b,f,c){if(c==0)return 0;if(f==0&&(c>=b.l||b.t==2&&c>=b.c.length)){b.c=d.t==4?qM(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else
if(b.t==2&&f==b.c.length){b.c+=d.t==4?qM(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else{if(b.t!=4)n9(b);var
g=d.c,h=b.c;if(d.t==4)if(f<=e)for(var
a=0;a<c;a++)h[f+a]=g[e+a];else
for(var
a=c-1;a>=0;a--)h[f+a]=g[e+a];else{var
i=Math.min(c,g.length-e);for(var
a=0;a<i;a++)h[f+a]=g.charCodeAt(e+a);for(;a<c;a++)h[f+a]=0}}return 0}function
dE(a){if(!a.opened)dF("Cannot flush a closed channel");if(a.buffer==i)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=i;return 0}function
kZ(a,d,g,f){if(!a.opened)dF("Cannot output to a closed channel");var
c;if(g==0&&r(d)==f)c=d;else{c=aN(f);fA(d,g,c,0,f)}var
b=c.toString(),e=b.lastIndexOf(LZ);if(e<0)a.buffer+=b;else{a.buffer+=b.substr(0,e+1);dE(a);a.buffer+=b.substr(e+1)}return 0}function
jw(c,b){var
d=a(String.fromCharCode(b));kZ(c,d,0,1);return 0}function
anT(a,c,b){b&=K;if(a.t!=4){if(c==a.c.length){a.c+=String.fromCharCode(b);if(c+1==a.l)a.t=0;return 0}n9(a)}a.c[c]=b;return 0}function
b_v(b,a,c){if(a>>>0>=b.l)ie();return anT(b,a,c)}function
CJ(a){var
e=a.refill(),c=r(e);if(c==0)a.refill=null;var
b=r(a.file.data)-a.offset;if(b==0)a.file.data=e;else{var
d=aN(b+c);fA(a.file.data,a.offset,d,0,b);fA(e,0,d,b,c);a.file.data=d}a.offset=0;return c}function
NG(a){if(a.refill==null)return;if(r(a.file.data)!=a.offset)return;CJ(a)}function
NO(){CN(b8.End_of_file)}function
CH(a){NG(a);if(a.offset>=r(a.file.data))NO();var
b=u(a.file.data,a.offset);a.offset++;return b}function
aox(){return 0}function
uU(a){return+(a
instanceof
Array)}function
kY(a){var
c=(a[3]&aem)>>4;if(c==2047)return(a[1]|a[2]|a[3]&15)==0?a[3]&f$?-Infinity:Infinity:NaN;var
d=Math.pow(2,-24),b=(a[1]*d+a[2])*d+(a[3]&15);if(c>0){b+=16;b*=Math.pow(2,c-agc)}else
b*=Math.pow(2,-ahP);if(a[3]&f$)b=-b;return b}function
Cu(a){return[K,a[7]|a[6]<<8|a[5]<<16,a[4]|a[3]<<8|a[2]<<16,a[1]|a[0]<<8]}function
n_(a){return kY(Cu(a))}function
b$T(a){return Math.LOG10E*Math.log(a)}var
NS=0;function
b$Y(a){NS=a;return 0}function
anU(a){if(isFinite(a)){if(Math.abs(a)>=2.22507385850720138e-308)return 0;if(a!=0)return 1;return 2}return isNaN(a)?4:3}function
b$M(a){var
a=a.toString();if(!a.match(/^[a-zA-Z_$][a-zA-Z_$0-9]*(\.[a-zA-Z_$][a-zA-Z_$0-9]*)*$/))u0('caml_js_var: "'+a+'" is not a valid JavaScript variable. continuing ..');return eval(a)}function
aoc(b){NG(b);var
a=b.offset,d=b.file.data,c=r(d);if(a>=c)return 0;while(true){if(a>=c)return-(a-b.offset);if(u(d,a)==10)return a-b.offset+1;a++}}function
b_5(){return 0}var
jt=2;function
b_A(b,a){a[jt]=b[jt];return 0}function
b$k(a){return+(a>31&&a<kQ)}function
anQ(a,b){a.t&6&&cP(a);b.t&6&&cP(b);return a.c<=b.c?1:0}function
b_i(a,b){var
c=a.get1(b),d=a.get1(b+1)<<8,e=a.get1(b+2)<<16,f=a.get1(b+3),g=a.get1(b+4)<<8,h=a.get1(b+5)<<16,i=a.get1(b+6),j=a.get1(b+7)<<8;return[K,c|d|e,f|g|h,i|j]}function
Nv(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
gg(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
Q(a,b){a.t&6&&cP(a);b.t&6&&cP(b);return a.c<b.c?-1:a.c>b.c?1:0}function
mq(a,b,h){var
d=[];for(;;){if(!(h&&a===b))if(a
instanceof
dD)if(b
instanceof
dD){if(a!==b){var
c=Q(a,b);if(c!=0)return c}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
e=a[0];if(e===gT)e=0;if(e===dk){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
f=b[0];if(f===gT)f=0;if(f===dk){b=b[1];continue}else
if(e!=f)return e<f?-1:1;else
switch(e){case
248:var
c=gg(a[2],b[2]);if(c!=0)return c;break;case
251:bS("equal: abstract value");case
255:var
c=Nv(a,b);if(c!=0)return c;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)d.push(a,b,1)}}else
return 1}else
if(b
instanceof
dD||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!="number"&&a&&a.compare)return a.compare(b,h);else
if(typeof
a==fq)bS("equal: functional value");else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!h)return NaN;if(a==a)return 1;if(b==b)return-1}}if(d.length==0)return 0;var
g=d.pop();b=d.pop();a=d.pop();if(g+1<a.length)d.push(a,b,g+1);a=a[g];b=b[g]}}function
E(a,b){return+(mq(a,b,false)==0)}function
b_a(a,b){return a.num_dims}function
b_W(){var
b=bo.caml_fs_tmp;if(b)for(var
a=0;a<b.length;a++)W(b[a].name,b[a].content);bo.caml_fs_register=W;return 0}if(!Math.imul)Math.imul=function(b,a){a|=0;return((b>>16)*a<<16)+(b&di)*a|0};var
jy=Math.imul;function
id(b,a){a=jy(a,3432918353|0);a=a<<15|a>>>32-15;a=jy(a,461845907);b^=a;b=b<<13|b>>>32-13;return(b+(b<<2)|0)+(3864292196|0)|0}function
Nr(d,b){var
e=b.length,a,c;for(a=0;a+4<=e;a+=4){c=b[a]|b[a+1]<<8|b[a+2]<<16|b[a+3]<<24;d=id(d,c)}c=0;switch(e&3){case
3:c=b[a+2]<<16;case
2:c|=b[a+1]<<8;case
1:c|=b[a];d=id(d,c)}d^=e;return d}function
NR(a){return a}var
NJ={};function
aon(a){return NJ[a]}function
j(a){if(a
instanceof
Array)return a;if(bo.RangeError&&a
instanceof
bo.RangeError&&a.message&&a.message.match(/maximum call stack/i))return NR(b8.Stack_overflow);if(bo.InternalError&&a
instanceof
bo.InternalError&&a.message&&a.message.match(/too much recursion/i))return NR(b8.Stack_overflow);if(a
instanceof
bo.Error)return[0,aon("jsError"),a];return[0,b8.Failure,jv(String(a))]}function
b_R(){return 0}function
NU(){var
a=new
Date()^4294967295*Math.random();return[0,a]}function
qK(c){var
b=0;for(var
a=c.length-1;a>=0;a--){var
d=c[a];b=[0,d,b]}return b}function
b95(a,b,c){return a.get([b,c])}function
aot(){return 0}function
caF(a){return a}function
b_j(a,b,c){a.set1(b,c&K);a.set1(b+1,c>>>8&K);return 0}function
cal(a){if(k0(a)&&CQ(a)){var
b=gi(a);b.push(i);Co=b.join(kL);return 0}else
uX(a)}function
b_1(){return[gT,0,0,0]}function
b$m(b,a){delete
b[a];return 0}function
gh(f){var
h=NN(f),c=h[0],i=h[1],d=h[2],g=r(f),j=-1>>>0,e=c<g?$(f,c):0,b=uW(e);if(b<0||b>=d)bR(hH);var
a=b;for(c++;c<g;c++){e=$(f,c);if(e==95)continue;b=uW(e);if(b<0||b>=d)break;a=d*a+b;if(a>j)bR(hH)}if(c!=g)bR(hH);a=i*a;if(d==10&&(a|0)!=a)bR(hH);return a|0}var
b$W={PREFIX_SMALL_BLOCK:cm,PREFIX_SMALL_INT:64,PREFIX_SMALL_STRING:32,CODE_INT8:0,CODE_INT16:1,CODE_INT32:2,CODE_INT64:3,CODE_SHARED8:4,CODE_SHARED16:5,CODE_SHARED32:6,CODE_BLOCK32:8,CODE_BLOCK64:19,CODE_STRING8:9,CODE_STRING32:10,CODE_DOUBLE_BIG:11,CODE_DOUBLE_LITTLE:12,CODE_DOUBLE_ARRAY8_BIG:13,CODE_DOUBLE_ARRAY8_LITTLE:14,CODE_DOUBLE_ARRAY32_BIG:15,CODE_DOUBLE_ARRAY32_LITTLE:7,CODE_CODEPOINTER:16,CODE_INFIXPOINTER:17,CODE_CUSTOM:18};function
b$n(a,b){return+(a==b)}function
an2(d,b){var
e=b.length,a,c;for(a=0;a+4<=e;a+=4){c=b.charCodeAt(a)|b.charCodeAt(a+1)<<8|b.charCodeAt(a+2)<<16|b.charCodeAt(a+3)<<24;d=id(d,c)}c=0;switch(e&3){case
3:c=b.charCodeAt(a+2)<<16;case
2:c|=b.charCodeAt(a+1)<<8;case
1:c|=b.charCodeAt(a);d=id(d,c)}d^=e;return d}function
dT(a,b){return+(mq(a,b,false)>0)}function
b9Z(b,a){a.blit(b);return 0}function
Ns(b,f){var
n=b.read32u(),m=b.read32u(),j=b.read32u(),o=b.read32u(),p=b.read32u(),k=[],c=j>0?[]:null,h=0;function
e(){var
j=b.read8u();if(j>=64)if(j>=cm){var
n=j&15,m=j>>4&7,a=[n];if(m==0)return a;if(c)c[h++]=a;k.push(a,m);return a}else
return j&63;else
if(j>=32){var
g=j&31,a=b.readstr(g);if(c)c[h++]=a;return a}else
switch(j){case
0:return b.read8s();case
1:return b.read16s();case
2:return b.read32s();case
3:bR("input_value: integer too large");break;case
4:var
l=b.read8u();return c[h-l];case
5:var
l=b.read16u();return c[h-l];case
6:var
l=b.read32u();return c[h-l];case
8:var
p=b.read32u(),n=p&K,m=p>>10,a=[n];if(m==0)return a;if(c)c[h++]=a;k.push(a,m);return a;case
19:bR("input_value: data block too large");break;case
9:var
g=b.read8u(),a=b.readstr(g);if(c)c[h++]=a;return a;case
10:var
g=b.read32u(),a=b.readstr(g);if(c)c[h++]=a;return a;case
12:var
e=new
Array(8);for(var
d=0;d<8;d++)e[7-d]=b.read8u();var
a=n_(e);if(c)c[h++]=a;return a;case
11:var
e=new
Array(8);for(var
d=0;d<8;d++)e[d]=b.read8u();var
a=n_(e);if(c)c[h++]=a;return a;case
14:var
g=b.read8u(),a=new
Array(g+1);a[0]=gT;var
e=new
Array(8);if(c)c[h++]=a;for(var
d=1;d<=g;d++){for(var
f=0;f<8;f++)e[7-f]=b.read8u();a[d]=n_(e)}return a;case
13:var
g=b.read8u(),a=new
Array(g+1);a[0]=gT;var
e=new
Array(8);if(c)c[h++]=a;for(var
d=1;d<=g;d++){for(var
f=0;f<8;f++)e[f]=b.read8u();a[d]=n_(e)}return a;case
7:var
g=b.read32u(),a=new
Array(g+1);a[0]=gT;if(c)c[h++]=a;var
e=new
Array(8);for(var
d=1;d<=g;d++){for(var
f=0;f<8;f++)e[7-f]=b.read8u();a[d]=n_(e)}return a;case
15:var
g=b.read32u(),a=new
Array(g+1);a[0]=gT;var
e=new
Array(8);for(var
d=1;d<=g;d++){for(var
f=0;f<8;f++)e[f]=b.read8u();a[d]=n_(e)}return a;case
16:case
17:bR("input_value: code pointer");break;case
18:var
o,q=i;while((o=b.read8u())!=0)q+=String.fromCharCode(o);switch(q){case"_j":var
e=new
Array(8);for(var
f=0;f<8;f++)e[f]=b.read8u();var
a=Cu(e);if(c)c[h++]=a;return a;case"_i":var
a=b.read32s();if(c)c[h++]=a;return a;case"_n":switch(b.read8u()){case
1:var
a=b.read32s();if(c)c[h++]=a;return a;case
2:bR("input_value: native integer value too large");default:bR("input_value: ill-formed native integer")}default:bR("input_value: unknown custom block identifier")}default:bR("input_value: ill-formed message")}}var
l=e();while(k.length>0){var
g=k.pop(),a=k.pop(),d=a.length;if(d<g)k.push(a,g);a[d]=e()}if(typeof
f!="number")f[0]=b.i;return l}function
b_f(a,b){return a.slice(ju(b))}function
uY(){CN(b8.Division_by_zero)}function
an5(b,a){if(Ct(a))uY();var
d=b[3]^a[3];if(b[3]&f$)b=fB(b);if(a[3]&f$)a=fB(a);var
c=uR(b,a)[1];if(d&f$)c=fB(c);return c}function
c2(a,b){return a.get1(b)}function
b9O(c,d,a,b){while(b>0){if(c2(c,a)==d)return a;a++;b--}return-1}function
b$y(c){var
b,a=document.createElement(akc);a.innerHTML=c;b=a.textContent||a.innerText;a=null;return b}function
NE(a){return r(a.file.data)}function
Cv(a){if(a<0)a=Math.ceil(a);return[K,a&aX,Math.floor(a*qI)&aX,Math.floor(a*qI*qI)&di]}function
NF(a){return Cv(r(a.file.data))}function
b_c(a,b,c,d){return a.set([b,c],d)}function
ax(a,c,b){b&=K;if(a.t!=4){if(c==a.c.length){a.c+=String.fromCharCode(b);if(c+1==a.l)a.t=0;return 0}n9(a)}a.c[c]=b;return 0}function
b9W(b,c){function
f(a){NQ(b8.Undefined_recursive_module,b)}function
e(b,c,a){if(typeof
b==="number")switch(b){case
0:c[a]={fun:f};break;case
1:c[a]=[z,f];break;default:c[a]=[]}else
switch(b[0]){case
0:c[a]=[0];for(var
d=1;d<b[1].length;d++)e(b[1][d],c[a],d);break;default:c[a]=b[1]}}var
a=[];e(c,a,0);return a[0]}function
b$p(a){return eval(a.toString())}function
b_p(a,b){a.t&6&&cP(a);b.t&6&&cP(b);return a.c<b.c?-1:a.c>b.c?1:0}function
CE(c,b){function
a(b,a){return $(b,a)<<24|$(b,a+1)<<16|$(b,a+2)<<8|$(b,a+3)}if(a(c,b)!=(MO|0))bR(alt);return a(c,b+4)}function
Nl(b,a){this.s=mp(b);this.i=a}Nl.prototype={read8u:function(){return this.s.charCodeAt(this.i++)},read8s:function(){return this.s.charCodeAt(this.i++)<<24>>24},read16u:function(){var
b=this.s,a=this.i;this.i=a+2;return b.charCodeAt(a)<<8|b.charCodeAt(a+1)},read16s:function(){var
b=this.s,a=this.i;this.i=a+2;return b.charCodeAt(a)<<24>>16|b.charCodeAt(a+1)},read32u:function(){var
b=this.s,a=this.i;this.i=a+4;return(b.charCodeAt(a)<<24|b.charCodeAt(a+1)<<16|b.charCodeAt(a+2)<<8|b.charCodeAt(a+3))>>>0},read32s:function(){var
b=this.s,a=this.i;this.i=a+4;return b.charCodeAt(a)<<24|b.charCodeAt(a+1)<<16|b.charCodeAt(a+2)<<8|b.charCodeAt(a+3)},readstr:function(c){var
b=this.i;this.i=b+c;return a(this.s.substring(b,b+c))}};function
Nt(c,a){var
b=new
Nl(c,typeof
a=="number"?a:a[0]);return Ns(b,a)}function
oa(a){var
c=a.file.data,b=[a.offset],e=CE(c,b[0]),d=Nt(c,b);a.offset=b[0];return d}function
b99(a){return a.kind}function
b$v(b,a){return b.apply(null,ju(a))}function
b9P(e,d,c,f,g){var
b=uV(f);if(b.length>c)bR(adi);for(var
a=0;a<b.length;a++)uO(e,a+d,b[a]);return b.length}function
b$F(a){return a()}function
aoy(b){var
a=bo;if(a.quit)a.quit(b);if(a.process&&a.process.exit)a.process.exit(b);bS("Function 'exit' not implemented")}function
uS(a,e,d,b){var
c=r(a.file.data)-a.offset;if(c==0&&a.refill!=null)c=CJ(a);if(c<b)b=c;fA(a.file.data,a.offset,e,d,b);a.offset+=b;return b}function
b_b(a,b){return a.reshape(ju(b))}function
b$d(c){var
a=new(bo.Float32Array)(1);a[0]=c;var
b=new(bo.Int32Array)(a.buffer);return b[0]|0}function
b__(b,a){return Nr(b,a.data)}function
O(a){a[2]=NM++;return a}function
aos(){return 0}function
anX(){return b8}function
caA(d){var
a=new
Date(d*hI),c=new
Date(Date.UTC(a.getUTCFullYear(),0,1)),b=Math.floor((a-c)/acn);return[0,a.getUTCSeconds(),a.getUTCMinutes(),a.getUTCHours(),a.getUTCDate(),a.getUTCMonth(),a.getUTCFullYear()-LX,a.getUTCDay(),b,false|0]}function
b_h(a,b){var
c=a.get1(b),d=a.get1(b+1)<<8;return c|d}function
an9(b,a){a=a&63;if(a==0)return b;if(a<24)return[K,(b[1]>>a|b[2]<<24-a)&aX,(b[2]>>a|b[3]<<24-a)&aX,b[3]>>a];if(a<48)return[K,(b[2]>>a-24|b[3]<<48-a)&aX,b[3]>>a-24,0];return[K,b[3]>>a-48,0,0]}function
cam(){return[0,a("js_of_ocaml")]}function
aoA(){return[0,a(Ld),32,0]}function
cp(a,b){return mq(a,b,true)}var
ob=new
Array();function
aod(){var
b=0;for(var
a=0;a<ob.length;a++)if(ob[a]&&ob[a].opened)b=[0,ob[a],b];return b}function
ig(b,a,c){if(a>>>0>=b.l)ie();return ax(b,a,c)}function
anI(b,e,f,c,d){for(var
a=0;a<d;a++)ig(f,c+a,c2(b,e+a));return 0}function
b_T(){return NM++}function
Cz(a){return(a[3]<<16)*Math.pow(2,32)+a[2]*Math.pow(2,24)+a[1]}function
b9T(b){var
a=new(bo.Uint8Array)(b);return qH(a,null,0,12,0,[a.length])}function
b9N(a){return 0}function
b$6(){return 0}function
No(a,b){var
c=a.get1(b),d=a.get1(b+1)<<8,e=a.get1(b+2)<<16,f=a.get1(b+3)<<24;return c|d|e|f}function
b9U(a){return a.data.buffer}function
jx(b,a){if(a==0)uY();return b%a}function
CK(d,c){var
b=new
Array(c+1);b[0]=d;for(var
a=1;a<=c;a++)b[a]=0;return b}function
b98(){return 0}function
b_S(){return 0}function
b97(a,b){return a.get(ju(b))}function
Nk(a,b){this.s=a;this.i=b}Nk.prototype={read8u:function(){return c2(this.s,this.i++)},read8s:function(){return c2(this.s,this.i++)<<24>>24},read16u:function(){var
b=this.s,a=this.i;this.i=a+2;return c2(b,a)<<8|c2(b,a+1)},read16s:function(){var
b=this.s,a=this.i;this.i=a+2;return c2(b,a)<<24>>16|c2(b,a+1)},read32u:function(){var
b=this.s,a=this.i;this.i=a+4;return(c2((b,a)<<24)|c2(b,a+1)<<16|c2(b,a+2)<<8|c2(b,a+3))>>>0},read32s:function(){var
b=this.s,a=this.i;this.i=a+4;return c2(b,a)<<24|c2(b,a+1)<<16|c2(b,a+2)<<8|c2(b,a+3)},readstr:function(b){var
d=this.i,c=new
Array(b);for(var
a=0;a<b;a++)c[a]=c2(this.s,d+a);this.i=d+b;return qL(c)}};function
b_9(){return 0}function
CT(c,e){var
d=c.length,b=new
Array(d+1);b[0]=e;for(var
a=1;a<=d;a++)b[a]=c[a-1];return b}function
b$H(a){return CT(a,0)}function
NT(a){delete
b8.fds[a];return 0}function
Nq(i,c){var
a,e=CM(i),d=e.prec<0?6:e.prec;if(c<0||c==0&&1/c==-Infinity){e.sign=-1;c=-c}if(isNaN(c)){a=uy;e.filler=dn}else
if(!isFinite(c)){a="inf";e.filler=dn}else
switch(e.conv){case"e":var
a=c.toExponential(d),b=a.length;if(a.charAt(b-3)==Cl)a=a.slice(0,b-1)+dl+a.slice(b-1);break;case"f":a=c.toFixed(d);break;case"g":d=d?d:1;a=c.toExponential(d-1);var
h=a.indexOf(Cl),g=+a.slice(h+1);if(g<-4||c>=1e+21||c.toFixed(0).length>d){var
b=h-1;while(a.charAt(b)==dl)b--;if(a.charAt(b)==b0)b--;a=a.slice(0,b+1)+a.slice(h);b=a.length;if(a.charAt(b-3)==Cl)a=a.slice(0,b-1)+dl+a.slice(b-1);break}else{var
f=d;if(g<0){f-=g+1;a=c.toFixed(f)}else
while(a=c.toFixed(f),a.length>d+1)f--;if(f){var
b=a.length-1;while(a.charAt(b)==dl)b--;if(a.charAt(b)==b0)b--;a=a.slice(0,b+1)}}break}return Cr(e,a)}function
cai(b,a,c){if(a>>>0>=b.l+1)ie();var
e=K&c>>8,d=K&c;ax(b,a+0,d);ax(b,a+1,e);return 0}function
b$g(a){return[K,(a[3]&uf)>>8|(a[3]&K)<<8|a[2]&My,(a[2]&uf)>>8|(a[2]&K)<<8|a[1]&My,(a[1]&uf)>>8|(a[1]&K)<<8]}function
Cp(b,a){if(a==0)uY();return b/a|0}function
Cq(a,c,b,d){if(b>0)if(c==0&&(b>=a.l||a.t==2&&b>=a.c.length))if(d==0){a.c=i;a.t=2}else{a.c=oe(b,String.fromCharCode(d));a.t=b==a.l?0:2}else{if(a.t!=4)n9(a);for(b+=c;c<b;c++)a.c[c]=d}return 0}function
CP(a,b){a.t&6&&cP(a);b.t&6&&cP(b);return a.c<b.c?1:0}function
cah(a,b){return CP(b,a)}function
b_4(){return 0}function
b_G(a){return a[jt]===undefined?0:[0,uT(a[jt])]}function
b_Y(b,a){if(bo.caml_fs_register)bo.caml_fs_register(b,a);else{if(!bo.caml_fs_tmp)bo.caml_fs_tmp=[];bo.caml_fs_tmp.push({name:b,content:a})}return 0}function
cq(b){b=mp(b);var
d=b.length/2,c=new
Array(d);for(var
a=0;a<d;a++)c[a]=(b.charCodeAt(2*a)|b.charCodeAt(2*a+1)<<8)<<16>>16;return c}function
an_(b,t,a){var
n=2,o=3,r=5,d=6,h=7,g=8,j=9,m=1,l=2,q=3,s=4,p=5;if(!b.lex_default){b.lex_base=cq(b[m]);b.lex_backtrk=cq(b[l]);b.lex_check=cq(b[p]);b.lex_trans=cq(b[s]);b.lex_default=cq(b[q])}var
e,c=t,k=Nn(a[n]);if(c>=0){a[h]=a[r]=a[d];a[g]=-1}else
c=-c-1;for(;;){var
f=b.lex_base[c];if(f<0)return-f-1;var
i=b.lex_backtrk[c];if(i>=0){a[h]=a[d];a[g]=i}if(a[d]>=a[o])if(a[j]==0)return-c-1;else
e=dR;else{e=k[a[d]];a[d]++}c=b.lex_check[f+e]==c?b.lex_trans[f+e]:b.lex_default[c];if(c<0){a[d]=a[h];if(a[g]==-1)bR(adt);else
return a[g]}else
if(e==dR)a[j]=0}}function
aoz(){var
a=bo,f=ahr,b=[];if(a.process&&a.process.argv&&a.process.argv.length>1){var
c=a.process.argv;f=c[1];b=qR(c,2,c.length-2)}var
g=jv(f),e=[0,g];for(var
d=0;d<b.length;d++)e.push(jv(b[d]));return[0,g,e]}function
b$I(a){return+a}var
g2=3;function
jz(b,a){if(a<0||g2+a>=b.length)bS("Weak.get_key");return b[g2+a]===undefined?0:b[g2+a]}function
qQ(c,b){if(b<0||g2+b>=c.length)bS("Weak.get_copy");var
a=jz(c,b);if(a===0)return a;var
d=a[1];if(d
instanceof
Array)return[0,uT(d)];return a}var
b_I=qQ;function
Np(){bR(alT)}function
b$7(){return 0}function
js(e,f,d){var
a=new
Array(d+1);a[0]=0;for(var
b=1,c=f+1;b<=d;b++,c++)a[b]=e[c];return a}function
fC(a,b){return+(mq(a,b,false)<0)}function
b_q(a,b){if(a===b)return 1;a.t&6&&cP(a);b.t&6&&cP(b);return a.c==b.c?1:0}function
b$X(a){return a.l}function
aov(){return 0}function
aF(c,b,a){b8[c+1]=b;if(a)b8[a]=b}function
b_y(a){return(Math.exp(a)+Math.exp(-a))/2}function
mt(b,a){return b[g2+a]!==undefined&&b[g2+a]!==0?1:0}var
b_D=mt;function
anY(a){a^=a>>>16;a=jy(a,2246822507|0);a^=a>>>13;a=jy(a,3266489909|0);a^=a>>>16;return a}function
b_l(a,b,c){a.set1(b,c[1]&K);a.set1(b+1,c[1]>>8&K);a.set1(b+2,c[1]>>16);a.set1(b+3,c[2]&K);a.set1(b+4,c[2]>>8&K);a.set1(b+5,c[2]>>16);a.set1(b+6,c[3]&K);a.set1(b+7,c[3]>>8);return 0}function
b$S(d,a,c,f){for(;;){var
b=d.charCodeAt(a);a++;if(b==K)return;var
e=d.charCodeAt(a);a++;c[b+1]=e==K?f:c[e+1]}}function
an$(d,a,c){for(;;){var
b=d.charCodeAt(a);a++;if(b==K)return;var
e=d.charCodeAt(a);a++;c[b+1]=e==K?-1:c[e+1]}}function
aoo(a,D,b){var
t=2,u=3,A=5,e=6,i=7,h=8,n=9,j=10,r=1,p=2,y=3,B=4,v=5,s=6,q=7,z=8,C=9,w=10,x=11;if(!a.lex_default){a.lex_base=cq(a[r]);a.lex_backtrk=cq(a[p]);a.lex_check=cq(a[v]);a.lex_trans=cq(a[B]);a.lex_default=cq(a[y])}if(!a.lex_default_code){a.lex_base_code=cq(a[s]);a.lex_backtrk_code=cq(a[q]);a.lex_check_code=cq(a[w]);a.lex_trans_code=cq(a[C]);a.lex_default_code=cq(a[z])}if(a.lex_code==null)a.lex_code=mp(a[x]);var
d,c=D,o=Nn(b[t]);if(c>=0){b[i]=b[A]=b[e];b[h]=-1}else
c=-c-1;for(;;){var
g=a.lex_base[c];if(g<0){var
f=a.lex_base_code[c];an$(a.lex_code,f,b[j]);return-g-1}var
l=a.lex_backtrk[c];if(l>=0){var
f=a.lex_backtrk_code[c];an$(a.lex_code,f,b[j]);b[i]=b[e];b[h]=l}if(b[e]>=b[u])if(b[n]==0)return-c-1;else
d=dR;else{d=o[b[e]];b[e]++}var
k=c;c=a.lex_check[g+d]==c?a.lex_trans[g+d]:a.lex_default[c];if(c<0){b[e]=b[i];if(b[h]==-1)bR(adt);else
return b[h]}else{var
m=a.lex_base_code[k],f;f=a.lex_check_code[m+d]==k?a.lex_trans_code[m+d]:a.lex_default_code[k];if(f>0)b$S(a.lex_code,f,b[j],b[e]);if(d==dR)b[n]=0}}}function
b$t(a){return a}function
b_8(){return[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}function
ms(a,b){return+(mq(a,b,false)<=0)}function
aom(a,b){a.offset=Cz(b);return 0}function
b_7(a){return 0}function
b$w(b,a){return b[a]}var
CG=[];function
B(i,h,d){var
b=i[1],g=CG[d];if(g===null)for(var
f=CG.length;f<d;f++)CG[f]=0;else
if(b[g]===h)return b[g-1];var
a=3,e=b[1]*2+1,c;while(a<e){c=a+e>>1|1;if(h<b[c+1])e=c-2;else
a=c}CG[d]=a+1;return h==b[a+1]?b[a]:0}function
b$x(){var
b=bo.console?bo.console:{},c=[ME,"debug",Ne,ak9,ug,B_,"dir","dirxml","trace","group","groupCollapsed","groupEnd","time","timeEnd"];function
d(){}for(var
a=0;a<c.length;a++)if(!b[c[a]])b[c[a]]=d;return b}function
uZ(c,d,a){if(b8.fds===undefined)b8.fds=new
Array();a=a?a:{};var
b={};b.file=d;b.offset=a.append?r(d.data):0;b.flags=a;b8.fds[c]=b;b8.fd_last_idx=c;return c}function
CR(b,d,h){var
a={};while(d){switch(d[1]){case
0:a.rdonly=1;break;case
1:a.wronly=1;break;case
2:a.append=1;break;case
3:a.create=1;break;case
4:a.truncate=1;break;case
5:a.excl=1;break;case
6:a.binary=1;break;case
7:a.text=1;break;case
8:a.nonblock=1;break}d=d[2]}var
e=b.toString(),g=gi(b);if(a.rdonly&&a.wronly)dF(e+" : flags Open_rdonly and Open_wronly are not compatible");if(a.text&&a.binary)dF(e+" : flags Open_text and Open_binary are not compatible");if(k0(b)){if(CQ(b))dF(e+aif);if(a.create&&a.excl)dF(e+L4);var
f=b8.fd_last_idx?b8.fd_last_idx:0,c=kX(g);if(a.truncate)c.truncate();return uZ(f+1,c,a)}else
if(a.create){var
f=b8.fd_last_idx?b8.fd_last_idx:0;W(b,aN(0));var
c=kX(g);return uZ(f+1,c,a)}else
uX(b)}uZ(0,new
ia(aN(0)));uZ(1,new
ia(aN(0)));uZ(2,new
ia(aN(0)));function
NH(b){var
a=b8.fds[b];if(a.flags.wronly)dF(adj+b+" is writeonly");return{file:a.file,offset:a.offset,fd:b,opened:true,refill:null}}function
b_0(){return 0}var
b_H=jz,CD={amp:/&/g,lt:/</g,quot:/\"/g,all:/[&<\"]/};function
b$z(a){if(!CD.all.test(a))return a;return a.replace(CD.amp,"&amp;").replace(CD.lt,"&lt;").replace(CD.quot,"&quot;")}function
g4(a){dE(a);a.opened=false;delete
ob[a.fd];NT(a.fd);return 0}function
caE(){}function
aoK(b){var
a=kX(gi(b));return NX(a)}function
b_N(a,b){if(!a.js_error||b)a.js_error=new(bo.Error)("Js exception containing backtrace");return a}function
cas(a){return 0}function
b92(a){return a.nth_dim(1)}function
aoB(){return 1}function
caB(){return 0}function
b$$(a){return(Math.exp(a)-Math.exp(-a))/2}function
b$G(b,a,c){b[a]=c;return 0}function
b$R(b,a){a|=0;if(a>gS){a-=gS;b*=Math.pow(2,gS);if(a>gS){a-=gS;b*=Math.pow(2,gS)}}if(a<-gS){a+=gS;b*=Math.pow(2,-gS)}b*=Math.pow(2,a);return b}function
b9X(b,a){if(a<0||a>=b.length-1)jr();return b[a+1]}function
anW(){return[0]}function
Ny(a,b){if(Ct(b))uY();var
d=a[3];if(a[3]&f$)a=fB(a);if(b[3]&f$)b=fB(b);var
c=uR(a,b)[2];if(d&f$)c=fB(c);return c}function
NK(b,a){b[0]=a;return 0}function
b9V(c,a){var
b=new
Nk(c,typeof
a=="number"?a:a[0]);return Ns(b,a)}function
b$e(a){return(a&K)<<24|(a&uf)<<8|(a&My)>>>8|(a&4278190080)>>>24}function
cab(){bR("Spacetime profiling only works for native code")}function
caG(){}function
aok(a,b){if(a.refill!=null)dF(afX);a.offset=Cz(b);return 0}function
b_d(a,b,c,d,e){return a.set([b,c,d],e)}function
b$A(b,a){return b
instanceof
a}function
anZ(a,e){var
b=Nu(e),d=b[1]|b[2]<<24,c=b[2]>>>8|b[3]<<16;a=id(a,d);a=id(a,c);return a}function
J(a,b){return+(mq(a,b,false)!=0)}function
Cx(b,a){a=a&63;if(a==0)return b;if(a<24)return[K,b[1]<<a&aX,(b[2]<<a|b[1]>>24-a)&aX,(b[3]<<a|b[2]>>24-a)&di];if(a<48)return[K,0,b[1]<<a-24&aX,(b[2]<<a-24|b[1]>>48-a)&di];return[K,0,0,b[1]<<a-48&di]}function
aoG(c,e){var
d=c.length,b=new
Array(d+1),a=0;for(;a<d;a++)b[a]=c[a];b[a]=e;return b}function
dS(b,a){if(b.fun)return dS(b.fun,a);var
c=b.length,d=a.length,e=c-d;if(e==0)return b.apply(null,a);else
if(e<0)return dS(b.apply(null,qR(a,0,c)),qR(a,c,d-c));else
return function(c){return dS(b,aoG(a,c))}}function
ND(a){return function(){return dS(a,CT(arguments,this))}}function
cao(){return 32}function
b$j(a){return 1}var
b_m=anI;function
cak(c,b,e){if(b>>>0>=c.l+7)ie();var
d=Cy(e);for(var
a=0;a<8;a++)ax(c,b+7-a,d[a]);return 0}function
b91(a){return a.nth_dim(0)}function
aoH(b){var
d=b.length,c=new
Array(d);for(var
a=0;a<d;a++)c[a]=b[a];return c}function
b$N(a){return function(){return arguments.length>0?dS(a,aoH(arguments)):dS(a,[undefined])}}function
b$B(a,c,b){return a[c.toString()].apply(a,ju(b))}function
anO(f,b,c,e,a,d){bR("caml_ba_map_file not Implemented")}function
b9$(a,b){return anO(a[0],a[1],a[2],a[3],a[4],a[5])}function
aoJ(g){var
a=new
Date(g*hI),d=new
Date(a.getFullYear(),0,1),b=Math.floor((a-d)/acn),c=new
Date(a.getFullYear(),0,1),e=new
Date(a.getFullYear(),6,1),f=Math.max(c.getTimezoneOffset(),e.getTimezoneOffset());return[0,a.getSeconds(),a.getMinutes(),a.getHours(),a.getDate(),a.getMonth(),a.getFullYear()-LX,a.getDay(),b,a.getTimezoneOffset()<f|0]}function
qP(a){if(a<0)bS("Weak.create");var
b=[uo,"caml_ephe_list_head"];b.length=g2+a;return b}var
b_E=qP;function
b$J(b){return a(b)}function
cax(a){var
b=Math.exp(a),c=Math.exp(-a);return(b+c)/(b-c)}function
caz(a){return NX(b8.fds[a].file)}var
mn=bo.JSON;if(typeof
mn!==f9)mn={};(function(){"use strict";var
l=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,n=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,h=/(?:^|:|,)(?:\s*\[)+/g,d=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function
a(a){return a<10?dl+a:a}function
e(){return this.valueOf()}if(typeof
Date.prototype.toJSON!==fq){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+co+a(this.getUTCMonth()+1)+co+a(this.getUTCDate())+"T"+a(this.getUTCHours())+nM+a(this.getUTCMinutes())+nM+a(this.getUTCSeconds())+"Z":null};Boolean.prototype.toJSON=e;Number.prototype.toJSON=e;String.prototype.toJSON=e}var
b,j,g,f;function
m(a){d.lastIndex=0;return d.test(a)?gQ+a.replace(d,function(a){var
b=g[a];return typeof
b===dB?b:ahb+(afC+a.charCodeAt(0).toString(16)).slice(-4)})+gQ:gQ+a+gQ}function
k(l,n){var
c,g,e,h,i=b,d,a=n[l];if(a&&typeof
a===f9&&typeof
a.toJSON===fq)a=a.toJSON(l);if(typeof
f===fq)a=f.call(n,l,a);switch(typeof
a){case"string":return m(a);case"number":return isFinite(a)?String(a):fp;case"boolean":case"null":return String(a);case"object":if(!a)return fp;b+=j;d=[];if(Object.prototype.toString.apply(a)==="[object Array]"){h=a.length;for(c=0;c<h;c+=1)d[c]=k(c,a)||fp;e=d.length===0?nR:b?"[\n"+b+d.join(adE+b)+LZ+i+hP:l$+d.join(n3)+hP;b=i;return e}if(f&&typeof
f===f9){h=f.length;for(c=0;c<h;c+=1)if(typeof
f[c]===dB){g=f[c];e=k(g,a);if(e)d.push(m(g)+(b?gU:nM)+e)}}else
for(g
in
a)if(Object.prototype.hasOwnProperty.call(a,g)){e=k(g,a);if(e)d.push(m(g)+(b?gU:nM)+e)}e=d.length===0?"{}":b?"{\n"+b+d.join(adE+b)+LZ+i+me:nU+d.join(n3)+me;b=i;return e}}if(typeof
mn.stringify!==fq){g={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};mn.stringify=function(e,a,c){var
d;b=i;j=i;if(typeof
c==="number")for(d=0;d<c;d+=1)j+=dn;else
if(typeof
c===dB)j=c;f=a;if(a&&typeof
a!==fq&&(typeof
a!==f9||typeof
a.length!=="number"))throw new
Error("JSON.stringify");return k(i,{"":e})}}if(typeof
mn.parse!==fq)mn.parse=function(a,f){var
b;function
g(d,e){var
b,c,a=d[e];if(a&&typeof
a===f9)for(b
in
a)if(Object.prototype.hasOwnProperty.call(a,b)){c=g(a,b);if(c!==undefined)a[b]=c;else
delete
a[b]}return f.call(d,e,a)}a=String(a);c.lastIndex=0;if(c.test(a))a=a.replace(c,function(a){return ahb+(afC+a.charCodeAt(0).toString(16)).slice(-4)});if(l.test(a.replace(o,Lt).replace(n,hP).replace(h,i))){b=eval(bI+a+bc);return typeof
f===fq?g({"":b},i):b}throw new
SyntaxError("JSON.parse")}}());function
b$P(){return mn}function
c4(a){var
b=1;while(a&&a.joo_tramp){a=a.joo_tramp.apply(null,a.joo_args);b++}return a}function
caD(a){var
c=new
Date(a[6]+LX,a[5],a[4],a[3],a[2],a[1]),b=Math.floor(c.getTime()/hI),d=aoJ(b);return[0,b,d]}function
b_V(b){var
d=gi(b),a=kX(d);if(a
instanceof
ia){var
c=u1();a.atime=c;return a.data}NP()}function
ii(b,a,c){if(a<0||g2+a>=b.length)bS("Weak.set");b[g2+a]=c;return 0}function
b_Z(g,e){var
c=gi(g),a=od;for(var
d=0;d<c.length-1;d++){var
b=c[d];if(!a.exists(b))a.mk(b,new
fz());a=a.get(b);if(!(a
instanceof
fz))dF(c.orig+alB)}var
b=c[c.length-1];if(!a.exists(b))dF(c.orig+alB);if(e
instanceof
dD){var
f=a.get(b);f.data=e}else
bS("caml_fs_update_inode");return 0}function
cae(b,a){if(a>>>0>=b.l+3)ie();var
c=$(b,a),d=$(b,a+1),e=$(b,a+2),f=$(b,a+3);return f<<24|e<<16|d<<8|c}function
anS(a,b){switch(a.t&6){default:if(b>=a.c.length)return 0;case
0:return a.c.charCodeAt(b);case
4:return a.c[b]}}function
b_r(b,a){if(a>>>0>=b.l)ie();return anS(b,a)}function
b$a(a,b){var
a=Math.abs(a),b=Math.abs(b),c=Math.max(a,b),d=Math.min(a,b)/(c?c:1);return c*Math.sqrt(1+d*d)}function
b$f(c){var
a=new(bo.Int32Array)(1);a[0]=c;var
b=new(bo.Float32Array)(a.buffer);return b[0]}function
aog(a){return Cv(a.offset)}function
b$l(b,c,a){return b.apply(c,ju(a))}function
b$9(a){return 0}function
cap(){return jc/4|0}function
b_M(b,a){return ii(b,a,0)}function
aoh(a){return a.offset}function
caa(a){return 0}function
A(a,b){if(a===b)return 1;a.t&6&&cP(a);b.t&6&&cP(b);return a.c==b.c?1:0}function
b_u(a,b){return 1-A(a,b)}function
b$D(b){var
c={};for(var
a=1;a<b.length;a++){var
d=b[a];c[d[1].toString()]=d[2]}return c}function
mo(d,b,e,c,f){if(c<=b)for(var
a=1;a<=f;a++)e[c+a]=d[b+a];else
for(var
a=f;a>=1;a--)e[c+a]=d[b+a];return 0}function
qO(a,c,b,d,e){mo(a,g2+c-1,b,g2+d-1,e);return 0}function
anR(a,b){a.t&6&&cP(a);b.t&6&&cP(b);return a.c<b.c?1:0}function
b_6(){return[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}function
aob(a){var
c=a.file.data,b=a.offset;while(b+3>=r(c)){var
d=CJ(a);if(d==0)NO();c=a.file.data;b=a.offset}var
e=$(c,b)<<24|$(c,b+1)<<16|$(c,b+2)<<8|$(c,b+3);a.offset+=4;return e}function
b_o(a){return(a&K)<<8|(a&uf)>>8}function
NI(c,b){var
a=b8.fds[c.fd];a.flags.text=!b;a.flags.binary=b;return 0}function
b_Q(){return 0}function
car(){return a(Co)}function
gf(a){var
b;a=mp(a);b=+a;if(a.length>0&&b===b)return b;a=a.replace(/_/g,i);b=+a;if(a.length>0&&b===b||/^[+-]?nan$/i.test(a))return b;var
c=/^ *([+-]?)0x([0-9a-f]+)\.?([0-9a-f]*)p([+-]?[0-9]+)/i.exec(a);if(c){var
d=c[3].replace(/0+$/,i),f=parseInt(c[1]+c[2]+d,16),e=(c[4]|0)-4*d.length;b=f*Math.pow(2,e);return b}if(/^\+?inf(inity)?$/i.test(a))return Infinity;if(/^-inf(inity)?$/i.test(a))return-Infinity;bR(Ni)}function
cad(b,a){if(a>>>0>=b.l+1)ie();var
c=$(b,a),d=$(b,a+1);return d<<8|c}function
can(){return 0}function
b_L(a,b){a[jt]=undefined;return 0}function
CL(a,b){return qL(uV(a))}function
oc(b,c,d){var
a=CL(c);kZ(b,a,0,r(a));return 0}function
cav(a){return kQ}function
b96(a,b,c,d){return a.get([b,c,d])}var
b_B=qO;function
b$o(a){if(a.js_error)return a.js_error;return null}function
n(a,b){if(b>>>0>=a.length-1)jr();return a}function
an0(b,a){var
d=a[1]|a[2]<<24,c=a[2]>>>8|a[3]<<16;b=id(b,c^d);return b}function
an1(a,b){switch(b.t&6){default:cP(b);case
0:a=an2(a,b.c);break;case
2:a=Nr(a,b.c)}return a}var
anG=dR;function
g3(j,k,m,l){var
f,g,h,d,c,b,a,e,i;d=k;if(d<0||d>anG)d=anG;c=j;b=m;f=[l];g=0;h=1;while(g<h&&c>0){a=f[g++];if(a
instanceof
Array&&a[0]===(a[0]|0))switch(a[0]){case
248:b=id(b,a[2]);c--;break;case
250:f[--g]=a[1];break;case
255:b=an0(b,a);c--;break;default:var
n=a.length-1<<10|a[0];b=id(b,n);for(e=1,i=a.length;e<i;e++){if(h>=d)break;f[h++]=a[e]}break}else
if(a
instanceof
dD){b=an1(b,a);c--}else
if(a===(a|0)){b=id(b,a+a+1);c--}else
if(a===+a){b=anZ(b,a);c--}}b=anY(b);return b&kS}function
b9S(e,f,g,h,d){for(var
a=0;a<d;a++){var
b=c2(e,f+a),c=c2(g,h+a);if(b<c)return-1;if(b>c)return 1}return 0}function
c3(a){return a
instanceof
Array?a[0]:a
instanceof
dD?Av:hI}function
b$q(){return typeof
module!==h5&&module&&module.exports?module.exports:bo}var
b$Z=kZ;function
aoF(a){var
b=bo;if(b.process&&b.process.stdout&&b.process.stdout.write)b.process.stdout.write(a);else{if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.log&&c.log(a)}}function
b_U(a){if(a==0||!isFinite(a))return[0,a,0];var
c=a<0;if(c)a=-a;var
b=NW(a)+1;a*=Math.pow(2,-b);if(a<0.5){a*=2;b-=1}if(c)a=-a;return[0,a,b]}function
b_x(a,b){if(b==0)b=1/b;a=Math.abs(a);return b<0?-a:a}function
b_e(a,b,c){return a.set(ju(b),c)}function
b_K(c,a,b){return ii(c,a,[0,b])}function
aoi(a){return Cv(a.offset)}function
caf(d,c){if(c>>>0>=d.l+7)ie();var
b=new
Array(8);for(var
a=0;a<8;a++)b[7-a]=$(d,c+a);return Cu(b)}function
aou(a,b){a.t&6&&cP(a);b.t&6&&cP(b);return a.c<=b.c?1:0}function
cag(a,b){return aou(b,a)}function
aof(a){return a.offset}function
an4(a,b){return[K,a[1]&b[1],a[2]&b[2],a[3]&b[3]]}function
caq(){return 32}function
b$C(b,a){switch(a.length){case
1:return new
b();case
2:return new
b(a[1]);case
3:return new
b(a[1],a[2]);case
4:return new
b(a[1],a[2],a[3]);case
5:return new
b(a[1],a[2],a[3],a[4]);case
6:return new
b(a[1],a[2],a[3],a[4],a[5]);case
7:return new
b(a[1],a[2],a[3],a[4],a[5],a[6]);case
8:return new
b(a[1],a[2],a[3],a[4],a[5],a[6],a[7])}function
c(){return b.apply(this,ju(a))}c.prototype=b.prototype;return new
c()}function
n$(e,c){if(mp(e)==jj)return a(i+c);var
b=CM(e);if(c<0)if(b.signedconv){b.sign=-1;c=-c}else
c>>>=0;var
d=c.toString(b.base);if(b.prec>=0){b.filler=dn;var
f=b.prec-d.length;if(f>0)d=oe(f,dl)+d}return Cr(b,d)}function
b_z(a){if(a<0)bS("Bytes.create");return new
dD(a?2:9,i,a)}function
b$u(a){return a.toString()}function
NL(b,a){if(a<=0||a+1>b.length)bS("Obj.truncate");if(b.length!=a+1)b.length=a+1;return 0}function
b_g(a,c,b){return a.sub(c,b)}function
b_2(){return 0}function
b$i(a){return a[3]==di&&(a[1]&a[2])==aX}function
cac(b,h){var
g=a(h),c=r(g),f=r(b.file.data),e=b.offset;if(e+c>=f){var
d=aN(e+c);fA(b.file.data,0,d,0,f);fA(g,0,d,e,c);b.file.data=d}b.offset+=c;b.file.modified();return 0}function
CI(a){var
b;switch(a){case
1:b=aoF;break;case
2:b=u0;break;default:b=cac}var
d=b8.fds[a];if(d.flags.rdonly)dF(adj+a+" is readonly");var
c={file:d.file,offset:d.offset,fd:a,opened:true,buffer:i,output:b};ob[c.fd]=c;return c}function
Nm(a){var
c=[0];while(a!==0){var
d=a[1];for(var
b=1;b<d.length;b++)c.push(d[b]);a=a[2]}return c}function
b_k(a,b,c){a.set1(b,c&K);a.set1(b+1,c>>>8&K);a.set1(b+2,c>>>16&K);a.set1(b+3,c>>>24&K);return 0}function
ib(d,e,a,f,c){if(c==0)return 0;if(f==0&&(c>=a.l||a.t==2&&c>=a.c.length)){a.c=d.t==4?qM(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);a.t=a.c.length==a.l?0:2}else
if(a.t==2&&f==a.c.length){a.c+=d.t==4?qM(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);a.t=a.c.length==a.l?0:2}else{if(a.t!=4)n9(a);var
g=d.c,h=a.c;if(d.t==4)for(var
b=0;b<c;b++)h[f+b]=g[e+b];else{var
i=Math.min(c,g.length-e);for(var
b=0;b<i;b++)h[f+b]=g.charCodeAt(e+b);for(;b<c;b++)h[f+b]=0}}return 0}function
aow(){return 1}function
b_J(b,a){b[jt]=a;return 0}function
b9Q(b,a){if(No(b,a)!=(MO|0))bR(alt);return No(b,a+4)}function
b$V(a){var
a=a+1|0,b=new
Array(a);b[0]=gT;for(var
c=1;c<a;c++)b[c]=0;return b}function
aol(a,b){a.offset=b;return 0}function
ic(a,b){return+(mq(a,b,false)>=0)}function
b$L(a){return typeof
a}function
b$O(a){return function(){a.apply(null,CT(arguments,this))}}function
b93(a){return a.nth_dim(2)}function
Cs(){return[0]}function
b_C(a){return a[jt]===undefined?0:1}function
b$U(a){var
b=1+a,c=b-1;return c==0?a:a*Math.log(b)/c}function
Cw(a,b){return[K,a[1]|b[1],a[2]|b[2],a[3]|b[3]]}function
b$s(a){return!!a}function
b$1(){return 0}function
b$Q(a){return[dk,a]}function
b$E(){var
a=bo.navigator?bo.navigator.userAgent:i;return a.indexOf("MSIE")!=-1&&a.indexOf("Opera")!=0}function
b9_(a){return a.layout}var
CF=function(){function
l(a,b){return a+b|0}function
a(d,a,c,f,b,e){a=l(l(a,d),l(f,e));return l(a<<b|a>>>32-b,c)}function
g(c,b,d,e,h,f,g){return a(b&d|~b&e,c,b,h,f,g)}function
h(d,b,e,c,h,f,g){return a(b&c|e&~c,d,b,h,f,g)}function
i(c,b,d,e,h,f,g){return a(b^d^e,c,b,h,f,g)}function
j(c,b,d,e,h,f,g){return a(d^(b|~e),c,b,h,f,g)}function
k(f,n){var
e=n;f[e>>2]|=cm<<8*(e&3);for(e=(e&~3)+8;(e&63)<60;e+=4)f[(e>>2)-1]=0;f[(e>>2)-1]=n<<3;f[e>>2]=n>>29&536870911;var
k=[1732584193,4023233417,2562383102,271733878];for(e=0;e<f.length;e+=16){var
a=k[0],b=k[1],c=k[2],d=k[3];a=g(a,b,c,d,f[e+0],7,3614090360);d=g(d,a,b,c,f[e+1],12,3905402710);c=g(c,d,a,b,f[e+2],17,606105819);b=g(b,c,d,a,f[e+3],22,3250441966);a=g(a,b,c,d,f[e+4],7,4118548399);d=g(d,a,b,c,f[e+5],12,1200080426);c=g(c,d,a,b,f[e+6],17,2821735955);b=g(b,c,d,a,f[e+7],22,4249261313);a=g(a,b,c,d,f[e+8],7,1770035416);d=g(d,a,b,c,f[e+9],12,2336552879);c=g(c,d,a,b,f[e+10],17,4294925233);b=g(b,c,d,a,f[e+11],22,2304563134);a=g(a,b,c,d,f[e+12],7,1804603682);d=g(d,a,b,c,f[e+13],12,4254626195);c=g(c,d,a,b,f[e+14],17,2792965006);b=g(b,c,d,a,f[e+15],22,1236535329);a=h(a,b,c,d,f[e+1],5,4129170786);d=h(d,a,b,c,f[e+6],9,3225465664);c=h(c,d,a,b,f[e+11],14,643717713);b=h(b,c,d,a,f[e+0],20,3921069994);a=h(a,b,c,d,f[e+5],5,3593408605);d=h(d,a,b,c,f[e+10],9,38016083);c=h(c,d,a,b,f[e+15],14,3634488961);b=h(b,c,d,a,f[e+4],20,3889429448);a=h(a,b,c,d,f[e+9],5,568446438);d=h(d,a,b,c,f[e+14],9,3275163606);c=h(c,d,a,b,f[e+3],14,4107603335);b=h(b,c,d,a,f[e+8],20,1163531501);a=h(a,b,c,d,f[e+13],5,2850285829);d=h(d,a,b,c,f[e+2],9,4243563512);c=h(c,d,a,b,f[e+7],14,1735328473);b=h(b,c,d,a,f[e+12],20,2368359562);a=i(a,b,c,d,f[e+5],4,4294588738);d=i(d,a,b,c,f[e+8],11,2272392833);c=i(c,d,a,b,f[e+11],16,1839030562);b=i(b,c,d,a,f[e+14],23,4259657740);a=i(a,b,c,d,f[e+1],4,2763975236);d=i(d,a,b,c,f[e+4],11,1272893353);c=i(c,d,a,b,f[e+7],16,4139469664);b=i(b,c,d,a,f[e+10],23,3200236656);a=i(a,b,c,d,f[e+13],4,681279174);d=i(d,a,b,c,f[e+0],11,3936430074);c=i(c,d,a,b,f[e+3],16,3572445317);b=i(b,c,d,a,f[e+6],23,76029189);a=i(a,b,c,d,f[e+9],4,3654602809);d=i(d,a,b,c,f[e+12],11,3873151461);c=i(c,d,a,b,f[e+15],16,530742520);b=i(b,c,d,a,f[e+2],23,3299628645);a=j(a,b,c,d,f[e+0],6,4096336452);d=j(d,a,b,c,f[e+7],10,1126891415);c=j(c,d,a,b,f[e+14],15,2878612391);b=j(b,c,d,a,f[e+5],21,4237533241);a=j(a,b,c,d,f[e+12],6,1700485571);d=j(d,a,b,c,f[e+3],10,2399980690);c=j(c,d,a,b,f[e+10],15,4293915773);b=j(b,c,d,a,f[e+1],21,2240044497);a=j(a,b,c,d,f[e+8],6,1873313359);d=j(d,a,b,c,f[e+15],10,4264355552);c=j(c,d,a,b,f[e+6],15,2734768916);b=j(b,c,d,a,f[e+13],21,1309151649);a=j(a,b,c,d,f[e+4],6,4149444226);d=j(d,a,b,c,f[e+11],10,3174756917);c=j(c,d,a,b,f[e+2],15,718787259);b=j(b,c,d,a,f[e+9],21,3951481745);k[0]=l(a,k[0]);k[1]=l(b,k[1]);k[2]=l(c,k[2]);k[3]=l(d,k[3])}var
o=new
Array(16);for(var
e=0;e<4;e++)for(var
m=0;m<4;m++)o[e*4+m]=k[e]>>8*m&K;return o}return function(h,g,f){var
e=[];switch(h.t&6){default:cP(h);case
0:var
d=h.c;for(var
a=0;a<f;a+=4){var
b=a+g;e[a>>2]=d.charCodeAt(b)|d.charCodeAt(b+1)<<8|d.charCodeAt(b+2)<<16|d.charCodeAt(b+3)<<24}for(;a<f;a++)e[a>>2]|=d.charCodeAt(a+g)<<8*(a&3);break;case
4:var
c=h.c;for(var
a=0;a<f;a+=4){var
b=a+g;e[a>>2]=c[b]|c[b+1]<<8|c[b+2]<<16|c[b+3]<<24}for(;a<f;a++)e[a>>2]|=c[a+g]<<8*(a&3)}return qL(k(e,f))}}();function
aoa(a,b){if(b<0)b=r(a.file.data)-a.offset;return CF(a.file.data,a.offset,b)}function
NA(b,a){a=a&63;if(a==0)return b;var
d=b[3]<<16>>16;if(a<24)return[K,(b[1]>>a|b[2]<<24-a)&aX,(b[2]>>a|d<<24-a)&aX,b[3]<<16>>a>>>16];var
c=b[3]<<16>>31;if(a<48)return[K,(b[2]>>a-24|b[3]<<48-a)&aX,b[3]<<16>>a-24>>16&aX,c&di];return[K,b[3]<<16>>a-32&aX,c&aX,c&di]}function
b_w(){return 0}function
b9Y(b,a,c){if(a<0||a>=b.length-1)jr();b[a+1]=c;return 0}function
b_s(a,b){return anQ(b,a)}function
qN(c,a){if(typeof
a===fq){c.fun=a;return 0}if(a.fun){c.fun=a.fun;return 0}var
b=a.length;while(b--)c[b]=a[b];return 0}function
anK(b,c,d){if(typeof
b==="number")switch(b){case
0:c.fun=d;break;case
1:default:qN(c,d)}else
switch(b[0]){case
0:for(var
a=1;a<b[1].length;a++)anK(b[1][a],c[a],d[a]);break}return 0}function
b_F(a){return a[jt]===undefined?0:[0,a[jt]]}function
aa(b,a){return{joo_tramp:b,joo_args:a}}function
aoe(c,a){var
b=[a>>24&K,a>>16&K,a>>8&K,a&K],d=qL(b);kZ(c,d,0,4);return 0}var
caC=aoK,b$b=new
Date()*aiC;function
caw(){return new
Date()*aiC-b$b}function
anL(c,d){var
g=c.length,h=d.length,f=g+h-1,b=new
Array(f);b[0]=0;var
a=1,e=1;for(;a<g;a++)b[a]=c[a];for(;a<f;a++,e++)b[a]=d[e];return b}function
b$8(){bS("Printexc.get_raw_backtrace_slot: index out of bounds")}function
b$3(a,b){a.refill=b;return 0}function
b$h(a){return a[3]==f$&&(a[1]|a[2])==0}function
b_$(a,c,l){if(!isFinite(a)){if(isNaN(a))return jv(uy);return jv(a>0?Ck:"-infinity")}var
j=a==0&&1/a==-Infinity?1:a>=0?0:1;if(j)a=-a;var
d=0;if(a==0);else
if(a<1)while(a<1&&d>-1022){a*=2;d--}else
while(a>=2){a/=2;d++}var
k=d<0?i:ei,e=i;if(j)e=co;else
switch(l){case
43:e=ei;break;case
32:e=dn;break;default:break}if(c>=0&&c<13){var
g=Math.pow(2,c*4);a=Math.round(a*g)/g}var
b=a.toString(16);if(c>=0){var
h=b.indexOf(b0);if(h<0)b+=b0+oe(c,dl);else{var
f=h+1+c;if(b.length<f)b+=oe(f-b.length,dl);else
b=b.substr(0,f)}}return jv(e+ah9+b+akc+k+d.toString(10))}function
b$r(a){u0("caml_js_expr: fallback to runtime evaluation");return eval(a.toString())}var
b_P=Cq;function
b$0(a){return NS}function
anP(){return 0}function
b$c(){return 0}function
b94(a,b){a.fill(b);return 0}function
b_3(){return[0,0,0,0,0,0,0,0,0]}function
b$4(a){if(isFinite(a)){var
d=1/a<0;a=Math.abs(a);var
b=Math.floor(a),c=a-b;if(d){b=-b;c=-c}return[0,c,b]}if(isNaN(a))return[0,NaN,NaN];return[0,1/a,a]}function
an3(d,g,a){var
c=0;function
f(a){g--;if(d<0||g<0)return;if(a
instanceof
Array&&a[0]===(a[0]|0))switch(a[0]){case
248:d--;c=c*KH+a[2]|0;break;case
250:g++;f(a);break;case
255:d--;c=c*KH+a[1]+(a[2]<<24)|0;break;default:d--;c=c*19+a[0]|0;for(var
b=a.length-1;b>0;b--)f(a[b])}else
if(a
instanceof
dD){d--;switch(a.t&6){default:cP(a);case
0:for(var
i=a.c,e=a.l,b=0;b<e;b++)c=c*19+i.charCodeAt(b)|0;break;case
2:for(var
h=a.c,e=a.l,b=0;b<e;b++)c=c*19+h[b]|0}}else
if(a===(a|0)){d--;c=c*KH+a|0}else
if(a===+a){d--;var
j=Cy(Nu(a));for(var
b=7;b>=0;b--)c=c*19+j[b]|0}}f(a);return c&kS}function
anV(a,b){if(a===b)return 0;if(a<b)return-1;if(a>b)return 1;if(a===a)return 1;if(b===b)return-1;return 0}function
caj(b,a,c){if(a>>>0>=b.l+3)ie();var
g=K&c>>24,f=K&c>>16,e=K&c>>8,d=K&c;ax(b,a+0,d);ax(b,a+1,e);ax(b,a+2,f);ax(b,a+3,g);return 0}function
aoq(b,a,g,l){var
v=dR,u=6,$=7,O=8,P=9,D=10,I=0,r=1,G=2,H=3,F=4,E=5,o=1,C=2,B=3,p=4,z=5,L=6,f=7,t=8,N=9,M=10,w=11,J=12,K=13,y=14,A=15,x=16,_=2,Z=3,V=4,U=5,R=6,S=7,X=8,W=9,T=10,q=11,Y=12,Q=13;if(!b.dgoto){b.defred=cq(b[R]);b.sindex=cq(b[X]);b.check=cq(b[Q]);b.rindex=cq(b[W]);b.table=cq(b[Y]);b.len=cq(b[U]);b.lhs=cq(b[V]);b.gindex=cq(b[T]);b.dgoto=cq(b[S])}var
k=0,j,e,d,n,c=a[y],h=a[A],i=a[x];exit:for(;;)switch(g){case
0:h=0;i=0;case
6:j=b.defred[h];if(j!=0){g=D;break}if(a[f]>=0){g=$;break}k=I;break exit;case
1:if(l
instanceof
Array){a[f]=b[Z][l[0]+1];a[t]=l[1]}else{a[f]=b[_][l+1];a[t]=0}case
7:e=b.sindex[h];d=e+a[f];if(e!=0&&d>=0&&d<=b[q]&&b.check[d]==a[f]){g=O;break}e=b.rindex[h];d=e+a[f];if(e!=0&&d>=0&&d<=b[q]&&b.check[d]==a[f]){j=b.table[d];g=D;break}if(i<=0){k=E;break exit}case
5:if(i<3){i=3;for(;;){n=a[o][c+1];e=b.sindex[n];d=e+v;if(e!=0&&d>=0&&d<=b[q]&&b.check[d]==v){g=P;break}else{if(c<=a[L])return r;c--}}}else{if(a[f]==0)return r;a[f]=-1;g=u;break}case
8:a[f]=-1;if(i>0)i--;case
9:h=b.table[d];c++;if(c>=a[z]){k=G;break exit}case
2:a[o][c+1]=h;a[C][c+1]=a[t];a[B][c+1]=a[N];a[p][c+1]=a[M];g=u;break;case
10:var
m=b.len[j];a[w]=c;a[K]=j;a[J]=m;c=c-m+1;m=b.lhs[j];n=a[o][c];e=b.gindex[m];d=e+n;h=e!=0&&d>=0&&d<=b[q]&&b.check[d]==n?b.table[d]:b.dgoto[m];if(c>=a[z]){k=H;break exit}case
3:k=F;break exit;case
4:a[o][c+1]=h;a[C][c+1]=l;var
s=a[w];a[p][c+1]=a[p][s+1];if(c>s)a[B][c+1]=a[p][s+1];g=u;break;default:return r}a[y]=c;a[A]=h;a[x]=i;return k}function
aop(d,c,b,e,f){var
a=uV(e);if(a.length>b)bR(adi);fA(a,0,d,c,a.length);return 0}function
b$5(a){u0("caml_pure_js_expr: fallback to runtime evaluation");return eval(a.toString())}function
b9M(e,b,f,c,d){for(var
a=0;a<d;a++)uO(f,c+a,c2(e,b+a));return 0}function
f(a,b){return 1-A(a,b)}function
NB(a,b){return[K,a[1]^b[1],a[2]^b[2],a[3]^b[3]]}function
b_t(a,b){return anR(b,a)}function
b$2(a,b){a.output=b;return 0}function
b$K(a){return a}function
b$_(a,b){NJ[mp(a)]=b;return 0}function
b90(a,b){return a.nth_dim(b)}bo.jsoo_runtime={caml_blit_bytes:ib,caml_is_js:b$j,caml_terminfo_setup:aoB,caml_ephe_check_data:b_C,caml_ephe_unset_data:b_L,caml_ephe_set_data:b_J,caml_ephe_get_data_copy:b_G,caml_ephe_get_data:b_F,caml_ephe_blit_data:b_A,caml_ephe_unset_key:b_M,caml_ephe_set_key:b_K,caml_ephe_check_key:b_D,caml_ephe_get_key_copy:b_I,caml_ephe_get_key:b_H,caml_ephe_blit_key:b_B,caml_ephe_create:b_E,caml_weak_blit:qO,caml_weak_check:mt,caml_weak_get_copy:qQ,caml_weak_get:jz,caml_weak_set:ii,caml_weak_create:qP,caml_ephe_data_offset:jt,caml_ephe_key_offset:g2,caml_hash_mix_bigstring:b__,bigstring_marshal_blit_stub:b9P,bigstring_marshal_stub:b9R,bigstring_unmarshal_stub:b9V,bigstring_marshal_data_size_stub:b9Q,bigstring_of_array_buffer:b9T,bigstring_to_array_buffer:b9U,bigstring_find:b9O,bigstring_memcmp_stub:b9S,bigstring_blit_stub:b9M,caml_blit_string_to_bigstring:b_n,bigstring_blit_string_bigstring_stub:anJ,caml_blit_bigstring_to_string:b_m,bigstring_blit_bigstring_string_stub:anI,bigstring_destroy_stub:b9N,bigstring_alloc:anH,caml_json:b$P,JSON:mn,caml_gc_get:b_3,caml_gc_set:b_7,caml_gc_stat:b_8,caml_gc_quick_stat:b_6,caml_gc_counters:b_1,caml_gc_compaction:b_0,caml_gc_full_major:b_2,caml_gc_major:b_4,caml_gc_minor:b_5,caml_CamlinternalMod_update_mod:anK,caml_CamlinternalMod_init_mod:b9W,caml_js_export_var:b$q,caml_js_object:b$D,caml_pure_js_expr:b$5,caml_js_expr:b$r,caml_js_eval_string:b$p,caml_js_to_byte_string:b$J,caml_js_equals:b$n,caml_js_wrap_meth_callback_unsafe:b$O,caml_js_wrap_meth_callback:ND,caml_js_wrap_callback:b$N,caml_js_new:b$C,caml_js_meth_call:b$B,caml_js_fun_call:b$v,caml_js_call:b$l,caml_js_var:b$M,caml_js_to_array:b$H,caml_js_from_array:ju,caml_js_from_string:b$u,caml_js_to_float:b$K,caml_js_from_float:b$t,caml_js_to_bool:b$I,caml_js_from_bool:b$s,js_print_stderr:u0,js_print_stdout:aoF,caml_trampoline_return:aa,caml_trampoline:c4,caml_js_get_console:b$x,caml_js_html_entities:b$y,caml_js_html_escape:b$z,caml_js_on_ie:b$E,caml_js_typeof:b$L,caml_js_instanceof:b$A,caml_js_delete:b$m,caml_js_get:b$w,caml_js_set:b$G,caml_js_pure_expr:b$F,unix_fstat:caz,unix_lstat:caC,unix_stat:aoK,unix_stat_file:NX,caml_ba_map_file_bytecode:b9$,caml_ba_map_file:anO,caml_sys_rename:cau,caml_sys_is_directory:CQ,caml_sys_remove:CS,caml_sys_read_directory:cat,caml_fs_register_autoload:b_X,caml_sys_file_exists:k0,caml_fs_content:kX,caml_fs_register_extern:b_Y,caml_fs_init:b_W,caml_fs_update_inode:b_Z,caml_fs_register:W,caml_make_path:gi,caml_raise_not_a_dir:aor,caml_raise_no_such_file:uX,caml_sys_chdir:cal,caml_sys_getcwd:car,caml_root_dir:od,MlFile:ia,MlDir:fz,file_inode:NV,caml_current_dir:Co,caml_ml_output_int:aoe,caml_ml_pos_out_64:aoi,caml_ml_pos_out:aoh,caml_ml_seek_out_64:aom,caml_ml_seek_out:aol,caml_output_value:oc,caml_ml_output_char:jw,caml_ml_output_bytes:b$Z,caml_ml_output:kZ,caml_ml_flush:dE,caml_ml_input_scan_line:aoc,caml_ml_pos_in_64:aog,caml_ml_pos_in:aof,caml_ml_seek_in_64:aok,caml_ml_seek_in:aoj,caml_ml_input_int:aob,caml_ml_input_char:CH,caml_input_value:oa,caml_fs_file_content:b_V,caml_ml_input:uS,caml_ml_may_refill_input:NG,caml_ml_refill_input:CJ,caml_ml_set_channel_refill:b$3,caml_ml_set_channel_output:b$2,caml_ml_channel_size_64:NF,caml_ml_channel_size:NE,caml_ml_close_channel:g4,caml_ml_set_binary_mode:NI,caml_ml_open_descriptor_in:NH,caml_ml_open_descriptor_out:CI,caml_ml_out_channels_list:aod,caml_ml_out_channels:ob,caml_ml_set_channel_name:b$1,caml_sys_open:CR,caml_sys_close:NT,caml_spacetime_only_works_for_native_code:cab,caml_register_channel_for_spacetime:b$9,caml_spacetime_enabled:caa,caml_sys_isatty:cas,caml_ml_runtime_warnings_enabled:b$0,caml_ml_enable_runtime_warnings:b$Y,caml_runtime_warnings:NS,caml_list_of_js_array:qK,caml_int64_bswap:b$g,caml_int32_bswap:b$e,caml_bswap16:b_o,caml_convert_raw_backtrace_slot:Np,caml_install_signal_handler:b$c,caml_fresh_oo_id:b_T,caml_set_oo_id:O,caml_oo_last_id:NM,unix_inet_addr_of_string:caB,caml_sys_get_argv:aoz,caml_sys_exit:aoy,caml_sys_getenv:ih,caml_get_current_callstack:anW,caml_raw_backtrace_slot:b$8,caml_raw_backtrace_next_slot:b$7,caml_raw_backtrace_length:b$6,caml_convert_raw_backtrace:b_w,caml_record_backtrace:aos,caml_get_exception_raw_backtrace:Cs,caml_get_exception_backtrace:b_9,caml_backtrace_status:anP,caml_final_release:b_S,caml_final_register_called_without_value:b_R,caml_final_register:b_Q,caml_get_public_method:B,caml_array_blit:mo,caml_array_concat:Nm,caml_array_append:anL,caml_array_sub:js,caml_sys_system_command:cav,caml_sys_const_ostype_win32:aox,caml_sys_const_ostype_unix:aow,caml_sys_const_ostype_cygwin:aov,caml_sys_const_max_wosize:cap,caml_sys_const_int_size:cao,caml_sys_const_word_size:caq,caml_sys_const_big_endian:can,caml_sys_random_seed:NU,caml_sys_const_backend_type:cam,caml_sys_get_config:aoA,caml_sys_time:caw,caml_hash:g3,caml_hash_mix_string:an1,caml_hash_mix_string_arr:Nr,caml_hash_mix_string_str:an2,caml_hash_mix_int64:an0,caml_hash_mix_float:anZ,caml_hash_mix_final:anY,caml_hash_mix_int:id,caml_hash_univ_param:an3,caml_format_float:Nq,caml_format_int:n$,caml_finish_formatting:Cr,caml_parse_format:CM,caml_is_printable:b$k,caml_float_of_string:gf,caml_int_of_string:gh,caml_parse_digit:uW,caml_parse_sign_and_base:NN,caml_lessthan:fC,caml_lessequal:ms,caml_greaterthan:dT,caml_greaterequal:ic,caml_notequal:J,caml_equal:E,caml_int_compare:gg,caml_compare:cp,caml_compare_val:mq,caml_make_float_vect:b$V,caml_make_vect:X,caml_check_bound:n,caml_array_get:b9X,caml_array_set:b9Y,caml_mod:jx,caml_div:Cp,caml_mul:jy,caml_lazy_make_forward:b$Q,caml_obj_truncate:NL,caml_obj_dup:uT,caml_obj_block:CK,caml_obj_set_tag:NK,caml_obj_tag:c3,caml_obj_is_block:uU,caml_update_dummy:qN,caml_array_bound_error:jr,caml_raise_not_found:NP,caml_raise_zero_divide:uY,caml_raise_end_of_file:NO,caml_invalid_argument:bS,caml_js_error_of_exception:b$o,caml_exn_with_js_backtrace:b_N,caml_wrap_exception:j,caml_failwith:bR,caml_raise_sys_error:dF,caml_raise_with_string:CO,caml_raise_with_arg:NQ,caml_return_exn_constant:NR,caml_raise_constant:CN,caml_get_global_data:anX,caml_register_global:aF,caml_global_data:b8,caml_named_value:aon,caml_register_named_value:b$_,caml_named_values:NJ,caml_call_gen:dS,raw_array_append_one:aoG,raw_array_cons:CT,raw_array_copy:aoH,raw_array_sub:qR,win_handle_fd:caF,win_cleanup:caE,win_startup:caG,unix_mktime:caD,unix_localtime:aoJ,unix_gmtime:caA,unix_time:u1,unix_gettimeofday:aoI,caml_ba_reshape:b_b,caml_ba_slice:b_f,caml_ba_sub:b_g,caml_ba_fill:b94,caml_ba_blit:b9Z,caml_ba_set_3:b_d,caml_ba_set_2:b_c,caml_ba_set_1:uO,caml_ba_uint8_set64:b_l,caml_ba_uint8_set32:b_k,caml_ba_uint8_set16:b_j,caml_ba_set_generic:b_e,caml_ba_get_3:b96,caml_ba_get_2:b95,caml_ba_get_1:c2,caml_ba_uint8_get64:b_i,caml_ba_uint8_get32:No,caml_ba_uint8_get16:b_h,caml_ba_get_generic:b97,caml_ba_dim_3:b93,caml_ba_dim_2:b92,caml_ba_dim_1:b91,caml_ba_dim:b90,caml_ba_num_dims:b_a,caml_ba_layout:b9_,caml_ba_kind:b99,caml_ba_create:anM,caml_ba_create_from:qH,caml_ba_views:uP,caml_ba_get_size:Cn,caml_ba_init_views:anN,caml_ba_init:b98,caml_set_parser_trace:aot,caml_parse_engine:aoq,caml_new_lex_engine:aoo,caml_lex_engine:an_,caml_lex_array:cq,caml_output_value_to_buffer:aop,caml_output_value_to_string:CL,caml_output_val:uV,caml_marshal_data_size:CE,caml_input_value_from_reader:Ns,caml_input_value_from_string:Nt,caml_float_of_bytes:n_,BigStringReader:Nk,MlStringReader:Nl,caml_marshal_constants:b$W,caml_md5_string:CF,caml_md5_chan:aoa,caml_int64_to_bytes:Cy,caml_int64_of_bytes:Cu,caml_int64_of_string:an8,caml_int64_format:Nw,caml_int64_of_float:Cv,caml_int64_to_float:Cz,caml_int64_to_int32:CA,caml_int64_of_int32:mr,caml_int64_mod:Ny,caml_int64_div:an5,caml_int64_udivmod:uR,caml_int64_lsr1:an7,caml_int64_lsl1:Nx,caml_int64_shift_right:NA,caml_int64_shift_right_unsigned:an9,caml_int64_shift_left:Cx,caml_int64_xor:NB,caml_int64_or:Cw,caml_int64_and:an4,caml_int64_is_minus_one:b$i,caml_int64_is_min_int:b$h,caml_int64_is_negative:an6,caml_int64_is_zero:Ct,caml_int64_mul:Nz,caml_int64_sub:qJ,caml_int64_add:uQ,caml_int64_neg:fB,caml_int64_compare:Nv,caml_int64_ult:CC,caml_int64_ucompare:CB,caml_int64_offset:qI,caml_tanh_float:cax,caml_sinh_float:b$$,caml_cosh_float:b_y,caml_log10_float:b$T,caml_hypot_float:b$a,caml_log1p_float:b$U,caml_expm1_float:b_O,caml_copysign_float:b_x,caml_float_compare:anV,caml_frexp_float:b_U,caml_ldexp_float:b$R,caml_modf_float:b$4,caml_classify_float:anU,caml_int32_float_of_bits:b$f,caml_int64_float_of_bits:kY,caml_hexstring_of_float:b_$,caml_int32_bits_of_float:b$d,caml_int64_bits_of_float:Nu,jsoo_floor_log2:NW,caml_ml_bytes_length:b$X,caml_ml_string_length:r,caml_blit_string:fA,caml_fill_bytes:b_P,caml_fill_string:Cq,caml_bytes_greaterthan:b_t,caml_string_greaterthan:cah,caml_bytes_greaterequal:b_s,caml_string_greaterequal:cag,caml_bytes_lessthan:anR,caml_string_lessthan:CP,caml_bytes_lessequal:anQ,caml_string_lessequal:aou,caml_bytes_notequal:b_u,caml_string_notequal:f,caml_bytes_equal:b_q,caml_string_equal:A,caml_bytes_compare:b_p,caml_string_compare:Q,caml_string_of_array:qL,caml_new_string:a,caml_create_bytes:b_z,caml_create_string:aN,caml_js_to_string:jv,caml_bytes_of_string:mp,caml_array_of_string:Nn,caml_convert_string_to_array:n9,caml_convert_string_to_bytes:cP,MlString:dD,caml_bytes_set:b_v,caml_string_set64:cak,caml_string_set32:caj,caml_string_set16:cai,caml_string_set:ig,caml_bytes_get:b_r,caml_string_get64:caf,caml_string_get32:cae,caml_string_get16:cad,caml_string_get:u,caml_string_bound_error:ie,caml_bytes_unsafe_set:anT,caml_string_unsafe_set:ax,caml_bytes_unsafe_get:anS,caml_string_unsafe_get:$,caml_to_js_string:aoC,caml_is_ascii:NC,caml_utf16_of_utf8:aoD,caml_utf8_of_utf16:aoE,caml_subarray_to_string:qM,caml_str_repeat:oe};function
d(a,b){return a.length==1?a(b):dS(a,[b])}function
b(a,b,c){return a.length==2?a(b,c):dS(a,[b,c])}function
p(a,b,c,d){return a.length==3?a(b,c,d):dS(a,[b,c,d])}function
L(a,b,c,d,e){return a.length==4?a(b,c,d,e):dS(a,[b,c,d,e])}function
bH(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):dS(a,[b,c,d,e,f])}function
cw(a,b,c,d,e,f,g){return a.length==6?a(b,c,d,e,f,g):dS(a,[b,c,d,e,f,g])}function
gN(a,b,c,d,e,f,g,h){return a.length==7?a(b,c,d,e,f,g,h):dS(a,[b,c,d,e,f,g,h])}function
ab6(a,b,c,d,e,f,g,h,i){return a.length==8?a(b,c,d,e,f,g,h,i):dS(a,[b,c,d,e,f,g,h,i])}function
Ks(a,b,c,d,e,f,g,h,i,j){return a.length==9?a(b,c,d,e,f,g,h,i,j):dS(a,[b,c,d,e,f,g,h,i,j])}function
b9L(a,b,c,d,e,f,g,h,i,j,k){return a.length==10?a(b,c,d,e,f,g,h,i,j,k):dS(a,[b,c,d,e,f,g,h,i,j,k])}function
ab1=anX();ab1.prim_count=Nb;ab1.toc=[0,[0,a("SYMB"),[0,6381,[0,[0,[0,[0,[0,0,[0,0,a(KS),1],aeY,0,1],[0,0,a(kW),1],48,[0,0,[0,0,a(K2),1],ah4,0,1],2],[0,0,a(Ly),1],80,[0,[0,0,[0,0,a(KQ),1],Lq,0,1],[0,0,a(uA),1],12,[0,0,[0,0,a(A6),1],acX,0,1],2],3],[0,0,a(AU),1],acj,[0,[0,[0,0,[0,0,a(zH),1],71,0,1],[0,0,a(LB),1],acU,[0,0,[0,0,a(KD),1],afM,0,1],2],[0,0,a(Nd),1],alq,[0,[0,0,[0,0,a(uk),1],MZ,0,1],[0,0,a(M7),1],ahZ,[0,0,[0,0,a(Cf),1],Bx,0,1],2],3],4],[0,0,a(Aq),1],ml,[0,[0,[0,[0,[0,0,[0,0,a(Lo),1],afn,0,1],[0,0,a(Kz),1],B$,[0,0,[0,0,a(Nh),1],63,0,1],2],[0,0,a(AO),1],MN,[0,[0,0,[0,0,a(MQ),1],91,0,1],[0,0,a(z3),1],cm,[0,0,[0,0,a(MF),1],95,0,1],2],3],[0,0,a(MK),1],zL,[0,[0,[0,0,[0,0,a(kK),1],41,0,1],[0,0,a(LV),1],AH,[0,0,[0,0,a(L_),1],KT,0,1],2],[0,0,a(Le),1],aks,[0,[0,0,[0,0,a(Cb),1],AD,0,1],[0,0,a(Lg),1],afb,[0,0,[0,0,a(kU),1],83,0,1],2],3],4],[0,0,a(BI),1],86,[0,[0,[0,[0,0,[0,0,a(M8),1],Ls,0,1],[0,16,a(A3),3],7,[0,0,[0,17,a(Ao),3],0,0,1],2],[0,18,a(zY),3],3,[0,[0,0,[0,19,a(Br),3],2,0,1],[0,20,a(nW),3],6,[0,0,[0,21,a(Ca),3],1,0,1],2],3],[0,22,a(Bs),3],4,[0,[0,0,[0,23,a(Bd),3],5,0,1],[0,24,a(zZ),3],8,[0,[0,0,[0,25,a(Ae),3],9,0,1],[0,26,a(Ci),3],10,[0,0,[0,27,a(Au),3],11,0,1],2],3],4],5],6]]],[0,qK([a("CRCS"),[0,a(M8),[0,a("D\x1c@\x81o\xe8\x81u\x92de\x19\x9afTX")]],[0,a(BI),[0,a("\f\xe6\x99E\x8c\xe4C\tT\xd7\xe6\xa7\x88td|")]],[0,a(kU),[0,a("e\x90\x7f\x1d\xde\xc3+\xe4\xc8\xa1\x90\x07\x91p\xe0\xf1")]],[0,a(Lg),[0,a("?\xb1\x81\x8e\xe5h\x83\xca\xc5\x16\x95\x1e\xad\x8e\xb8\xb4")]],[0,a(Cb),[0,a("Hq\x97\xcc\xd2\xfe\xa6MR\xf1\xcd\x91pa\xca\xf2")]],[0,a(Le),[0,a("mA\x0e\xcc\0\xaa\xc6if\x8f\xa3\x99\xdb\xd6\xfc\xa2")]],[0,a(L_),[0,a("\xebI\xa1vE\xc5\xea-\xd2\x98C\n<\x98a\x86")]],[0,a(LV),[0,a("\xfbal`@J\xddb\x954p\x01\xc0\x1b\xfc\xaa")]],[0,a(kK),[0,a("\r\x01ZZ!6e\x9b\r\xe41\xbe\x7f\x15E\xbe")]],[0,a(MK),[0,a("O\x8c\xd2\xd8Suc\xc7\xea~\xe2\xe5\xdc\x94\xe4'")]],[0,a(MF),[0,a('\x8b\x01N\xc5zG-\x9f9"\xb6>]\xe9\xd1\xf2')]],[0,a(z3),[0,a("\xd9\xe0GS7Oq\x10\xb6o\xed\xa4\x04\x14\xe5\xe3")]],[0,a(MQ),[0,a("j{\xe8\x18\xa4\xd4?\x069\x7f\xae\xf2\xc6\xf9\xd3[")]],[0,a(AO),[0,a("w\x0ea#\xe5F\x0e\xebB\xd3\x05\x0f\x13\xc5\xadS")]],[0,a(Nh),[0,a("\x89\x88 \x84\x89'A\x93\xe4\xe3\xf6\x9d\xc6\xec/u")]],[0,a(Kz),[0,a("\x1b\xe6\xa5HO\xb3\xcf\xb6\x9d,\x98\x148\xa7\xbeb")]],[0,a("Lazy"),[0,a("}\xba\x0b\xf0/`\xe5\xffD\xe9\xe4\x05rc\xf2\x8d")]],[0,a(Lo),[0,a("_A\xea\xb7Z\x10\xf7\xb4\xce\xcc'\x86(\xdc42")]],[0,a(Aq),[0,a("5e\xb2\x88\xech\x02@\x886\b\x05e\x04H\xdd")]],[0,a(Cf),[0,a("\xf4;\x8a)r\x80K@\xe2\x8bf\x1bo\xdf\x15z")]],[0,a(M7),[0,a("\xbb\x8e&\x9di\x03\x01\xa1\xc4\xff\x14\xa0\x8e\x96\xe8>")]],[0,a(uk),[0,a("a\xd45\x02B\xb3\0x\xd3\xad\x96\xc9\x04\xc9\xf7\xa1")]],[0,a(Nd),[0,a("8\x17\xbe\xc1\xda\xd2\foYM:\x85\xb10 \xb8")]],[0,a(KD),[0,a("\xea\xb5OX\xb3K\x8ao\xdcv=\xb6\x96f\x14\xa1")]],[0,a(LB),[0,a("qa\x18&\x8d\x0eR\x1c\xed \x06\xb3_\xbf?\xb5")]],[0,a(zH),[0,a("`\xfd\x98\xbao\xf3\x03\xba\xf9(~{\xfb\x88o\x12")]],[0,a(AU),[0,a("=\x0bN\xb4R[\xa4'L\x88\x85\xd7\x12O{\xbc")]],[0,a(A6),[0,a("\x12'\x17\x04\x17YR]\xe9<\x02G\xd8\xe1\x8bZ")]],[0,a(uA),[0,a("\x8b\x06\x9f\xca\x1eM\x93\x16\xb5\x88\xe5UO8\xbb$")]],[0,a(KQ),[0,a("\xbej[\x05?\xd9\xb1\xa1\x16!l\xc95\x8e\x9f\xa7")]],[0,a(Ly),[0,a("\xfc\xd4\xdf\x92\xee\xdak\xb9be`\xf1A;\xc5&")]],[0,a(K2),[0,a("\xa5y\xf4\xa5~0\x0e\xc7U\xf8J\xf8\x83\xc1\xe5\x1b")]],[0,a(kW),[0,a("\xae\x80\r\x8c\xf9\x90?\x1d6\x85iP\x94\x040\xe6")]],[0,a(KS),[0,a("\x1a\x93\xc5%\x16\x96o\xe6\xa5\x85d\xa4\xc4\xd9\xe4\xfa")]]]),[0,[0,a("PRIM"),a("caml_abs_float\0caml_acos_float\0caml_add_float\0caml_alloc_dummy\0caml_alloc_dummy_float\0caml_array_append\0caml_array_blit\0caml_array_concat\0caml_array_get\0caml_array_get_addr\0caml_array_get_float\0caml_array_set\0caml_array_set_addr\0caml_array_set_float\0caml_array_sub\0caml_array_unsafe_get\0caml_array_unsafe_get_float\0caml_array_unsafe_set\0caml_array_unsafe_set_addr\0caml_array_unsafe_set_float\0caml_asin_float\0caml_atan2_float\0caml_atan_float\0caml_backtrace_status\0caml_bitvect_test\0caml_blit_bytes\0caml_blit_string\0caml_bswap16\0caml_ceil_float\0caml_channel_descriptor\0caml_classify_float\0caml_compare\0caml_convert_raw_backtrace_slot\0caml_copysign_float\0caml_cos_float\0caml_cosh_float\0caml_create_string\0caml_div_float\0caml_dynlink_add_primitive\0caml_dynlink_close_lib\0caml_dynlink_get_current_libs\0caml_dynlink_lookup_symbol\0caml_dynlink_open_lib\0caml_ensure_stack_capacity\0caml_eq_float\0caml_equal\0caml_exp_float\0caml_expm1_float\0caml_fill_string\0caml_final_register\0caml_final_release\0caml_float_compare\0caml_float_of_int\0caml_float_of_string\0caml_floor_float\0caml_fmod_float\0caml_format_float\0caml_format_int\0caml_frexp_float\0caml_gc_compaction\0caml_gc_counters\0caml_gc_full_major\0caml_gc_get\0caml_gc_major\0caml_gc_major_slice\0caml_gc_minor\0caml_gc_quick_stat\0caml_gc_set\0caml_gc_stat\0caml_ge_float\0caml_get_current_callstack\0caml_get_current_environment\0caml_get_exception_backtrace\0caml_get_exception_raw_backtrace\0caml_get_global_data\0caml_get_public_method\0caml_get_section_table\0caml_greaterequal\0caml_greaterthan\0caml_gt_float\0caml_hash\0caml_hash_univ_param\0caml_hypot_float\0caml_input_value\0caml_input_value_from_string\0caml_install_signal_handler\0caml_int32_add\0caml_int32_and\0caml_int32_bits_of_float\0caml_int32_bswap\0caml_int32_compare\0caml_int32_div\0caml_int32_float_of_bits\0caml_int32_format\0caml_int32_mod\0caml_int32_mul\0caml_int32_neg\0caml_int32_of_float\0caml_int32_of_int\0caml_int32_of_string\0caml_int32_or\0caml_int32_shift_left\0caml_int32_shift_right\0caml_int32_shift_right_unsigned\0caml_int32_sub\0caml_int32_to_float\0caml_int32_to_int\0caml_int32_xor\0caml_int64_add\0caml_int64_and\0caml_int64_bits_of_float\0caml_int64_bswap\0caml_int64_compare\0caml_int64_div\0caml_int64_float_of_bits\0caml_int64_format\0caml_int64_mod\0caml_int64_mul\0caml_int64_neg\0caml_int64_of_float\0caml_int64_of_int\0caml_int64_of_int32\0caml_int64_of_nativeint\0caml_int64_of_string\0caml_int64_or\0caml_int64_shift_left\0caml_int64_shift_right\0caml_int64_shift_right_unsigned\0caml_int64_sub\0caml_int64_to_float\0caml_int64_to_int\0caml_int64_to_int32\0caml_int64_to_nativeint\0caml_int64_xor\0caml_int_as_pointer\0caml_int_compare\0caml_int_of_float\0caml_int_of_string\0caml_invoke_traced_function\0caml_is_js\0caml_is_printable\0caml_lazy_follow_forward\0caml_lazy_make_forward\0caml_ldexp_float\0caml_le_float\0caml_lessequal\0caml_lessthan\0caml_lex_engine\0caml_log10_float\0caml_log1p_float\0caml_log_float\0caml_lt_float\0caml_make_array\0caml_make_float_vect\0caml_make_vect\0caml_marshal_data_size\0caml_md5_chan\0caml_md5_string\0caml_ml_channel_size\0caml_ml_channel_size_64\0caml_ml_close_channel\0caml_ml_flush\0caml_ml_flush_partial\0caml_ml_input\0caml_ml_input_char\0caml_ml_input_int\0caml_ml_input_scan_line\0caml_ml_open_descriptor_in\0caml_ml_open_descriptor_out\0caml_ml_out_channels_list\0caml_ml_output\0caml_ml_output_char\0caml_ml_output_int\0caml_ml_output_partial\0caml_ml_pos_in\0caml_ml_pos_in_64\0caml_ml_pos_out\0caml_ml_pos_out_64\0caml_ml_seek_in\0caml_ml_seek_in_64\0caml_ml_seek_out\0caml_ml_seek_out_64\0caml_ml_set_binary_mode\0caml_ml_string_length\0caml_modf_float\0caml_mul_float\0caml_nativeint_add\0caml_nativeint_and\0caml_nativeint_bswap\0caml_nativeint_compare\0caml_nativeint_div\0caml_nativeint_format\0caml_nativeint_mod\0caml_nativeint_mul\0caml_nativeint_neg\0caml_nativeint_of_float\0caml_nativeint_of_int\0caml_nativeint_of_int32\0caml_nativeint_of_string\0caml_nativeint_or\0caml_nativeint_shift_left\0caml_nativeint_shift_right\0caml_nativeint_shift_right_unsigned\0caml_nativeint_sub\0caml_nativeint_to_float\0caml_nativeint_to_int\0caml_nativeint_to_int32\0caml_nativeint_xor\0caml_neg_float\0caml_neq_float\0caml_new_lex_engine\0caml_notequal\0caml_obj_add_offset\0caml_obj_block\0caml_obj_dup\0caml_obj_is_block\0caml_obj_set_tag\0caml_obj_tag\0caml_obj_truncate\0caml_output_value\0caml_output_value_to_buffer\0caml_output_value_to_string\0caml_parse_engine\0caml_power_float\0caml_realloc_global\0caml_record_backtrace\0caml_register_code_fragment\0caml_register_named_value\0caml_reify_bytecode\0caml_set_oo_id\0caml_set_parser_trace\0caml_sin_float\0caml_sinh_float\0caml_sqrt_float\0caml_static_alloc\0caml_static_free\0caml_static_release_bytecode\0caml_static_resize\0caml_string_compare\0caml_string_equal\0caml_string_get\0caml_string_get16\0caml_string_get32\0caml_string_get64\0caml_string_greaterequal\0caml_string_greaterthan\0caml_string_lessequal\0caml_string_lessthan\0caml_string_notequal\0caml_string_set\0caml_string_set16\0caml_string_set32\0caml_string_set64\0caml_sub_float\0caml_sys_chdir\0caml_sys_close\0caml_sys_const_big_endian\0caml_sys_const_ostype_cygwin\0caml_sys_const_ostype_unix\0caml_sys_const_ostype_win32\0caml_sys_const_word_size\0caml_sys_exit\0caml_sys_file_exists\0caml_sys_get_argv\0caml_sys_get_config\0caml_sys_getcwd\0caml_sys_getenv\0caml_sys_is_directory\0caml_sys_open\0caml_sys_random_seed\0caml_sys_read_directory\0caml_sys_remove\0caml_sys_rename\0caml_sys_system_command\0caml_sys_time\0caml_tan_float\0caml_tanh_float\0caml_terminfo_backup\0caml_terminfo_resume\0caml_terminfo_setup\0caml_terminfo_standout\0caml_update_dummy\0caml_weak_blit\0caml_weak_check\0caml_weak_create\0caml_weak_get\0caml_weak_get_copy\0caml_weak_set\0caml_js_to_string\0caml_js_from_string\0caml_js_wrap_meth_callback\0caml_js_object\0caml_js_set\0caml_pure_js_expr\0")],0]]];var
Pq=[I,a(Ao),-1],rg=[I,a(Ca),-2],dU=[I,a(Br),-3],k1=[I,a(zY),-4],qT=[I,a(Bs),-5],l=[I,a(nW),-7],vm=[I,a(A3),-8],Pr=[I,a(zZ),-9],h=[I,a(Ci),alE],DL=[I,a(Au),aj3],OO=[K,aX,aX,aem],mz=[0,a(i),0,0,-1],vc=[0,a(i),1,0,0],Pf=[0,0,a(i)],DJ=[0,[11,a(aef),[2,0,[11,a(KU),[4,0,0,0,[11,a(zW),[4,0,0,0,[12,45,[4,0,0,0,[11,a(gU),[2,0,0]]]]]]]]]],a('File "%s", line %d, characters %d-%d: %s')],Ee=a(b0),Eh=a(b0),Ej=a(b0),rh=a(ahU),QT=a("/home/glennsl/dev.github/bucklescript/lib/ocaml"),QV=a("/home/glennsl/.opam/4.02.3+buckle-master/bin/ocamlrun"),QW=a("cc"),QX=a("gcc -O -fno-defer-pop -Wall -D_FILE_OFFSET_BITS=64 -D_REENTRANT -O -fPIC"),QY=a("-lm  -ldl -lcurses -lpthread"),QZ=a("gcc -O -Wall -D_FILE_OFFSET_BITS=64 -D_REENTRANT"),Q0=a("-lm  -ldl"),Q1=a("ld -r  -o"),Q2=a(aiR),Q3=a("-pg"),Q4=a("Caml1999X011"),oC=a("Caml1999I017"),Q5=a("Caml1999O010"),Q6=a("Caml1999A011"),Q7=a("Caml1999Y014"),Q8=a("Caml1999Z013"),Q9=a("Caml1999M016"),Q_=a("Caml1999N015"),Q$=a("Caml2007D002"),Ra=a("Caml2012T004"),Rd=a("amd64"),Re=a(zB),Rf=a("linux"),Rg=a(uj),Rj=a(".o"),Rk=a(".s"),Rl=a(ahy),Rm=a(ahy),Rn=a(ado),Ro=a(ado),dh=a("Test"),b8U=[11,a(',\n               "text" : '),[3,0,[11,a(',\n               "type" : "error"     \n              }'),0]]],abU=a(nX),abS=a("self_type"),abw=a(e6),abv=a("args"),abk=a(mg),b8V=[17,0,0],b8W=[17,0,0],b8X=[15,[12,41,[17,0,0]]],b8Y=[0,a(k),1,0],b8Z=[17,0,0],b80=[15,[12,41,[17,0,0]]],b81=[0,a(k),1,0],b82=[4,3,0,0,[12,45,[4,3,0,0,[17,[0,a(k),1,0],[15,[12,41,[17,0,0]]]]]]],b83=[17,0,0],b84=[17,0,0],b85=[15,[12,41,[17,0,0]]],b86=[0,a(k),1,0],b87=[17,0,0],b88=[15,[12,41,[17,0,0]]],b89=[0,a(k),1,0],b8_=[17,0,0],b8$=[15,[17,0,0]],b9a=[0,a(k),1,0],b9b=[17,[0,a(k),1,0],[15,[17,[0,a(k),1,0],[11,a("is unbound"),0]]]],b9c=[17,[0,a(k),1,0],[15,[17,0,0]]],b9d=[17,0,0],b9e=[11,a(" type argument(s)"),[17,0,0]],b9f=[15,[17,0,0]],b9g=[0,a(k),1,0],b9h=[17,0,0],b9i=[15,[17,0,[17,0,0]]],b9j=[0,a(k),1,0],b9k=[17,0,0],b9l=[17,[0,a(k),1,0],[2,0,[17,[0,a(k),1,0],[2,0,[17,0,0]]]]],b9m=[15,[11,a(" is unbound"),[17,0,0]]],b9n=[11,a(adS),[17,0,0]],Xl=[0,a(n4)],Xj=[0,a(h0)],b9o=[11,a(adS),[17,0,0]],b9p=[17,0,[15,[15,[17,0,0]]]],b9q=[15,0],b9r=[0,a(k),1,0],b9s=[15,0],b9t=[0,a(k),1,0],b9u=[17,[0,a(ar),0,0],[2,0,[12,41,[17,0,0]]]],b9v=[12,41,[17,0,0]],b9w=[12,41,[17,0,0]],b9x=[12,44,[17,[0,a("@;<0 -1>"),0,-1],[15,[12,41,[17,0,0]]]]],b9y=[9,[12,59,[17,[0,a(k),1,0],[18,[1,[0,[11,a(aR),0],a(aR)]],[2,0,[16,[17,0,[12,gc,[17,0,0]]]]]]]]],b9z=[2,0,[17,[0,a(ar),0,0],[15,[12,59,[17,0,[17,[0,a(k),1,0],[2,0,[9,[12,59,[17,[0,a(k),1,0],[2,0,b9y]]]]]]]]]]],b9A=[1,[0,0,a(i)]],b9B=[17,[0,a(ar),0,0],[18,[1,[0,[11,a(aR),0],a(aR)]],[11,a(ag3),[16,[17,0,[12,41,[17,0,0]]]]]]],b9C=[15,0],b9D=[17,0,0],b9E=[15,[16,[17,0,0]]],b9F=[17,0,0],b9G=[17,0,0],b9H=[17,[0,a(k),1,0],[11,a(LH),0]],b9I=[2,0,[17,0,0]],b9J=[17,0,0],E0=a(qp),EZ=a(mc),Rq=[0,a(gO),a(eB),a(fx),a(hJ),a(dB),a(h9),a(ef),a(h7),a(hZ),a(hR),a(hN),a(hL),a(f6),a(ee),a("number"),a(hT),a(fs),a(h_),a(fy),a(h$),a(hO),a(hU),a(eh),a(hY),a(eg),a(hK),a(gV),a(hX),a(h3),a(h1),a(dm),a(gb),a(gP),a(h2),a(hW),a(hE),a(eD),a(ft),a(h4)],vE=[0,a(ef),a(eD),a(h$),a(fs),a(h9),a(hJ),a(hO),a(gP),a(fx),a(gO),a(fy),a(h_),a(f6),a(eB),a(hE),a(hW),a(eh),a(hY),a(gV),a(dB),a(h2),a(hZ),a(hX),a(hU),a("number"),a(gb),a(ee),a(hL),a(dm),a(hN),a(h7),a(h4),a(hR),a(ft),a(eg),a(hT),a(h3),a(hK),a(h1)],gn=[0,a(h4),a(ft),a(eD),a(hE),a(hW),a(h2),a(gP),a(gb),a(dm),a(h1),a(h3),a(hX),a(gV),a(hK),a(eg),a(hY),a(eh),a(hU),a(hO),a(h$),a(fy),a(h_),a(fs),a(hT),a("number"),a(ee),a(f6),a(hL),a(hN),a(hR),a(hZ),a(h7),a(ef),a(h9),a(dB),a(hJ),a(fx),a(eB),a(gO)],En=a("1.9.2"),Es=[0,[0,0,[0,[0,1],0]],[0,0,[0,[0,5],0]],[0,0,0]],mI=a(Lj),rj=[0,a(aef),a(KU),a(zW),a(co),a(nM)],eP=[0,0,0],v9=[0,a("\0\0\xa4\xff\xa5\xff\xe0\0\x03\x01&\x01I\x01l\x01\x8f\x01\xbc\xff\xb2\x01\xd7\x01\xc4\xff[\0\xfc\x01\x1f\x02D\0G\0T\0B\x02\xd5\xff\xd7\xff\xda\xffe\x02\xc4\x02\xe7\x02Y\0\xff\0\x05\x03\xec\xffR\x03s\x03\xbc\x03\x8c\x04\\\x05,\x06\x0b\x07g\x077\b}\0\xfe\xff\x01\0\x05\0\xff\xff\x06\0\x07\0\x16\t4\t\x04\n\xfa\xff\xf9\xff\xd4\n\xa4\x0b\xf7\xff\xf6\xff\xed\xff\xee\xff\xef\xff]\0v\x02[\0n\0\xe7\x02\x07\x04\xd7\x04e\x02\xfe\x02v\0\xc2\xff\xeb\xffx\x05\x84\f`\0q\0\x0b\0\xea\xff\xe9\xff\xe5\xff\xe5\x04\x80\0s\0\xe8\xff\xe0\0u\0\xe7\xffw\x06\x93\0\xe6\xff\x92\0\xe1\xff\x94\0\xe0\xff\xd9\0\x84\f\xdf\xff\xab\f\xaf\b\xae\x06\xde\xff\f\0\x18\x01,\x01P\x01-\x01\xde\xff\r\0\xd9\f\0\r#\rI\r\xd2\xff\xce\xff\xcf\xff\xd0\xff\xcc\xffl\r\x9a\0\xb7\0\xc5\xff\xc6\xff\xc7\xff\xc7\0\xb6\xff\xb8\xff\xbf\xff\x8f\r\xbb\xff\xbd\xff\xb2\r\xd5\r\xf8\r\x1b\x0e\xeb\x05\xf3\xff\xf4\xff\x11\0\xf5\xff>\x02\xac\x07\xfd\xff\xdf\0\xf1\0\xff\xff\xfe\xff\xfc\xff\xc8\x07-\x0e\xfa\0\xfc\0\x12\0\xfb\xff\xfa\xff\xf9\xff\x80\t\x1e\x03\x03\x01\xf8\xff\\\x03\x04\x01\xf7\xffO\n\x05\x01\xf6\xff+\x01\xc7\x01\xf7\xff\xf8\xff\xf9\xff;\x01v\x0e\xff\xff\xfa\xff\x1f\x0b$\x04\xfd\xff&\x01E\x01^\x01\xfc\x04\xfc\xff\xef\x0b\xfb\xff_\x01\xb5\x01\xfc\xff\xee\x06\xfe\xff\xff\xffo\x01p\x01\xfd\xffJ\x07\x10\x01\x13\x012\x01?\x01\x1a\x01k\x01!\x01\x13\0\xff\xff"),a("\xff\xff\xff\xff\xff\xffX\0W\0T\0S\0L\0J\0\xff\xffA\0>\0\xff\xff7\x006\x004\x002\0.\0,\0O\0\xff\xff\xff\xff\xff\xff#\0\"\0)\0'\0&\0<\0\xff\xff\x0e\0\x0e\0\r\0\f\0\x0b\0\n\0\x07\0\x04\0\x03\0\x02\0\xff\xff[\0[\0\xff\xff\xff\xff\xff\xffR\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0f\0\xff\xff\xff\xff\xff\xff\x0e\0\x0e\0\x0e\0\x0f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1a\0\x1a\0\x1a\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1b\0\xff\xff\x1c\0\xff\xff\x1d\0V\0\xff\xffY\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff$\0U\0P\0+\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff5\0F\0E\0\xff\xff\xff\xff\xff\xffH\0\xff\xff\xff\xff\xff\xff?\0\xff\xff\xff\xffQ\0K\0N\0M\0\xff\xff\xff\xff\xff\xff\f\0\xff\xff\f\0\f\0\xff\xff\f\0\f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\b\0\b\0\xff\xff\xff\xff\x05\0\x05\0\xff\xff\x01\0\x05\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x03\0\xff\xff\xff\xff\x03\0\xff\xff\xff\xff\xff\xff\x02\0\xff\xff\xff\xff\x01\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),a("\x01\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xffH\0\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\xff\xffM\0\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\0\0\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xffd\0\xff\xff\0\0\xff\xffd\0e\0d\0g\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\xff\xff\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\x85\0\0\0\0\0\xff\xff\0\0\x93\0\xff\xff\0\0\xff\xff\xff\xff\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\xa5\0\0\0\0\0\0\0\xff\xff\xab\0\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\0\0\xff\xff\xb8\0\0\0\xff\xff\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xc2\0\xc5\0\xff\xff\xc5\0\xff\xff\xff\xff\0\0"),a('\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\'\0(\0(\0\'\0)\0-\0+\0+\0(\0,\0,\0-\0I\0b\0h\0J\0c\0i\0\x86\0\x94\0\xc8\0\xa3\0\x95\0\'\0\b\0\x1d\0\x18\0\x06\0\x04\0\x17\0\x1b\0\x1a\0\x15\0\x19\0\x07\0\x14\0\x13\0\x12\0\x03\0\x1f\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x11\0\x10\0\x0f\0\x0e\0\n\0$\0\x05\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\r\0*\0\f\0\x05\0&\0\x16\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\x1c\0\x0b\0\t\0%\0r\0t\0q\0n\0X\0p\0o\0\'\0L\0C\0\'\0C\0A\0A\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0w\0K\0v\0Q\0u\0T\0\'\0@\0@\0@\0@\0@\0@\0@\0@\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0R\0R\0R\0R\0R\0R\0R\0R\0R\0R\0W\0Y\0Z\0[\0\\\0{\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0x\0 \0 \0 \0 \0 \0 \0 \0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0y\0"\0"\0"\0"\0"\0"\0"\0"\0\x02\0\x03\0[\0\\\0\x03\0\x03\0\x03\0z\0\x8f\0I\0\x03\0\x03\0J\0\x03\0\x03\0\x03\0S\0S\0S\0S\0S\0S\0S\0S\0S\0S\0\x03\0\x8e\0\x03\0\x03\0\x03\0\x03\0\x03\0\x98\0b\0\x97\0\x03\0c\0\xff\xff\x03\0\x03\0\x03\0\x9c\0\x9f\0\xa2\0\x03\0\x03\0\xaf\0\x03\0\x03\0\x03\0\xc1\0\xc2\0\x86\0b\0h\0\xa3\0c\0i\0\xc6\0\xc3\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\xc7\0\xa7\0\xaf\0\x05\0\xb6\0\xc4\0\x05\0\x05\0\x05\0\0\0g\0\xaf\0\x05\0\x05\0\xb1\0\x05\0\x05\0\x05\0\0\0\0\0\0\0f\0b\0G\0\x03\0c\0\x03\0\0\0\x05\0\x03\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\xaf\0\xa7\0\x06\0\xb1\0\xb6\0\x06\0\x06\0\x06\0f\0\0\0e\0\x06\0\x06\0\xc4\0\x06\0\x06\0\x06\0\xbb\0\xbb\0\0\0\xbd\0\xbd\0\0\0\x03\0\0\0\x03\0\0\0\x06\0\x05\0\x06\0\x06\0\x06\0\x06\0\x06\0\0\0\0\0\0\0k\0\0\0\0\0k\0k\0k\0\0\0\0\0\0\0k\0k\0\0\0k\0\x83\0k\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\x05\0\0\0k\0\x06\0k\0\x82\0k\0k\0k\0\0\0\0\0\0\0\x80\0\0\0\0\0\x80\0\x80\0\x80\0\0\0\0\0\0\0\x80\0\x80\0\0\0\x80\0\x80\0\x80\0\xbb\0\0\0\0\0\xbc\0\0\0\0\0\x06\0\0\0\x06\0\0\0\x80\0k\0\x80\0\x81\0\x80\0\x80\0\x80\0\0\0\xa7\0\0\0\x06\0\xa8\0\0\0\x06\0\x06\0\x06\0\0\0\0\0\0\0\x06\0\x06\0\0\0\x06\0\x06\0\x06\0\0\0\0\0\0\0\0\0\0\0\0\0k\0\xaa\0k\0\0\0\x06\0\x80\0\x06\0\x06\0\x06\0\x06\0\x06\0\0\0\0\0\0\0\0\0\0\0\x06\0\0\0\0\0\x06\0\x06\0\x06\0\0\0\xff\xff\0\0\x06\0\x06\0\0\0\x06\0\x06\0\x06\0\0\0\0\0\0\0\0\0\x80\0\0\0\x80\0\0\0\x7f\0\x06\0\x06\0\0\0\x06\0\x06\0\x06\0\x06\0\x06\0\xff\xff\0\0\0\0\0\0\0\0\x06\0\0\0\0\0\x06\0\x06\0\x06\0\xa9\0\0\0\0\0\x06\0\x06\0\0\0\x06\0\x06\0\x06\0\xff\xff\xff\xff\x06\0~\0\x06\0\xb9\0\xff\xff\0\0|\0\x06\0\x06\0\0\0\x06\0\x06\0\x06\0\x06\0\x06\0\0\0\0\0\xff\xff\x06\0\0\0\0\0\x06\0\x06\0\x06\0\0\0\0\0\x94\0\x06\0\x06\0\x95\0s\0\x06\0\x06\0\0\0\xff\xff\0\0\0\0}\0\0\0\x06\0\0\0\0\0\0\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\0\0\0\0\0\0k\0\0\0\x96\0k\0k\0k\0\0\0\0\0\xff\xffk\0k\0\0\0k\0l\0k\0\0\0\0\0\0\0\0\0\0\0\0\0\x06\0\0\0\x06\0\0\0k\0\x06\0k\0k\0m\0k\0k\0\0\0\0\0\0\0\x06\0\0\0\0\0\x06\0\x06\0j\0\0\0\0\0\0\0\x06\0\x06\0\0\0\x06\0\x06\0\x06\0A\0A\0\0\0\0\0\0\0\x92\0\x06\0\0\0\x06\0\0\0\x06\0k\0\x06\0\x06\0\x06\0\x06\0\x06\0;\0;\0;\0;\0;\0;\0;\0;\0;\0;\0\0\x008\0\0\0\0\0\0\0\xba\0\0\0\0\0\0\0\0\0\0\0:\0\0\0\0\0k\0\0\0k\0\0\0\0\0\x06\0A\0\0\0\0\0\xa6\0\0\0\0\0\0\0\0\0\0\0a\0\0\0\0\0\0\x009\0\0\x007\0\0\0;\0\0\0\0\0\0\0\0\0\0\0:\0\0\0\0\0\0\0\0\0\0\0\x06\0\0\0\x06\0a\0_\0\0\0_\0_\0_\0_\0\0\0\0\0\0\0_\0_\0\0\0_\0_\0_\0`\0`\0`\0`\0`\0`\0`\0`\0`\0`\0_\0\0\0_\0_\0_\0_\0_\0\0\0\0\0\0\0\x03\0\0\0\0\0\x03\0\x03\0\x03\0\0\0\0\0^\0]\0\x03\0\0\0\x03\0\x03\0\x03\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0\x03\0_\0\x03\0\x03\0\x03\0\x03\0\x03\0?\0?\0?\0?\0?\0?\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0_\0D\0_\0\0\0\0\0\x03\0\0\0\0\0?\0?\0?\0?\0?\0?\0\x9d\0\x9d\0\x9d\0\x9d\0\x9d\0\x9d\0\x9d\0\x9d\0\x9d\0\x9d\0\0\0\0\0\0\0\0\0\0\0B\0\0\0\0\0\0\0\0\0\0\0\x03\0F\0\x03\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0;\0E\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x9e\0\x9e\0\x9e\0\x9e\0\x9e\0\x9e\0\x9e\0\x9e\0\x9e\0\x9e\0\0\0:\0\0\0\0\0\0\0\0\0\0\0\0\x008\0\0\0\0\0;\0\0\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\0\0\0\0\0\0\0\0\x1e\0\0\0\0\0\0\0<\0\0\0:\0:\0\0\0\0\0\0\0\0\0\0\x009\x008\x007\0\0\0=\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0>\0\0\0\0\0\0\0\0\0\0\0\0\0\x1e\0\0\0\0\0<\0\0\0\0\0:\0\0\0\0\0\0\0\0\0\0\0\0\x009\0\0\x007\0=\0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0>\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\0\0\0\0\0\0\0\0 \0\0\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0?\0?\0?\0?\0?\0?\0\0\0\0\0\0\0\0\0\0\x008\0\xb2\0\xb2\0\xb2\0\xb2\0\xb2\0\xb2\0\xb2\0\xb2\0\xb2\0\xb2\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0?\0\0\0?\0?\0?\0?\0?\0?\0\0\0\0\0\0\0\0\0\0\x009\0\0\x007\0\0\0\0\0\0\0\0\0\0\0\0\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\0\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0!\0 \0 \0 \0 \0 \0 \0 \0 \0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\0\0\0\0\0\0\0\0!\0\0\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0@\0@\0@\0@\0@\0@\0@\0@\0\0\0\0\0\0\0\0\0\0\0\0\0U\0U\0U\0U\0U\0U\0U\0U\0U\0U\0\0\0\0\0\0\0\0\x008\0\0\0\0\0U\0U\0U\0U\0U\0U\0\xb3\0\xb3\0\xb3\0\xb3\0\xb3\0\xb3\0\xb3\0\xb3\0\xb3\0\xb3\0@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x009\0\0\x007\0U\0U\0U\0U\0U\0U\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\0\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0"\0 \0 \0 \0 \0 \0 \0 \0 \0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\0\0\0\0\0\0\0\0"\0\0\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0F\0\0\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0\0\0E\0\x86\0\0\0\0\0\x87\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x8b\0\0\0\0\0\0\0\0\0\x89\0\x8d\0\0\0\x8c\0\0\0\0\0\0\0\0\0\0\0\0\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\0\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0#\0"\0"\0"\0"\0"\0"\0"\0"\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\x8a\0\0\0\0\0\0\0\0\0\0\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\0\0\0\0\0\0\0\0#\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0V\0V\0V\0V\0V\0V\0V\0V\0V\0V\0\0\0\0\0\0\0\0\0\0\0\0\0a\0V\0V\0V\0V\0V\0V\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0a\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0V\0V\0V\0V\0V\0V\0`\0`\0`\0`\0`\0`\0`\0`\0`\0`\0\0\0\0\0\0\0\x88\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\0\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\0\0"\0"\0"\0"\0"\0"\0"\0"\0.\0\0\0\0\0.\0.\0.\0\0\0\0\0\0\0.\0.\0\0\0.\0.\0.\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0.\0\0\0.\0.\0.\0.\0.\0\0\0\xbf\0\0\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0.\x004\0\xbe\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\0\0\0.\0.\0.\0\0\0.\0.\0.\0\0\0\0\0\0\0.\0.\0\0\0.\0.\0.\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0.\0\0\0.\0.\0.\0.\0.\0\0\0\xbf\0\0\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0.\x000\0\xbe\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\0\0\0.\0\0\0.\0\0\0\0\0\0\0\0\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\0\0\x003\x003\x003\x003\x003\x003\x003\x003\0\x91\0\0\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x90\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\0\0\x90\0\0\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0#\0/\0/\0/\0/\0/\0/\0/\0/\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\0\0\0\0\0\0\0\0#\0\0\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\0\0\0\0\0\0\0\0\0\0\0\0f\0b\0\0\0\0\0c\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0f\0\0\0e\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0`\0`\0`\0`\0`\0`\0`\0`\0`\0`\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\0\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\0\0"\0"\0"\0"\0"\0"\0"\0"\0.\0\0\0\0\0.\0.\0.\0\0\0\0\0\0\0.\0.\0\0\0.\0.\0.\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0.\0\0\0.\0.\0.\0.\0.\0\0\0\0\0\0\0\0\0/\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\x002\0\0\0\0\0\0\0\0\0\0\0.\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0\0\0\0\0\0\0.\0/\0.\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0\xff\xff\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0\0\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\x000\0/\0/\0/\0/\0/\0/\0/\0/\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x001\0\0\0\0\0\0\0\0\0\0\0\0\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\0\0\0\0\0\0\0\0\x000\0\0\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\0\xa1\0\xa1\0\xa1\0\xa1\0\xa1\0\xa1\0\xa1\0\xa1\0\xa1\0\xa1\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xa1\0\xa1\0\xa1\0\xa1\0\xa1\0\xa1\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xa1\0\xa1\0\xa1\0\xa1\0\xa1\0\xa1\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0\0\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\x003\0/\0/\0/\0/\0/\0/\0/\0/\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x006\0\0\0\0\0\0\0\0\0\0\0\0\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\0\0\0\0\0\0\0\0\x003\0\0\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\0\0\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x004\x003\x003\x003\x003\x003\x003\x003\x003\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x005\0\0\0\0\0\0\0\0\0\0\0\0\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\0\0\0\0\0\0\0\0\x004\0\0\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\0\xb5\0\xb5\0\xb5\0\xb5\0\xb5\0\xb5\0\xb5\0\xb5\0\xb5\0\xb5\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xb5\0\xb5\0\xb5\0\xb5\0\xb5\0\xb5\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xb5\0\xb5\0\xb5\0\xb5\0\xb5\0\xb5\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\0\0\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\0\0\x003\x003\x003\x003\x003\x003\x003\x003\0P\0]\0P\0\0\0]\0]\0]\0P\0\0\0\0\0]\0]\0\0\0]\0]\0]\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0]\0\0\0]\0]\0]\0]\0]\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0_\0\0\0_\0_\0_\0_\0\0\0\0\0\0\0_\0_\0\0\0_\0_\0_\0\0\0\0\0\0\0\0\0\0\0P\0\0\0]\0\0\0\0\0_\0P\0_\0_\0_\0_\0_\0\0\0\0\0\0\0\0\0\0\0\0\0P\0\0\0\0\0\0\0P\0\0\0P\0\0\0\x06\0\0\0N\0\x06\0\x06\0\x06\0]\0\0\0]\0\x06\0\x06\0\0\0\x06\0\x06\0\x06\0_\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x06\0\0\0\x06\0\x06\0\x06\0\x06\0\x06\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0k\0\0\0\0\0k\0k\0k\0_\0\0\0_\0k\0k\0\0\0k\0k\0k\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x06\0\0\0\0\0k\0\0\0k\0k\0k\0k\0k\0\0\0\0\0\0\0k\0\0\0\0\0k\0k\0k\0\0\0\0\0\0\0k\0k\0\0\0k\0k\0k\0\0\0\0\0\x06\0\0\0\x06\0\0\0\0\0\0\0\0\0\0\0k\0k\0k\0k\0k\0k\0k\0\0\0\0\0\0\0\0\0\0\0\0\0k\0\0\0\0\0k\0k\0k\0\0\0\0\0\0\0k\0k\0\0\0k\0k\0k\0\0\0\0\0\0\0k\0\0\0k\0\0\0\0\0k\0\0\0k\0\xff\xffk\0k\0k\0k\0k\0\0\0\0\0\0\0\x06\0\0\0\0\0\x06\0\x06\0\x06\0\0\0\0\0\0\0\x06\0\x06\0\0\0\x06\0\x06\0\x06\0\0\0\0\0\0\0k\0\0\0k\0\0\0\0\0\0\0\0\0\x06\0k\0\x06\0\x06\0\x06\0\x06\0\x06\0\0\0\0\0\0\0\x06\0\0\0\0\0\x06\0\x06\0\x06\0\0\0\0\0\0\0\x06\0\x06\0\0\0\x06\0\x06\0\x06\0\0\0\0\0\0\0\0\0\0\0\0\0k\0\0\0k\0\0\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\0\0\0\0\0\0\x80\0\0\0\0\0\x80\0\x80\0\x80\0\0\0\0\0\0\0\x80\0\x80\0\0\0\x80\0\x80\0\x80\0\0\0\0\0\0\0\0\0\0\0\0\0\x06\0\0\0\x06\0\0\0\x80\0\x06\0\x80\0\x80\0\x80\0\x80\0\x80\0\0\0\0\0\0\0\x80\0\0\0\0\0\x80\0\x80\0\x80\0\0\0\0\0\0\0\x80\0\x80\0\0\0\x80\0\x80\0\x80\0\0\0\0\0\0\0\0\0\0\0\0\0\x06\0\0\0\x06\0\0\0\x80\0\x80\0\x80\0\x80\0\x80\0\x80\0\x80\0\0\0\0\0\0\0k\0\0\0\0\0k\0k\0k\0\0\0\0\0\0\0k\0k\0\0\0k\0k\0k\0\0\0\0\0\0\0\0\0\0\0\0\0\x80\0\0\0\x80\0\0\0k\0\x80\0k\0k\0k\0k\0k\0\0\0\0\0\0\0k\0\0\0\0\0k\0k\0k\0\0\0\0\0\0\0k\0k\0\0\0k\0k\0k\0\0\0\0\0\x9b\0\0\0\x9b\0\0\0\x80\0\0\0\x80\0\x9b\0k\0k\0k\0k\0k\0k\0k\0\0\0\x9a\0\x9a\0\x9a\0\x9a\0\x9a\0\x9a\0\x9a\0\x9a\0\x9a\0\x9a\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0k\0\0\0k\0\0\0\0\0k\0\0\0\0\0\0\0\0\0\0\0\0\0\xaf\0\0\0\0\0\xb0\0\0\0\0\0\0\0\0\0\0\0\x9b\0\0\0\0\0\0\0\0\0\0\0\x9b\0\0\0\0\0\0\0\0\0\0\0\0\0\xae\0k\0\xae\0k\0\0\0\x9b\0\0\0\xae\0\0\0\x9b\0\0\0\x9b\0\0\0\0\0\0\0\x99\0\xad\0\xad\0\xad\0\xad\0\xad\0\xad\0\xad\0\xad\0\xad\0\xad\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xae\0\0\0\0\0\0\0\0\0\0\0\xae\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xae\0\0\0\0\0\0\0\xae\0\0\0\xae\0\0\0\0\0\0\0\xac\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff'),a('\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0)\0\0\0\0\0)\0*\0,\0-\0*\0,\0-\0J\0c\0i\0J\0c\0i\0\x87\0\x95\0\xc7\0\x87\0\x95\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x10\0\r\0\x11\0\x12\0\x1a\0\x11\0\x11\0\'\0H\0:\0\'\0:\0<\0<\0:\0:\0:\0:\0:\0:\0:\0:\0:\0:\0\r\0I\0\r\0P\0\r\0S\0\'\0=\0=\0=\0=\0=\0=\0=\0=\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0V\0X\0X\0Z\0Z\0t\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0u\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x03\0\\\0\\\0\x03\0\x03\0\x03\0y\0\x8c\0\x1b\0\x03\0\x03\0\x1b\0\x03\0\x03\0\x03\0R\0R\0R\0R\0R\0R\0R\0R\0R\0R\0\x03\0\x8d\0\x03\0\x03\0\x03\0\x03\0\x03\0\x93\0d\0\x94\0\x04\0d\0\x1b\0\x04\0\x04\0\x04\0\x9b\0\x9e\0\xa1\0\x04\0\x04\0\xaf\0\x04\0\x04\0\x04\0\xc0\0\xc1\0\xa3\0e\0g\0\xa3\0e\0g\0\xc4\0\xc2\0\x04\0\x03\0\x04\0\x04\0\x04\0\x04\0\x04\0\xc6\0\xa8\0\xaf\0\x05\0\xa8\0\xc3\0\x05\0\x05\0\x05\0\xff\xffe\0\xb0\0\x05\0\x05\0\xb0\0\x05\0\x05\0\x05\0\xff\xff\xff\xff\xff\xfff\0f\0\x1b\0\x03\0f\0\x03\0\xff\xff\x05\0\x04\0\x05\0\x05\0\x05\0\x05\0\x05\0\xff\xff\xb1\0\xb6\0\x06\0\xb1\0\xb6\0\x06\0\x06\0\x06\0f\0\xff\xfff\0\x06\0\x06\0\xc5\0\x06\0\x06\0\x06\0\xbc\0\xbd\0\xff\xff\xbc\0\xbd\0\xff\xff\x04\0\xff\xff\x04\0\xff\xff\x06\0\x05\0\x06\0\x06\0\x06\0\x06\0\x06\0\xff\xff\xff\xff\xff\xff\x07\0\xff\xff\xff\xff\x07\0\x07\0\x07\0\xff\xff\xff\xff\xff\xff\x07\0\x07\0\xff\xff\x07\0\x07\0\x07\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x05\0\xff\xff\x05\0\xff\xff\x07\0\x06\0\x07\0\x07\0\x07\0\x07\0\x07\0\xff\xff\xff\xff\xff\xff\b\0\xff\xff\xff\xff\b\0\b\0\b\0\xff\xff\xff\xff\xff\xff\b\0\b\0\xff\xff\b\0\b\0\b\0\xb7\0\xff\xff\xff\xff\xb7\0\xff\xff\xff\xff\x06\0\xff\xff\x06\0\xff\xff\b\0\x07\0\b\0\b\0\b\0\b\0\b\0\xff\xff\xa4\0\xff\xff\n\0\xa4\0\xff\xff\n\0\n\0\n\0\xff\xff\xff\xff\xff\xff\n\0\n\0\xff\xff\n\0\n\0\n\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x07\0\xa4\0\x07\0\xff\xff\n\0\b\0\n\0\n\0\n\0\n\0\n\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0b\0\xff\xff\xff\xff\x0b\0\x0b\0\x0b\0\xff\xff\x1b\0\xff\xff\x0b\0\x0b\0\xff\xff\x0b\0\x0b\0\x0b\0\xff\xff\xff\xff\xff\xff\xff\xff\b\0\xff\xff\b\0\xff\xff\n\0\n\0\x0b\0\xff\xff\x0b\0\x0b\0\x0b\0\x0b\0\x0b\0d\0\xff\xff\xff\xff\xff\xff\xff\xff\x0e\0\xff\xff\xff\xff\x0e\0\x0e\0\x0e\0\xa4\0\xff\xff\xff\xff\x0e\0\x0e\0\xff\xff\x0e\0\x0e\0\x0e\0e\0g\0\n\0\n\0\n\0\xb7\0\xc2\0\xff\xff\x0b\0\x0b\0\x0e\0\xff\xff\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\xff\xff\xff\xff\xc3\0\x0f\0\xff\xff\xff\xff\x0f\0\x0f\0\x0f\0\xff\xff\xff\xff\x89\0\x0f\0\x0f\0\x89\0\x0f\0\x0f\0\x0f\0\xff\xfff\0\xff\xff\xff\xff\x0b\0\xff\xff\x0b\0\xff\xff\xff\xff\xff\xff\x0f\0\x0e\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\xff\xff\xff\xff\xff\xff\x13\0\xff\xff\x89\0\x13\0\x13\0\x13\0\xff\xff\xff\xff\xc5\0\x13\0\x13\0\xff\xff\x13\0\x13\0\x13\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0e\0\xff\xff\x0e\0\xff\xff\x13\0\x0f\0\x13\0\x13\0\x13\0\x13\0\x13\0\xff\xff\xff\xff\xff\xff\x17\0\xff\xff\xff\xff\x17\0\x17\0\x17\0\xff\xff\xff\xff\xff\xff\x17\0\x17\0\xff\xff\x17\0\x17\0\x17\0A\0A\0\xff\xff\xff\xff\xff\xff\x89\0\x0f\0\xff\xff\x0f\0\xff\xff\x17\0\x13\0\x17\0\x17\0\x17\0\x17\0\x17\0;\0;\0;\0;\0;\0;\0;\0;\0;\0;\0\xff\xffA\0\xff\xff\xff\xff\xff\xff\xb7\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff;\0\xff\xff\xff\xff\x13\0\xff\xff\x13\0\xff\xff\xff\xff\x17\0A\0\xff\xff\xff\xff\xa4\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x18\0\xff\xff\xff\xff\xff\xffA\0\xff\xffA\0\xff\xff;\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff;\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x17\0\xff\xff\x17\0\x18\0\x18\0\xff\xff\x18\0\x18\0\x18\0\x18\0\xff\xff\xff\xff\xff\xff\x18\0\x18\0\xff\xff\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\xff\xff\x18\0\x18\0\x18\0\x18\0\x18\0\xff\xff\xff\xff\xff\xff\x19\0\xff\xff\xff\xff\x19\0\x19\0\x19\0\xff\xff\xff\xff\x19\0\x19\0\x19\0\xff\xff\x19\0\x19\0\x19\0>\0>\0>\0>\0>\0>\0>\0>\0>\0>\0\x19\0\x18\0\x19\0\x19\0\x19\0\x19\0\x19\0>\0>\0>\0>\0>\0>\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x89\0\xff\xff\x18\0\x1c\0\x18\0\xff\xff\xff\xff\x19\0\xff\xff\xff\xff>\0>\0>\0>\0>\0>\0\x9a\0\x9a\0\x9a\0\x9a\0\x9a\0\x9a\0\x9a\0\x9a\0\x9a\0\x9a\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffB\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x19\0\x1c\0\x19\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1e\0\x1c\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x9d\0\x9d\0\x9d\0\x9d\0\x9d\0\x9d\0\x9d\0\x9d\0\x9d\0\x9d\0\xff\xff\x1e\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1e\0\xff\xff\xff\xff\x1f\0\xff\xff\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\xff\xff\xff\xff\xff\xff\xff\xff\x1e\0\xff\xff\xff\xff\xff\xff\x1f\0\xff\xff\x1e\0\x1f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1e\0\x1f\0\x1e\0\xff\xff\x1f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1f\0\xff\xff\xff\xff\x1f\0\xff\xff\xff\xff\x1f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1f\0\xff\xff\x1f\0\x1f\0 \0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1f\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\xff\xff\xff\xff\xff\xff\xff\xff \0\xff\xff \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff?\0?\0?\0?\0?\0?\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff?\0\xad\0\xad\0\xad\0\xad\0\xad\0\xad\0\xad\0\xad\0\xad\0\xad\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff?\0\xff\xff?\0?\0?\0?\0?\0?\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff?\0\xff\xff?\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\xff\xff \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0!\0 \0 \0 \0 \0 \0 \0 \0 \0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\xff\xff\xff\xff\xff\xff\xff\xff!\0\xff\xff!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0@\0@\0@\0@\0@\0@\0@\0@\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffN\0N\0N\0N\0N\0N\0N\0N\0N\0N\0\xff\xff\xff\xff\xff\xff\xff\xff@\0\xff\xff\xff\xffN\0N\0N\0N\0N\0N\0\xb2\0\xb2\0\xb2\0\xb2\0\xb2\0\xb2\0\xb2\0\xb2\0\xb2\0\xb2\0@\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff@\0\xff\xff@\0N\0N\0N\0N\0N\0N\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\xff\xff!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0"\0!\0!\0!\0!\0!\0!\0!\0!\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\xff\xff\xff\xff\xff\xff\xff\xff"\0\xff\xff"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0F\0\xff\xffF\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0\xff\xffF\0\x84\0\xff\xff\xff\xff\x84\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x84\0\xff\xff\xff\xff\xff\xff\xff\xff\x84\0\x84\0\xff\xff\x84\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\xff\xff"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0#\0"\0"\0"\0"\0"\0"\0"\0"\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\x84\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\xff\xff\xff\xff\xff\xff\xff\xff#\0\xff\xff#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0U\0U\0U\0U\0U\0U\0U\0U\0U\0U\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffa\0U\0U\0U\0U\0U\0U\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffa\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffU\0U\0U\0U\0U\0U\0a\0a\0a\0a\0a\0a\0a\0a\0a\0a\0\xff\xff\xff\xff\xff\xff\x84\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\xff\xff#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\xff\xff#\0#\0#\0#\0#\0#\0#\0#\0$\0\xff\xff\xff\xff$\0$\0$\0\xff\xff\xff\xff\xff\xff$\0$\0\xff\xff$\0$\0$\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff$\0\xff\xff$\0$\0$\0$\0$\0\xff\xff\xb9\0\xff\xff\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0\xb9\0$\0$\0\xb9\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0\xff\xff$\0%\0$\0\xff\xff%\0%\0%\0\xff\xff\xff\xff\xff\xff%\0%\0\xff\xff%\0%\0%\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff%\0\xff\xff%\0%\0%\0%\0%\0\xff\xff\xbf\0\xff\xff\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0\xbf\0%\0%\0\xbf\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\xff\xff%\0\xff\xff%\0\xff\xff\xff\xff\xff\xff\xff\xff$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0\xff\xff$\0$\0$\0$\0$\0$\0$\0$\0\x8a\0\xff\xff\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x8a\0\x91\0\x8a\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\x91\0\xff\xff\x91\0\xff\xff%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0&\0%\0%\0%\0%\0%\0%\0%\0%\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\xff\xff\xff\xff\xff\xff\xff\xff&\0\xff\xff&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff`\0`\0\xff\xff\xff\xff`\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff`\0\xff\xff`\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff`\0`\0`\0`\0`\0`\0`\0`\0`\0`\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\xff\xff&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\xff\xff&\0&\0&\0&\0&\0&\0&\0&\0.\0\xff\xff\xff\xff.\0.\0.\0\xff\xff\xff\xff\xff\xff.\0.\0\xff\xff.\0.\0.\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff.\0\xff\xff.\0.\0.\0.\0.\0\xff\xff\xff\xff\xff\xff\xff\xff/\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff.\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0\xff\xff\xff\xff\xff\xff.\0/\0.\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0`\0\x99\0\x99\0\x99\0\x99\0\x99\0\x99\0\x99\0\x99\0\x99\0\x99\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x99\0\x99\0\x99\0\x99\0\x99\0\x99\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x99\0\x99\0\x99\0\x99\0\x99\0\x99\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0\xff\xff/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\x000\0/\0/\0/\0/\0/\0/\0/\0/\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff0\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\0\xff\xff\xff\xff\xff\xff\xff\xff0\0\xff\xff0\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\0\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\xa0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff0\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\0\xff\xff0\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\x003\x000\x000\x000\x000\x000\x000\x000\x000\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff3\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\0\xff\xff\xff\xff\xff\xff\xff\xff3\0\xff\xff3\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\0\xac\0\xac\0\xac\0\xac\0\xac\0\xac\0\xac\0\xac\0\xac\0\xac\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xac\0\xac\0\xac\0\xac\0\xac\0\xac\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xac\0\xac\0\xac\0\xac\0\xac\0\xac\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff3\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\0\xff\xff3\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x004\x003\x003\x003\x003\x003\x003\x003\x003\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff4\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\0\xff\xff\xff\xff\xff\xff\xff\xff4\0\xff\xff4\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\xb4\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff4\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\0\xff\xff4\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\0\xff\xff4\x004\x004\x004\x004\x004\x004\x004\0G\0]\0G\0\xff\xff]\0]\0]\0G\0\xff\xff\xff\xff]\0]\0\xff\xff]\0]\0]\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0]\0\xff\xff]\0]\0]\0]\0]\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff_\0\xff\xff_\0_\0_\0_\0\xff\xff\xff\xff\xff\xff_\0_\0\xff\xff_\0_\0_\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffG\0\xff\xff]\0\xff\xff\xff\xff_\0G\0_\0_\0_\0_\0_\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffG\0\xff\xff\xff\xff\xff\xffG\0\xff\xffG\0\xff\xffj\0\xff\xffG\0j\0j\0j\0]\0\xff\xff]\0j\0j\0\xff\xffj\0j\0j\0_\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffj\0\xff\xffj\0j\0j\0j\0j\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffk\0\xff\xff\xff\xffk\0k\0k\0_\0\xff\xff_\0k\0k\0\xff\xffk\0k\0k\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffj\0\xff\xff\xff\xffk\0\xff\xffk\0k\0k\0k\0k\0\xff\xff\xff\xff\xff\xffl\0\xff\xff\xff\xffl\0l\0l\0\xff\xff\xff\xff\xff\xffl\0l\0\xff\xffl\0l\0l\0\xff\xff\xff\xffj\0\xff\xffj\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffl\0k\0l\0l\0l\0l\0l\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffm\0\xff\xff\xff\xffm\0m\0m\0\xff\xff\xff\xff\xff\xffm\0m\0\xff\xffm\0m\0m\0\xff\xff\xff\xff\xff\xffk\0\xff\xffk\0\xff\xff\xff\xffl\0\xff\xffm\0G\0m\0m\0m\0m\0m\0\xff\xff\xff\xff\xff\xffs\0\xff\xff\xff\xffs\0s\0s\0\xff\xff\xff\xff\xff\xffs\0s\0\xff\xffs\0s\0s\0\xff\xff\xff\xff\xff\xffl\0\xff\xffl\0\xff\xff\xff\xff\xff\xff\xff\xffs\0m\0s\0s\0s\0s\0s\0\xff\xff\xff\xff\xff\xff}\0\xff\xff\xff\xff}\0}\0}\0\xff\xff\xff\xff\xff\xff}\0}\0\xff\xff}\0}\0}\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffm\0\xff\xffm\0\xff\xff}\0s\0}\0}\0}\0}\0}\0\xff\xff\xff\xff\xff\xff\x80\0\xff\xff\xff\xff\x80\0\x80\0\x80\0\xff\xff\xff\xff\xff\xff\x80\0\x80\0\xff\xff\x80\0\x80\0\x80\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffs\0\xff\xffs\0\xff\xff\x80\0}\0\x80\0\x80\0\x80\0\x80\0\x80\0\xff\xff\xff\xff\xff\xff\x81\0\xff\xff\xff\xff\x81\0\x81\0\x81\0\xff\xff\xff\xff\xff\xff\x81\0\x81\0\xff\xff\x81\0\x81\0\x81\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff}\0\xff\xff}\0\xff\xff\x81\0\x80\0\x81\0\x81\0\x81\0\x81\0\x81\0\xff\xff\xff\xff\xff\xff\x82\0\xff\xff\xff\xff\x82\0\x82\0\x82\0\xff\xff\xff\xff\xff\xff\x82\0\x82\0\xff\xff\x82\0\x82\0\x82\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x80\0\xff\xff\x80\0\xff\xff\x82\0\x81\0\x82\0\x82\0\x82\0\x82\0\x82\0\xff\xff\xff\xff\xff\xff\x83\0\xff\xff\xff\xff\x83\0\x83\0\x83\0\xff\xff\xff\xff\xff\xff\x83\0\x83\0\xff\xff\x83\0\x83\0\x83\0\xff\xff\xff\xff\x92\0\xff\xff\x92\0\xff\xff\x81\0\xff\xff\x81\0\x92\0\x83\0\x82\0\x83\0\x83\0\x83\0\x83\0\x83\0\xff\xff\x92\0\x92\0\x92\0\x92\0\x92\0\x92\0\x92\0\x92\0\x92\0\x92\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x82\0\xff\xff\x82\0\xff\xff\xff\xff\x83\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xa9\0\xff\xff\xff\xff\xa9\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x92\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x92\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xa9\0\x83\0\xa9\0\x83\0\xff\xff\x92\0\xff\xff\xa9\0\xff\xff\x92\0\xff\xff\x92\0\xff\xff\xff\xff\xff\xff\x92\0\xa9\0\xa9\0\xa9\0\xa9\0\xa9\0\xa9\0\xa9\0\xa9\0\xa9\0\xa9\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xa9\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xa9\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xa9\0\xff\xff\xff\xff\xff\xff\xa9\0\xff\xff\xa9\0\xff\xff\xff\xff\xff\xff\xa9\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xa9\0'),a("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n\0$\0\f\0\0\0\0\0\0\0\x02\0\0\0\x1b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\x02\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),a("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),a("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x13\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),a("\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0$\0$\0\0\0$\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\x01\0\x16\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\x01\0\0\0\0\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"),a("\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x18\0e\0\xa9\0\xb0\0e\0\xb1\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x18\0\xff\xffe\0\0\0f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff`\0a\0\xff\xff\xff\xff\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0`\0`\0`\0`\0`\0`\0`\0`\0`\0`\0a\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffa\0a\0a\0a\0a\0a\0a\0a\0a\0a\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffe\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"),a("\xff\x04\xff\xff\x05\xff\xff\x07\xff\x06\xff\xff\x03\xff\0\x04\x01\x05\xff\x07\xff\xff\x06\xff\x07\xff\xff\0\x04\x01\x05\x03\x06\x02\x07\xff\x01\xff\xff\0\x01\xff")],fO=a("*dummy method*"),m2=a(i),Yq=a(Nf),hs=a(i),nl=a(nM),s_=a(e6),s$=a("partial_arg"),Yy=a("imul"),ta=a(agv),Yz=a("raw_expr"),x2=a(".cmj"),x3=a("*j"),pN=[0,2,1],Zb=[9,0,0],Zd=a(i),pO=a(fq),i1=a(KV),ti=a(akM),Zg=a(uj),Ia=a(bI),Ib=a(bc),Ic=a(gb),d8=a(b0),fm=a(n3),Zh=a(zB),Zi=a(alH),Zj=a("charCodeAt"),Zk=a(t$),Zl=a(am6),Zm=a(ae6),tj=a(aib),Zn=a(uM),Zo=a(uh),Zp=a(ad1),Zq=a(Bg),Zr=a("'use strict';"),Zs=a(fo),Zt=a(Mm),Zu=a("apply"),Id=a(fp),Zv=a(kU),Zw=a("fromCharCode"),hw=a(ut),ye=a(zB),ZE=a("Caml_exceptions"),ZF=a("Caml_io"),Ii=a("Caml_obj"),ZG=a("Caml_array"),ZH=a("Caml_format"),nr=a(aj$),ZI=a("Caml_oo"),Ij=a("Curry"),ZJ=a("Caml_oo_curry"),ZK=a("Caml_int64"),ns=a("Caml_int32"),tm=a("Js_primitive"),ZL=a("Caml_module"),d9=[0,[40,[1,[0,0,0]]],[0,a(jd)]],df=[0,[40,[1,[0,0,0]]],0],yh=[0,[40,[1,[0,1,0]]],0],IB=[0,a("\0\0\xef\xff\xf0\xff\xf1\xff\0\0\x19\0\x0b\0\xf4\xff\xf5\xff\xf6\xff\xf7\xff\xf8\xff\xf9\xff\0\0\0\0\0\0)\0\x01\0\xfe\xff\x05\0\x05\0\xfd\xff\x01\0\x02\0\xfc\xff\0\0\0\0\x03\0\xfb\xff\x01\0\x03\0\xfa\xffO\0Y\0c\0y\0\x83\0\x8d\0\x99\0\xa3\0\x01\0\xfd\xff\xfe\xff\x17\0\xff\xff\x06\0\xf6\xff\xbd\0\xf8\xff\xd7\0\xff\xff\xf9\xff\xf9\0\xb5\0\xfc\xff\t\0?\0K\0\xea\0\xfb\xff \x01\xfa\xff"),a("\xff\xff\xff\xff\xff\xff\xff\xff\r\0\r\0\x10\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x10\0\x10\0\x10\0\x10\0\x10\0\xff\xff\0\0\f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\r\0\xff\xff\r\0\xff\xff\r\0\xff\xff\xff\xff\xff\xff\xff\xff\x01\0\xff\xff\xff\xff\xff\xff\b\0\xff\xff\xff\xff\xff\xff\xff\xff\x06\0\x06\0\xff\xff\x06\0\x01\0\x02\0\xff\xff\xff\xff\xff\xff\xff\xff"),a("\x01\0\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\x14\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff*\0\0\0\0\0\xff\xff\0\0/\0\0\0/\0\0\x003\0\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\0\0"),a('\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x13\0\x12\0\x12\0\x13\0\x11\0\x13\0\xff\xff0\0\x13\0\xff\xff9\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x13\0\0\0\x03\0\0\0\0\0\x13\0\0\0\0\x002\0\0\0\0\0+\0\b\0\x06\0!\0\x10\0\x04\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x07\0\x04\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0 \0,\0!\x008\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x15\x009\0\0\0\0\0\0\0\x14\0\0\0\0\0\f\0\0\0\x0b\0 \x008\0\0\0\x19\x001\0\0\0\0\0 \0\x0e\0\x18\0\x1c\0\0\0\0\x009\0\x1a\0\x1e\0\r\0\x1f\0\0\0\0\0\x16\0\x1b\0\x0f\0\x1d\0\x17\0\0\0\0\0\0\0\'\0\n\0\'\0\t\0 \0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0%\0\0\0%\0\0\0#\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0\xff\xff#\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\0\0\0\0\xff\xff\0\x008\0\0\0\0\x007\0:\0:\0:\0:\0:\0:\0:\0:\0:\0:\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x006\0\0\x006\0\0\0\0\0\0\0\0\x006\0\0\0\x02\0)\0\0\0\0\0\0\0\xff\xff.\x005\x005\x005\x005\x005\x005\x005\x005\x005\x005\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff;\0;\0;\0;\0;\0;\0;\0;\0;\0;\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\x006\0\0\0\0\0\0\0\0\0\0\x006\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\x006\0\0\0\0\0\0\x006\0\0\x006\0\0\0\0\0\0\x004\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0<\0<\0<\0<\0<\0<\0\0\0=\0=\0=\0=\0=\0=\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0=\0=\0=\0=\0=\0=\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0'),a('\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\x11\0\0\0\0\0\x13\0\x14\0-\0\x13\0\x14\x007\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\0\0\xff\xff\xff\xff\x13\0\xff\xff\xff\xff-\0\xff\xff\xff\xff(\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x04\0+\0\x05\x008\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x10\x009\0\xff\xff\xff\xff\xff\xff\x10\0\xff\xff\xff\xff\0\0\xff\xff\0\0\x05\x008\0\xff\xff\x0e\0-\0\xff\xff\xff\xff\x04\0\0\0\x17\0\x1b\0\xff\xff\xff\xff9\0\x19\0\x1d\0\0\0\x1e\0\xff\xff\xff\xff\x0f\0\x1a\0\0\0\r\0\x16\0\xff\xff\xff\xff\xff\xff \0\0\0 \0\0\0\x05\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff#\0\xff\xff#\0\xff\xff"\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0/\0"\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\'\0\'\0\'\0\'\0\'\0\'\0\'\0\'\0\'\0\'\0\xff\xff\xff\xff/\0\xff\xff1\0\xff\xff\xff\xff1\x005\x005\x005\x005\x005\x005\x005\x005\x005\x005\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff1\0\xff\xff1\0\xff\xff\xff\xff\xff\xff\xff\xff1\0\xff\xff\0\0(\0\xff\xff\xff\xff\xff\xff\x14\0-\x001\x001\x001\x001\x001\x001\x001\x001\x001\x001\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff/\0:\0:\0:\0:\0:\0:\0:\0:\0:\0:\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff4\x004\x004\x004\x004\x004\x004\x004\x004\x004\x001\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff1\x004\x004\x004\x004\x004\x004\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff1\0\xff\xff\xff\xff\xff\xff1\0\xff\xff1\0\xff\xff\xff\xff\xff\xff1\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\x004\x004\x004\x004\x004\x004\0\xff\xff<\0<\0<\0<\0<\0<\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff<\0<\0<\0<\0<\0<\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff/\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff1\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff'),a(i),a(i),a(i),a(i),a(i),a(i)],IC=[1,0],_t=[2,[8,1,[0,a(fo)]]],_u=[2,[8,0,[0,a(eC)]]],kx=[2,[8,0,[0,a(jd)]]],IW=[0,0],IX=a("BUCKLE20170901"),y8=[0,0,0,2],dA=[0,0,1],JP=[0,[40,[1,[0,0,0]]],[0,a(h0)]],J3=[0,0],abf=[0,a(jd)],J5=[0,a(nT)],abg=[0,a(dB)],abh=[0,a(eh)],abi=[1,[0,a(ge)],a(h5)],kI=[0,a("Js_unsafe")],zn=a("shape"),nI=a("Bs_dyn"),l3=a(am_),zo=a("_to_value_");aF(11,DL,Au);aF(10,h,Ci);aF(9,[I,a(Ae),Aa],Ae);aF(8,Pr,zZ);aF(7,vm,A3);aF(6,l,nW);aF(5,[I,a(Bd),-6],Bd);aF(4,qT,Bs);aF(3,k1,zY);aF(2,dU,Br);aF(1,rg,Ca);aF(0,Pq,Ao);var
cf(a){if(typeof
a==="number")return 0;else
switch(a[0]){case
0:return[0,cf(a[1])];case
1:return[1,cf(a[1])];case
2:return[2,cf(a[1])];case
3:return[3,cf(a[1])];case
4:return[4,cf(a[1])];case
5:return[5,cf(a[1])];case
6:return[6,cf(a[1])];case
7:return[7,cf(a[1])];case
8:var
c=a[1];return[8,c,cf(a[2])];case
9:var
b=a[1];return[9,b,b,cf(a[3])];case
10:return[10,cf(a[1])];case
11:return[11,cf(a[1])];case
12:return[12,cf(a[1])];case
13:return[13,cf(a[1])];default:return[14,cf(a[1])]}}function
dp(a,b){if(typeof
a==="number")return b;else
switch(a[0]){case
0:return[0,dp(a[1],b)];case
1:return[1,dp(a[1],b)];case
2:return[2,dp(a[1],b)];case
3:return[3,dp(a[1],b)];case
4:return[4,dp(a[1],b)];case
5:return[5,dp(a[1],b)];case
6:return[6,dp(a[1],b)];case
7:return[7,dp(a[1],b)];case
8:var
c=a[1];return[8,c,dp(a[2],b)];case
9:var
d=a[2],e=a[1];return[9,e,d,dp(a[3],b)];case
10:return[10,dp(a[1],b)];case
11:return[11,dp(a[1],b)];case
12:return[12,dp(a[1],b)];case
13:return[13,dp(a[1],b)];default:return[14,dp(a[1],b)]}}function
bT(a,b){if(typeof
a==="number")return b;else
switch(a[0]){case
0:return[0,bT(a[1],b)];case
1:return[1,bT(a[1],b)];case
2:var
c=a[1];return[2,c,bT(a[2],b)];case
3:var
d=a[1];return[3,d,bT(a[2],b)];case
4:var
e=a[3],f=a[2],g=a[1];return[4,g,f,e,bT(a[4],b)];case
5:var
h=a[3],i=a[2],j=a[1];return[5,j,i,h,bT(a[4],b)];case
6:var
k=a[3],l=a[2],m=a[1];return[6,m,l,k,bT(a[4],b)];case
7:var
n=a[3],o=a[2],p=a[1];return[7,p,o,n,bT(a[4],b)];case
8:var
q=a[3],r=a[2],s=a[1];return[8,s,r,q,bT(a[4],b)];case
9:return[9,bT(a[1],b)];case
10:return[10,bT(a[1],b)];case
11:var
t=a[1];return[11,t,bT(a[2],b)];case
12:var
u=a[1];return[12,u,bT(a[2],b)];case
13:var
v=a[2],w=a[1];return[13,w,v,bT(a[3],b)];case
14:var
x=a[2],y=a[1];return[14,y,x,bT(a[3],b)];case
15:return[15,bT(a[1],b)];case
16:return[16,bT(a[1],b)];case
17:var
z=a[1];return[17,z,bT(a[2],b)];case
18:var
A=a[1];return[18,A,bT(a[2],b)];case
19:return[19,bT(a[1],b)];case
20:var
B=a[2],C=a[1];return[20,C,B,bT(a[3],b)];case
21:var
D=a[1];return[21,D,bT(a[2],b)];case
22:return[22,bT(a[1],b)];case
23:var
E=a[1];return[23,E,bT(a[2],b)];default:var
F=a[2],G=a[1];return[24,G,F,bT(a[3],b)]}}aF(12,[0,dp,cf,bT],uA);function
dq(a){throw[0,dU,a]}function
S(a){throw[0,k1,a]}var
a$=O([I,aoL,0]);function
c5(b,a){return ms(b,a)?b:a}function
cz(b,a){return ic(b,a)?b:a}function
k2(a){return 0<=a?a:-a|0}var
NY=kY(aoN),NZ=kY(aoO);function
aoM(a){return a^-1}var
fD=jc,qS=qr,aoQ=kY(aoP),aoS=kY(aoR),aoU=kY(aoT),aoW=kY(aoV);function
o(d,c){var
a=r(d),e=r(c),b=aN(a+e|0);fA(d,0,b,0,a);fA(c,0,b,a,e);return b}function
gj(a){if(0<=a)if(!(K<a))return a;return S(aoX)}function
CU(a){return a?aoY:aoZ}function
CV(a){return f(a,ao0)?f(a,ao1)?S(ao2):1:0}function
ao3(b){return a(i+b)}function
N0(a){var
b=0,d=r(a);for(;;){if(d<=b)return o(a,ao4);var
c=u(a,b),e=48<=c?58<=c?0:1:45===c?1:0;if(e){var
b=b+1|0;continue}return a}}function
of(a){return N0(Nq(ao5,a))}function
s(a,b){if(a){var
c=a[1];return[0,c,s(a[2],b)]}return b}var
N1=NH(0),ek=CI(1),eG=CI(2);function
u2(c,b,a){return CI(CR(a,c,b))}function
ao6(a){return u2(ao7,ajW,a)}function
CW(a){return u2(ao8,ajW,a)}function
N2(b){function
a(b){var
a=b;for(;;){if(a){var
c=a[2],d=a[1];try{dE(d)}catch(a){}var
a=c;continue}return 0}}return a(aod(0))}function
CX(b,a){return kZ(b,a,0,r(a))}function
el(b,a){return kZ(b,a,0,r(a))}function
N3(d,c,b,a){if(0<=b)if(0<=a)if(!((r(c)-a|0)<b))return kZ(d,c,b,a);return S(ao9)}function
CY(d,c,b,a){if(0<=b)if(0<=a)if(!((r(c)-a|0)<b))return kZ(d,c,b,a);return S(ao_)}function
ao$(b,a){return oc(b,a,0)}function
u3(a){dE(a);return g4(a)}function
apa(a){try{dE(a)}catch(a){}try{var
b=g4(a);return b}catch(a){return 0}}function
CZ(c,b,a){return NH(CR(a,c,b))}function
apb(a){return CZ(apc,0,a)}function
u4(a){return CZ(apd,0,a)}function
N4(d,c,b,a){if(0<=b)if(0<=a)if(!((r(c)-a|0)<b))return uS(d,c,b,a);return S(ape)}function
N5(g,f,e,d){var
b=e,a=d;for(;;){if(0<a){var
c=uS(g,f,b,a);if(0===c)throw qT;var
b=b+c|0,a=a-c|0;continue}return 0}}function
C0(d,c,b,a){if(0<=b)if(0<=a)if(!((r(c)-a|0)<b))return N5(d,c,b,a);return S(apf)}function
u5(c,a){var
b=aN(a);C0(c,b,0,a);return b}function
N6(d){function
f(d,g,f){var
b=g,a=f;for(;;){if(a){var
e=a[1],c=r(e),h=a[2];ib(e,0,d,b-c|0,c);var
b=b-c|0,a=h;continue}return d}}var
b=0,c=0;for(;;){var
a=aoc(d);if(0===a){if(b)return f(aN(c),c,b);throw qT}if(0<a){var
e=aN(a-1|0);uS(d,e,0,a-1|0);CH(d);if(b){var
g=(c+a|0)-1|0;return f(aN(g),g,[0,e,b])}return e}var
h=aN(-a|0);uS(d,h,0,-a|0);var
b=[0,h,b],c=c-a|0;continue}}function
apg(a){try{var
b=g4(a);return b}catch(a){return 0}}function
aph(a){return jw(ek,a)}function
api(a){return el(ek,a)}function
apj(a){return CX(ek,a)}function
apk(b){return el(ek,a(i+b))}function
apl(a){return el(ek,of(a))}function
apm(a){el(ek,a);jw(ek,10);return dE(ek)}function
apn(a){jw(ek,10);return dE(ek)}function
apo(a){return jw(eG,a)}function
og(a){return el(eG,a)}function
app(a){return CX(eG,a)}function
apq(b){return el(eG,a(i+b))}function
apr(a){return el(eG,of(a))}function
oh(a){el(eG,a);jw(eG,10);return dE(eG)}function
aps(a){jw(eG,10);return dE(eG)}function
C1(a){dE(ek);return N6(N1)}function
apt(a){return gh(C1(0))}function
apu(a){return gf(C1(0))}function
apv(a){return a[2]}function
mu(b,a){var
c=a[1],d=b[2],e=b[1],f=o(d,o(apw,a[2]));return[0,bT(e,c),f]}var
C2=[0,N2];function
N7(a){var
b=C2[1];C2[1]=function(c){d(a,0);return d(b,0)};return 0}function
C3(a){return d(C2[1],0)}function
oi(a){C3(0);return aoy(a)}aF(41,[0,S,dq,a$,c5,cz,k2,fD,qS,aoM,NY,NZ,aoQ,aoS,aoU,aoW,o,gj,CU,CV,ao3,of,s,N1,ek,eG,aph,api,apj,apk,apl,apm,apn,apo,og,app,apq,apr,oh,aps,C1,apt,apu,ao6,CW,u2,dE,N2,jw,el,CX,N3,CY,jw,aoe,ao$,aol,aoh,NE,u3,apa,NI,apb,u4,CZ,CH,N6,N4,C0,u5,CH,aob,oa,aoj,aof,NE,g4,apg,NI,[0,aom,aoi,NF,aok,aog,NF],apv,mu,oi,N7,N0,N5,C3],kK);function
qU(b,c){if(0===b)return[0];if(0<=b){var
e=X(b,d(c,0)),f=b-1|0,g=1;if(!(f<1)){var
a=g;for(;;){e[a+1]=d(c,a);var
h=a+1|0;if(f!==a){var
a=h;continue}break}}return e}return S(apx)}function
C4(b,f,e){var
c=X(b,[0]),d=b-1|0,g=0;if(!(d<0)){var
a=g;for(;;){c[a+1]=X(f,e);var
h=a+1|0;if(d!==a){var
a=h;continue}break}}return c}function
k3(a){var
b=a.length-1;return 0===b?[0]:js(a,0,b)}function
N8(b,a){var
c=b.length-1;return 0===c?k3(a):0===a.length-1?js(b,0,c):anL(b,a)}function
ij(c,b,a){if(0<=a)if(!((c.length-1-a|0)<b))return js(c,b,a);return S(apy)}function
N9(d,a,c,f){if(0<=a)if(0<=c)if(!((d.length-1-c|0)<a)){var
e=(a+c|0)-1|0;if(!(e<a)){var
b=a;for(;;){d[b+1]=f;var
g=b+1|0;if(e!==b){var
b=g;continue}break}}return 0}return S(apz)}function
gk(e,c,d,b,a){if(0<=a)if(0<=c)if(!((e.length-1-a|0)<c))if(0<=b)if(!((d.length-1-a|0)<b))return mo(e,c,d,b,a);return S(apA)}function
k4(e,b){var
c=b.length-1-1|0,f=0;if(!(c<0)){var
a=f;for(;;){d(e,b[a+1]);var
g=a+1|0;if(c!==a){var
a=g;continue}break}}return 0}function
em(e,b){var
c=b.length-1;if(0===c)return[0];var
f=X(c,d(e,b[1])),g=c-1|0,h=1;if(!(g<1)){var
a=h;for(;;){f[a+1]=d(e,b[a+1]);var
i=a+1|0;if(g!==a){var
a=i;continue}break}}return f}function
C5(e,c){var
d=c.length-1-1|0,f=0;if(!(d<0)){var
a=f;for(;;){b(e,a,c[a+1]);var
g=a+1|0;if(d!==a){var
a=g;continue}break}}return 0}function
apB(e,c){var
d=c.length-1;if(0===d)return[0];var
f=X(d,b(e,0,c[1])),g=d-1|0,h=1;if(!(g<1)){var
a=h;for(;;){f[a+1]=b(e,a,c[a+1]);var
i=a+1|0;if(g!==a){var
a=i;continue}break}}return f}function
jA(c){var
a=c.length-1-1|0,b=0;for(;;){if(0<=a){var
d=[0,c[a+1],b],a=a-1|0,b=d;continue}return b}}function
eH(a){if(a){var
d=0,c=a,g=a[2],h=a[1];for(;;){if(c){var
d=d+1|0,c=c[2];continue}var
f=X(d,h),e=1,b=g;for(;;){if(b){var
i=b[2];f[e+1]=b[1];var
e=e+1|0,b=i;continue}return f}}}return[0]}function
qV(g,f,d){var
c=[0,f],e=d.length-1-1|0,h=0;if(!(e<0)){var
a=h;for(;;){c[1]=b(g,c[1],d[a+1]);var
i=a+1|0;if(e!==a){var
a=i;continue}break}}return c[1]}function
C6(g,d,f){var
c=[0,f],e=d.length-1-1|0;if(!(e<0)){var
a=e;for(;;){c[1]=b(g,d[a+1],c[1]);var
h=a-1|0;if(0!==a){var
a=h;continue}break}}return c[1]}var
C7=O([I,apC,0]);function
C8(g,a){function
l(f,d){var
c=((d+d|0)+d|0)+1|0,e=[0,c];if((c+2|0)<f){var
h=c+1|0,l=n(a,h)[h+1];if(b(g,n(a,c)[c+1],l)<0)e[1]=c+1|0;var
i=c+2|0,m=n(a,i)[i+1],j=e[1];if(b(g,n(a,j)[j+1],m)<0)e[1]=c+2|0;return e[1]}if((c+1|0)<f){var
k=c+1|0,o=n(a,k)[k+1];if(!(0<=b(g,n(a,c)[c+1],o)))return c+1|0}if(c<f)return c;throw[0,C7,d]}function
r(h,f,e){var
c=f;for(;;){var
d=l(h,c);if(0<b(g,n(a,d)[d+1],e)){var
i=n(a,d)[d+1];n(a,c)[c+1]=i;var
c=d;continue}return n(a,c)[c+1]=e}}function
s(e,b,c){try{var
f=r(e,b,c);return f}catch(b){b=j(b);if(b[1]===C7){var
d=b[2];return n(a,d)[d+1]=c}throw b}}function
t(e,d){var
b=d;for(;;){var
c=l(e,b),f=n(a,c)[c+1];n(a,b)[b+1]=f;var
b=c;continue}}var
i=a.length-1,m=((i+1|0)/3|0)-1|0;function
u(b,a){try{var
c=t(b,a);return c}catch(a){a=j(a);if(a[1]===C7)return a[2];throw a}}if(!(m<0)){var
f=m;for(;;){s(i,f,n(a,f)[f+1]);var
y=f-1|0;if(0!==f){var
f=y;continue}break}}var
o=i-1|0;if(!(o<2)){var
e=o;a:for(;;){var
k=n(a,e)[e+1];a[e+1]=n(a,0)[1];var
c=u(e,0);for(;;){var
d=(c-1|0)/3|0;if(c===d)throw[0,h,apD];if(0<=b(g,n(a,d)[d+1],k))n(a,c)[c+1]=k;else{var
v=n(a,d)[d+1];n(a,c)[c+1]=v;if(0<d){var
c=d;continue}n(a,0)[1]=k}var
x=e-1|0;if(2!==e){var
e=x;continue a}break}break}}var
p=1<i?1:0;if(p){var
w=n(a,1)[2];a[2]=n(a,0)[1];var
q=a[1]=w}else
var
q=p;return q}function
N_(o,a){function
i(f,t,k,e,s,d,r){var
p=f+t|0,q=e+s|0,u=n(k,e)[e+1],h=f,m=n(a,f)[f+1],g=e,l=u,c=r;for(;;){if(0<b(o,m,l)){n(d,c)[c+1]=l;var
i=g+1|0;if(i<q){var
g=i,l=n(k,i)[i+1],c=c+1|0;continue}return gk(a,h,d,c+1|0,p-h|0)}n(d,c)[c+1]=m;var
j=h+1|0;if(j<p){var
h=j,m=n(a,j)[j+1],c=c+1|0;continue}return gk(k,g,d,c+1|0,q-g|0)}}function
j(q,e,f,p){var
g=p-1|0,r=0;if(!(g<0)){var
d=r;a:for(;;){var
h=q+d|0,i=n(a,h)[h+1],c=[0,(f+d|0)-1|0];for(;;){if(f<=c[1]){var
j=c[1];if(0<b(o,n(e,j)[j+1],i)){var
k=c[1],s=n(e,k)[k+1],l=c[1]+1|0;n(e,l)[l+1]=s;c[1]+=-1;continue}}var
m=c[1]+1|0;n(e,m)[m+1]=i;var
t=d+1|0;if(g!==d){var
d=t;continue a}break}break}}return 0}function
d(c,g,f,e){if(e<=5)return j(c,g,f,e);var
b=e/2|0,h=e-b|0;d(c+b|0,g,f+b|0,h);d(c,a,c+h|0,b);return i(c+h|0,b,g,f+b|0,h,g,f)}var
e=a.length-1;if(e<=5)return j(0,a,0,e);var
f=e/2|0,c=e-f|0,g=X(c,n(a,0)[1]);d(f,g,0,c);d(0,a,c,f);return i(c,f,g,0,c,a,0)}aF(48,[0,qU,C4,C4,N8,Nm,ij,k3,N9,gk,jA,eH,k4,em,C5,apB,qV,C6,C8,N_,N_],kW);function
w(c){var
b=0,a=c;for(;;){if(a){var
b=b+1|0,a=a[2];continue}return b}}function
cQ(a){return a?a[1]:dq(apE)}function
ik(a){return a?a[2]:dq(apF)}function
il(d,c){if(0<=c){var
a=d,b=c;for(;;){if(a){var
e=a[2],f=a[1];if(0===b)return f;var
a=e,b=b-1|0;continue}return dq(apG)}}return S(apH)}function
cG(d,c){var
a=d,b=c;for(;;){if(a){var
e=[0,a[1],b],a=a[2],b=e;continue}return b}}function
v(a){return cG(a,0)}function
fE(a){if(a){var
b=a[1];return s(b,fE(a[2]))}return 0}function
g(b,a){if(a){var
c=a[2],e=d(b,a[1]);return[0,e,g(b,c)]}return 0}function
N$(d,c,a){if(a){var
e=a[2],f=b(c,d,a[1]);return[0,f,N$(d+1|0,c,e)]}return 0}function
qW(b,a){return N$(0,b,a)}function
mv(e,c){var
b=0,a=c;for(;;){if(a){var
f=a[2],b=[0,d(e,a[1]),b],a=f;continue}return b}}function
m(c,b){var
a=b;for(;;){if(a){var
e=a[2];d(c,a[1]);var
a=e;continue}return 0}}function
Oa(f,e){var
c=0,a=e;for(;;){if(a){var
d=a[2];b(f,c,a[1]);var
c=c+1|0,a=d;continue}return 0}}function
G(f,e,d){var
c=e,a=d;for(;;){if(a){var
g=a[2],c=b(f,c,a[1]),a=g;continue}return c}}function
R(d,a,c){if(a){var
e=a[1];return b(d,e,R(d,a[2],c))}return c}function
aG(d,c,a){if(c){if(a){var
e=a[2],f=c[2],g=b(d,c[1],a[1]);return[0,g,aG(d,f,e)]}}else
if(!a)return 0;return S(apI)}function
apJ(g,f,e){var
d=0,c=f,a=e;for(;;){if(c){if(a){var
h=a[2],i=c[2],d=[0,b(g,c[1],a[1]),d],c=i,a=h;continue}}else
if(!a)return d;return S(apK)}}function
aC(f,e,d){var
c=e,a=d;for(;;){if(c){if(a){var
g=a[2],h=c[2];b(f,c[1],a[1]);var
c=h,a=g;continue}}else
if(!a)return 0;return S(apL)}}function
im(g,f,e,d){var
c=f,b=e,a=d;for(;;){if(b){if(a){var
h=a[2],i=b[2],c=p(g,c,b[1],a[1]),b=i,a=h;continue}}else
if(!a)return c;return S(apM)}}function
g5(d,b,a,c){if(b){if(a){var
e=a[1],f=b[1];return p(d,f,e,g5(d,b[2],a[2],c))}}else
if(!a)return c;return S(apN)}function
Z(e,c){var
a=c;for(;;){if(a){var
f=a[2],b=d(e,a[1]);if(b){var
a=f;continue}return b}return 1}}function
N(e,c){var
a=c;for(;;){if(a){var
f=a[2],b=d(e,a[1]);if(b)return b;var
a=f;continue}return 0}}function
qX(g,f,e){var
c=f,a=e;for(;;){if(c){if(a){var
h=a[2],i=c[2],d=b(g,c[1],a[1]);if(d){var
c=i,a=h;continue}return d}}else
if(!a)return 1;return S(apO)}}function
apP(g,f,e){var
c=f,a=e;for(;;){if(c){if(a){var
h=a[2],i=c[2],d=b(g,c[1],a[1]);if(d)return d;var
c=i,a=h;continue}}else
if(!a)return 0;return S(apQ)}}function
aY(d,c){var
a=c;for(;;){if(a){var
e=a[2],b=0===cp(a[1],d)?1:0;if(b)return b;var
a=e;continue}return 0}}function
a8(d,c){var
a=c;for(;;){if(a){var
b=a[1]===d?1:0,e=a[2];if(b)return b;var
a=e;continue}return 0}}function
dr(d,c){var
a=c;for(;;){if(a){var
b=a[1],e=a[2],f=b[2];if(0===cp(b[1],d))return f;var
a=e;continue}throw l}}function
mw(d,c){var
a=c;for(;;){if(a){var
b=a[1],e=a[2],f=b[2];if(b[1]===d)return f;var
a=e;continue}throw l}}function
g6(d,c){var
a=c;for(;;){if(a){var
e=a[2],b=0===cp(a[1][1],d)?1:0;if(b)return b;var
a=e;continue}return 0}}function
Ob(d,c){var
a=c;for(;;){if(a){var
b=a[1][1]===d?1:0,e=a[2];if(b)return b;var
a=e;continue}return 0}}function
Oc(b,a){if(a){var
c=a[2],d=a[1];return 0===cp(d[1],b)?c:[0,d,Oc(b,c)]}return 0}function
Od(b,a){if(a){var
c=a[2],d=a[1];return d[1]===b?c:[0,d,Od(b,c)]}return 0}function
io(e,c){var
a=c;for(;;){if(a){var
b=a[1],f=a[2];if(d(e,b))return b;var
a=f;continue}throw l}}function
by(f){var
g=0;return function(h){var
b=g,a=h;for(;;){if(a){var
c=a[2],e=a[1];if(d(f,e)){var
b=[0,e,b],a=c;continue}var
a=c;continue}return v(b)}}}function
Oe(h,g){var
c=0,b=0,a=g;for(;;){if(a){var
f=a[2],e=a[1];if(d(h,e)){var
c=[0,e,c],a=f;continue}var
b=[0,e,b],a=f;continue}var
i=v(b);return[0,v(c),i]}}function
oj(a){if(a){var
b=a[1],d=b[2],e=b[1],c=oj(a[2]);return[0,[0,e,c[1]],[0,d,c[2]]]}return apR}function
dV(b,a){if(b){if(a){var
c=a[1],d=b[1];return[0,[0,d,c],dV(b[2],a[2])]}}else
if(!a)return 0;return S(apS)}function
C9(d,c,a){if(c){if(a){var
e=a[1],f=c[1],g=a[2],h=c[2];return 0<b(d,f,e)?[0,e,C9(d,c,g)]:[0,f,C9(d,h,a)]}return c}return a}function
u6(d,c){var
b=d,a=c;for(;;){if(0===b)return a;if(a){var
b=b-1|0,a=a[2];continue}throw[0,h,apT]}}function
e8(a,c){function
k(j,f){if(2===j){if(f){var
r=f[2];if(r){var
k=r[1],l=f[1];return 0<b(a,l,k)?[0,k,[0,l,0]]:[0,l,[0,k,0]]}}}else
if(3===j)if(f){var
n=f[2];if(n){var
s=n[2];if(s){var
c=s[1],d=n[1],e=f[1];return 0<b(a,e,d)?0<b(a,e,c)?0<b(a,d,c)?[0,c,[0,d,[0,e,0]]]:[0,d,[0,c,[0,e,0]]]:[0,d,[0,e,[0,c,0]]]:0<b(a,d,c)?0<b(a,e,c)?[0,c,[0,e,[0,d,0]]]:[0,e,[0,c,[0,d,0]]]:[0,e,[0,d,[0,c,0]]]}}}var
m=j>>1,v=u6(m,f),w=q(m,f),i=w,h=q(j-m|0,v),g=0;for(;;){if(i){if(h){var
o=h[1],p=i[1],t=h[2],u=i[2];if(0<b(a,p,o)){var
i=u,g=[0,p,g];continue}var
h=t,g=[0,o,g];continue}return cG(i,g)}return cG(h,g)}}function
q(j,f){if(2===j){if(f){var
r=f[2];if(r){var
l=r[1],m=f[1];return 0<b(a,m,l)?[0,m,[0,l,0]]:[0,l,[0,m,0]]}}}else
if(3===j)if(f){var
o=f[2];if(o){var
s=o[2];if(s){var
c=s[1],d=o[1],e=f[1];return 0<b(a,e,d)?0<b(a,d,c)?[0,e,[0,d,[0,c,0]]]:0<b(a,e,c)?[0,e,[0,c,[0,d,0]]]:[0,c,[0,e,[0,d,0]]]:0<b(a,e,c)?[0,d,[0,e,[0,c,0]]]:0<b(a,d,c)?[0,d,[0,c,[0,e,0]]]:[0,c,[0,d,[0,e,0]]]}}}var
n=j>>1,v=u6(n,f),w=k(n,f),i=w,h=k(j-n|0,v),g=0;for(;;){if(i){if(h){var
p=h[1],q=i[1],t=h[2],u=i[2];if(0<b(a,q,p)){var
h=t,g=[0,p,g];continue}var
i=u,g=[0,q,g];continue}return cG(i,g)}return cG(h,g)}}var
d=w(c);return 2<=d?k(d,c):c}function
u7(c,a){function
m(j,g){if(2===j){if(g){var
u=g[2];if(u){var
m=u[1],k=g[1],v=b(c,k,m);return 0===v?[0,k,0]:0<=v?[0,m,[0,k,0]]:[0,k,[0,m,0]]}}}else
if(3===j)if(g){var
o=g[2];if(o){var
w=o[2];if(w){var
d=w[1],a=o[1],e=g[1],x=b(c,e,a);if(0===x){var
y=b(c,a,d);return 0===y?[0,a,0]:0<=y?[0,d,[0,a,0]]:[0,a,[0,d,0]]}if(0<=x){var
z=b(c,e,d);if(0===z)return[0,a,[0,e,0]];if(0<=z){var
A=b(c,a,d);return 0===A?[0,a,[0,e,0]]:0<=A?[0,d,[0,a,[0,e,0]]]:[0,a,[0,d,[0,e,0]]]}return[0,a,[0,e,[0,d,0]]]}var
B=b(c,a,d);if(0===B)return[0,e,[0,a,0]];if(0<=B){var
C=b(c,e,d);return 0===C?[0,e,[0,a,0]]:0<=C?[0,d,[0,e,[0,a,0]]]:[0,e,[0,d,[0,a,0]]]}return[0,e,[0,a,[0,d,0]]]}}}var
n=j>>1,D=u6(n,g),E=t(n,g),i=E,h=t(j-n|0,D),f=0;for(;;){if(i){if(h){var
p=h[2],q=h[1],r=i[2],l=i[1],s=b(c,l,q);if(0===s){var
i=r,h=p,f=[0,l,f];continue}if(0<s){var
i=r,f=[0,l,f];continue}var
h=p,f=[0,q,f];continue}return cG(i,f)}return cG(h,f)}}function
t(j,g){if(2===j){if(g){var
u=g[2];if(u){var
n=u[1],k=g[1],v=b(c,k,n);return 0===v?[0,k,0]:0<v?[0,k,[0,n,0]]:[0,n,[0,k,0]]}}}else
if(3===j)if(g){var
p=g[2];if(p){var
w=p[2];if(w){var
d=w[1],a=p[1],e=g[1],x=b(c,e,a);if(0===x){var
y=b(c,a,d);return 0===y?[0,a,0]:0<y?[0,a,[0,d,0]]:[0,d,[0,a,0]]}if(0<x){var
z=b(c,a,d);if(0===z)return[0,e,[0,a,0]];if(0<z)return[0,e,[0,a,[0,d,0]]];var
A=b(c,e,d);return 0===A?[0,e,[0,a,0]]:0<A?[0,e,[0,d,[0,a,0]]]:[0,d,[0,e,[0,a,0]]]}var
B=b(c,e,d);if(0===B)return[0,a,[0,e,0]];if(0<B)return[0,a,[0,e,[0,d,0]]];var
C=b(c,a,d);return 0===C?[0,a,[0,e,0]]:0<C?[0,a,[0,d,[0,e,0]]]:[0,d,[0,a,[0,e,0]]]}}}var
o=j>>1,D=u6(o,g),E=m(o,g),i=E,h=m(j-o|0,D),f=0;for(;;){if(i){if(h){var
q=h[2],r=h[1],s=i[2],l=i[1],t=b(c,l,r);if(0===t){var
i=s,h=q,f=[0,l,f];continue}if(0<=t){var
h=q,f=[0,r,f];continue}var
i=s,f=[0,l,f];continue}return cG(i,f)}return cG(h,f)}}var
d=w(a);return 2<=d?m(d,a):a}aF(63,[0,w,cQ,ik,il,v,s,cG,fE,fE,m,Oa,g,qW,mv,G,R,aC,aG,apJ,im,g5,Z,N,qX,apP,aY,a8,io,by,by,Oe,dr,mw,g6,Ob,Oc,Od,oj,dV,e8,e8,e8,u7,C9],Nh);function
dG(a){if(0<=a)if(!(K<a))return a;return S(apU)}function
u8(a){if(40<=a){if(92===a)return apV;var
c=kQ<=a?0:1}else
if(32<=a){if(39<=a)return apW;var
c=1}else
if(14<=a)var
c=0;else
switch(a){case
8:return apX;case
9:return apY;case
10:return apZ;case
13:return ap0;default:var
c=0}if(c){var
d=aN(1);ax(d,0,a);return d}var
b=aN(4);ax(b,0,92);ax(b,1,48+(a/b6|0)|0);ax(b,2,48+((a/10|0)%10|0)|0);ax(b,3,48+(a%10|0)|0);return b}function
qY(a){var
b=65<=a?90<a?0:1:0;if(!b){var
c=BX<=a?ai$<a?0:1:0;if(!c){var
d=ah_<=a?aj5<a?1:0:1;if(d)return a}}return a+32|0}function
C_(a){var
b=97<=a?n8<a?0:1:0;if(!b){var
c=AG<=a?z<a?0:1:0;if(!c){var
d=I<=a?gT<a?1:0:1;if(d)return a}}return a+MJ|0}aF(71,[0,dG,u8,qY,C_,function(b,a){return b-a|0}],zH);function
mx(a,c){var
b=aN(a);Cq(b,0,a,c);return b}function
Of(b,f){var
c=aN(b),e=b-1|0,g=0;if(!(e<0)){var
a=g;for(;;){ax(c,a,d(f,a));var
h=a+1|0;if(e!==a){var
a=h;continue}break}}return c}var
u9=aN(0);function
my(a){var
b=r(a),c=aN(b);ib(a,0,c,0,b);return c}function
Og(a){return my(a)}function
Oh(a){return my(a)}function
qZ(c,b,a){if(0<=b)if(0<=a)if(!((r(c)-a|0)<b)){var
d=aN(a);ib(c,b,d,0,a);return d}return S(ap1)}function
jB(c,b,a){return qZ(c,b,a)}function
ap2(b,a,i){var
c=(r(b)+a|0)+i|0,d=aN(c),e=0<=a?[0,0,a]:[0,-a|0,0],f=e[2],g=e[1],h=c5(r(b)-g|0,c-f|0);if(0<h)ib(b,g,d,f,h);return d}function
Oi(c,b,a,d){if(0<=b)if(0<=a)if(!((r(c)-a|0)<b))return Cq(c,b,a,d);return S(ap3)}function
k5(e,c,d,b,a){if(0<=a)if(0<=c)if(!((r(e)-a|0)<c))if(0<=b)if(!((r(d)-a|0)<b))return ib(e,c,d,b,a);return S(ap4)}function
fF(e,c,d,b,a){if(0<=a)if(0<=c)if(!((r(e)-a|0)<c))if(0<=b)if(!((r(d)-a|0)<b))return fA(e,c,d,b,a);return S(ap5)}function
Oj(e,b){var
c=r(b)-1|0,f=0;if(!(c<0)){var
a=f;for(;;){d(e,$(b,a));var
g=a+1|0;if(c!==a){var
a=g;continue}break}}return 0}function
Ok(e,c){var
d=r(c)-1|0,f=0;if(!(d<0)){var
a=f;for(;;){b(e,a,$(c,a));var
g=a+1|0;if(d!==a){var
a=g;continue}break}}return 0}function
ap6(c,b){if(b){var
e=b[1],g=[0,0],f=[0,0],h=b[2];m(function(a){g[1]++;f[1]=f[1]+r(a)|0;return 0},b);var
d=aN(f[1]+jy(r(c),g[1]-1|0)|0);ib(e,0,d,0,r(e));var
a=[0,r(e)];m(function(b){ib(c,0,d,a[1],r(c));a[1]=a[1]+r(c)|0;ib(b,0,d,a[1],r(b));a[1]=a[1]+r(b)|0;return 0},h);return d}return u9}function
ap7(d,c){var
a=r(d),e=r(c),b=aN(a+e|0);ib(d,0,b,0,a);ib(c,0,b,a,e);return b}function
Ol(b){var
a=b-9|0,c=4<a>>>0?23===a?1:0:2===a?0:1;return c?1:0}function
Om(c){var
d=r(c),a=[0,0];for(;;){if(a[1]<d)if(Ol($(c,a[1]))){a[1]++;continue}var
b=[0,d-1|0];for(;;){if(a[1]<=b[1])if(Ol($(c,b[1]))){b[1]+=-1;continue}return a[1]<=b[1]?qZ(c,a[1],(b[1]-a[1]|0)+1|0):u9}}}function
On(e){var
a=[0,0],m=r(e)-1|0,o=0;if(!(m<0)){var
h=o;for(;;){var
f=$(e,h);if(32<=f){var
k=f+ur|0;if(58<k>>>0)if(93<=k)var
i=0,j=0;else
var
j=1;else
if(56<(k-1|0)>>>0)var
i=1,j=0;else
var
j=1;if(j)var
l=1,i=2}else
var
i=11<=f?13===f?1:0:8<=f?1:0;switch(i){case
0:var
l=4;break;case
1:var
l=2;break}a[1]=a[1]+l|0;var
s=h+1|0;if(m!==h){var
h=s;continue}break}}if(a[1]===r(e))return my(e);var
b=aN(a[1]);a[1]=0;var
n=r(e)-1|0,p=0;if(!(n<0)){var
g=p;for(;;){var
c=$(e,g);if(35<=c)var
d=92===c?1:kQ<=c?0:2;else
if(32<=c)var
d=34<=c?1:2;else
if(14<=c)var
d=0;else
switch(c){case
8:ax(b,a[1],92);a[1]++;ax(b,a[1],98);var
d=3;break;case
9:ax(b,a[1],92);a[1]++;ax(b,a[1],t_);var
d=3;break;case
10:ax(b,a[1],92);a[1]++;ax(b,a[1],hF);var
d=3;break;case
13:ax(b,a[1],92);a[1]++;ax(b,a[1],zF);var
d=3;break;default:var
d=0}switch(d){case
0:ax(b,a[1],92);a[1]++;ax(b,a[1],48+(c/b6|0)|0);a[1]++;ax(b,a[1],48+((c/10|0)%10|0)|0);a[1]++;ax(b,a[1],48+(c%10|0)|0);break;case
1:ax(b,a[1],92);a[1]++;ax(b,a[1],c);break;case
2:ax(b,a[1],c);break}a[1]++;var
q=g+1|0;if(n!==g){var
g=q;continue}break}}return b}function
u_(g,b){var
c=r(b);if(0===c)return b;var
e=aN(c),f=c-1|0,h=0;if(!(f<0)){var
a=h;for(;;){ax(e,a,d(g,$(b,a)));var
i=a+1|0;if(f!==a){var
a=i;continue}break}}return e}function
Oo(g,c){var
d=r(c);if(0===d)return c;var
e=aN(d),f=d-1|0,h=0;if(!(f<0)){var
a=h;for(;;){ax(e,a,b(g,a,$(c,a)));var
i=a+1|0;if(f!==a){var
a=i;continue}break}}return e}function
Op(a){return u_(C_,a)}function
Oq(a){return u_(qY,a)}function
Or(c,a){if(0===r(a))return a;var
b=my(a);ax(b,0,d(c,$(a,0)));return b}function
Os(a){return Or(C_,a)}function
Ot(a){return Or(qY,a)}function
C$(e,d,c,b){var
a=c;for(;;){if(d<=a)throw l;if($(e,a)===b)return a;var
a=a+1|0;continue}}function
Ou(a,b){return C$(a,r(a),0,b)}function
Ov(b,a,d){var
c=r(b);if(0<=a)if(!(c<a))return C$(b,c,a,d);return S(ap8)}function
Da(d,c,b){var
a=c;for(;;){if(0<=a){if($(d,a)===b)return a;var
a=a-1|0;continue}throw l}}function
Ow(a,b){return Da(a,r(a)-1|0,b)}function
Ox(b,a,c){if(-1<=a)if(!(r(b)<=a))return Da(b,a,c);return S(ap9)}function
Db(b,a,d){var
c=r(b);if(0<=a)if(!(c<a))try{C$(b,c,a,d);var
e=1;return e}catch(a){a=j(a);if(a===l)return 0;throw a}return S(ap_)}function
Oy(b,a){return Db(b,0,a)}function
Oz(b,a,c){if(0<=a)if(!(r(b)<=a))try{Da(b,a,c);var
d=1;return d}catch(a){a=j(a);if(a===l)return 0;throw a}return S(ap$)}var
aqa=cp;function
aqb(a){return a}aF(80,[0,mx,Of,u9,my,Oh,Og,qZ,jB,ap2,Oi,k5,fF,ap6,ap7,Oj,Ok,u_,Oo,Om,On,Ou,Ow,Ov,Ox,Oy,Db,Oz,Op,Oq,Os,Ot,aqa,function(a){return a},aqb],Ly);function
c6(b,a){return mx(b,a)}function
aqc(b,a){return Of(b,a)}function
aqd(a){return my(a)}function
al(c,b,a){return qZ(c,b,a)}function
dH(c,b){if(b){var
e=b[1],g=[0,0],f=[0,0],h=b[2];m(function(a){g[1]++;f[1]=f[1]+r(a)|0;return 0},b);var
d=aN(f[1]+jy(r(c),g[1]-1|0)|0);fA(e,0,d,0,r(e));var
a=[0,r(e)];m(function(b){fA(c,0,d,a[1],r(c));a[1]=a[1]+r(c)|0;fA(b,0,d,a[1],r(b));a[1]=a[1]+r(b)|0;return 0},h);return d}return aqe}function
aqf(b,a){return Oj(b,a)}function
aqg(b,a){return Ok(b,a)}function
aqh(b,a){return u_(b,a)}function
aqi(b,a){return Oo(b,a)}function
OA(b){var
a=b-9|0,c=4<a>>>0?23===a?1:0:2===a?0:1;return c?1:0}function
aqj(a){if(A(a,aqk))return a;if(!OA($(a,0)))if(!OA($(a,r(a)-1|0)))return a;return Om(a)}function
u$(b){var
c=0;for(;;){if(r(b)<=c)var
g=0;else{var
a=$(b,c);if(32<=a){var
e=a+ur|0;if(58<e>>>0)if(93<=e)var
f=0,d=0;else
var
d=1;else
if(56<(e-1|0)>>>0)var
f=1,d=0;else
var
d=1;if(d){var
c=c+1|0;continue}}else
var
f=11<=a?13===a?1:0:8<=a?1:0;var
g=f?1:1}return g?On(b):b}}function
OB(b,a){return Ou(b,a)}function
OC(b,a){return Ow(b,a)}function
Dc(c,b,a){return Ov(c,b,a)}function
aql(c,b,a){return Ox(c,b,a)}function
OD(b,a){return Oy(b,a)}function
aqm(c,b,a){return Db(c,b,a)}function
aqn(c,b,a){return Oz(c,b,a)}function
aqo(a){return Op(a)}function
va(a){return Oq(a)}function
OE(a){return Os(a)}function
k6(a){return Ot(a)}var
q0=Q;aF(83,[0,c6,aqc,aqd,al,Oi,fF,dH,aqf,aqg,aqh,aqi,aqj,u$,OB,OC,Dc,aql,OD,aqm,aqn,aqo,va,OE,k6,q0],kU);var
OF=aoz(0),Dd=OF[2],gl=aoA(0)[1],De=aow(0),Df=aox(0),Dg=aov(0),aqp=OF[1],vb=0,ok=32,ol=hV,q1=qF,aqq=[0,0];function
aqr(b,a){return 0}var
aqs=-1,aqt=-2,aqu=-3,aqv=-4,aqw=-5,aqx=-6,aqy=-7,aqz=-8,aqA=-9,aqB=Aa,aqC=alE,aqD=aj3,aqE=alA,aqF=-14,aqG=-15,aqH=akU,aqI=-17,aqJ=-18,aqK=-19,aqL=-20,aqM=-21,aqO=O([I,aqN,0]);aF(86,[0,Dd,aqp,aqq,gl,De,Df,Dg,ok,vb,q1,ol,aqr,aqs,aqt,aqu,aqv,aqw,aqx,aqy,aqz,aqA,aqB,aqC,aqD,aqE,aqF,aqG,aqH,aqI,aqJ,aqK,aqL,aqM,aqO,function(a){return a?0:0},aqP],BI);function
OG(c,b,a,e,d){if(0<=b)if(0<=a)if(!((r(c)-a|0)<b))return aop(c,b,a,e,d);return S(aqQ)}var
aqR=20;function
OH(b,a){if(0<=a)if(!((r(b)-20|0)<a))return CE(b,a);return S(aqS)}function
OI(b,a){return 20+OH(b,a)|0}function
Dh(b,a){if(0<=a)if(!((r(b)-20|0)<a))return(r(b)-(20+CE(b,a)|0)|0)<a?S(aqU):Nt(b,a);return S(aqT)}function
Di(b,a){return Dh(b,a)}aF(91,[0,oc,OG,oa,Dh,Di,aqR,OH,OI],MQ);function
aqV(b,a){return n(b,a)[a+1]}function
aqW(c,a,b){return n(c,a)[a+1]=b}function
aqX(a){return CL(a,0)}function
aqY(b,a){var
c=a+OI(b,a)|0;return[0,Dh(b,a),c]}var
aqZ=0,aq0=A9,OJ=z,aq1=agj,OK=I,aq2=249,q2=dk,aq3=uo,aq4=uo,aq5=Av,aq6=amZ,aq7=gT,OL=K,aq8=hI,aq9=1001,aq_=1002;function
Dj(a){if(uU(a))if(c3(a)!==I)if(1<=a.length-1)var
b=a[1],c=1;else
var
c=0;else
var
c=0;else
var
c=0;if(!c)var
b=a;if(uU(b))if(c3(b)===I){if(c3(b[1])===Av)return b;throw l}throw l}function
aq$(a){try{var
b=Dj(a)[1];return b}catch(a){a=j(a);if(a===l)return S(ara);throw a}}function
arb(a){try{var
b=Dj(a)[2];return b}catch(a){a=j(a);if(a===l)return S(arc);throw a}}aF(95,[0,aqV,aqW,aqZ,aq0,OJ,aq1,OK,aq2,q2,aq3,aq4,aq5,aq6,aq7,OL,OL,aq8,aq9,aq_,aq$,arb,function(a){try{var
b=Dj(a);return b}catch(a){a=j(a);if(a===l)return S(ard);throw a}},aqX,aqY],MF);var
are=0,arf=1,arg=-1;function
OM(a){return a+1|0}function
arh(a){return a-1|0}function
ari(a){return ic(a,0)?a:-a|0}var
arj=qr,ark=jc;function
arl(a){return a^-1}function
Dk(a){return n$(arm,a)}aF(Bx,[0,are,arf,arg,OM,arh,ari,ark,arj,arl,Dk,gg],Cf);function
ON(a){return uQ(a,arq)}function
arr(a){return qJ(a,ars)}function
art(a){return ic(a,aru)?a:fB(a)}function
arw(a){return NB(a,arx)}aF(ml,[0,arn,aro,arp,ON,arr,art,OO,arv,arw,function(a){return Nw(ary,a)},Nv],Aq);var
arz=0,arA=1,arB=-1;function
OP(a){return a+1|0}function
arC(a){return a-1|0}function
arD(a){return ic(a,0)?a:-a|0}var
arE=qr,arF=jc;function
arG(a){return a^-1}function
OQ(a){return n$(arH,a)}aF(cm,[0,arz,arA,arB,OP,arC,arD,ok,arF,arE,arG,OQ,gg],z3);function
om(e,d,a){var
c=an_(e,d,a);if(0<=c){a[11]=a[12];var
b=a[12];a[12]=[0,b[1],b[2],b[3],a[4]+a[6]|0]}return c}function
Dl(e,d,a){var
c=aoo(e,d,a);if(0<=c){a[11]=a[12];var
b=a[12];a[12]=[0,b[1],b[2],b[3],a[4]+a[6]|0]}return c}function
OR(p){var
l=aN(n6),a=[0],c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=aN(mm);return[0,function(a){var
g=b(p,l,n6),d=0<g?g:(a[9]=1,0);if(r(a[2])<(a[3]+d|0)){if(((a[3]-a[5]|0)+d|0)<=r(a[2]))k5(a[2],a[5],a[2],0,a[3]-a[5]|0);else{var
j=c5(2*r(a[2])|0,q1);if(j<((a[3]-a[5]|0)+d|0))dq(arI);var
k=aN(j);k5(a[2],a[5],k,0,a[3]-a[5]|0);a[2]=k}var
e=a[5];a[4]=a[4]+e|0;a[6]=a[6]-e|0;a[5]=0;a[7]=a[7]-e|0;a[3]=a[3]-e|0;var
f=a[10],h=f.length-1-1|0,m=0;if(!(h<0)){var
c=m;for(;;){var
i=n(f,c)[c+1];if(0<=i)n(f,c)[c+1]=i-e|0;var
o=c+1|0;if(h!==c){var
c=o;continue}break}}}k5(l,0,a[2],a[3],d);a[3]=a[3]+d|0;return 0},j,i,h,g,f,e,d,c,a,vc,vc]}function
arJ(a){return OR(function(c,b){return N4(a,c,0,b)})}function
Dm(a){var
b=[0],c=1,d=0,e=0,f=0,g=0,h=0,i=r(a),j=Oh(a);return[0,function(a){a[9]=1;return 0},j,i,h,g,f,e,d,c,b,vc,vc]}function
cg(a){return jB(a[2],a[5],a[6]-a[5]|0)}function
on(c,a,b){return jB(c[2],a,b-a|0)}function
OS(c,a,b){return 0<=a?[0,jB(c[2],a,b-a|0)]:0}function
jC(b,a){return u(b[2],a)}function
arK(b,a){return 0<=a?[0,u(b[2],a)]:0}function
en(a,b){return u(a[2],a[5]+b|0)}function
arL(a){return a[11][4]}function
arM(a){return a[12][4]}function
arN(a){return a[11]}function
arO(a){return a[12]}function
arP(b){var
a=b[12];b[12]=[0,a[1],a[2]+1|0,a[4],a[4]];return 0}aF(B$,[0,mz,arJ,Dm,OR,cg,en,arL,arM,arN,arO,arP,function(a){a[6]=0;a[4]=0;var
b=a[12];a[12]=[0,b[1],b[2],b[3],0];a[3]=0;return 0},on,OS,jC,arK,om,Dl],Kz);var
jD=O([I,arQ,0]),oo=O([I,arR,0]),au=[0,X(b6,0),X(b6,0),X(b6,mz),X(b6,mz),b6,0,0,0,mz,mz,0,0,0,0,0,0];function
OT(g){var
a=au[5],b=a*2|0,c=X(b,0),d=X(b,0),e=X(b,mz),f=X(b,mz);gk(au[1],0,c,0,a);au[1]=c;gk(au[2],0,d,0,a);au[2]=d;gk(au[3],0,e,0,a);au[3]=e;gk(au[4],0,f,0,a);au[4]=f;au[5]=b;return 0}function
OU(a){N9(au[2],0,au[5],0);au[8]=0;return 0}var
OV=[0,function(a){return 0}];function
OW(c,k,i,e){var
o=au[11],p=au[14],q=au[6],r=au[15],s=au[7],t=au[8],u=au[16];au[6]=au[14]+1|0;au[7]=k;au[10]=e[12];try{var
b=0,a=0;for(;;)switch(aoq(c,au,b,a)){case
0:var
l=d(i,e);au[9]=e[11];au[10]=e[12];var
b=1,a=l;continue;case
1:throw oo;case
2:OT(0);var
b=2,a=0;continue;case
3:OT(0);var
b=3,a=0;continue;case
4:try{var
g=au[13],m=[0,4,d(n(c[1],g)[g+1],au)],f=m}catch(a){a=j(a);if(a!==oo)throw a;var
f=[0,5,0]}var
b=f[1],a=f[2];continue;default:d(c[14],arS);var
b=5,a=0;continue}}catch(a){a=j(a);var
h=au[7];au[11]=o;au[14]=p;au[6]=q;au[15]=r;au[7]=s;au[8]=t;au[16]=u;if(a[1]===jD)return a[2];OV[1]=function(a){if(uU(a)){var
b=c3(a);return n(c[3],b)[b+1]===h?1:0}return n(c[2],a)[a+1]===h?1:0};throw a}}function
c(a,c){var
b=a[11]-c|0;return n(a[2],b)[b+1]}function
jE(f){var
a=au[12];for(;;){if(0<a){var
b=(au[11]-a|0)+1|0,c=n(au[3],b)[b+1],d=(au[11]-a|0)+1|0;if(J(c,n(au[4],d)[d+1]))return c;var
a=a-1|0;continue}var
e=au[11];return n(au[4],e)[e+1]}}function
k7(b){var
a=au[11];return n(au[4],a)[a+1]}function
op(b){var
a=au[11]-(au[12]-b|0)|0;return n(au[3],a)[a+1]}function
oq(b){var
a=au[11]-(au[12]-b|0)|0;return n(au[4],a)[a+1]}function
arT(a){return jE(0)[4]}function
arU(a){return k7(0)[4]}function
arV(a){return op(a)[4]}function
arW(a){return oq(a)[4]}function
Dn(a){return d(OV[1],a)}function
OX(a){return 0}aF(zL,[0,arT,arU,arV,arW,jE,k7,op,oq,OU,oo,function(a){return aot(a)},jD,OW,c,Dn,OX],MK);function
jF(i){function
p(a){return a?a[4]:0}function
c(b,e,a){var
c=b?b[4]:0,d=a?a[4]:0,f=d<=c?c+1|0:d+1|0;return[0,b,e,a,f]}function
f(b,f,a){var
g=b?b[4]:0,h=a?a[4]:0;if((h+2|0)<g){if(b){var
d=b[3],k=b[2],i=b[1],m=p(d);if(m<=p(i))return c(i,k,c(d,f,a));if(d){var
n=d[2],o=d[1],q=c(d[3],f,a);return c(c(i,k,o),n,q)}return S(arX)}return S(arY)}if((g+2|0)<h){if(a){var
j=a[3],l=a[2],e=a[1],r=p(e);if(r<=p(j))return c(c(b,f,e),l,j);if(e){var
s=e[2],t=e[1],u=c(e[3],l,j);return c(c(b,f,t),s,u)}return S(arZ)}return S(ar0)}var
v=h<=g?g+1|0:h+1|0;return[0,b,f,a,v]}function
a(d,c){if(c){var
g=c[3],e=c[2],h=c[1],j=b(i[1],d,e);return 0===j?c:0<=j?f(h,e,a(d,g)):f(a(d,h),e,g)}return[0,0,d,0,1]}function
g(a){return[0,0,a,0,1]}function
z(b,a){if(a){var
c=a[3],d=a[2];return f(z(b,a[1]),d,c)}return g(b)}function
A(b,a){if(a){var
c=a[2],d=a[1];return f(d,c,A(b,a[3]))}return g(b)}function
e(b,d,a){if(b){if(a){var
g=a[4],h=b[4],i=a[3],j=a[2],k=a[1],l=b[3],m=b[2],n=b[1];return(g+2|0)<h?f(n,m,e(l,d,a)):(h+2|0)<g?f(e(b,d,k),j,i):c(b,d,a)}return A(d,b)}return z(d,a)}function
q(c){var
a=c;for(;;){if(a){var
b=a[1];if(b){var
a=b;continue}return a[2]}throw l}}function
I(c){var
a=c;for(;;){if(a){var
b=a[3],d=a[2];if(b){var
a=b;continue}return d}throw l}}function
t(a){if(a){var
b=a[1];if(b){var
c=a[3],d=a[2];return f(t(b),d,c)}return a[3]}return S(ar1)}function
k(b,a){if(b){if(a){var
c=t(a);return e(b,q(a),c)}return b}return a}function
j(c,a){if(a){var
d=a[3],f=a[2],g=a[1],l=b(i[1],c,f);if(0===l)return[0,g,1,d];if(0<=l){var
h=j(c,d),m=h[3],n=h[2];return[0,e(g,f,h[1]),n,m]}var
k=j(c,g),o=k[2],p=k[1];return[0,p,o,e(k[3],f,d)]}return ar2}var
B=0;function
J(a){return a?0:1}function
K(f,e){var
a=e;for(;;){if(a){var
g=a[3],h=a[1],c=b(i[1],f,a[2]),d=0===c?1:0;if(d)return d;var
j=0<=c?g:h,a=j;continue}return 0}}function
u(e,d){if(d){var
a=d[3],g=d[2],c=d[1],h=b(i[1],e,g);if(0===h){if(c){if(a){var
j=t(a);return f(c,q(a),j)}return c}return a}return 0<=h?f(c,g,u(e,a)):f(u(e,c),g,a)}return 0}function
m(c,b){if(c){if(b){var
g=b[4],d=b[2],h=c[4],f=c[2],l=b[3],n=b[1],o=c[3],p=c[1];if(g<=h){if(1===g)return a(d,c);var
i=j(f,b),q=i[1],r=m(o,i[3]);return e(m(p,q),f,r)}if(1===h)return a(f,b);var
k=j(d,c),s=k[1],t=m(k[3],l);return e(m(s,n),d,t)}return c}return b}function
n(a,c){if(a){if(c){var
d=a[3],f=a[2],g=a[1],b=j(f,c),h=b[1];if(0===b[2]){var
i=n(d,b[3]);return k(n(g,h),i)}var
l=n(d,b[3]);return e(n(g,h),f,l)}return 0}return 0}function
o(a,c){if(a){if(c){var
d=a[3],f=a[2],g=a[1],b=j(f,c),h=b[1];if(0===b[2]){var
i=o(d,b[3]);return e(o(g,h),f,i)}var
l=o(d,b[3]);return k(o(g,h),l)}return a}return 0}function
r(d,c){var
a=d,b=c;for(;;){if(a){var
e=[0,a[2],a[3],b],a=a[1],b=e;continue}return b}}function
C(l,k){var
m=r(k,0),c=r(l,0),a=m;for(;;){if(c){if(a){var
e=a[3],f=a[2],g=c[3],h=c[2],d=b(i[1],c[1],a[1]);if(0===d){var
j=r(f,e),c=r(h,g),a=j;continue}return d}return 1}return a?-1:0}}function
L(b,a){return 0===C(b,a)?1:0}function
s(o,n){var
a=o,c=n;for(;;){if(a){if(c){var
g=c[3],h=c[1],d=a[3],e=a[2],f=a[1],j=b(i[1],e,c[2]);if(0===j){var
k=s(f,h);if(k){var
a=d,c=g;continue}return k}if(0<=j){var
l=s([0,0,e,d,0],g);if(l){var
a=f;continue}return l}var
m=s([0,f,e,0,0],h);if(m){var
a=d;continue}return m}return 0}return 1}}function
D(b,c){var
a=c;for(;;){if(a){var
e=a[3],f=a[2];D(b,a[1]);d(b,f);var
a=e;continue}return 0}}function
E(d,f,e){var
a=f,c=e;for(;;){if(a){var
g=a[3],h=a[2],i=b(d,h,E(d,a[1],c)),a=g,c=i;continue}return c}}function
F(b,g){var
a=g;for(;;){if(a){var
h=a[3],i=a[1],c=d(b,a[2]);if(c){var
e=F(b,i);if(e){var
a=h;continue}var
f=e}else
var
f=c;return f}return 1}}function
G(b,g){var
a=g;for(;;){if(a){var
h=a[3],i=a[1],c=d(b,a[2]);if(c)var
e=c;else{var
f=G(b,i);if(!f){var
a=h;continue}var
e=f}return e}return 0}}function
v(b,a){if(a){var
c=a[2],h=a[3],f=v(b,a[1]),i=d(b,c),g=v(b,h);return i?e(f,c,g):k(f,g)}return 0}function
x(b,a){if(a){var
c=a[2],m=a[3],f=x(b,a[1]),g=f[2],h=f[1],n=d(b,c),i=x(b,m),j=i[2],l=i[1];if(n){var
o=k(g,j);return[0,e(h,c,l),o]}var
p=e(g,c,j);return[0,k(h,l),p]}return ar3}function
y(a){if(a){var
b=a[1],c=y(a[3]);return(y(b)+1|0)+c|0}return 0}function
H(d,c){var
b=d,a=c;for(;;){if(a){var
e=a[2],f=a[1],b=[0,e,H(b,a[3])],a=f;continue}return b}}function
M(a){return H(0,a)}function
N(f,e){var
a=e;for(;;){if(a){var
c=a[2],g=a[3],h=a[1],d=b(i[1],f,c);if(0===d)return c;var
j=0<=d?g:h,a=j;continue}throw l}}return[0,B,J,K,a,g,u,m,n,o,C,L,s,D,E,F,G,v,x,y,M,q,I,q,j,N,function(d){if(d){var
j=d[2],b=d[1];if(j){var
k=j[2],e=j[1];if(k){var
l=k[2],m=k[1];if(l){var
n=l[2],o=l[1];if(n){if(n[2]){var
p=u7(i[1],d),f=function(b,a){if(!(3<b>>>0))switch(b){case
0:return[0,0,a];case
1:if(a)return[0,[0,0,a[1],0,1],a[2]];break;case
2:if(a){var
e=a[2];if(e)return[0,[0,[0,0,a[1],0,1],e[1],0,2],e[2]]}break;default:if(a){var
g=a[2];if(g){var
i=g[2];if(i)return[0,[0,[0,0,a[1],0,1],g[1],[0,0,i[1],0,1],2],i[2]]}}}var
j=b/2|0,k=f(j,a),d=k[2],m=k[1];if(d){var
n=d[1],l=f((b-j|0)-1|0,d[2]),o=l[2];return[0,c(m,n,l[1]),o]}throw[0,h,ar4]};return f(w(p),p)[1]}var
q=n[1];return a(q,a(o,a(m,a(e,g(b)))))}return a(o,a(m,a(e,g(b))))}return a(m,a(e,g(b)))}return a(e,g(b))}return g(b)}return B}]}aF(AD,[0,jF],Cb);function
g7(i){function
g(a){return a?a[5]:0}function
a(b,f,e,a){var
c=g(b),d=g(a),h=d<=c?c+1|0:d+1|0;return[0,b,f,e,a,h]}function
o(b,a){return[0,0,b,a,0,1]}function
c(c,h,f,b){var
i=c?c[5]:0,j=b?b[5]:0;if((j+2|0)<i){if(c){var
d=c[4],m=c[3],n=c[2],k=c[1],q=g(d);if(q<=g(k))return a(k,n,m,a(d,h,f,b));if(d){var
r=d[3],s=d[2],t=d[1],u=a(d[4],h,f,b);return a(a(k,n,m,t),s,r,u)}return S(ar5)}return S(ar6)}if((i+2|0)<j){if(b){var
l=b[4],o=b[3],p=b[2],e=b[1],v=g(e);if(v<=g(l))return a(a(c,h,f,e),p,o,l);if(e){var
w=e[3],x=e[2],y=e[1],z=a(e[4],p,o,l);return a(a(c,h,f,y),x,w,z)}return S(ar7)}return S(ar8)}var
A=j<=i?i+1|0:j+1|0;return[0,c,h,f,b,A]}var
G=0;function
H(a){return a?0:1}function
q(d,e,a){if(a){var
f=a[4],j=a[3],g=a[2],h=a[1],l=a[5],k=b(i[1],d,g);return 0===k?[0,h,d,e,f,l]:0<=k?c(h,g,j,q(d,e,f)):c(q(d,e,h),g,j,f)}return[0,0,d,e,0,1]}function
I(e,d){var
a=d;for(;;){if(a){var
f=a[4],g=a[3],h=a[1],c=b(i[1],e,a[2]);if(0===c)return g;var
j=0<=c?f:h,a=j;continue}throw l}}function
J(f,e){var
a=e;for(;;){if(a){var
g=a[4],h=a[1],c=b(i[1],f,a[2]),d=0===c?1:0;if(d)return d;var
j=0<=c?g:h,a=j;continue}return 0}}function
m(c){var
a=c;for(;;){if(a){var
b=a[1];if(b){var
a=b;continue}return[0,a[2],a[3]]}throw l}}function
K(c){var
a=c;for(;;){if(a){var
b=a[4],d=a[3],e=a[2];if(b){var
a=b;continue}return[0,e,d]}throw l}}function
r(a){if(a){var
b=a[1];if(b){var
d=a[4],e=a[3],f=a[2];return c(r(b),f,e,d)}return a[4]}return S(ar9)}function
s(f,d){if(d){var
a=d[4],j=d[3],g=d[2],e=d[1],k=b(i[1],f,g);if(0===k){if(e){if(a){var
h=m(a),l=h[2],n=h[1];return c(e,n,l,r(a))}return e}return a}return 0<=k?c(e,g,j,s(f,a)):c(s(f,e),g,j,a)}return 0}function
y(c,d){var
a=d;for(;;){if(a){var
e=a[4],f=a[3],g=a[2];y(c,a[1]);b(c,g,f);var
a=e;continue}return 0}}function
t(b,a){if(a){var
c=a[5],e=a[4],f=a[3],g=a[2],h=t(b,a[1]),i=d(b,f);return[0,h,g,i,t(b,e),c]}return 0}function
u(c,a){if(a){var
d=a[2],e=a[5],f=a[4],g=a[3],h=u(c,a[1]),i=b(c,d,g);return[0,h,d,i,u(c,f),e]}return 0}function
z(c,e,d){var
a=e,b=d;for(;;){if(a){var
f=a[4],g=a[3],h=a[2],i=p(c,h,g,z(c,a[1],b)),a=f,b=i;continue}return b}}function
A(c,g){var
a=g;for(;;){if(a){var
h=a[4],i=a[1],d=b(c,a[2],a[3]);if(d){var
e=A(c,i);if(e){var
a=h;continue}var
f=e}else
var
f=d;return f}return 1}}function
B(c,g){var
a=g;for(;;){if(a){var
h=a[4],i=a[1],d=b(c,a[2],a[3]);if(d)var
e=d;else{var
f=B(c,i);if(!f){var
a=h;continue}var
e=f}return e}return 0}}function
C(d,b,a){if(a){var
e=a[4],f=a[3],g=a[2];return c(C(d,b,a[1]),g,f,e)}return o(d,b)}function
D(d,b,a){if(a){var
e=a[3],f=a[2],g=a[1];return c(g,f,e,D(d,b,a[4]))}return o(d,b)}function
e(d,g,f,b){if(d){if(b){var
h=b[5],i=d[5],j=b[4],k=b[3],l=b[2],m=b[1],n=d[4],o=d[3],p=d[2],q=d[1];return(h+2|0)<i?c(q,p,o,e(n,g,f,b)):(i+2|0)<h?c(e(d,g,f,m),l,k,j):a(d,g,f,b)}return D(g,f,d)}return C(g,f,b)}function
n(b,a){if(b){if(a){var
c=m(a),d=c[2],f=c[1];return e(b,f,d,r(a))}return b}return a}function
E(c,d,b,a){return b?e(c,d,b[1],a):n(c,a)}function
j(c,a){if(a){var
d=a[4],f=a[3],g=a[2],h=a[1],m=b(i[1],c,g);if(0===m)return[0,h,[0,f],d];if(0<=m){var
k=j(c,d),n=k[3],o=k[2];return[0,e(h,g,f,k[1]),o,n]}var
l=j(c,h),p=l[2],q=l[1];return[0,q,p,e(l[3],g,f,d)]}return ar_}function
k(c,b,a){if(b){var
d=b[2],l=b[5],m=b[4],n=b[3],o=b[1];if(g(a)<=l){var
e=j(d,a),q=e[2],r=e[1],s=k(c,m,e[3]),t=p(c,d,[0,n],q);return E(k(c,o,r),d,t,s)}}else
if(!a)return 0;if(a){var
f=a[2],u=a[4],v=a[3],w=a[1],i=j(f,b),x=i[2],y=i[1],z=k(c,i[3],u),A=p(c,f,x,[0,v]);return E(k(c,y,w),f,A,z)}throw[0,h,ar$]}function
v(c,a){if(a){var
d=a[3],f=a[2],i=a[4],g=v(c,a[1]),j=b(c,f,d),h=v(c,i);return j?e(g,f,d,h):n(g,h)}return 0}function
w(c,a){if(a){var
d=a[3],f=a[2],m=a[4],g=w(c,a[1]),h=g[2],i=g[1],o=b(c,f,d),j=w(c,m),k=j[2],l=j[1];if(o){var
p=n(h,k);return[0,e(i,f,d,l),p]}var
q=e(h,f,d,k);return[0,n(i,l),q]}return asa}function
f(d,c){var
a=d,b=c;for(;;){if(a){var
e=[0,a[2],a[3],a[4],b],a=a[1],b=e;continue}return b}}function
L(j,h,g){var
r=f(g,0),c=f(h,0),a=r;for(;;){if(c){if(a){var
k=a[4],l=a[3],m=a[2],n=c[4],o=c[3],p=c[2],d=b(i[1],c[1],a[1]);if(0===d){var
e=b(j,p,m);if(0===e){var
q=f(l,k),c=f(o,n),a=q;continue}return e}return d}return 1}return a?-1:0}}function
M(k,j,h){var
s=f(h,0),c=f(j,0),a=s;for(;;){if(c){if(a){var
l=a[4],m=a[3],n=a[2],o=c[4],p=c[3],q=c[2],d=0===b(i[1],c[1],a[1])?1:0;if(d){var
e=b(k,q,n);if(e){var
r=f(m,l),c=f(p,o),a=r;continue}var
g=e}else
var
g=d;return g}return 0}return a?0:1}}function
x(a){if(a){var
b=a[1],c=x(a[4]);return(x(b)+1|0)+c|0}return 0}function
F(d,c){var
b=d,a=c;for(;;){if(a){var
e=a[3],f=a[2],g=a[1],b=[0,[0,f,e],F(b,a[4])],a=g;continue}return b}}return[0,G,H,J,q,o,s,k,L,M,y,z,A,B,v,w,x,function(a){return F(0,a)},m,K,m,j,I,t,u]}aF(MN,[0,g7],AO);var
OY=O([I,asb,0]);function
OZ(a){throw OY}function
gm(a){var
c=a[1];a[1]=OZ;try{var
b=d(c,0);a[1]=b;NK(a,dk);return b}catch(b){b=j(b);a[1]=function(a){throw b};throw b}}function
O0(a){var
c=a[1];a[1]=OZ;var
b=d(c,0);a[1]=b;NK(a,dk);return b}function
asc(a){var
b=c3(a);return b===dk?a[1]:b!==z?a:gm(a)}aF(acX,[0,OY,gm,O0,asc,function(a){var
b=c3(a);return b===dk?a[1]:b!==z?a:O0(a)}],A6);function
cH(a){var
b=1<=a?a:1,c=qF<b?q1:b,d=aN(c);return[0,d,0,c,d]}function
cA(a){return jB(a[1],0,a[2])}function
asd(a){return qZ(a[1],0,a[2])}function
O1(c,b,a){if(0<=b)if(0<=a)if(!((c[2]-a|0)<b))return jB(c[1],b,a);return S(ase)}function
asf(e,c,d,b,a){if(0<=a)if(0<=c)if(!((e[2]-a|0)<c))if(0<=b)if(!((r(d)-a|0)<b))return k5(e[1],c,d,b,a);return S(asg)}function
ash(b,a){if(0<=a)if(!(b[2]<=a))return $(b[1],a);return S(asi)}function
asj(a){return a[2]}function
vd(a){a[2]=0;return 0}function
Do(a){a[2]=0;a[1]=a[4];a[3]=r(a[1]);return 0}function
ve(a,c){var
b=[0,a[3]];for(;;){if(b[1]<(a[2]+c|0)){b[1]=2*b[1]|0;continue}if(qF<b[1])if((a[2]+c|0)<=qF)b[1]=q1;else
dq(ask);var
d=aN(b[1]);k5(a[1],0,d,0,a[2]);a[1]=d;a[3]=b[1];return 0}}function
as(a,c){var
b=a[2];if(a[3]<=b)ve(a,1);ax(a[1],b,c);a[2]=b+1|0;return 0}function
vf(a,d,c,b){var
e=c<0?1:0;if(e)var
f=e;else
var
h=b<0?1:0,f=h||(r(d)<(c+b|0)?1:0);if(f)S(asl);var
g=a[2]+b|0;if(a[3]<g)ve(a,b);fF(d,c,a[1],a[2],b);a[2]=g;return 0}function
O2(d,c,b,a){return vf(d,c,b,a)}function
an(a,c){var
b=r(c),d=a[2]+b|0;if(a[3]<d)ve(a,b);fF(c,0,a[1],a[2],b);a[2]=d;return 0}function
asm(b,a){return an(b,a)}function
asn(b,a){return O2(b,a[1],0,a[2])}function
aso(a,c,b){var
d=b<0?1:0,e=d||(qF<b?1:0);if(e)S(asp);if(a[3]<(a[2]+b|0))ve(a,b);C0(c,a[1],a[2],b);a[2]=a[2]+b|0;return 0}function
asq(b,a){return N3(b,a[1],0,a[2])}aF(ah4,[0,cH,cA,asd,O1,asf,ash,asj,vd,Do,as,an,asm,vf,O2,function(j,A,c){var
w=r(c),e=32,a=0;for(;;){if(a<w){var
g=u(c,a);if(36===g){if(92===e){as(j,g);var
e=32,a=a+1|0;continue}var
i=a+1|0;if(w<=i)throw l;var
n=u(c,i);if(40===n)var
q=0;else
if(dP===n)var
q=0;else{var
s=r(c),m=i+1|0;for(;;){if(s<=m)var
o=s;else{var
f=u(c,m),C=91<=f?97<=f?dP<=f?0:1:95===f?1:0:58<=f?65<=f?1:0:48<=f?1:0;if(C){var
m=m+1|0;continue}var
o=m}var
p=[0,al(c,i,o-i|0),o],q=1;break}}if(!q){var
t=i+1|0,z=0;if(40===n)var
v=41;else{if(dP!==n)throw[0,h,asr];var
v=gc}var
k=z,b=t,y=r(c);for(;;){if(y<=b)throw l;if(u(c,b)===n){var
k=k+1|0,b=b+1|0;continue}if(u(c,b)!==v){var
b=b+1|0;continue}if(0!==k){var
k=k-1|0,b=b+1|0;continue}var
p=[0,al(c,t,(b-i|0)-1|0),b+1|0];break}}var
B=p[2];an(j,d(A,p[1]));var
e=32,a=B;continue}if(92===e){as(j,92);as(j,g);var
e=32,a=a+1|0;continue}if(92===g){var
e=g,a=a+1|0;continue}as(j,g);var
e=g,a=a+1|0;continue}var
x=92===e?1:0;return x?as(j,e):x}},asn,aso,asq],K2);function
Dp(a){return mx(32,0)}function
Dq(b,a){var
c=a>>>3|0;return ig(b,c,gj(u(b,c)|1<<(a&7)))}function
O3(a){return Og(a)}function
Dr(c){var
b=Dp(0),a=0;for(;;){ig(b,a,gj(u(c,a)^K));var
d=a+1|0;if(31!==a){var
a=d;continue}return b}}function
ip(b,a){return 0!==(u(b,a>>>3|0)&1<<(a&7))?1:0}function
mA(a){return a?[0,1,a[1]]:0}function
O4(a,b){if(typeof
a==="number")switch(a){case
0:return[0,[0,b]];case
1:return[0,[1,b]];case
2:return[0,[9,b]];case
3:return[0,[19,b]];default:return[0,[22,b]]}else
switch(a[0]){case
0:return[0,[2,mA(a[1]),b]];case
1:return[0,[3,mA(a[1]),b]];case
2:var
d=a[1];return[0,[4,d,mA(a[2]),0,b]];case
3:var
e=a[1];return[0,[5,e,mA(a[2]),0,b]];case
4:var
f=a[1];return[0,[6,f,mA(a[2]),0,b]];case
5:var
g=a[1];return[0,[7,g,mA(a[2]),0,b]];case
6:var
c=a[2],h=a[1],i=c?[0,c[1]]:0;return[0,[8,0,mA(h),i,b]];case
7:return[0,[13,a[1],a[2],b]];case
8:return[0,[14,a[1],a[2],b]];case
9:return[0,[20,a[1],a[2],b]];default:return[0,[21,a[1],b]]}}var
Ds=6;function
Dt(a){return[0,0,aN(a)]}function
O5(a,g){var
b=r(a[2]),c=a[1]+g|0,d=b<c?1:0;if(d){var
e=aN(cz(b*2|0,c));k5(a[2],0,e,0,b);a[2]=e;var
f=0}else
var
f=d;return f}function
ah(a,b){O5(a,1);ig(a[2],a[1],b);a[1]=a[1]+1|0;return 0}function
cr(a,c){var
b=r(c);O5(a,b);fF(c,0,a[2],a[1],b);a[1]=a[1]+b|0;return 0}function
Du(a){return jB(a[2],0,a[1])}function
Dv(a){switch(a){case
12:return ml;case
6:case
7:return mb;case
8:case
9:return 88;case
10:case
11:return qz;case
0:case
1:case
2:return b6;default:return uc}}function
O6(a){switch(a){case
15:return 70;case
0:case
1:case
2:return aim;case
3:case
4:case
5:return An;case
6:case
7:case
8:return 69;case
9:case
10:case
11:return AQ;default:return 71}}function
O7(a,b){switch(b){case
0:return ah(a,45);case
1:return 0;default:return ah(a,48)}}function
dW(b,a){return a?ah(b,95):a}function
Dw(c,b){return b?cr(c,a(i+b[1])):0}function
q3(c,b){if(typeof
b==="number")return 0;else{if(0===b[0]){var
d=b[2];O7(c,b[1]);return cr(c,a(i+d))}O7(c,b[1]);return ah(c,42)}}function
Dx(c,b){if(typeof
b==="number")return 0===b?0:cr(c,ass);var
d=b[1];ah(c,46);return cr(c,a(i+d))}function
O8(a,b){switch(b){case
1:case
4:return ah(a,43);case
2:case
5:return ah(a,32);case
7:case
9:case
11:return ah(a,35);default:return 0}}function
Dy(a,f,b,e,d,c){ah(a,37);dW(a,f);O8(a,b);q3(a,e);Dx(a,d);ah(a,c);return ah(a,Dv(b))}function
O9(a,b){switch(b){case
1:case
4:case
7:case
10:case
13:return ah(a,43);case
2:case
5:case
8:case
11:case
14:return ah(a,32);default:return 0}}function
q4(a){if(typeof
a==="number")switch(a){case
0:return ast;case
1:return asu;case
2:return asv;case
3:return asw;case
4:return asx;case
5:return asy;default:return asz}else
switch(a[0]){case
0:return a[1];case
1:return a[1];default:return o(asA,c6(1,a[1]))}}function
O_(a){return 0===a[0]?a[1][2]:a[1][2]}function
O$(b,a){return 37===a?cr(b,asB):ah(b,a)}function
q5(d,b){var
c=r(b)-1|0,e=0;if(!(c<0)){var
a=e;for(;;){O$(d,u(b,a));var
f=a+1|0;if(c!==a){var
a=f;continue}break}}return 0}function
q6(b,c){var
a=c;for(;;)if(typeof
a==="number")return 0;else
switch(a[0]){case
0:var
d=a[1];cr(b,asC);var
a=d;continue;case
1:var
e=a[1];cr(b,asD);var
a=e;continue;case
2:var
f=a[1];cr(b,asE);var
a=f;continue;case
3:var
g=a[1];cr(b,asF);var
a=g;continue;case
4:var
h=a[1];cr(b,asG);var
a=h;continue;case
5:var
i=a[1];cr(b,asH);var
a=i;continue;case
6:var
j=a[1];cr(b,asI);var
a=j;continue;case
7:var
k=a[1];cr(b,asJ);var
a=k;continue;case
8:var
l=a[2],m=a[1];cr(b,asK);q6(b,m);cr(b,asL);var
a=l;continue;case
9:var
n=a[3],o=a[1];cr(b,asM);q6(b,o);cr(b,asN);var
a=n;continue;case
10:var
p=a[1];cr(b,asO);var
a=p;continue;case
11:var
q=a[1];cr(b,asP);var
a=q;continue;case
12:var
r=a[1];cr(b,asQ);var
a=r;continue;case
13:var
s=a[1];cr(b,asR);var
a=s;continue;default:var
t=a[1];cr(b,asS);var
a=t;continue}}function
Pa(a){return a?1+Pa(a[1])|0:0}function
asW(ag){var
a=Dt(16),b=ag,c=0;a:for(;;)if(typeof
b==="number")return Du(a);else
switch(b[0]){case
0:var
u=b[1];ah(a,37);dW(a,c);ah(a,99);var
b=u,c=0;continue;case
1:var
v=b[1];ah(a,37);dW(a,c);ah(a,67);var
b=v,c=0;continue;case
2:var
w=b[2],x=b[1];ah(a,37);dW(a,c);q3(a,x);ah(a,Cm);var
b=w,c=0;continue;case
3:var
y=b[2],z=b[1];ah(a,37);dW(a,c);q3(a,z);ah(a,83);var
b=y,c=0;continue;case
4:var
p=b[1],A=b[4],B=b[3],C=b[2];ah(a,37);dW(a,c);O8(a,p);q3(a,C);Dx(a,B);ah(a,Dv(p));var
b=A,c=0;continue;case
5:var
D=b[4];Dy(a,c,b[1],b[2],b[3],jm);var
b=D,c=0;continue;case
6:var
E=b[4];Dy(a,c,b[1],b[2],b[3],hF);var
b=E,c=0;continue;case
7:var
F=b[4];Dy(a,c,b[1],b[2],b[3],76);var
b=F,c=0;continue;case
8:var
q=b[1],G=b[4],H=b[3],I=b[2];ah(a,37);dW(a,c);O9(a,q);q3(a,I);Dx(a,H);ah(a,O6(q));var
b=G,c=0;continue;case
9:var
J=b[1];ah(a,37);dW(a,c);ah(a,66);var
b=J,c=0;continue;case
10:var
L=b[1];cr(a,asT);var
b=L;continue;case
11:var
M=b[2];q5(a,b[1]);var
b=M;continue;case
12:var
N=b[2];O$(a,b[1]);var
b=N;continue;case
13:var
O=b[3],P=b[2],Q=b[1];ah(a,37);dW(a,c);Dw(a,Q);ah(a,dP);q6(a,P);ah(a,37);ah(a,gc);var
b=O,c=0;continue;case
14:var
R=b[3],S=b[2],T=b[1];ah(a,37);dW(a,c);Dw(a,T);ah(a,40);q6(a,S);ah(a,37);ah(a,41);var
b=R,c=0;continue;case
15:var
U=b[1];ah(a,37);dW(a,c);ah(a,97);var
b=U,c=0;continue;case
16:var
V=b[1];ah(a,37);dW(a,c);ah(a,t_);var
b=V,c=0;continue;case
17:var
W=b[2];q5(a,q4(b[1]));var
b=W;continue;case
18:var
X=b[2],Y=b[1];q5(a,asU);q5(a,O_(Y));var
b=X;continue;case
19:var
Z=b[1];ah(a,37);dW(a,c);ah(a,zF);var
b=Z,c=0;continue;case
20:var
k=b[2],_=b[3],$=b[1];ah(a,37);dW(a,c);Dw(a,$);var
f=function(a,c){var
b=gj(c);return 37===b?(ah(a,37),ah(a,37)):64===b?(ah(a,37),ah(a,64)):ah(a,b)};ah(a,91);var
h=ip(k,0)?(ah(a,94),Dr(k)):k,o=function(b){return function(a){var
f=dG(a+1|0),g=dG(a-1|0),c=ip(b,a);if(c)var
d=ip(b,g),h=d?ip(b,f):d,e=1-h;else
var
e=c;return e}}(h);if(o(93))ah(a,93);var
e=1;b:for(;;){if(e<dR){if(!ip(h,gj(e))){var
e=e+1|0;continue}var
i=gj(e)+uG|0;if(48<i>>>0)var
s=MT<=i?(f(a,K),1):0;else{if(46<(i-1|0)>>>0){var
e=e+1|0;continue}var
s=0}if(!s){var
d=e+1|0;if(!ip(h,gj(d))){f(a,d-1|0);var
e=d+1|0;continue}var
j=gj(d)+uG|0;if(48<j>>>0)var
n=MT<=j?(f(a,gT),f(a,K),1):0;else
if(46<(j-1|0)>>>0){if(!ip(h,gj(d+1|0))){f(a,d-1|0);var
e=d+1|0;continue}var
n=0}else
var
n=0;if(!n){if(!ip(h,gj(d+1|0))){f(a,d-1|0);f(a,d);var
e=d+2|0;continue}var
g=d+2|0,t=d-1|0;for(;;){if(dR!==g)if(ip(h,gj(g))){var
g=g+1|0;continue}f(a,t);f(a,45);f(a,g-1|0);if(g<dR){var
e=g+1|0;continue b}break}}}}if(o(45))ah(a,45);ah(a,93);var
b=_,c=0;continue a}case
21:var
aa=b[2],ab=b[1];ah(a,37);dW(a,c);switch(ab){case
0:var
l=jm;break;case
1:var
l=hF;break;default:var
l=78}ah(a,l);var
b=aa,c=0;continue;case
22:var
ac=b[1];ah(a,37);dW(a,c);q5(a,asV);var
b=ac,c=0;continue;case
23:var
b=O4(b[1],b[2])[1],c=1;continue;default:var
ad=b[3],r=Pa(b[1]),ae=1;if(!(r<1)){var
m=ae;for(;;){ah(a,37);dW(a,c);ah(a,63);var
af=m+1|0;if(r!==m){var
m=af;continue}break}}var
b=ad,c=0;continue}}function
cI(a){if(typeof
a==="number")return 0;else
switch(a[0]){case
0:return[0,cI(a[1])];case
1:return[1,cI(a[1])];case
2:return[2,cI(a[1])];case
3:return[3,cI(a[1])];case
4:return[4,cI(a[1])];case
5:return[5,cI(a[1])];case
6:return[6,cI(a[1])];case
7:return[7,cI(a[1])];case
8:var
b=a[1];return[8,b,cI(a[2])];case
9:var
c=a[2],d=a[1];return[9,c,d,cI(a[3])];case
10:return[10,cI(a[1])];case
11:return[11,cI(a[1])];case
12:return[12,cI(a[1])];case
13:return[13,cI(a[1])];default:return[14,cI(a[1])]}}function
dI(a){if(typeof
a==="number"){var
s=function(a){return 0},t=function(a){return 0},u=function(a){return 0};return[0,function(a){return 0},u,t,s]}else
switch(a[0]){case
0:var
b=dI(a[1]),v=b[4],w=b[3],x=b[2],y=b[1],z=function(a){d(x,0);return 0};return[0,function(a){d(y,0);return 0},z,w,v];case
1:var
c=dI(a[1]),A=c[4],B=c[3],C=c[2],D=c[1],E=function(a){d(C,0);return 0};return[0,function(a){d(D,0);return 0},E,B,A];case
2:var
e=dI(a[1]),F=e[4],G=e[3],H=e[2],I=e[1],J=function(a){d(H,0);return 0};return[0,function(a){d(I,0);return 0},J,G,F];case
3:var
f=dI(a[1]),K=f[4],L=f[3],M=f[2],N=f[1],O=function(a){d(M,0);return 0};return[0,function(a){d(N,0);return 0},O,L,K];case
4:var
g=dI(a[1]),P=g[4],Q=g[3],R=g[2],S=g[1],T=function(a){d(R,0);return 0};return[0,function(a){d(S,0);return 0},T,Q,P];case
5:var
h=dI(a[1]),U=h[4],V=h[3],W=h[2],X=h[1],Y=function(a){d(W,0);return 0};return[0,function(a){d(X,0);return 0},Y,V,U];case
6:var
i=dI(a[1]),Z=i[4],_=i[3],$=i[2],aa=i[1],ab=function(a){d($,0);return 0};return[0,function(a){d(aa,0);return 0},ab,_,Z];case
7:var
j=dI(a[1]),ac=j[4],ad=j[3],ae=j[2],af=j[1],ag=function(a){d(ae,0);return 0};return[0,function(a){d(af,0);return 0},ag,ad,ac];case
8:var
k=dI(a[2]),ah=k[4],ai=k[3],aj=k[2],ak=k[1],al=function(a){d(aj,0);return 0};return[0,function(a){d(ak,0);return 0},al,ai,ah];case
9:var
am=a[2],an=a[1],l=dI(a[3]),ao=l[4],ap=l[3],aq=l[2],ar=l[1],m=dI(cR(cI(an),am)),as=m[4],at=m[3],au=m[2],av=m[1],aw=function(a){d(as,0);d(ao,0);return 0},ax=function(a){d(ap,0);d(at,0);return 0},ay=function(a){d(au,0);d(aq,0);return 0};return[0,function(a){d(ar,0);d(av,0);return 0},ay,ax,aw];case
10:var
n=dI(a[1]),az=n[4],aA=n[3],aB=n[2],aC=n[1],aD=function(a){d(aB,0);return 0};return[0,function(a){d(aC,0);return 0},aD,aA,az];case
11:var
o=dI(a[1]),aE=o[4],aF=o[3],aG=o[2],aH=o[1],aI=function(a){d(aG,0);return 0};return[0,function(a){d(aH,0);return 0},aI,aF,aE];case
12:var
p=dI(a[1]),aJ=p[4],aK=p[3],aL=p[2],aM=p[1],aN=function(a){d(aL,0);return 0};return[0,function(a){d(aM,0);return 0},aN,aK,aJ];case
13:var
q=dI(a[1]),aO=q[4],aP=q[3],aQ=q[2],aR=q[1],aS=function(a){d(aO,0);return 0},aT=function(a){d(aP,0);return 0},aU=function(a){d(aQ,0);return 0};return[0,function(a){d(aR,0);return 0},aU,aT,aS];default:var
r=dI(a[1]),aV=r[4],aW=r[3],aX=r[2],aY=r[1],aZ=function(a){d(aV,0);return 0},a0=function(a){d(aW,0);return 0},a1=function(a){d(aX,0);return 0};return[0,function(a){d(aY,0);return 0},a1,a0,aZ]}}function
cR(c,b){if(typeof
c==="number")if(typeof
b==="number")return 0;else
switch(b[0]){case
10:var
a=0;break;case
11:var
a=1;break;case
12:var
a=2;break;case
13:var
a=3;break;case
14:var
a=4;break;case
8:var
a=5;break;case
9:var
a=6;break;default:throw[0,h,asX]}else
switch(c[0]){case
0:var
u=c[1];if(typeof
b==="number")var
e=1;else
switch(b[0]){case
0:return[0,cR(u,b[1])];case
8:var
a=5,e=0;break;case
9:var
a=6,e=0;break;case
10:var
a=0,e=0;break;case
11:var
a=1,e=0;break;case
12:var
a=2,e=0;break;case
13:var
a=3,e=0;break;case
14:var
a=4,e=0;break;default:var
e=1}if(e)var
a=7;break;case
1:var
v=c[1];if(typeof
b==="number")var
f=1;else
switch(b[0]){case
1:return[1,cR(v,b[1])];case
8:var
a=5,f=0;break;case
9:var
a=6,f=0;break;case
10:var
a=0,f=0;break;case
11:var
a=1,f=0;break;case
12:var
a=2,f=0;break;case
13:var
a=3,f=0;break;case
14:var
a=4,f=0;break;default:var
f=1}if(f)var
a=7;break;case
2:var
w=c[1];if(typeof
b==="number")var
g=1;else
switch(b[0]){case
2:return[2,cR(w,b[1])];case
8:var
a=5,g=0;break;case
9:var
a=6,g=0;break;case
10:var
a=0,g=0;break;case
11:var
a=1,g=0;break;case
12:var
a=2,g=0;break;case
13:var
a=3,g=0;break;case
14:var
a=4,g=0;break;default:var
g=1}if(g)var
a=7;break;case
3:var
x=c[1];if(typeof
b==="number")var
i=1;else
switch(b[0]){case
3:return[3,cR(x,b[1])];case
8:var
a=5,i=0;break;case
9:var
a=6,i=0;break;case
10:var
a=0,i=0;break;case
11:var
a=1,i=0;break;case
12:var
a=2,i=0;break;case
13:var
a=3,i=0;break;case
14:var
a=4,i=0;break;default:var
i=1}if(i)var
a=7;break;case
4:var
y=c[1];if(typeof
b==="number")var
j=1;else
switch(b[0]){case
4:return[4,cR(y,b[1])];case
8:var
a=5,j=0;break;case
9:var
a=6,j=0;break;case
10:var
a=0,j=0;break;case
11:var
a=1,j=0;break;case
12:var
a=2,j=0;break;case
13:var
a=3,j=0;break;case
14:var
a=4,j=0;break;default:var
j=1}if(j)var
a=7;break;case
5:var
z=c[1];if(typeof
b==="number")var
k=1;else
switch(b[0]){case
5:return[5,cR(z,b[1])];case
8:var
a=5,k=0;break;case
9:var
a=6,k=0;break;case
10:var
a=0,k=0;break;case
11:var
a=1,k=0;break;case
12:var
a=2,k=0;break;case
13:var
a=3,k=0;break;case
14:var
a=4,k=0;break;default:var
k=1}if(k)var
a=7;break;case
6:var
A=c[1];if(typeof
b==="number")var
l=1;else
switch(b[0]){case
6:return[6,cR(A,b[1])];case
8:var
a=5,l=0;break;case
9:var
a=6,l=0;break;case
10:var
a=0,l=0;break;case
11:var
a=1,l=0;break;case
12:var
a=2,l=0;break;case
13:var
a=3,l=0;break;case
14:var
a=4,l=0;break;default:var
l=1}if(l)var
a=7;break;case
7:var
B=c[1];if(typeof
b==="number")var
m=1;else
switch(b[0]){case
7:return[7,cR(B,b[1])];case
8:var
a=5,m=0;break;case
9:var
a=6,m=0;break;case
10:var
a=0,m=0;break;case
11:var
a=1,m=0;break;case
12:var
a=2,m=0;break;case
13:var
a=3,m=0;break;case
14:var
a=4,m=0;break;default:var
m=1}if(m)var
a=7;break;case
8:var
C=c[2],D=c[1];if(typeof
b==="number")var
o=1;else
switch(b[0]){case
8:var
E=b[1],F=cR(C,b[2]);return[8,cR(D,E),F];case
10:var
a=0,o=0;break;case
11:var
a=1,o=0;break;case
12:var
a=2,o=0;break;case
13:var
a=3,o=0;break;case
14:var
a=4,o=0;break;default:var
o=1}if(o)throw[0,h,as6];break;case
9:var
G=c[3],H=c[2],I=c[1];if(typeof
b==="number")var
n=1;else
switch(b[0]){case
8:var
a=5,n=0;break;case
9:var
J=b[3],K=b[2],L=b[1],t=dI(cR(cI(H),L)),M=t[4];d(t[2],0);d(M,0);return[9,I,K,cR(G,J)];case
10:var
a=0,n=0;break;case
11:var
a=1,n=0;break;case
12:var
a=2,n=0;break;case
13:var
a=3,n=0;break;case
14:var
a=4,n=0;break;default:var
n=1}if(n)throw[0,h,as7];break;case
10:var
N=c[1];if(typeof
b!=="number"&&10===b[0])return[10,cR(N,b[1])];throw[0,h,as8];case
11:var
O=c[1];if(typeof
b==="number")var
s=1;else
switch(b[0]){case
10:var
a=0,s=0;break;case
11:return[11,cR(O,b[1])];default:var
s=1}if(s)throw[0,h,as9];break;case
12:var
P=c[1];if(typeof
b==="number")var
r=1;else
switch(b[0]){case
10:var
a=0,r=0;break;case
11:var
a=1,r=0;break;case
12:return[12,cR(P,b[1])];default:var
r=1}if(r)throw[0,h,as_];break;case
13:var
Q=c[1];if(typeof
b==="number")var
q=1;else
switch(b[0]){case
10:var
a=0,q=0;break;case
11:var
a=1,q=0;break;case
12:var
a=2,q=0;break;case
13:return[13,cR(Q,b[1])];default:var
q=1}if(q)throw[0,h,as$];break;default:var
R=c[1];if(typeof
b==="number")var
p=1;else
switch(b[0]){case
10:var
a=0,p=0;break;case
11:var
a=1,p=0;break;case
12:var
a=2,p=0;break;case
13:var
a=3,p=0;break;case
14:return[14,cR(R,b[1])];default:var
p=1}if(p)throw[0,h,ata]}switch(a){case
0:throw[0,h,as0];case
1:throw[0,h,as1];case
2:throw[0,h,as2];case
3:throw[0,h,as3];case
4:throw[0,h,as4];case
5:throw[0,h,asY];case
6:throw[0,h,asZ];default:throw[0,h,as5]}}function
mB(b,a){return typeof
b==="number"?a:0===b[0]?a:[2,a]}function
Pb(b,a){return b?[12,Pb(b[1],a)]:a}function
b1(f){var
a=f;for(;;)if(typeof
a==="number")return 0;else
switch(a[0]){case
0:return[0,b1(a[1])];case
1:return[0,b1(a[1])];case
2:var
g=a[1];return mB(g,[1,b1(a[2])]);case
3:var
h=a[1];return mB(h,[1,b1(a[2])]);case
4:var
i=a[3],j=a[2];return mB(j,q7(i,[2,b1(a[4])]));case
5:var
k=a[3],l=a[2];return mB(l,q7(k,[3,b1(a[4])]));case
6:var
m=a[3],n=a[2];return mB(n,q7(m,[4,b1(a[4])]));case
7:var
o=a[3],p=a[2];return mB(p,q7(o,[5,b1(a[4])]));case
8:var
q=a[3],r=a[2];return mB(r,q7(q,[6,b1(a[4])]));case
9:return[7,b1(a[1])];case
10:var
a=a[1];continue;case
11:var
a=a[2];continue;case
12:var
a=a[2];continue;case
13:var
s=a[2];return[8,s,b1(a[3])];case
14:var
e=a[2];return[9,e,e,b1(a[3])];case
15:return[10,b1(a[1])];case
16:return[11,b1(a[1])];case
17:var
a=a[2];continue;case
18:var
d=a[1],t=b1(a[2]),u=0===d[0]?b1(d[1][1]):b1(d[1][1]);return dp(u,t);case
19:return[13,b1(a[1])];case
20:return[1,b1(a[3])];case
21:return[2,b1(a[2])];case
22:return[0,b1(a[1])];case
23:var
b=a[2],c=a[1];if(typeof
c==="number")switch(c){case
0:var
a=b;continue;case
1:var
a=b;continue;case
2:var
a=b;continue;case
3:return[14,b1(b)];default:var
a=b;continue}else
switch(c[0]){case
0:var
a=b;continue;case
1:var
a=b;continue;case
2:var
a=b;continue;case
3:var
a=b;continue;case
4:var
a=b;continue;case
5:var
a=b;continue;case
6:var
a=b;continue;case
7:var
a=b;continue;case
8:var
w=c[2];return dp(w,b1(b));case
9:var
a=b;continue;default:var
a=b;continue}default:var
v=a[1];return Pb(v,b1(a[3]))}}function
q7(b,a){return typeof
b==="number"?0===b?a:[2,a]:a}var
c7=O([I,atb,0]);function
Dz(b,a){if(typeof
b==="number")return[0,0,a];else{if(0===b[0])return[0,[0,b[1],b[2]],a];if(typeof
a!=="number"&&2===a[0])return[0,[1,b[1]],a[1]];throw c7}}function
q8(e,b,d){var
a=Dz(e,d);if(typeof
b==="number"){if(0===b)return[0,a[1],0,a[2]];var
c=a[2];if(typeof
c!=="number"&&2===c[0])return[0,a[1],1,c[1]];throw c7}return[0,a[1],[0,b[1]],a[2]]}function
vg(c,b){var
a=bJ(c,b);if(typeof
a[2]==="number")return a[1];throw c7}function
e9(d,c,b){var
a=bJ(c,b);return[0,[23,d,a[1]],a[2]]}function
bJ(b,a){if(typeof
b==="number")return[0,0,a];else
switch(b[0]){case
0:if(typeof
a!=="number"&&0===a[0]){var
r=bJ(b[1],a[1]);return[0,[0,r[1]],r[2]]}break;case
1:if(typeof
a!=="number"&&0===a[0]){var
s=bJ(b[1],a[1]);return[0,[1,s[1]],s[2]]}break;case
2:var
$=b[2],t=Dz(b[1],a),e=t[2],aa=t[1];if(typeof
e!=="number"&&1===e[0]){var
u=bJ($,e[1]);return[0,[2,aa,u[1]],u[2]]}throw c7;case
3:var
ab=b[2],v=Dz(b[1],a),f=v[2],ac=v[1];if(typeof
f!=="number"&&1===f[0]){var
w=bJ(ab,f[1]);return[0,[3,ac,w[1]],w[2]]}throw c7;case
4:var
ad=b[4],ae=b[1],g=q8(b[2],b[3],a),h=g[3],af=g[2],ag=g[1];if(typeof
h!=="number"&&2===h[0]){var
x=bJ(ad,h[1]);return[0,[4,ae,ag,af,x[1]],x[2]]}throw c7;case
5:var
ah=b[4],ai=b[1],i=q8(b[2],b[3],a),j=i[3],aj=i[2],ak=i[1];if(typeof
j!=="number"&&3===j[0]){var
y=bJ(ah,j[1]);return[0,[5,ai,ak,aj,y[1]],y[2]]}throw c7;case
6:var
al=b[4],am=b[1],k=q8(b[2],b[3],a),l=k[3],an=k[2],ao=k[1];if(typeof
l!=="number"&&4===l[0]){var
z=bJ(al,l[1]);return[0,[6,am,ao,an,z[1]],z[2]]}throw c7;case
7:var
ap=b[4],aq=b[1],m=q8(b[2],b[3],a),n=m[3],ar=m[2],as=m[1];if(typeof
n!=="number"&&5===n[0]){var
A=bJ(ap,n[1]);return[0,[7,aq,as,ar,A[1]],A[2]]}throw c7;case
8:var
at=b[4],au=b[1],o=q8(b[2],b[3],a),p=o[3],av=o[2],aw=o[1];if(typeof
p!=="number"&&6===p[0]){var
B=bJ(at,p[1]);return[0,[8,au,aw,av,B[1]],B[2]]}throw c7;case
9:if(typeof
a!=="number"&&7===a[0]){var
C=bJ(b[1],a[1]);return[0,[9,C[1]],C[2]]}break;case
10:var
D=bJ(b[1],a);return[0,[10,D[1]],D[2]];case
11:var
ax=b[1],E=bJ(b[2],a);return[0,[11,ax,E[1]],E[2]];case
12:var
ay=b[1],F=bJ(b[2],a);return[0,[12,ay,F[1]],F[2]];case
13:if(typeof
a!=="number"&&8===a[0]){var
G=a[1],az=a[2],aA=b[3],aB=b[1];if(J([0,b[2]],[0,G]))throw c7;var
H=bJ(aA,az);return[0,[13,aB,G,H[1]],H[2]]}break;case
14:if(typeof
a!=="number"&&9===a[0]){var
I=a[1],aC=a[3],aD=b[3],aE=b[2],aF=b[1],aG=[0,cf(I)];if(J([0,cf(aE)],aG))throw c7;var
K=bJ(aD,cf(aC));return[0,[14,aF,I,K[1]],K[2]]}break;case
15:if(typeof
a!=="number"&&10===a[0]){var
L=bJ(b[1],a[1]);return[0,[15,L[1]],L[2]]}break;case
16:if(typeof
a!=="number"&&11===a[0]){var
M=bJ(b[1],a[1]);return[0,[16,M[1]],M[2]]}break;case
17:var
aH=b[1],N=bJ(b[2],a);return[0,[17,aH,N[1]],N[2]];case
18:var
O=b[2],q=b[1];if(0===q[0]){var
S=q[1],aL=S[2],T=bJ(S[1],a),aM=T[1],U=bJ(O,T[2]);return[0,[18,[0,[0,aM,aL]],U[1]],U[2]]}var
V=q[1],aN=V[2],W=bJ(V[1],a),aO=W[1],X=bJ(O,W[2]);return[0,[18,[1,[0,aO,aN]],X[1]],X[2]];case
19:if(typeof
a!=="number"&&13===a[0]){var
P=bJ(b[1],a[1]);return[0,[19,P[1]],P[2]]}break;case
20:if(typeof
a!=="number"&&1===a[0]){var
aI=b[2],aJ=b[1],Q=bJ(b[3],a[1]);return[0,[20,aJ,aI,Q[1]],Q[2]]}break;case
21:if(typeof
a!=="number"&&2===a[0]){var
aK=b[1],R=bJ(b[2],a[1]);return[0,[21,aK,R[1]],R[2]]}break;case
23:var
d=b[2],c=b[1];if(typeof
c==="number")switch(c){case
0:return e9(c,d,a);case
1:return e9(c,d,a);case
2:return e9(c,d,a);case
3:if(typeof
a!=="number"&&14===a[0]){var
Y=bJ(d,a[1]);return[0,[23,3,Y[1]],Y[2]]}throw c7;default:return e9(c,d,a)}else
switch(c[0]){case
0:return e9(c,d,a);case
1:return e9(c,d,a);case
2:return e9(c,d,a);case
3:return e9(c,d,a);case
4:return e9(c,d,a);case
5:return e9(c,d,a);case
6:return e9(c,d,a);case
7:return e9([7,c[1],c[2]],d,a);case
8:var
aP=c[1],Z=eI(c[2],d,a),_=Z[2];return[0,[23,[8,aP,Z[1]],_[1]],_[2]];case
9:return e9(c,d,a);default:return e9(c,d,a)}}throw c7}function
eI(b,c,a){if(typeof
b==="number")return[0,0,bJ(c,a)];else
switch(b[0]){case
0:if(typeof
a!=="number"&&0===a[0]){var
g=eI(b[1],c,a[1]);return[0,[0,g[1]],g[2]]}break;case
1:if(typeof
a!=="number"&&1===a[0]){var
h=eI(b[1],c,a[1]);return[0,[1,h[1]],h[2]]}break;case
2:if(typeof
a!=="number"&&2===a[0]){var
i=eI(b[1],c,a[1]);return[0,[2,i[1]],i[2]]}break;case
3:if(typeof
a!=="number"&&3===a[0]){var
j=eI(b[1],c,a[1]);return[0,[3,j[1]],j[2]]}break;case
4:if(typeof
a!=="number"&&4===a[0]){var
k=eI(b[1],c,a[1]);return[0,[4,k[1]],k[2]]}break;case
5:if(typeof
a!=="number"&&5===a[0]){var
l=eI(b[1],c,a[1]);return[0,[5,l[1]],l[2]]}break;case
6:if(typeof
a!=="number"&&6===a[0]){var
m=eI(b[1],c,a[1]);return[0,[6,m[1]],m[2]]}break;case
7:if(typeof
a!=="number"&&7===a[0]){var
n=eI(b[1],c,a[1]);return[0,[7,n[1]],n[2]]}break;case
8:if(typeof
a!=="number"&&8===a[0]){var
o=a[1],w=a[2],x=b[2];if(J([0,b[1]],[0,o]))throw c7;var
p=eI(x,c,w);return[0,[8,o,p[1]],p[2]]}break;case
9:if(typeof
a!=="number"&&9===a[0]){var
e=a[2],f=a[1],y=a[3],z=b[3],A=b[2],B=b[1],C=[0,cf(f)];if(J([0,cf(B)],C))throw c7;var
D=[0,cf(e)];if(J([0,cf(A)],D))throw c7;var
q=dI(cR(cI(f),e)),E=q[4];d(q[2],0);d(E,0);var
r=eI(cf(z),c,y),F=r[2];return[0,[9,f,e,cI(r[1])],F]}break;case
10:if(typeof
a!=="number"&&10===a[0]){var
s=eI(b[1],c,a[1]);return[0,[10,s[1]],s[2]]}break;case
11:if(typeof
a!=="number"&&11===a[0]){var
t=eI(b[1],c,a[1]);return[0,[11,t[1]],t[2]]}break;case
13:if(typeof
a!=="number"&&13===a[0]){var
u=eI(b[1],c,a[1]);return[0,[13,u[1]],u[2]]}break;case
14:if(typeof
a!=="number"&&14===a[0]){var
v=eI(b[1],c,a[1]);return[0,[14,v[1]],v[2]]}break}throw c7}function
Pc(b,a){return vg(b,cf(cI(a)))}function
e_(k,i,a){var
b=r(a),j=0<=i?k:0,d=k2(i);if(d<=b)return a;var
l=2===j?48:32,c=mx(d,l);switch(j){case
0:fF(a,0,c,0,b);break;case
1:fF(a,0,c,d-b|0,b);break;default:if(0<b){if(43===u(a,0))var
e=1;else
if(45===u(a,0))var
e=1;else
if(32===u(a,0))var
e=1;else
var
g=0,e=0;if(e){ig(c,0,u(a,0));fF(a,1,c,(d-b|0)+1|0,b-1|0);var
g=1}}else
var
g=0;if(!g){if(1<b)if(48===u(a,0)){if(mb===u(a,1))var
h=1;else
if(88===u(a,1))var
h=1;else
var
f=0,h=0;if(h){ig(c,1,u(a,1));fF(a,2,c,(d-b|0)+2|0,b-2|0);var
f=1}}else
var
f=0;else
var
f=0;if(!f)fF(a,0,c,d-b|0,b)}}return c}function
or(j,b){var
c=k2(j),a=r(b),d=u(b,0);if(58<=d)var
e=71<=d?5<(d+Ad|0)>>>0?1:0:65<=d?0:1;else{if(32===d)var
f=1;else
if(43<=d)switch(d+ajn|0){case
5:if(a<(c+2|0))if(1<a){var
k=mb===u(b,1)?0:88===u(b,1)?0:1;if(!k){var
h=mx(c+2|0,48);ig(h,1,u(b,1));fF(b,2,h,(c-a|0)+4|0,a-2|0);return h}}var
e=0,f=0;break;case
0:case
2:var
f=1;break;case
1:case
3:case
4:var
e=1,f=0;break;default:var
e=0,f=0}else
var
e=1,f=0;if(f){if(a<(c+1|0)){var
g=mx(c+1|0,48);ig(g,0,d);fF(b,1,g,(c-a|0)+2|0,a-1|0);return g}var
e=1}}if(!e)if(a<c){var
i=mx(c,48);fF(b,0,i,c-a|0,a);return i}return b}function
atc(a){return dH(u$(a),atd)}function
DA(c,b){switch(c){case
0:var
a=atr;break;case
1:var
a=ats;break;case
2:var
a=att;break;case
3:var
a=atu;break;case
4:var
a=atv;break;case
5:var
a=atw;break;case
6:var
a=atx;break;case
7:var
a=aty;break;case
8:var
a=atz;break;case
9:var
a=atA;break;case
10:var
a=atB;break;case
11:var
a=atC;break;default:var
a=atD}return dH(c6(1,b),a)}function
atF(c,b){switch(c){case
0:var
a=ate;break;case
1:var
a=atf;break;case
2:var
a=atg;break;case
3:var
a=ath;break;case
4:var
a=ati;break;case
5:var
a=atj;break;case
6:var
a=atk;break;case
7:var
a=atl;break;case
8:var
a=atm;break;case
9:var
a=atn;break;case
10:var
a=ato;break;case
11:var
a=atp;break;default:var
a=atq}return n$(a,b)}function
atG(b,a){return n$(DA(b,jm),a)}function
atH(b,a){return n$(DA(b,hF),a)}function
atI(b,a){return Nw(DA(b,76),a)}function
jG(d,n,f){var
p=k2(n);if(15===d)var
h=atE;else{var
l=k2(p),m=O6(d),b=Dt(16);ah(b,37);O9(b,d);ah(b,46);cr(b,a(i+l));ah(b,m);var
h=Du(b)}var
c=Nq(h,f);if(15===d){var
j=anU(f),q=r(c);if(3===j)return f<0?atJ:atK;if(4<=j)return atL;var
e=0;for(;;){if(e===q)var
k=0;else{var
g=u(c,e)-46|0,s=23<g>>>0?55===g?1:0:21<(g-1|0)>>>0?1:0;if(!s){var
e=e+1|0;continue}var
k=1}return k?c:o(c,atM)}}return c}function
DB(b){var
a=Dt(16);q6(a,b);return Du(a)}function
vh(h,g,f,e,i,d,c,a){if(typeof
i==="number"){if(typeof
d==="number")return 0===d?function(d){return aK(h,g,[4,f,b(c,a,d)],e)}:function(i,d){return aK(h,g,[4,f,or(i,b(c,a,d))],e)};var
m=d[1];return function(d){return aK(h,g,[4,f,or(m,b(c,a,d))],e)}}else{if(0===i[0]){var
j=i[2],k=i[1];if(typeof
d==="number")return 0===d?function(d){return aK(h,g,[4,f,e_(k,j,b(c,a,d))],e)}:function(i,d){return aK(h,g,[4,f,e_(k,j,or(i,b(c,a,d)))],e)};var
n=d[1];return function(d){return aK(h,g,[4,f,e_(k,j,or(n,b(c,a,d)))],e)}}var
l=i[1];if(typeof
d==="number")return 0===d?function(i,d){return aK(h,g,[4,f,e_(l,i,b(c,a,d))],e)}:function(j,i,d){return aK(h,g,[4,f,e_(l,j,or(i,b(c,a,d)))],e)};var
o=d[1];return function(i,d){return aK(h,g,[4,f,e_(l,i,or(o,b(c,a,d)))],e)}}}function
Pd(g,f,e,c,a,b){if(typeof
a==="number")return function(a){return aK(g,f,[4,e,d(b,a)],c)};else{if(0===a[0]){var
h=a[2],i=a[1];return function(a){return aK(g,f,[4,e,e_(i,h,d(b,a))],c)}}var
j=a[1];return function(h,a){return aK(g,f,[4,e,e_(j,h,d(b,a))],c)}}}function
t1(g,y,f,x,w){var
c=y,a=x,e=w;for(;;)if(typeof
e==="number")return b(c,f,a);else
switch(e[0]){case
0:var
z=e[1];return function(b){return aK(c,f,[5,a,b],z)};case
1:var
A=e[1];return function(b){return aK(c,f,[4,a,dH(u8(b),atN)],A)};case
2:var
B=e[2],C=e[1];return Pd(c,f,a,B,C,function(a){return a});case
3:return Pd(c,f,a,e[2],e[1],atc);case
4:return vh(c,f,a,e[4],e[2],e[3],atF,e[1]);case
5:return vh(c,f,a,e[4],e[2],e[3],atG,e[1]);case
6:return vh(c,f,a,e[4],e[2],e[3],atH,e[1]);case
7:return vh(c,f,a,e[4],e[2],e[3],atI,e[1]);case
8:var
j=e[4],k=e[3],m=e[2],l=e[1];if(typeof
m==="number"){if(typeof
k==="number")return 0===k?function(b){return aK(c,f,[4,a,jG(l,Ds,b)],j)}:function(d,b){return aK(c,f,[4,a,jG(l,d,b)],j)};var
U=k[1];return function(b){return aK(c,f,[4,a,jG(l,U,b)],j)}}else{if(0===m[0]){var
p=m[2],q=m[1];if(typeof
k==="number")return 0===k?function(b){return aK(c,f,[4,a,e_(q,p,jG(l,Ds,b))],j)}:function(d,b){return aK(c,f,[4,a,e_(q,p,jG(l,d,b))],j)};var
V=k[1];return function(b){return aK(c,f,[4,a,e_(q,p,jG(l,V,b))],j)}}var
r=m[1];if(typeof
k==="number")return 0===k?function(d,b){return aK(c,f,[4,a,e_(r,d,jG(l,Ds,b))],j)}:function(e,d,b){return aK(c,f,[4,a,e_(r,e,jG(l,d,b))],j)};var
W=k[1];return function(d,b){return aK(c,f,[4,a,e_(r,d,jG(l,W,b))],j)}}case
9:var
D=e[1];return function(b){return aK(c,f,[4,a,CU(b)],D)};case
10:var
a=[7,a],e=e[1];continue;case
11:var
a=[2,a,e[1]],e=e[2];continue;case
12:var
a=[3,a,e[1]],e=e[2];continue;case
13:var
E=e[3],F=DB(e[2]);return function(b){return aK(c,f,[4,a,F],E)};case
14:var
G=e[3],H=e[2];return function(b){return aK(c,f,a,bT(Pc(b[1],H),G))};case
15:var
I=e[1];return function(e,d){return aK(c,f,[6,a,function(a){return b(e,a,d)}],I)};case
16:var
J=e[1];return function(b){return aK(c,f,[6,a,b],J)};case
17:var
a=[0,a,e[1]],e=e[2];continue;case
18:var
o=e[1];if(0===o[0]){var
K=e[2],L=o[1][1],M=0,c=function(c,d,e){return function(b,a){return aK(d,b,[1,c,[0,a]],e)}}(a,c,K),a=M,e=L;continue}var
N=e[2],O=o[1][1],P=0,c=function(c,d,e){return function(b,a){return aK(d,b,[1,c,[1,a]],e)}}(a,c,N),a=P,e=O;continue;case
19:throw[0,h,atP];case
20:var
Q=e[3],R=[8,a,atQ];return function(a){return aK(c,f,R,Q)};case
21:var
S=e[2];return function(b){return aK(c,f,[4,a,n$(atR,b)],S)};case
22:var
T=e[1];return function(b){return aK(c,f,[5,a,b],T)};case
23:var
i=e[2],n=e[1];if(typeof
n==="number")switch(n){case
0:return g<50?bG(g+1|0,c,f,a,i):aa(bG,[0,c,f,a,i]);case
1:return g<50?bG(g+1|0,c,f,a,i):aa(bG,[0,c,f,a,i]);case
2:return g<50?bG(g+1|0,c,f,a,i):aa(bG,[0,c,f,a,i]);case
3:throw[0,h,atS];default:return g<50?bG(g+1|0,c,f,a,i):aa(bG,[0,c,f,a,i])}else
switch(n[0]){case
0:return g<50?bG(g+1|0,c,f,a,i):aa(bG,[0,c,f,a,i]);case
1:return g<50?bG(g+1|0,c,f,a,i):aa(bG,[0,c,f,a,i]);case
2:return g<50?bG(g+1|0,c,f,a,i):aa(bG,[0,c,f,a,i]);case
3:return g<50?bG(g+1|0,c,f,a,i):aa(bG,[0,c,f,a,i]);case
4:return g<50?bG(g+1|0,c,f,a,i):aa(bG,[0,c,f,a,i]);case
5:return g<50?bG(g+1|0,c,f,a,i):aa(bG,[0,c,f,a,i]);case
6:return g<50?bG(g+1|0,c,f,a,i):aa(bG,[0,c,f,a,i]);case
7:return g<50?bG(g+1|0,c,f,a,i):aa(bG,[0,c,f,a,i]);case
8:var
v=n[2];return g<50?Kl(g+1|0,c,f,a,v,i):aa(Kl,[0,c,f,a,v,i]);case
9:return g<50?bG(g+1|0,c,f,a,i):aa(bG,[0,c,f,a,i]);default:return g<50?bG(g+1|0,c,f,a,i):aa(bG,[0,c,f,a,i])}default:var
s=e[3],t=e[1],u=d(e[2],0);return g<50?Kk(g+1|0,c,f,a,s,t,u):aa(Kk,[0,c,f,a,s,t,u])}}function
Kl(f,e,d,c,a,b){if(typeof
a==="number")return f<50?bG(f+1|0,e,d,c,b):aa(bG,[0,e,d,c,b]);else
switch(a[0]){case
0:var
g=a[1];return function(a){return fG(e,d,c,g,b)};case
1:var
i=a[1];return function(a){return fG(e,d,c,i,b)};case
2:var
j=a[1];return function(a){return fG(e,d,c,j,b)};case
3:var
k=a[1];return function(a){return fG(e,d,c,k,b)};case
4:var
l=a[1];return function(a){return fG(e,d,c,l,b)};case
5:var
m=a[1];return function(a){return fG(e,d,c,m,b)};case
6:var
n=a[1];return function(a){return fG(e,d,c,n,b)};case
7:var
o=a[1];return function(a){return fG(e,d,c,o,b)};case
8:var
p=a[2];return function(a){return fG(e,d,c,p,b)};case
9:var
q=a[3],r=a[2],s=cR(cI(a[1]),r);return function(a){return fG(e,d,c,dp(s,q),b)};case
10:var
t=a[1];return function(f,a){return fG(e,d,c,t,b)};case
11:var
u=a[1];return function(a){return fG(e,d,c,u,b)};case
12:var
v=a[1];return function(a){return fG(e,d,c,v,b)};case
13:throw[0,h,atT];default:throw[0,h,atU]}}function
bG(e,c,b,f,a){var
d=[8,f,atV];return e<50?t1(e+1|0,c,b,d,a):aa(t1,[0,c,b,d,a])}function
Kk(i,c,b,g,a,f,e){if(f){var
j=f[1];return function(f){return atO(c,b,g,a,j,d(e,f))}}var
h=[4,g,e];return i<50?t1(i+1|0,c,b,h,a):aa(t1,[0,c,b,h,a])}function
aK(a,b,c,d){return c4(t1(0,a,b,c,d))}function
fG(a,b,c,d,e){return c4(Kl(0,a,b,c,d,e))}function
atO(a,b,c,d,e,f){return c4(Kk(0,a,b,c,d,e,f))}function
iq(b,f){var
a=f;for(;;)if(typeof
a==="number")return 0;else
switch(a[0]){case
0:var
g=a[1],h=q4(a[2]);iq(b,g);return el(b,h);case
1:var
c=a[2],e=a[1];if(0===c[0]){var
i=c[1];iq(b,e);el(b,atW);var
a=i;continue}var
j=c[1];iq(b,e);el(b,atX);var
a=j;continue;case
6:var
m=a[2];iq(b,a[1]);return d(m,b);case
7:iq(b,a[1]);return dE(b);case
8:var
n=a[2];iq(b,a[1]);return S(n);case
2:case
4:var
k=a[2];iq(b,a[1]);return el(b,k);default:var
l=a[2];iq(b,a[1]);return jw(b,l)}}function
jH(b,f){var
a=f;for(;;)if(typeof
a==="number")return 0;else
switch(a[0]){case
0:var
g=a[1],h=q4(a[2]);jH(b,g);return an(b,h);case
1:var
c=a[2],e=a[1];if(0===c[0]){var
i=c[1];jH(b,e);an(b,atY);var
a=i;continue}var
j=c[1];jH(b,e);an(b,atZ);var
a=j;continue;case
6:var
m=a[2];jH(b,a[1]);return d(m,b);case
7:var
a=a[1];continue;case
8:var
n=a[2];jH(b,a[1]);return S(n);case
2:case
4:var
k=a[2];jH(b,a[1]);return an(b,k);default:var
l=a[2];jH(b,a[1]);return as(b,l)}}function
ir(b,f){var
a=f;for(;;)if(typeof
a==="number")return 0;else
switch(a[0]){case
0:var
g=a[1],h=q4(a[2]);ir(b,g);return an(b,h);case
1:var
c=a[2],e=a[1];if(0===c[0]){var
i=c[1];ir(b,e);an(b,at0);var
a=i;continue}var
j=c[1];ir(b,e);an(b,at1);var
a=j;continue;case
6:var
m=a[2];ir(b,a[1]);return an(b,d(m,0));case
7:var
a=a[1];continue;case
8:var
n=a[2];ir(b,a[1]);return S(n);case
2:case
4:var
k=a[2];ir(b,a[1]);return an(b,k);default:var
l=a[2];ir(b,a[1]);return as(b,l)}}function
fH(b){var
c=b[1],a=cH(dR);return aK(function(c,b){ir(a,b);return dq(cA(a))},0,0,c)}function
vi(a){if(A(a,at2))return at3;var
h=r(a);function
k(b){return d(fH(at4),a)}function
l(d){var
b=d;for(;;){if(b===h)return b;var
c=u(a,b);if(9!==c)if(32!==c)return b;var
b=b+1|0;continue}}function
p(d,c){var
b=c;for(;;){if(b===h)return b;if(25<(u(a,b)+Ad|0)>>>0)return b;var
b=b+1|0;continue}}function
q(f,d){var
b=d;for(;;){if(b===h)return b;var
c=u(a,b),e=48<=c?58<=c?0:1:45===c?1:0;if(e){var
b=b+1|0;continue}return b}}var
i=l(0),o=p(i,i),c=al(a,i,o-i|0),g=l(o),m=q(g,g);if(g===m)var
n=0;else
try{var
s=gh(al(a,g,m-g|0)),n=s}catch(a){a=j(a);if(a[1]!==dU)throw a;var
n=k(0)}if(l(m)!==h)k(0);if(f(c,at5))if(f(c,at6))if(f(c,at7))if(f(c,at8))if(f(c,at9))if(f(c,at_))var
e=k(0),b=1;else
var
e=1,b=1;else
var
e=2,b=1;else
var
e=3,b=1;else
var
e=0,b=1;else
var
b=0;else
var
b=0;if(!b)var
e=4;return[0,n,e]}function
Pe(a,b){return typeof
a==="number"?[0,0,b]:0===a[0]?[0,[0,a[1],a[2]],b]:[0,[1,a[1]],b]}function
q9(b,c,a){var
e=typeof
c==="number"?0===c?[0,0,a]:[0,1,a]:[0,[0,c[1]],a],d=e[1];return typeof
b==="number"?[0,0,d,a]:0===b[0]?[0,[0,b[1],b[2]],d,a]:[0,[1,b[1]],d,a]}function
vj(a,c){var
g=a?a[1]:1;function
ac(b,a){return p(fH(at$),c,b,a)}function
m(a){return ac(a,aua)}function
t(d,b,a){return L(fH(auc),c,d,b,a)}function
k(d,b,a){return L(fH(aud),c,d,b,a)}function
s(b,e,a){var
d=e-b|0;return 0===d?[0,a]:1===d?[0,[12,u(c,b),a]]:[0,[11,al(c,b,d),a]]}function
d(i,a){var
g=i;for(;;){if(g===a)return s(i,g,0);var
l=u(c,g);if(37===l){var
j=g+1|0;if(j===a)m(a);var
o=95===u(c,j)?v(g,j+1|0,a,1):v(g,j,a,0);return s(i,g,o[1])}if(64===l){var
e=g+1|0;if(e===a)var
f=auH;else{var
h=u(c,e);if(65<=h)if(94<=h){var
n=h+aju|0;if(2<n>>>0)var
b=0;else
switch(n){case
0:var
f=y(1,e+1|0,a),b=1;break;case
1:var
b=0;break;default:var
f=[0,[17,1,d(e+1|0,a)[1]]],b=1}}else
if(91<=h)switch(h+qE|0){case
0:var
f=y(0,e+1|0,a),b=1;break;case
1:var
b=0;break;default:var
f=[0,[17,0,d(e+1|0,a)[1]]],b=1}else
var
b=0;else
if(10===h)var
f=[0,[17,3,d(e+1|0,a)[1]]],b=1;else
if(32<=h)switch(h+MJ|0){case
0:var
f=[0,[17,auI,d(e+1|0,a)[1]]],b=1;break;case
5:if((e+1|0)<a)if(37===u(c,e+1|0))var
f=[0,[17,6,d(e+2|0,a)[1]]],b=1,k=0;else
var
k=1;else
var
k=1;if(k)var
f=[0,[12,64,d(e,a)[1]]],b=1;break;case
12:var
f=[0,[17,auJ,d(e+1|0,a)[1]]],b=1;break;case
14:var
f=[0,[17,4,d(e+1|0,a)[1]]],b=1;break;case
27:var
f=z(e+1|0,a),b=1;break;case
28:var
f=A(e+1|0,a),b=1;break;case
31:var
f=[0,[17,2,d(e+1|0,a)[1]]],b=1;break;case
32:var
f=[0,[17,5,d(e+1|0,a)[1]]],b=1;break;default:var
b=0}else
var
b=0;if(!b)var
f=[0,[17,[2,h],d(e+1|0,a)[1]]]}return s(i,g,f[1])}var
g=g+1|0;continue}}function
w(j,a,f,N,ag,af,C,ae,ad,bi,e){var
ah=[0,0],ai=[0,0],aj=[0,0],ak=[0,0],O=[0,0],al=[0,0];function
D(a){ah[1]=1;return N}function
H(a){ai[1]=1;return ag}function
E(a){aj[1]=1;return af}function
o(a){ak[1]=1;return C}function
y(a){O[1]=1;return ae}function
w(a){al[1]=1;return ad}function
P(a){O[1]=1;return bi}function
am(c,b){if(typeof
b==="number")return b;else{if(0===b[0]){if(2<=b[1]){var
d=b[2];return g?[0,1,d]:i(j,a,c,aum)}return b}return 2<=b[1]?g?aun:i(j,a,c,auo):b}}function
an(c,b){if(typeof
b==="number")return 0;else{if(0===b[0])switch(b[1]){case
0:var
d=b[2];return g?[0,d]:i(j,a,c,aup);case
1:return[0,b[2]];default:var
e=b[2];return g?[0,e]:i(j,a,c,auq)}return i(j,a,c,aur)}}function
q(a){return an(a,y(0))}function
ao(a){return an(a,P(0))}if(uL<=e)var
l=0;else
switch(e){case
33:var
k=[0,[10,d(a,f)[1]]],l=1;break;case
40:var
aF=x(a,f,41),aG=d(aF+2|0,f)[1],aH=b1(d(a,aF)[1]),bD=o(0)?[0,[23,[8,q(95),aH],aG]]:[0,[14,q(40),aH,aG]],k=bD,l=1;break;case
44:var
k=d(a,f),l=1;break;case
67:var
aJ=d(a,f)[1],bF=o(0)?[0,[23,1,aJ]]:[0,[1,aJ]],k=bF,l=1;break;case
78:var
aO=d(a,f)[1],aP=2,bK=o(0)?[0,[23,[10,aP],aO]]:[0,[21,aP,aO]],k=bK,l=1;break;case
83:var
bL=am(e,P(0)),aQ=d(a,f)[1];if(o(0))var
aR=[0,[23,[1,ao(95)],aQ]];else
var
aS=Pe(bL,aQ),aR=[0,[3,aS[1],aS[2]]];var
k=aR,l=1;break;case
91:if(a===f)m(f);var
W=Dp(0),z=function(a){return Dq(W,a)},a_=function(c,b){if(!(b<c)){var
a=c;for(;;){Dq(W,gj(a));var
d=a+1|0;if(b!==a){var
a=d;continue}break}}return 0},a$=function(a){return b(fH(auM),c,a)},A=function(f,g,b){var
a=g;for(;;){if(a===b)m(b);var
d=u(c,a);if(45===d){z(45);var
a=a+1|0;continue}if(93===d)return a+1|0;var
e=a+1|0;return f<50?Y(f+1|0,e,b,d):aa(Y,[0,e,b,d])}},Y=function(g,p,a,o){var
d=p,b=o;for(;;){if(d===a)m(a);var
f=u(c,d);if(46<=f)if(64===f)var
h=0;else{if(93===f){z(b);return d+1|0}var
h=1}else
if(37===f)var
h=0;else{if(45<=f){var
e=d+1|0;if(e===a)m(a);var
i=u(c,e);if(37===i){if((e+1|0)===a)m(a);var
j=u(c,e+1|0);if(37!==j)if(64!==j)return a$(e);a_(b,j);var
l=e+2|0;return g<50?A(g+1|0,l,a):aa(A,[0,l,a])}if(93===i){z(b);z(45);return e+1|0}a_(b,i);var
n=e+1|0;return g<50?A(g+1|0,n,a):aa(A,[0,n,a])}var
h=1}if(!h)if(37===b){z(f);var
k=d+1|0;return g<50?A(g+1|0,k,a):aa(A,[0,k,a])}if(37===b)a$(d);z(b);var
d=d+1|0,b=f;continue}},bX=function(a,b,c){return c4(Y(0,a,b,c))};if(a===f)m(f);var
ba=94===u(c,a)?[0,a+1|0,1]:[0,a,0],X=ba[1],bZ=ba[2];if(X===f)m(f);var
bY=bX(X+1|0,f,u(c,X)),bb=O3(W),bc=bZ?Dr(bb):bb,aY=d(bY,f)[1],bR=o(0)?[0,[23,[9,q(95),bc],aY]]:[0,[20,q(91),bc,aY]],k=bR,l=1;break;case
97:var
k=[0,[15,d(a,f)[1]]],l=1;break;case
99:var
aZ=function(a){return o(0)?[0,[23,0,a]]:[0,[0,a]]},L=d(a,f)[1],a0=q(99);if(a0){if(0===a0[1])var
bS=o(0)?[0,[23,4,L]]:[0,[22,L]],a1=bS;else
var
a1=g?aZ(L):ac(a,aub);var
a2=a1}else
var
a2=aZ(L);var
k=a2,l=1;break;case
114:var
a3=d(a,f)[1],bT=o(0)?[0,[23,3,a3]]:[0,[19,a3]],k=bT,l=1;break;case
115:var
bU=am(e,P(0)),a4=d(a,f)[1];if(o(0))var
a5=[0,[23,[0,ao(95)],a4]];else
var
a6=Pe(bU,a4),a5=[0,[2,a6[1],a6[2]]];var
k=a5,l=1;break;case
116:var
k=[0,[16,d(a,f)[1]]],l=1;break;case
123:var
a7=x(a,f,gc),bV=d(a,a7)[1],a8=d(a7+2|0,f)[1],a9=b1(bV),bW=o(0)?[0,[23,[7,q(95),a9],a8]]:[0,[13,q(dP),a9,a8]],k=bW,l=1;break;case
66:case
98:var
aI=d(a,f)[1],bE=o(0)?[0,[23,2,aI]]:[0,[9,aI]],k=bE,l=1;break;case
37:case
64:var
k=[0,[12,e,d(a,f)[1]]],l=1;break;case
76:case
108:case
110:if(a===f)var
Z=1;else{var
bd=u(c,a)+Ma|0;if(32<bd>>>0)var
_=0;else
switch(bd){case
0:case
12:case
17:case
23:case
29:case
32:var
aN=1,_=1;break;default:var
_=0}if(!_)var
aN=0;if(aN)var
l=0,Z=0;else
var
Z=1}if(Z){var
aM=d(a,f)[1];if(jm<=e)if(qz<=e)var
B=0;else
switch(e+ann|0){case
0:var
I=0,B=1;break;case
1:var
B=0;break;default:var
I=1,B=1}else
if(76===e)var
I=2,B=1;else
var
B=0;if(!B)throw[0,h,auT];var
bJ=o(0)?[0,[23,[10,I],aM]]:[0,[21,I,aM]],k=bJ,l=1}break;case
32:case
35:case
43:case
45:case
95:var
k=p(fH(auD),c,j,e),l=1;break;case
88:case
100:case
105:case
111:case
117:case
120:var
bM=E(0),bN=H(0),aT=G(j,a,D(0),bN,bM,e),aU=d(a,f)[1];if(o(0))var
aV=[0,[23,[2,aT,q(95)],aU]];else{var
r=y(0),aW=w(0);if(typeof
aW==="number")if(0===aW)var
K=r,$=1;else
var
$=0;else
var
$=0;if(!$)if(typeof
r==="number")var
K=0;else
if(0===r[0]){if(2<=r[1])var
bO=r[2],bP=g?[0,1,bO]:i(j,a,48,auE),aX=bP;else
var
aX=r;var
K=aX}else
var
bQ=2<=r[1]?g?auF:i(j,a,48,auG):r,K=bQ;var
V=q9(K,w(0),aU),aV=[0,[4,aT,V[1],V[2],V[3]]]}var
k=aV,l=1;break;case
69:case
70:case
71:case
101:case
102:case
103:var
bG=E(0),be=D(0),M=bG;for(;;){if(0===be)if(0===M){if(72<=e){var
bf=e+MS|0;if(2<bf>>>0)var
s=0;else
switch(bf){case
0:var
n=3,s=1;break;case
1:var
n=0,s=1;break;default:var
n=9,s=1}}else
if(69<=e)switch(e+KF|0){case
0:var
n=6,s=1;break;case
1:var
n=15,s=1;break;default:var
n=12,s=1}else
var
s=0;if(!s)throw[0,h,auZ]}else{if(72<=e){var
bg=e+MS|0;if(2<bg>>>0)var
t=0;else
switch(bg){case
0:var
n=5,t=1;break;case
1:var
n=2,t=1;break;default:var
n=11,t=1}}else
if(69<=e)switch(e+KF|0){case
0:var
n=8,t=1;break;case
1:var
t=0;break;default:var
n=14,t=1}else
var
t=0;if(!t){if(g){var
M=0;continue}var
n=i(j,a,e,au0)}}else
if(0===M){if(72<=e){var
bh=e+MS|0;if(2<bh>>>0)var
v=0;else
switch(bh){case
0:var
n=4,v=1;break;case
1:var
n=1,v=1;break;default:var
n=10,v=1}}else
if(69<=e)switch(e+KF|0){case
0:var
n=7,v=1;break;case
1:var
v=0;break;default:var
n=13,v=1}else
var
v=0;if(!v){if(g){var
be=0;continue}var
n=i(j,a,e,au1)}}else{if(g){var
M=0;continue}var
n=i(j,a,32,au2)}var
aK=d(a,f)[1];if(o(0))var
Q=w(0),bH=typeof
Q==="number"?0===Q?0:i(j,a,95,aus):[0,Q[1]],aL=[0,[23,[6,q(95),bH],aK]];else
var
bI=w(0),U=q9(y(0),bI,aK),aL=[0,[8,n,U[1],U[2],U[3]]];var
k=aL,l=1;break}break;default:var
l=0}if(!l){if(jm<=e)if(qz<=e)var
F=0;else{switch(e+ann|0){case
0:var
br=u(c,a),bs=E(0),bt=H(0),av=G(j,a+1|0,D(0),bt,bs,br),aw=d(a+1|0,f)[1];if(o(0))var
ax=[0,[23,[3,av,q(95)],aw]];else
var
bu=w(0),R=q9(y(0),bu,aw),ax=[0,[5,av,R[1],R[2],R[3]]];var
ay=ax,ab=1;break;case
1:var
F=0,ab=0;break;default:var
bv=u(c,a),bw=E(0),bx=H(0),az=G(j,a+1|0,D(0),bx,bw,bv),aA=d(a+1|0,f)[1];if(o(0))var
aB=[0,[23,[4,az,q(95)],aA]];else
var
by=w(0),S=q9(y(0),by,aA),aB=[0,[6,az,S[1],S[2],S[3]]];var
ay=aB,ab=1}if(ab)var
k=ay,F=1}else
if(76===e){var
bz=u(c,a),bA=E(0),bB=H(0),aC=G(j,a+1|0,D(0),bB,bA,bz),aD=d(a+1|0,f)[1];if(o(0))var
aE=[0,[23,[5,aC,q(95)],aD]];else
var
bC=w(0),T=q9(y(0),bC,aD),aE=[0,[7,aC,T[1],T[2],T[3]]];var
k=aE,F=1}else
var
F=0;if(!F)var
k=p(fH(aut),c,a-1|0,e)}if(1-g){var
ap=1-ah[1],bj=ap?N:ap;if(bj)i(j,a,e,auu);var
aq=1-ai[1],bk=aq?ag:aq;if(bk)i(j,a,e,auv);var
ar=1-aj[1],bl=ar?af:ar;if(bl)i(j,a,e,auw);var
as=1-O[1],bm=as?J([0,ae],aux):as;if(bm)i(j,a,e,auy);var
at=1-al[1],bn=at?J([0,ad],auz):at;if(bn){var
bo=C?95:e;i(j,a,bo,auA)}var
bp=C?N:C;if(bp)i(j,a,95,auB)}var
au=1-ak[1],bq=au?C:au;if(bq){var
b0=38<=e?44===e?0:64===e?0:1:33===e?0:37<=e?0:1,b2=b0?0:g?1:0;if(!b2)i(j,a,e,auC)}return k}function
q(l,f,e,k,j,i,h,g,d,a){if(f===e)m(e);function
b(b){return w(l,f+1|0,e,j,i,h,g,d,a,b,u(c,f))}if(typeof
d==="number"){if(typeof
a==="number")if(0===a)return b(0);return 0===k?typeof
a==="number"?b(auk):b([0,1,a[1]]):typeof
a==="number"?b(aul):b([0,0,a[1]])}return b(d)}function
f(n,l,a,k,j,i,h,f,d){if(l===a)m(a);var
p=u(c,l);if(46===p){var
b=l+1|0;if(b===a)m(a);var
r=function(e,c){var
b=o(c,a,0);return q(n,b[1],a,e,j,i,h,f,d,[0,b[2]])},e=u(c,b);if(48<=e){if(!(58<=e))return r(k,b)}else
if(42<=e)switch(e-42|0){case
0:return q(n,b+1|0,a,k,j,i,h,f,d,1);case
1:case
3:if(g){var
s=b+1|0,v=k||(45===e?1:0);return r(v,s)}break}return g?q(n,b,a,k,j,i,h,f,d,aui):t(b-1|0,46,auj)}return w(n,l+1|0,a,j,i,h,f,d,0,d,p)}function
v(e,B,b,h){var
s=[0,0],v=[0,0],w=[0,0],x=[0,0],y=[0,0];function
j(b,a){var
d=a[1],e=d?1-g:d;if(e){var
f=u(c,b);p(fH(aue),c,b,f)}a[1]=1;return 0}var
a=B;for(;;){if(a===b)m(b);var
z=u(c,a)+MJ|0;if(!(16<z>>>0))switch(z){case
0:j(a,x);var
a=a+1|0;continue;case
3:j(a,y);var
a=a+1|0;continue;case
11:j(a,w);var
a=a+1|0;continue;case
13:j(a,v);var
a=a+1|0;continue;case
16:j(a,s);var
a=a+1|0;continue}var
k=x[1],l=y[1],n=w[1],d=v[1],C=s[1];if(a===b)m(b);var
q=0===C?0===d?1:0:0===d?2:g?0:i(e,a,45,auh),r=u(c,a);if(48<=r){if(!(58<=r)){var
A=o(a,b,0);return f(e,A[1],b,d,n,l,k,h,[0,q,A[2]])}}else
if(42===r)return f(e,a+1|0,b,d,n,l,k,h,[1,q]);switch(q){case
0:if(1-g)t(a-1|0,45,auf);return f(e,a,b,d,n,l,k,h,0);case
1:return f(e,a,b,d,n,l,k,h,0);default:return f(e,a,b,d,n,l,k,h,aug)}}}function
y(h,a,e){try{if(a===e)throw l;if(60===u(c,a)){var
f=Dc(c,a+1|0,62);if(e<=f)throw l;var
q=al(c,a,(f-a|0)+1|0),r=d(f+1|0,e)[1],b=d(a,f+1|0)[1],i=[0,b,q];if(h)var
k=[0,i];else{if(typeof
b==="number")var
g=0;else
if(11===b[0])if(typeof
b[2]==="number"){var
n=b[1],m=1;try{vi(n)}catch(a){m=0;a=j(a);if(a[1]!==dU)throw a;var
g=1}if(m)var
g=1}else
var
g=0;else
var
g=0;var
k=[1,i]}var
s=[0,[18,k,r]];return s}throw l}catch(b){b=j(b);if(b===l){var
o=d(a,e)[1],p=h?[0,Pf]:[1,Pf];return[0,[18,p,o]]}throw b}}function
z(a,b){try{var
v=a===b?1:0,w=v||(60!==u(c,a)?1:0);if(w)throw l;var
o=e(a+1|0,b),i=u(c,o),y=48<=i?58<=i?0:1:45===i?1:0;if(!y)throw l;var
p=n(o,b),q=p[2],f=e(p[1],b),k=u(c,f)+uG|0;if(12<k>>>0)if(17===k)var
r=[0,f+1|0,[0,al(c,a-2|0,(f-a|0)+3|0),q,0]],g=0;else
var
g=1;else
if(1<(k-1|0)>>>0){var
s=n(f,b),x=s[2],m=e(s[1],b);if(62!==u(c,m))throw l;var
r=[0,m+1|0,[0,al(c,a-2|0,(m-a|0)+3|0),q,x]],g=0}else
var
g=1;if(g)throw l;var
h=r}catch(b){b=j(b);if(b!==l)if(b[1]!==dU)throw b;var
h=[0,a,auK]}var
t=h[2];return[0,[17,t,d(h[1],b)[1]]]}function
A(b,a){try{var
k=e(b,a),g=u(c,k),r=48<=g?58<=g?0:1:45===g?1:0;if(r){var
o=n(k,a),q=o[2],h=e(o[1],a);if(62!==u(c,h))throw l;var
m=[0,[0,h+1|0,[1,al(c,b-2|0,(h-b|0)+3|0),q]]]}else
var
m=0;var
f=m}catch(a){a=j(a);if(a!==l)if(a[1]!==dU)throw a;var
f=0}if(f){var
i=f[1],p=i[2];return[0,[17,p,d(i[1],a)[1]]]}return[0,[17,auL,d(b,a)[1]]]}function
e(d,b){var
a=d;for(;;){if(a===b)m(b);if(32===u(c,a)){var
a=a+1|0;continue}return a}}function
o(h,e,g){var
a=h,b=g;for(;;){if(a===e)m(e);var
f=u(c,a);if(9<(f+eF|0)>>>0)return[0,a,b];var
d=(b*10|0)+(f-48|0)|0;if(qF<d)return p(fH(auN),c,d,q1);var
a=a+1|0,b=d;continue}}function
n(a,b){if(a===b)m(b);var
d=u(c,a);if(48<=d){if(!(58<=d))return o(a,b,0)}else
if(45===d){if((a+1|0)===b)m(b);var
e=u(c,a+1|0);if(9<(e+eF|0)>>>0)return k(a+1|0,auP,e);var
f=o(a+1|0,b,0);return[0,f[1],-f[2]|0]}throw[0,h,auO]}function
x(g,b,e){var
a=g;for(;;){if(a===b)p(fH(auQ),c,e,b);if(37===u(c,a)){if((a+1|0)===b)m(b);if(u(c,a+1|0)===e)return a;var
d=u(c,a+1|0);if(95<=d){if(dP<=d){if(!(qs<=d))switch(d+aju|0){case
0:var
a=x(a+2|0,b,gc)+2|0;continue;case
1:break;default:return k(a+1|0,auR,gc)}}else
if(!(96<=d)){if((a+2|0)===b)m(b);var
f=u(c,a+2|0);if(40===f){var
a=x(a+3|0,b,41)+2|0;continue}if(dP===f){var
a=x(a+3|0,b,gc)+2|0;continue}var
a=a+3|0;continue}}else{if(40===d){var
a=x(a+2|0,b,41)+2|0;continue}if(41===d)return k(a+1|0,auS,41)}var
a=a+2|0;continue}var
a=a+1|0;continue}}function
i(a,e,d,b){var
f=al(c,a,e-a|0);return bH(fH(au3),c,a,b,d,f)}function
G(e,d,o,n,m,a){var
j=o,f=n,c=m;for(;;){if(0===j)if(0===f)if(0===c){var
k=a+Ma|0;if(32<k>>>0)var
b=1;else
switch(k){case
0:return 8;case
12:return 0;case
17:return 3;case
23:return 10;case
29:return 12;case
32:return 6;default:var
b=1}}else{if(b6===a)return 2;if(uc===a)return 5;var
b=1}else
if(0===c){if(88===a)return 9;if(qz===a)return 11;if(mb===a)return 7;var
b=0}else
var
b=0;else
if(0===f)if(0===c){if(b6===a)return 1;if(uc===a)return 4;var
b=1}else
var
b=1;else
var
b=0;if(!b){var
l=a+Ma|0;if(!(32<l>>>0))switch(l){case
0:if(g)return 9;break;case
23:if(g)return 11;break;case
32:if(g)return 7;break;case
12:case
17:case
29:if(g){var
f=0;continue}return i(e,d,a,auY)}}if(0===j){if(0===c)throw[0,h,auU];if(g){var
c=0;continue}return i(e,d,a,auV)}if(0===c){if(g){var
j=0;continue}return i(e,d,a,auW)}if(g){var
c=0;continue}return i(e,d,32,auX)}}return d(0,r(c))}function
au4(c,d){var
a=vj(0,c)[1];try{var
f=[0,vg(a,d),c];return f}catch(a){a=j(a);if(a===c7){var
e=DB(d);return b(fH(au5),c,e)}throw a}}aF(Lq,[0,ip,Dr,Dp,Dq,O3,O4,aK,iq,jH,ir,vg,vj,au4,function(c,a){var
d=a[2],e=a[1],f=vj(0,c)[1];try{var
g=[0,vg(f,b1(e)),c];return g}catch(a){a=j(a);if(a===c7)return b(fH(au6),c,d);throw a}},Dv,q4,O_,DB,asW,vi,cI,cR,Pc],KQ);function
Pg(c,b,a){var
e=a[1],f=0;return aK(function(a,b){iq(a,b);return d(c,a)},b,f,e)}function
Ph(c,b,a){var
e=a[1],f=0;return aK(function(a,b){jH(a,b);return d(c,a)},b,f,e)}function
Pi(c,b,a){var
e=a[1],f=0;return aK(function(a,b){return d(c,a)},b,f,e)}function
k8(b,a){return Pg(function(a){return 0},b,a)}function
jI(b,a){return Ph(function(a){return 0},b,a)}function
au7(b,a){return Pi(function(a){return 0},b,a)}function
DC(a){return k8(ek,a)}function
os(a){return k8(eG,a)}function
DD(b,a){var
c=a[1];return aK(function(e,c){var
a=cH(64);ir(a,c);return d(b,cA(a))},0,0,c)}function
ag(a){return DD(function(a){return a},a)}aF(KT,[0,k8,DC,os,ag,jI,au7,Pg,Pi,DD,Ph,DD],L_);var
k9=O([I,au8,0]),vk=O([I,au9,0]),jJ=O([I,au_,0]);function
DE(d,c){var
a=c;for(;;){if(a){var
b=a[1],e=a[2],f=b[2];if(E(b[1],d))return f;var
a=e;continue}throw l}}function
Pj(d,c,b,a){if(a){var
e=a[2],f=o(d,a[1]);return o(G(function(b,a){return o(b,o(c,a))},f,e),b)}return au$}function
Pk(a){throw[0,jJ,avf]}function
Pl(a){try{DE(avl,a);var
e=0,b=e}catch(a){a=j(a);if(a!==l)throw a;var
b=[0,[0,avh,[0,Pk],avg],0]}try{DE(avk,a);var
d=0,c=d}catch(a){a=j(a);if(a!==l)throw a;var
c=[0,[0,avj,[0,Pk],avi],0]}return s(a,s(b,c))}function
Pm(c,e,a){d(jI(c,avm),a);var
f=Pl(e);return m(function(d){var
a=d[3],e=d[2],f=d[1],g=0<r(a)?1:0;if(g){if(11===e[0]){var
h=Pj(avd,avc,avb,e[1]);return p(jI(c,ave),f,h,a)}return b(jI(c,ava),f,a)}return g},f)}function
Pn(c,b){var
a=cH(ael);Pm(a,c,b);return cA(a)}var
DF=[0,0];function
avn(b,a){var
c=Pn(b,a);return d(os(avo),c)}function
DG(s,c,q,x,w){var
a=s?s[1]:DF,e=c.length-1,g=cH(ael),k=a[1];function
i(a){var
d=k<e?n(c,k)[k+1]:avx;switch(a[0]){case
0:var
h=a[1];if(f(h,avp))if(f(h,avq))b(jI(g,avr),d,h);break;case
1:var
i=a[3],j=a[2],l=a[1];L(jI(g,avu),d,j,l,i);break;case
2:var
m=a[1];b(jI(g,avv),d,m);break;default:var
o=a[1];b(jI(g,avw),d,o)}Pm(g,q[1],w);if(!E(a,avs))if(!E(a,avt))throw[0,k9,cA(g)];throw[0,vk,cA(g)]}a[1]++;for(;;){if(a[1]<e){var
t=a[1],h=n(c,t)[t+1];if(1<=r(h))if(45===u(h,0)){try{var
y=DE(h,q[1]),v=y}catch(a){a=j(a);if(a!==l)throw a;var
v=i([0,h])}try{(function(g){function
C(b){switch(b[0]){case
0:return d(b[1],0);case
1:var
D=b[1];if((a[1]+1|0)<e){var
h=a[1]+1|0,i=n(c,h)[h+1];try{d(D,CV(i))}catch(a){a=j(a);if(a[1]===k1)if(!f(a[2],avy))throw[0,jJ,[1,g,i,avz]];throw a}a[1]++;return 0}break;case
2:b[1][1]=1;return 0;case
3:b[1][1]=0;return 0;case
4:var
E=b[1];if((a[1]+1|0)<e){var
k=a[1]+1|0;d(E,n(c,k)[k+1]);a[1]++;return 0}break;case
5:var
F=b[1];if((a[1]+1|0)<e){var
l=a[1]+1|0;F[1]=n(c,l)[l+1];a[1]++;return 0}break;case
6:var
G=b[1];if((a[1]+1|0)<e){var
p=a[1]+1|0,q=n(c,p)[p+1];try{d(G,gh(q))}catch(a){a=j(a);if(a[1]===dU)if(!f(a[2],avA))throw[0,jJ,[1,g,q,avB]];throw a}a[1]++;return 0}break;case
7:var
H=b[1];if((a[1]+1|0)<e){var
r=a[1]+1|0,s=n(c,r)[r+1];try{H[1]=gh(s)}catch(a){a=j(a);if(a[1]===dU)if(!f(a[2],avC))throw[0,jJ,[1,g,s,avD]];throw a}a[1]++;return 0}break;case
8:var
I=b[1];if((a[1]+1|0)<e){var
t=a[1]+1|0,u=n(c,t)[t+1];try{d(I,gf(u))}catch(a){a=j(a);if(a[1]===dU)if(!f(a[2],avE))throw[0,jJ,[1,g,u,avF]];throw a}a[1]++;return 0}break;case
9:var
J=b[1];if((a[1]+1|0)<e){var
v=a[1]+1|0,w=n(c,v)[v+1];try{J[1]=gf(w)}catch(a){a=j(a);if(a[1]===dU)if(!f(a[2],avG))throw[0,jJ,[1,g,w,avH]];throw a}a[1]++;return 0}break;case
10:return m(C,b[1]);case
11:var
x=b[1],K=b[2];if((a[1]+1|0)<e){var
y=a[1]+1|0,z=n(c,y)[y+1];if(aY(z,x)){var
A=a[1]+1|0;d(K,n(c,A)[A+1]);a[1]++;return 0}throw[0,jJ,[1,g,z,o(avL,Pj(avK,avJ,avI,x))]]}break;default:var
L=b[1];for(;;){if(a[1]<(e-1|0)){var
B=a[1]+1|0;d(L,n(c,B)[B+1]);a[1]++;continue}return 0}}throw[0,jJ,[2,g]]}return C}(h)(v))}catch(a){a=j(a);if(a[1]===k9)i([3,a[2]]);else{if(a[1]!==jJ)throw a;i(a[2])}}a[1]++;var
p=1}else
var
p=0;else
var
p=0;if(!p){try{d(x,h)}catch(a){a=j(a);if(a[1]!==k9)throw a;i([3,a[2]])}a[1]++}continue}return 0}}function
Po(a,e,d,c,b){var
f=a?a[1]:DF;return DG([0,f],e,[0,d],c,b)}function
avM(c,b,a){try{var
g=Po(0,Dd,c,b,a);return g}catch(a){a=j(a);if(a[1]===k9){var
e=a[2];d(os(avN),e);return oi(2)}if(a[1]===vk){var
f=a[2];d(DC(avO),f);return oi(0)}throw a}}function
avP(c,b,a){try{var
g=DG(0,Dd,c,b,a);return g}catch(a){a=j(a);if(a[1]===k9){var
e=a[2];d(os(avQ),e);return oi(2)}if(a[1]===vk){var
f=a[2];d(DC(avR),f);return oi(0)}throw a}}function
DH(b){var
c=r(b);function
a(d){var
a=d;for(;;){if(c<=a)return c;if(32===u(b,a)){var
a=a+1|0;continue}return a}}try{var
d=a(OB(b,32));return d}catch(a){a=j(a);if(a===l)return c;throw a}}function
avS(b,a){var
c=a[1],d=a[3];return 11===a[2][0]?cz(b,r(c)):cz(b,r(c)+DH(d)|0)}aF(aeY,[0,avM,avP,Po,DG,vk,k9,avn,Pn,function(a,c){var
d=a?a[1]:fD,b=Pl(c),i=c5(G(avS,0,b),d);return g(function(a){var
c=a[2],d=a[1];if(f(a[3],avT)){if(11===c[0]){var
h=a[3];return[0,d,c,o(avU,o(c6(cz(0,i-DH(h)|0)+3|0,32),h))]}var
b=a[3],e=DH(b),g=(i-r(d)|0)-e|0;if(0<g){var
j=c6(g,32),k=al(b,0,e);return[0,d,c,o(k,o(j,al(b,e,r(b)-e|0)))]}return[0,d,c,b]}return a},b)},DF],KS);var
DI=[0,0];function
DK(c,b){var
a=c[b+1];return uU(a)?c3(a)===Av?d(ag(avV),a):c3(a)===amZ?of(a):avW:d(ag(avX),a)}function
Pp(c,a){if(c.length-1<=a)return avY;var
d=Pp(c,a+1|0),e=DK(c,a);return b(ag(avZ),e,d)}function
av0(a){var
c=a.length-1;if(2<c>>>0){var
e=Pp(a,2),f=DK(a,1);return b(ag(av1),f,e)}switch(c){case
0:return av2;case
1:return av3;default:var
g=DK(a,1);return d(ag(av4),g)}}function
vl(a){function
b(l){var
b=l;for(;;){if(b){var
m=b[2],n=b[1];try{var
p=d(n,a),c=p}catch(a){var
c=0}if(c)return c[1];var
b=m;continue}if(a===Pq)return av5;if(a===Pr)return av6;if(a[1]===vm){var
e=a[2],i=e[3],q=e[2],r=e[1];return bH(ag(DJ),r,q,i,i+5|0,av7)}if(a[1]===h){var
f=a[2],j=f[3],s=f[2],t=f[1];return bH(ag(DJ),t,s,j,j+6|0,av8)}if(a[1]===DL){var
g=a[2],k=g[3],u=g[2],v=g[1];return bH(ag(DJ),v,u,k,k+6|0,av9)}if(0===c3(a)){var
w=a[1][1];return o(w,av0(a))}return a[1]}}return b(DI[1])}function
av_(b,a){try{var
e=d(b,a);return e}catch(a){a=j(a);var
c=vl(a);d(os(av$),c);dE(eG);throw a}}function
awa(b,a){try{var
e=d(b,a);return e}catch(a){a=j(a);dE(ek);var
c=vl(a);d(os(awb),c);return oi(2)}}function
vn(a){try{var
b=[0,em(function(a){return Np(a)},a)];return b}catch(a){a=j(a);if(a[1]===dU)return 0;throw a}}function
DM(b,a){function
c(a){return a?0===b?awc:awd:0===b?awe:awf}if(0===a[0]){var
e=a[5],f=a[4],g=a[3],h=a[2],i=c(a[1]);return[0,bH(ag(awg),i,h,g,f,e)]}if(0===a[1]){var
j=c(0);return[0,d(ag(awh),j)]}return 0}function
Ps(f,k){var
g=vn(k);if(g){var
b=g[1],c=b.length-1-1|0,h=0;if(!(c<0)){var
a=h;for(;;){var
e=DM(a,n(b,a)[a+1]);if(e){var
i=e[1];d(k8(f,awi),i)}var
j=a+1|0;if(c!==a){var
a=j;continue}break}}return 0}return k8(f,awj)}function
awk(a){return Ps(a,Cs(0))}function
Pt(b){if(b){var
c=b[1],e=cH(mm),f=c.length-1-1|0,h=0;if(!(f<0)){var
a=h;for(;;){var
g=DM(a,n(c,a)[a+1]);if(g){var
i=g[1];d(jI(e,awl),i)}var
j=a+1|0;if(f!==a){var
a=j;continue}break}}return cA(e)}return awm}function
awn(a){return Pt(vn(a))}function
awo(a){return 0===a[0]?a[1]:a[1]}function
awp(a){return 0===a[0]?[0,[0,a[2],a[3],a[4],a[5]]]:0}function
awq(f){var
c=vn(f);if(c){var
b=c[1],a=b.length-1-1|0;for(;;){if(-1===a)var
e=0;else{var
d=0===n(b,a)[a+1][0]?1:0;if(!d){var
a=a-1|0;continue}var
e=d}return e?[0,b]:0}}return 0}function
awr(a){return a.length-1}function
aws(b,a){return n(b,a)[a+1]}function
awt(a){return Pt(vn(Cs(0)))}function
Pu(a){DI[1]=[0,a,DI[1]];return 0}function
Pv(a){return 0===c3(a)?a[1]:a}function
awu(a){return Pv(a)[2]}function
awv(a){return Pv(a)[1]}var
aww=[0,0];function
awx(a){aww[1]=[0,a];return 0}function
awy(a){return Np(a)}var
awz=[0,awo,awp,DM];function
awA(a){return anW(a)}function
awB(a){return Cs(a)}function
awC(a){return anP(a)}aF(AH,[0,vl,av_,awa,awk,awt,function(a){return aos(a)},awC,Pu,awB,Ps,awn,awA,awx,awq,awz,awr,aws,awy,awu,awv],LV);function
DN(a){return CF(a,0,r(a))}function
awD(a){return DN(a)}function
Pw(c,b,a){if(0<=b)if(0<=a)if(!((r(c)-a|0)<b))return CF(c,b,a);return S(awE)}function
awF(c,b,a){return Pw(c,b,a)}function
Px(b){var
a=u4(b);try{var
c=aoa(a,-1)}catch(b){b=j(b);g4(a);throw b}g4(a);return c}function
awG(b,a){return el(b,a)}function
awH(a){return u5(a,16)}function
Py(a){var
b=10<=a?87:48;return a+b|0}function
awI(d){var
b=aN(32),a=0;for(;;){var
c=u(d,a);ax(b,a*2|0,Py(c>>>4|0));ax(b,(a*2|0)+1|0,Py(c&15));var
e=a+1|0;if(15!==a){var
a=e;continue}return b}}aF(afM,[0,q0,DN,awD,Pw,awF,Px,awG,awH,awI,function(b){if(32!==r(b))throw[0,k1,awJ];function
c(a){if(65<=a){if(97<=a){if(!(AQ<=a))return(a-97|0)+10|0}else
if(!(71<=a))return(a-65|0)+10|0}else
if(!(9<(a+eF|0)>>>0))return a-48|0;throw[0,k1,awK]}var
d=aN(16),a=0;for(;;){var
e=2*a|0,f=c(u(b,e+1|0));ig(d,a,dG((c(u(b,e))<<4)+f|0));var
g=a+1|0;if(15!==a){var
a=g;continue}return d}}],KD);function
Pz(a){return[0,X(55,0),0]}function
PA(b,a){gk(a[1],0,b[1],0,55);b[2]=a[2];return 0}function
DO(d,h){var
j=0===h.length-1?[0,0]:h,k=j.length-1,b=0;for(;;){n(d[1],b)[b+1]=b;var
y=b+1|0;if(54!==b){var
b=y;continue}var
g=[0,awL],l=54+cz(55,k)|0,t=0;if(!(l<0)){var
c=t;for(;;){var
e=c%55|0,m=jx(c,k),v=n(j,m)[m+1];g[1]=DN(o(g[1],a(i+v)));var
f=g[1],p=u(f,3)<<24,q=u(f,2)<<16,r=u(f,1)<<8,s=((u(f,0)+r|0)+q|0)+p|0,w=(n(d[1],e)[e+1]^s)&kS;n(d[1],e)[e+1]=w;var
x=c+1|0;if(l!==c){var
c=x;continue}break}}d[2]=0;return 0}}function
PB(b){var
a=Pz(0);DO(a,b);return a}function
awM(a){return PB(NU(0))}function
PC(b){var
a=Pz(0);PA(a,b);return a}function
g8(a){a[2]=(a[2]+1|0)%55|0;var
b=a[2],c=n(a[1],b)[b+1],d=(a[2]+24|0)%55|0,e=(n(a[1],d)[d+1]+(c^(c>>>25|0)&31)|0)&kS,f=a[2];n(a[1],f)[f+1]=e;return e}function
PD(d,a){if(!(kS<a))if(0<a)for(;;){var
b=g8(d),c=jx(b,a);if(((kS-a|0)+1|0)<(b-c|0))continue;return c}return S(awN)}function
DP(d,a){if(ms(a,0))return S(awO);for(;;){var
e=g8(d),b=e|(g8(d)&1)<<30,c=jx(b,a);if(dT(b-c|0,(jc-a|0)+1|0))continue;return c}}function
PE(b,a){if(ms(a,awQ))return S(awR);for(;;){var
e=mr(g8(b)),f=Cx(mr(g8(b)),30),c=Cw(e,Cw(f,Cx(mr(g8(b)&7),60))),d=Ny(c,a);if(dT(qJ(c,d),uQ(qJ(OO,a),awP)))continue;return d}}function
PF(b,a){return DP(b,a)}function
PG(a,c){var
b=g8(a);return(b/al8+g8(a))/al8*c}function
PH(a){return 0===(g8(a)&1)?1:0}var
g9=[0,awS.slice(),0];function
awT(a){return g8(g9)}function
awU(a){return PD(g9,a)}function
awV(a){return DP(g9,a)}function
awW(a){return PF(g9,a)}function
awX(a){return PE(g9,a)}function
awY(a){return PG(g9,a)}function
awZ(a){return PH(g9)}function
PI(a){return DO(g9,a)}function
aw0(a){return DO(g9,[0,a])}function
aw1(a){return PI(NU(0))}function
aw2(a){return PC(g9)}var
q_=[0,PB,awM,PC,g8,PD,DP,PF,PE,PG,PH];aF(aks,[0,aw0,PI,aw1,awT,awU,awV,awW,awX,awY,awZ,q_,aw2,function(a){return PA(g9,a)}],Le);function
aw3(a){return g3(10,b6,0,a)}function
aw4(c,b,a){return g3(c,b,0,a)}function
aw5(b,a){return g3(10,b6,b,a)}try{var
b8T=ih(b8S),PK=b8T}catch(a){a=j(a);if(a!==l)throw a;try{var
b8R=ih(b8Q),PJ=b8R}catch(a){a=j(a);if(a!==l)throw a;var
PJ=aw6}var
PK=PJ}var
PL=[0,OD(PK,82)];function
aw7(a){PL[1]=1;return 0}var
vo=[z,function(a){return d(q_[2],0)}];function
bp(b,f){var
g=b?b[1]:PL[1],a=16;for(;;){if(!(f<=a))if(!(hV<(a*2|0))){var
a=a*2|0;continue}if(g)var
c=c3(vo),h=dk===c?vo[1]:z===c?gm(vo):vo,e=d(q_[4],h);else
var
e=0;return[0,0,X(a,0),e,a]}}function
ot(b){b[1]=0;var
c=b[2].length-1-1|0,d=0;if(!(c<0)){var
a=d;for(;;){n(b[2],a)[a+1]=0;var
e=a+1|0;if(c!==a){var
a=e;continue}break}}return 0}function
mC(a){var
b=a[2].length-1;if(4<=a.length-1)if(b!==a[4]){a[1]=0;a[2]=X(a[4],0);return 0}return ot(a)}function
PM(a){var
b=a[4],c=a[3],d=k3(a[2]);return[0,a[1],d,c,b]}function
PN(a){return a[1]}function
vp(l,c){var
e=c[2],f=e.length-1,g=f*2|0,h=g<hV?1:0;if(h){var
d=X(g,0);c[2]=d;var
i=function(a){if(a){var
f=a[1],g=a[2];i(a[3]);var
e=b(l,c,f);return d[e+1]=[0,f,g,n(d,e)[e+1]]}return 0},j=f-1|0,m=0;if(!(j<0)){var
a=m;for(;;){i(n(e,a)[a+1]);var
o=a+1|0;if(j!==a){var
a=o;continue}break}}var
k=0}else
var
k=h;return k}function
k_(a,b){return 3<=a.length-1?g3(10,b6,a[3],b)&(a[2].length-1-1|0):jx(an3(10,b6,b),a[2].length-1)}function
bq(a,c,e){var
b=k_(a,c),f=[0,c,e,n(a[2],b)[b+1]];n(a[2],b)[b+1]=f;a[1]=a[1]+1|0;var
d=a[2].length-1<<1<a[1]?1:0;return d?vp(k_,a):d}function
PO(a,c){function
d(b){if(b){var
e=b[3],f=b[1],g=b[2];return 0===cp(f,c)?(a[1]=a[1]-1|0,e):[0,f,g,d(e)]}return 0}var
b=k_(a,c),e=d(n(a[2],b)[b+1]);return n(a[2],b)[b+1]=e}function
aV(f,b){var
g=k_(f,b),c=n(f[2],g)[g+1];if(c){var
d=c[3],j=c[2];if(0===cp(b,c[1]))return j;if(d){var
e=d[3],k=d[2];if(0===cp(b,d[1]))return k;if(e){var
m=e[3],o=e[2];if(0===cp(b,e[1]))return o;var
a=m;for(;;){if(a){var
h=a[3],i=a[2];if(0===cp(b,a[1]))return i;var
a=h;continue}throw l}}throw l}throw l}throw l}function
aw8(a,b){function
c(e){var
a=e;for(;;){if(a){var
d=a[3],f=a[2];if(0===cp(a[1],b))return[0,f,c(d)];var
a=d;continue}return 0}}var
d=k_(a,b);return c(n(a[2],d)[d+1])}function
jK(a,c,e){function
d(a){if(a){var
b=a[3],f=a[1],g=a[2];return 0===cp(f,c)?[0,c,e,b]:[0,f,g,d(b)]}throw l}var
b=k_(a,c),f=n(a[2],b)[b+1];try{var
h=d(f),i=n(a[2],b)[b+1]=h;return i}catch(d){d=j(d);if(d===l){n(a[2],b)[b+1]=[0,c,e,f];a[1]=a[1]+1|0;var
g=a[2].length-1<<1<a[1]?1:0;return g?vp(k_,a):g}throw d}}function
is(c,b){var
e=k_(c,b),a=n(c[2],e)[e+1];for(;;){if(a){var
f=a[3],d=0===cp(a[1],b)?1:0;if(d)return d;var
a=f;continue}return 0}}function
jL(g,f){var
d=f[2],e=d.length-1-1|0,i=0;if(!(e<0)){var
c=i;a:for(;;){var
a=n(d,c)[c+1];for(;;){if(a){var
h=a[3];b(g,a[1],a[2]);var
a=h;continue}var
j=c+1|0;if(e!==c){var
c=j;continue a}break}break}}return 0}function
ou(i,h,g){var
e=h[2],d=[0,g],f=e.length-1-1|0,l=0;if(!(f<0)){var
b=l;a:for(;;){var
m=d[1],a=n(e,b)[b+1],c=m;for(;;){if(a){var
j=a[3],k=p(i,a[1],a[2],c),a=j,c=k;continue}d[1]=c;var
o=b+1|0;if(f!==b){var
b=o;continue a}break}break}}return d[1]}function
PP(d,c){var
b=d,a=c;for(;;){if(a){var
b=b+1|0,a=a[3];continue}return b}}function
PQ(a){var
d=a[2],e=0,c=qV(function(b,a){return cz(b,PP(0,a))},e,d),b=X(c+1|0,0),f=a[2];k4(function(c){var
a=PP(0,c);return b[a+1]=n(b,a)[a+1]+1|0},f);return[0,a[1],a[2].length-1,c,b]}function
PR(a){function
d(c,d){var
e=c[2].length-1-1|0;return b(a[2],c[3],d)&e}function
c(a,c,f){var
b=d(a,c),g=[0,c,f,n(a[2],b)[b+1]];n(a[2],b)[b+1]=g;a[1]=a[1]+1|0;var
e=a[2].length-1<<1<a[1]?1:0;return e?vp(d,a):e}function
e(c,f){function
g(d){if(d){var
e=d[3],h=d[1],i=d[2];return b(a[1],h,f)?(c[1]=c[1]-1|0,e):[0,h,i,g(e)]}return 0}var
e=d(c,f),h=g(n(c[2],e)[e+1]);return n(c[2],e)[e+1]=h}function
f(i,e){var
j=d(i,e),f=n(i[2],j)[j+1];if(f){var
g=f[3],o=f[2];if(b(a[1],e,f[1]))return o;if(g){var
h=g[3],p=g[2];if(b(a[1],e,g[1]))return p;if(h){var
q=h[3],r=h[2];if(b(a[1],e,h[1]))return r;var
c=q;for(;;){if(c){var
k=c[3],m=c[2];if(b(a[1],e,c[1]))return m;var
c=k;continue}throw l}}throw l}throw l}throw l}function
g(c,e){function
f(g){var
c=g;for(;;){if(c){var
d=c[3],h=c[2];if(b(a[1],c[1],e))return[0,h,f(d)];var
c=d;continue}return 0}}var
g=d(c,e);return f(n(c[2],g)[g+1])}function
h(c,f,g){function
h(c){if(c){var
d=c[3],e=c[1],i=c[2];return b(a[1],e,f)?[0,f,g,d]:[0,e,i,h(d)]}throw l}var
e=d(c,f),i=n(c[2],e)[e+1];try{var
m=h(i),o=n(c[2],e)[e+1]=m;return o}catch(a){a=j(a);if(a===l){n(c[2],e)[e+1]=[0,f,g,i];c[1]=c[1]+1|0;var
k=c[2].length-1<<1<c[1]?1:0;return k?vp(d,c):k}throw a}}return[0,bp,ot,mC,PM,c,e,f,g,h,function(f,e){var
h=d(f,e),c=n(f[2],h)[h+1];for(;;){if(c){var
i=c[3],g=b(a[1],c[1],e);if(g)return g;var
c=i;continue}return 0}},jL,ou,PN,PQ]}function
DQ(c){var
e=c[1],a=PR([0,e,function(b,a){return d(c[2],a)}]),f=a[1],g=a[2],h=a[3],i=a[4],j=a[5],k=a[6],l=a[7],m=a[8],n=a[9],o=a[10],p=a[11],q=a[12],r=a[13],s=a[14];return[0,function(a){return b(f,aw9,a)},g,h,i,j,k,l,m,n,o,p,q,r,s]}aF(ahZ,[0,bp,ot,mC,PM,bq,aV,aw8,is,PO,jK,jL,ou,PN,aw7,PQ,DQ,PR,aw3,aw5,aw4,g3],M7);function
PS(d,a){var
b=[0,[0,d,0]],c=a[1];if(c){var
e=c[1];a[1]=b;e[2]=b;return 0}a[1]=b;a[2]=b;return 0}var
DR=O([I,aw_,0]);function
PT(a){var
b=a[2];if(b){var
c=b[1],d=c[2],e=c[1];a[2]=d;if(0===d)a[1]=0;return e}throw DR}function
q$(a,b){a[13]=a[13]+b[3]|0;return PS(b,a[27])}var
PU=alh;function
DS(b,a){return p(b[17],a,0,r(a))}function
vq(a){return d(a[19],0)}function
PV(b,a){return d(b[20],a)}function
mD(a,c,b){vq(a);a[11]=1;a[10]=c5(a[8],(a[6]-b|0)+c|0);a[9]=a[6]-a[10]|0;return PV(a,a[10])}function
PW(b,a){return mD(b,0,a)}function
ov(a,b){a[9]=a[9]-b|0;return PV(a,b)}function
aw$(a){var
b=a[2];if(b){var
c=b[1],d=c[2],e=c[1],f=a[9]<d?1:0;if(f){if(0!==e)return 5<=e?0:PW(a,d);var
g=0}else
var
g=f;return g}return vq(a)}function
axa(a){var
b=PT(a[27]),c=b[1];a[12]=a[12]-b[3]|0;a[9]=a[9]+c|0;return 0}function
axb(a,g,b){if(typeof
b==="number")switch(b){case
0:var
m=a[3];if(m){var
n=m[1][1],o=function(b,a){if(a){var
c=a[1],d=a[2];return fC(b,c)?[0,b,a]:[0,c,o(b,d)]}return[0,b,0]};n[1]=o(a[6]-a[9]|0,n[1]);return 0}return 0;case
1:var
p=a[2];return p?(a[2]=p[2],0):0;case
2:var
q=a[3];return q?(a[3]=q[2],0):0;case
3:var
r=a[2];return r?PW(a,r[1][2]):vq(a);case
4:var
s=a[10]!==(a[6]-a[9]|0)?1:0;return s?axa(a):s;default:var
h=a[5];if(h){var
C=h[2];DS(a,d(a[24],h[1]));a[5]=C;return 0}return 0}else
switch(b[0]){case
0:var
D=b[1];a[9]=a[9]-g|0;DS(a,D);a[11]=0;return 0;case
1:var
c=b[2],f=b[1],t=a[2];if(t){var
u=t[1],e=u[2];switch(u[1]){case
0:return ov(a,f);case
1:return mD(a,c,e);case
2:return mD(a,c,e);case
3:return a[9]<g?mD(a,c,e):ov(a,f);case
4:return a[11]?ov(a,f):a[9]<g?mD(a,c,e):((a[6]-e|0)+c|0)<a[10]?mD(a,c,e):ov(a,f);default:return ov(a,f)}}return 0;case
2:var
i=a[6]-a[9]|0,v=a[3],E=b[2],F=b[1];if(v){var
w=v[1][1],G=function(d,c){var
a=c;for(;;){if(a){var
b=a[1],e=a[2];if(ic(b,d))return b;var
a=e;continue}throw l}},x=w[1];if(x){var
H=x[1];try{var
I=G(i,w[1]),y=I}catch(a){a=j(a);if(a!==l)throw a;var
y=H}var
k=y}else
var
k=i;var
z=k-i|0;return 0<=z?ov(a,z+F|0):mD(a,k+E|0,a[6])}return 0;case
3:var
A=b[2],J=b[1];if(a[8]<(a[6]-a[9]|0))aw$(a);var
K=a[9]-J|0,L=1===A?1:a[9]<g?A:5;a[2]=[0,[0,L,K],a[2]];return 0;case
4:a[3]=[0,b[1],a[3]];return 0;default:var
B=b[1];DS(a,d(a[23],B));a[5]=[0,B,a[5]];return 0}}function
axc(a){for(;;){var
d=a[27][2];if(d){var
b=d[1][1],c=b[1],e=c<0?1:0,g=b[3],h=b[2],i=e?(a[13]-a[12]|0)<a[9]?1:0:e,f=1-i;if(f){PT(a[27]);var
j=0<=c?c:PU;axb(a,j,h);a[12]=g+a[12]|0;continue}return f}throw DR}}function
PX(a){try{var
b=axc(a);return b}catch(a){a=j(a);if(a===DR)return 0;throw a}}function
ow(a,b){q$(a,b);return PX(a)}function
PY(c,a,b){return ow(c,[0,a,[0,b],a])}var
PZ=[0,[0,-1,[0,-1,axd,0]],0];function
P0(a){a[1]=PZ;return 0}function
DT(a,c){var
d=a[1];if(d){var
e=d[1],b=e[2],f=b[1],g=d[2],h=b[2];if(e[1]<a[12])return P0(a);if(typeof
h!=="number")switch(h[0]){case
3:var
i=1-c,k=i?(b[1]=a[13]+f|0,a[1]=g,0):i;return k;case
1:case
2:var
j=c?(b[1]=a[13]+f|0,a[1]=g,0):c;return j}return 0}return 0}function
DU(a,c,b){q$(a,b);if(c)DT(a,1);a[1]=[0,[0,a[13],b],a[1]];return 0}function
k$(a,e,d){a[14]=a[14]+1|0;if(a[14]<a[15])return DU(a,0,[0,-a[13]|0,[3,e,d],0]);var
b=a[14]===a[15]?1:0;if(b){var
c=a[16];return PY(a,r(c),c)}return b}function
it(a,d){var
b=1<a[14]?1:0;if(b){if(a[14]<a[15]){q$(a,[0,0,1,0]);DT(a,1);DT(a,0)}a[14]=a[14]-1|0;var
c=0}else
var
c=b;return c}function
vr(a,b){if(a[21]){a[4]=[0,b,a[4]];d(a[25],b)}var
c=a[22];return c?q$(a,[0,0,[5,b],0]):c}function
DV(a,g){if(a[22])q$(a,[0,0,5,0]);var
c=a[21];if(c){var
b=a[4];if(b){var
f=b[2];d(a[26],b[1]);a[4]=f;return 0}var
e=0}else
var
e=c;return e}function
DW(b,a){b[21]=a;return 0}function
vs(b,a){b[22]=a;return 0}function
axe(a,b){return a[21]}function
axf(a,b){return a[22]}function
P1(b,a){DW(b,a);return vs(b,a)}function
DX(a,b){return[0,a[23],a[24],a[25],a[26]]}function
DY(b,a){var
c=a[4],d=a[3],e=a[2];b[23]=a[1];b[24]=e;b[25]=d;b[26]=c;return 0}function
P2(a){a[12]=1;a[13]=1;var
b=a[27];b[1]=0;b[2]=0;P0(a);a[2]=0;a[3]=0;a[4]=0;a[5]=0;a[10]=0;a[14]=0;a[9]=a[6];return k$(a,0,3)}function
ox(a,b){for(;;){if(1<a[14]){it(a,0);continue}a[13]=PU;PX(a);if(b)vq(a);return P2(a)}}function
oy(a,d,c){var
b=a[14]<a[15]?1:0;return b?PY(a,d,c):b}function
ra(c,b,a){return oy(c,b,a)}function
be(b,a){return ra(b,r(a),a)}function
P3(c,b){return be(c,a(i+b))}function
P4(b,a){return be(b,of(a))}function
P5(b,a){return be(b,CU(a))}function
eJ(b,a){return ra(b,1,c6(1,a))}function
P6(a,b){return k$(a,0,0)}function
P7(b,a){return k$(b,a,1)}function
P8(b,a){return k$(b,a,2)}function
P9(b,a){return k$(b,a,3)}function
la(b,a){return k$(b,a,4)}function
DZ(a,b){ox(a,1);return d(a[18],0)}function
iu(a,b){ox(a,0);return d(a[18],0)}function
vt(a,c){var
b=a[14]<a[15]?1:0;return b?ow(a,[0,0,3,0]):b}function
P_(a,c){var
b=a[14]<a[15]?1:0;return b?ow(a,[0,0,4,0]):b}function
rb(a,b,d){var
c=a[14]<a[15]?1:0;return c?DU(a,1,[0,-a[13]|0,[1,b,d],b]):c}function
lb(a,b){return rb(a,1,0)}function
D0(a,b){return rb(a,0,0)}function
P$(a,c){a[14]=a[14]+1|0;var
b=a[14]<a[15]?1:0;return b?ow(a,[0,0,[4,[0,[0,0]]],0]):b}function
Qa(a,e){var
b=1<a[14]?1:0;if(b)var
c=a[14]<a[15]?1:0,d=c?(ow(a,[0,0,2,0]),a[14]=a[14]-1|0,0):c;else
var
d=b;return d}function
D1(a,b,d){var
c=a[14]<a[15]?1:0;return c?DU(a,1,[0,-a[13]|0,[2,b,d],b]):c}function
Qb(a,b){return D1(a,0,0)}function
Qc(a,c){var
b=a[14]<a[15]?1:0;return b?ow(a,[0,0,0,0]):b}function
Qd(j,e,c,i){var
d=j,a=i;for(;;){var
f=d?d[1]:D0;if(a){var
g=a[2],h=a[1];if(g){b(e,c,h);b(f,c,0);var
d=[0,f],a=g;continue}return b(e,c,h)}return 0}}function
axg(d,c){var
f=r(c),b=[0,0],a=[0,0];function
e(e){be(d,al(c,b[1],a[1]-b[1]|0));a[1]++;b[1]=a[1];return 0}for(;;){if(a[1]!==f){var
g=u(c,a[1]);if(10===g){e(0);vt(d,0)}else
if(32===g){e(0);lb(d,0)}else
a[1]++;continue}var
h=b[1]!==f?1:0;return h?e(0):h}}function
Qe(c,a){var
b=1<a?1:0,d=b?(c[15]=a,0):b;return d}function
axh(a,b){return a[15]}function
Qf(a,b){return a[14]===a[15]?1:0}function
Qg(b,a){b[16]=a;return 0}function
axi(a,b){return a[16]}function
Qh(a){return a<alh?a:1000000009}function
D2(a,d){var
c=a[6]-d|0,b=1<=c?1:0;return b?(a[7]=Qh(c),a[8]=a[6]-a[7]|0,P2(a)):b}function
axj(a,b){return a[8]}function
Qi(a,b){var
c=1<=b?1:0;if(c){a[6]=Qh(b);var
d=a[8]<=a[6]?a[8]:cz(cz(a[6]-a[7]|0,a[6]/2|0),1);return D2(a,d)}return c}function
axk(a,b){return a[6]}function
vu(b,a){var
c=a[4],d=a[3],e=a[2];b[17]=a[1];b[18]=e;b[19]=d;b[20]=c;return 0}function
D3(a,b){return[0,a[17],a[18],a[19],a[20]]}function
D4(a,c,b){a[17]=c;a[18]=b;return 0}function
Qj(a,b){return[0,a[17],a[18]]}function
Qk(a,e,d,c,b){D4(a,e,d);a[19]=c;a[20]=b;return 0}function
Ql(a,b){return[0,a[17],a[18],a[19],a[20]]}function
Qm(a,b){return p(a[17],axl,0,1)}var
Qn=c6(80,32);function
Qo(b,d){var
a=d;for(;;){var
c=0<a?1:0;if(c){if(80<a){p(b[17],Qn,0,80);var
a=a-80|0;continue}return p(b[17],Qn,0,a)}return c}}function
Qp(a,b){a[17]=function(a,c,d){return CY(b,a,c,d)};a[18]=function(a){return dE(b)};a[19]=function(b){return Qm(a,b)};a[20]=function(b){return Qo(a,b)};return 0}function
axm(a){return o(axo,o(a,axn))}function
axp(a){return o(axr,o(a,axq))}function
axs(a){return 0}function
axt(a){return 0}function
D5(e,d){function
f(a){return 0}var
b=[0,0,0],c=[0,-1,axu,0];function
g(a){return 0}PS(c,b);var
a=[0,[0,[0,1,c],PZ],0,0,0,0,78,10,68,78,0,1,1,1,1,fD,axv,e,d,g,f,0,0,axm,axp,axs,axt,b];a[19]=function(b){return Qm(a,b)};a[20]=function(b){return Qo(a,b)};return a}function
D6(a){function
b(b){return dE(a)}return D5(function(b,c,d){return CY(a,b,c,d)},b)}function
jM(a){function
b(a){return 0}return D5(function(b,c,d){return vf(a,b,c,d)},b)}var
vv=cH(n6),at=D6(ek),g_=D6(eG),oz=jM(vv);function
vw(b){ox(oz,0);var
a=cA(vv);Do(vv);return a}function
Qq(a,b){ox(b,0);var
c=cA(a);Do(a);return c}function
axw(a){return P6(at,a)}function
axx(a){return P7(at,a)}function
axy(a){return P8(at,a)}function
axz(a){return P9(at,a)}function
axA(a){return la(at,a)}function
axB(a){return it(at,a)}function
axC(a){return vr(at,a)}function
axD(a){return DV(at,a)}function
axE(a,b){return ra(at,a,b)}function
axF(a){return be(at,a)}function
axG(a){return P3(at,a)}function
axH(a){return P4(at,a)}function
axI(a){return eJ(at,a)}function
axJ(a){return P5(at,a)}function
axK(a,b){return rb(at,a,b)}function
axL(a){return D0(at,a)}function
axM(a){return lb(at,a)}function
axN(a){return vt(at,a)}function
Qr(a){return iu(at,a)}function
axO(a){return DZ(at,a)}function
axP(a){return P_(at,a)}function
axQ(a){return P$(at,a)}function
axR(a){return Qa(at,a)}function
axS(a,b){return D1(at,a,b)}function
axT(a){return Qc(at,a)}function
axU(a){return Qb(at,a)}function
axV(a){return Qi(at,a)}function
axW(a){return at[6]}function
axX(a){return D2(at,a)}function
axY(a){return at[8]}function
axZ(a){return Qe(at,a)}function
ax0(a){return at[15]}function
ax1(a){return Qf(at,a)}function
ax2(a){return Qg(at,a)}function
ax3(a){return at[16]}function
ax4(a){return Qp(at,a)}function
ax5(a){return vu(at,a)}function
ax6(a){return D3(at,a)}function
ax7(a,b){return D4(at,a,b)}function
ax8(a){return Qj(at,a)}function
ax9(a,b,c,d){return Qk(at,a,b,c,d)}function
ax_(a){return Ql(at,a)}function
ax$(a){return DY(at,a)}function
aya(a){return DX(at,a)}function
ayb(a){return DW(at,a)}function
ayc(a){return at[21]}function
Qs(a){return vs(at,a)}function
ayd(a){return at[22]}function
aye(a){return P1(at,a)}function
vx(f,e){var
a=cH(16),c=jM(a);b(f,c,e);iu(c,0);var
d=a[2];return 2<=d?O1(a,1,d-2|0):cA(a)}function
Qt(a,b){if(typeof
b==="number")switch(b){case
0:return it(a,0);case
1:return DV(a,0);case
2:return iu(a,0);case
3:return vt(a,0);case
4:return DZ(a,0);case
5:return eJ(a,64);default:return eJ(a,37)}else
switch(b[0]){case
0:return rb(a,b[2],b[3]);case
1:return 0;default:var
c=b[1];eJ(a,64);return eJ(a,c)}}function
eK(b,a){if(typeof
a==="number")return 0;else
switch(a[0]){case
0:var
H=a[2];eK(b,a[1]);return Qt(b,H);case
1:var
m=a[2],v=a[1];if(0===m[0]){var
I=m[1];eK(b,v);return vr(b,vx(eK,I))}var
J=m[1];eK(b,v);var
w=vi(vx(eK,J));return k$(b,w[1],w[2]);case
2:var
e=a[1];if(typeof
e==="number")var
i=1;else
if(0===e[0]){var
n=e[2];if(typeof
n==="number")var
r=1;else
if(1===n[0])var
B=a[2],A=n[2],z=e[1],c=0,i=0,r=0;else
var
r=1;if(r)var
i=1}else
var
i=1;if(i)var
y=a[2],x=e,c=2;break;case
3:var
f=a[1];if(typeof
f==="number")var
j=1;else
if(0===f[0]){var
o=f[2];if(typeof
o==="number")var
s=1;else
if(1===o[0])var
G=a[2],F=o[2],E=f[1],c=1,j=0,s=0;else
var
s=1;if(s)var
j=1}else
var
j=1;if(j)var
D=a[2],C=f,c=3;break;case
4:var
g=a[1];if(typeof
g==="number")var
k=1;else
if(0===g[0]){var
p=g[2];if(typeof
p==="number")var
t=1;else
if(1===p[0])var
B=a[2],A=p[2],z=g[1],c=0,k=0,t=0;else
var
t=1;if(t)var
k=1}else
var
k=1;if(k)var
y=a[2],x=g,c=2;break;case
5:var
h=a[1];if(typeof
h==="number")var
l=1;else
if(0===h[0]){var
q=h[2];if(typeof
q==="number")var
u=1;else
if(1===q[0])var
G=a[2],F=q[2],E=h[1],c=1,l=0,u=0;else
var
u=1;if(u)var
l=1}else
var
l=1;if(l)var
D=a[2],C=h,c=3;break;case
6:var
K=a[2];eK(b,a[1]);return d(K,b);case
7:eK(b,a[1]);return iu(b,0);default:var
L=a[2];eK(b,a[1]);return S(L)}switch(c){case
0:eK(b,z);return oy(b,A,B);case
1:eK(b,E);return oy(b,F,c6(1,G));case
2:eK(b,x);return be(b,y);default:eK(b,C);return eJ(b,D)}}function
e$(b,a){if(typeof
a==="number")return 0;else
switch(a[0]){case
0:var
J=a[2];e$(b,a[1]);return Qt(b,J);case
1:var
n=a[2],x=a[1];if(0===n[0]){var
K=n[1];e$(b,x);return vr(b,vx(e$,K))}var
L=n[1];e$(b,x);var
y=vi(vx(e$,L));return k$(b,y[1],y[2]);case
2:var
e=a[1];if(typeof
e==="number")var
j=1;else
if(0===e[0]){var
o=e[2];if(typeof
o==="number")var
t=1;else
if(1===o[0])var
D=a[2],C=o[2],B=e[1],c=0,j=0,t=0;else
var
t=1;if(t)var
j=1}else
var
j=1;if(j)var
A=a[2],z=e,c=2;break;case
3:var
f=a[1];if(typeof
f==="number")var
k=1;else
if(0===f[0]){var
p=f[2];if(typeof
p==="number")var
u=1;else
if(1===p[0])var
I=a[2],H=p[2],G=f[1],c=1,k=0,u=0;else
var
u=1;if(u)var
k=1}else
var
k=1;if(k)var
F=a[2],E=f,c=3;break;case
4:var
g=a[1];if(typeof
g==="number")var
l=1;else
if(0===g[0]){var
q=g[2];if(typeof
q==="number")var
v=1;else
if(1===q[0])var
D=a[2],C=q[2],B=g[1],c=0,l=0,v=0;else
var
v=1;if(v)var
l=1}else
var
l=1;if(l)var
A=a[2],z=g,c=2;break;case
5:var
h=a[1];if(typeof
h==="number")var
m=1;else
if(0===h[0]){var
r=h[2];if(typeof
r==="number")var
w=1;else
if(1===r[0])var
I=a[2],H=r[2],G=h[1],c=1,m=0,w=0;else
var
w=1;if(w)var
m=1}else
var
m=1;if(m)var
F=a[2],E=h,c=3;break;case
6:var
i=a[1];if(typeof
i!=="number"&&0===i[0]){var
s=i[2];if(typeof
s!=="number"&&1===s[0]){var
N=a[2],O=s[2];e$(b,i[1]);return oy(b,O,d(N,0))}}var
M=a[2];e$(b,i);return be(b,d(M,0));case
7:e$(b,a[1]);return iu(b,0);default:var
P=a[2];e$(b,a[1]);return S(P)}switch(c){case
0:e$(b,B);return oy(b,C,D);case
1:e$(b,G);return oy(b,H,c6(1,I));case
2:e$(b,z);return be(b,A);default:e$(b,E);return eJ(b,F)}}function
D7(c,b,a){var
e=a[1],f=0;return aK(function(a,b){eK(a,b);return d(c,a)},b,f,e)}function
Qu(c,a,b){var
e=b[1],f=0;return aK(function(e,b){return d(c,a)},a,f,e)}function
e(b,a){return D7(function(a){return 0},b,a)}function
Qv(b,a){return Qu(function(a){return 0},b,a)}function
ayf(a){return e(at,a)}function
ayg(a){return e(g_,a)}function
vy(e,c){var
f=c[1],a=cH(n6),b=jM(a);return aK(function(f,c){e$(b,c);return d(e,Qq(a,b))},0,0,f)}function
D8(a){return vy(function(a){return a},a)}function
rc(a){var
c=a[1],b=cH(n6),d=jM(b);return aK(function(a,c){eK(a,c);ox(a,0);return Qq(b,a)},d,0,c)}function
ayh(b,a){var
c=a[1];function
d(a,b){eK(a,b);return ox(a,0)}return aK(d,jM(b),0,c)}N7(Qr);aF(MZ,[0,axA,axB,axF,axE,axG,axH,axI,axJ,axM,axL,axK,Qr,axO,axN,axP,axV,axW,axX,axY,axZ,ax0,ax1,axw,axx,axy,axz,axQ,axR,axS,axT,axU,ax2,ax3,axC,axD,aye,ayb,Qs,ayc,ayd,ax4,ax7,ax8,ax5,ax6,ax$,aya,D6,at,g_,jM,vv,oz,vw,D5,P6,P7,P8,P9,la,it,vr,DV,be,ra,P3,P4,eJ,P5,rb,D0,lb,vt,iu,DZ,P_,P$,Qa,D1,Qc,Qb,P1,DW,vs,axe,axf,Qi,axk,D2,axj,Qe,axh,Qf,Qg,axi,Qp,D4,Qj,DY,DX,vu,D3,Qd,axg,e,ayf,ayg,D8,rc,Qv,D7,Qu,vy,ayh,vy,ax9,ax_,Qk,Ql],uk);function
ds(a){return O(a.slice())}var
ayi=[0,1,1,1,3,16],ayj=2,ayk=0;function
Qw(c){var
a=[0,0],d=r(c)-1|0,e=0;if(!(d<0)){var
b=e;for(;;){var
g=u(c,b);a[1]=(ue*a[1]|0)+g|0;var
h=b+1|0;if(d!==b){var
b=h;continue}break}}a[1]=a[1]&jc;var
f=kS<a[1]?a[1]-qr|0:a[1];return f}var
iv=g7([0,Q]),lc=g7([0,Q]),jN=g7([0,gg]),Qx=[0,0],Qy=CK(0,0),ayl=[0,0,[0,ayk],lc[1],jN[1],0,0,iv[1],0];function
Qz(a){return 2<a?Qz((a+1|0)/2|0)*2|0:a}function
QA(d){Qx[1]++;var
b=d.length-1,c=X((b*2|0)+2|0,Qy);n(c,0)[1]=b;var
g=((Qz(b)*32|0)/8|0)-1|0;n(c,1)[2]=g;var
e=b-1|0,h=0;if(!(e<0)){var
a=h;for(;;){var
f=(a*2|0)+3|0,i=n(d,a)[a+1];n(c,f)[f+1]=i;var
j=a+1|0;if(e!==a){var
a=j;continue}break}}return[0,ayj,c,lc[1],jN[1],0,0,iv[1],0]}function
D9(a,b){var
c=a[2].length-1,d=c<b?1:0;if(d){var
e=X(b,Qy);gk(a[2],0,e,0,c);a[2]=e;var
f=0}else
var
f=d;return f}var
QB=[0,0],D_=[0,0];function
vz(a){var
b=a[2].length-1;D9(a,b+1|0);return b}function
oA(a,d){try{var
e=b(lc[22],d,a[3]);return e}catch(b){b=j(b);if(b===l){var
c=vz(a);a[3]=p(lc[4],d,c,a[3]);a[4]=p(jN[4],c,1,a[4]);return c}throw b}}function
mE(b,a){return em(function(a){return oA(b,a)},a)}function
QC(c,a,d){QB[1]++;return b(jN[22],a,c[4])?(D9(c,a+1|0),n(c[2],a)[a+1]=d):(c[6]=[0,[0,a,d],c[6]],0)}function
QD(c,b){try{var
a=dr(b,c[6]);return a}catch(a){a=j(a);if(a===l)return n(c[2],b)[b+1];throw a}}function
D$(a){return a===0?0:jA(a)}function
QE(a,n,m,k){var
f=D$(n),h=D$(m),i=D$(k),e=g(function(b){return oA(a,b)},h),o=g(function(b){return oA(a,b)},i);a[5]=[0,[0,a[3],a[4],a[6],a[7],e,f],a[5]];var
q=iv[1],r=a[7];function
s(b,c,a){return aY(b,f)?p(iv[4],b,c,a):a}a[7]=p(iv[11],s,r,q);var
c=[0,lc[1]],d=[0,jN[1]];aC(function(g,e){c[1]=p(lc[4],g,e,c[1]);var
h=d[1];try{var
i=b(jN[22],e,a[4]),f=i}catch(a){a=j(a);if(a!==l)throw a;var
f=1}d[1]=p(jN[4],e,f,h);return 0},i,o);aC(function(b,a){c[1]=p(lc[4],b,a,c[1]);d[1]=p(jN[4],a,0,d[1]);return 0},h,e);a[3]=c[1];a[4]=d[1];var
t=0,u=a[6];a[6]=R(function(b,a){return aY(b[1],e)?a:[0,b,a]},u,t);return 0}function
QF(a){var
c=cQ(a[5]),d=c[6],e=c[5],f=c[4],g=c[3],h=c[2],i=c[1];a[5]=ik(a[5]);a[7]=G(function(d,c){var
e=b(iv[22],c,a[7]);return p(iv[4],c,e,d)},f,d);a[3]=i;a[4]=h;var
j=a[6];a[6]=R(function(b,a){return aY(b[1],e)?a:[0,b,a]},j,g);return 0}function
aym(a){var
b=a[1];a[1]=b+1|0;return b}function
mF(a,c){try{var
e=b(iv[22],c,a[7]);return e}catch(b){b=j(b);if(b===l){var
d=aym(a);if(f(c,ayn))a[7]=p(iv[4],c,d,a[7]);return d}throw b}}function
Ea(a){return E(a,0)?[0]:a}function
jO(f,l,e){var
g=Ea(l),c=g.length-1,h=e.length-1,d=X(c+h|0,0),i=c-1|0,m=0;if(!(i<0)){var
a=m;for(;;){var
r=oA(f,n(g,a)[a+1]);n(d,a)[a+1]=r;var
s=a+1|0;if(i!==a){var
a=s;continue}break}}var
j=h-1|0,o=0;if(!(j<0)){var
b=o;for(;;){var
k=b+c|0,p=mF(f,n(e,b)[b+1]);n(d,k)[k+1]=p;var
q=b+1|0;if(j!==b){var
b=q;continue}break}}return d}function
Eb(c,a){try{var
d=b(iv[22],a,c[7]);return d}catch(a){a=j(a);if(a===l)throw[0,h,ayo];throw a}}function
ayp(b,a){return em(function(a){return Eb(b,a)},a)}function
ayq(a,b){a[8]=[0,b,a[8]];return 0}function
g$(b){if(b===0)return QA([0]);var
a=QA(em(Qw,b));C5(function(d,c){var
b=(d*2|0)+2|0;a[3]=p(lc[4],c,b,a[3]);a[4]=p(jN[4],b,1,a[4]);return 0},b);return a}function
ha(a){D_[1]=(D_[1]+a[1]|0)-1|0;a[8]=v(a[8]);return D9(a,3+((n(a[2],1)[2]*16|0)/32|0)|0)}function
fI(a,f,i,e,c,h){var
g=c[2],j=c[4];QE(a,f,i,e);var
k=h?b(g,a,j):d(g,a);QF(a);var
l=0,m=Ea(e),n=[0,em(function(b){return QD(a,oA(a,b))},m),l],o=Ea(f);return Nm([0,[0,k],[0,em(function(b){return Eb(a,b)},o),n]])}function
rd(e,a){var
b=g$(e),c=d(a,b);ha(b);return[0,d(c,0),a,c,0]}function
ayr(e,b,a){var
c=g$(e),f=d(b,c);ha(c);a[2]=b;a[1]=f;return 0}function
ays(b){function
a(a){throw[0,DL,b]}return[0,a,a,a,0]}function
QG(a){var
b=CK(I,a[1]);b[1]=a[2];return O(b)}function
eL(b,a){if(b)return b;var
c=CK(I,a[1]);c[1]=a[2];return O(c)}function
QH(c,b){var
a=b;for(;;){if(a){var
e=a[2];d(a[1],c);var
a=e;continue}return 0}}function
QI(d,c){var
a=c[8],b=0!==a?1:0;return b?QH(d,a):b}function
fJ(d,a,c){if(d)return a;var
b=c[8];if(0!==b)QH(a,b);return a}function
ayt(b,a){if(b)return b;var
c=QG(a);QI(c,a);return c}function
QJ(c,f,e){var
d=[0,0,0,0],b=[0,d],g=0;if(!(c<0)){var
a=g;for(;;){var
h=b[1];b[1]=[0,n(f,a)[a+1],h,0];var
i=a+1|0;if(c!==a){var
a=i;continue}break}}e[2]=b[1];return d}function
ayu(e,c){if(0===e[2])return QJ(c.length-1-1|0,c,e);var
a=c.length-1-1|0,d=e[2];a:for(;;){if(0<=a){var
f=n(c,a)[a+1],b=d;for(;;){if(b[1]===f){var
a=a-1|0,d=b[2];continue a}if(0===b[3]){var
g=[0,f,0,0];b[3]=g;return QJ(a-1|0,c,g)}var
b=b[3];continue}}return d}}function
vA(a){var
c=vz(a);if(0===(c%2|0))var
d=0;else
if((2+((n(a[2],1)[2]*16|0)/32|0)|0)<c)var
d=0;else
var
b=vz(a),d=1;if(!d)var
b=c;n(a[2],b)[b+1]=0;return b}function
eM(e,h){var
f=[0,0],an=h.length-1;for(;;){if(f[1]<an){var
i=f[1],ao=n(h,i)[i+1],a=function(b){f[1]++;var
a=f[1];return n(h,a)[a+1]},g=a(0);if(typeof
g==="number")switch(g){case
0:var
j=a(0),c=function(a){return function(b){return a}}(j);break;case
1:var
k=a(0),c=function(b){return function(a){return a[b+1]}}(k);break;case
2:var
l=a(0),m=a(0),c=function(b,c){return function(a){return a[b+1][c+1]}}(l,m);break;case
3:var
o=a(0),c=function(b){return function(a){return d(a[1][b+1],a)}}(o);break;case
4:var
p=a(0),c=function(c){return function(b,a){b[c+1]=a;return 0}}(p);break;case
5:var
q=a(0),r=a(0),c=function(a,b){return function(c){return d(a,b)}}(q,r);break;case
6:var
s=a(0),t=a(0),c=function(b,c){return function(a){return d(b,a[c+1])}}(s,t);break;case
7:var
u=a(0),v=a(0),w=a(0),c=function(b,c,e){return function(a){return d(b,a[c+1][e+1])}}(u,v,w);break;case
8:var
x=a(0),y=a(0),c=function(b,c){return function(a){return d(b,d(a[1][c+1],a))}}(x,y);break;case
9:var
z=a(0),A=a(0),C=a(0),c=function(a,c,d){return function(e){return b(a,c,d)}}(z,A,C);break;case
10:var
D=a(0),E=a(0),F=a(0),c=function(c,d,e){return function(a){return b(c,d,a[e+1])}}(D,E,F);break;case
11:var
G=a(0),H=a(0),I=a(0),J=a(0),c=function(c,d,e,f){return function(a){return b(c,d,a[e+1][f+1])}}(G,H,I,J);break;case
12:var
K=a(0),L=a(0),M=a(0),c=function(c,e,f){return function(a){return b(c,e,d(a[1][f+1],a))}}(K,L,M);break;case
13:var
N=a(0),O=a(0),P=a(0),c=function(c,d,e){return function(a){return b(c,a[d+1],e)}}(N,O,P);break;case
14:var
Q=a(0),R=a(0),S=a(0),T=a(0),c=function(c,d,e,f){return function(a){return b(c,a[d+1][e+1],f)}}(Q,R,S,T);break;case
15:var
U=a(0),V=a(0),W=a(0),c=function(c,e,f){return function(a){return b(c,d(a[1][e+1],a),f)}}(U,V,W);break;case
16:var
X=a(0),Y=a(0),c=function(c,d){return function(a){return b(a[1][c+1],a,d)}}(X,Y);break;case
17:var
Z=a(0),_=a(0),c=function(c,d){return function(a){return b(a[1][c+1],a,a[d+1])}}(Z,_);break;case
18:var
$=a(0),aa=a(0),ab=a(0),c=function(c,d,e){return function(a){return b(a[1][c+1],a,a[d+1][e+1])}}($,aa,ab);break;case
19:var
ac=a(0),ad=a(0),c=function(e,f){return function(a){var
c=d(a[1][f+1],a);return b(a[1][e+1],a,c)}}(ac,ad);break;case
20:var
ae=a(0),af=a(0);vA(e);var
c=function(b,a){return function(c){return d(B(a,b,0),a)}}(ae,af);break;case
21:var
ag=a(0),ah=a(0);vA(e);var
c=function(c,e){return function(b){var
a=b[e+1];return d(B(a,c,0),a)}}(ag,ah);break;case
22:var
ai=a(0),aj=a(0),ak=a(0);vA(e);var
c=function(c,e,f){return function(b){var
a=b[e+1][f+1];return d(B(a,c,0),a)}}(ai,aj,ak);break;default:var
al=a(0),am=a(0);vA(e);var
c=function(c,e){return function(a){var
b=d(a[1][e+1],a);return d(B(b,c,0),b)}}(al,am)}else
var
c=g;QC(e,ao,c);f[1]++;continue}return 0}}aF(acj,[0,Qw,vz,mF,jO,Eb,ayp,oA,mE,QD,QC,eM,QE,QF,ayq,ayl,g$,ha,fI,rd,ayr,ays,ds,QG,eL,QI,fJ,ayt,ayu,ayi,function(a){return[0,Qx[1],QB[1],D_[1]]}],AU);function
fK(a){return a.length-1-1|0}function
ayv(d,a,c,f){if(0<=a)if(0<=c)if(!(fK(d)<(a+c|0))){var
e=(a+c|0)-1|0;if(!(e<a)){var
b=a;for(;;){ii(d,b,f);var
g=b+1|0;if(e!==b){var
b=g;continue}break}}return 0}throw[0,k1,ayw]}aF(Ls,[0,qP,fK,ii,jz,qQ,mt,ayv,qO,function(c){var
m=qP(0);function
j(b,a){return jx(a&jc,b[1].length-1)}var
e=7;function
u(a){var
b=7<=a?a:7,c=hV<b?ol:b;return[0,X(c,m),X(c,[0]),e,0,0]}function
h(b){var
c=b[1].length-1-1|0,d=0;if(!(c<0)){var
a=d;for(;;){n(b[1],a)[a+1]=m;n(b[2],a)[a+1]=[0];var
f=a+1|0;if(c!==a){var
a=f;continue}break}}b[3]=e;b[4]=0;return 0}function
i(f,c,a){var
d=c[1],g=0;return C6(function(e,h){var
a=g,c=h;for(;;){if(fK(e)<=a)return c;var
d=jz(e,a);if(d){var
a=a+1|0,c=b(f,d[1],c);continue}var
a=a+1|0;continue}},d,a)}function
k(e,a){var
b=a[1],f=0;return k4(function(c){var
a=f;for(;;){if(fK(c)<=a)return 0;var
b=jz(c,a);if(b){d(e,b[1]);var
a=a+1|0;continue}var
a=a+1|0;continue}},b)}function
v(e,c,d){var
a=e,b=d;for(;;){if(fK(c)<=a)return b;var
f=mt(c,a)?1:0,a=a+1|0,b=b+f|0;continue}}function
f(a){var
b=0,c=a[1],d=0;return C6(function(a,b){return v(d,a,b)},c,b)}function
q(a,G,F,E,f){var
k=n(a[1],f)[f+1],H=n(a[2],f)[f+1],c=fK(k),h=0;for(;;){if(c<=h){var
l=c5(((3*c|0)/2|0)+3|0,4194302);if(l<=c)dq(ayx);var
r=qP(l),s=X(l,0);qO(k,0,r,0,c);gk(H,0,s,0,c);p(G,r,c,F);n(s,c)[c+1]=E;n(a[1],f)[f+1]=r;n(a[2],f)[f+1]=s;var
I=c<=a[3]?1:0,O=I?a[3]<l?1:0:I;if(O){a[4]=a[4]+1|0;var
t=0;for(;;){var
x=a[5],d=n(a[1],x)[x+1],y=a[5],o=n(a[2],y)[y+1],z=fK(d),i=(((z-3|0)*2|0)+2|0)/3|0;if(v(0,d,0)<=i){var
e=0,b=fK(d)-1|0;for(;;){if(i<=b){if(mt(d,e)){var
e=e+1|0;continue}if(mt(d,b)){qO(d,b,d,e,1);var
M=n(o,b)[b+1];n(o,e)[e+1]=M;var
e=e+1|0,b=b-1|0;continue}var
b=b-1|0;continue}if(0===i){var
A=a[5];n(a[1],A)[A+1]=m;var
B=a[5];n(a[2],B)[B+1]=[0]}else{NL(d,i+1|0);NL(o,i)}var
C=a[3]<z?1:0,N=C?i<=a[3]?1:0:C;if(N)a[4]=a[4]-1|0;break}}a[5]=jx(a[5]+1|0,a[1].length-1);var
P=t+1|0;if(2!==t){var
t=P;continue}break}}var
J=((a[1].length-1)/2|0)<a[4]?1:0;if(J){var
D=a[1].length-1,w=c5(((3*D|0)/2|0)+3|0,ol);if(D<w){var
g=u(w),K=a[1],L=0;C5(function(e,c){var
b=L;for(;;){if(fK(c)<=b)return 0;if(0===mt(c,b)){var
b=b+1|0;continue}var
f=n(a[2],e)[e+1],h=function(d){return function(b,a,e){return qO(c,d,b,a,1)}}(b),d=n(f,b)[b+1];q(g,h,0,d,j(g,d));var
b=b+1|0;continue}},K);a[1]=g[1];a[2]=g[2];a[3]=g[3];a[4]=g[4];a[5]=jx(a[5],g[1].length-1);return 0}a[3]=fD;a[4]=0;return 0}return J}if(mt(k,h)){var
h=h+1|0;continue}p(G,k,h,F);return n(H,h)[h+1]=E}}function
o(b,a){var
e=d(c[2],a);return q(b,ii,[0,a],e,j(b,e))}function
g(f,i,m){var
g=d(c[2],i),e=j(f,g),h=n(f[1],e)[e+1],o=n(f[2],e)[e+1],a=0,p=fK(h);for(;;){if(p<=a)return b(m,g,e);if(g===n(o,a)[a+1]){var
k=qQ(h,a);if(k)if(b(c[1],k[1],i)){var
l=jz(h,a);if(l)return l[1];var
a=a+1|0;continue}var
a=a+1|0;continue}var
a=a+1|0;continue}}function
r(b,a){return g(b,a,function(d,c){q(b,ii,[0,a],d,c);return a})}function
s(b,a){return g(b,a,function(b,a){throw l})}function
a(f,h,m,l){var
i=d(c[2],h),e=j(f,i),g=n(f[1],e)[e+1],o=n(f[2],e)[e+1],a=0,p=fK(g);for(;;){if(p<=a)return l;if(i===n(o,a)[a+1]){var
k=qQ(g,a);if(k)if(b(c[1],k[1],h))return b(m,g,a);var
a=a+1|0;continue}var
a=a+1|0;continue}}function
t(c,b){var
d=0;return a(c,b,function(b,a){return ii(b,a,0)},d)}function
w(c,b){var
d=0;return a(c,b,function(b,a){return 1},d)}function
x(f,i){var
k=d(c[2],i),e=j(f,k),g=n(f[1],e)[e+1],o=n(f[2],e)[e+1],a=0,h=0,p=fK(g);for(;;){if(p<=a)return h;if(k===n(o,a)[a+1]){var
l=qQ(g,a);if(l)if(b(c[1],l[1],i)){var
m=jz(g,a);if(m){var
a=a+1|0,h=[0,m[1],h];continue}var
a=a+1|0;continue}var
a=a+1|0;continue}var
a=a+1|0;continue}}return[0,u,h,r,o,t,s,x,w,k,i,f,function(b){var
c=b[1].length-1,a=em(fK,b[1]);C8(cp,a);var
g=0,d=c-1|0,h=qV(function(b,a){return b+a|0},g,a),e=c/2|0,i=n(a,d)[d+1],j=n(a,e)[e+1],k=n(a,0)[1];return[0,c,f(b),h,k,j,i]}]}],M8);function
Ec(e,g,a){if(A(a,ayy))return g;var
c=r(a)-1|0;for(;;){if(0<=c){if(b(e,a,c)){var
c=c-1|0;continue}var
f=c+1|0,d=c;for(;;){if(0<=d){if(b(e,a,d))return al(a,d+1|0,(f-d|0)-1|0);var
d=d-1|0;continue}return al(a,0,f)}}return al(a,0,1)}}function
Ed(f,g,a){if(A(a,ayz))return g;var
c=r(a)-1|0;for(;;){if(0<=c){if(b(f,a,c)){var
c=c-1|0;continue}var
d=c;for(;;){if(0<=d){if(b(f,a,d)){var
e=d;for(;;){if(0<=e){if(b(f,a,e)){var
e=e-1|0;continue}return al(a,0,e+1|0)}return al(a,0,1)}}var
d=d-1|0;continue}return g}}return al(a,0,1)}}function
Ef(b,a){return 47===u(b,a)?1:0}function
QK(a){var
b=r(a)<1?1:0,c=b||(47!==u(a,0)?1:0);return c}function
ayC(a){var
c=QK(a);if(c){var
e=r(a)<2?1:0,d=e||f(al(a,0,2),ayE);if(d)var
g=r(a)<3?1:0,b=g||f(al(a,0,3),ayD);else
var
b=d}else
var
b=c;return b}function
ayF(b,a){var
c=r(a)<=r(b)?1:0,d=c?A(al(b,r(b)-r(a)|0,r(a)),a):c;return d}try{var
b8P=ih(b8O),Eg=b8P}catch(a){a=j(a);if(a!==l)throw a;var
Eg=ayG}function
QL(c){var
d=r(c),a=cH(d+20|0);as(a,39);var
e=d-1|0,f=0;if(!(e<0)){var
b=f;for(;;){if(39===u(c,b))an(a,ayH);else
as(a,u(c,b));var
g=b+1|0;if(e!==b){var
b=g;continue}break}}as(a,39);return cA(a)}function
ayI(a){return Ec(Ef,Ee,a)}function
ayJ(a){return Ed(Ef,Ee,a)}function
oB(e,d){var
a=u(e,d),b=47===a?1:0;if(b)var
c=b;else
var
f=92===a?1:0,c=f||(58===a?1:0);return c}function
Ei(a){var
e=r(a)<1?1:0,c=e||(47!==u(a,0)?1:0);if(c){var
f=r(a)<1?1:0,d=f||(92!==u(a,0)?1:0);if(d)var
g=r(a)<2?1:0,b=g||(58!==u(a,1)?1:0);else
var
b=d}else
var
b=c;return b}function
QM(a){var
c=Ei(a);if(c){var
h=r(a)<2?1:0,d=h||f(al(a,0,2),ayP);if(d){var
i=r(a)<2?1:0,e=i||f(al(a,0,2),ayO);if(e){var
j=r(a)<3?1:0,g=j||f(al(a,0,3),ayN);if(g)var
k=r(a)<3?1:0,b=k||f(al(a,0,3),ayM);else
var
b=g}else
var
b=e}else
var
b=d}else
var
b=c;return b}function
QN(b,a){var
c=r(a)<=r(b)?1:0;if(c)var
e=al(b,r(b)-r(a)|0,r(a)),f=va(a),d=A(va(e),f);else
var
d=c;return d}try{var
b8N=ih(b8M),QO=b8N}catch(a){a=j(a);if(a!==l)throw a;var
QO=ayQ}function
ayR(f){var
g=r(f),b=cH(g+20|0);as(b,34);function
h(c){var
d=1;if(!(c<1)){var
a=d;for(;;){as(b,92);var
e=a+1|0;if(c!==a){var
a=e;continue}break}}return 0}function
d(c,j){var
a=j;for(;;){if(a===g)return as(b,34);var
d=u(f,a);if(34===d){var
h=0;return c<50?e(c+1|0,h,a):aa(e,[0,h,a])}if(92===d){var
i=0;return c<50?e(c+1|0,i,a):aa(e,[0,i,a])}as(b,d);var
a=a+1|0;continue}}function
e(e,l,k){var
c=l,a=k;for(;;){if(a===g){as(b,34);return h(c)}var
i=u(f,a);if(34===i){h((2*c|0)+1|0);as(b,34);var
j=a+1|0;return e<50?d(e+1|0,j):aa(d,[0,j])}if(92===i){var
c=c+1|0,a=a+1|0;continue}h(c);return e<50?d(e+1|0,a):aa(d,[0,a])}}(function(a){return c4(d(0,a))}(0));return cA(b)}function
QP(a){var
c=2<=r(a)?1:0;if(c)var
b=u(a,0),g=91<=b?25<(b+Ad|0)>>>0?0:1:65<=b?1:0,d=g?1:0,e=d?58===u(a,1)?1:0:d;else
var
e=c;if(e){var
f=al(a,2,r(a)-2|0);return[0,al(a,0,2),f]}return[0,ayS,a]}function
ayT(b){var
a=QP(b),c=a[1];return o(c,Ed(oB,Eh,a[2]))}function
ayU(a){return Ec(oB,Eh,QP(a)[2])}function
ayX(a){return Ec(oB,Ej,a)}function
ayY(a){return Ed(oB,Ej,a)}if(f(gl,ayZ))if(f(gl,ay0)){if(f(gl,ay1))throw[0,h,ay2];var
fL=[0,Eh,ayK,ayL,oB,Ei,QM,QN,QO,ayR,ayU,ayT]}else
var
fL=[0,Ee,ayA,ayB,Ef,QK,ayC,ayF,Eg,QL,ayI,ayJ];else
var
fL=[0,Ej,ayV,ayW,oB,Ei,QM,QN,Eg,QL,ayX,ayY];var
re=fL[11],rf=fL[10],QQ=fL[8],QR=fL[4],Ek=fL[3],ay3=fL[9],ay4=fL[7],ay5=fL[6],ay6=fL[5],ay7=fL[2],ay8=fL[1];function
mG(a,b){var
c=r(a);if(0!==c)if(!QR(a,c-1|0))return o(a,o(Ek,b));return o(a,b)}function
ay9(a,c){var
b=r(a)-r(c)|0;return 0<=b?al(a,0,b):S(ay_)}function
El(b){var
a=r(b)-1|0;for(;;){if(0<=a)if(!QR(b,a)){if(46===u(b,a))return al(b,0,a);var
a=a-1|0;continue}return S(ay$)}}var
vB=[z,function(a){return d(q_[2],0)}];function
QS(e,c,b){var
a=c3(vB),f=dk===a?vB[1]:z===a?gm(vB):vB,g=d(q_[4],f)&aX;return mG(e,p(ag(aza),c,g,b))}var
vC=[0,QQ];function
azb(a){vC[1]=a;return 0}function
azc(a){return vC[1]}function
azd(a,d,c){var
e=a?a[1]:vC[1];return function(f){var
b=f;for(;;){var
a=QS(e,d,c);try{NT(CR(a,aze,aie));return a}catch(a){a=j(a);if(a[1]===rg){if(hI<=b)throw a;var
b=b+1|0;continue}throw a}}}(0)}aF(alq,[0,ay8,ay7,Ek,mG,ay6,ay5,ay4,ay9,El,rf,re,azd,function(b,a,d,c){var
e=b?b[1]:azf,f=a?a[1]:vC[1];return function(g){var
b=g;for(;;){var
a=QS(f,d,c);try{var
h=[0,a,u2([0,1,[0,3,[0,5,e]]],aie,a)];return h}catch(a){a=j(a);if(a[1]===rg){if(hI<=b)throw a;var
b=b+1|0;continue}throw a}}}(0)},azc,azb,QQ,ay3],Nd);try{var
b8L=ih(b8K),Em=b8L}catch(a){a=j(a);if(a!==l)throw a;try{var
b8J=ih(b8I),QU=b8J}catch(a){a=j(a);if(a!==l)throw a;var
QU=QT}var
Em=QU}var
oD=[0,0],Rb=[0,azk],azl=A9,Rc=z,azm=dR,azn=dR,Rh=0,Ri=0;if(f(gl,azo))if(f(gl,azp))if(f(gl,azq))var
vD=azr,zq=1;else
var
zq=0;else
var
vD=b8H,zq=1;else
var
zq=0;if(!zq)var
vD=b8G;var
Rp=0;aF(acU,[0,rh,Em,QV,QW,QX,QY,QZ,Q0,Q1,azh,azi,azj,Q2,azg,Q3,oD,Rb,Q4,oC,Q5,Q6,Q7,Q8,Q_,Q9,Q$,Ra,azl,Rc,azm,azn,Rd,Re,Rf,Rg,Rh,Ri,Rj,Rk,Rl,Rm,vD,Rp,Rn,Ro,function(c){function
a(d,a){return b(k8(c,azs),d,a)}function
d(d,a){return b(k8(c,azt),d,a)}a(azu,rh);a(azv,QT);a(azw,Em);a(azx,QV);a(azy,QW);a(azz,QX);a(azA,QY);a(azB,QZ);a(azC,Q0);a(azD,Q1);a(azE,Q2);a(azF,Q3);a(azG,Rd);a(azH,Re);a(azI,Rf);a(azJ,Rg);d(azK,Rh);d(azL,Ri);a(azM,Rj);a(azN,Rk);a(azO,Rl);a(azP,Rm);a(azQ,gl);a(azR,vD);d(azS,Rp);a(azT,Rn);a(azU,Ro);a(azV,Q4);a(azW,oC);a(azX,Q5);a(azY,Q6);a(azZ,Q7);a(az0,Q8);a(az1,Q9);a(az2,Q_);a(az3,Q$);a(az4,Ra);return dE(c)}],LB);var
Eo=[0,0],Rr=[0,1],Rs=[0,0],vF=[0,1],aAn=0,aAo=0,aAp=0,aAq=0,aAr=BE,aAs=0;try{ih(b8E);var
b8F=1,Ep=b8F}catch(a){var
Ep=0}var
aAu=O([I,aAt,0]);function
ad(a){og(aAv);oh(a);throw aAu}function
Rt(a,b){try{var
c=d(a,0)}catch(a){a=j(a);d(b,0);throw a}d(b,0);return c}function
vG(c,a,b){if(a){var
e=vG(c,a[2],b);return[0,d(c,a[1]),e]}return b}function
Ru(g,f,e){var
c=f,a=e;for(;;){if(c){if(a){var
d=b(g,c[1],a[1]);if(d){var
c=c[2],a=a[2];continue}return d}}else
if(!a)return 1;return 0}}function
vH(b,a){return 0<a?[0,b,vH(b,a-1|0)]:0}function
Rv(a){if(a){var
b=a[2],c=a[1];if(b){var
d=Rv(b);return[0,[0,c,d[1]],d[2]]}return[0,0,c]}throw[0,h,aAw]}function
br(b,a){return a?d(b,a[1]):0}function
bt(b,a){return a?[0,d(b,a[1])]:0}function
Rw(f,b){var
a=f,g=k6(b);for(;;){if(a){var
c=a[1],d=mG(c,b),e=mG(c,g);if(k0(e))return e;if(k0(d))return d;var
a=a[2];continue}throw l}}function
Eq(c,b){var
a=bp(0,c);m(function(b){return bq(a,b[1],b[2])},b);return a}function
ld(a){var
b=a[1];a[1]=0;return b}function
Rx(a){switch(a){case
0:return aAx;case
1:return aAy;case
2:return aAz;case
3:return aAA;case
4:return aAB;case
5:return aAC;case
6:return aAD;default:return aAE}}function
Er(a){if(typeof
a==="number")switch(a){case
0:return aAF;case
1:return aAG;default:return aAH}else
return 0===a[0]?o(aAI,Rx(a[1])):o(aAJ,Rx(a[1]))}function
Ry(a){var
b=a?a[2]?dH(aAK,g(Er,a)):Er(a[1]):Er(1);return o(aAM,o(b,aAL))}function
Rz(a){if(f(a,aAN)){if(f(a,aAO)){if(f(a,aAP)){if(f(a,aAQ)){if(f(a,aAR)){if(f(a,aAS))throw l;return Es[2]}return Es[3]}return aAT}return aAU}return Es[1]}return aAV}var
Et=[0,1];function
aAW(c,b){try{var
a=Rz(b),e=Et[1]?Ry(a):aAX;return e}catch(a){a=j(a);if(a===l)return d(c,b);throw a}}function
aAY(c,b){try{Rz(b);var
a=Et[1]?Ry(aAZ):aA0;return a}catch(a){a=j(a);if(a===l)return d(c,b);throw a}}function
RA(b){var
a=DX(b,0),c=a[4],d=a[3],e=a[2];function
f(a){return aAY(e,a)}var
g=a[1],h=[0,function(a){return aAW(g,a)},f,d,c];vs(b,1);return DY(b,h)}var
RB=[0,1],aA1=[0,at,[0,g_,[0,oz,0]]];function
RC(a){if(typeof
a==="number")switch(a){case
0:return 1;case
1:return 2;case
2:return 5;case
3:return 6;case
4:return 10;case
5:return 11;case
6:return 12;case
7:return 14;case
8:return 16;case
9:return 20;case
10:return 21;case
11:return 23;case
12:return 25;case
13:return 28;case
14:return 29;default:return 39}else
switch(a[0]){case
0:return 3;case
1:return 4;case
2:return 7;case
3:return 8;case
4:return 9;case
5:return 13;case
6:return 15;case
7:return 17;case
8:return 18;case
9:return 19;case
10:return 22;case
11:return 24;case
12:return 26;case
13:return 27;case
14:return 30;case
15:return 31;case
16:return 32;case
17:return 33;case
18:return 34;case
19:return 35;case
20:return 36;case
21:return 37;case
22:return 38;case
23:return 40;case
24:return 41;case
25:return 42;case
26:return 43;case
27:return 44;case
28:return 45;case
29:return 46;case
30:return 47;case
31:return 48;case
32:return 49;default:return 50}}var
RD=50;function
vI(c){var
a=c+Ad|0;if(25<a>>>0)throw[0,h,aA2];switch(a){case
0:var
b=function(a){return 0===a?0:[0,a,b(a-1|0)]};return b(RD);case
2:return aA3;case
3:return aA4;case
4:return aA5;case
5:return aA6;case
10:return aA7;case
11:return aA8;case
12:return aA9;case
15:return aA_;case
17:return aA$;case
18:return aBa;case
20:return aBb;case
21:return aBc;case
23:return aBd;case
24:return aBe;case
25:return aBf;default:return 0}}var
mH=[0,[0,X(51,1),X(51,0)]];function
Eu(a){return mH[1]}function
Ev(a){mH[1]=a;return 0}function
dX(b){var
a=RC(b);return n(mH[1][1],a)[a+1]}function
Ew(l,a){var
b=k3(mH[1][2]),h=k3(mH[1][1]),k=l?b:h;function
f(a){return n(k,a)[a+1]=1}function
g(a){return n(k,a)[a+1]=0}function
j(a){n(h,a)[a+1]=1;return n(b,a)[a+1]=1}function
i(a){throw[0,k9,aBg]}function
o(e,d){var
c=e,b=d;for(;;){if(r(a)<=b)return[0,b,c];if(9<(u(a,b)+eF|0)>>>0)return[0,b,c];var
c=((10*c|0)+u(a,b)|0)-48|0,b=b+1|0;continue}}function
c(d,n){var
b=n;for(;;){if(r(a)<=b)return 0;var
c=u(a,b);if(65<=c){if(97<=c){if(!(dP<=c)){m(g,vI(u(a,b)));var
b=b+1|0;continue}}else
if(!(91<=c)){m(f,vI(qY(u(a,b))));var
b=b+1|0;continue}}else
if(46<=c){if(64<=c){var
h=b+1|0;return d<50?e(d+1|0,j,h):aa(e,[0,j,h])}}else
if(43<=c)switch(c+ajn|0){case
0:var
k=b+1|0;return d<50?e(d+1|0,f,k):aa(e,[0,f,k]);case
2:var
l=b+1|0;return d<50?e(d+1|0,g,l):aa(e,[0,g,l])}return i(0)}}function
e(f,l,b){if(r(a)<=b)return i(0);var
h=u(a,b);if(65<=h){if(97<=h){if(!(dP<=h)){m(l,vI(u(a,b)));var
t=b+1|0;return f<50?c(f+1|0,t):aa(c,[0,t])}}else
if(!(91<=h)){m(l,vI(qY(u(a,b))));var
v=b+1|0;return f<50?c(f+1|0,v):aa(c,[0,v])}}else
if(!(9<(h+eF|0)>>>0)){var
p=o(0,b),e=p[2],g=p[1];if((g+2|0)<r(a))if(46===u(a,g))if(46===u(a,g+1|0)){var
q=o(0,g+2|0),s=q[2];if(s<e)i(0);var
n=[0,q[1],e,s],k=1}else
var
k=0;else
var
k=0;else
var
k=0;if(!k)var
n=[0,g,e,e];var
w=c5(n[3],RD);if(!(w<e)){var
j=e;for(;;){d(l,j);var
y=j+1|0;if(w!==j){var
j=y;continue}break}}var
x=n[1];return f<50?c(f+1|0,x):aa(c,[0,x])}return i(0)}(function(a){return c4(c(0,a))}(0));mH[1]=[0,h,b];return 0}Ew(0,aBh);Ew(1,aBi);var
aCX=[0,0];function
aCY(B,a){if(typeof
a==="number")switch(a){case
0:var
c=aBj;break;case
1:var
c=aBk;break;case
2:var
c=aBl;break;case
3:var
c=aBm;break;case
4:var
c=aBn;break;case
5:var
c=aBo;break;case
6:var
c=aBp;break;case
7:var
c=aBq;break;case
8:var
c=aBr;break;case
9:var
c=aBs;break;case
10:var
c=aBt;break;case
11:var
c=aBu;break;case
12:var
c=aBv;break;case
13:var
c=aBw;break;case
14:var
c=aBx;break;default:var
c=aBy}else
switch(a[0]){case
0:var
c=o(aBz,a[1]);break;case
1:var
s=a[1],c=f(s,aBA)?o(aBC,o(s,aBB)):aBD;break;case
2:var
j=a[1];if(!j)throw[0,h,aBJ];var
t=j[2],u=j[1],c=t?dH(aBG,[0,aBF,[0,u,[0,aBE,t]]]):o(aBI,o(u,aBH));break;case
3:var
v=a[1],c=f(v,aBK)?o(aBL,v):aBM;break;case
4:var
c=o(aBO,o(a[1],aBN));break;case
5:var
k=a[1];if(!k)throw[0,h,aBW];var
x=k[2],y=k[1],c=x?o(dH(aBS,[0,aBR,[0,y,[0,aBQ,x]]]),aBP):o(aBV,o(y,o(aBU,aBT)));break;case
6:var
c=o(aBZ,o(dH(aBY,a[1]),aBX));break;case
7:var
c=o(aB1,o(a[1],aB0));break;case
8:var
c=o(a[1],aB2);break;case
9:var
c=o(a[1],aB3);break;case
10:var
c=a[1];break;case
11:var
c=o(aB5,o(a[1],aB4));break;case
14:var
D=a[4],E=a[3],F=a[2],G=a[1],c=L(ag(aB8),G,F,E,D);break;case
15:var
H=a[1],I=a[3],J=a[2],c=p(ag(aB9),J,I,H);break;case
16:var
c=o(aB$,o(a[1],aB_));break;case
17:var
c=o(aCb,o(a[1],aCa));break;case
18:var
c=o(aCd,o(a[1],aCc));break;case
19:var
c=o(aCf,o(a[1],aCe));break;case
20:var
c=o(aCh,o(a[1],aCg));break;case
21:var
l=a[1],c=0===a[2]?0===a[3]?o(aCj,o(l,aCi)):o(aCl,o(l,aCk)):o(aCn,o(l,aCm));break;case
22:var
m=a[1],c=0===a[2]?0===a[3]?o(aCp,o(m,aCo)):o(aCr,o(m,aCq)):o(aCt,o(m,aCs));break;case
23:var
d=a[2],z=a[1];if(d)if(d[2])var
g=0;else
if(0===a[3])var
K=o(aCA,o(z,aCz)),c=o(d[1],K),g=1;else
var
g=0;else
var
g=0;if(!g){if(0===a[3])throw[0,h,aCu];var
c=o(aCy,o(z,o(aCx,o(dH(aCw,d),aCv))))}break;case
24:var
q=a[1];if(q)if(q[2])var
i=0;else
if(0===a[3])var
M=o(aCH,o(dH(aCG,a[2]),aCF)),c=o(q[1],M),i=1;else
var
i=0;else
var
i=0;if(!i){if(0===a[3])throw[0,h,aCB];var
c=o(aCE,o(dH(aCD,a[2]),aCC))}break;case
25:var
c=o(aCJ,o(a[1],aCI));break;case
26:var
c=o(aCL,o(a[1],aCK));break;case
27:var
N=a[2],O=a[1],c=b(ag(aCM),O,N);break;case
28:var
P=a[2],Q=a[1],c=b(ag(aCN),Q,P);break;case
29:var
R=a[2],S=a[1],c=b(ag(aCO),S,R);break;case
30:var
T=a[2],U=a[1],c=b(ag(aCP),U,T);break;case
31:var
A=a[1],V=dH(aCQ,A),W=1===w(A)?aCR:aCT,c=b(ag(aCS),W,V);break;case
32:var
c=o(aCU,a[1]);break;case
33:var
c=a[1]?aCV:aCW;break;default:var
c=o(aB7,o(a[1],aB6))}var
r=RC(a);b(e(B,aCZ),r,c);iu(B,0);var
C=n(mH[1][2],r)[r+1],X=C?(aCX[1]++,0):C;return X}var
aC1=O([I,aC0,0]);function
le(b){var
a=[0,b,1,0,-1];return[0,a,a,1]}var
y=le(aC2);function
aH(a){return[0,a[11],a[12],0]}function
ap(b){var
a=k7(0);return[0,jE(0),a,0]}function
ri(b){var
a=k7(0);return[0,jE(0),a,1]}function
cs(a){var
b=oq(a);return[0,op(a),b,0]}var
RE=[0,0],RF=[0,0];function
RG(a,e,d){var
c=D3(a,0);function
f(f,b,e){var
a=b,d=0;for(;;){if(a===(b+e|0)){RF[1]=RF[1]+d|0;return p(c[1],f,b,e)}if(10===u(f,a)){var
a=a+1|0,d=d+1|0;continue}var
a=a+1|0;continue}}vu(a,[0,f,c[2],c[3],c[4]]);b(e,a,d);iu(a,0);return vu(a,c)}function
Ex(c,b){for(;;){var
a=RE[1];if(typeof
a==="number"){if(0===a){RE[1]=aoB(ek);continue}return 0}return 0}}function
jP(b,a){return d(e(b,aC3),a)}var
aC4=rj[5],aC5=rj[4],aC6=rj[3],aC7=rj[2],aC8=rj[1];function
mJ(a){return[0,a[1],a[2],a[4]-a[3]|0]}function
vJ(a){if(RB[1]){RB[1]=0;Qs(1);m(RA,aA1);Et[1]=0}return 0}function
RH(c,a){vJ(0);var
d=mJ(a[1]),g=d[3],h=d[1],f=Ep?g+1|0:g,i=(a[2][4]-a[1][4]|0)+f|0;if(A(h,aC9)){if(Ex(c,[0,a,0]))return 0;var
j=a[2][4],k=a[1][4];return b(e(c,aC_),k,j)}var
l=d[2];bH(e(c,aC$),aC8,jP,h,aC7,l);if(0<=f)L(e(c,aDa),aC6,f,aC5,i);return e(c,aDb)}function
vK(b,a){vJ(0);if(A(a[1][1],aDc))if(Ex(b,[0,a,0]))return 0;return p(e(b,aDd),RH,a,aC4)}function
RI(a,b){vJ(0);d(e(a,aDg),aDe);return 0}function
aDh(a,b){vK(a,b);return RI(a,0)}function
ai(d,a){return RG(g_,function(b,c){var
a=dX(c);return a?(vJ(0),vK(b,d),p(e(b,aDi),aDf,aCY,c)):a},a)}function
b2(a){return[0,a,y]}function
RJ(b,f,e){var
c=cH(64),a=jM(c);RA(a);if(b)d(b[1],a);return D7(function(b){iu(a,0);return d(f,cA(c))},a,e)}function
RK(a){return ra(a,7,aDj)}function
eN(c,b,a,d){var
e=c?c[1]:y,f=b?b[1]:0,g=a?a[1]:aDk;return RJ([0,RK],function(a){return[0,e,a,f,g]},d)}function
RL(c,b,a,d){var
e=c?c[1]:y,f=b?b[1]:0,g=a?a[1]:aDl;return[0,e,d,f,g]}var
Ey=[0,0];function
c8(a){Ey[1]=[0,a,Ey[1]];return 0}function
aDm(c){var
a=Ey[1];for(;;){if(a){var
b=d(a[1],c);if(b)return b;var
a=a[2];continue}return 0}}function
RM(b,a){var
c=a[4];if(f(c,aDn))var
g=function(b,a){return G(g,[0,a[1],b],a[3])},h=Ex(b,g(0,a));else
var
h=0;if(h)return be(b,c);var
i=a[2],j=a[1];bH(e(b,aDo),vK,j,RI,0,i);var
k=a[3];return m(d(e(b,aDp),RM),k)}function
aDq(b,a){return RG(b,RM,a)}function
fa(d,c,a){return b(eN([0,d],0,0,aDr),c,a)}function
vL(b,a){return fa(le(mI),b,a)}c8(function(a){if(a[1]===rg){var
b=a[2];return[0,d(eN([0,le(mI)],0,0,aDs),b)]}if(a[1]===aC1){var
c=a[2];return[0,d(eN([0,le(mI)],0,0,aDt),c)]}return 0});var
RN=O([I,aDu,0]);c8(function(a){return a[1]===RN?[0,a[2]]:0});function
T(c,b,a){var
d=c?c[1]:y,e=b?b[1]:0,f=a?a[1]:aDv;function
g(a){throw[0,RN,[0,d,a,e,f]]}var
h=[0,RK];return function(a){return RJ(h,g,a)}}function
Ez(c){var
b=0,a=c;for(;;)switch(a[0]){case
0:return[0,a[1],b];case
1:var
b=[0,a[2],b],a=a[1];continue;default:return ad(aDw)}}function
eO(a){switch(a[0]){case
0:return a[1];case
1:return a[2];default:return ad(aDx)}}function
RO(b,a){try{var
c=Dc(b,a,46),d=RO(b,c+1|0),e=[0,al(b,a,c-a|0),d];return e}catch(c){c=j(c);if(c===l)return[0,al(b,a,r(b)-a|0),0];throw c}}function
RP(b){var
a=RO(b,0);if(a){var
c=a[2],d=[0,a[1]];return G(function(b,a){return[1,b,a]},d,c)}return aDy}var
vM=[0,0];function
aDz(c){var
a=dX(aDA);if(a){var
b=v(vM[1]);return m(function(a){switch(a[3]){case
0:return ai(a[2],aDB);case
1:return 0;default:return 2<=a[4]?ai(a[2],aDC):0}},b)}return a}function
aDD(c,b){var
a=[0,c,b,0,0];vM[1]=[0,a,vM[1]];return a}var
aDF=[0,aDE,y];function
EA(a){var
b=[0,[1,[2,a[1],0]],a[2],0];return[0,aDF,[0,[0,[0,[0,b,0],b[2]],0]]]}function
dY(b,a){var
c=b[1],d=c?[0,EA(c[1]),a]:a,e=b[2];return e?s(d,[0,EA(e[1]),0]):d}var
rk=0;function
rl(b,a){return b?s(a,[0,EA(b[1]),0]):a}var
aDH=[0,aDG,y];function
rm(a){var
b=[0,[1,[2,a[1],0]],a[2],0];return[0,aDH,[0,[0,[0,[0,b,0],b[2]],0]]]}function
oE(b,a){return s(g(rm,b),a)}function
EB(d,c){var
a=c;for(;;){if(a){var
b=a[1];if(1===b[3]){var
a=a[2];continue}var
e=d?1:2;b[3]=e;return[0,b]}return 0}}function
EC(d){var
b=0,a=d;for(;;){if(a){var
c=a[1];if(1===c[3]){var
a=a[2];continue}c[3]=2;var
b=[0,c,b],a=a[2];continue}return v(b)}}function
vN(a){return m(function(a){return 0===a[4]?(a[4]=1,0):(a[4]=2,0)},a)}var
vO=bp(0,50);function
RQ(c,a){var
b=0!==a?1:0;return b?bq(vO,c,a):b}function
RR(b){try{var
a=aV(vO,b);vN(a);var
c=EB(0,a);return c}catch(a){a=j(a);if(a===l)return 0;throw a}}function
RS(a){try{var
b=vN(aV(vO,a));return b}catch(a){a=j(a);if(a===l)return 0;throw a}}var
rn=bp(0,50);function
vP(c,a){var
b=0!==a?1:0;return b?bq(rn,c,a):b}function
RT(b){try{var
a=aV(rn,b);vN(a);var
c=EB(0,a);return c}catch(a){a=j(a);if(a===l)return 0;throw a}}function
RU(a){try{var
b=vN(aV(rn,a));return b}catch(a){a=j(a);if(a===l)return 0;throw a}}function
RV(a){try{var
b=EB(1,aV(rn,a));return b}catch(a){a=j(a);if(a===l)return 0;throw a}}var
ED=bp(0,50);function
RW(c,a){var
b=0!==a?1:0;return b?bq(ED,c,a):b}function
EE(a){try{var
b=EC(aV(ED,a));return b}catch(a){a=j(a);if(a===l)return 0;throw a}}var
EF=bp(0,50);function
EG(c,a){var
b=0!==a?1:0;return b?bq(EF,c,a):b}function
aDI(a){try{var
b=EC(aV(EF,a));return b}catch(a){a=j(a);if(a===l)return 0;throw a}}var
EH=bp(0,50);function
RX(c,a){var
b=0!==a?1:0;return b?bq(EH,c,a):b}function
aDJ(a){try{var
b=EC(aV(EH,a));return b}catch(a){a=j(a);if(a===l)return 0;throw a}}function
a2(b){var
a=RT(k7(0));return[0,RR(jE(0)),a]}function
vQ(a){RS(jE(0));return RU(k7(0))}function
vR(b,a){RS(op(b));return RU(oq(a))}function
lf(a){return RV(k7(0))}function
oF(a){return EE(jE(0))}function
ro(a){return EE(op(a))}function
aDK(a){vM[1]=0;mC(vO);mC(rn);mC(ED);mC(EF);return mC(EH)}function
cB(b,a,c){var
d=b?b[1]:y,e=a?a[1]:0;return[0,c,d,e]}function
vS(b,a,c){return cB(b,a,0)}function
iw(c,b,a){return cB(c,b,[0,a])}function
eo(e,d,c,b,a){return cB(e,d,[1,c,b,a])}function
RY(c,b,a){return cB(c,b,[2,a])}function
ix(d,c,b,a){return cB(d,c,[3,b,a])}function
EI(d,c,b,a){return cB(d,c,[4,b,a])}function
RZ(d,c,b,a){return cB(d,c,[6,b,a])}function
R0(e,d,c,b,a){return cB(e,d,[7,c,b,a])}function
R1(d,c,b,a){return cB(d,c,[8,b,a])}function
oG(a){var
b=a[1];if(typeof
b!=="number"&&8===b[0])return a;return R1([0,a[2]],0,0,a)}function
b9(b,a,c){var
d=b?b[1]:y,e=a?a[1]:0;return[0,c,d,e]}function
R2(b,a,c){return b9(b,a,0)}function
cJ(c,b,a){return b9(c,b,[0,a])}function
R3(d,c,b,a){return b9(d,c,[1,b,a])}function
EJ(c,b,a){return b9(c,b,[2,a])}function
R4(c,b,a){return b9(c,b,[4,a])}function
oH(d,c,b,a){return b9(d,c,[5,b,a])}function
R5(d,c,b,a){return b9(d,c,[9,b,a])}function
EK(d,c,b,a){return b9(d,c,[10,b,a])}function
aO(b,a,c){var
d=b?b[1]:y,e=a?a[1]:0;return[0,c,d,e]}function
aZ(c,b,a){return aO(c,b,[0,a])}function
mK(c,b,a){return aO(c,b,[1,a])}function
R6(e,d,c,b,a){return aO(e,d,[2,c,b,a])}function
jQ(f,e,d,c,b,a){return aO(f,e,[4,d,c,b,a])}function
R7(c,b,a){return aO(c,b,[3,a])}function
c9(d,c,b,a){return aO(d,c,[5,b,a])}function
vT(d,c,b,a){return aO(d,c,[6,b,a])}function
R8(c,b,a){return aO(c,b,[8,a])}function
mL(d,c,b,a){return aO(d,c,[9,b,a])}function
EL(d,c,b,a){return aO(d,c,[12,b,a])}function
vU(c,b,a){return aO(c,b,[14,a])}function
EM(e,d,c,b,a){return aO(e,d,[15,c,b,a])}function
jR(d,c,b,a){return aO(d,c,[19,b,a])}function
R9(e,d,c,b,a){return aO(e,d,[25,c,b,a])}function
R_(d,c,b,a){return aO(d,c,[28,b,a])}function
iy(b,a,c){var
d=b?b[1]:y,e=a?a[1]:0;return[0,c,d,e]}function
R$(c,b,a){return iy(c,b,[6,a])}function
vV(c,b,a){return iy(c,b,[1,a])}function
lg(b,a,c){var
d=b?b[1]:y,e=a?a[1]:0;return[0,c,d,e]}function
vW(c,b,a){return lg(c,b,[1,a])}function
EN(d,c,b,a){return lg(d,c,[4,b,a])}function
Sa(c,b,a){return lg(c,b,[5,a])}function
fb(a,b){var
c=a?a[1]:y;return[0,b,c]}function
rp(b,a){return fb(b,[0,a])}function
Sb(b,a){return fb(b,[8,a])}function
Sc(b,a){return fb(b,[11,a])}function
Sd(a){return g(function(a){var
b=rm(a);return Sc([0,a[2]],b)},a)}function
dZ(a,b){var
c=a?a[1]:y;return[0,b,c]}function
Se(c,a,b){var
d=a?a[1]:0;return dZ(c,[0,b,d])}function
hb(c,b,a){return dZ(c,[1,b,a])}function
vX(b,a){return dZ(b,[12,a])}function
Sf(b,a){return dZ(b,[13,a])}function
vY(a){return g(function(a){var
b=rm(a);return Sf([0,a[2]],b)},a)}function
lh(b,a,c){var
d=b?b[1]:y,e=a?a[1]:0;return[0,c,d,e]}function
Sg(f,e,d,c,b,a){return lh(f,e,[2,d,c,b,a])}function
Sh(e,d,c,b,a){return lh(e,d,[4,c,b,a])}function
rq(b,a,c){var
d=b?b[1]:y,e=a?a[1]:0;return[0,c,d,e]}function
Si(c,b,a){return rq(c,b,[1,a])}function
mM(c,b,a,d){var
e=c?c[1]:y,f=b?b[1]:0,g=a?a[1]:eP;return[0,d,e,dY(g,f)]}function
Sj(b,a){return mM(b,0,0,[4,a])}function
Sk(a){return g(function(a){var
b=rm(a);return Sj([0,a[2]],b)},a)}function
li(c,b,a,d){var
e=c?c[1]:y,f=b?b[1]:0,g=a?a[1]:eP;return[0,d,e,dY(g,f)]}function
Sl(b,a){return li(b,0,0,[5,a])}function
Sm(a){return g(function(a){var
b=rm(a);return Sl([0,a[2]],b)},a)}function
mN(d,c,b,a,f,e){var
g=d?d[1]:y,h=c?c[1]:0,i=b?b[1]:eP,j=a?a[1]:0;return[0,f,e,j,dY(i,h),g]}function
rr(d,c,b,a,f,e){var
g=d?d[1]:y,h=c?c[1]:0,i=b?b[1]:eP,j=a?a[1]:0;return[0,f,e,oE(j,dY(i,h)),g]}function
Sn(d,c,b,a,f,e){var
g=d?d[1]:y,h=c?c[1]:0,i=b?b[1]:eP,j=a?a[1]:0;return[0,e,f,oE(j,dY(i,h)),g]}function
vZ(d,c,b,a,f,e){var
g=d?d[1]:y,h=c?c[1]:0,i=b?b[1]:eP,j=a?a[1]:0;return[0,f,e,oE(j,dY(i,h)),g]}function
So(d,c,b,a,e){var
f=d?d[1]:y,g=c?c[1]:0,h=b?b[1]:eP,i=a?a[1]:1;return[0,e,i,f,dY(h,g)]}function
lj(c,b,a,d){var
e=c?c[1]:y,f=b?b[1]:0,g=a?a[1]:eP;return[0,d,e,dY(g,f)]}function
ep(d,c,b,a,f,e){var
g=d?d[1]:y,h=c?c[1]:0,i=b?b[1]:eP,j=a?a[1]:0;return[0,f,e,oE(j,dY(i,h)),g]}function
mO(f,e,d,c,b,a,h,g){var
i=f?f[1]:y,j=e?e[1]:0,k=d?d[1]:eP,l=c?c[1]:0,m=b?b[1]:1,n=a?a[1]:0;return[0,m,n,h,g,i,oE(l,dY(k,j))]}function
rs(h,g,f,e,d,c,b,a,j,i){var
k=h?h[1]:y,l=g?g[1]:0,m=f?f[1]:eP,n=e?e[1]:0,o=d?d[1]:0,p=c?c[1]:0,q=b?b[1]:0,r=a?a[1]:1;return[0,i,o,p,q,r,j,oE(n,dY(m,l)),k]}function
EO(d,c,b,a,f,e){var
g=d?d[1]:y,h=c?c[1]:0,i=b?b[1]:rk,j=a?a[1]:0;return[0,e,j,f,g,rl(i,h)]}function
EP(d,c,b,a,f,e){var
g=d?d[1]:y,h=c?c[1]:0,i=b?b[1]:rk,j=a?a[1]:0;return[0,f,j,e,g,rl(i,h)]}function
EQ(d,c,b,a,f,e){var
g=d?d[1]:0,h=c?c[1]:eP,i=b?b[1]:0,j=a?a[1]:1;return[0,f,i,e,j,dY(h,g)]}function
ER(e,d,c,b,a,g,f){var
h=e?e[1]:y,i=d?d[1]:0,j=c?c[1]:eP,k=b?b[1]:rk,l=a?a[1]:0;return[0,f,[0,l,g],h,dY(j,rl(k,i))]}function
ES(d,c,b,a,f,e){var
g=d?d[1]:y,h=c?c[1]:0,i=b?b[1]:eP,j=a?a[1]:rk;return[0,f,[1,e],g,dY(i,rl(j,h))]}var
fM=O([I,aDL,0]),Sp=O([I,aDM,0]);c8(function(h){if(h[1]===fM){var
a=h[2];switch(a[0]){case
0:var
e=a[4],f=a[2],i=[0,b(ag(aDO),e,f)],j=[0,[0,d(eN([0,a[1]],0,0,aDP),f),0]],c=d(eN([0,a[3]],j,i,aDN),e);break;case
1:var
k=a[2],c=d(eN([0,a[1]],0,0,aDQ),k);break;case
2:var
l=a[2],c=d(eN([0,a[1]],0,0,aDR),l);break;case
3:var
c=eN([0,a[1]],0,0,aDS);break;case
4:var
g=a[2],c=b(eN([0,a[1]],0,0,aDT),g,g);break;case
5:var
c=eN([0,a[1]],0,0,aDU);break;default:var
m=a[2],c=d(eN([0,a[1]],0,0,aDV),m)}return[0,c]}return 0});function
jS(b,a){throw[0,fM,[6,b,a]]}function
bu(a){return cB([0,ap(0)],0,a)}function
bK(a){return b9([0,ap(0)],0,a)}function
aj(a){return aO([0,ap(0)],0,a)}function
lk(a){return iy([0,ap(0)],0,a)}function
eQ(a){return fb([0,ap(0)],a)}function
fc(a){return lg([0,ap(0)],0,a)}function
eR(a){return dZ([0,ap(0)],a)}function
hc(a){return lh([0,ap(0)],0,a)}function
ll(a){return rq([0,ap(0)],0,a)}function
oI(c,b,a){return mM([0,ap(0)],c,b,a)}function
mP(c,b,a){return li([0,ap(0)],c,b,a)}function
P(b,a){return[0,b,cs(a)]}function
v0(a){var
b=a[2],c=[0,b[1],b[2],1];return cB([0,c],0,[3,[0,aDW,c],[0,a,0]])}function
ET(a){var
b=a[3],c=ap(0);return[0,a[1],c,b]}function
rt(a){var
b=a[3],c=ap(0);return[0,a[1],c,b]}function
ru(c,b){var
a=cs(b);return aO([0,a],0,[0,[0,[0,c],a]])}function
EU(b,a){var
c=[0,P(b,a)];return b9([0,cs(a)],0,c)}function
bL(a){return aO([0,ri(0)],0,a)}function
oJ(a){return b9([0,ri(0)],0,a)}function
jT(a){return cB([0,ri(0)],0,a)}function
Sq(a){return[0,a,ri(0)]}function
cS(c,b,a){return aj([5,ru(b,2),[0,[0,aDY,c],[0,[0,aDX,a],0]]])}function
EV(c,b,a){return aO([0,a],0,[9,[0,aD8,c],[0,b]])}function
EW(c,b,a){return b9([0,a],0,[5,[0,aD9,c],[0,b]])}function
EX(c,b){if(b){var
d=b[1],e=EX(c,b[2]),a=[0,d[2][1],e[2][2],1],g=aO([0,a],0,[8,[0,d,[0,e,0]]]);return EV([0,a[1],a[2],1],g,a)}var
f=[0,c[1],c[2],1];return aO([0,f],0,[9,[0,aD_,f],0])}function
Sr(c,b){if(b){var
d=b[1],e=Sr(c,b[2]),a=[0,d[2][1],e[2][2],1],g=b9([0,a],0,[4,[0,d,[0,e,0]]]);return EW([0,a[1],a[2],1],g,a)}var
f=[0,c[1],c[2],1];return b9([0,f],0,[5,[0,aD$,f],0])}function
rv(a,b){return[0,[0,a,b],a[2]]}function
EY(d,c){var
a=c[2],b=c[1];if(b){if(!a)return bL([19,d,b[1]])}else
if(!a)throw[0,h,aEa];return bL([20,d,b,a[1]])}function
v1(b,a){return Sq([1,[0,b],a])}function
oK(a){throw Sp}function
a3(d,c,b,a){var
e=cs(a);throw[0,fM,[0,cs(c),d,e,b]]}function
mQ(b,a){throw[0,fM,[1,cs(b),a]]}function
Ss(b,a){throw[0,fM,[2,cs(b),a]]}function
lm(b,a){return Sq([1,[1,aEb,b],a])}function
St(a){var
b=a[1];return 8===b[0]?b[1]:[0,a,0]}function
E1(d,c,a){var
b=aY(a,d);if(b)throw[0,fM,[4,c,a]];return b}function
Su(e,a,c){var
d=aj([19,c,a]),f=R(function(b,a){return aj([30,b,a])},e,d);function
b(d){var
a=d[1];if(typeof
a==="number")var
c=0;else
switch(a[0]){case
0:var
h=a[1];E1(e,d[2],h);var
c=[0,h];break;case
1:var
s=b(a[3]),t=b(a[2]),c=[1,a[1],t,s];break;case
2:var
c=[2,g(b,a[1])];break;case
3:var
i=a[1],j=i[1];if(0===j[0])if(a[2])var
f=0;else{var
l=j[1];if(aY(l,e))var
k=[0,l],f=1;else
var
f=0}else
var
f=0;if(!f)var
k=[3,i,g(b,a[2])];var
c=k;break;case
4:var
u=a[2],v=a[1],c=[4,g(function(a){var
c=b(a[3]);return[0,a[1],a[2],c]},v),u];break;case
5:var
w=g(b,a[2]),c=[5,a[1],w];break;case
6:var
n=a[2];E1(e,d[2],n);var
c=[6,b(a[1]),n];break;case
7:var
x=a[3],y=a[2],c=[7,g(r,a[1]),y,x];break;case
8:var
o=a[1],z=d[2];m(function(a){return E1(e,z,a)},o);var
c=[8,o,b(a[2])];break;case
9:var
p=a[1],A=p[2],B=g(function(a){var
c=b(a[2]);return[0,a[1],c]},A),c=[9,[0,p[1],B]];break;default:var
q=a[1],c=[10,[0,q[1],q[2]]]}return[0,c,d[2],d[3]]}function
r(a){if(0===a[0]){var
c=g(b,a[4]);return[0,a[1],a[2],a[3],c]}return[1,b(a[1])]}return[0,f,jT([8,e,b(a)])]}function
E2(a,b){var
c=b[1],e=s(b[2],a[3]),d=[0,a[1],a[2],e];if(c){var
f=[0,[0,rv(d,0),0]];return bL([33,[0,c[1],f]])}return d}function
d0(b,a){return E2(aj(b),a)}function
rw(a){return vY(ro(a))}function
Sv(a){return Sd(ro(a))}function
iz(a){return[0,[0,vY(ro(a))],0]}function
rx(b,a,e){var
c=aDI(op(a)),f=s(e,d(b,aDJ(oq(a))));return s(d(b,c),f)}function
E3(b,a){return rx(vY,b,a)}function
Sw(b,a){return rx(Sd,b,a)}function
Sx(a,g){var
h=ap(0),e=jE(0),f=[z,function(a){return EE(e)}],b=jE(0),c=k7(0),d=[z,function(d){var
a=RT(c);return[0,RR(b),a]}];return[0,a[1],a[2],g,d,f,h]}var
aEU=aET.slice(),aEW=aEV.slice(),aE4=19189;function
aE9(a){throw[0,jD,c(a,0)]}function
aE_(a){throw[0,jD,c(a,0)]}function
aE$(a){throw[0,jD,c(a,0)]}function
aFa(a){throw[0,jD,c(a,0)]}function
aFb(a){throw[0,jD,c(a,0)]}function
aFc(a){throw[0,jD,c(a,0)]}function
aFd(a){throw[0,jD,c(a,0)]}function
aFe(a){var
b=c(a,2);return[2,b,[0,c(a,0)]]}function
aFf(a){return[2,c(a,0),0]}function
aFg(a){return[1,c(a,0)]}function
aFh(a){return[0,c(a,0)]}function
aFi(a){var
b=c(a,2);return[0,b,c(a,1)]}function
aFj(a){var
b=c(a,2);return[0,b,c(a,1)]}function
aFk(a){var
b=c(a,1);return[0,[0,b],c(a,0)]}function
aFl(a){var
b=c(a,1);return[0,0,[0,b,c(a,0)]]}function
aFm(a){return aFn}function
aFo(a){var
b=c(a,1);return[0,b,c(a,0)]}function
aFp(a){return 0}function
aFq(a){var
b=c(a,1);return[0,b,c(a,0)]}function
aFr(a){return 0}function
aFs(a){var
b=c(a,2);return[0,b,c(a,1)]}function
aFt(a){var
b=c(a,2);return[0,b,c(a,1)]}function
aFu(a){var
b=c(a,2);return[0,b,c(a,1)]}function
aFv(a){var
b=c(a,2),d=c(a,0),e=ap(0);return[0,o(b,o(aFw,d[1])),e]}function
aFx(a){var
b=c(a,0);return[0,b,ap(0)]}function
aFy(a){return aFz}function
aFA(a){return aFB}function
aFC(a){return aFD}function
aFE(a){return aFF}function
aFG(a){return aFH}function
aFI(a){return aFJ}function
aFK(a){return aFL}function
aFM(a){return aFN}function
aFO(a){return aFP}function
aFQ(a){return aFR}function
aFS(a){return aFT}function
aFU(a){return aFV}function
aFW(a){return aFX}function
aFY(a){return aFZ}function
aF0(a){return aF1}function
aF2(a){return aF3}function
aF4(a){return aF5}function
aF6(a){return aF7}function
aF8(a){return aF9}function
aF_(a){return aF$}function
aGa(a){return aGb}function
aGc(a){return aGd}function
aGe(a){return aGf}function
aGg(a){return aGh}function
aGi(a){return aGj}function
aGk(a){return aGl}function
aGm(a){return aGn}function
aGo(a){return aGp}function
aGq(a){return aGr}function
aGs(a){return aGt}function
aGu(a){return aGv}function
aGw(a){return aGx}function
aGy(a){return aGz}function
aGA(a){return aGB}function
aGC(a){return aGD}function
aGE(a){return aGF}function
aGG(a){return aGH}function
aGI(a){return aGJ}function
aGK(a){return aGL}function
aGM(a){return aGN}function
aGO(a){return aGP}function
aGQ(a){return aGR}function
aGS(a){return aGT}function
aGU(a){return aGV}function
aGW(a){return aGX}function
aGY(a){return aGZ}function
aG0(a){return aG1}function
aG2(a){return aG3}function
aG4(a){return c(a,0)}function
aG5(a){return c(a,0)}function
aG6(a){return aG7}function
aG8(a){return aG9}function
aG_(a){return aG$}function
aHa(a){return aHb}function
aHc(a){return 0}function
aHd(a){return 0}function
aHe(a){return 0}function
aHf(a){return 0}function
aHg(a){return 0}function
aHh(a){return 1}function
aHi(a){return aHj}function
aHk(a){return aHl}function
aHm(a){return aHn}function
aHo(a){return aHp}function
aHq(a){return aHr}function
aHs(a){return 0}function
aHt(a){return 1}function
aHu(a){return 1}function
aHv(a){return 0}function
aHw(a){return 0}function
aHx(a){return 1}function
aHy(a){return 1}function
aHz(a){return 0}function
aHA(a){return 0}function
aHB(a){return 1}function
aHC(a){return 1}function
aHD(a){return 0}function
aHE(a){return c(a,0)}function
aHF(a){return[1,c(a,1),aHG]}function
aHH(a){return[1,c(a,1),aHI]}function
aHJ(a){var
b=c(a,1);return[1,b,[2,c(a,0)]]}function
aHK(a){var
b=c(a,1);return[1,b,[2,c(a,0)]]}function
aHL(a){var
b=c(a,1);return[1,b,[1,c(a,0)]]}function
aHM(a){var
b=c(a,1);return[1,b,[0,c(a,0)[1]]]}function
aHN(a){return[1,c(a,0),0]}function
aHO(a){var
b=c(a,2);return[1,b,c(a,0)]}function
aHP(a){return[0,c(a,0)]}function
aHQ(a){var
b=c(a,2);return[1,b,c(a,0)]}function
aHR(a){return[0,c(a,0)]}function
aHS(a){var
b=c(a,2);return[1,b,c(a,0)]}function
aHT(a){return[0,c(a,0)]}function
aHU(a){var
b=c(a,3);return[2,b,c(a,1)]}function
aHV(a){var
b=c(a,2);return[1,b,c(a,0)]}function
aHW(a){return[0,c(a,0)]}function
aHX(a){var
b=c(a,2);return[1,b,c(a,0)]}function
aHY(a){return[0,c(a,0)]}function
aHZ(a){var
b=c(a,2);return[1,b,c(a,0)]}function
aH0(a){return[0,c(a,0)]}function
aH1(a){var
b=c(a,2);return[1,b,c(a,0)]}function
aH2(a){return[0,c(a,0)]}function
aH3(a){return aH4}function
aH5(a){return aH6}function
aH7(a){return aH8}function
aH9(a){return aH_}function
aH$(a){return c(a,0)}function
aIa(a){var
b=c(a,2);return[1,b,c(a,0)]}function
aIb(a){return[0,c(a,0)]}function
aIc(a){return aId}function
aIe(a){return aIf}function
aIg(a){return aIh}function
aIi(a){return aIj}function
aIk(a){return c(a,0)}function
aIl(a){return aIm}function
aIn(a){return aIo}function
aIp(a){return aIq}function
aIr(a){return aIs}function
aIt(a){return aIu}function
aIv(a){return aIw}function
aIx(a){return aIy}function
aIz(a){return aIA}function
aIB(a){return aIC}function
aID(a){return aIE}function
aIF(a){return aIG}function
aIH(a){return aII}function
aIJ(a){return aIK}function
aIL(a){return aIM}function
aIN(a){return aIO}function
aIP(a){return aIQ}function
aIR(a){return c(a,0)}function
aIS(a){return c(a,0)}function
aIT(a){return c(a,0)}function
aIU(a){return c(a,0)}function
aIV(a){return c(a,0)}function
aIW(a){return c(a,0)}function
aIX(a){return c(a,0)}function
aIY(a){return mQ(3,aIZ)}function
aI0(a){return mQ(2,aI1)}function
aI2(a){c(a,1);return a3(aI4,1,aI3,3)}function
aI5(a){return c(a,1)}function
aI6(a){return c(a,0)}function
aI7(a){return c(a,0)}function
aI8(a){return c(a,0)}function
aI9(a){return[6,c(a,0)]}function
aI_(a){return[5,c(a,0)]}function
aI$(a){return[4,c(a,0)]}function
aJa(a){return[3,c(a,0)]}function
aJb(a){return[0,c(a,0)]}function
aJc(a){return[6,-c(a,0)|0]}function
aJd(a){return[5,fB(c(a,0))]}function
aJe(a){return[4,-c(a,0)|0]}function
aJf(a){return[3,o(aJg,c(a,0))]}function
aJh(a){return[0,-c(a,0)|0]}function
aJi(a){return c(a,0)}function
aJj(a){return[6,c(a,0)]}function
aJk(a){return[5,c(a,0)]}function
aJl(a){return[4,c(a,0)]}function
aJm(a){return[3,c(a,0)]}function
aJn(b){var
a=c(b,0);return[2,a[1],a[2]]}function
aJo(a){return[1,c(a,0)]}function
aJp(a){return[0,c(a,0)]}function
aJq(a){return c(a,0)}function
aJr(a){var
b=c(a,3),d=c(a,1);return[0,b,c(a,0),d]}function
aJs(a){return aJt}function
aJu(a){var
b=c(a,1);c(a,0);return[0,[0,b,0],0]}function
aJv(a){var
d=c(a,2),b=c(a,0);return[0,[0,d,b[1]],b[2]]}function
aJw(a){var
b=c(a,2);return[0,c(a,0),b]}function
aJx(a){return[0,c(a,0),0]}function
aJy(a){var
b=c(a,2);return[0,c(a,0),b]}function
aJz(a){return[0,c(a,0),0]}function
aJA(a){var
b=c(a,2);return[0,c(a,0),b]}function
aJB(a){return[0,c(a,0),0]}function
aJC(a){var
b=c(a,2);return bu([2,[0,b,v(c(a,0))]])}function
aJD(a){return c(a,0)}function
aJE(a){var
b=c(a,2);return bu([2,[0,b,v(c(a,0))]])}function
aJF(a){return c(a,0)}function
aJG(a){var
b=c(a,1);return[0,c(a,0),b]}function
aJH(a){return[0,c(a,0),0]}function
aJI(a){var
b=c(a,2);return[0,c(a,0),b]}function
aJJ(a){return[0,c(a,0),0]}function
aJK(a){return 0}function
aJL(a){return 1}function
aJM(a){var
b=c(a,1);return[0,b,c(a,0),1,0]}function
aJN(a){var
b=c(a,4),d=c(a,2),e=c(a,1),f=c(a,0);return[0,b,f,d,v(e)]}function
aJO(a){return[1,c(a,0)]}function
aJP(a){return c(a,0)}function
aJQ(a){var
b=c(a,2);return[0,c(a,0),b]}function
aJR(a){return[0,c(a,0),0]}function
aJS(a){var
b=c(a,2);return[0,b,c(a,0)]}function
aJT(a){return[0,c(a,0),0]}function
aJU(a){var
b=c(a,2),d=c(a,0);return[0,P(b,2),d]}function
aJV(a){var
b=c(a,2),d=c(a,0);return[0,P(b,1),d]}function
aJW(a){return[0,P(c(a,0),1),0]}function
aJX(a){return bu([10,c(a,0)])}function
aJY(a){return bu([9,c(a,1)])}function
aJZ(a){c(a,4);var
b=c(a,3),d=[0,v(c(a,1))];return bu([7,v(b),0,d])}function
aJ0(a){c(a,2);return bu([7,v(c(a,1)),0,aJ1])}function
aJ2(a){return bu(aJ3)}function
aJ4(a){c(a,2);return bu([7,v(c(a,1)),1,0])}function
aJ5(a){var
b=c(a,3);return bu([7,[0,b,v(c(a,1))],0,0])}function
aJ6(a){return bu([7,v(c(a,1)),0,0])}function
aJ7(a){return bu([7,[0,c(a,1),0],0,0])}function
aJ8(a){var
b=c(a,3),d=c(a,0),e=v(b);return bu([5,P(d,5),e])}function
aJ9(a){var
b=c(a,2);return bu([5,P(c(a,0),3),[0,b,0]])}function
aJ_(a){return bu([5,P(c(a,0),2),0])}function
aJ$(a){return bu(aKa)}function
aKb(b){var
a=c(b,1);return bu([4,a[1],a[2]])}function
aKc(a){var
b=c(a,2),d=c(a,0),e=v(b);return bu([3,P(d,4),e])}function
aKd(a){var
b=c(a,1);return bu([3,P(c(a,0),2),[0,b,0]])}function
aKe(a){return bu([3,P(c(a,0),1),0])}function
aKf(a){return bu(0)}function
aKg(a){return bu([0,c(a,0)])}function
aKh(b){var
a=c(b,1);if(a)if(!a[2])return a[1];throw oo}function
aKi(a){return c(a,0)}function
aKj(b){var
a=c(b,1);if(a)if(!a[2])return a[1];throw oo}function
aKk(a){return c(a,0)}function
aKl(a){var
b=c(a,2);return bu([1,aKm,b,c(a,0)])}function
aKn(a){var
b=c(a,4),d=c(a,2);return bu([1,b,d,c(a,0)])}function
aKo(a){var
b=c(a,3),d=c(a,2),e=c(a,0),f=v0(d);return bu([1,o(aKp,b),f,e])}function
aKq(a){var
b=c(a,4),d=c(a,2),e=c(a,0),f=v0(d);return bu([1,o(aKr,b),f,e])}function
aKs(a){return c(a,0)}function
aKt(a){var
b=c(a,3);return bu([6,b,c(a,0)])}function
aKu(a){return c(a,0)}function
aKv(b){var
a=c(b,1),d=[0,c(b,0),0],e=s(a[3],d);return[0,a[1],a[2],e]}function
aKw(a){return c(a,0)}function
aKx(a){var
b=c(a,2),d=c(a,0);return bu([8,v(b),d])}function
aKy(a){return c(a,0)}function
aKz(a){var
b=c(a,2),d=c(a,0);return bu([8,v(b),d])}function
aKA(a){return c(a,0)}function
aKB(a){var
b=c(a,2);return[0,c(a,0),b]}function
aKC(a){return[0,c(a,0),0]}function
aKD(a){return 0}function
aKE(a){return 1}function
aKF(a){var
b=c(a,2),d=P(c(a,0),4);return[3,P(b,2),d]}function
aKG(a){var
b=c(a,2),d=P(c(a,0),4);return[1,P(b,2),d]}function
aKH(a){var
b=c(a,3),d=c(a,2),e=c(a,0),f=P(d,3);return[2,rs([0,ap(0)],0,0,0,[0,b],0,0,0,[0,e],f)]}function
aKI(a){var
d=c(a,4),b=c(a,3),e=c(a,2),f=c(a,1),g=c(a,0),h=P(eO(b),3),i=[0,v(g)],j=rs([0,ap(0)],0,0,0,[0,d],i,0,[0,e],[0,f],h);return[0,P(b,3),j]}function
aKJ(a){var
b=c(a,2);return[0,c(a,0),b]}function
aKK(a){return[0,c(a,0),0]}function
aKL(a){var
b=c(a,3),d=c(a,1),e=c(a,0),f=P(d,4),g=P(b,2),h=[0,lf(0)];return ES([0,ap(0)],[0,e],0,h,g,f)}function
aKM(a){var
b=c(a,3),d=c(a,1),e=c(a,0),f=P(d,3),g=P(b,1),h=[0,lf(0)];return ES([0,ap(0)],[0,e],0,h,g,f)}function
aKN(a){var
d=c(a,2),b=c(a,1),e=c(a,0),f=P(d,2),g=b[2],h=[0,b[1]],i=[0,lf(0)];return ER([0,ap(0)],[0,e],0,i,h,g,f)}function
aKO(a){var
d=c(a,2),b=c(a,1),e=c(a,0),f=P(d,1),g=b[2],h=[0,b[1]],i=[0,lf(0)];return ER([0,ap(0)],[0,e],0,i,h,g,f)}function
aKP(a){var
b=c(a,1);return[0,c(a,0),b]}function
aKQ(a){return[0,c(a,0),0]}function
aKR(a){return[0,c(a,0),0]}function
aKS(a){var
b=c(a,1);return[0,c(a,0),b]}function
aKT(a){var
b=c(a,1);return[0,c(a,0),b]}function
aKU(a){return[0,c(a,0),0]}function
aKV(a){return[0,c(a,0),0]}function
aKW(a){return[0,c(a,0),0]}function
aKX(a){return[0,c(a,0),0]}function
aKY(a){var
b=c(a,6),d=c(a,5),e=c(a,4),f=c(a,2),g=c(a,1),h=c(a,0);if(1!==b)Ss(2,aKZ);var
i=v(g),j=P(e,4);return EQ([0,h],[0,a2(0)],[0,d],[0,f],j,i)}function
aK0(a){var
b=c(a,6),d=c(a,5),e=c(a,4),f=c(a,2),g=c(a,1),h=c(a,0);if(1!==b)Ss(2,aK1);var
i=v(g),j=P(e,4);return EQ([0,h],[0,a2(0)],[0,d],[0,f],j,i)}function
aK2(a){var
d=c(a,6),e=c(a,5),f=c(a,3),g=c(a,2),h=c(a,0),b=RV(oq(5)),i=b||lf(0),j=P(e,2),k=[0,s(g,h)];return EP([0,ap(0)],k,[0,i],[0,d],j,f)}function
aK3(a){var
b=c(a,4),d=c(a,3),e=c(a,1),f=c(a,0),g=P(d,2),h=[0,lf(0)];return EP([0,ap(0)],[0,f],h,[0,b],g,e)}function
aK4(a){var
b=c(a,1);return[0,b,c(a,0)]}function
aK5(a){return[0,c(a,0),0]}function
aK6(a){return[0,c(a,0),0]}function
aK7(a){return[0,0,[0,c(a,0)]]}function
aK8(a){var
b=c(a,2),d=[0,c(a,0)];return[0,v(b),d]}function
aK9(a){return[0,v(c(a,0)),0]}function
aK_(a){return aK$}function
aLa(a){var
d=c(a,3),b=c(a,2),e=c(a,1),f=c(a,0),g=P(d,2),h=b[2],i=[0,b[1]],j=[0,a2(0)],k=[0,s(e,f)];return ER([0,ap(0)],k,j,0,i,h,g)}function
aLb(a){var
b=c(a,4),d=c(a,2),e=c(a,1),f=c(a,0),g=P(d,4),h=P(b,2),i=[0,a2(0)],j=[0,s(e,f)];return ES([0,ap(0)],j,i,0,h,g)}function
aLc(a){return c(a,0)}function
aLd(a){var
d=c(a,2),b=c(a,1),e=c(a,0),f=P(d,2),g=b[2],h=[0,b[1]],i=[0,lf(0)];return EO([0,ap(0)],[0,e],i,h,g,f)}function
aLe(a){var
d=c(a,2),b=c(a,1),e=c(a,0),f=P(d,1),g=b[2],h=[0,b[1]],i=[0,lf(0)];return EO([0,ap(0)],[0,e],i,h,g,f)}function
aLf(a){var
b=c(a,1);return[0,c(a,0),b]}function
aLg(a){return[0,c(a,0),0]}function
aLh(a){return[0,c(a,0),0]}function
aLi(a){var
b=c(a,2);return[0,c(a,0),b]}function
aLj(a){return[0,c(a,0),0]}function
aLk(a){return bu([0,c(a,0)])}function
aLl(a){return 1}function
aLm(a){return 0}function
aLn(a){return 2}function
aLo(a){var
b=c(a,1);return[0,c(a,0),b]}function
aLp(a){return v(c(a,1))}function
aLq(a){return[0,c(a,0),0]}function
aLr(a){return 0}function
aLs(a){return bu(0)}function
aLt(a){return bu([0,c(a,0)])}function
aLu(a){var
b=c(a,2);return[0,c(a,0),b]}function
aLv(a){return[0,c(a,0),0]}function
aLw(a){var
b=c(a,1);return[0,c(a,0),b]}function
aLx(a){return v(c(a,1))}function
aLy(a){return[0,c(a,0),0]}function
aLz(a){return 0}function
aLA(a){var
b=c(a,5),d=c(a,3);return[0,[1,c(a,1)],d,[0,b]]}function
aLB(a){return[0,1,1,[0,c(a,2)]]}function
aLC(a){var
b=c(a,3),d=c(a,1);return[0,[0,v(c(a,0))],d,[0,b]]}function
aLD(a){var
b=c(a,3);return[0,[1,c(a,1)],b,0]}function
aLE(a){return aLF}function
aLG(a){return[0,[0,v(c(a,0))],0,0]}function
aLH(a){return[0,[0,v(c(a,0))],1,0]}function
aLI(a){return[0,0,0,[0,c(a,0)]]}function
aLJ(a){return[0,0,1,[0,c(a,0)]]}function
aLK(a){return aLL}function
aLM(a){return 0}function
aLN(a){var
b=c(a,2);return[0,c(a,0),b]}function
aLO(a){var
d=c(a,4),e=c(a,3),b=c(a,2),f=c(a,1),g=c(a,0),h=P(e,3),i=b[3],j=[0,b[2]],k=[0,b[1]],l=[0,v(f)],m=[0,oF(0)],n=[0,a2(0)];return rs([0,ap(0)],[0,g],n,m,[0,d],l,k,j,i,h)}function
aLP(a){var
e=c(a,5),f=c(a,4),g=c(a,3),b=c(a,2),h=c(a,1),d=c(a,0),i=P(g,4),j=b[3],k=[0,b[2]],l=[0,b[1]],m=[0,v(h)],n=[0,f],o=0,p=[0,a2(0)],q=2,r=0===e?[0,[0,[0,aEM,cs(q)],aEN],d]:d;return rs([0,ap(0)],[0,r],p,o,n,m,l,k,j,i)}function
aLQ(a){var
b=c(a,1);return[0,c(a,0),b]}function
aLR(a){return[0,c(a,0),0]}function
aLS(a){var
b=c(a,5),d=c(a,3),e=c(a,1),f=c(a,0),g=P(b,2),h=[0,a2(0)];return mN([0,ap(0)],[0,f],h,[0,e],g,d)}function
aLT(a){var
b=c(a,1),d=c(a,0);return[0,b[1],d]}function
aLU(a){return[0,c(a,0)[1],0]}function
aLV(a){var
b=c(a,3),d=c(a,1),e=c(a,0),f=P(b,2),g=[0,a2(0)];return mN([0,ap(0)],[0,e],g,0,f,d)}function
aLW(d){var
a=c(d,0),b=bK([0,P(eO(a),1)]);return[0,P(a,1),b]}function
aLX(a){var
b=c(a,2),d=c(a,0);return[0,P(b,1),d]}function
aLY(a){var
d=c(a,2),b=c(a,0);return[0,[0,d,b[1]],b[2]]}function
aLZ(a){var
b=c(a,3);c(a,0);return[0,[0,b,0],1]}function
aL0(a){return[0,[0,c(a,1),0],0]}function
aL1(a){return[0,[0,c(a,0),0],0]}function
aL2(a){var
b=c(a,2);return[0,c(a,0),b]}function
aL3(a){return[0,c(a,0),0]}function
aL4(a){c(a,2);return mQ(3,aL5)}function
aL6(a){var
b=c(a,2);return[0,c(a,0),[0,b,0]]}function
aL7(a){var
b=c(a,2);return[0,c(a,0),b]}function
aL8(a){return bK([15,c(a,0)])}function
aL9(a){c(a,3);c(a,1);return a3(aL$,1,aL_,6)}function
aMa(a){var
b=c(a,3),d=jT([9,c(a,1)]);return bK([10,bK([13,P(b,3)]),d])}function
aMb(a){return bK([13,P(c(a,1),3)])}function
aMc(a){c(a,2);return mQ(4,aMd)}function
aMe(a){c(a,3);c(a,1);return a3(aMg,1,aMf,5)}function
aMh(a){var
b=c(a,3);return bK([10,b,c(a,1)])}function
aMi(a){c(a,1);return a3(aMk,1,aMj,3)}function
aMl(a){return ET(c(a,1))}function
aMm(a){c(a,2);c(a,1);return a3(aMo,1,aMn,4)}function
aMp(a){return bK(aMq)}function
aMr(a){var
b=c(a,2);c(a,1);return bK([8,v(b)])}function
aMs(a){c(a,2);c(a,1);return a3(aMu,1,aMt,4)}function
aMv(a){var
b=c(a,2);c(a,1);var
d=v(b);return ET(Sr(cs(4),d))}function
aMw(a){c(a,1);return a3(aMy,1,aMx,3)}function
aMz(b){var
a=c(b,1);return bK([7,a[1],a[2]])}function
aMA(a){return bK([11,P(c(a,0),2)])}function
aMB(a){return bK([6,c(a,0),0])}function
aMC(a){return bK([5,P(c(a,0),1),0])}function
aMD(a){var
b=c(a,2);return bK([3,b,c(a,0)])}function
aME(a){return bK([2,c(a,0)])}function
aMF(a){return bK(0)}function
aMG(a){return c(a,0)}function
aMH(a){return bK([0,P(c(a,0),1)])}function
aMI(b){var
a=c(b,1),d=[0,c(b,0),0],e=s(a[3],d);return[0,a[1],a[2],e]}function
aMJ(a){return bK([14,c(a,0)])}function
aMK(a){return bK([12,c(a,0)])}function
aML(a){c(a,2);return mQ(3,aMM)}function
aMN(a){var
b=c(a,2);return bK([9,b,c(a,0)])}function
aMO(a){c(a,3);c(a,1);return a3(aMQ,4,aMP,8)}function
aMR(a){var
b=c(a,3),d=c(a,1),e=ap(0),f=oJ([4,[0,b,[0,d,0]]]);return EW(cs(2),f,e)}function
aMS(a){c(a,2);return mQ(3,aMT)}function
aMU(a){var
b=c(a,2),d=c(a,0),e=ap(0),f=oJ([4,[0,b,[0,d,0]]]);return EW(cs(2),f,e)}function
aMV(a){var
b=c(a,1);return bK([6,b,[0,c(a,0)]])}function
aMW(a){var
b=c(a,1),d=[0,c(a,0)];return bK([5,P(b,1),d])}function
aMX(a){return bK([4,v(c(a,0))])}function
aMY(a){c(a,2);return mQ(3,aMZ)}function
aM0(a){var
b=c(a,2);return bK([1,b,P(c(a,0),3)])}function
aM1(a){return c(a,0)}function
aM2(a){return oK(0)}function
aM3(a){return oK(0)}function
aM4(a){return[0,0,[0,c(a,0)]]}function
aM5(a){var
b=c(a,2);return[0,[0,b],[0,c(a,0)]]}function
aM6(a){return[0,[0,c(a,0)],0]}function
aM7(a){var
b=c(a,2);return[0,c(a,0),b]}function
aM8(a){return[0,c(a,0),0]}function
aM9(a){var
b=c(a,4),d=c(a,2),e=c(a,0);return[0,[0,P(d,3),e],b]}function
aM_(a){var
b=c(a,2),d=c(a,0);return[0,[0,P(b,1),d],0]}function
aM$(d){var
a=c(d,0),b=aj([0,P([0,eO(a)],1)]);return[0,P(a,1),b]}function
aNa(a){var
b=c(a,2),d=c(a,0);return[0,P(b,1),d]}function
aNb(a){return[0,c(a,1),0]}function
aNc(a){var
b=c(a,2);return[0,b,c(a,0)]}function
aNd(a){return[0,c(a,0),0]}function
aNe(a){return[0,0,c(a,0)]}function
aNf(a){var
b=c(a,2);return[0,[0,b],c(a,0)]}function
aNg(a){var
b=c(a,2);return[0,c(a,0),[0,b,0]]}function
aNh(a){var
b=c(a,2);return[0,c(a,0),b]}function
aNi(a){var
b=c(a,2);return aj([30,b,c(a,0)])}function
aNj(b){var
a=c(b,1),d=c(b,0);return bL([4,a[1],a[2],a[3],d])}function
aNk(a){return c(a,0)}function
aNl(a){var
b=c(a,4),d=c(a,2);return[0,b,[0,d],c(a,0)]}function
aNm(a){var
b=c(a,2);return[0,b,0,c(a,0)]}function
aNn(a){var
b=c(a,2);return[0,c(a,0),b]}function
aNo(a){return[0,c(a,0),0]}function
aNp(a){var
b=c(a,2);return aj([30,b,c(a,0)])}function
aNq(b){var
a=c(b,1),d=c(b,0);return bL([4,a[1],a[2],a[3],d])}function
aNr(a){return c(a,0)}function
aNs(a){var
b=c(a,2);return EY(c(a,0),b)}function
aNt(a){return c(a,0)}function
aNu(a){var
b=c(a,1);return Sx(b,c(a,0))}function
aNv(a){var
b=c(a,3),e=c(a,2),f=c(a,1),g=Sx(f,c(a,0)),d=ap(0);return[0,[0,g,0],e,b[1],b[2],d]}function
aNw(b){var
a=c(b,1),d=c(b,0);return[0,[0,d,a[1]],a[2],a[3],a[4],a[5]]}function
aNx(a){return c(a,0)}function
aNy(a){var
b=c(a,4),d=c(a,2),e=c(a,0);return[0,oJ([10,b,d]),e]}function
aNz(a){var
b=c(a,2);return[0,b,c(a,0)]}function
aNA(a){var
d=c(a,7),e=c(a,4),f=c(a,2),b=Su(e,f,c(a,0)),g=b[1],h=b[2];return[0,oJ([10,EU(d,1),h]),g]}function
aNB(a){var
b=c(a,6),d=c(a,4),e=c(a,2),f=c(a,0),g=jT([8,v(d),e]);return[0,oJ([10,EU(b,1),g]),f]}function
aNC(a){var
b=c(a,1),d=c(a,0);return[0,EU(b,1),d]}function
aND(a){var
b=c(a,1);return[0,b,c(a,0)]}function
aNE(a){return[0,c(a,0),0]}function
aNF(b){var
a=c(b,0);return[0,a,aj([0,P([0,a],1)])]}function
aNG(a){var
b=c(a,1),d=c(a,0);return[0,o(aNH,b),d]}function
aNI(b){var
a=c(b,0),d=a[2];return[0,o(aNJ,a[1]),d]}function
aNK(a){return c(a,0)}function
aNL(a){var
b=c(a,1);return[0,b,c(a,0)]}function
aNM(a){return c(a,0)}function
aNN(a){return[0,aNO,c(a,0)]}function
aNP(a){var
b=c(a,1);return[0,c(a,0),b]}function
aNQ(a){return[0,c(a,0),0]}function
aNR(a){return aj([33,c(a,0)])}function
aNS(a){c(a,6);c(a,2);return a3(aNU,3,aNT,7)}function
aNV(a){var
b=c(a,7),d=c(a,3),e=jT([9,c(a,1)]),f=aj([19,bL([31,d]),e]);return aj([32,1,P(b,1),f])}function
aNW(a){c(a,2);return a3(aNY,1,aNX,5)}function
aNZ(a){var
b=c(a,3),d=jT([9,c(a,1)]);return aj([19,bL([31,b]),d])}function
aN0(a){return aj([31,c(a,1)])}function
aN1(a){var
b=c(a,2),d=c(a,1);return cS(b,d,c(a,0))}function
aN2(a){var
b=c(a,2);return aj([21,b,c(a,0)])}function
aN3(a){c(a,5);c(a,2);c(a,1);return a3(aN5,3,aN4,6)}function
aN6(a){var
b=c(a,5),d=c(a,2);c(a,1);var
e=aj([24,v(d)]);return aj([32,1,P(b,1),e])}function
aN7(a){return aj(aN8)}function
aN9(a){c(a,2);c(a,1);return a3(aN$,1,aN_,4)}function
aOa(a){var
b=c(a,2);c(a,1);return aj([24,v(b)])}function
aOb(a){var
b=c(a,1);return d0([22,P(c(a,0),3)],b)}function
aOc(a){var
b=[0,[0,aOd,c(a,0)],0];return aj([5,ru(aOe,1),b])}function
aOf(a){var
b=c(a,1),d=[0,[0,aOg,c(a,0)],0];return aj([5,ru(b,1),d])}function
aOh(a){c(a,5);c(a,2);c(a,1);return a3(aOj,3,aOi,6)}function
aOk(a){var
b=c(a,5),d=c(a,2);c(a,1);var
e=v(d),f=rt(EX(cs(6),e));return aj([32,1,P(b,1),f])}function
aOl(a){c(a,2);c(a,1);return a3(aOn,1,aOm,4)}function
aOo(a){var
b=c(a,2);c(a,1);var
d=v(b);return rt(EX(cs(4),d))}function
aOp(a){c(a,5);c(a,2);c(a,1);return a3(aOr,3,aOq,6)}function
aOs(a){var
b=c(a,5),d=c(a,2);c(a,1);var
e=aj([14,v(d)]);return aj([32,1,P(b,1),e])}function
aOt(a){return aj(aOu)}function
aOv(a){c(a,2);c(a,1);return a3(aOx,1,aOw,4)}function
aOy(a){var
b=c(a,2);c(a,1);return aj([14,v(b)])}function
aOz(a){c(a,4);c(a,1);return a3(aOB,3,aOA,5)}function
aOC(a){var
d=c(a,4),b=c(a,1),e=aj([11,b[2],b[1]]);return aj([32,1,P(d,1),e])}function
aOD(a){c(a,1);return a3(aOF,1,aOE,3)}function
aOG(b){var
a=c(b,1);return aj([11,a[2],a[1]])}function
aOH(a){c(a,4);c(a,1);return a3(aOJ,3,aOI,5)}function
aOK(h){var
b=c(h,4),a=St(c(h,1));if(a){var
d=a[2],e=a[1];if(!d)return aj([5,bL([0,lm(aEr,EZ)]),[0,[0,aEq,b],[0,[0,aEp,e],0]]]);var
f=d[2],g=d[1];if(!f)return aj([5,bL([0,lm(aEo,EZ)]),[0,[0,aEn,b],[0,[0,aEm,e],[0,[0,aEl,g],0]]]]);if(!f[2]){var
j=[0,[0,aEj,b],[0,[0,aEi,e],[0,[0,aEh,g],[0,[0,aEg,f[1]],0]]]];return aj([5,bL([0,lm(aEk,EZ)]),j])}}var
i=[0,[0,aEd,b],[0,[0,aEc,bL([14,a])],0]];return aj([5,bL([0,lm(aEf,aEe)]),i])}function
aOL(a){c(a,4);c(a,1);return a3(aON,3,aOM,5)}function
aOO(a){var
b=c(a,4),d=[0,[0,aOQ,b],[0,[0,aOP,c(a,1)],0]];return aj([5,bL([0,v1(aOS,aOR)]),d])}function
aOT(a){c(a,4);c(a,1);return a3(aOV,3,aOU,5)}function
aOW(a){var
b=c(a,4),d=[0,[0,aOY,b],[0,[0,aOX,c(a,1)],0]];return aj([5,bL([0,v1(aO0,aOZ)]),d])}function
aO1(a){c(a,4);c(a,1);return a3(aO3,3,aO2,5)}function
aO4(a){var
b=c(a,4),d=c(a,1);return aj([32,1,P(b,1),d])}function
aO5(a){var
b=c(a,2);return aj([12,b,P(c(a,0),3)])}function
aO6(a){var
b=c(a,2);return EY(b,c(a,1))}function
aO7(a){c(a,2);c(a,1);return a3(aO9,1,aO8,3)}function
aO_(a){var
b=c(a,1);return d0([9,[0,aO$,ap(0)],0],b)}function
aPa(a){var
b=c(a,2);return E2(rt(c(a,1)),b)}function
aPb(a){c(a,1);return a3(aPd,1,aPc,3)}function
aPe(a){return rt(c(a,1))}function
aPf(a){return aj([10,c(a,0),0])}function
aPg(a){return aj([9,P(c(a,0),1),0])}function
aPh(a){return aj([1,c(a,0)])}function
aPi(a){return aj([0,P(c(a,0),1)])}function
aPj(b){var
a=c(b,1),d=[0,c(b,0),0],e=s(a[3],d);return[0,a[1],a[2],e]}function
aPk(a){c(a,2);c(a,1);return a3(aPm,1,aPl,4)}function
aPn(a){var
b=c(a,2);return d0([29,c(a,1)],b)}function
aPo(a){var
b=c(a,1);return d0([27,c(a,0)],b)}function
aPp(a){var
b=c(a,1);return d0([26,c(a,0)],b)}function
aPq(a){var
b=c(a,2),d=c(a,0);return aj([23,P(b,1),d])}function
aPr(h){var
b=c(h,6),l=c(h,3),d=c(h,0),a=St(l);if(a){var
e=a[2],f=a[1];if(!e)return aj([5,bL([0,lm(aEL,E0)]),[0,[0,aEK,b],[0,[0,aEJ,f],[0,[0,aEI,d],0]]]]);var
g=e[2],i=e[1];if(!g)return aj([5,bL([0,lm(aEH,E0)]),[0,[0,aEG,b],[0,[0,aEF,f],[0,[0,aEE,i],[0,[0,aED,d],0]]]]]);if(!g[2]){var
k=[0,[0,aEB,b],[0,[0,aEA,f],[0,[0,aEz,i],[0,[0,aEy,g[1]],[0,[0,aEx,d],0]]]]];return aj([5,bL([0,lm(aEC,E0)]),k])}}var
j=[0,[0,aEu,b],[0,[0,aEt,bL([14,a])],[0,[0,aEs,d],0]]];return aj([5,bL([0,lm(aEw,aEv)]),j])}function
aPs(a){var
b=c(a,6),d=c(a,3),e=[0,[0,aPv,b],[0,[0,aPu,d],[0,[0,aPt,c(a,0)],0]]];return aj([5,bL([0,v1(aPx,aPw)]),e])}function
aPy(a){var
b=c(a,6),d=c(a,3),e=[0,[0,aPB,b],[0,[0,aPA,d],[0,[0,aPz,c(a,0)],0]]];return aj([5,bL([0,v1(aPD,aPC)]),e])}function
aPE(a){var
b=c(a,4),d=c(a,2),e=c(a,0);return aj([13,b,P(d,3),e])}function
aPF(g){var
d=c(g,1),h=c(g,0),a=h[1];if(f(d,aD4))var
b=f(d,aD5)?1:0;else
if(1===a[0])switch(a[1][0]){case
1:case
2:case
3:var
b=0;break;default:var
b=2}else
var
b=0;switch(b){case
0:var
e=1===a[0]?3===a[1][0]?1:0:0;break;case
1:var
e=0;break;default:var
e=1}return e?aj(a):aj([5,ru(o(aD7,d),1),[0,[0,aD6,h],0]])}function
aPG(k){var
e=c(k,1),l=c(k,0),d=l[1];if(f(e,aD0))var
g=f(e,aD1)?1:0;else
if(1===d[0]){var
b=d[1];switch(b[0]){case
0:return aj([1,[0,-b[1]|0]]);case
4:return aj([1,[4,-b[1]|0]]);case
5:return aj([1,[5,fB(b[1])]]);case
6:return aj([1,[6,-b[1]|0]]);default:var
g=0}}else
var
g=0;if(!g)if(1===d[0]){var
i=d[1];if(3===i[0]){var
a=i[1];if(0<r(a))if(45===u(a,0))var
j=al(a,1,r(a)-1|0),h=1;else
var
h=0;else
var
h=0;if(!h)var
j=o(aDZ,a);return aj([1,[3,j]])}}return aj([5,ru(o(aD3,e),1),[0,[0,aD2,l],0]])}function
aPH(a){var
b=c(a,2);return cS(b,aPI,c(a,0))}function
aPJ(a){var
b=c(a,2);return cS(b,aPK,c(a,0))}function
aPL(a){var
b=c(a,2);return cS(b,aPM,c(a,0))}function
aPN(a){var
b=c(a,2);return cS(b,aPO,c(a,0))}function
aPP(a){var
b=c(a,2);return cS(b,aPQ,c(a,0))}function
aPR(a){var
b=c(a,2);return cS(b,aPS,c(a,0))}function
aPT(a){var
b=c(a,2);return cS(b,aPU,c(a,0))}function
aPV(a){var
b=c(a,2);return cS(b,aPW,c(a,0))}function
aPX(a){var
b=c(a,2);return cS(b,aPY,c(a,0))}function
aPZ(a){var
b=c(a,2);return cS(b,aP0,c(a,0))}function
aP1(a){var
b=c(a,2);return cS(b,aP2,c(a,0))}function
aP3(a){var
b=c(a,2);return cS(b,aP4,c(a,0))}function
aP5(a){var
b=c(a,2);return cS(b,aP6,c(a,0))}function
aP7(a){var
b=c(a,2);return cS(b,aP8,c(a,0))}function
aP9(a){var
b=c(a,2);return cS(b,aP_,c(a,0))}function
aP$(a){var
b=c(a,2),d=c(a,1);return cS(b,d,c(a,0))}function
aQa(a){var
b=c(a,2),d=c(a,1);return cS(b,d,c(a,0))}function
aQb(a){var
b=c(a,2),d=c(a,1);return cS(b,d,c(a,0))}function
aQc(a){var
b=c(a,2),d=c(a,1);return cS(b,d,c(a,0))}function
aQd(a){var
b=c(a,2),d=c(a,1);return cS(b,d,c(a,0))}function
aQe(a){var
b=c(a,3),d=c(a,1),e=ap(0),f=bL([8,[0,b,[0,d,0]]]);return EV(cs(2),f,e)}function
aQf(a){var
b=c(a,2),d=c(a,0),e=ap(0),f=bL([8,[0,b,[0,d,0]]]);return EV(cs(2),f,e)}function
aQg(a){var
b=c(a,8),d=c(a,7),e=c(a,5),f=c(a,4),g=c(a,3);return d0([18,d,e,g,f,c(a,1)],b)}function
aQh(a){var
b=c(a,4),d=c(a,3);return d0([17,d,c(a,1)],b)}function
aQi(a){var
b=c(a,3),d=c(a,2);return d0([15,d,c(a,0),0],b)}function
aQj(a){var
b=c(a,5),d=c(a,4),e=c(a,2);return d0([15,d,e,[0,c(a,0)]],b)}function
aQk(a){var
b=c(a,1);return aj([10,b,[0,c(a,0)]])}function
aQl(a){var
b=c(a,1),d=[0,c(a,0)];return aj([9,P(b,1),d])}function
aQm(a){return aj([8,v(c(a,0))])}function
aQn(a){c(a,3);c(a,2);return oK(0)}function
aQo(a){var
b=c(a,4),d=c(a,3);c(a,1);return d0([7,d,v(c(a,0))],b)}function
aQp(a){var
b=c(a,4),d=c(a,3);c(a,1);return d0([6,d,v(c(a,0))],b)}function
aQq(a){var
b=c(a,5),d=c(a,2);return d0([30,d,c(a,0)],b)}function
aQr(a){var
d=c(a,2),b=c(a,1),e=c(a,0);return d0([4,b[1],b[2],b[3],e],d)}function
aQs(a){var
b=c(a,2);c(a,1);return d0([3,v(c(a,0))],b)}function
aQt(a){var
b=c(a,4),d=c(a,3),e=c(a,2),f=c(a,0);return d0([32,b,P(e,5),f],d)}function
aQu(a){var
b=c(a,4),d=c(a,3),e=c(a,2),f=c(a,0);return d0([25,P(d,4),e,f],b)}function
aQv(b){var
a=c(b,2),i=c(b,0),d=a[1],e=g(function(a){if(0!==a[3])throw[0,fM,[2,a[6],aEP]];return ep([0,a[6]],0,0,0,a[1],a[2])},d),f=[0,a[3],a[4]],h=v(e);return d0([2,a[2],h,i],f)}function
aQw(a){var
b=c(a,1);return aj([5,b,v(c(a,0))])}function
aQx(a){return c(a,0)}function
aQy(a){var
b=c(a,2);return bK([10,b,c(a,0)])}function
aQz(a){return c(a,0)}function
aQA(b){var
a=c(b,0);return[0,a,bK([0,P(a,1)])]}function
aQB(a){var
b=c(a,2),d=c(a,0),e=bK([10,b[2],d]);return[0,b[1],e]}function
aQC(a){return c(a,0)}function
aQD(a){return[0,c(a,0)]}function
aQE(a){return 0}function
aQF(a){return bK(0)}function
aQG(a){return bK([0,P(c(a,0),1)])}function
aQH(a){return[0,aQI,0,c(a,0)]}function
aQJ(a){var
b=c(a,1);return[0,b,0,c(a,0)]}function
aQK(b){var
a=c(b,0);return[0,a[1],0,a[2]]}function
aQL(b){var
a=c(b,1);return[0,a[1],0,a[2]]}function
aQM(a){var
b=c(a,1),d=c(a,0);return[0,o(aQN,b),0,d]}function
aQO(a){var
b=c(a,4),d=c(a,2),e=c(a,1);return[0,o(aQP,b),e,d]}function
aQQ(b){var
a=c(b,0),d=a[2];return[0,o(aQR,a[1]),0,d]}function
aQS(a){var
b=c(a,2),d=c(a,1),e=b[2];return[0,o(aQT,b[1]),d,e]}function
aQU(a){var
b=c(a,2);return aj([16,b,c(a,0)])}function
aQV(a){return rt(c(a,1))}function
aQW(a){return c(a,0)}function
aQX(a){var
b=c(a,5),d=c(a,4),e=c(a,3),f=c(a,1),g=c(a,0),h=P(e,4),i=[0,oF(0)],j=[0,a2(0)];return mO([0,ap(0)],[0,g],j,i,[0,b],[0,d],h,f)}function
aQY(a){var
b=c(a,5),d=c(a,4),e=c(a,3),f=c(a,1),g=c(a,0),h=P(e,5),i=[0,a2(0)];return mO([0,ap(0)],[0,g],i,0,[0,b],[0,d],h,f)}function
aQZ(a){var
b=c(a,1);return[0,c(a,0),b]}function
aQ0(a){return[0,c(a,0),0]}function
aQ1(a){var
b=c(a,5),d=c(a,4),e=c(a,3),f=c(a,1),g=c(a,0),h=P(e,4),i=[0,oF(0)],j=[0,a2(0)];return mO([0,ap(0)],[0,g],j,i,[0,b],[0,d],h,f)}function
aQ2(a){var
b=c(a,5),d=c(a,4),e=c(a,3),f=c(a,1),g=c(a,0),h=P(e,4),i=[0,a2(0)];return mO([0,ap(0)],[0,g],i,0,[0,b],[0,d],h,f)}function
aQ3(a){var
b=c(a,1);return[0,c(a,0),b]}function
aQ4(a){return[0,c(a,0),0]}function
aQ5(a){var
b=c(a,2);return[0,b,c(a,0)]}function
aQ6(a){var
b=c(a,2),d=c(a,0);return[0,b,d,ap(0)]}function
aQ7(a){var
b=c(a,2);return[0,b,0,1,c(a,0)]}function
aQ8(a){var
b=c(a,3),d=c(a,2);return[0,d,1,b,c(a,0)]}function
aQ9(a){var
b=c(a,3),d=c(a,2);return[0,d,b,0,c(a,0)]}function
aQ_(a){var
b=c(a,0);vQ(0);return oI(0,0,[4,b])}function
aQ$(a){var
b=c(a,1),d=c(a,0);return oI([0,d],[0,a2(0)],[5,b])}function
aRa(a){var
b=c(a,1),d=c(a,0);return oI([0,d],[0,a2(0)],[3,b])}function
aRb(a){var
b=c(a,4),d=c(a,3),e=c(a,1),f=c(a,0),g=[2,[0,d,b[1],b[2],e]];return oI([0,f],[0,a2(0)],g)}function
aRc(a){var
b=c(a,1),d=c(a,0);return oI([0,d],[0,a2(0)],[1,b])}function
aRd(a){var
b=c(a,1),d=c(a,0);return oI([0,d],[0,a2(0)],[0,b])}function
aRe(a){var
b=c(a,1),d=c(a,0);return s([0,d,Sk(ro(2))],b)}function
aRf(a){return 0}function
aRg(a){return bu(0)}function
aRh(a){return c(a,1)}function
aRi(a){var
b=c(a,1);return[0,b,rx(Sk,2,v(c(a,0)))]}function
aRj(a){return ll([3,c(a,0)])}function
aRk(b){var
a=c(b,1),d=[0,c(b,0),0],e=s(a[3],d);return[0,a[1],a[2],e]}function
aRl(a){c(a,1);return a3(aRn,1,aRm,3)}function
aRo(a){return ll([1,c(a,1)])}function
aRp(a){return ll([0,P(c(a,0),1),0])}function
aRq(a){var
b=c(a,2),d=c(a,0),e=v(b);return ll([0,[0,d,cs(4)],e])}function
aRr(a){var
b=c(a,2);return ll([2,aRs,b,c(a,0)])}function
aRt(a){var
b=c(a,4),d=c(a,2);return ll([2,b,d,c(a,0)])}function
aRu(a){var
b=c(a,3),d=c(a,2),e=c(a,0),f=v0(d);return ll([2,o(aRv,b),f,e])}function
aRw(a){var
b=c(a,4),d=c(a,2),e=c(a,0),f=v0(d);return ll([2,o(aRx,b),f,e])}function
aRy(a){return c(a,0)}function
aRz(a){var
d=c(a,9),e=c(a,8),f=c(a,7),g=c(a,4),h=c(a,2),b=Su(g,h,c(a,0)),i=[1,d,bL([28,b[1],[0,b[2]]])];return[0,[0,f,cs(3)],e,i]}function
aRA(a){var
b=c(a,6),d=c(a,5),e=c(a,4),f=c(a,2),g=[1,b,bL([28,c(a,0),[0,f]])];return[0,[0,e,cs(3)],d,g]}function
aRB(a){var
b=c(a,3),d=c(a,2),e=c(a,1),f=[1,b,bL([28,c(a,0),0])];return[0,[0,e,cs(3)],d,f]}function
aRC(a){var
b=c(a,5),d=c(a,3),e=c(a,2),f=c(a,0);if(0===b)oK(0);return[0,[0,e,cs(4)],d,[0,f]]}function
aRD(a){var
b=c(a,5),d=c(a,2),e=c(a,0);if(0===b)oK(0);return[0,[0,d,cs(4)],0,[0,e]]}function
aRE(a){var
b=c(a,5),d=c(a,4),e=c(a,3),f=c(a,2),g=[1,b,EY(c(a,0),f)];return[0,P(e,3),d,g]}function
aRF(a){var
b=c(a,4),d=c(a,3),e=c(a,2),f=[1,b,c(a,0)];return[0,P(e,3),d,f]}function
aRG(a){var
b=c(a,3),d=c(a,2),e=[0,c(a,0)];return[0,P(d,3),b,e]}function
aRH(a){var
b=c(a,5),d=c(a,2),e=c(a,0);if(0===b)oK(0);return[0,[0,d,cs(4)],1,[0,e]]}function
aRI(a){return 0}function
aRJ(a){return[0,c(a,0)]}function
aRK(a){var
b=c(a,0);vQ(0);return mP(0,0,[5,b])}function
aRL(a){var
b=c(a,1),d=c(a,0);return mP([0,d],[0,a2(0)],[6,b])}function
aRM(a){var
b=c(a,1),d=c(a,0);return mP([0,d],[0,a2(0)],[4,b])}function
aRN(a){var
b=c(a,1),d=c(a,0);return mP([0,d],[0,a2(0)],[3,b])}function
aRO(a){var
b=c(a,1),d=c(a,0);return mP([0,d],[0,a2(0)],[2,b])}function
aRP(a){var
b=c(a,1),d=c(a,0);return mP([0,d],[0,a2(0)],[1,b])}function
aRQ(a){var
b=c(a,3),d=c(a,2),e=c(a,1),f=c(a,0);return mP([0,f],[0,a2(0)],[0,b,d,e])}function
aRR(a){var
b=c(a,1),d=c(a,0);return s([0,d,Sm(ro(2))],b)}function
aRS(a){return 0}function
aRT(a){return oJ(0)}function
aRU(a){var
b=c(a,3);return bK([10,b,c(a,1)])}function
aRV(a){return ET(c(a,1))}function
aRW(a){var
b=c(a,1);return[0,b,rx(Sm,2,v(c(a,0)))]}function
aRX(a){c(a,1);return a3(aRZ,1,aRY,3)}function
aR0(a){return c(a,1)}function
aR1(a){c(a,3);c(a,1);return a3(aR3,1,aR2,5)}function
aR4(a){var
b=c(a,3);return hc([5,b,c(a,1)])}function
aR5(a){c(a,1);return a3(aR7,1,aR6,3)}function
aR8(a){return hc([1,c(a,1)])}function
aR9(a){return hc([0,P(c(a,0),1),0])}function
aR_(a){var
b=c(a,2),d=c(a,0),e=v(b);return hc([0,[0,d,cs(4)],e])}function
aR$(a){return hc([6,c(a,0)])}function
aSa(b){var
a=c(b,1),d=[0,c(b,0),0],e=s(a[3],d);return[0,a[1],a[2],e]}function
aSb(b){var
a=c(b,2),h=c(b,0),d=a[1],e=g(function(a){if(0!==a[3])throw[0,fM,[2,a[6],aEQ]];return ep([0,a[6]],0,0,0,a[1],a[2])},d);if(0!==a[3])throw[0,fM,[2,a[5],aER]];if(0!==a[4])throw[0,fM,[2,a[5],aES]];var
f=v(e);return hc([4,a[2],f,h])}function
aSc(a){var
b=c(a,1);return hc([3,b,v(c(a,0))])}function
aSd(a){return c(a,0)}function
aSe(a){return c(a,0)}function
aSf(b){var
a=c(b,1),d=c(b,0);return hc([2,a[1],a[2],a[3],d])}function
aSg(b){var
a=c(b,2),d=c(b,0);return hc([2,a[1],a[2],a[3],d])}function
aSh(a){return v(c(a,1))}function
aSi(a){return 0}function
aSj(b){var
a=c(b,1),d=c(b,0);return hc([2,a[1],a[2],a[3],d])}function
aSk(a){var
b=c(a,2);return hc([5,c(a,0),b])}function
aSl(a){return c(a,0)}function
aSm(a){var
b=c(a,4),d=c(a,3),e=c(a,2),f=c(a,1),g=c(a,0),h=P(e,4),i=[0,oF(0)],j=[0,a2(0)];return mO([0,ap(0)],[0,g],j,i,[0,b],[0,d],h,f)}function
aSn(a){var
b=c(a,4),d=c(a,3),e=c(a,2),f=c(a,1),g=c(a,0),h=P(e,4),i=[0,a2(0)];return mO([0,ap(0)],[0,g],i,0,[0,b],[0,d],h,f)}function
aSo(a){var
b=c(a,1);return[0,c(a,0),b]}function
aSp(a){return[0,c(a,0),0]}function
aSq(a){var
b=c(a,2),d=c(a,1),e=c(a,0),f=P(b,3),g=[0,a2(0)];return Sn([0,ap(0)],[0,e],g,0,d,f)}function
aSr(a){return[0,c(a,0)]}function
aSs(a){return 0}function
aSt(a){var
b=c(a,3),d=c(a,1),e=c(a,0),f=P(b,2),g=[0,oF(0)],h=[0,a2(0)];return rr([0,ap(0)],[0,e],h,g,f,d)}function
aSu(a){var
b=c(a,3),d=c(a,1),e=c(a,0),f=P(b,3),g=[0,a2(0)];return rr([0,ap(0)],[0,e],g,0,f,d)}function
aSv(a){var
b=c(a,1);return[0,c(a,0),b]}function
aSw(a){return[0,c(a,0),0]}function
aSx(a){var
b=c(a,3),d=c(a,1),e=c(a,0),f=P(d,4),g=R$([0,cs(4)],0,f),h=P(b,2),i=[0,a2(0)];return rr([0,ap(0)],[0,e],i,0,h,g)}function
aSy(a){var
b=c(a,2),d=c(a,1),e=c(a,0),f=P(b,2),g=[0,a2(0)];return rr([0,ap(0)],[0,e],g,0,f,d)}function
aSz(a){var
b=c(a,0);return lk([2,P(aSA,1),0,b])}function
aSB(a){var
b=c(a,4),d=c(a,2),e=c(a,0);return lk([2,P(b,2),[0,d],e])}function
aSC(a){return c(a,0)}function
aSD(a){var
b=c(a,1),d=c(a,0),e=[0,a2(0)];return lj([0,ap(0)],[0,d],e,b)}function
aSE(a){var
b=c(a,2),d=c(a,1),e=c(a,0),f=P(d,3),g=[0,a2(0)];return So([0,ap(0)],[0,e],g,[0,b],f)}function
aSF(a){var
b=c(a,0);vQ(0);return eQ([11,b])}function
aSG(a){var
b=c(a,1),d=c(a,0);return eQ([12,b,dY(a2(0),d)])}function
aSH(a){return eQ([10,v(c(a,0))])}function
aSI(a){return eQ([9,v(c(a,0))])}function
aSJ(a){return eQ([8,c(a,0)])}function
aSK(a){return eQ([7,c(a,0)])}function
aSL(a){return eQ([6,c(a,0)])}function
aSM(a){return eQ([5,v(c(a,0))])}function
aSN(a){return eQ([4,c(a,0)])}function
aSO(a){return eQ([4,c(a,0)])}function
aSP(a){return eQ([3,c(a,0)])}function
aSQ(a){return eQ([2,c(a,0)])}function
aSR(a){return eQ([1,v(c(a,0))])}function
aSS(a){return eQ([0,c(a,0)])}function
aST(a){return eQ([0,c(a,0)])}function
aSU(a){var
b=c(a,1),d=[0,b,c(a,0)];return s(Sv(1),d)}function
aSV(a){var
b=c(a,0);return s(Sv(1),b)}function
aSW(a){return 0}function
aSX(b){var
a=c(b,1),d=[0,c(b,0),0],e=s(a[3],d);return[0,a[1],a[2],e]}function
aSY(a){return lk([5,c(a,0)])}function
aSZ(a){c(a,1);return a3(aS1,1,aS0,3)}function
aS2(a){return c(a,1)}function
aS3(a){return lk([4,c(a,0)])}function
aS4(a){var
b=c(a,2);return lk([3,b,v(c(a,0))])}function
aS5(a){var
b=c(a,2),d=c(a,0);return G(function(b,a){return lk([2,a[1],a[2],b])},d,b)}function
aS6(a){c(a,1);return a3(aS8,1,aS7,3)}function
aS9(a){return lk([1,Sw(2,c(a,1))])}function
aS_(a){return lk([0,P(c(a,0),1)])}function
aS$(a){var
b=c(a,2),d=c(a,1),e=c(a,0),f=P(b,2),g=[0,oF(0)],h=[0,a2(0)];return vZ([0,ap(0)],[0,e],h,g,f,d)}function
aTa(a){var
b=c(a,2),d=c(a,1),e=c(a,0),f=P(b,3),g=[0,a2(0)];return vZ([0,ap(0)],[0,e],g,0,f,d)}function
aTb(a){var
b=c(a,1);return[0,c(a,0),b]}function
aTc(a){return[0,c(a,0),0]}function
aTd(a){var
b=c(a,2),d=c(a,1),e=c(a,0),f=P(b,2),g=[0,a2(0)];return vZ([0,ap(0)],[0,e],g,0,f,d)}function
aTe(a){var
b=c(a,1),d=c(a,0);return fc([2,b[1],b[2],d])}function
aTf(a){var
b=c(a,2);return fc([4,c(a,0),b])}function
aTg(a){return c(a,0)}function
aTh(a){var
b=c(a,1),d=c(a,0),e=[0,a2(0)];return lj([0,ap(0)],[0,d],e,b)}function
aTi(a){var
b=c(a,0);vQ(0);return eR([13,b])}function
aTj(a){var
b=c(a,1),d=c(a,0);return eR([14,b,dY(a2(0),d)])}function
aTk(a){return eR([12,c(a,0)])}function
aTl(a){return eR([11,v(c(a,0))])}function
aTm(a){return eR([10,v(c(a,0))])}function
aTn(a){return eR([9,c(a,0)])}function
aTo(a){return eR([8,c(a,0)])}function
aTp(a){return eR([7,v(c(a,0))])}function
aTq(a){return eR([6,c(a,0)])}function
aTr(a){return eR([5,c(a,0)])}function
aTs(a){return eR([4,c(a,0)])}function
aTt(a){return eR([3,v(c(a,0))])}function
aTu(a){return eR([2,c(a,0)])}function
aTv(l){var
a=c(l,0),b=a[1];if(b){var
e=b[1];if(typeof
e[1][1]==="number")if(b[2])var
d=0;else
var
k=E2(e[2],[0,0,a[4]]),f=eR([0,k,e[3]]),d=1;else
var
d=0}else
var
d=0;if(!d){if(0!==a[4])throw[0,fM,[2,a[5],aEO]];var
i=v(g(function(a){var
b=a[5],d=c3(b),f=a[2],g=a[1],h=dk===d?b[1]:z===d?gm(b):b,c=a[4],e=c3(c),i=[0,h],j=dk===e?c[1]:z===e?gm(c):c;return ep([0,a[6]],[0,a[3]],[0,j],i,g,f)},b)),f=eR([1,a[2],i])}var
h=a[3];if(h){var
j=[14,[0,h[1],[0,[0,f,0]]],0];return dZ([0,ri(0)],j)}return f}function
aTw(a){var
b=c(a,1),d=[0,b,c(a,0)];return s(rw(1),d)}function
aTx(a){var
b=c(a,0);return s(rw(1),b)}function
aTy(a){return 0}function
aTz(a){return c(a,0)}function
aTA(a){var
b=c(a,2),d=c(a,1),e=c(a,0);vR(1,2);var
f=[0,rv(b,d),e];return s(rw(1),f)}function
aTB(a){return fc([6,c(a,0)])}function
aTC(b){var
a=c(b,1),d=[0,c(b,0),0],e=s(a[3],d);return[0,a[1],a[2],e]}function
aTD(a){c(a,1);return a3(aTF,1,aTE,4)}function
aTG(a){c(a,2);return a3(aTI,1,aTH,5)}function
aTJ(a){c(a,2);return a3(aTL,1,aTK,5)}function
aTM(a){var
b=c(a,3);return fc([5,bL([20,b,0,jT([9,c(a,1)])])])}function
aTN(a){var
b=c(a,5),d=c(a,3),e=jT([9,c(a,1)]);return fc([5,bL([20,b,[0,jT([9,d])],e])])}function
aTO(a){var
b=c(a,3);return fc([5,bL([19,b,jT([9,c(a,1)])])])}function
aTP(a){return fc([5,c(a,1)])}function
aTQ(a){c(a,1);return a3(aTS,1,aTR,3)}function
aTT(a){return c(a,1)}function
aTU(a){c(a,3);c(a,1);return a3(aTW,1,aTV,5)}function
aTX(a){var
b=c(a,3);return fc([4,b,c(a,1)])}function
aTY(a){c(a,3);c(a,1);return a3(aT0,2,aTZ,4)}function
aT1(a){var
b=c(a,2);return fc([3,b,fc(aT2)])}function
aT3(a){var
b=c(a,3);return fc([3,b,c(a,1)])}function
aT4(a){var
b=c(a,2),d=c(a,0);return G(function(b,a){return fc([2,a[1],a[2],b])},d,b)}function
aT5(a){c(a,1);return a3(aT7,1,aT6,3)}function
aT8(a){return fc([1,E3(2,c(a,1))])}function
aT9(a){return fc([0,P(c(a,0),1)])}function
aT_(a){return[0,c(a,0),0]}function
aT$(a){var
b=c(a,1);return[0,c(a,0),b]}function
aUa(a){return aUb}function
aUc(a){return c(a,0)}function
aUd(a){var
b=c(a,3),d=[0,c(a,1)];return[0,P(b,2),d]}function
aUe(a){return[0,P(aUf,2),0]}function
aUg(a){return c(a,1)}function
aUh(a){return c(a,1)}function
aUi(a){return c(a,1)}function
aUj(a){var
b=c(a,1),d=c(a,0);vR(1,1);return s(iz(1),[0,b,d])}function
aUk(a){var
b=c(a,1),d=[0,[0,[0,b,0]],c(a,0)];return s(iz(1),d)}function
aUl(a){var
b=c(a,1),d=c(a,0);vR(2,3);var
e=s(iz(2),[0,b,d]);return s(iz(1),e)}function
aUm(a){var
b=c(a,1),d=[0,[0,[0,b,0]],c(a,0)],e=s(iz(2),d);return s(iz(1),e)}function
aUn(a){var
b=c(a,2),d=c(a,1),e=c(a,0);vR(2,3);var
f=[0,[0,[0,rv(b,d),0]],e],g=s(iz(2),f);return s(iz(1),g)}function
aUo(a){return iz(1)}function
aUp(a){return 0}function
aUq(a){var
b=c(a,2),d=c(a,1),e=c(a,0),f=[0,[0,[0,rv(b,d),0]],e];return s(iz(1),f)}function
aUr(a){return c(a,0)}function
aUs(a){var
b=c(a,0),d=1;return rx(function(a){return[0,[0,vY(a)],0]},d,b)}function
aUt(a){var
b=c(a,1),d=[0,b,c(a,0)];return s(rw(1),d)}function
aUu(a){return 0}function
aUv(a){return c(a,0)}function
aUw(a){var
b=c(a,1),d=[0,rv(b,c(a,0)),0];return s(rw(1),d)}function
aUx(a){throw qT}function
aUy(a){return c(a,1)}function
aUz(a){return[0,E3(1,c(a,1))]}function
aUA(a){return Sw(1,c(a,1))}function
aUB(a){return E3(1,c(a,1))}var
aUD=[0,[0,function(a){return dq(aUC)},aUB,aUA,aUz,aUy,aUx,aUw,aUv,aUu,aUt,aUs,aUr,aUq,aUp,aUo,aUn,aUm,aUl,aUk,aUj,aUi,aUh,aUg,aUe,aUd,aUc,aUa,aT$,aT_,aT9,aT8,aT5,aT4,aT3,aT1,aTY,aTX,aTU,aTT,aTQ,aTP,aTO,aTN,aTM,aTJ,aTG,aTD,aTC,aTB,aTA,aTz,aTy,aTx,aTw,aTv,aTu,aTt,aTs,aTr,aTq,aTp,aTo,aTn,aTm,aTl,aTk,aTj,aTi,aTh,aTg,aTf,aTe,aTd,aTc,aTb,aTa,aS$,aS_,aS9,aS6,aS5,aS4,aS3,aS2,aSZ,aSY,aSX,aSW,aSV,aSU,aST,aSS,aSR,aSQ,aSP,aSO,aSN,aSM,aSL,aSK,aSJ,aSI,aSH,aSG,aSF,aSE,aSD,aSC,aSB,aSz,aSy,aSx,aSw,aSv,aSu,aSt,aSs,aSr,aSq,aSp,aSo,aSn,aSm,aSl,aSk,aSj,aSi,aSh,aSg,aSf,aSe,aSd,aSc,aSb,aSa,aR$,aR_,aR9,aR8,aR5,aR4,aR1,aR0,aRX,aRW,aRV,aRU,aRT,aRS,aRR,aRQ,aRP,aRO,aRN,aRM,aRL,aRK,aRJ,aRI,aRH,aRG,aRF,aRE,aRD,aRC,aRB,aRA,aRz,aRy,aRw,aRu,aRt,aRr,aRq,aRp,aRo,aRl,aRk,aRj,aRi,aRh,aRg,aRf,aRe,aRd,aRc,aRb,aRa,aQ$,aQ_,aQ9,aQ8,aQ7,aQ6,aQ5,aQ4,aQ3,aQ2,aQ1,aQ0,aQZ,aQY,aQX,aQW,aQV,aQU,aQS,aQQ,aQO,aQM,aQL,aQK,aQJ,aQH,aQG,aQF,aQE,aQD,aQC,aQB,aQA,aQz,aQy,aQx,aQw,aQv,aQu,aQt,aQs,aQr,aQq,aQp,aQo,aQn,aQm,aQl,aQk,aQj,aQi,aQh,aQg,aQf,aQe,aQd,aQc,aQb,aQa,aP$,aP9,aP7,aP5,aP3,aP1,aPZ,aPX,aPV,aPT,aPR,aPP,aPN,aPL,aPJ,aPH,aPG,aPF,aPE,aPy,aPs,aPr,aPq,aPp,aPo,aPn,aPk,aPj,aPi,aPh,aPg,aPf,aPe,aPb,aPa,aO_,aO7,aO6,aO5,aO4,aO1,aOW,aOT,aOO,aOL,aOK,aOH,aOG,aOD,aOC,aOz,aOy,aOv,aOt,aOs,aOp,aOo,aOl,aOk,aOh,aOf,aOc,aOb,aOa,aN9,aN7,aN6,aN3,aN2,aN1,aN0,aNZ,aNW,aNV,aNS,aNR,aNQ,aNP,aNN,aNM,aNL,aNK,aNI,aNG,aNF,aNE,aND,aNC,aNB,aNA,aNz,aNy,aNx,aNw,aNv,aNu,aNt,aNs,aNr,aNq,aNp,aNo,aNn,aNm,aNl,aNk,aNj,aNi,aNh,aNg,aNf,aNe,aNd,aNc,aNb,aNa,aM$,aM_,aM9,aM8,aM7,aM6,aM5,aM4,aM3,aM2,aM1,aM0,aMY,aMX,aMW,aMV,aMU,aMS,aMR,aMO,aMN,aML,aMK,aMJ,aMI,aMH,aMG,aMF,aME,aMD,aMC,aMB,aMA,aMz,aMw,aMv,aMs,aMr,aMp,aMm,aMl,aMi,aMh,aMe,aMc,aMb,aMa,aL9,aL8,aL7,aL6,aL4,aL3,aL2,aL1,aL0,aLZ,aLY,aLX,aLW,aLV,aLU,aLT,aLS,aLR,aLQ,aLP,aLO,aLN,aLM,aLK,aLJ,aLI,aLH,aLG,aLE,aLD,aLC,aLB,aLA,aLz,aLy,aLx,aLw,aLv,aLu,aLt,aLs,aLr,aLq,aLp,aLo,aLn,aLm,aLl,aLk,aLj,aLi,aLh,aLg,aLf,aLe,aLd,aLc,aLb,aLa,aK_,aK9,aK8,aK7,aK6,aK5,aK4,aK3,aK2,aK0,aKY,aKX,aKW,aKV,aKU,aKT,aKS,aKR,aKQ,aKP,aKO,aKN,aKM,aKL,aKK,aKJ,aKI,aKH,aKG,aKF,aKE,aKD,aKC,aKB,aKA,aKz,aKy,aKx,aKw,aKv,aKu,aKt,aKs,aKq,aKo,aKn,aKl,aKk,aKj,aKi,aKh,aKg,aKf,aKe,aKd,aKc,aKb,aJ$,aJ_,aJ9,aJ8,aJ7,aJ6,aJ5,aJ4,aJ2,aJ0,aJZ,aJY,aJX,aJW,aJV,aJU,aJT,aJS,aJR,aJQ,aJP,aJO,aJN,aJM,aJL,aJK,aJJ,aJI,aJH,aJG,aJF,aJE,aJD,aJC,aJB,aJA,aJz,aJy,aJx,aJw,aJv,aJu,aJs,aJr,aJq,aJp,aJo,aJn,aJm,aJl,aJk,aJj,aJi,aJh,aJf,aJe,aJd,aJc,aJb,aJa,aI$,aI_,aI9,aI8,aI7,aI6,aI5,aI2,aI0,aIY,aIX,aIW,aIV,aIU,aIT,aIS,aIR,aIP,aIN,aIL,aIJ,aIH,aIF,aID,aIB,aIz,aIx,aIv,aIt,aIr,aIp,aIn,aIl,aIk,aIi,aIg,aIe,aIc,aIb,aIa,aH$,aH9,aH7,aH5,aH3,aH2,aH1,aH0,aHZ,aHY,aHX,aHW,aHV,aHU,aHT,aHS,aHR,aHQ,aHP,aHO,aHN,aHM,aHL,aHK,aHJ,aHH,aHF,aHE,aHD,aHC,aHB,aHA,aHz,aHy,aHx,aHw,aHv,aHu,aHt,aHs,aHq,aHo,aHm,aHk,aHi,aHh,aHg,aHf,aHe,aHd,aHc,aHa,aG_,aG8,aG6,aG5,aG4,aG2,aG0,aGY,aGW,aGU,aGS,aGQ,aGO,aGM,aGK,aGI,aGG,aGE,aGC,aGA,aGy,aGw,aGu,aGs,aGq,aGo,aGm,aGk,aGi,aGg,aGe,aGc,aGa,aF_,aF8,aF6,aF4,aF2,aF0,aFY,aFW,aFU,aFS,aFQ,aFO,aFM,aFK,aFI,aFG,aFE,aFC,aFA,aFy,aFx,aFv,aFu,aFt,aFs,aFr,aFq,aFp,aFo,aFm,aFl,aFk,aFj,aFi,aFh,aFg,aFf,aFe,aFd,aFc,aFb,aFa,aE$,aE_,aE9],aEU,aEW,aEX,aEY,aEZ,aE0,aE1,aE2,aE3,aE4,aE5,aE6,OX,aE7,aE8];function
aUE(b,a){return OW(aUD,1,b,a)}function
ry(a){if(typeof
a==="number")return 4;else
switch(a[0]){case
0:return 0;case
1:return 1;case
2:return 2;default:return 3}}function
Sy(a){switch(a){case
0:return aUF;case
1:return aUG;case
2:return aUH;case
3:return aUI;default:return aUJ}}var
aE=O([I,aUK,0]),v2=bp(0,51);function
rz(b,a){return jK(v2,b,a)}rz(aUL,[3,rh]);var
ab5=1;try{var
ab0=OC(rh,43)}catch(a){ab5=0;a=j(a);if(a!==l)throw a;var
Sz=aUM}if(ab5)var
Sz=al(rh,ab0+1|0,(9-ab0|0)-1|0);rz(aUN,[3,Sz]);rz(aUO,[3,gl]);rz(aUP,[0,vb]);rz(aUQ,[2,ok]);function
SA(a){return aV(v2,a)}function
ln(d,h,a){function
b(h,g,f){var
a=h,b=g;for(;;){if(a<=f){var
e=$(d,a);if(e===46)return[0,b,a+1|0];var
c=e-48|0;if(0<=c)if(!(9<c)){var
a=a+1|0,b=(b*10|0)+c|0;continue}return[0,b,a]}return[0,b,a]}}var
c=b(h,0,a),e=b(c[2],0,a),f=b(e[2],0,a),g=f[2],i=al(d,g,(a-g|0)+1|0);return[0,[0,c[1],e[1],f[1]],i]}function
SB(a){try{var
c=SA(a)}catch(c){try{ih(a);var
b=1;return b}catch(a){return 0}}return typeof
c==="number"?0:1}function
SC(g,c){try{var
a=SA(c)}catch(a){a=j(a);if(a===l){try{var
b=ih(c)}catch(a){a=j(a);if(a===l)return aUR;throw a}try{var
f=[0,CV(b)];return f}catch(a){try{var
e=[2,gh(b)];return e}catch(a){try{var
d=[1,gf(b)];return d}catch(a){return[3,b]}}}}throw a}return typeof
a==="number"?aUS:a}function
SD(b,a){if(typeof
a==="number")switch(a){case
29:return aUT;case
91:return aUU}else
switch(a[0]){case
1:return[1,gf(a[1])];case
7:return[2,a[1]];case
16:return[3,a[1][1]];case
17:return SC(b,a[1])}throw[0,aE,4,b]}function
SE(g,c){var
a=[0,0];function
e(h){var
f=a[1];if(f){a[1]=0;return f[1]}for(;;){var
b=d(g,c);if(typeof
b==="number")switch(b){case
25:throw[0,aE,2,aH(c)];case
100:var
e=0;break;default:var
e=1}else
var
e=17<b[0]?0:1;if(e)return b;continue}}function
l(b){if(0===a[1]){a[1]=[0,b];return 0}throw[0,h,aUV]}function
k(C,M,m){var
g=e(0);if(typeof
g==="number")switch(g){case
26:case
34:case
51:var
p=1;break;default:var
p=0}else
if(2===g[0]){var
t=g[1];if(f(t,aUZ))if(f(t,aU0)){if(!f(t,aU1)){var
I=1-C;if(I)return I;if(typeof
m!=="number"&&3===m[0]){var
u=aH(c),v=SD(u,e(0));if(typeof
v!=="number"&&3===v[0]){var
a=v[1],K=m[1],b=r(a)-1|0;if(0<=b){var
q=$(a,0);if(94===q)var
i=[0,ajo,ln(a,1,b)];else{if(63<=q)if(qs===q)var
i=[0,-617782220,ln(a,1,b)],j=1;else
var
j=0;else
if(60<=q)switch(q-60|0){case
0:if(0===b)throw[0,aE,[6,a],u];if(61===$(a,1))var
i=[0,adU,ln(a,2,b)],j=1;else
var
i=[0,La,ln(a,1,b)],j=1;break;case
2:if(0===b)throw[0,aE,[6,a],u];if(61===$(a,1))var
i=[0,ain,ln(a,2,b)],j=1;else
var
i=[0,Kw,ln(a,1,b)],j=1;break;default:var
j=0}else
var
j=0;if(!j)var
i=[0,ah5,ln(a,0,b)]}var
k=i[2][1],z=k[1],o=i[1],l=ln(K,0,r(K)-1|0)[1],A=l[1];if(adU<=o)return ah5<=o?ajo<=o?z===A?1:0:E(l,k):La<=o?fC(l,k):ms(l,k);if(ain===o)return ic(l,k);if(Kw<=o)return dT(l,k);var
B=z===A?1:0,L=B?k[2]===l[2]?1:0:B;return L}throw[0,aE,[6,a],u]}var
P=aH(c);throw[0,aE,[7,3,ry(m)],P]}var
O=aH(c);throw[0,aE,[7,3,ry(m)],O]}var
p=f(t,aU2)?0:1}else
var
p=1;else
var
p=1}else
var
p=0;if(p){if(typeof
g==="number")switch(g){case
26:var
s=E,n=1;break;case
34:var
s=dT,n=1;break;case
51:var
s=fC,n=1;break;default:var
n=0}else
if(2===g[0]){var
G=g[1];if(f(G,aUX))if(f(G,aUY))var
n=0,w=0;else
var
H=J,w=1;else
var
H=ms,w=1;if(w)var
s=H,n=1}else
var
n=0;if(n){var
N=aH(c),D=SD(N,e(0)),F=1-C;if(F)return F;var
x=ry(m),y=ry(D);if(J(x,y))throw[0,aE,[7,x,y],aH(c)];return s(m,D)}throw[0,h,aUW]}return d(M,g)}function
m(a){var
b=s(a),c=e(0);if(typeof
c==="number")if(8===c){var
d=a?1-b:a,f=m(d),g=b||f;return g}l(c);return b}function
s(d){var
g=e(0),h=aH(c);if(typeof
g==="number")switch(g){case
29:var
a=0,b=1;break;case
54:var
A=m(d),t=e(0);if(typeof
t==="number")if(81===t)var
a=A,b=1,q=0;else
var
q=1;else
var
q=1;if(q)throw[0,aE,1,aH(c)];break;case
91:var
a=1,b=1;break;default:var
b=0}else
switch(g[0]){case
1:var
B=[1,gf(g[1])],a=k(d,function(a){throw[0,aE,aU3,h]},B),b=1;break;case
7:var
C=[2,g[1]],a=k(d,function(a){throw[0,aE,aU4,h]},C),b=1;break;case
11:var
o=g[1];if(f(o,aU5))if(f(o,aU6))var
b=0,r=0;else
var
r=1;else
var
r=1;if(r){var
p=e(0),D=aH(c);if(typeof
p==="number")var
j=1;else
if(17===p[0]){var
v=p[1],w=1-d;if(w)var
a=w,b=1,j=0;else
if(ml===u(o,0))var
a=1-SB(v),b=1,j=0;else
var
a=SB(v),b=1,j=0}else
var
j=1;if(j)throw[0,aE,4,D]}break;case
16:var
E=[3,g[1][1]],a=k(d,function(a){throw[0,aE,aU7,h]},E),b=1;break;case
17:var
i=SC(h,g[1]),a=k(d,function(a){l(a);if(typeof
i!=="number"&&0===i[0])return i[1];throw[0,aE,[7,0,ry(i)],h]},i),b=1;break;default:var
b=0}if(b){var
n=e(0);if(typeof
n==="number")if(0===n){var
x=d?a:d,y=s(x),z=a?y:a;return z}l(n);return a}throw[0,aE,4,h]}var
i=m(1),b=e(0);if(typeof
b==="number")if(88===b)return i;throw[0,aE,5,aH(c)]}function
SF(a){if(typeof
a!=="number"&&11===a[0])if(!f(a[1],aU8))return 1;return 0}var
SG=Eq(aiI,aU9),E4=aN(dR),jU=[0,E4],rA=[0,0];function
v3(a){jU[1]=E4;rA[1]=0;return 0}function
go(b){if(r(jU[1])<=rA[1]){var
a=aN(r(jU[1])*2|0);k5(jU[1],0,a,0,r(jU[1]));jU[1]=a}ax(jU[1],rA[1],b);rA[1]++;return 0}function
E5(b){var
c=r(b)-1|0,d=0;if(!(c<0)){var
a=d;for(;;){go(u(b,a));var
e=a+1|0;if(c!==a){var
a=e;continue}break}}return 0}function
jV(a){return E5(cg(a))}function
E6(b){var
a=jB(jU[1],0,rA[1]);jU[1]=E4;return a}var
oL=[0,y],d1=[0,0];function
E7(a){return 0!==d1[1]?1:0}var
hd=[0,0],v4=[0,2],v5=[0,0];function
mR(a){v4[1]=a;return 0}function
v6(c,b){var
a=aH(b);d1[1]=[0,a,0];v3(0);var
e=d(c,b),f=E6(0);v3(0);return[0,f,[0,a[1],e[2],a[3]]]}function
SH(a){if(hF<=a){if(!(ml<=a))switch(a+alC|0){case
0:return 10;case
4:return 13;case
6:return 9}}else
if(98===a)return 8;return a}function
SI(a,b){var
d=en(a,b+2|0)+eF|0,e=10*(en(a,b+1|0)+eF|0)|0,c=((b6*(en(a,b)+eF|0)|0)+e|0)+d|0;if(0<=c)if(!(K<c))return dG(c);if(E7(0))return mb;var
f=aH(a);throw[0,aE,[1,cg(a)],f]}function
SJ(d,c){var
a=en(d,c),e=97<=a?a+BN|0:65<=a?a+Ab|0:a+eF|0,b=en(d,c+1|0),f=97<=b?b+BN|0:65<=b?b+Ab|0:b+eF|0;return dG((e*16|0)+f|0)}function
aU_(a){return-gh(o(aU$,a))|0}function
aVa(a){return-gh(o(aVb,al(a,0,r(a)-1|0)))|0}function
aVc(a){return fB(an8(o(aVd,al(a,0,r(a)-1|0))))}function
aVe(a){return-gh(o(aVf,al(a,0,r(a)-1|0)))|0}function
aVg(c){var
d=r(c),e=aN(d),a=0,b=0;for(;;){if(d<=a)return d<=b?c:jB(e,0,b);var
f=u(c,a);if(95===f){var
a=a+1|0;continue}ig(e,b,f);var
a=a+1|0,b=b+1|0;continue}}function
v7(b){var
c=cg(b),a=al(c,1,r(c)-2|0);if(is(SG,a))throw[0,aE,[4,a],aH(b)];return a}function
lo(d,c,b,f,e){var
a=d[12],g=c?c[1]:a[1],h=a[4],i=a[4]-e|0,j=f?b:a[2]+b|0;d[12]=[0,g,j,i,h];return 0}function
v8(a){return ai(aH(a),aVh)}var
E8=[0,0];function
SK(a){E8[1]=[0,a,E8[1]];return 0}function
aVi(a,c){if(typeof
c==="number")switch(c){case
0:return e(a,aVj);case
1:return e(a,aVk);case
2:return e(a,aVl);case
3:return e(a,aVm);case
4:return e(a,aVn);case
5:return e(a,aVo);default:return e(a,aVp)}else
switch(c[0]){case
0:var
f=u8(c[1]);return d(e(a,aVq),f);case
1:var
g=c[1];return d(e(a,aVr),g);case
2:return e(a,aVs);case
3:var
h=c[2];return b(e(a,aVt),aDh,h);case
4:var
i=c[1];return d(e(a,aVu),i);case
5:var
j=c[1];return d(e(a,aVv),j);case
6:var
k=c[1];return d(e(a,aVw),k);default:var
l=Sy(c[2]),m=Sy(c[1]);return b(e(a,aVx),m,l)}}c8(function(a){return a[1]===aE?[0,fa(a[3],aVi,a[2])]:0});function
t2(c,a){a[10]=X(8,-1);var
b=0;return c<50?ab3(c+1|0,a,b):aa(ab3,[0,a,b])}function
ab3(c,a,u){var
g=u;for(;;){var
e=Dl(v9,g,a);if(91<e>>>0){d(a[1],a);var
g=e;continue}var
f=e;if(46<=f)switch(f){case
46:return 12;case
47:return 13;case
48:return 14;case
49:return 15;case
50:return 82;case
51:return 83;case
52:return 51;case
53:return 52;case
54:return 26;case
55:return 45;case
56:return 46;case
57:return 47;case
58:return 48;case
59:return 79;case
60:return 43;case
61:return 44;case
62:return 7;case
63:return 8;case
64:return 9;case
65:return 34;case
66:return 36;case
67:return 78;case
68:return 35;case
69:return 55;case
70:return 49;case
71:return 50;case
72:return 56;case
73:return 57;case
74:return 6;case
75:return aVE;case
76:return 72;case
77:return 73;case
78:return 74;case
79:return 60;case
80:return 61;case
83:return[2,cg(a)];case
84:return[3,cg(a)];case
85:return[4,cg(a)];case
86:return[6,cg(a)];case
87:return 71;case
88:return[5,cg(a)];case
89:return[15,cg(a)];case
90:if(2===v4[1])return 25;if(0===v4[1])throw[0,aE,2,aH(a)];throw[0,aE,3,aH(a)];case
91:var
K=aH(a);throw[0,aE,[0,en(a,0)],K];default:return[14,cg(a)]}switch(f){case
0:var
v=aH(a);throw[0,aE,[0,en(a,0)],v];case
1:lo(a,0,1,0,0);return b6;case
2:return c<50?t2(c+1|0,a):aa(t2,[0,a]);case
3:return 94;case
4:return 89;case
5:return[10,v7(a)];case
6:v8(a);return[10,v7(a)];case
7:return 76;case
8:return[13,v7(a)];case
9:v8(a);return[13,v7(a)];case
10:var
h=cg(a);try{var
w=aV(SG,h);return w}catch(a){a=j(a);if(a===l)return[11,h];throw a}case
11:v8(a);return[11,cg(a)];case
12:return[17,cg(a)];case
13:v8(a);return[17,cg(a)];case
14:try{var
x=[7,aU_(cg(a))];return x}catch(b){b=j(b);if(b[1]===dU)throw[0,aE,aVz,aH(a)];throw b}case
15:return[1,aVg(cg(a))];case
16:try{var
y=[8,aVa(cg(a))];return y}catch(b){b=j(b);if(b[1]===dU)throw[0,aE,aVA,aH(a)];throw b}case
17:try{var
z=[9,aVc(cg(a))];return z}catch(b){b=j(b);if(b[1]===dU)throw[0,aE,aVB,aH(a)];throw b}case
18:try{var
A=[12,aVe(cg(a))];return A}catch(b){b=j(b);if(b[1]===dU)throw[0,aE,aVC,aH(a)];throw b}case
19:v3(0);hd[1]=1;var
B=a[11];oL[1]=aH(a);SL(a);hd[1]=0;a[11]=B;return[16,[0,E6(0),0]];case
20:v3(0);var
i=cg(a),k=al(i,1,r(i)-2|0);hd[1]=1;var
C=a[11];oL[1]=aH(a);SM(k,a);hd[1]=0;a[11]=C;return[16,[0,E6(0),[0,k]]];case
21:lo(a,0,1,0,1);return[0,en(a,1)];case
22:return[0,en(a,1)];case
23:return[0,SH(en(a,2))];case
24:return[0,SI(a,2)];case
25:return[0,SJ(a,3)];case
26:var
m=cg(a),D=al(m,1,r(m)-1|0);throw[0,aE,[1,D],aH(a)];case
27:var
p=v6(v_,a);return[18,[0,p[1],p[2]]];case
28:var
q=v6(v_,a);return[19,aDD(q[1],q[2])];case
29:var
E=on(a,a[5],a[6]),s=v6(function(a){E5(o(aVD,E));return v_(a)},a);return[18,[0,s[1],s[2]]];case
30:ai(aH(a),0);var
t=v6(v_,a);return[18,[0,t[1],t[2]]];case
31:var
F=on(a,a[5],a[6]-2|0);return[18,[0,F,aH(a)]];case
32:ai(aH(a),1);a[6]=a[6]-1|0;var
b=a[12];a[12]=[0,b[1],b[2],b[3],b[4]-1|0];return 86;case
33:var
G=n(a[10],1)[2],H=on(a,n(a[10],0)[1],G),I=n(a[10],2)[3],J=OS(a,n(a[10],3)[4],I);lo(a,J,gh(H),1,0);return c<50?t2(c+1|0,a):aa(t2,[0,a]);case
34:return 84;case
35:return 1;case
36:return 0;case
37:return 5;case
38:return 77;case
39:return 54;case
40:return 81;case
41:return 86;case
42:return 16;case
43:return 62;case
44:return 20;default:return 21}}}function
aVy(a){return c4(t2(0,a))}function
e5(c,a){var
b=B$;return c<50?ab2(c+1|0,a,b):aa(ab2,[0,a,b])}function
ab2(b,a,q){var
e=q;for(;;){var
c=om(v9,e,a);if(12<c>>>0){d(a[1],a);var
e=c;continue}switch(c){case
0:var
s=d1[1];d1[1]=[0,aH(a),s];jV(a);return b<50?e5(b+1|0,a):aa(e5,[0,a]);case
1:var
f=d1[1];if(f){var
g=f[2];return g?(d1[1]=g,jV(a),b<50?e5(b+1|0,a):aa(e5,[0,a])):(d1[1]=0,aH(a))}throw[0,h,aVF];case
2:oL[1]=aH(a);go(34);hd[1]=1;try{SL(a)}catch(a){a=j(a);if(a[1]===aE){var
i=a[2];if(typeof
i==="number")if(0===i){var
k=d1[1];if(k){var
t=cQ(v(d1[1]));d1[1]=0;throw[0,aE,[3,t,a[3]],k[1]]}throw[0,h,aVG]}}throw a}hd[1]=0;go(34);return b<50?e5(b+1|0,a):aa(e5,[0,a]);case
3:var
l=cg(a),m=al(l,1,r(l)-2|0);oL[1]=aH(a);jV(a);hd[1]=1;try{SM(m,a)}catch(a){a=j(a);if(a[1]===aE){var
n=a[2];if(typeof
n==="number")if(0===n){var
o=d1[1];if(o){var
u=cQ(v(d1[1]));d1[1]=0;throw[0,aE,[3,u,a[3]],o[1]]}throw[0,h,aVH]}}throw a}hd[1]=0;go(uL);E5(m);go(gc);return b<50?e5(b+1|0,a):aa(e5,[0,a]);case
5:lo(a,0,1,0,1);jV(a);return b<50?e5(b+1|0,a):aa(e5,[0,a]);case
10:var
p=d1[1];if(p){var
w=cQ(v(d1[1]));d1[1]=0;throw[0,aE,[2,w],p[1]]}throw[0,h,aVI];case
11:lo(a,0,1,0,0);jV(a);return b<50?e5(b+1|0,a):aa(e5,[0,a]);default:jV(a);return b<50?e5(b+1|0,a):aa(e5,[0,a])}}}function
v_(a){return c4(e5(0,a))}function
SL(a){a:for(;;){a[10]=X(2,-1);var
c=aiP;for(;;){var
b=Dl(v9,c,a);if(8<b>>>0){d(a[1],a);var
c=b;continue}switch(b){case
0:return 0;case
1:var
e=a[6];lo(a,0,1,0,r(on(a,n(a[10],0)[1],e)));continue a;case
2:go(SH(en(a,1)));continue a;case
3:go(SI(a,1));continue a;case
4:go(SJ(a,2));continue a;case
5:if(E7(0))continue a;ai(aH(a),7);go(en(a,0));go(en(a,1));continue a;case
6:if(1-E7(0))ai(aH(a),14);lo(a,0,1,0,0);jV(a);continue a;case
7:hd[1]=0;throw[0,aE,0,oL[1]];default:go(en(a,0));continue a}}}}function
SM(f,a){a:for(;;){var
c=183;for(;;){var
b=om(v9,c,a);if(3<b>>>0){d(a[1],a);var
c=b;continue}switch(b){case
0:lo(a,0,1,0,0);jV(a);continue a;case
1:hd[1]=0;throw[0,aE,0,oL[1]];case
2:var
e=cg(a);if(A(f,al(e,1,r(e)-2|0)))return 0;jV(a);continue a;default:go(en(a,0));continue a}}}}function
E9(b){var
a=b[11];return a[4]===a[3]?1:0}function
lp(a){return aVy(a)}function
SN(a){var
h=a[12];function
A(H,G,a){var
c=H,b=G;for(;;){var
i=lp(a);if(typeof
i==="number")switch(i){case
84:if(E9(a)){var
j=function(a){return A(c,b,a)},k=v4[1],g=lp(a);if(typeof
g==="number")switch(g){case
23:if(0!==k)throw[0,aE,6,aH(a)];var
l=0;break;case
24:if(2<=k)throw[0,aE,6,aH(a)];mR(2);return j(a);case
37:if(2<=k){if(SE(lp,a)){mR(0);return j(a)}for(;;){var
z=lp(a);if(25===z)throw[0,aE,2,aH(a)];if(84===z)if(E9(a)){var
u=lp(a);if(typeof
u==="number"){var
w=u+amA|0;if(!(1<w>>>0))return 0===w?(mR(1),j(a)):(mR(2),j(a));if(14===w)throw[0,aE,6,aH(a)]}if(SF(u))if(SE(lp,a)){mR(0);return j(a)}continue}continue}}throw[0,aE,6,aH(a)];default:var
l=1}else
if(11===g[0])if(f(g[1],aVJ))var
l=1;else{if(0!==k)throw[0,aE,6,aH(a)];var
l=0}else
var
l=1;if(!l)if(0===k){var
q=23===g?1:0;for(;;){var
y=lp(a);if(25===y)throw[0,aE,3,aH(a)];if(84===y)if(E9(a)){var
r=lp(a);if(typeof
r==="number"){var
t=r+amA|0;if(!(1<t>>>0)){if(0===t){if(q)throw[0,aE,6,aH(a)];var
q=1;continue}mR(2);return j(a)}if(14===t)throw[0,aE,6,aH(a)]}if(q)if(SF(r))throw[0,aE,6,aH(a)];continue}continue}}v5[1]=[0,g];return 84}break;case
100:var
I=0===c?1:2,c=I;continue}else
switch(i[0]){case
18:var
B=i[1];SK([0,B[1],B[2]]);var
J=2<=c?2:0,c=J;continue;case
19:var
d=i[1];SK([0,d[1],d[2]]);if(typeof
b==="number")var
x=2<=c?[1,0,0,[0,d,0]]:[0,[0,d,0]];else
if(0===b[0])var
C=b[1],K=2<=c?[1,C,0,[0,d,0]]:[0,[0,d,C]],x=K;else
var
D=b[3],E=b[2],F=b[1],L=2<=c?[1,F,s(D,E),[0,d,0]]:[1,F,E,[0,d,D]],x=L;var
c=0,b=x;continue}var
e=a[11];if(typeof
b!=="number")if(0===b[0]){var
m=b[1];if(2<=c){vP(h,v(m));EG(e,v(m))}else{vP(h,v(m));RQ(e,m)}}else{var
n=b[3],o=b[2],p=b[1];if(2<=c){vP(h,v(p));RX(h,cG(o,v(n)));RW(e,cG(o,v(n)));EG(e,v(p))}else{vP(h,v(p));RX(h,cG(o,v(n)));RW(e,v(o));EG(e,v(p));RQ(e,n)}}return i}}var
b=v5[1];return b?(v5[1]=0,b[1]):A(0,0,a)}function
aVK(a){v5[1]=0;mR(2);hd[1]=0;d1[1]=0;E8[1]=0;return 0}function
aVL(a){jK(v2,aVM,[0,1]);return jK(v2,aVN,[3,En])}O([I,aVP,0]);var
he=[0,0],aVO=0,aVQ=1,aVR=2;function
H(a){he[1]++;return[0,he[1],a,0]}function
aVS(a){he[1]++;return[0,he[1],a,aVR]}function
gp(a){return[0,0,a,aVQ]}function
eS(a){he[1]++;return[0,he[1],a[2],a[3]]}function
aVT(b){var
c=o(aVU,a(i+b[1]));return o(b[2],c)}function
oM(a){return 0===a[1]?1:0}function
lq(b,a){return A(b[2],a[2])}function
jW(a){return he[1]}function
rB(a){he[1]=cz(he[1],a);return 0}var
E_=[0,-1];function
mS(a){return[0,-1,a[2],a[3]]}function
rC(a){return 0!==(a[3]&1)?1:0}function
SO(a){return 0!==(a[3]&2)?1:0}function
cC(b,a){var
c=a[1];if(-1===c){var
f=a[2];return d(e(b,aVV),f)}if(0===c){var
g=a[2];return d(e(b,aVW),g)}var
h=rC(a)?aVX:aVZ,i=a[2];return p(e(b,aVY),i,c,h)}var
c_=0;function
hf(b,e,a){var
c=b?b[4]:0,d=a?a[4]:0,f=d<=c?c+1|0:d+1|0;return[0,b,e,a,f]}function
SP(b,e,a){var
i=b?b[4]:0,j=a?a[4]:0;if((j+1|0)<i){if(b){var
c=b[3],k=b[2],f=b[1],l=c?c[4]:0,m=f?f[4]:0;if(l<=m)return hf(f,k,hf(c,e,a));if(c){var
n=hf(c[3],e,a),o=c[2];return hf(hf(f,k,c[1]),o,n)}}throw[0,h,aV0]}if((i+1|0)<j){if(a){var
d=a[1],g=a[3],p=d?d[4]:0,q=g?g[4]:0;if(p<=q){var
r=a[2];return hf(hf(b,e,d),r,g)}if(d){var
s=hf(d[3],a[2],a[3]),t=d[2];return hf(hf(b,e,d[1]),t,s)}}throw[0,h,aV1]}return hf(b,e,a)}function
iA(b,c,a){if(a){var
e=a[3],d=a[2],f=a[1],g=Q(b[2],d[1][2]);return 0===g?[0,f,[0,b,c,[0,d]],e,a[4]]:0<=g?SP(f,d,iA(b,c,e)):SP(iA(b,c,f),d,e)}return[0,0,[0,b,c,0],0,1]}function
lr(e,g){var
a=g;for(;;){if(a){var
b=a[2],f=Q(e[2],b[1][2]);if(0===f){if(e[1]===b[1][1])return b[2];var
c=b[3],h=e[1];for(;;){if(c){var
d=c[1];if(d[1][1]===h)return d[2];var
c=d[3];continue}throw l}}var
i=0<=f?a[3]:a[1],a=i;continue}throw l}}function
SQ(e,d){var
a=d;for(;;){if(a){var
b=a[2],c=Q(e,b[1][2]);if(0===c)return b[2];var
f=0<=c?a[3]:a[1],a=f;continue}throw l}}function
SR(a){if(a){var
b=a[1],c=SR(b[3]);return[0,b[2],c]}return 0}function
SS(h,g,f,e){var
c=g,d=f,a=e;for(;;){if(a){var
i=a[3],j=b(h,a[2],d),c=[0,a[1],c],d=j,a=i;continue}if(c){var
k=c[1],c=c[2],a=k;continue}return d}}function
ST(d,c,b){if(c){var
a=c[1],e=ST(d,a[3],b);return p(d,a[1],a[2],e)}return b}function
E$(c,e){var
a=e;for(;;){if(a){var
d=a[2];E$(c,a[1]);b(c,d[1],d[2]);var
a=a[3];continue}return 0}}function
aV3(b){var
a=[0,1];return function(b){var
c=a[1];a[1]+=-1;return[0,c,aV2,b[3]]}}var
dt=-1;function
Y(f,e){var
b=f,a=e;for(;;){switch(b[0]){case
0:if(0===a[0])return E(b[1],a[1]);break;case
1:if(1===a[0]){var
c=A(b[2],a[2]);if(c){var
b=b[1],a=a[1];continue}return c}break;default:if(2===a[0]){var
d=Y(b[1],a[1]);if(d){var
b=b[2],a=a[2];continue}return d}}return 0}}function
fN(b,d){var
a=d;for(;;)switch(a[0]){case
0:return E(b,a[1]);case
1:var
a=a[1];continue;default:var
c=fN(b,a[1]);if(c)return c;var
a=a[2];continue}}function
oN(b){var
a=b;for(;;)switch(a[0]){case
0:return a[1][1];case
1:var
a=a[1];continue;default:var
c=oN(a[2]);return cz(oN(a[1]),c)}}function
aV4(a){return 0}function
b_(e,a){var
b=e?e[1]:aV4;switch(a[0]){case
0:return a[1][2];case
1:var
c=a[2],f=d(b,c)?o(aV6,o(c,aV5)):o(aV7,c);return o(b_([0,b],a[1]),f);default:var
g=o(aV9,o(b_([0,b],a[2]),aV8));return o(b_([0,b],a[1]),g)}}function
oO(b){var
a=b;for(;;)switch(a[0]){case
0:return a[1];case
1:var
a=a[1];continue;default:throw[0,h,aV_]}}function
ls(b){var
a=b;for(;;)switch(a[0]){case
0:return a[1][2];case
1:return a[2];default:var
a=a[2];continue}}function
SU(b,a){return b[3]-a[3]|0}function
aWj(a){return a[3]}var
SV=[0,Q];function
aWk(b,a){return b===a?1:0}var
av=g7(SV);function
oP(a){switch(a){case
0:return 1;case
1:return 2;case
2:return 4;case
3:return 8;case
4:return 16;case
5:return 32;default:return 64}}function
SW(b,a){return b|a}function
SX(a,b){return(a&b)===a?1:0}function
fd(b,c,a){return c?a|oP(b):a&(oP(b)^-1)}function
bM(a){var
b=oP(a);return function(a){return SX(b,a)}}var
aWl=oP(3),aWm=oP(4),iB=oP(0)|aWm|aWl,oQ=0,Fa=7,eT=kQ;function
SY(c,b,a){var
e=fd(c,d(bM(b),a),a);return fd(b,d(bM(c),a),e)}function
mT(a){return SY(0,1,SY(4,5,a))}function
lt(a){var
b=d(bM(1),a);return[0,d(bM(0),a),b]}function
Fb(a){var
b=d(bM(3),a),c=d(bM(6),a),e=d(bM(5),a);return[0,d(bM(4),a),e,c,b]}var
aL=jF(SV);function
rD(b,a){switch(b[0]){case
0:if(0===a[0])return a[1]===b[1]?1:0;break;case
1:if(1===a[0])return a[1]===b[1]?1:0;break;default:if(2===a[0]){var
c=Y(b[1],a[1]),d=c?E(b[2],a[2]):c;return d}}return 0}var
ae=jF([0,SU]),gq=g7([0,SU]),d2=DQ([0,aWk,aWj]),Fc=[0,-1],aWo=[0,function(a){throw[0,h,aWn]}],hg=bm,aWp=0;function
bi(b,a){Fc[1]++;return[0,a,b,Fc[1]]}function
ak(a){return bi(hg,a)}function
fe(a,b){return ak([0,a])}function
bj(b){var
a=b[1];if(typeof
a!=="number"&&0===a[0])return 1;return 0}function
rE(b){var
a=b[1];if(typeof
a!=="number"&&9===a[0])return 1;return 0}function
v$(a){return a?a[1]:aWq}function
bB(c){var
a=c;for(;;){if(typeof
a!=="number"){var
b=a[1][1];if(b){var
a=b[1];continue}}return a}}function
t(c){var
b=c;for(;;){var
a=b[1];if(typeof
a!=="number")switch(a[0]){case
5:if(1===bB(a[2])){var
b=a[4];continue}break;case
6:var
b=a[1];continue}return b}}function
wa(c){var
a=c;for(;;){if(typeof
a!=="number"){var
b=a[1];if(1!==b[1]){var
a=b[1];continue}}return a}}function
aB(i){var
b=0,a=i;for(;;){if(typeof
a!=="number"){if(0!==a[0]){var
c=a[4],d=a[2],e=c[1];if(e){var
f=e[1],b=s(b,d),a=f;continue}var
g=a[3],h=s(b,d);return[1,a[1],h,g,c]}if(a[1])if(0!==b)return[0,[0,cQ(b)]]}return a}}function
aw(k){var
b=0,a=k;for(;;){var
e=t(a[2])[1];if(typeof
e!=="number"&&8===e[0]){var
g=a[1],i=e[1],j=0===g?b:[0,g,b],b=j,a=i;continue}if(0===b)return a;var
f=a.slice(),d=a[1],c=b;for(;;){if(c){var
h=c[2],d=s(c[1],d),c=h;continue}f[1]=d;return f}}}function
SZ(f,e){var
b=e;a:for(;;){var
a=b[1];for(;;){if(a){var
d=a[1];if(A(f,d[1]))return aB(d[2]);var
a=a[2];continue}var
c=t(b[2])[1];if(typeof
c!=="number"&&8===c[0]){var
b=c[1];continue a}return 0}}}function
fP(d){var
b=d;for(;;){var
c=t(b[2]),a=c[1];if(typeof
a!=="number"&&8===a[0]){var
b=a[1];continue}return c}}function
jX(f){var
b=aw(f),c=b[5];if(c)var
d=c;else{var
e=t(b[2])[1];if(typeof
e==="number")var
a=0;else
switch(e[0]){case
0:var
a=0;break;case
3:case
9:var
d=1,a=1;break;default:throw[0,h,aWr]}if(!a)return 0}return d}function
cT(c){var
a=aw(c),b=a[4];if(b){var
d=a[1];return Z(function(b){var
a=aB(b[2]);if(typeof
a!=="number"&&1===a[0])return 0;return 1},d)}return b}function
jY(c){var
e=r(c)-1|0,d=0,i=0;if(e<0)var
f=d;else{var
a=i,g=d;for(;;){var
h=(ue*g|0)+u(c,a)|0,j=a+1|0;if(e!==a){var
a=j,g=h;continue}var
f=h;break}}var
b=f&jc;return kS<b?b-qr|0:b}function
c$(g){var
c=t(g),a=c[1];if(typeof
a!=="number")switch(a[0]){case
4:var
d=a[1];for(;;){var
b=d[1];if(typeof
b==="number")return c;else
switch(b[0]){case
5:var
e=b[4];break;case
6:var
e=b[1];break;case
0:case
3:case
9:return d;default:throw[0,h,aWs]}var
d=e;continue}case
8:var
f=a[1];if(!cT(f))return fP(f);break}return c}function
Fd(e){var
a=t(e)[1];if(typeof
a!=="number")switch(a[0]){case
4:var
c=a[1];for(;;){var
b=t(c)[1];if(typeof
b!=="number")switch(b[0]){case
3:return 1;case
5:var
c=b[4];continue}return 0}case
8:var
d=fP(a[1])[1];if(typeof
d!=="number"&&3===d[0])return 1;return 0}return 0}function
wb(a){var
b=r(a);return 4<=b?A(al(a,b-4|0,4),aWt):0}function
S0(c){var
a=c[1];if(typeof
a!=="number"&&3===a[0]){var
b=a[1];switch(b[0]){case
0:return wb(b[1][2]);case
1:return wb(b[2])}}return 0}function
hh(b,e){var
a=e;for(;;){var
f=a[1];m(function(e){var
a=aB(e[2]);if(typeof
a!=="number"){if(0!==a[0])return m(b,a[2]);var
c=a[1];if(c)return d(b,c[1])}return 0},f);var
c=t(a[2])[1];if(typeof
c!=="number")switch(c[0]){case
8:var
a=c[1];continue;case
0:case
3:case
7:case
9:break;default:throw[0,h,aWu]}var
g=a[6];return br(function(a){return m(b,a[2])},g)}}function
ba(a,g){var
b=g[1];if(typeof
b!=="number")switch(b[0]){case
1:d(a,b[2]);return d(a,b[3]);case
2:return m(a,b[1]);case
3:return m(a,b[2]);case
4:var
c=b[1],e=b[2][1];return e?(d(a,c),m(a,e[1][2])):d(a,c);case
5:d(a,b[3]);return d(a,b[4]);case
8:var
f=b[1];hh(a,f);return d(a,fP(f));case
10:d(a,b[1]);return m(a,b[2]);case
11:return m(a,b[3]);case
0:case
9:break;default:return d(a,b[1])}return 0}function
aWv(a){var
b=d(a[2],a);return function(a){return m(b,a)}}function
aWw(a,c){switch(c[0]){case
0:return b(a[3],a,c[2]);case
1:return b(a[4],a,c[2]);case
2:return b(a[5],a,c[2]);case
3:return b(a[6],a,c[2]);case
4:return b(a[7],a,c[2]);case
5:return b(a[8],a,c[2]);default:return b(a[9],a,c[2])}}function
aWx(a,c){return b(a[14],a,c[1])}function
aWy(a,c){var
e=c[1];m(d(a[14],a),e);var
f=c[5];br(d(a[14],a),f);return b(a[12],a,c[3])}function
aWz(a,b){d(a[15],b[1]);var
c=b[2];m(d(a[14],a),c);var
e=b[3];m(d(a[14],a),e);var
f=b[4];return br(d(a[14],a),f)}function
aWA(a,c){return b(a[10],a,c[1])}function
aWB(a,b){var
c=b[1];return br(d(a[10],a),c)}function
aWC(a,c){var
e=c[1];m(d(a[14],a),e);b(a[11],a,c[2]);var
f=c[4];br(d(a[14],a),f);return d(a[15],c[3])}function
aWD(a,c){var
e=c[1];m(d(a[14],a),e);b(a[11],a,c[2]);return d(a[15],c[3])}function
aWE(a,c){switch(c[0]){case
1:return b(a[1],a,c[1]);case
2:var
e=c[2];br(d(a[10],a),e);return b(a[10],a,c[3]);default:return d(a[15],c[1])}}function
aWF(a,c){switch(c[0]){case
0:d(a[15],c[1]);var
f=c[2];m(d(a[14],a),f);return b(a[11],a,c[3]);case
1:var
e=c[1];b(a[14],a,e[1]);var
g=e[2],h=function(d,c){return b(a[14],a,c[3])};b(av[10],h,g);var
i=e[4];return m(function(b){d(a[15],b[1]);var
c=b[2];return m(d(a[14],a),c)},i);default:b(a[14],a,c[2]);return b(a[11],a,c[3])}}function
aWG(a,c){if(typeof
c==="number")return 0;else{if(0===c[0]){var
e=c[1];return m(function(c){return b(a[14],a,c[3])},e)}var
f=c[1];return m(function(b){var
c=b[2];m(d(a[14],a),c);var
e=b[3];return br(d(a[14],a),e)},f)}}function
S1(c,e){ba(d(c[14],c),e);var
a=e[1];if(typeof
a==="number")var
b=0;else
switch(a[0]){case
4:var
g=a[2][1];if(g)var
f=g[1][1],b=1;else
var
b=0;break;case
8:var
h=aw(a[1])[6];return br(function(a){return d(c[15],a[1])},h);case
3:case
11:var
f=a[1],b=1;break;default:var
b=0}return b?d(c[15],f):0}var
aWH=[0,aWv,aWw,aWx,aWy,aWz,aWA,aWB,aWC,aWD,aWE,aWF,aWG,S1,S1,function(a){return 0}];function
wc(e,h,b,l,j){var
k=b[1],m=g(function(i){var
j=i[2],a=aB(j);if(typeof
a==="number")var
c=0;else
if(0===a[0]){var
k=a[1];if(k)var
f=[0,[0,d(e,k[1])]],c=1;else
var
c=0}else
var
m=l?a[4]:[0,0],n=b[5]?h:a[3],o=g(e,a[2]),f=[1,a[1],o,n,m],c=1;if(!c)var
f=j;return[0,i[1],f]},k),a=b[6];if(a)var
c=a[1],n=g(e,c[2]),f=[0,[0,c[1],n]];else
var
f=0;var
i=b[5],o=i?h:i;return[0,m,j,0,b[4],o,f]}function
oR(k,b,j){var
c=k,a=j;for(;;){var
l=c?c[1]:0;if(typeof
a==="number")return 0;else
switch(a[0]){case
0:return l?a:aWK;case
1:var
m=0===wa(a[4])?0:[0,[0,1]],n=d(b,a[3]),o=d(b,a[2]);return[1,a[1],o,n,m];case
2:return[2,g(b,a[1])];case
3:var
p=g(b,a[2]);return[3,a[1],p,[0,0]];case
4:var
e=a[1],f=a[2][1];if(f){var
i=f[1],q=g(b,i[2]),r=[0,[0,[0,i[1],q]]];return[4,d(b,e),r]}return[4,d(b,e),[0,0]];case
5:var
s=d(b,a[4]),t=d(b,a[3]),u=bB(a[2]);return[5,a[1],u,t,s];case
6:var
c=0,a=a[1][1];continue;case
7:throw[0,h,aWL];case
8:throw[0,h,aWM];case
9:return a;case
10:var
v=a[2],w=g(function(f){var
a=d(b,f);for(;;){var
c=a[1];if(typeof
c!=="number")switch(c[0]){case
2:var
e=c[1];if(e){var
a=e[1];continue}break;case
6:var
a=c[1];continue;case
7:case
9:return a}throw[0,h,aWJ]}},v);return[10,d(b,a[1]),w];default:var
x=g(b,a[3]);return[11,a[1],a[2],x]}}}var
wd=[0,0];function
oS(b,a){wd[1]=[0,[0,b,a],wd[1]];return 0}var
we=[0,0],wf=[0,0];function
eU(c){var
a=wd[1];m(function(a){a[1][1]=a[2];return 0},a);var
b=we[1];m(function(a){a[1]=0;return 0},b);wd[1]=0;we[1]=0;wf[1]=0;return 0}function
lu(c){var
a=t(c),b=0<=a[2]?1:0;return b?(a[2]=-1-a[2]|0,ba(lu,a)):b}function
rF(c){var
a=t(c),b=0<=a[2]?1:0,d=b?(a[2]=-1-a[2]|0,0):b;return d}function
S2(a){return ba(lu,a)}function
aWO(c,e){var
a=t(e),d=0<=a[2]?1:0;return d?(rF(a),b(c[13],c,a)):d}var
rG=aWH.slice();rG[14]=aWO;function
b3(c){var
a=t(c),b=a[2]<0?1:0;return b?(a[2]=-1-a[2]|0,ba(b3,a)):b}function
aWP(b,a){return b3(a)}var
wg=rG.slice();wg[14]=aWP;function
S3(a){return b(wg[4],wg,a)}function
S4(a){m(b3,a[2]);m(b3,a[3]);return br(b3,a[4])}function
S5(a){b3(a[1]);var
c=a[2];function
d(b,a){return b3(a[3])}return b(av[10],d,c)}function
S6(d,c,b){var
a=b;for(;;)if(typeof
a==="number")return 0;else{if(0===a[0]){if(ic(a[1],d))if(Y(c,a[2]))return[0,a[4]];var
a=a[5];continue}var
a=a[1][1];continue}}var
wh=[0,0];function
oT(b){var
a=wh[1];m(function(a){a[1]=0;return 0},a);wh[1]=0;return 0}function
aWQ(a,e,d,c,b){a[1]=[0,e,d,c,b,a[1]];wh[1]=[0,a,wh[1]];return 0}function
Fe(a,b){if(typeof
a==="number")throw[0,h,aWR];else{if(0===a[0]){var
c=a[5],d=a[2];if(Y(b,d))return c;var
f=Fe(c,b);return[0,a[1],d,a[3],a[4],f]}var
e=a[1];e[1]=Fe(e[1],b);throw a$}}function
bC(a){var
b=0<r(a)?1:0,c=b?63===u(a,0)?1:0:b;return c}function
Ff(a){return bC(a)?al(a,1,r(a)-1|0):a}function
S7(a){return bC(a)?a:o(aWS,a)}function
wi(h,g){var
b=0,a=g;for(;;){if(a){var
d=a[2],c=a[1],e=c[1];if(A(Ff(e),h)){var
f=v(b);return[0,e,c[2],f,d]}var
b=[0,c,b],a=d;continue}throw l}}function
aWT(a){switch(a[0]){case
0:a[1][1]=a[2];return 0;case
1:a[1][2]=a[2];return 0;default:a[1][1]=a[2];return 0}}var
rH=qP(1),oU=[0,0];function
lv(c){var
a=jz(rH,0);if(a){var
b=[0,0];a[1][1]=[0,c,b];return ii(rH,0,[0,b])}return 0}function
eq(a){var
b=a[3]<=oU[1]?1:0;return b?lv([0,a,a[1]]):b}function
b4(b,a){eq(b);var
c=b[1];b[1]=[6,a];var
d=a[1];if(typeof
c!=="number"&&0===c[0])if(typeof
d!=="number"&&0===d[0]){var
e=c[1];if(e){if(d[1]){var
f=b[2]<a[2]?1:0,g=f?(eq(a),a[1]=[0,e],0):f;return g}eq(a);a[1]=[0,e];return 0}return 0}return 0}function
iC(a,b){if(a[3]<=oU[1])lv([1,a,a[2]]);a[2]=b;return 0}function
S8(a,b){lv([6,a,a[1]]);a[1]=[0,b];return 0}function
oV(a,b){lv([2,a,a[1]]);a[1]=b;return 0}function
dJ(a,b){lv([3,a,a[1]]);a[1]=[0,b];return 0}function
mU(a,b){lv([4,a,a[1]]);a[1]=[0,b];return 0}function
S9(a,b){lv([5,a,a[1]]);a[1]=b;return 0}function
S_(a,b){lv([7,a,a[1]]);a[1]=b;return 0}function
ff(d){var
a=oU[1];oU[1]=Fc[1];var
b=jz(rH,0);if(b)return[0,b[1],a];var
c=[0,0];ii(rH,0,[0,c]);return[0,c,a]}function
er(f){var
g=f[2],c=f[1],d=c[1];if(typeof
d==="number")return 0===d?(oU[1]=g,0):dq(aWV);oT(0);var
b=0,a=d;for(;;){if(typeof
a==="number"){if(0===a){m(aWT,b);c[1]=0;oU[1]=g;return ii(rH,0,[0,c])}throw[0,h,aWU]}var
e=a[2],i=e[1];e[1]=1;var
b=[0,a[1],b],a=i;continue}}var
oW=O([I,aWW,0]);function
aWX(a){var
b=oa(a),c=oa(a),d=oa(a);return[0,b[1],b[2],c,d]}function
aWY(c){var
b=u4(c);try{var
a=u5(b,12);if(f(a,oC)){g4(b);var
d=al(oC,0,9);if(A(al(a,0,9),d)){var
e=CP(a,oC)?aWZ:aW0;throw[0,oW,[1,c,e]]}throw[0,oW,[0,c]]}var
g=aWX(b);g4(b);return g}catch(a){a=j(a);if(a!==qT)if(a[1]!==dU){if(a[1]===oW){g4(b);throw[0,oW,a[2]]}throw a}g4(b);throw[0,oW,[2,c]]}}function
aW1(d,b,a){el(b,oC);oc(b,[0,a[1],a[2]],0);dE(b);var
c=Px(d);oc(b,[0,[0,a[1],[0,c]],a[3]],0);oc(b,a[4],0);return c}function
aW2(c,a){switch(a[0]){case
0:var
d=a[1];return b(e(c,aW3),jP,d);case
1:var
f=a[2],g=a[1];return p(e(c,aW4),jP,g,f);default:var
h=a[1];return b(e(c,aW5),jP,h)}}c8(function(a){return a[1]===oW?[0,vL(aW2,a[2])]:0});function
aW6(a){return bp(0,13)}var
S$=O([I,aW7,0]);O([I,aW8,0]);function
aW9(e,b,d,c){try{var
a=aV(e,b),f=J(d,a[1]);if(f)throw[0,S$,b,c,a[2]];return f}catch(a){a=j(a);if(a===l)return bq(e,b,[0,d,c]);throw a}}function
wj(a){var
c=[0,ae[1]];function
d(j){var
g=j;for(;;){var
a=t(g),h=0<=a[2]?1:0;if(h){a[2]=-1-a[2]|0;var
e=a[1];if(typeof
e!=="number")switch(e[0]){case
0:c[1]=b(ae[4],a,c[1]);return 0;case
8:var
f=aw(e[1]);hh(d,f);var
i=1-cT(f);if(i){var
g=f[2];continue}return i}return ba(d,a)}return h}}d(a);b3(a);return c[1]}function
Ta(c,a){var
e=a[4],h=e?e[1]:ak([3,a[1],a[2],[0,0]]),f=a[4],i=[2,c,0===a[3]?1:0];if(f)var
j=wj(f[1]),k=wj(ak([2,a[3]])),l=b(ae[9],k,j),g=d(ae[20],l);else
var
g=0;var
m=a[7],n=a[6],o=a[5],p=0!==a[4]?1:0,q=w(a[3]),r=a[3];return[0,ls(c),h,g,r,q,i,-1,-1,-1,p,o,n,m]}var
Tb=[0,aW_,-1,-1];O([I,aXb,0]);var
Fg=[0,0],aXa=[0,aW$,Tb,Tb,0,-1,[0],0,1,y,0];function
Tc(c,a){var
b=d(c,a);Fg[1]=[0,[0,a,b],Fg[1]];return b}function
cK(a){return Tc(H,a)}function
gr(a){return Tc(aVS,a)}var
Td=cK(aXc),Te=cK(aXd),Tf=cK(aXe),Tg=cK(aXf),Th=cK(aXg),Ti=cK(aXh),Tj=cK(aXi),Tk=cK(aXj),Tl=cK(aXk),Tm=cK(aXl),Tn=cK(aXm),To=cK(aXn),Tp=cK(aXo),Tq=cK(aXp),Fh=cK(aXq),rI=[0,Td],rJ=[0,Te],wk=[0,Tf],wl=[0,Tg],Fi=[0,Th],rK=[0,Ti],rL=[0,Tj],wm=[0,Tk],Fj=[0,Tl],mV=[0,Tm],wn=[0,Tn],wo=[0,To],wp=[0,Tp],Tr=[0,Tq],iD=ak([3,rI,0,[0,0]]),aXs=ak([3,rJ,0,[0,0]]),jZ=ak([3,wk,0,[0,0]]),aXt=ak([3,wl,0,[0,0]]),wq=ak([3,Fi,0,[0,0]]),mW=ak([3,rK,0,[0,0]]),Ts=ak([3,rL,0,[0,0]]),aXr=[0,Fh];function
Tt(a){return ak([3,wm,[0,a,0],[0,0]])}function
aXu(a){return ak([3,mV,[0,a,0],[0,0]])}var
aXv=ak([3,wn,0,[0,0]]),aXw=ak([3,wo,0,[0,0]]),aXx=ak([3,wp,0,[0,0]]);function
Tu(a){return ak([3,Tr,[0,a,0],[0,0]])}ak([3,aXr,0,[0,0]]);var
Fk=gr(aXy),Tv=gr(aXz),Tw=gr(aXA),Tx=gr(aXB),Ty=gr(aXC),Tz=gr(aXD),TA=gr(aXE),TB=gr(aXF),TC=gr(aXG),TD=gr(aXH),Fl=gr(aXI),TE=gr(aXJ),bk=[0,0,0,0,1,0,0,0,y,0],aXK=[0,Fk],aXL=[0,Fl];function
mX(b,a){return[0,b,a,0,y,0]}var
aXN=cK(aXM),aXP=cK(aXO),aXR=cK(aXQ),aXT=cK(aXS),aXV=cK(aXU),aXX=cK(aXW),aXZ=cK(aXY);function
aX0(a,T,S){var
f=bk.slice(),l=[0,mX(aXP,0),0];f[3]=[1,[0,mX(aXN,0),l]];var
g=bk.slice();g[3]=[1,[0,mX(aXR,0),0]];var
h=bk.slice();h[3]=1;var
m=fe(0,0),n=[0,[0,m,0],1,bk[3],bk[4],bk[5],[0,eT,0],bk[7],bk[8],bk[9]],e=fe(0,0),o=bk[9],q=bk[8],r=bk[7],s=bk[5],t=bk[4],u=[0,mX(aXV,[0,e,[0,ak([3,Fj,[0,e,0],[0,0]]),0]]),0],v=[0,[0,e,0],1,[1,[0,mX(aXT,0),u]],t,s,[0,iB,0],r,q,o],i=fe(0,0),w=bk[9],x=bk[8],z=bk[7],A=bk[5],B=bk[4],C=[0,mX(aXZ,[0,i,0]),0],D=[0,[0,i,0],1,[1,[0,mX(aXX,0),C]],B,A,[0,iB,0],z,x,w],E=fe(0,0),F=[0,[0,E,0],1,bk[3],bk[4],bk[5],[0,iB,0],bk[7],bk[8],bk[9]];function
c(c,a){return b(T,c,[0,rL,0,a,0,1,y,0])}var
G=p(a,Tp,bk,p(a,To,bk,p(a,Tn,bk,p(a,Tq,F,p(a,Tm,D,p(a,Tl,v,p(a,Tk,n,p(a,Tj,h,p(a,Ti,g,p(a,Th,f,p(a,Tg,bk,p(a,Tf,bk,p(a,Te,bk,p(a,Td,bk,S)))))))))))))),H=d(c(TE,[0,ak([2,[0,jZ,[0,iD,[0,iD,0]]]]),0]),G),I=d(c(Fl,[0,ak([2,[0,jZ,[0,iD,[0,iD,0]]]]),0]),H),J=d(c(TB,0),I),K=d(c(TA,0),J),L=d(c(Tz,[0,jZ,0]),K),M=d(c(TD,0),L),N=d(c(Ty,0),M),O=d(c(Tx,[0,jZ,0]),N),P=d(c(Tw,[0,jZ,0]),O),Q=d(c(TC,0),P),R=d(c(Tv,0),Q),j=d(c(Fk,[0,ak([2,[0,jZ,[0,iD,[0,iD,0]]]]),0]),R),U=p(a,Fh,bk,j),k=bk.slice();k[5]=[0,jZ];return[0,U,p(a,Fh,k,j)]}var
aX1=[0,Fk,[0,Tv,[0,TC,[0,Tw,[0,Tx,[0,Ty,[0,Tz,[0,TA,[0,TB,[0,TD,[0,Fl,[0,TE,0]]]]]]]]]]]];g(function(a){a[3]=a[3]|1;return[0,a[2],a]},aX1);rB(af2);v(Fg[1]);function
Fm(b,a){var
c=a[2];return[0,d(b,a[1]),c]}function
TF(b,a){var
c=d(b,a[2]);return[0,a[1],c]}function
wr(c,b,a){var
e=d(b,a[2]);return[0,d(c,a[1]),e]}function
es(b,a){return a?[0,d(b,a[1])]:0}function
aD(c,a){var
d=b(c[21],c,a[2]);return[0,a[1],d]}function
Fn(a,h){var
c=h[1],e=b(a[21],a,h[2]),f=b(a[2],a,h[3]);if(typeof
c==="number")return vS([0,e],[0,f],0);else
switch(c[0]){case
0:return iw([0,e],[0,f],c[1]);case
1:var
j=b(a[34],a,c[3]),k=b(a[34],a,c[2]);return eo([0,e],[0,f],c[1],k,j);case
2:var
l=c[1];return RY([0,e],[0,f],g(d(a[34],a),l));case
3:var
m=c[2],n=g(d(a[34],a),m);return ix([0,e],[0,f],aD(a,c[1]),n);case
4:var
o=function(c){var
d=b(a[34],a,c[3]),e=b(a[2],a,c[2]);return[0,c[1],e,d]},p=c[2];return EI([0,e],[0,f],g(o,c[1]),p);case
5:var
q=c[2],r=g(d(a[34],a),q);return cB([0,e],[0,f],[5,aD(a,c[1]),r]);case
6:var
s=c[2];return RZ([0,e],[0,f],b(a[34],a,c[1]),s);case
7:var
t=c[3],u=c[2],v=c[1];return R0([0,e],[0,f],g(function(c){if(0===c[0]){var
e=c[4],f=g(d(a[34],a),e),h=c[3],i=b(a[2],a,c[2]);return[0,c[1],i,h,f]}return[1,b(a[34],a,c[1])]},v),u,t);case
8:var
w=b(a[34],a,c[2]);return R1([0,e],[0,f],c[1],w);case
9:var
i=c[1],x=i[2],y=d(a[34],a),z=function(b){return aD(a,b)},A=g(function(a){return wr(z,y,a)},x);return cB([0,e],[0,f],[9,[0,aD(a,i[1]),A]]);default:return cB([0,e],[0,f],[10,b(a[16],a,c[1])])}}function
aX2(a,c){var
e=aD(a,c[1]),f=c[6],h=es(d(a[34],a),f),i=[0,c[5]],j=[0,b(a[37],a,c[4])],k=c[3],l=d(a[21],a),m=d(a[34],a),n=d(a[34],a),o=[0,g(function(a){var
b=d(l,a[3]),c=d(m,a[2]);return[0,d(n,a[1]),c,b]},k)],p=c[2],q=d(a[34],a),r=[0,g(function(a){return Fm(q,a)},p)],s=[0,b(a[2],a,c[7])];return rs([0,b(a[21],a,c[8])],s,0,0,r,o,j,i,h,e)}function
aX3(b,a){if(typeof
a==="number")return 0===a?0:1;else{if(0===a[0]){var
c=a[1];return[0,g(d(b[14],b),c)]}var
e=a[1];return[1,g(d(b[20],b),e)]}}function
aX4(a,c){var
e=c[3],f=g(d(a[17],a),e),h=aD(a,c[1]),i=[0,c[4]],j=c[2],k=d(a[34],a),l=[0,g(function(a){return Fm(k,a)},j)];return EQ([0,b(a[2],a,c[5])],0,l,i,h,f)}function
aX5(a,c){var
e=c[2];if(0===e[0])var
l=e[2],m=es(d(a[34],a),l),n=e[1],f=[0,g(d(a[34],a),n),m];else
var
f=[1,aD(a,e[1])];var
o=aD(a,c[1]),h=b(a[2],a,c[4]),i=b(a[21],a,c[3]),p=[0,h],j= true?i:y,k=p?h:0;return[0,o,f,j,dY(eP,rl(rk,k))]}function
TG(a,h){var
c=h[1],e=b(a[21],a,h[2]),f=b(a[2],a,h[3]);switch(c[0]){case
0:var
i=c[2],j=g(d(a[34],a),i);return rq([0,e],[0,f],[0,aD(a,c[1]),j]);case
1:return Si([0,e],[0,f],b(a[9],a,c[1]));case
2:var
k=b(a[11],a,c[3]),l=b(a[34],a,c[2]);return rq([0,e],[0,f],[2,c[1],l,k]);default:return rq([0,e],[0,f],[3,b(a[16],a,c[1])])}}function
TH(a,h){var
c=h[1],d=b(a[21],a,h[2]),e=b(a[2],a,h[3]);switch(c[0]){case
0:return mM([0,d],[0,e],0,[0,b(a[11],a,c[1])]);case
1:var
f=c[1],j=b(a[34],a,f[4]);return mM([0,d],[0,e],0,[1,[0,f[1],f[2],f[3],j]]);case
2:var
g=c[1],k=b(a[34],a,g[4]);return mM([0,d],[0,e],0,[2,[0,g[1],g[2],g[3],k]]);case
3:var
i=c[1],l=b(a[34],a,i[2]);return mM([0,d],[0,e],0,[3,[0,b(a[34],a,i[1]),l]]);case
4:return Sj([0,d],b(a[1],a,c[1]));default:return mM([0,d],[0,e],0,[5,b(a[16],a,c[1])])}}function
aX6(a,c){var
e=c[2],f=g(d(a[13],a),e);return[0,b(a[34],a,c[1]),f]}function
aX7(a,h){var
c=h[1],e=b(a[21],a,h[2]),f=b(a[2],a,h[3]);switch(c[0]){case
0:return iy([0,e],[0,f],[0,aD(a,c[1])]);case
1:return vV([0,e],[0,f],b(a[30],a,c[1]));case
2:var
i=b(a[25],a,c[3]),j=c[2],k=bt(d(a[25],a),j);return iy([0,e],[0,f],[2,aD(a,c[1]),k,i]);case
3:var
l=c[2],m=g(d(a[40],a),l);return iy([0,e],[0,f],[3,b(a[25],a,c[1]),m]);case
4:return iy([0,e],[0,f],[4,b(a[24],a,c[1])]);case
5:return iy([0,e],[0,f],[5,b(a[16],a,c[1])]);default:return R$([0,e],[0,f],aD(a,c[1]))}}function
aX8(a,c){switch(c[0]){case
0:var
d=b(a[35],a,c[2]);return[0,aD(a,c[1]),d];case
1:var
e=aD(a,c[2]);return[1,aD(a,c[1]),e];case
2:return[2,b(a[35],a,c[1])];default:var
f=aD(a,c[2]);return[3,aD(a,c[1]),f]}}function
Fo(a,f){var
c=f[1],e=b(a[21],a,f[2]);switch(c[0]){case
0:return rp([0,e],b(a[39],a,c[1]));case
1:var
j=c[1];return fb([0,e],[1,g(d(a[35],a),j)]);case
2:return fb([0,e],[2,b(a[36],a,c[1])]);case
3:return fb([0,e],[3,b(a[17],a,c[1])]);case
4:return fb([0,e],[4,b(a[23],a,c[1])]);case
5:var
k=c[1];return fb([0,e],[5,g(d(a[23],a),k)]);case
6:return fb([0,e],[6,b(a[26],a,c[1])]);case
7:return fb([0,e],[7,b(a[27],a,c[1])]);case
8:return Sb([0,e],b(a[19],a,c[1]));case
9:var
l=c[1];return fb([0,e],[9,g(d(a[6],a),l)]);case
10:var
m=c[1];return fb([0,e],[10,g(d(a[12],a),m)]);case
11:return Sc([0,e],b(a[1],a,c[1]));default:var
n=b(a[16],a,c[1]),h=b(a[2],a,c[2]),o=[0,e],i= true?h:0;return fb(o,[12,n,i])}}function
aX9(a,g){var
c=g[1],e=b(a[21],a,g[2]),f=b(a[2],a,g[3]);switch(c[0]){case
0:return lg([0,e],[0,f],[0,aD(a,c[1])]);case
1:return vW([0,e],[0,f],b(a[32],a,c[1]));case
2:var
h=b(a[24],a,c[3]),i=c[2],j=bt(d(a[25],a),i);return lg([0,e],[0,f],[2,aD(a,c[1]),j,h]);case
3:var
k=b(a[24],a,c[2]);return lg([0,e],[0,f],[3,b(a[24],a,c[1]),k]);case
4:var
l=b(a[25],a,c[2]);return EN([0,e],[0,f],b(a[24],a,c[1]),l);case
5:return Sa([0,e],[0,f],b(a[15],a,c[1]));default:return lg([0,e],[0,f],[6,b(a[16],a,c[1])])}}function
Fp(a,f){var
c=f[1],e=b(a[21],a,f[2]);switch(c[0]){case
0:var
j=b(a[15],a,c[1]);return Se([0,e],[0,b(a[2],a,c[2])],j);case
1:var
k=c[2],l=g(d(a[38],a),k);return hb([0,e],c[1],l);case
2:return dZ([0,e],[2,b(a[39],a,c[1])]);case
3:var
m=c[1];return dZ([0,e],[3,g(d(a[35],a),m)]);case
4:return dZ([0,e],[4,b(a[36],a,c[1])]);case
5:return dZ([0,e],[5,b(a[17],a,c[1])]);case
6:return dZ([0,e],[6,b(a[22],a,c[1])]);case
7:var
n=c[1];return dZ([0,e],[7,g(d(a[22],a),n)]);case
8:return dZ([0,e],[8,b(a[26],a,c[1])]);case
9:return dZ([0,e],[9,b(a[27],a,c[1])]);case
10:var
o=c[1];return dZ([0,e],[10,g(d(a[5],a),o)]);case
11:var
p=c[1];return dZ([0,e],[11,g(d(a[12],a),p)]);case
12:return vX([0,e],b(a[18],a,c[1]));case
13:return Sf([0,e],b(a[1],a,c[1]));default:var
q=b(a[16],a,c[1]),h=b(a[2],a,c[2]),r=[0,e],i= true?h:0;return dZ(r,[14,q,i])}}function
lw(a,h){var
c=h[1],e=b(a[21],a,h[2]),f=b(a[2],a,h[3]);switch(c[0]){case
0:return aZ([0,e],[0,f],aD(a,c[1]));case
1:return mK([0,e],[0,f],c[1]);case
2:var
i=b(a[15],a,c[3]),j=c[2],k=g(d(a[38],a),j);return R6([0,e],[0,f],c[1],k,i);case
3:return R7([0,e],[0,f],b(a[4],a,c[1]));case
4:var
l=b(a[15],a,c[4]),m=b(a[28],a,c[3]),n=c[2],o=es(d(a[15],a),n);return jQ([0,e],[0,f],c[1],o,m,l);case
5:var
p=c[2],q=d(a[15],a),r=g(function(a){return TF(q,a)},p);return c9([0,e],[0,f],b(a[15],a,c[1]),r);case
6:var
s=b(a[4],a,c[2]);return vT([0,e],[0,f],b(a[15],a,c[1]),s);case
7:var
t=b(a[4],a,c[2]);return aO([0,e],[0,f],[7,b(a[15],a,c[1]),t]);case
8:var
u=c[1];return R8([0,e],[0,f],g(d(a[15],a),u));case
9:var
v=c[2],w=es(d(a[15],a),v);return mL([0,e],[0,f],aD(a,c[1]),w);case
10:var
x=c[2],y=es(d(a[15],a),x);return aO([0,e],[0,f],[10,c[1],y]);case
11:var
z=c[2],A=es(d(a[15],a),z),B=c[1],C=d(a[15],a),D=function(b){return aD(a,b)},E=[0,f],F=[0,e];return aO(F,E,[11,g(function(a){return wr(D,C,a)},B),A]);case
12:var
G=aD(a,c[2]);return EL([0,e],[0,f],b(a[15],a,c[1]),G);case
13:var
H=b(a[15],a,c[3]),I=aD(a,c[2]);return aO([0,e],[0,f],[13,b(a[15],a,c[1]),I,H]);case
14:var
J=c[1];return vU([0,e],[0,f],g(d(a[15],a),J));case
15:var
K=c[3],L=es(d(a[15],a),K),M=b(a[15],a,c[2]);return EM([0,e],[0,f],b(a[15],a,c[1]),M,L);case
16:var
N=b(a[15],a,c[2]);return aO([0,e],[0,f],[16,b(a[15],a,c[1]),N]);case
17:var
O=b(a[15],a,c[2]);return aO([0,e],[0,f],[17,b(a[15],a,c[1]),O]);case
18:var
P=b(a[15],a,c[5]),Q=c[4],R=b(a[15],a,c[3]),S=b(a[15],a,c[2]);return aO([0,e],[0,f],[18,b(a[28],a,c[1]),S,R,Q,P]);case
19:var
T=b(a[34],a,c[2]);return jR([0,e],[0,f],b(a[15],a,c[1]),T);case
20:var
U=b(a[34],a,c[3]),V=c[2],W=es(d(a[34],a),V);return aO([0,e],[0,f],[20,b(a[15],a,c[1]),W,U]);case
21:var
X=c[2];return aO([0,e],[0,f],[21,b(a[15],a,c[1]),X]);case
22:return aO([0,e],[0,f],[22,aD(a,c[1])]);case
23:var
Y=b(a[15],a,c[2]);return aO([0,e],[0,f],[23,aD(a,c[1]),Y]);case
24:var
Z=c[1],_=d(a[15],a),$=function(b){return aD(a,b)},aa=[0,f],ab=[0,e];return aO(ab,aa,[24,g(function(a){return wr($,_,a)},Z)]);case
25:var
ac=b(a[15],a,c[3]),ad=b(a[24],a,c[2]);return R9([0,e],[0,f],aD(a,c[1]),ad,ac);case
26:return aO([0,e],[0,f],[26,b(a[15],a,c[1])]);case
27:return aO([0,e],[0,f],[27,b(a[15],a,c[1])]);case
28:var
ae=c[2],af=es(d(a[34],a),ae);return R_([0,e],[0,f],b(a[15],a,c[1]),af);case
29:return aO([0,e],[0,f],[29,b(a[10],a,c[1])]);case
30:var
ag=b(a[15],a,c[2]);return aO([0,e],[0,f],[30,c[1],ag]);case
31:return aO([0,e],[0,f],[31,b(a[24],a,c[1])]);case
32:var
ah=b(a[15],a,c[3]),ai=aD(a,c[2]);return aO([0,e],[0,f],[32,c[1],ai,ah]);default:return aO([0,e],[0,f],[33,b(a[16],a,c[1])])}}function
TI(a,h){var
c=h[1],e=b(a[21],a,h[2]),f=b(a[2],a,h[3]);if(typeof
c==="number")return R2([0,e],[0,f],0);else
switch(c[0]){case
0:return cJ([0,e],[0,f],aD(a,c[1]));case
1:var
i=aD(a,c[2]);return R3([0,e],[0,f],b(a[28],a,c[1]),i);case
2:return EJ([0,e],[0,f],c[1]);case
3:return b9([0,e],[0,f],[3,c[1],c[2]]);case
4:var
j=c[1];return R4([0,e],[0,f],g(d(a[28],a),j));case
5:var
k=c[2],l=es(d(a[28],a),k);return oH([0,e],[0,f],aD(a,c[1]),l);case
6:var
m=c[2],n=es(d(a[28],a),m);return b9([0,e],[0,f],[6,c[1],n]);case
7:var
o=c[2],p=c[1],q=d(a[28],a),r=function(b){return aD(a,b)},s=[0,f],t=[0,e];return b9(t,s,[7,g(function(a){return wr(r,q,a)},p),o]);case
8:var
u=c[1];return b9([0,e],[0,f],[8,g(d(a[28],a),u)]);case
9:var
v=b(a[28],a,c[2]);return R5([0,e],[0,f],b(a[28],a,c[1]),v);case
10:var
w=b(a[34],a,c[2]);return EK([0,e],[0,f],b(a[28],a,c[1]),w);case
11:return b9([0,e],[0,f],[11,aD(a,c[1])]);case
12:return b9([0,e],[0,f],[12,b(a[28],a,c[1])]);case
13:return b9([0,e],[0,f],[13,aD(a,c[1])]);case
14:return b9([0,e],[0,f],[14,b(a[28],a,c[1])]);default:return b9([0,e],[0,f],[15,b(a[16],a,c[1])])}}function
aX_(a,h){var
c=h[1],e=b(a[21],a,h[2]),f=b(a[2],a,h[3]);switch(c[0]){case
0:var
i=c[2],j=g(d(a[34],a),i);return lh([0,e],[0,f],[0,aD(a,c[1]),j]);case
1:return lh([0,e],[0,f],[1,b(a[10],a,c[1])]);case
2:var
k=b(a[7],a,c[4]),l=b(a[28],a,c[3]),m=c[2],n=es(d(a[15],a),m);return Sg([0,e],[0,f],c[1],n,l,k);case
3:var
o=c[2],p=d(a[15],a),q=g(function(a){return TF(p,a)},o);return lh([0,e],[0,f],[3,b(a[7],a,c[1]),q]);case
4:var
r=b(a[7],a,c[3]),s=c[2],t=g(d(a[38],a),s);return Sh([0,e],[0,f],c[1],t,r);case
5:var
u=b(a[11],a,c[2]);return lh([0,e],[0,f],[5,b(a[7],a,c[1]),u]);default:return lh([0,e],[0,f],[6,b(a[16],a,c[1])])}}function
TJ(c,a){if(0===a[0])return[0,b(c[34],c,a[1])];var
d=b(c[15],c,a[2]);return[1,a[1],d]}function
aX$(a,f){var
c=f[1],d=b(a[21],a,f[2]),e=b(a[2],a,f[3]);switch(c[0]){case
0:var
j=c[3],k=b(a[7],a,c[2]);return li([0,d],[0,e],0,[0,c[1],k,j]);case
1:var
g=c[1],l=TJ(a,g[3]),m=g[2];return li([0,d],[0,e],0,[1,[0,aD(a,g[1]),m,l]]);case
2:var
h=c[1],n=TJ(a,h[3]),o=h[2];return li([0,d],[0,e],0,[2,[0,aD(a,h[1]),o,n]]);case
3:var
i=c[1],p=b(a[34],a,i[2]);return li([0,d],[0,e],0,[3,[0,b(a[34],a,i[1]),p]]);case
4:return li([0,d],[0,e],0,[4,b(a[15],a,c[1])]);case
5:return Sl([0,d],b(a[1],a,c[1]));default:return li([0,d],[0,e],0,[6,b(a[16],a,c[1])])}}function
aYa(a,c){var
e=c[2],f=g(d(a[8],a),e);return[0,b(a[28],a,c[1]),f]}function
Fq(a,e,c){var
f=d(e,c[4]),h=aD(a,c[3]),i=c[2],j=d(a[34],a),k=[0,g(function(a){return Fm(j,a)},i)],l=[0,c[1]],m=[0,b(a[2],a,c[6])];return mO([0,b(a[21],a,c[5])],m,0,0,l,k,h,f)}function
aYb(a,c){var
d=b(a[34],a,c[2]),e=aD(a,c[1]),f=[0,c[3]],g=[0,b(a[2],a,c[4])];return mN([0,b(a[21],a,c[5])],g,0,f,e,d)}function
aYc(a,c){var
d=b(a[15],a,c[2]),e=b(a[28],a,c[1]),f=[0,b(a[2],a,c[3])];return ep([0,b(a[21],a,c[4])],f,0,0,e,d)}function
aYd(a,b){return g(d(a[33],a),b)}function
aYe(a,b){return g(d(a[31],a),b)}function
aYf(a,c){switch(c[0]){case
0:return[0,b(a[32],a,c[1])];case
1:return[1,b(a[34],a,c[1])];default:var
e=c[2],f=es(d(a[15],a),e);return[2,b(a[28],a,c[1]),f]}}function
aYg(a,c){var
d=aD(a,c[1]),e=[0,c[2]],f=[0,b(a[2],a,c[4])];return So([0,b(a[21],a,c[3])],f,0,e,d)}function
aYh(a,c){var
e=aD(a,c[1]),f=c[2],g=es(d(a[25],a),f),h=[0,b(a[2],a,c[3])];return Sn([0,b(a[21],a,c[4])],h,0,0,g,e)}function
aYi(a,c){var
d=b(a[25],a,c[2]),e=aD(a,c[1]),f=[0,b(a[2],a,c[3])];return rr([0,b(a[21],a,c[4])],f,0,0,e,d)}function
aYj(a,c){var
d=b(a[24],a,c[2]),e=aD(a,c[1]),f=[0,b(a[2],a,c[3])];return vZ([0,b(a[21],a,c[4])],f,0,0,e,d)}function
aYk(b,a){return a}function
aYl(a,c){var
d=b(a[34],a,c[3]),e=aD(a,c[1]),f=[0,c[2]],g=[0,b(a[2],a,c[5])];return EP([0,b(a[21],a,c[4])],g,0,f,e,d)}function
aYm(a,c){var
d=b(a[25],a,c[1]),e=[0,b(a[2],a,c[3])];return lj([0,b(a[21],a,c[2])],e,0,d)}function
aYn(a,c){var
d=b(a[24],a,c[1]),e=[0,b(a[2],a,c[3])];return lj([0,b(a[21],a,c[2])],e,0,d)}function
aYo(a,c){var
d=b(a[29],a,c[2]);return[0,aD(a,c[1]),d]}function
aYp(a,c){var
e=aD(a,c[1]),f=c[3],h=es(d(a[34],a),f),i=c[2],j=[0,g(d(a[34],a),i)],k=[0,b(a[2],a,c[5])];return EO([0,b(a[21],a,c[4])],k,0,j,h,e)}function
aYq(a){var
b=d(a[11],a);return function(c){return Fq(a,b,c)}}function
aYr(a){var
b=d(a[11],a);return function(c){return Fq(a,b,c)}}function
aYs(a){var
b=d(a[7],a);return function(c){return Fq(a,b,c)}}function
aYt(a,b){return g(d(a[3],a),b)}function
aYu(a,c){var
e=b(a[15],a,c[3]),f=c[2],g=es(d(a[15],a),f);return[0,b(a[28],a,c[1]),g,e]}function
aYv(a,b){return g(d(a[1],a),b)}var
Fr=[0,function(a,c){var
d=b(a[29],a,c[2]);return[0,aD(a,c[1]),d]},aYv,aYu,aYt,aYs,aYr,aX_,aX$,aX6,aYa,TG,aYq,TH,aYp,lw,aYo,aX5,aYn,aYm,aYl,aYk,aYj,aYi,aX9,aX7,aYh,aYg,TI,aYf,aYe,Fo,aYd,Fp,Fn,aX2,aX4,aX3,aYc,aYb,aX8],bD=0;function
lx(a){return a?a[5]:0}function
hi(b,f,e,a){var
c=lx(b),d=lx(a),g=d<=c?c+1|0:d+1|0;return[0,b,f,e,a,g]}function
TK(b,f,e,a){var
i=lx(b),j=lx(a);if((j+1|0)<i){if(b){var
c=b[4],k=b[3],l=b[2],g=b[1],n=lx(c);if(n<=lx(g))return hi(g,l,k,hi(c,f,e,a));if(c){var
o=hi(c[4],f,e,a),p=c[3],q=c[2];return hi(hi(g,l,k,c[1]),q,p,o)}}throw[0,h,aYw]}if((i+1|0)<j){if(a){var
d=a[1],m=a[4],r=lx(d);if(r<=lx(m)){var
s=a[3],t=a[2];return hi(hi(b,f,e,d),t,s,m)}if(d){var
u=hi(d[4],a[2],a[3],a[4]),v=d[3],w=d[2];return hi(hi(b,f,e,d[1]),w,v,u)}}throw[0,h,aYx]}return hi(b,f,e,a)}function
du(b,c,a){if(a){var
d=a[4],g=a[3],e=a[2],f=a[1],h=cp(b,e);return 0===h?[0,f,b,c,d,a[5]]:0<=h?TK(f,e,g,du(b,c,d)):TK(du(b,c,f),e,g,d)}return[0,0,b,c,0,1]}function
d3(d,c){var
a=c;for(;;){if(a){var
b=cp(d,a[2]);if(0===b)return a[3];var
e=0<=b?a[4]:a[1],a=e;continue}throw l}}function
rM(c,d){var
a=d;for(;;){if(a){rM(c,a[1]);b(c,a[2],a[3]);var
a=a[4];continue}return 0}}function
ws(c,e,d){var
a=e,b=d;for(;;){if(a){var
f=ws(c,a[1],b),g=p(c,a[2],a[3],f),a=a[4],b=g;continue}return b}}var
bf=[0,bD,bD,bD,0];function
rN(c,b,a){var
d=a[4],e=a[3],f=a[2];return[0,du(c,b,a[1]),f,e,d]}function
iE(c,b,a){var
d=a[4],e=a[3],f=du(c,b,a[2]);return[0,a[1],f,e,d]}function
Fs(c,b,a){var
d=a[4],e=du(c,b,a[3]);return[0,a[1],a[2],e,d]}function
aYy(a){return[0,a[1],a[2],a[3],1]}function
ly(b,a){return b[4]?y:a}var
Ft=Fr.slice();Ft[21]=function(b,a){return y};function
aYz(b){var
a=b[1][1];if(f(a,aYA))if(f(a,aYB))if(f(a,aYC))if(f(a,aYD))return 1;return 0}function
j0(c,a){var
e=c[4]?d(by(aYz),a):a;return c[4]?b(Ft[2],Ft,e):e}function
iF(b,a){switch(a[0]){case
0:try{var
c=d3(a[1],b[2]);return c}catch(b){b=j(b);if(b===l)return a;throw b}case
1:var
d=a[3],e=a[2];return[1,iF(b,a[1]),e,d];default:var
f=iF(b,a[2]);return[2,iF(b,a[1]),f]}}function
aYE(b,a){switch(a[0]){case
0:try{var
c=d3(a[1],b[3]),d=0===c[0]?c[1]:ad(aYF);return d}catch(b){b=j(b);if(b===l)return a;throw b}case
1:var
e=a[3],f=a[2];return[1,iF(b,a[1]),f,e];default:return ad(aYG)}}function
lz(b,a){switch(a[0]){case
0:try{var
c=d3(a[1],b[1]);return c}catch(b){b=j(b);if(b===l)return a;throw b}case
1:var
d=a[3],e=a[2];return[1,iF(b,a[1]),e,d];default:return ad(aYH)}}var
Fu=[0,-1];function
aYI(a){Fu[1]=-1;return 0}function
Fv(a){Fu[1]+=-1;return[0,a,hg,Fu[1]]}function
TL(a){if(typeof
a!=="number")switch(a[0]){case
0:if(!a[1])return aYJ;break;case
9:if(!a[1])return aYK;break}return a}function
b$(a,V){var
d=t(V),i=d[1];if(typeof
i!=="number")switch(i[0]){case
7:return i[1];case
0:case
9:if(!a[4])if(0<=d[3])return d;var
U=a[4]?Fv(TL(i)):bi(d[2],i);oS(d,i);d[1]=[7,U];return U}var
b=d[1];oS(d,b);var
o=a[4]?Fv(aYL):fe(0,0);d[1]=[7,o];if(typeof
b==="number")var
e=0;else
switch(b[0]){case
3:var
W=[0,0],X=b[2],Y=g(function(b){return b$(a,b)},X),j=[3,lz(a,b[1]),Y,W],e=1;break;case
4:var
B=b[2][1];if(B)var
C=B[1],Z=C[2],_=g(function(b){return b$(a,b)},Z),D=[0,[0,lz(a,C[1]),_]];else
var
D=0;var
j=[4,b$(a,b[1]),[0,D]],e=1;break;case
5:var
E=b[4],F=b[2],G=b[1];if(a===bf)if(d[2]<bm)if(A(G,fO))var
$=b$(a,E),H=[5,G,F,b[3],$],p=1;else
var
p=0;else
var
p=0;else
var
p=0;if(p)var
x=1;else
if(1===bB(F))var
H=[6,b$(a,E)],x=1;else
var
e=0,x=0;if(x)var
j=H,e=1;break;case
8:var
q=aw(b[1]),c=t(q[2]),r=c[1];if(typeof
r==="number")var
f=0;else
if(7===r[0]){var
v=r[1][1];if(typeof
v==="number")var
l=1;else
if(2===v[0]){var
S=v[1];if(S){var
w=S[2];if(w)if(w[2])var
f=0,l=0;else{var
T=w[1];d[1]=[7,T];var
N=[6,T],f=1,l=0}else
var
f=0,l=0}else
var
f=0,l=0}else
var
l=1;if(l)var
f=0}else
var
f=0;if(!f){var
I=a[4];if(I)var
n=I;else{var
O=c[2]===bm?1:0;if(O)var
n=O;else{var
P=cT(q);if(P)var
n=P;else{var
Q=c[1];if(typeof
Q==="number")var
y=0;else
if(3===Q[0])var
R=1,y=1;else
var
y=0;if(!y)var
R=0;var
n=R}}}var
s=c[1];if(typeof
s==="number")var
m=0;else
switch(s[0]){case
7:var
k=s[1],m=1;break;case
3:var
m=0;break;case
0:case
9:oS(c,c[1]);if(a[4])var
k=Fv(TL(c[1])),m=1;else{if(n)if(bj(c))var
k=ak(c[1]),m=1,z=0;else
var
z=1;else
var
z=1;if(z)var
k=c,m=1}break;default:throw[0,h,aYM]}if(!m)var
k=b$(a,c);c[1]=[7,ak([2,[0,k,[0,o,0]]])];var
aa=1-n,ab=1,u=wc(function(b){return b$(a,b)},ab,q,aa,k),J=u[6];if(J){var
K=J[1],L=u.slice(),ac=K[2];L[6]=[0,[0,lz(a,K[1]),ac]];var
M=[8,L]}else
var
M=[8,u];var
N=M}var
j=N,e=1;break;case
11:var
ad=b[3],ae=g(function(b){return b$(a,b)},ad),af=b[2],j=[11,aYE(a,b[1]),af,ae],e=1;break;default:var
e=0}if(!e)var
j=oR(0,function(b){return b$(a,b)},b);o[1]=j;return o}function
wt(b,a){var
c=b$(b,a);eU(0);return c}function
mY(a,b){var
f=j0(a,b[9]),h=ly(a,b[8]),e=b[5],i=0,j=b[6],k=e?[0,b$(a,e[1])]:0,c=b[3],l=b[4];if(typeof
c==="number")var
d=0===c?0:1;else
if(0===c[0])var
p=c[2],q=c[1],d=[0,g(function(b){var
c=j0(a,b[5]),d=ly(a,b[4]),e=b$(a,b[3]);return[0,b[1],b[2],e,d,c]},q),p];else
var
r=c[1],d=[1,g(function(b){var
c=j0(a,b[5]),d=ly(a,b[4]),e=b[3],f=bt(function(b){return b$(a,b)},e),h=b[2],i=g(function(b){return b$(a,b)},h);return[0,b[1],i,f,d,c]},r)];var
m=b[2],n=b[1],o=[0,g(function(b){return b$(a,b)},n),m,d,l,k,j,i,h,f];eU(0);return o}function
rO(a,c){switch(c[0]){case
0:var
l=rO(a,c[3]),m=c[2],n=g(function(b){return b$(a,b)},m);return[0,lz(a,c[1]),n,l];case
1:var
d=c[1],e=d[4],f=g(function(b){var
c=b[2],d=g(function(b){return b$(a,b)},c);return[0,lz(a,b[1]),d]},e),h=d[3],i=d[2],j=function(b){var
c=b$(a,b[3]);return[0,b[1],b[2],c]},k=b(av[23],j,i);return[1,[0,b$(a,d[1]),k,h,f]];default:var
o=rO(a,c[3]),p=b$(a,c[2]);return[2,c[1],p,o]}}function
rP(b,a){var
d=j0(b,a[7]),e=ly(b,a[6]),c=a[4],f=a[5],h=c?[0,b$(b,c[1])]:0,i=lz(b,a[3]),j=rO(b,a[2]),k=a[1],l=[0,g(function(a){return b$(b,a)},k),j,i,h,f,e,d];if(1-b[4])eU(0);return l}function
rQ(b,a){var
c=j0(b,a[6]),d=ly(b,a[5]),e=a[4],f=lz(b,a[3]),h=rO(b,a[2]),i=a[1],j=[0,g(function(a){return b$(b,a)},i),h,f,e,d,c];eU(0);return j}function
wu(b,a){var
c=j0(b,a[4]),d=ly(b,a[3]),e=a[2];return[0,wt(b,a[1]),e,d,c]}function
wv(b,a){var
c=j0(b,a[7]),d=b[4]?y:a[6],e=a[5],f=a[4],h=bt(function(a){return b$(b,a)},f),i=a[3],j=g(function(a){return b$(b,a)},i),k=a[2],l=g(function(a){return b$(b,a)},k),m=[0,lz(b,a[1]),l,j,h,e,d,c];eU(0);return m}function
et(b,a){switch(a[0]){case
0:var
c=a[1];switch(c[0]){case
0:try{var
f=d3(c[1],b[3]);return f}catch(b){b=j(b);if(b===l)return a;throw b}case
1:var
g=c[3],h=c[2];return[0,[1,iF(b,c[1]),h,g]];default:return ad(aYN)}case
1:return[1,mZ(b,a[1])];case
2:var
d=a[1],e=eS(d),i=a[3],k=et(iE(d,[0,e],b),i),m=a[2];return[2,e,bt(function(a){return et(b,a)},m),k];default:return[3,iF(b,a[1])]}}function
mZ(q,k){var
a=q,c=0,b=k;for(;;){if(b){var
d=b[1];switch(d[0]){case
1:var
e=d[1],f=eS(e),m=b[2],a=rN(e,[0,f],a),c=[0,f,c],b=m;continue;case
3:var
g=d[1],h=eS(g),n=b[2],a=iE(g,[0,h],a),c=[0,h,c],b=n;continue;case
4:var
i=d[1],j=eS(i),o=b[2],a=Fs(i,[0,[0,j]],a),c=[0,j,c],b=o;continue;default:var
l=eS(d[1]),c=[0,l,c],b=b[2];continue}}var
p=v(c);return aG(function(b,c){switch(b[0]){case
0:return[0,c,wu(a,b[2])];case
1:var
d=b[3];return[1,c,mY(a,b[2]),d];case
2:var
e=b[3];return[2,c,wv(a,b[2]),e];case
3:var
f=b[3];return[3,c,TM(a,b[2]),f];case
4:return[4,c,ww(a,b[2])];case
5:var
g=b[3];return[5,c,rP(a,b[2]),g];default:var
h=b[3];return[6,c,rQ(a,b[2]),h]}},k,p)}}function
TM(b,a){var
c=ly(b,a[3]),d=j0(b,a[2]);return[0,et(b,a[1]),d,c]}function
ww(b,a){var
c=ly(b,a[3]),d=j0(b,a[2]),e=a[1];return[0,bt(function(a){return et(b,a)},e),d,c]}var
rR=[0,function(a){throw[0,h,aYO]}],rS=bp(0,16),wx=bp(0,16);function
TN(a,b){switch(b){case
0:a[1]=1;return 0;case
1:a[2]=1;return 0;default:a[3]=1;return 0}}function
TO(a){return[0,0,0,0]}var
m0=bp(0,16),TP=bp(0,MU),rT=O([I,aYP,0]);function
Fw(a){throw[0,rT,a]}function
d4(e,b){var
a=b[1];switch(a[0]){case
0:return a[1];case
1:throw a[1];default:try{var
c=d(e,a[1]);b[1]=[0,c];return c}catch(a){a=j(a);b[1]=[1,a];throw a}}}function
aYQ(b){var
a=b[1];return 2===a[0]?[0,a[1]]:0}function
TQ(a){return[0,[2,a]]}function
aYR(a){return 0}function
aYS(b,a){try{SQ(b,a);var
c=1;return c}catch(a){a=j(a);if(a===l)return 0;throw a}}function
hj(g,b,a,f,e,d){if(b)var
h=b[1],c=function(c){var
b=a[2];return p(h,g,b,aYS(b,d))};else
var
c=aYR;return iA(a,[0,f,c],e)}function
TR(b,a){return lr(b,a)[1]}function
Fx(c,b){var
a=lr(c,b);d(a[2],0);return a[1]}function
Fy(c,b){var
a=SQ(c,b);d(a[2],0);return a[1]}function
aYT(g,f){var
a=f;for(;;){if(a){var
b=a[2],c=Q(g,b[1][2]);if(0===c){var
d=SR(b[3]);return[0,b[2],d]}var
e=0<=c?a[3]:a[1],a=e;continue}return 0}}function
Fz(c){return function(d,e){var
a=0;return SS(function(a){return b(c,a[1],a[2][1])},a,e,d)}}function
TS(a){return et(a[1],a[2])}var
bz=[0,c_,c_,c_,c_,c_,c_,c_,c_,c_,c_,0,0,0,0];function
TT(a){var
b=a.slice();b[14]=a[14]|1;return b}function
aYU(a){var
b=a.slice();b[14]=a[14]|2;return b}function
TU(a){return 0!==(a[14]&1)?1:0}function
rU(a){return 0!==(a[14]&2)?1:0}function
wy(h,g,a){var
e=0;function
f(b,c,a){return[0,b,a]}var
b=0,c=SS(function(a){var
b=[0,a];return function(a){return ST(f,b,a)}},b,e,a);return d(by(function(b){var
c=d(h,TR(b,a));if(c)try{TR(b,g);var
e=0;return e}catch(a){a=j(a);if(a===l)return 1;throw a}return c}),c)}function
TV(a){return 0===a[0]?1:0}function
FA(a){return TV(a[1])}function
aYV(b){var
a=b[6];return 2===a[0]?TV(a[1]):0}var
TW=[0,function(d,c,b,a){throw[0,h,aYW]}],fQ=[0,function(a){throw[0,h,aYX]}],FB=[0,function(c,b,a){throw[0,h,aYY]}],FC=[0,function(d,c,b,a){throw[0,h,aYZ]}],TX=[0,function(c,b,a){throw[0,h,aY0]}];function
m1(a){return[0,a,0,y]}var
m3=bp(0,17),FD=aW6(0),FE=jF([0,q0]),FF=[0,FE[1]];function
wz(a){FF[1]=b(FE[4],a,FF[1]);return 0}function
TY(a){var
b=1-a[5];if(b)try{var
c=a[4];m(function(b){var
c=b[2];if(c){var
d=b[1];wz(d);return aW9(FD,d,c[1],a[6])}return 0},c);a[5]=1;var
d=0;return d}catch(a){a=j(a);if(a[1]===S$)return Fw([1,a[2],a[4],a[3]]);throw a}return b}function
aY1(c,a){var
b=a[1];bq(m3,b,[0,a]);bq(FD,b,[0,c,a[6]]);return wz(b)}function
TZ(d,c){var
b=aWY(c),e=b[1],g=b[2],h=b[3],i=b[4],j=[0,gp(e)],a=[0,e,g,L(TW[1],bz,bf,j,[1,g]),h,0,c,i];if(f(a[1],d))Fw([0,d,a[1],c]);wz(e);var
k=a[7];m(function(b){return Fw([2,a[1],m2])},k);bq(m3,d,[0,a]);return a}function
rV(d,a){var
f=d?d[1]:1;if(A(a,aY2))throw l;try{var
i=[0,aV(m3,a)],b=i}catch(a){a=j(a);if(a!==l)throw a;var
b=0}if(b){var
e=b[1];if(!e)throw l;var
c=e[1]}else{wz(a);try{var
g=o(a,aY3),h=Rw(oD[1],g)}catch(b){b=j(b);if(b===l){bq(m3,a,0);throw l}throw b}var
c=TZ(a,h)}if(f)TY(c);return c}function
rW(a,c){switch(a[0]){case
0:var
b=a[1];try{var
g=Fx(b,c[7])[2];return g}catch(a){a=j(a);if(a===l){if(oM(b))if(!A(b[2],m2))return rV(0,b[2])[3];throw l}throw a}case
1:var
h=rW(a[1],c),d=d4(fQ[1],h);if(0===d[0])return d3(a[2],d[1][7])[1];throw l;default:var
e=a[1],i=rW(e,c),f=d4(fQ[1],i);if(0===f[0])throw l;return p(FB[1],f[1],e,a[2])}}function
wA(f,e,a,b){switch(a[0]){case
0:var
g=d(f,b);return Fx(a[1],g)[2];case
1:var
h=rW(a[1],b),c=d4(fQ[1],h);if(0===c[0]){var
i=d(e,c[1]);return d3(a[2],i)[1]}throw l;default:throw l}}function
aY4(a){return a[1]}function
aY5(a){return a[1]}function
wB(a,b){return wA(aY5,aY4,a,b)}function
aY6(a){return a[4]}function
aY7(a){return a[4]}function
T0(a,b){return wA(aY7,aY6,a,b)}function
aY8(a){return a[6]}function
aY9(a){return a[6]}function
wC(a,b){return wA(aY9,aY8,a,b)}function
aY_(a){return a[8]}function
aY$(a){return a[8]}function
T1(a,b){return wA(aY$,aY_,a,b)}function
bg(b,a){return T0(b,a)[1]}function
T2(b,a){return T0(b,a)[2]}function
T3(m,b,e){switch(b[0]){case
0:var
c=b[1];try{var
n=Fx(c,e[5])[2];return n}catch(a){a=j(a);if(a===l){if(oM(c))if(!A(c[2],m2))return m1([1,rV(0,c[2])[2]]);throw l}throw a}case
1:var
o=rW(b[1],e),h=d4(fQ[1],o);if(0===h[0])return m1(d4(TS,d3(b[2],h[1][5])[1]));throw l;default:var
f=b[2],p=rW(b[1],e),i=d4(fQ[1],p);if(0===i[0])throw l;var
a=i[1],g=a[3];if(3===g[0])var
d=[3,iF(a[5],g[1])];else
if(m)var
d=g;else
try{var
r=aV(a[7],f),d=r}catch(b){b=j(b);if(b!==l)throw b;var
q=a[3],k=et(iE(a[1],f,a[5]),q);bq(a[7],f,k);var
d=k}return m1(d)}}var
rX=[0,0];function
T4(a){rX[1]=0;return 0}function
FG(a){var
c=rC(a);if(c)var
d=rX[1],b=1-N(function(b){return E(a,b)},d);else
var
b=c;var
e=b?(rX[1]=[0,a,rX[1]],0):b;return e}function
oX(d,c,b){switch(b[0]){case
0:var
a=b;break;case
1:var
o=b[3],p=b[2],a=[1,oX(d,c,b[1]),p,o];break;default:var
q=oX(1,c,b[2]),a=[2,oX(d,c,b[1]),q]}try{var
f=T3(1,a,c)[1];if(3===f[0]){var
h=oX(d,c,f[1]);if(!d){var
e=oO(a),i=rC(e),n=i?1-E(e,oO(h)):i;if(n)FG(e)}var
g=h}else
var
g=a;return g}catch(b){b=j(b);if(b===l){if(d)var
k=0;else
var
m=0===a[0]?1-oM(a[1]):1,k=m?0:1;if(!k)return a}throw b}}function
j1(c,d,b){try{var
a=oX(0===c?1:0,d,b);return a}catch(a){a=j(a);if(a===l){if(c){var
e=oX(1,d,b);throw[0,rT,[3,c[1],b,e]]}throw[0,h,aZa]}throw a}}var
aZb=0;function
iG(a,b){return T3(aZb,a,b)}function
rY(b,c){var
a=bg(b,c),d=a[5];if(d){var
e=d[1],m=1===a[4]?0:0===a[3]?Fd(e)?0:1:0;if(!m){var
g=a[7],h=bt(function(a){return a[2]},g);return[0,a[1],e,h]}}var
f=j1(0,c,b);if(Y(b,f))throw l;var
i=a[7],j=bt(function(a){return a[2]},i),k=ak([3,f,a[1],[0,0]]);return[0,a[1],k,j]}function
aZc(b,c){var
a=bg(b,c),d=a[5];if(d){var
f=a[7],g=bt(function(a){return a[2]},f);return[0,a[1],d[1],g]}var
e=j1(0,c,b);if(Y(b,e))throw l;var
h=a[7],i=bt(function(a){return a[2]},h),j=ak([3,e,a[1],[0,0]]);return[0,a[1],j,i]}function
rZ(c,b){var
a=wC(c,b)[1];if(a)return a[1];throw l}function
FH(c,b){var
a=c;for(;;)switch(a[0]){case
0:try{lr(a[1],b[10]);var
d=1;return d}catch(a){a=j(a);if(a===l)return 0;throw a}case
1:var
a=a[1];continue;default:return 1}}var
FI=O([I,aZd,0]);function
j2(b,a){switch(b[0]){case
0:var
c=b[1];try{var
q=Fy(c,a[7]);return q}catch(a){a=j(a);if(a===l){if(A(c,m2))throw l;var
o=rV(0,c)[3];return[0,[0,gp(c)],o]}throw a}case
1:var
e=b[2],f=j2(b[1],a),g=d4(fQ[1],f[2]);if(0===g[0]){var
h=d3(e,g[1][7]);return[0,[1,f[1],e,h[2]],h[1]]}throw l;default:var
i=j2(b[1],a),k=i[1],d=r0(1,b[2],a),r=iG(d,a),m=d4(fQ[1],i[2]);if(0===m[0])throw l;var
n=m[1],s=n[2];br(p(FC[1],a,r[1],d),s);return[0,[2,k,d],p(FB[1],n,k,d)]}}function
r0(u,b,a){switch(b[0]){case
0:var
c=b[1];try{var
e=Fy(c,a[5]),f=e[2][1];if(0===f[0]){var
g=f[1];if(0===g[0])if(A(g[1][2],aZe))throw FI}var
o=e[1];return o}catch(a){a=j(a);if(a===l){if(A(c,m2))throw l;rV(0,c);return[0,gp(c)]}throw a}case
1:var
h=b[2],i=j2(b[1],a),k=d4(fQ[1],i[2]);if(0===k[0]){var
q=d3(h,k[1][5])[2];return[1,i[1],h,q]}throw l;default:var
m=j2(b[1],a),d=r0(1,b[2],a),r=iG(d,a),s=[2,m[1],d],n=d4(fQ[1],m[2]);if(0===n[0])throw l;var
t=n[1][2];br(p(FC[1],a,r[1],d),t);return s}}function
r1(i,h,a,b){switch(a[0]){case
0:var
j=d(i,b);return Fy(a[1],j);case
1:var
c=a[2],e=j2(a[1],b),f=d4(fQ[1],e[2]);if(0===f[0]){var
g=d3(c,d(h,f[1]));return[0,[1,e[1],c,g[2]],g[1]]}throw l;default:throw l}}function
T5(m,k,i,a,c){switch(a[0]){case
0:var
n=d(m,c),o=aYT(a[1],n),e=function(a){if(a){var
c=a[1],f=c[1],g=a[2],h=e(d(by(function(a){return 1-b(i,f,a[1])}),g));return[0,[0,f,c[2]],h]}return 0};return e(o);case
1:var
p=j2(a[1],c)[2],f=d4(fQ[1],p);if(0===f[0]){try{var
q=d(k,f[1]),r=d3(a[2],q),h=r}catch(a){a=j(a);if(a!==l)throw a;var
h=0}return g(function(a){function
b(a){return 0}return[0,a[1],b]},h)}throw l;default:throw l}}function
aZf(b,a){var
c=a[6];if(2===b[6][0])if(2===c[0])return 1;return 0}function
aZg(b,a){return 0}function
aZh(a){return a[1]}function
aZi(a){return a[1]}function
aZj(a){return a[2]}function
aZk(a){return a[2]}function
T6(a,b){return T5(aZk,aZj,aZf,a,b)}function
aZl(a){return a[3]}function
aZm(a){return a[3]}function
aZn(a,b){return T5(aZm,aZl,aZg,a,b)}function
aZo(a){return a[4]}function
aZp(a){return a[4]}function
aZq(a){return a[6]}function
aZr(a){return a[6]}function
aZs(a,b){return r1(aZr,aZq,a,b)}function
aZt(a){return a[8]}function
aZu(a){return a[8]}function
aZv(a){return a[9]}function
aZw(a){return a[9]}function
FJ(e,c,b){var
a=1-rU(e);if(a)try{var
f=d(aV(rS,[0,c,b[3]]),0);return f}catch(a){a=j(a);if(a===l)return 0;throw a}return a}function
oY(e,c,b){var
a=1-rU(e);if(a)try{var
f=d(aV(wx,[0,c,b[8]]),0);return f}catch(a){a=j(a);if(a===l)return 0;throw a}return a}function
T7(g,f,e,c,b){var
a=1-rU(f);if(a)try{var
h=d(aV(m0,[0,e,c[8],b]),g);return h}catch(a){a=j(a);if(a===l)return 0;throw a}return a}function
aZx(f,e,a,c){var
b=1-rU(e);if(b){var
g=ls(a[1]);try{var
h=d(aV(m0,[0,g,a[6],c]),f);return h}catch(a){a=j(a);if(a===l)return 0;throw a}}return b}function
aZy(e,a,c){var
b=[0,e,a[3]];try{var
f=aV(rS,b),g=jK(rS,b,function(a){d(f,0);return d(c,0)});return g}catch(a){a=j(a);if(a===l)return bq(rS,b,c);throw a}}function
aZz(f,e,c){var
a=e[8];if(a[3])return 0;var
b=[0,f,a];try{var
g=aV(wx,b)}catch(a){a=j(a);if(a===l)throw[0,h,aZA];throw a}return jK(wx,b,function(a){return d(c,g)})}function
fg(b,a){var
c=r1(aZi,aZh,b,a),d=c[2];FJ(a,eO(b),d);return c}function
iH(b,a){var
d=r1(aZp,aZo,b,a),c=d[2][1];oY(a,eO(b),c);return[0,d[1],c]}function
oZ(b,a){try{var
c=bg(a,b),d=oY(b,ls(a),c);return d}catch(a){a=j(a);if(a===l)return 0;throw a}}function
r2(b){var
a=t(b)[1];if(typeof
a!=="number"&&3===a[0])return a[1];throw[0,h,aZB]}function
FK(f,a){var
b=T6(f,a);if(b){var
c=b[1],e=c[1];oZ(a,r2(e[2]));d(c[2],0);return e}throw l}function
T8(a){return 0===a[0]?1:0}function
T9(b,a){try{var
c=T6(b,a),e=g(function(b){var
c=b[1],e=b[2];return[0,c,function(b){oZ(a,r2(c[2]));return d(e,0)}]},c);return e}catch(a){a=j(a);if(a===l)if(T8(b))return 0;throw a}}function
FL(e,b,c,a){var
f=1-rU(b);if(f){if(2===a[6][0]){var
k=ls(r2(a[2]));try{var
m=d(aV(m0,[0,k,a[12],c]),e);return m}catch(a){a=j(a);if(a===l)return 0;throw a}}var
g=r2(a[2]);try{var
i=bg(g,b)}catch(a){a=j(a);if(a===l)throw[0,h,aZC];throw a}return T7(e,b,ls(g),i,c)}return f}function
aZD(b,a){try{var
c=aZn(b,a),e=g(function(b){var
c=b[1],e=b[2];return[0,c,function(b){oZ(a,r2(c[2]));return d(e,0)}]},c);return e}catch(a){a=j(a);if(a===l)if(T8(b))return 0;throw a}}function
aZE(b,a){var
d=r1(aZu,aZt,b,a),c=d[2];if(A(b_(0,c[3]),aZF))iH(b,a);else
oZ(a,c[3]);return d}var
T_=[0,0];function
aZG(c,a){var
d=r1(aZw,aZv,c,a),b=d[2];if(A(b_(0,b[3]),aZH))iH(c,a);else
oZ(a,b[3]);oZ(a,b[3]);return d}function
aZI(d,c){var
a=c;for(;;){if(3===a[0]){var
b=a[1];if(0===b[0])if(oM(b[1]))return 0;var
a=iG(b,d)[1];continue}return 1}}function
T$(c){var
a=[0,aL[1]];jL(function(e,d){var
c=0!==d?1:0,f=c?(a[1]=b(aL[4],e,a[1]),0):c;return f},m3);return a[1]}function
aZJ(b){var
a=b[1];if(typeof
a!=="number"&&6===a[0])return 1;return 0}function
r3(g,f){var
a=g[13];for(;;){if(a){var
e=a[1],c=e[2];if(b(ae[16],aZJ,c[1])){var
h=ae[1],i=c[1],j=function(a){var
b=t(a);return d(ae[4],b)};c[1]=p(ae[14],j,i,h)}if(b(ae[3],f,c[1]))return[0,e[1]];var
a=a[2];continue}return 0}}function
Ua(d,c,b){try{var
a=dr(c,d[13])}catch(a){a=j(a);if(a===l)throw[0,h,aZK];throw a}return S_(a,R(ae[4],b,a[1]))}function
FM(f,d,a){try{var
c=dr(d,f[13])}catch(a){a=j(a);if(a===l)throw[0,h,aZL];throw a}function
e(h){var
d=t(h),f=1-b(ae[3],d,c[1]);if(f){S_(c,b(ae[4],d,c[1]));var
a=d[1];if(typeof
a!=="number"&&3===a[0])return br(e,S6(0,a[1],a[3][1]));var
g=0}else
var
g=f;return g}return e(a)}function
FN(b,c,a){switch(a[0]){case
0:try{var
e=FN(b,c,rZ(a[1],b));return e}catch(b){b=j(b);if(b===l)return a;throw b}case
3:var
d=a[1];try{var
f=FN(b,[0,d],iG(d,b)[1]);return f}catch(b){b=j(b);if(b===l)return a;throw b}default:return c?p(TX[1],b,a,c[1]):a}}function
o0(b,a){return FN(b,0,a)}function
Ub(g,a){var
c=a[3];if(typeof
c!=="number"&&1===c[0]){var
e=c[1],C=a[4],j=[0,0],k=[0,0],l=[0,0],D=ak([3,g,a[1],[0,0]]);m(function(a){if(0===a[2])j[1]++;else
k[1]++;var
b=0===a[3]?1:0,c=b?(l[1]++,0):b;return c},e);var
f=function(i,h,g){if(g){var
m=g[2],a=g[1],c=a[3],e=a[2],n=a[1],q=c?c[1]:D,o=e?[0,[1,h],f(i,h+1|0,m)]:[0,[0,i],f(i+1|0,h,m)];if(c)var
r=wj(c[1]),s=wj(ak([2,e])),t=b(ae[9],s,r),p=d(ae[20],t);else
var
p=0;var
u=a[5],v=a[4],x=l[1],y=k[1],z=j[1],A=o[1],B=w(e);return[0,[0,n,[0,n[2],q,p,e,B,A,z,y,x,0!==c?1:0,C,v,u]],o[2]]}return 0};return f(0,0,e)}return 0}function
Uc(f,b){var
a=b[3];if(typeof
a!=="number"&&0===a[0]){var
c=a[1],h=b[4],i=a[2],j=ak([3,f,b[1],[0,0]]),d=X(w(c),aXa),e=function(b,c){if(c){var
a=c[1],f=[0,a[1][2],j,a[3],a[2],b,d,i,h,a[4],a[5]];n(d,b)[b+1]=f;var
g=e(b+1|0,c[2]);return[0,[0,a[1],f],g]}return 0};return e(0,c)}return 0}function
m4(a,b,e,c){if(c){var
d=c[1];switch(d[0]){case
0:var
u=[1,a,d[1][2],b],g=d[2][2];if(typeof
g==="number")var
f=0;else
if(0===g[0])var
h=b,f=1;else
var
f=0;if(!f)var
h=b+1|0;var
i=m4(a,h,e,c[2]);return[0,[0,u,i[1]],i[2]];case
1:var
j=d[1],k=[1,a,j[2],dt],v=c[2],l=m4(a,b,rN(j,k,e),v);return[0,[0,k,l[1]],l[2]];case
3:var
n=d[1],o=[1,a,n[2],b],x=c[2],p=m4(a,b+1|0,iE(n,o,e),x);return[0,[0,o,p[1]],p[2]];case
4:var
q=d[1],r=[1,a,q[2],dt],y=c[2],s=m4(a,b,Fs(q,[0,r],e),y);return[0,[0,r,s[1]],s[2]];case
6:var
z=[1,a,d[1][2],dt],t=m4(a,b,e,c[2]);return[0,[0,z,t[1]],t[2]];default:var
w=[1,a,d[1][2],b],m=m4(a,b+1|0,e,c[2]);return[0,[0,w,m[1]],m[2]]}}return[0,0,e]}function
Ud(e,d,a){var
c=m4(e,0,d,a),b=c[2],f=[z,function(c){return g(function(a){switch(a[0]){case
0:var
c=wu(b,a[2]);return[0,a[1],c];case
1:var
d=a[3],e=mY(b,a[2]);return[1,a[1],e,d];case
2:var
f=a[3],g=wv(b,a[2]);return[2,a[1],g,f];case
3:var
h=a[3],i=TM(b,a[2]);return[3,a[1],i,h];case
4:var
j=ww(b,a[2]);return[4,a[1],j];case
5:var
k=a[3],l=rP(b,a[2]);return[5,a[1],l,k];default:var
m=a[3],n=rQ(b,a[2]);return[6,a[1],n,m]}},a)}];return[0,c[1],b,f]}function
Ue(b,e,a){if(E(e,bf)){try{var
h=aV(TP,b),c=h}catch(a){a=j(a);if(a!==l)throw a;var
d=[0,0];bq(TP,b,d);var
c=d}try{var
g=mw(a,c[1]);return g}catch(d){d=j(d);if(d===l){var
f=Ud(b,e,a);c[1]=[0,[0,a,f],c[1]];return f}throw d}}return Ud(b,e,a)}function
FO(b,d,a){try{var
e=d3(b,a),c=e}catch(a){a=j(a);if(a!==l)throw a;var
c=0}return du(b,[0,d,c],a)}function
r4(d,c,b,a){return TQ([0,d,c,b,a])}function
wD(f){var
h=f[2],i=f[1],b=o0(i,f[4]);switch(b[0]){case
1:var
j=b[1],a=[0,bD,bD,bD,bD,bD,bD,bD,bD,bD],k=Ue(f[3],h,j),e=k[2],c=[0,i],d=[0,0],l=k[1];aC(function(b,f){switch(b[0]){case
0:var
p=b[2],w=wu(e,p);a[1]=du(b[1][2],[0,w,d[1]],a[1]);var
q=p[2];if(typeof
q!=="number"&&0===q[0])return 0;d[1]++;return 0;case
1:var
j=b[2],h=b[1],k=mY(e,j),x=Ub(f,k),r=g(function(a){return a[2]},x),y=Uc(f,k),s=g(function(a){return a[2]},y);a[4]=du(h[2],[0,[0,k,[0,r,s]],dt],a[4]);m(function(b){a[2]=FO(b[1],[0,b,dt],a[2]);return 0},r);m(function(b){a[3]=FO(b[1],[0,b,dt],a[3]);return 0},s);var
l=c[1],o=l.slice();o[4]=hj(aZV,0,h,[0,[0,h],[0,j,aZU]],l[4],c[1][4]);o[11]=[1,l[11],h,j];c[1]=o;return 0;case
2:var
z=Ta(f,wv(e,b[2]));a[2]=FO(b[1][2],[0,z,d[1]],a[2]);d[1]++;return 0;case
3:var
t=b[2],i=b[1],u=t[1],A=TQ([0,e,u]);a[5]=du(i[2],[0,A,d[1]],a[5]);var
B=r4(c[1],e,f,u);a[7]=du(i[2],[0,B,d[1]],a[7]);c[1]=FR(0,i,[0,i],t,c[1],c[1]);d[1]++;return 0;case
4:var
v=b[2],n=b[1],C=ww(e,v);a[6]=du(n[2],[0,C,dt],a[6]);c[1]=wE(0,n,[0,n],v,c[1],c[1]);return 0;case
5:var
D=rP(e,b[2]);a[8]=du(b[1][2],[0,D,d[1]],a[8]);d[1]++;return 0;default:var
E=rQ(e,b[2]);a[9]=du(b[1][2],[0,E,d[1]],a[9]);return 0}},j,l);return[0,a];case
2:var
n=bp(0,17),o=bp(0,17),p=b[3],q=b[2],r=bt(function(a){return et(h,a)},q);return[1,[0,b[1],r,p,i,h,o,n]];default:return[0,[0,bD,bD,bD,bD,bD,bD,bD,bD,bD]]}}function
Uf(b,n,e,c){var
f=1-b[3],g=f?dX(d(e,aZM)):f;if(g){var
a=n[2],h=[0,a,b];if(is(c,h))return 0;var
i=[0,0];bq(c,h,function(a){i[1]=1;return 0});var
j=A(a,aZN);if(j)var
k=j;else
var
p=95===u(a,0)?1:0,k=p||(35===u(a,0)?1:0);var
l=1-k;if(l){var
o=function(f){var
c=1-i[1];return c?ai(b,d(e,a)):c};return d(rR[1],o)}var
m=l}else
var
m=g;return m}function
Ug(a,g){var
c=0<r(a)?1:0,d=c?35===u(a,0)?1:0:c;if(d){var
e=r(a)-1|0,h=1;if(!(e<1)){var
b=h;for(;;){if(35===u(a,b))throw[0,rT,[4,g,a]];var
i=b+1|0;if(e!==b){var
b=i;continue}break}}var
f=0}else
var
f=d;return f}function
FP(h,g,b,f,a,c,e){Ug(b[2],a[3]);br(function(c){return Uf(a[3],b,c,rS)},h);var
d=c.slice();d[1]=hj(aZO,g,b,[0,f,a],c[1],e[1]);d[11]=[0,c[11],b,a];return d}function
FQ(k,j,e,i,b,a,h){var
f=b[8];if(k)Uf(f,e,function(a){return[18,a]},wx);var
l=Ub(i,b),o=Uc(i,b),r=g(function(a){return a[2]},o),s=[0,g(function(a){return a[2]},l),r];if(k)var
p=1-f[3],q=p?dX(aZP):p;else
var
q=k;if(q){var
n=e[2];m(function(j){var
c=j[2][1],e=[0,n,f,c],g=1-is(m0,e);if(g){var
b=TO(0);bq(m0,e,function(a){return TN(b,a)});var
k=A(n,aZQ),l=k||(95===u(n,0)?1:0),h=1-l;if(h){var
m=function(g){var
d=1-TU(a),e=d?1-b[1]:d;return e?ai(f,[21,c,b[2],b[3]]):e};return d(rR[1],m)}var
i=h}else
var
i=g;return i},l)}var
c=a.slice(),t=a[2];c[2]=R(function(a,b){return hj(aZR,j,a[1],a[2],b,h[2])},l,t);var
v=a[3];c[3]=R(function(a,b){return hj(aZS,j,a[1],a[2],b,h[3])},o,v);c[4]=hj(aZT,j,e,[0,i,[0,b,s]],a[4],h[4]);c[11]=[1,a[11],e,b];return c}function
Uh(h,o,e,n,b,a,m){var
f=b[6];if(h)var
i=1-f[3],j=i?dX(aZW):i;else
var
j=h;if(j){var
p=ls(b[1]),k=e[2],l=[0,p,f,k];if(1-is(m0,l)){var
c=TO(0);bq(m0,l,function(a){return TN(c,a)});var
q=function(e){var
b=1-TU(a),d=b?1-c[1]:b;return d?ai(f,[22,k,c[2],c[3]]):d};d(rR[1],q)}}var
g=a.slice(),r=m[2],s=a[2];g[2]=hj(aZX,o,e,Ta(n,b),s,r);g[11]=[2,a[11],e,b];return g}function
FR(g,e,d,c,a,f){var
b=a.slice();b[5]=hj(aZY,g,e,[0,d,c],a[5],f[5]);var
h=f[7],i=a[7];b[7]=hj(aZZ,g,e,[0,d,r4(a,bf,d,c[1])],i,h);b[11]=[3,a[11],e,c];return b}function
wE(g,d,f,c,a,e){var
b=a.slice();b[6]=hj(aZ0,g,d,[0,f,c],a[6],e[6]);b[11]=[4,a[11],d,c];return b}function
Ui(g,d,f,c,a,e){var
b=a.slice();b[8]=hj(aZ1,g,d,[0,f,c],a[8],e[8]);b[11]=[5,a[11],d,c];return b}function
Uj(g,d,f,c,a,e){var
b=a.slice();b[9]=hj(aZ2,g,d,[0,f,c],a[9],e[9]);b[11]=[6,a[11],d,c];return b}function
aZ3(a,e,b){try{var
c=aV(a[6],b);return c}catch(c){c=j(c);if(c===l){var
f=a[3],g=et(iE(a[1],b,bf),f),d=r4(a[4],a[5],[2,e,b],g);bq(a[6],b,d);return d}throw c}}TW[1]=r4;FB[1]=aZ3;fQ[1]=wD;function
iI(d,b,c,a){return FP(d,0,b,[0,b],c,a,a)}function
eV(d,b,c,a){return FQ(d,0,b,[0,b],c,a,a)}function
wF(d,b,c,a){return Uh(d,0,b,[0,b],c,a,a)}function
lA(e,a,g,d){var
b=FR(0,a,[0,a],g,d,d),f=e?e[1]:0;if(f){var
c=b.slice();c[10]=iA(a,0,b[10]);c[11]=[8,b[11],a];return c}return b}function
r5(b,c,a){return wE(0,b,[0,b],c,a,a)}function
wG(b,c,a){return Ui(0,b,[0,b],c,a,a)}function
wH(b,c,a){return Uj(0,b,[0,b],c,a,a)}function
iJ(d,c,b,a){return lA(d,c,m1(b),a)}function
FS(e,d,c,b){var
a=H(d);return[0,a,cw(e,0,a,[0,a],c,b,b)]}function
FT(a){function
b(b,c,d,e,f,g){return FP(a,b,c,d,e,f,g)}return function(a,c,d){return FS(b,a,c,d)}}var
aZ5=1;function
aZ6(a,b,c,d,e,f){return FQ(aZ5,a,b,c,d,e,f)}function
FU(a,b,c){return FS(aZ6,a,b,c)}function
wI(e,d,c,b){var
a=H(d);return[0,a,lA(e,a,c,b)]}function
Uk(a,b,c){return FS(wE,a,b,c)}function
r6(d,c,b,a){return wI(d,c,m1(b),a)}function
Ul(a,b){switch(a[0]){case
0:return iI(0,a[1],a[2],b);case
1:return eV(0,a[1],a[2],b);case
2:return wF(0,a[1],a[2],b);case
3:return lA(0,a[1],a[2],b);case
4:return r5(a[1],a[2],b);case
5:return wG(a[1],a[2],b);default:return wH(a[1],a[2],b)}}function
r7(d,c){var
a=d,b=c;for(;;){if(a){var
e=Ul(a[1],b),a=a[2],b=e;continue}return b}}function
FV(c,d,h,b){var
e=Ue(d,bf,h),a=e[3],f=c3(a),i=dk===f?a[1]:z===f?gm(a):a,j=e[1],g=im(function(e,a,d){switch(a[0]){case
0:var
f=a[2];return FP(0,c,mS(a[1]),d,f,e,b);case
1:var
g=a[2];return FQ(0,c,mS(a[1]),d,g,e,b);case
2:var
h=a[2];return Uh(0,c,mS(a[1]),d,h,e,b);case
3:var
i=a[2];return FR(c,mS(a[1]),d,i,e,b);case
4:var
j=a[2];return wE(c,mS(a[1]),d,j,e,b);case
5:var
k=a[2];return Ui(c,mS(a[1]),d,k,e,b);default:var
l=a[2];return Uj(c,mS(a[1]),d,l,e,b)}},b,i,j).slice();g[11]=[7,b[11],d];return g}function
aZ7(a,b){var
c=rV(0,a)[2];return FV(0,[0,gp(a)],c,b)}function
a0b(c,b){var
a=TZ(c,b);TY(a);return a[2]}function
a0c(h,c,a,f){oT(0);aYI(0);var
b=mZ(aYy(bf),h),d=CW(a);try{var
e=[0,c,b,f,0],g=aW1(a,d,e);u3(d);var
i=r4(bz,bf,[0,gp(c)],[1,b]);aY1(g,[0,c,b,i,[0,[0,e[1],[0,g]],f],0,a,e[4]]);return b}catch(b){b=j(b);u3(d);try{CS(a)}catch(a){a=j(a);if(a[1]!==rg)throw a}throw b}}function
a0d(f,e,c){var
a=u7(q0,d(FE[20],FF[1])),b=0;return a0c(f,e,c,G(function(c,b){try{var
a=[0,[0,b,[0,aV(FD,b)[1]]],c];return a}catch(a){a=j(a);if(a===l)return[0,[0,b,0],c];throw a}},b,a))}function
r8(j,i,f,e,c,a){if(e){var
g=j2(e[1],c),k=g[1],h=d4(wD,g[2]);if(0===h[0]){var
l=d(i,h[1]);return ws(function(b,a,c){return L(f,b,[1,k,b,a[2]],a[1],c)},l,a)}return a}var
m=d(j,c);return b(Fz(function(c,a,b){return L(f,c[2],a[1],a[2],b)}),m,a)}function
Um(i,h,f,e,c,a){if(e){var
g=d4(wD,j2(e[1],c)[2]);if(0===g[0]){var
j=d(h,g[1]);return ws(function(d,c,a){return c?b(f,c[1][1],a):a},j,a)}return a}var
k=d(i,c);return b(Fz(function(d,c,a){return b(f,c,a)}),k,a)}function
a0e(c,e,d,a){if(e){var
f=j2(e[1],d),h=f[1],g=d4(wD,f[2]);if(0===g[0]){var
i=g[1][5];return ws(function(b,a,d){var
e=m1(d4(TS,a[1]));return L(c,b,[1,h,b,a[2]],e,d)},i,a)}return a}var
j=d[5],k=b(Fz(function(d,a,b){return L(c,d[2],a[1],a[2],b)}),j,a);return ou(function(d,b,a){if(b){var
e=m1([1,b[1][2]]);return L(c,d,[0,gp(d)],e,a)}return a},m3,k)}function
a0f(a){function
b(a){return a[1]}function
c(a){return a[1]}return function(d,e,f){return r8(c,b,a,d,e,f)}}function
Un(a){function
b(a){return a[2]}function
c(a){return a[2]}return function(d,e,f){return Um(c,b,a,d,e,f)}}function
Uo(a){function
b(a){return a[3]}function
c(a){return a[3]}return function(d,e,f){return Um(c,b,a,d,e,f)}}function
a0g(a){function
b(a){return a[4]}function
c(a){return a[4]}return function(d,e,f){return r8(c,b,a,d,e,f)}}function
a0h(a){function
b(a){return a[6]}function
c(a){return a[6]}return function(d,e,f){return r8(c,b,a,d,e,f)}}function
a0i(a){function
b(a){return a[8]}function
c(a){return a[8]}return function(d,e,f){return r8(c,b,a,d,e,f)}}function
a0j(a){function
b(a){return a[9]}function
c(a){return a[9]}return function(d,e,f){return r8(c,b,a,d,e,f)}}var
a0k=0;function
a0l(a,b,c){return wF(a0k,a,b,c)}var
a0m=0,Up=aX0(function(a,b,c){return eV(a0m,a,b,c)},a0l,bz);function
Uq(c,a){switch(a[0]){case
0:var
h=a[2],i=a[1],j=a[3];return L(e(c,a0n),jP,j,i,h);case
1:var
k=a[1],l=a[3],m=a[2];return bH(e(c,a0o),jP,m,jP,l,k);case
2:var
n=a[1],o=a[2];return p(e(c,a0q),o,n,a0p);case
3:var
f=a[3],g=a[2];e(c,a0r);if(Y(g,f)){var
q=b_(0,g);d(e(c,a0s),q)}else{var
s=b_(0,f),t=b_(0,g);b(e(c,a0w),t,s)}var
r=oO(f)[2];return p(e(c,a0v),a0u,r,a0t);default:var
u=a[2];return d(e(c,a0x),u)}}c8(function(b){if(b[1]===rT){var
a=b[2];if(2<a[0]){var
c=a[1];if(J(c,y))return[0,fa(c,Uq,a)]}return[0,vL(Uq,a)]}return 0});var
o1=Up[1],a0y=Up[2];function
Ur(b,a){if(typeof
a!=="number")switch(a[0]){case
4:return m(b,a[3]);case
5:return br(b,a[2]);case
6:var
c=a[1];return m(function(a){return d(b,a[3])},c);case
8:d(b,a[1]);return d(b,a[2]);case
1:case
9:return d(b,a[1]);case
3:case
7:return m(b,a[1])}return 0}var
iK=[0,0];function
a0z(b,a){if(typeof
a!=="number")switch(a[0]){case
1:var
e=a[3],f=a[2];return[1,d(b,a[1]),f,e];case
3:return[3,g(b,a[1])];case
4:var
h=g(b,a[3]);return[4,a[1],a[2],h];case
5:var
c=a[2];if(c){var
i=a[3],j=[0,d(b,c[1])];return[5,a[1],j,i]}break;case
6:var
k=a[2],l=a[1];return[6,g(function(a){var
c=d(b,a[3]);return[0,a[1],a[2],c]},l),k];case
7:return[7,g(b,a[1])];case
8:var
m=a[3],n=d(b,a[2]);return[8,d(b,a[1]),n,m];case
9:return[9,d(b,a[1])]}return a}function
wJ(c){var
b=c;for(;;){var
a=b[1];if(typeof
a!=="number")switch(a[0]){case
0:iK[1]=[0,[0,a[1],a[2]],iK[1]];return 0;case
1:wJ(a[1]);iK[1]=[0,[0,a[2],a[3]],iK[1]];return 0;case
8:var
b=a[1];continue}return Ur(wJ,a)}}function
Us(a){iK[1]=0;m(function(a){return wJ(a[1])},a);var
b=iK[1];iK[1]=0;return b}function
Ut(a){return v(Us(a))}function
Uu(b,a){return dr(a,b)}function
wK(c,b){var
a=b[1];if(typeof
a!=="number")switch(a[0]){case
0:var
e=b.slice();try{var
i=a[2],k=[0,Uu(c,a[1]),i],f=k}catch(a){a=j(a);if(a!==l)throw a;var
f=0}e[1]=f;return e;case
1:var
g=wK(c,a[1]);try{var
h=b.slice(),m=a[3];h[1]=[1,g,Uu(c,a[2]),m];return h}catch(a){a=j(a);if(a===l)return g;throw a}}var
d=b.slice();d[1]=a0z(function(a){return wK(c,a)},a);return d}try{ih(b8D)}catch(a){a=j(a);if(a!==l)throw a}O([I,a0A,0]);var
r9=[0,0],FW=[0,0];function
Uv(a){r9[1]=0;FW[1]=0;return 0}function
r_(a){r9[1]=[0,a,r9[1]];return 0}function
r$(a){return r9[1]}function
wL(a){r9[1]=a;return 0}function
a0B(b,a){var
c=J(b[3],a[3]),d=c?(FW[1]=[0,[0,b,a],FW[1]],0):c;return d}function
FX(f,e,d,c,b,a){return Uv(0)}var
x=O([I,a0C,0]),sa=O([I,a0D,0]);c8(function(a){if(a[1]===sa){var
c=a[3],d=a[2];return[0,b(eN([0,le(mI)],0,0,a0E),d,c)]}return 0});var
sb=O([I,a0F,0]),cL=O([I,a0G,0]);O([I,a0H,0]);var
a0J=O([I,a0I,0]),Uw=O([I,a0K,0]),a4=[0,0],lB=[0,0],sc=[0,1],j3=[0,0];function
o2(a){return a4[1]}function
j4(a){a4[1]=a;lB[1]=a;return 0}function
a5(a){j3[1]=[0,[0,a4[1],lB[1]],j3[1]];a4[1]++;lB[1]=a4[1];return 0}function
FY(a){j3[1]=[0,[0,a4[1],lB[1]],j3[1]];a4[1]++;return 0}function
FZ(a){j3[1]=[0,[0,a4[1],lB[1]],j3[1]];lB[1]=a4[1];return 0}function
aI(b){var
a=cQ(j3[1]);j3[1]=ik(j3[1]);a4[1]=a[1];lB[1]=a[2];return 0}function
wM(a){switch(a[0]){case
0:var
b=a[1][2];break;case
1:var
b=a[2];break;default:throw[0,h,a0L]}return 35===u(b,0)?1:0}var
j5=[0,0];function
wN(d){var
a=1-j5[1];if(a)var
b=d[12],c=b?(j5[1]=1,oT(0),1):b;else
var
c=a;return c}function
o3(a){var
b=a?(j5[1]=0,0):a;return b}function
F0(c,b,a){var
e=wN(c),f=d(b,a);o3(e);return f}var
wO=[0,0];function
F1(c,b,a){if(0===b)if(!j5[1])if(!wM(c))return wO;return a}function
ab(a){return bi(a4[1],a)}function
U(a,b){return bi(a4[1],[0,a])}function
fR(b,a){return bi(a,[0,b])}function
F2(a){return ab([4,a,[0,0]])}function
da(b,a){return ab([3,b,a,[0,0]])}var
sd=ab(a0M);function
a0N(b,a){var
c=b[1]===a[1]?1:0,d=c?b[2]===a[2]?1:0:c;return d}var
ct=DQ([0,a0N,function(a){return a[1][3]+(93*a[2][3]|0)|0}]),iL=[0,0],iM=[0,0],se=[0,0];function
F3(g,f,a){var
b=iL[1],c=iM[1],e=se[1];try{iL[1]=1;iM[1]=g;se[1]=f;var
h=d(a,0);iL[1]=b;iM[1]=c;se[1]=e;return h}catch(a){a=j(a);iL[1]=b;iM[1]=c;se[1]=e;throw a}}function
Ux(a){return 0===a[0]?1:0}function
Uy(b){var
a=b[3];if(typeof
a==="number")if(0===a)return 0;return 1}function
dK(b){var
a=t(b)[1];if(typeof
a!=="number"&&4===a[0])return a[1];throw[0,h,a0O]}function
a6(e){var
b=0,c=e;for(;;){var
d=t(c),a=d[1];if(typeof
a!=="number"&&5===a[0]){var
b=[0,[0,a[1],a[2],a[3]],b],c=a[4];continue}return[0,e8(function(b,a){return Q(b[1],a[1])},b),d]}}function
o4(b){function
a(a,c){return bi(b,[5,a[1],a[2],a[3],c])}return function(b,c){return R(a,b,c)}}function
iN(r,q){var
e=0,d=0,c=0,a=[0,r,q];for(;;){var
b=a[1];if(a[2]){if(b){var
g=a[2],k=g[2],h=g[1],l=h[3],m=h[2],i=h[1],n=b[2],j=b[1],o=j[3],p=j[2],f=j[1];if(E(f,i)){var
e=[0,[0,f,p,o,m,l],e],a=[0,n,k];continue}if(fC(f,i)){var
d=[0,[0,f,p,o],d],a=[0,n,g];continue}var
c=[0,[0,i,m,l],c],a=[0,b,k];continue}var
t=a[2],u=s(v(c),t),w=v(d);return[0,v(e),w,u]}var
x=v(c),y=s(v(d),b);return[0,v(e),y,x]}}function
o5(d){var
b=d;for(;;){var
c=t(b),a=c[1];if(typeof
a!=="number")switch(a[0]){case
4:var
b=a[1];continue;case
5:var
b=a[4];continue}return c}}function
wP(b){var
a=o5(b)[1];if(typeof
a!=="number")switch(a[0]){case
0:case
3:case
9:return 1}return 0}function
Uz(b){var
a=o5(b)[1];if(typeof
a!=="number"&&0===a[0])return 0;return 1}function
UA(e){var
c=t(e)[1];if(typeof
c!=="number"&&4===c[0]){var
d=c[1];for(;;){var
a=t(d),b=a[1];if(typeof
b!=="number")switch(b[0]){case
0:return b4(a,bi(a[2],0));case
5:var
d=b[4];continue}throw[0,h,a0P]}}throw[0,h,a0Q]}function
sf(e){var
b=t(e)[1];if(typeof
b!=="number"&&4===b[0]){var
c=b[1];for(;;){var
d=t(c),a=d[1];if(typeof
a!=="number")switch(a[0]){case
0:return d;case
5:var
c=a[4];continue}throw[0,h,a0R]}}throw[0,h,a0S]}function
UB(e,d,c,b){var
a=t(b)[1];if(typeof
a!=="number"&&4===a[0])return oV(a[2],[0,[0,[0,e],[0,d,c]]]);throw[0,h,a0T]}function
wQ(b){var
a=t(b)[1];if(typeof
a!=="number"&&4===a[0]){a[2][1]=0;var
c=a6(a[1])[1];return m(function(b){var
a=bB(b[2]);return typeof
a==="number"?0:mU(a[1],1)},c)}throw[0,h,a0U]}function
j6(b){var
a=b;for(;;){if(1===a[0])return a[1];var
a=a[3];continue}}function
iO(a){return t(j6(a)[1])}function
F4(b){var
a=b;for(;;)switch(a[0]){case
0:var
a=a[3];continue;case
1:return 0;default:return 1+F4(a[3])|0}}function
a0V(b,a){return Q(b[1],a[1])}function
UC(a){return e8(a0V,a)}function
o6(b,a){if(b)if(a){if(!b[2])if(!g6(b[1][1],a))return[0,b,a,0];if(!a[2])if(!g6(a[1][1],b))return[0,b,a,0];var
p=UC(a),g=0,f=0,e=0,d=UC(b),c=p;for(;;){if(d){if(c){var
k=c[2],h=c[1],l=h[1],m=d[2],i=d[1],j=i[1];if(E(j,l)){var
e=[0,[0,j,i[2],h[2]],e],d=m,c=k;continue}if(fC(j,l)){var
g=[0,i,g],d=m;continue}var
f=[0,h,f],c=k;continue}var
n=v(f);return[0,cG(g,d),n,e]}var
o=cG(f,c);return[0,v(g),o,e]}}return[0,b,a,0]}function
m5(d,b){if(b){var
e=b[1],c=m5(d,b[2]),a=aB(e[2]);if(typeof
a==="number")return c;else
if(1===a[0])if(0===a[3])if(d){dJ(a[4],0);return c}return[0,e,c]}return 0}var
UD=O([I,a0W,0]);function
wR(h){var
c=h;for(;;){var
b=t(c),e=0<=b[2]?1:0;if(e){var
f=b[2];b[2]=-1-f|0;var
a=b[1];if(typeof
a!=="number")switch(a[0]){case
0:if(f!==bm)throw UD;break;case
5:if(0===bB(a[2]))wR(a[3]);var
c=a[4];continue;case
8:var
d=aw(a[1]);hh(wR,d);var
g=1-cT(d);if(g){var
c=d[2];continue}return g}return ba(wR,b)}return e}}function
m6(b){try{wR(b);b3(b);var
a=1;return a}catch(a){a=j(a);if(a===UD){b3(b);return 0}throw a}}var
sg=O([I,a0X,0]),m7=[0,0],F5=[0,0];function
sh(k,i){var
c=k,d=i;for(;;){var
b=t(d),f=0<=b[2]?1:0;if(f){b[2]=-1-b[2]|0;var
a=b[1],g=F5[1];if(typeof
a!=="number")switch(a[0]){case
0:m7[1]=[0,[0,b,c],m7[1]];return 0;case
3:if(g){try{if(t(rY(a[1],g[1])[2])[2]!==bm)m7[1]=[0,[0,b,c],m7[1]]}catch(a){a=j(a);if(a!==l)throw a}var
o=a[2],p=1;return m(function(a){return sh(p,a)},o)}break;case
4:var
c=0,d=a[1];continue;case
5:sh(1,a[3]);var
c=0,d=a[4];continue;case
8:var
e=aw(a[1]),q=1;hh(function(b){return function(a){return sh(b,a)}}(q),e);var
h=1-cT(e);if(h){var
c=0,d=e[2];continue}return h}var
n=1;return ba(function(a){return sh(n,a)},b)}return f}}function
UE(b,a){m7[1]=0;F5[1]=b;sh(1,a);var
c=m7[1];m7[1]=0;F5[1]=0;return c}function
lC(b,a){var
c=UE(b,a),d=g(function(a){return a[1]},c);b3(a);return d}function
o7(c){var
a=UE(0,c);if(a){var
b=a[1];throw[0,sg,b[1],b[2]]}return 0}function
UF(a){try{m(lu,a[1]);var
b=a[3];if(typeof
b!=="number")if(0===b[0]){var
e=b[1];m(function(a){return o7(a[3])},e)}else{var
f=b[1];m(function(a){return a[3]?0:m(o7,a[2])},f)}var
c=a[5];if(c)o7(c[1]);S3(a);var
d=0;return d}catch(b){b=j(b);if(b[1]===sg){S3(a);return[0,b[2]]}throw b}}function
UG(a){try{m(lu,a[2]);if(!a[4])m(o7,a[3]);S4(a);var
b=0;return b}catch(b){b=j(b);if(b[1]===sg){S4(a);return[0,b[2]]}throw b}}var
UH=O([I,a0Y,0]);function
wS(a){return wt(bf,a)}function
a0Z(b){var
a=rO(bf,b);eU(0);return a}function
F6(c,g){var
b=t(g);if(a4[1]<b[2])if(b[2]!==bm){iC(b,hg);var
d=b[1];if(typeof
d==="number")var
f=0;else
if(3===d[0]){var
h=d[3][1],e=function(a){return F6(c,a)},a=h;for(;;){if(typeof
a==="number")var
f=1;else{if(0===a[0]){e(a[3]);e(a[4]);var
a=a[5];continue}var
a=a[1][1];continue}break}}else
var
f=0;return ba(function(a){return F6(c,a)},b)}c[1]=[0,b,c[1]];return 0}function
bA(a){wO[1]=0;return F6([0,0],a)}function
UI(d,k){var
a=t(k),g=a[2]!==bm?1:0;if(g){if(bj(a))if(d<a[2])return iC(a,d);var
h=a4[1]<a[2]?1:0;if(h){var
b=a[1];if(typeof
b==="number")var
c=0;else
if(3===b[0]){var
j=1-wM(b[1]);if(j){b[3][1]=0;var
e=1,c=1}else
var
e=j,c=1}else
var
c=0;if(!c)var
e=1;var
f=e}else
var
f=h;if(f){iC(a,hg);return ba(function(a){return UI(d,a)},a)}var
i=f}else
var
i=g;return i}var
UJ=[0,function(b,a){throw cL}];function
si(c,b){try{var
a=bg(b,c)[7],d=a?a[1][1]:oN(b);return d}catch(a){a=j(a);if(a===l)return oN(b);throw a}}function
wT(e,d){var
a=d;for(;;){try{var
f=wC(a,e)[1],b=f}catch(a){a=j(a);if(a!==l)throw a;var
b=0}if(b){var
c=b[1];if(0===c[0]){var
a=c[1];continue}}return a}}function
cU(d,c,u){var
f=u;for(;;){var
a=t(f),h=c<a[2]?1:0;if(h){var
i=r3(d,a);if(i)if(c<i[1])throw[0,x,[0,[0,a,fR(0,c)],0]];var
e=a[1];if(typeof
e!=="number")switch(e[0]){case
3:var
k=e[1];if(c<si(d,k))try{b4(a,b(UJ[1],d,a));var
v=cU(d,c,a);return v}catch(b){b=j(b);if(b===cL){if(c<si(d,k))throw[0,x,[0,[0,a,fR(0,c)],0]];return ba(function(a){return cU(d,c,a)},a)}throw b}break;case
4:var
l=e[2],m=l[1];if(m)if(c<si(d,m[1][1])){oV(l,0);var
f=a;continue}break;case
5:var
n=e[3];if(A(e[1],fO))if(c<t(n)[2])throw[0,x,[0,[0,n,fR(0,c)],0]];break;case
8:var
o=aw(e[1]),p=o[6];if(p)if(c<si(d,p[1][1])){eq(a);var
q=o.slice();q[6]=0;a[1]=[8,q];var
s=1}else
var
s=0;else
var
s=0;iC(a,c);return ba(function(a){return cU(d,c,a)},a);case
11:var
g=e[1];if(c<si(d,g)){var
r=wT(d,g);if(Y(g,r))throw[0,x,[0,[0,a,fR(0,c)],0]];eq(a);a[1]=[11,r,e[2],e[3]];var
f=a;continue}break}iC(a,c);return ba(function(a){return cU(d,c,a)},a)}return h}}function
F7(a){return function(b,c){return cU(a,b,c)}}function
F8(e,c,q){var
h=q;for(;;){var
f=t(h),i=f[2]!==bm?1:0;if(i){var
k=c<f[2]?1:0;if(k){iC(f,hg);var
a=f[1];if(typeof
a!=="number")switch(a[0]){case
1:var
r=a[2];b(F7(e),c,r);var
h=a[3];continue;case
3:var
n=a[2];try{var
s=bg(a[1],e)[6],o=s}catch(a){a=j(a);if(a!==l)throw a;var
o=g(function(a){return Fa},n)}a[3][1]=0;return aC(function(f,a){return d(bM(2),f)?b(F7(e),c,a):F8(e,c,a)},o,n);case
11:var
u=a[3];return m(d(F7(e),c),u)}return ba(function(a){return F8(e,c,a)},f)}var
p=k}else
var
p=i;return p}}function
sj(a,c){wO[1]=0;try{var
d=F8(a,lB[1],c);return d}catch(a){a=j(a);if(a[1]===x){var
b=a[2];if(b)if(!b[2])throw[0,x,[0,[0,c,b[1][2]],b]]}throw a}}function
fh(a){var
b=a4[1];wO[1]=0;return UI(b,a)}function
m8(a){return wS(a)}function
o8(h,a){var
c=t(h),b=bp(0,17),d=[0,aWp],e=[0,0];function
f(g,k){var
a=t(k);if(!(a4[1]<a[2]))if(a[2]!==bm){var
h=a[2]<0?1:0;if(h){var
i=aV(b,a[2])[2];i[1]=s(g,i[1]);var
j=0}else
var
j=h;return j}d[1]+=-1;bq(b,d[1],[0,a,[0,g]]);var
l=a[2]===bm?1:0,m=l||(a===c?1:0);if(m)e[1]=[0,a,e[1]];iC(a,d[1]);var
n=[0,a,0];return ba(function(a){return f(n,a)},a)}function
g(a){var
e=a[2],f=e!==bm?1:0;if(f){iC(a,hg);m(g,aV(b,e)[2][1]);var
c=a[1];if(typeof
c!=="number"&&8===c[0]){var
i=fP(c[1]),d=i[2],l=d<0?1:0,j=l||(a4[1]<d?1:0),k=j?d!==bm?1:0:j;return k?iC(i,hg):k}var
h=0}else
var
h=f;return h}f(0,a);if(c[2]<0){var
i=0;ba(function(a){return f(i,a)},c)}m(g,e[1]);return jL(function(d,c){var
a=c[1],b=a[2]!==bm?1:0;return b?iC(a,a4[1]):b},b)}function
UK(c,d,g){var
a=t(g);try{var
f=b(d2[7],c,a);f[2]=s(d,f[2]);var
i=0;return i}catch(b){b=j(b);if(b===l){var
e=[0,a,d];p(d2[5],c,a,e);var
h=[0,e,0];return ba(function(a){return UK(c,h,a)},a)}throw b}}function
UL(c){var
a=d(d2[1],17);UK(a,0,c);var
e=d(d2[1],17);function
f(a,c){var
h=c[1][1];if(typeof
h!=="number"&&10===h[0])if(a8(a,g(t,h[2])))return 0;try{var
i=b(d2[7],e,c[1]),k=1-b(ae[3],a,i[1]);if(k){i[1]=b(ae[4],a,i[1]);var
r=c[2],n=m(function(b){return f(a,b)},r)}else
var
n=k;return n}catch(b){b=j(b);if(b===l){var
o=[0,d(ae[5],a)];p(d2[5],e,c[1],o);var
q=c[2];return m(function(b){return f(a,b)},q)}throw b}}function
h(a,c){var
b=rE(a);return b?f(a,c):b}b(d2[11],h,a);return function(a){try{var
c=b(d2[7],e,a)[1];return c}catch(a){a=j(a);if(a===l)return ae[1];throw a}}}var
sk=[0,[0,0]];function
eu(y,i,Q,am){function
f(a){return eu(y,i,Q,a)}var
b=t(am),z=b[1];if(typeof
z!=="number"&&7===z[0])return z[1];if(b[2]!==bm)if(0===i)return b;if(b[2]===bm)var
A=hg;else{if(!i)throw[0,h,a03];var
aj=i[1],aq=d(aj[1],b),ar=d(ae[2],aq)?aj[2]?b[2]:a4[1]:hg,A=ar}if(A!==bm)return bi(A,a00);var
c=b[1];oS(b,c);var
n=U(0,0);if(y){var
B=y[1];if(B[12]){var
R=r3(B,b);if(R)Ua(B,R[1],[0,n,0]);var
al=1}else
var
al=0}else
var
al=0;b[1]=[7,n];if(typeof
c==="number")var
l=0;else
switch(c[0]){case
3:var
S=c[2],C=c[1],e=F1(C,S,sk[1])[1];for(;;){if(typeof
e==="number")var
D=0;else{if(0!==e[0]){var
e=e[1][1];continue}if(0===e[1])var
L=0;else
if(Y(C,e[2]))var
D=[0,e[3]],L=1;else
var
L=0;if(!L){var
e=e[5];continue}}if(D){var
T=D[1];if(t(T)!==n)var
V=[6,T],M=1;else
var
M=0}else
var
M=0;if(!M){var
E=sk[1][1];if(typeof
E==="number")var
N=0;else
if(0===E[0])var
W=[1,sk[1]],N=1;else
var
N=0;if(!N)var
W=E;var
V=[3,C,g(f,S),[0,W]]}var
p=V,l=1;break}break;case
4:if(0===i)var
l=0;else
var
p=[4,f(c[1]),[0,0]],l=1;break;case
5:var
F=bB(c[2]);if(typeof
F==="number")var
X=0===F?oR(0,f,c):[6,f(c[4])];else{var
s=F[1];if(s[1])throw[0,h,aWN];if(1-a8(s,wf[1])){we[1]=[0,s,we[1]];var
P=[0,0];wf[1]=[0,P,wf[1]];s[1]=[0,[0,P]]}var
X=oR(0,f,c)}var
p=X,l=1;break;case
8:var
u=aw(c[1]),a=t(u[2]),G=a[1];if(typeof
G==="number")var
m=0;else
if(7===G[0]){var
J=G[1][1];if(typeof
J==="number")var
o=1;else
if(2===J[0]){var
ah=J[1];if(ah){var
K=ah[2];if(K)if(K[2])var
m=0,o=0;else{var
ai=K[1];b[1]=[7,ai];var
af=[6,ai],m=1,o=0}else
var
m=0,o=0}else
var
m=0,o=0}else
var
o=1;if(o)var
m=0}else
var
m=0;if(!m){var
v=a[2]!==bm?1:0,H=a[1];if(typeof
H==="number")var
q=0;else
switch(H[0]){case
7:var
j=H[1],q=1;break;case
3:var
q=0;break;case
0:case
9:oS(a,a[1]);if(v)var
j=a,q=1;else
var
j=ab(a[1]),q=1;break;default:throw[0,h,a02]}if(!q){if(v)oS(a,a[1]);var
j=f(a)}var
_=t(j)[1];if(typeof
_==="number")var
x=0;else
if(3===_[0])if(u[5])var
x=0;else{var
ag=u.slice();ag[5]=1;var
k=ag,x=1}else
var
x=0;if(!x)var
k=u;if(i){var
$=i[1];if(0===$[2]){if(a[3]!==j[3])var
w=j;else
var
ap=v?a[2]:a4[1],w=bi(ap,a01);var
aa=function(b){var
a=aB(b[2]);if(typeof
a!=="number"&&1===a[0])return 0;return 1};if(k[4])if(k[5])var
r=0;else{var
an=d($[1],b);if(d(ae[2],an))if(Z(aa,k[1]))var
r=0;else
var
ao=k[1],ac=[0,w,[0,d(by(aa),ao),w,0,0,0,0]],r=1;else
var
r=0}else
var
r=0;if(!r)var
ac=[0,w,k];var
I=ac,O=1}else
var
O=0}else
var
O=0;if(!O)var
I=[0,j,k];var
ad=I[1];a[1]=[7,ak([2,[0,ad,[0,n,0]]])];var
af=[8,wc(f,1,I[2],v,ad)]}var
p=af,l=1;break;default:var
l=0}if(!l)var
p=oR(Q,f,c);n[1]=p;return n}function
lD(a){return eu(0,0,0,a)}function
UM(a){return a[12]?[0,a]:0}function
af(b,d,a){var
e=UM(d);if(b)var
f=b[1],c=[0,[0,UL(a),f]];else
var
c=0;var
g=eu(e,c,0,a);eU(0);return g}function
ch(a){var
b=eu(0,0,0,a);eU(0);return b}function
sl(b,a){var
c=UM(b),d=g(function(a){return eu(c,0,0,a)},a);eU(0);return d}var
F9=[0,av[1]];function
UN(a){try{var
d=b(av[22],a,F9[1])+1|0,c=d}catch(a){a=j(a);if(a!==l)throw a;var
c=0}F9[1]=p(av[4],a,c,F9[1]);return b(ag(a04),a,c)}function
F_(b,a){return[0,0,0,0,1,a,0,b,y,0]}function
sm(b,a){if(b){var
c=b[1],d=c[2],e=c[1],f=function(c){var
k=F_([0,[0,d,d]],0),b=t(c)[1];if(typeof
b==="number")var
a=0;else
if(0===b[0]){var
j=b[1];if(j)var
f=j[1],a=1;else
var
a=0}else
var
a=0;if(!a)var
f=a05;var
l=e[1],g=FU(UN(f),k,l);e[1]=g[2];var
m=ab([3,[0,g[1]],0,[0,0]]),i=eu(0,0,0,c);if(bj(i))return b4(i,m);throw[0,h,a06]};m(f,a[3])}var
i=eu(0,0,0,a[2]),j=g(lD,a[4]);eU(0);return[0,j,i]}function
o9(c,b,a){var
d=g(function(a){return eu(0,0,c,a)},b),e=eu(0,0,0,a);eU(0);return[0,d,e]}function
UO(a){var
d=a[9],e=a[8],f=a[7],h=a[6],i=bt(lD,a[5]),b=a[3],j=a[4];if(typeof
b==="number")var
c=0===b?0:1;else
if(0===b[0])var
m=b[2],n=b[1],c=[0,g(function(a){var
b=a[5],c=a[4],d=eu(0,0,0,a[3]);return[0,a[1],a[2],d,c,b]},n),m];else
var
o=b[1],c=[1,g(function(a){var
b=a[5],c=a[4],d=bt(lD,a[3]),e=g(lD,a[2]);return[0,a[1],e,d,c,b]},o)];var
k=a[2],l=[0,g(lD,a[1]),k,c,j,i,h,f,e,d];eU(0);return l}function
j7(c,a){function
d(a){switch(a[0]){case
0:var
e=d(a[3]),f=g(lD,a[2]);return[0,a[1],f,e];case
1:var
c=a[1],h=c[4],i=g(function(a){var
b=g(lD,a[2]);return[0,a[1],b]},h),j=c[3],k=c[2],l=function(a){var
b=eu(0,0,0,a[3]);return[0,a[1],a[2],b]},m=b(av[23],l,k);return[1,[0,eu(0,0,0,c[1]),m,j,i]];default:var
n=d(a[3]),o=eu(0,0,0,a[2]);return[2,a[1],o,n]}}var
e=g(lD,c),f=d(a);eU(0);return[0,e,f]}function
UP(a,b){if(a===b)return 0;if(a){var
c=UP(a[2],b);return[0,a[1],c]}return S(a07)}var
sn=[0,0];function
a08(c,a){var
d=g(t,a);function
e(a){return a8(t(a),d)}return b(ae[16],e,c)}function
F$(e,i,c,h,G){var
a=t(G),u=d(i,a);if(d(ae[2],u)){if(a[2]!==bm)return a;var
v=U(0,0),H=sn[1];sn[1]=[0,[z,function(b){v[1]=[6,eu(0,0,0,a)];return 0}],H];return v}try{var
D=mw(a,h),E=rE(a)?0:UP(c,D[2]),F=0!==E?1:0,L=F?a08(u,E):F;if(L)throw l;var
M=D[1];return M}catch(d){d=j(d);if(d===l){var
k=U(0,0),w=a[1];if(typeof
w==="number")var
r=0;else
switch(w[0]){case
0:case
5:case
6:case
7:case
9:case
10:var
r=0;break;default:var
m=[0,[0,a,[0,k,c]],h],r=1}if(!r)var
m=h;var
n=function(a){return F$(e,i,c,m,a)},b=a[1];if(typeof
b==="number")var
f=0;else
switch(b[0]){case
8:var
x=aw(b[1]),p=t(x[2]),y=bj(p),I=y?p[2]!==bm?1:0:y,A=n(p),J=e?bj(t(A)):e,o=[8,wc(n,J,x,I,A)],f=1;break;case
10:var
q=g(t,b[2]),B=g(function(a){return ab(a[1])},q),C=s(q,c),K=s(aG(function(b,a){return[0,b,[0,a,C]]},q,B),m),o=[10,F$(e,i,C,K,b[1]),B],f=1;break;default:var
f=0}if(!f)var
o=oR(0,n,a[1]);k[1]=o;return k}throw d}}function
iP(b,f,e,a){var
i=b?b[1]:0,c=g(t,e),d=g(function(b){var
a=b[1];if(typeof
a!=="number"&&9===a[0])return i?ab([0,a[1]]):U(0,0);throw[0,h,a09]},c),j=aG(function(b,a){return[0,b,[0,a,0]]},c,d);sn[1]=0;var
k=F$(f,UL(a),0,j,a),l=sn[1];m(function(a){var
b=c3(a);return dk===b?a[1]:z===b?gm(a):a},l);sn[1]=0;eU(0);return[0,d,k]}function
m9(e,b){var
f=eu(0,0,0,b[2]),a=t(b[3])[1];if(typeof
a==="number")var
d=0;else
if(10===a[0])var
c=iP(0,e,a[2],a[1]),d=1;else
var
d=0;if(!d)var
c=[0,0,eu(0,0,0,b[3])];eU(0);return[0,c[1],c[2],f]}var
Ga=[0,function(c,b,a){throw[0,x,0]}];function
Gb(i,t,s,g,f,e,c,r){var
u=w(c);if(w(e)!==u)throw[0,x,0];var
k=a4[1];a4[1]=t;try{var
l=U(0,0);if(f){var
m=f[1],a=m[1];if(typeof
a==="number")var
b=0;else
if(3===a[0]){var
n=a[1];aWQ(F1(n,a[2],g),s,n,m,l);var
b=1}else
var
b=0;if(!b)throw[0,h,a0_]}sk[1]=g;var
o=o9(0,e,r),q=o[2];sk[1]=[0,0];p(Ga[1],i,l,q);var
v=o[1];aC(d(Ga[1],i),v,c);a4[1]=k;return q}catch(a){a=j(a);if(a[1]===x){a4[1]=k;throw a}throw a}}var
UQ=[0,bz];function
a0$(a){var
b=a!==UQ[1]?1:0,c=b?(oT(0),UQ[1]=a,0):b;return c}function
UR(o,z,c,a){a0$(c);var
d=a[1];if(typeof
d!=="number"&&3===d[0]){var
p=d[3],g=d[2],f=d[1],e=a[2],q=S6(o,f,F1(f,g,p)[1]);if(q){var
r=q[1];if(e!==bm)try{cU(c,e,r)}catch(a){a=j(a);if(a[1]!==x)throw a}return r}try{var
i=b(z,f,c)}catch(a){a=j(a);if(a===l)throw cL;throw a}var
k=Gb(c,e,o,p,[0,a],i[1],g,i[2]),s=t(k),m=s[1];if(typeof
m==="number")var
n=0;else
if(8===m[0]){var
w=m[1];if(cT(w)){var
y=w.slice();y[6]=[0,[0,f,g]];s[1]=[8,y];var
n=1}else
var
n=0}else
var
n=0;if(j5[1]){var
A=r3(c,a),u=cz(i[3],A);if(u){var
v=u[1];if(e<v)throw[0,x,[0,[0,a,fR(0,e)],0]];Ua(c,v,[0,a,[0,k,0]])}}return k}throw[0,h,a1a]}function
lE(a){var
b=1;return function(c){return UR(b,rY,a,c)}}function
a1b(b,a){try{var
c=t(a),e=d(lE(b),c);return e}catch(a){a=j(a);if(a===cL)throw[0,h,a1c];throw a}}function
wU(b,a){var
c=ff(0);try{d(lE(b),a);var
e=1;return e}catch(a){a=j(a);if(a!==cL)if(a[1]!==x)throw a;er(c);return 0}}function
m_(e,c){var
a=t(c),b=a[1];if(typeof
b!=="number"&&3===b[0])return t(d(lE(e),a));throw cL}function
US(b,a){var
c=ff(0);try{var
d=m_(b,a);return d}catch(a){a=j(a);if(a[1]===x){er(c);throw cL}throw a}}function
UT(c,a,e){var
d=b(c,a,e);try{var
f=UT(c,a,d);return f}catch(a){a=j(a);if(a===cL)return d;throw a}}function
Gc(e,a,b){var
c=UT(e,a,b),d=r3(a,c);if(d)FM(a,d[1],b);return c}function
wV(a,b){try{var
c=Gc(m_,a,b);return c}catch(a){a=j(a);if(a===cL)return t(b);throw a}}function
aJ(a,b){try{var
c=Gc(US,a,b);return c}catch(a){a=j(a);if(a===cL)return t(b);throw a}}UJ[1]=US;function
Gd(b,g){var
d=t(g),c=d[1];if(typeof
c!=="number"&&3===c[0]){var
a=c[1],e=bg(a,b);if(0===e[3]){try{var
h=m_(b,d)}catch(a){a=j(a);if(a===cL)throw l;throw a}var
f=Gd(b,h);return[0,a,f[2],f[3]]}return[0,a,a,e]}throw l}var
a1d=0;function
Ge(a,b){return UR(a1d,aZc,a,b)}function
Gf(d,c){var
a=t(c),b=a[1];if(typeof
b!=="number"&&3===b[0])return t(Ge(d,a));throw cL}function
UU(a,c){var
b=Gf(a,c);try{var
d=UU(a,b);return d}catch(a){a=j(a);if(a===cL)return b;throw a}}function
wW(a,b){var
c=ff(0);try{var
d=UU(a,b);return d}catch(a){a=j(a);if(a!==cL)if(a[1]!==x)throw a;er(c);return t(b)}}function
Gg(c,b){var
a=b[1];if(typeof
a!=="number"&&3===a[0]){var
d=b[2];try{var
e=bg(a[1],c),f=fR(0,d);Gb(c,d,1,[0,0],0,e[1],a[2],f);var
g=0;return g}catch(a){a=j(a);if(a===l)return 0;throw a}}throw[0,h,a1e]}function
wX(f,e){var
b=t(aJ(f,e)),a=b[1];if(typeof
a!=="number"&&4===a[0]){var
c=a[2][1];if(c){var
d=c[1][2];if(d)if(bj(t(d[1])))return bi(b[2],[4,a[1],[0,0]])}}return b}function
wY(b,a){try{var
c=t(rY(a,b)[2])[2]===bm?1:0;return c}catch(a){a=j(a);if(a===l)return 0;throw a}}var
gs=O([I,a1f,0]);function
wZ(e,c,b,a){if(a===b)throw gs;var
f=a[1];if(typeof
f!=="number")switch(f[0]){case
3:try{if(a8(a,c))throw gs;var
n=[0,a,c],o=ba(function(a){return wZ(e,n,b,a)},a);return o}catch(f){f=j(f);if(f===gs)try{var
d=Gc(m_,e,a),k=d===b?1:0,l=k||a8(d,c);if(l)throw gs;var
h=d[1];if(typeof
h==="number")var
g=0;else
switch(h[0]){case
4:case
8:var
i=0,g=1;break;default:var
g=0}if(!g)var
m=[0,d,c],i=ba(function(a){return wZ(e,m,b,a)},d);return i}catch(a){a=j(a);if(a===cL)throw gs;throw a}throw f}case
4:case
8:return 0}return ba(function(a){return wZ(e,c,b,a)},a)}var
o_=[0,0];function
UV(b,a){var
c=a?(b[1]=1,0):a;return c}function
lF(d,c,a){var
b=o_[1];try{for(;;){o_[1]=0;wZ(d,0,c,a);if(o_[1])continue;var
e=UV(o_,b);return e}}catch(a){a=j(a);UV(o_,b);if(a===gs)throw[0,x,0];throw a}}function
a1g(c,b,a){try{lF(c,b,a);var
d=0;return d}catch(a){a=j(a);if(a[1]===x)return 1;throw a}}function
o$(d,c,m){var
a=m;for(;;){if(a){var
e=a[1],f=function(b,a){try{var
c=[0,io(function(a){return b===t(a[1])?1:0},a)[2]];return c}catch(a){a=j(a);if(a===l)return 0;throw a}},g=f(d,e[1]),b=f(c,e[2]);if(g){var
h=g[1],i=h[1];if(i){if(b)if(c===t(i[1]))return 0}else
if(b){var
k=b[1];if(!k[1]){S8(h,c);return S8(k,d)}}}else
if(!b){var
a=a[2];continue}throw[0,x,0]}throw[0,x,0]}}function
so(u,a){var
f=[0,gq[1]];function
i(w,v){var
a=w,n=v;for(;;){var
c=t(n),o=0<=c[2]?1:0;if(o)if(d(ae[2],a)){c[2]=-1-c[2]|0;var
h=1}else
try{var
r=b(gq[22],c,f[1]),C=function(c){return function(a){return 1-b(ae[3],a,c)}}(a);if(b(ae[16],C,r)){var
D=f[1],E=b(ae[8],a,r);f[1]=p(gq[4],c,E,D);var
s=1}else
var
s=0;var
h=s}catch(b){b=j(b);if(b!==l)throw b;f[1]=p(gq[4],c,a,f[1]);var
h=1}else
var
h=o;if(h){var
e=c[1];if(typeof
e!=="number")switch(e[0]){case
3:var
k=e[2];if(k)try{var
y=bg(e[1],u)[6],z=aC(function(e,b){var
f=d(bM(0),b),c=f||d(bM(1),b);return c?i(a,e):c},k,y);return z}catch(b){b=j(b);if(b===l)return m(function(b){return i(a,b)},k);throw b}return 0;case
9:var
q=1-b(ae[3],c,a);if(q)throw[0,x,[0,[0,c,fe(0,0)],0]];return q;case
10:var
A=g(t,e[2]),B=R(ae[4],A,a),a=B,n=e[1];continue}return ba(function(b){return i(a,b)},c)}return h}}try{i(ae[1],a);var
c=b3(a);return c}catch(b){b=j(b);b3(a);throw b}}function
a1h(c,a){var
d=t(a[1]);return b(ae[4],d,c)}function
UW(a,b){return G(a1h,a,b)}function
a1i(c,a){if(0===a)return ae[1];function
d(a,c){var
d=c[2];if(d){var
e=c[1];return N(function(c){var
d=t(c[1]);return b(ae[3],d,a)},e)?UW(a,d):a}return a}return G(d,R(ae[4],a,ae[1]),c)}function
UX(n,g,c,a){var
h=a1i(g,c),f=[0,ae[1]];function
e(o){var
i=o;for(;;){var
c=t(i);if(b(ae[3],c,f[1]))return 0;f[1]=b(ae[4],c,f[1]);var
a=c[1];if(typeof
a!=="number")switch(a[0]){case
3:var
g=a[2];if(g)try{var
p=bg(a[1],n)[6],q=aC(function(c,a){var
f=d(bM(0),a),b=f||d(bM(1),a);return b?e(c):b},g,p);return q}catch(a){a=j(a);if(a===l)return m(e,g);throw a}return 0;case
9:var
k=b(ae[3],c,h);if(k)throw gs;return k;case
10:var
r=a[2];if(N(function(a){var
c=t(a);return b(ae[3],c,h)},r))return 0;var
i=a[1];continue}return ba(e,c)}}try{e(a);var
i=0;return i}catch(a){a=j(a);if(a===gs)return 1;throw a}}function
sp(i,c,h,u,f,s,r){var
a=c[1],v=ae[1],k=G(function(b,a){return UW(b,a[1])},v,a),d=g(t,u),e=g(t,s),l=N(function(a){return b(ae[3],a,k)},d),m=l?UX(i,a,d,ab([10,f,e])):l;if(m)var
n=m;else
var
q=N(function(a){return b(ae[3],a,k)},e),n=q?UX(i,a,e,ab([10,h,d])):q;if(n)throw[0,x,0];var
o=g(function(a){return[0,a,[0,0]]},d),p=g(function(a){return[0,a,[0,0]]},e);c[1]=[0,[0,o,p],[0,[0,p,o],a]];try{var
w=b(r,h,f);c[1]=a;return w}catch(b){b=j(b);c[1]=a;throw b}}var
bU=[0,0];function
UY(d,c){var
a=c;for(;;)if(typeof
a==="number")return 0;else{if(0===a[0]){var
b=Y(d,a[2]);if(b)return b;var
a=a[5];continue}var
a=a[1][1];continue}}function
gt(a,b){var
c=0;return R(function(b,e){var
c=b[2],d=b[1],f=wX(a,c),g=[0,[0,t(c),f],e],h=wX(a,d);return[0,[0,t(d),h],g]},b,c)}function
pa(b,a){return ak([8,[0,b,U(0,0),0,a,0,0]])}var
w0=[0,0];function
hk(d,b){function
c(e){var
a=t(e),b=0<=a[2]?1:0;if(b){if(a===d)throw gs;a[2]=-1-a[2]|0;return ba(c,a)}return b}try{c(b);b3(b);var
a=0;return a}catch(a){a=j(a);if(a===gs){b3(b);return 1}throw a}}var
w1=[0,0];function
UZ(b){var
a=w1[1];if(a)return a[1];throw[0,h,a1j]}function
j8(g,c){var
a=UZ(0);function
l(d,c){var
e=F_([0,[0,a,a]],0),f=UN(c),b=FU(f,e,g[1]),h=bi(d,[3,[0,b[1]],0,[0,0]]);g[1]=b[2];return h}var
i=[0,ae[1]];function
d(o){var
c=t(o);if(b(ae[3],c,i[1]))return 0;i[1]=b(ae[4],c,i[1]);var
e=c[1];if(typeof
e!=="number")switch(e[0]){case
0:var
m=e[1],p=m?m[1]:a1k;return b4(c,l(c[2],p));case
3:if(wM(e[1]))return ba(d,wX(g[1],c));break;case
8:var
a=aw(e[1]);if(1-cT(a))if(a[5])d(fP(a));else{var
f=a[2],j=f[1];if(typeof
j==="number")var
k=0;else
if(0===j[0]){var
n=j[1],q=n?n[1]:a1m,r=l(f[2],q);b4(f,bi(f[2],[8,[0,0,r,a[3],a[4],1,a[6]]]));var
k=1}else
var
k=0;if(!k)throw[0,h,a1l]}return hh(d,a)}return ba(d,c)}return d(c)}function
pb(f,e){try{var
a=bg(e,f),b=0!==a[7]?1:0;if(b)var
c=0===a[3]?1:0,d=c?1===a[4]?1:0:c;else
var
d=b;return d}catch(a){a=j(a);if(a===l)return 0;throw a}}function
sq(c,b){var
a=Ux(c),d=a?0===b[7]?1:0:a;return d}function
U0(a,d){var
c=t(d),b=c[1];if(typeof
b!=="number"&&3===b[0])try{var
e=Uy(bg(b[1],a)),f=e||U0(a,m_(a,c));return f}catch(a){a=j(a);if(a!==l)if(a!==cL)throw a;return 0}return 0}function
a1n(g,f,l,k){var
b=aw(l),c=aw(k),a=o6(b[1],c[1]);function
d(b){var
a=aB(b[2]);if(typeof
a!=="number"&&0===a[0])return 1;return 0}var
e=b[4],h=e?N(d,a[2]):e;if(h)var
i=h;else
var
j=c[4],i=j?N(d,a[1]):j;if(i)throw[0,x,0];var
n=a[3];return m(function(i){var
b=aB(i[2]),a=aB(i[3]);if(typeof
b==="number")var
c=0;else
if(0===b[0]){var
j=b[1];if(j){var
k=j[1];if(typeof
a==="number")var
c=3;else
if(0===a[0]){var
l=a[1];if(l)return gu(g,f,k,l[1]);var
c=3}else{if(0===a[1]){var
o=a[2];return m(function(a){return gu(g,f,k,a)},o)}var
c=3}}else
var
c=typeof
a==="number"?3:0===a[0]?a[1]?3:2:a[2]?3:2}else{if(0===b[1])if(typeof
a!=="number"&&0===a[0]){var
n=a[1];if(n){var
p=b[2],q=n[1];return m(function(a){return gu(g,f,q,a)},p)}}var
c=b[2]?0:1}switch(c){case
0:var
d=typeof
a==="number"?1:0===a[0]?a[1]?0:2:1;break;case
1:var
d=0;break;case
2:var
d=1;break;default:var
d=2}switch(d){case
0:if(typeof
b==="number")var
h=1;else
if(0===b[1])var
e=0,h=0;else
var
h=1;if(h)var
e=typeof
a==="number"?0:0===a[0]?a[1]?1:0:0;break;case
1:var
e=0;break;default:var
e=1}if(e)throw[0,x,0];return 0},n)}function
U1(e,d,b,a){var
f=Uz(b),o=f?Uz(a):f;if(1-o)throw[0,h,a1r];var
g=a6(a),i=a6(b),c=iN(i[1],g[1]);gu(e,d,i[2],g[2]);var
j=0!==c[2]?1:0,k=j?0===o5(b)[1]?1:0:j;if(k)var
l=k;else
var
n=0!==c[3]?1:0,l=n?0===o5(a)[1]?1:0:n;if(l)throw[0,x,0];var
p=c[1];return m(function(a){var
f=a[4],c=bB(a[2]),b=bB(f),g=typeof
c==="number"?0===c?typeof
b==="number"?0===b?1:0:0:0:typeof
b==="number"?0:1;if(g)return gu(e,d,a[3],a[5]);throw[0,x,0]},p)}function
sr(d,c,b,a){var
e=w(a);if(w(b)!==e)throw[0,x,0];return aC(function(a,b){return gu(d,c,a,b)},b,a)}function
gu(f,d,ab,aa){var
B=ab,z=aa;for(;;){if(B===z)return 0;var
J=t(B),K=t(z);if(J===K)return 0;var
C=J[1],n=K[1];if(typeof
C==="number")var
m=0;else
switch(C[0]){case
3:if(C[2])var
m=0;else
if(typeof
n==="number")var
m=1;else
switch(n[0]){case
3:if(n[2])var
m=1;else{if(Y(C[1],n[1]))return 0;var
m=1}break;case
0:var
m=0;break;default:var
m=1}break;case
0:var
m=2;break;default:var
m=0}switch(m){case
0:var
O=typeof
n==="number"?0:0===n[0]?1:0;break;case
1:var
O=0;break;default:var
O=1}if(O)return 0;var
ac=wW(d,J),ad=wW(d,K),o=t(ac),q=t(ad);if(o===q)return 0;try{var
ag=b(ct[7],f,[0,o,q]);return ag}catch(m){m=j(m);if(m===l){p(ct[5],f,[0,o,q],0);var
k=o[1],a=q[1];if(typeof
k==="number")if(typeof
a==="number")return 0;else
var
c=3===a[0]?0:1;else
switch(k[0]){case
0:if(typeof
a==="number")var
c=1;else
switch(a[0]){case
0:throw[0,h,a1q];case
3:var
c=0;break;default:var
c=1}break;case
1:var
V=k[1];if(typeof
a==="number")var
G=1;else
switch(a[0]){case
1:var
W=a[1];if(A(V,W))var
P=1;else{if(bC(V))var
Q=1;else
if(bC(W))var
Q=1;else
var
P=1,Q=0;if(Q)var
c=1,G=0,P=0}if(P){gu(f,d,k[2],a[2]);var
B=k[3],z=a[3];continue}break;case
3:var
c=0,G=0;break;default:var
G=1}if(G)var
c=1;break;case
2:if(typeof
a==="number")var
c=1;else
switch(a[0]){case
2:return sr(f,d,k[1],a[1]);case
3:var
c=0;break;default:var
c=1}break;case
3:var
r=k[1];if(typeof
a!=="number"&&3===a[0]){var
D=a[2],w=k[2],F=a[1];try{var
M=bg(r,d),N=bg(F,d);if(Y(r,F)){try{var
ai=bg(r,d)[6],aj=g(bM(3),ai),_=aj}catch(a){a=j(a);if(a!==l)throw a;var
_=g(function(a){return 0},w)}var
ah=dV(w,D),$=aC(function(b,a){return b?gu(f,d,a[1],a[2]):b},_,ah)}else{if(sq(r,M))if(sq(F,N))throw[0,x,0];var
s=M[3],e=N[3];if(typeof
s==="number")if(0===s){if(typeof
e==="number")if(0===e)var
u=0,i=2,R=0;else
var
R=1;else
var
R=1;if(R)if(sq(r,M))var
i=0;else
var
u=0,i=2}else
if(typeof
e==="number")if(0===e)var
i=0;else
var
u=sr(f,d,w,D),i=2;else
var
i=1;else
if(0===s[0])if(typeof
e==="number")var
i=0===e?0:1;else
if(0===e[0])if(E(s[2],e[2])){sr(f,d,w,D);var
ak=e[1],al=s[1],u=b(a1p(f,d),al,ak),i=2}else
var
i=1;else
var
i=1;else
if(typeof
e==="number")var
i=0===e?0:1;else
if(1===e[0]){sr(f,d,w,D);var
u=a1o(f,d,s[1],e[1]),i=2}else
var
i=1;switch(i){case
0:if(typeof
e==="number")if(0===e)if(sq(F,N))var
v=0;else
var
u=0,v=1;else
var
v=0;else
var
v=0;break;case
1:var
v=0;break;default:var
v=1}if(!v)throw[0,x,0];var
$=u}return $}catch(a){a=j(a);if(a===l)return 0;throw a}}var
L=r,c=2;break;case
4:if(typeof
a==="number")var
c=1;else
switch(a[0]){case
4:return U1(f,d,k[1],a[1]);case
3:var
c=0;break;default:var
c=1}break;case
5:if(typeof
a==="number")var
c=1;else
switch(a[0]){case
5:return U1(f,d,o,q);case
3:var
c=0;break;default:var
c=1}break;case
8:if(typeof
a==="number")var
c=1;else
switch(a[0]){case
8:return a1n(f,d,k[1],a[1]);case
3:var
c=0;break;default:var
c=1}break;case
9:if(typeof
a==="number")var
c=1;else
switch(a[0]){case
9:return o$(o,q,bU[1]);case
3:var
c=0;break;default:var
c=1}break;case
10:var
X=k[2],Z=k[1];if(X)var
H=1;else{if(typeof
a==="number")var
I=1;else
switch(a[0]){case
3:var
c=0,H=0,I=0;break;case
10:if(!a[2]){var
B=Z,z=a[1];continue}var
H=1,I=0;break;default:var
I=1}if(I)var
c=1,H=0}if(H){if(typeof
a==="number")var
S=1;else
switch(a[0]){case
3:var
c=0,S=0;break;case
10:var
af=function(a,b){return gu(f,d,a,b)};return sp(d,bU,Z,X,a[1],a[2],af);default:var
S=1}if(S)var
c=1}break;case
11:if(typeof
a==="number")var
c=1;else
switch(a[0]){case
11:return 0;case
3:var
c=0;break;default:var
c=1}break;default:var
c=0}switch(c){case
0:if(typeof
a==="number")var
y=0;else
if(3===a[0])var
L=a[1],y=1;else
var
y=0;break;case
1:var
y=0;break;default:var
y=1}if(y)try{var
T=bg(L,d),ae=sq(L,T),U=ae||Uy(T);if(U)throw[0,x,0];return U}catch(a){a=j(a);if(a===l)return 0;throw a}throw[0,x,0]}throw m}}}function
a1o(g,f,j,i){var
b=j,a=i;for(;;){if(b){if(a){var
c=a[1],d=b[1],e=c[3],h=d[3],k=h?e?(gu(g,f,h[1],e[1]),1):0:e?0:1;if(k){sr(g,f,d[2],c[2]);if(A(d[1][2],c[1][2])){var
b=b[2],a=a[2];continue}throw[0,x,0]}throw[0,x,0]}}else
if(!a)return 0;throw[0,x,0]}}function
a1p(f,e){return function(h,g){var
b=h,a=g;for(;;){if(b){if(a){var
c=a[1],d=b[1];gu(f,e,d[3],c[3]);if(A(d[1][2],c[1][2]))if(E(d[2],c[2])){var
b=b[2],a=a[2];continue}throw[0,x,0]}}else
if(!a)return 0;throw[0,x,0]}}}function
U2(c,b,a){return gu(d(ct[1],4),c,b,a)}function
ss(c,b){try{var
a=bg(b,c)[7];if(a){var
d=a[1];return d}throw[0,h,a1t]}catch(a){a=j(a);if(a===l)throw[0,h,a1s];throw a}}function
Gh(a,f,g){var
i=wS(g),b=F_([0,ss(a[1],[0,f])],[0,i]),j=UZ(0),k=a[1];if(b[5]){var
c=b[7];if(c){var
d=b.slice();d[7]=[0,[0,c[1][1],j]];var
e=eV(0,f,d,k).slice();e[12]=1;a[1]=e;return oT(0)}}throw[0,h,aZ4]}var
w2=d(ct[1],11);function
U3(b,a){return b[3]<=a[3]?[0,b,a]:[0,a,b]}function
a1u(b,a){var
c=U3(b,a);return p(ct[5],w2,c,0)}function
U4(c,b,a){var
d=Y(b,a);if(d)return d;var
e=wT(c,a);return Y(wT(c,b),e)}var
U5=[0,function(c,b,a){throw[0,h,a1v]}],w3=[0,function(g,f,e,d,c,b,a){throw[0,h,a1w]}];function
Gi(b,a){switch(a[0]){case
0:return[1,b,a[1]];case
1:var
c=a[2];return[1,Gi(b,a[1]),c];default:var
d=a[2];return[2,Gi(b,a[1]),d]}}function
a1x(b,a,e,d){var
c=p(U5[1],b,e,d);if(a===bm)return wS(c);var
f=a4[1];a4[1]=a;var
g=af(0,b,c);a4[1]=f;return g}function
w4(a,g,f,r,e,d,b){var
h=a?a[1]:0,i=H(a1y),k=iJ(0,i,e,g);function
c(s,a){var
b=s;for(;;){if(b){var
d=b[2],e=b[1];if(a){var
m=a[1],n=m[1];if(ic(e,n)){var
t=a[2],u=E(e,n)?d:b;return[0,m,c(u,t)]}}try{var
f=iH(Gi(a1z,e),k)[2];if(0===f[2]){var
o=f[3];if(typeof
o==="number")if(0===o)if(0!==f[4]){var
p=f[5];if(p)var
v=c(d,a),q=[0,[0,e,a1x(k,r,i,p[1])],v],g=0;else
if(h)var
q=c(d,a),g=0;else
var
g=1;if(!g)return q}}throw a$}catch(a){a=j(a);if(a===l)if(h){var
b=d;continue}if(a===a$)throw l;throw a}}return a}}return c(f,dV(d,b))}function
Gj(a,k,q,f,e,i,j,d,c,h){var
m=w4(0,a,e,j,[0,d],c,h),n=w4(0,a,c,j,[0,f],e,i),o=g(function(a){return a[2]},m);b(k,g(function(a){return a[2]},n),o);if(!U4(a,f,d)){var
p=gN(w3[1],a,f,e,i,d,c,h)?gN(w3[1],a,d,c,h,f,e,i)?0:1:1;if(p)throw l}return 0}function
m$(h,c,a){var
d=c===a?1:0;if(d)var
e=d;else{if(0!==iL[1])try{var
f=U3(c,a);b(ct[7],w2,f);var
g=1;return g}catch(a){a=j(a);if(a===l)return 0;throw a}var
e=0}return e}function
db(a,p,o){if(p===o)return 0;var
b=t(p),c=t(o);if(m$(a[1],b,c))return 0;var
q=wN(a[1]);try{o_[1]=1;var
g=b[1],e=c[1];if(typeof
g==="number")var
d=0;else
switch(g[0]){case
0:if(typeof
e==="number")var
l=1;else
if(3===e[0])if(hk(b,c)){w5(a,b,c);var
d=2,l=0}else
var
l=1;else
var
l=1;if(l){lF(a[1],b,c);so(a[1],c);b4(b,c);cU(a[1],b[2],c);var
d=2}break;case
3:var
i=g[1];if(typeof
e==="number")var
f=1;else
switch(e[0]){case
0:if(hk(c,b)){w5(a,b,c);var
f=2}else
var
d=0,f=0;break;case
3:if(g[2])var
d=1,f=0;else
if(e[2])var
d=1,f=0;else{var
k=e[1],v=Y(i,k)?UY(i,g[3][1])?0:UY(k,e[3][1])?0:(cU(a[1],b[2],c),b4(b,c),1):0;if(v)var
m=1;else{if(a[1][12])if(pb(a[1],i))if(pb(a[1],k)){var
r=1;try{var
u=ss(a[1],k);if(fC(ss(a[1],i),u))db(a,b,m_(a[1],c));else
db(a,m_(a[1],b),c)}catch(d){r=0;d=j(d);if(d!==cL)throw d;w5(a,b,c);var
m=1,h=0}if(r)var
m=1,h=0}else
var
h=1;else
var
h=1;else
var
h=1;if(h)var
d=1,f=0,m=0}if(m)var
f=2}break;default:var
f=1}switch(f){case
0:break;case
1:var
d=1;break;default:var
d=2}break;case
9:if(typeof
e==="number")var
d=1;else
switch(e[0]){case
9:o$(b,c,bU[1]);cU(a[1],b[2],c);b4(b,c);var
d=2;break;case
0:var
d=0;break;default:var
d=1}break;default:var
d=0}switch(d){case
0:var
n=typeof
e==="number"?0:0===e[0]?(lF(a[1],c,b),so(a[1],b),b4(c,b),cU(a[1],c[2],b),1):0;break;case
1:var
n=0;break;default:var
n=1}if(!n)w5(a,b,c);var
s=o3(q);return s}catch(a){a=j(a);if(a[1]===x){o3(q);throw[0,x,[0,[0,b,c],a[2]]]}throw a}}function
U7(d,h,g){var
i=a6(h),a=i[2],k=a6(g),c=k[2],e=iN(i[1],k[1]),l=e[3],n=e[2],o=t(h)[2],p=t(g)[2],f=a1A(c5(o,p),0===l?1:0,a,0===n?1:0,c),q=a[1],r=c[1];try{db(d,b(o4(o),n,f),c);db(d,a,b(o4(p),l,f));var
s=e[1],u=m(function(a){var
c=a[5],e=a[4],b=a[3],g=a[2],h=a[1];U8(g,e);try{if(j5[1])cU(d[1],f[2],b);var
l=db(d,b,c);return l}catch(a){a=j(a);if(a[1]===x){var
i=a[2],k=ab([5,h,e,c,ab(0)]);throw[0,x,[0,[0,ab([5,h,g,b,ab(0)]),k],i]]}throw a}},s);return u}catch(b){b=j(b);eq(a);a[1]=q;eq(c);c[1]=r;throw b}}function
U6(b,q,h,i,e){var
d=h[1],a=e[1],ad=i!==e?1:0,ae=ad?hk(h,i):ad;if(typeof
d==="number")var
n=0;else
switch(d[0]){case
0:lF(b[1],h,i);so(b[1],i);return b4(h,i);case
5:if(typeof
a==="number")var
n=1;else
switch(a[0]){case
5:return U7(b,h,e);case
0:var
n=0;break;default:var
n=1}break;case
9:if(typeof
a==="number")var
n=1;else
switch(a[0]){case
9:o$(h,e,bU[1]);return b4(h,e);case
0:var
n=0;break;default:var
n=1}break;default:var
n=0}if(!n)if(typeof
a!=="number"&&0===a[0]){lF(b[1],e,q);so(b[1],q);return b4(e,q)}if(0===iL[1]){lF(b[1],h,e);b4(h,i)}else
a1u(h,e);try{if(typeof
d==="number")if(typeof
a==="number")var
c=1;else
switch(a[0]){case
5:var
E=a[4],an=a[2],am=a[1],c=2;break;case
3:var
c=0;break;default:var
c=3}else
switch(d[0]){case
1:var
aI=d[1];if(typeof
a==="number")var
v=1;else
switch(a[0]){case
1:if(A(aI,a[1])){db(b,d[2],a[2]);db(b,d[3],a[3]);var
S=wa(d[4]),T=wa(a[4]);if(typeof
S==="number"){if(typeof
T!=="number")S9(T[1],S)}else
S9(S[1],T);var
c=1,v=0}else
var
c=3,v=0;break;case
3:var
c=0,v=0;break;default:var
v=1}if(v)var
c=3;break;case
2:if(typeof
a==="number")var
H=1;else
switch(a[0]){case
2:st(b,d[1],a[1]);var
c=1,H=0;break;case
3:var
c=0,H=0;break;default:var
H=1}if(H)var
c=3;break;case
3:var
k=d[1];if(typeof
a==="number")var
I=0;else
if(3===a[0]){var
G=a[2],u=d[2];if(Y(k,a[1])){if(0===iL[1])var
w=0;else
if(iM[1])if(se[1]){F3(1,0,function(a){return st(b,u,G)});var
w=1}else{if(Ux(k))var
V=1;else{var
aK=[0,h,[0,q,[0,i,0]]],aL=b[1];if(N(function(a){return U0(aL,a)},aK))var
V=1;else{try{var
aN=bg(k,b[1])[6],aO=g(bM(3),aN),ar=aO}catch(a){a=j(a);if(a!==l)throw a;var
ar=g(function(a){return 0},u)}var
aM=dV(u,G);aC(function(e,a){var
c=a[2],d=a[1];return e?db(b,d,c):F3(0,0,function(f){var
e=ff(0);try{var
a=db(b,d,c);return a}catch(a){a=j(a);if(a[1]===x){er(e);j8(b,d);return j8(b,c)}throw a}})},ar,aM);var
w=1,V=0}}if(V){st(b,u,G);var
w=1}}else
var
w=0;if(!w)st(b,u,G);var
I=1}else
var
I=0}else
var
I=0;if(I)var
y=1;else
if(0===k[0])if(d[2])var
c=0,y=0;else{var
ap=k[1];if(typeof
a==="number")var
o=0;else
if(3===a[0]){var
F=a[1];if(0===F[0])if(a[2])var
o=0;else{if(pb(b[1],k))if(pb(b[1],F))if(iM[1]){var
aJ=ss(b[1],F),aq=dT(ss(b[1],k),aJ)?[0,ap,e]:[0,F[1],h];Gh(b,aq[1],aq[2]);var
o=1,J=0}else
var
J=1;else
var
J=1;else
var
J=1;if(J)var
o=0}else
var
o=0}else
var
o=0;if(o)var
W=1;else{if(pb(b[1],k))if(iM[1]){j8(b,e);Gh(b,ap,e);var
W=1,X=0}else
var
X=1;else
var
X=1;if(X)var
c=0,y=0,W=0}if(W)var
y=1}else
var
c=0,y=0;if(y)var
c=1;break;case
4:if(typeof
a==="number")var
K=1;else
switch(a[0]){case
4:U7(b,d[1],a[1]);var
U=t(e)[1];if(typeof
U==="number")var
aE=0;else
if(4===U[0]){var
as=U[2],at=as[1];if(at){var
au=at[1][2];if(au){var
av=t(au[1])[1];if(typeof
av==="number")var
_=0;else
switch(av[0]){case
0:case
9:var
_=0;break;default:var
aw=0,_=1}if(!_)var
aw=1;var
Z=aw?1:0}else
var
Z=0}else
var
Z=0;if(!Z)oV(as,d[2][1]);var
aE=1}else
var
aE=0;var
c=1,K=0;break;case
3:var
c=0,K=0;break;default:var
K=1}if(K)var
c=3;break;case
5:if(typeof
a==="number")var
E=d[4],an=d[2],am=d[1],c=2;else
var
c=3===a[0]?0:3;break;case
8:var
ax=d[1];if(typeof
a==="number")var
L=1;else
switch(a[0]){case
3:var
c=0,L=0;break;case
8:var
ay=a[1];if(0===iL[1])U9(b,ax,ay);else{var
aP=ff(0);try{U9(b,ax,ay)}catch(a){a=j(a);if(a[1]!==x)throw a;er(aP);j8(b,h);j8(b,e);if(iM[1])U2(b[1],h,e)}}var
c=1,L=0;break;default:var
L=1}if(L)var
c=3;break;case
10:var
az=d[2],aA=d[1];if(az)var
z=1;else{if(typeof
a==="number")var
B=1;else
switch(a[0]){case
3:var
c=0,z=0,B=0;break;case
10:if(a[2])var
z=1,B=0;else{db(b,aA,a[1]);var
z=2,B=0}break;default:var
B=1}if(B)var
c=3,z=0}switch(z){case
0:var
C=0;break;case
1:if(typeof
a==="number")var
M=1;else
switch(a[0]){case
3:var
c=0,C=0,M=0;break;case
10:var
aQ=function(a,c){return db(b,a,c)};sp(b[1],bU,aA,az,a[1],a[2],aQ);var
C=1,M=0;break;default:var
M=1}if(M)var
c=3,C=0;break;default:var
C=1}if(C)var
c=1;break;case
11:var
aB=d[3];if(typeof
a==="number")var
O=1;else
switch(a[0]){case
3:var
c=0,O=0;break;case
11:var
aD=a[3];try{var
aS=a[2],aT=a[1],aU=i[2],aV=d[2],aW=d[1],aX=q[2],aY=function(a,c){return st(b,a,c)};Gj(b[1],aY,aX,aW,aV,aB,aU,aT,aS,aD)}catch(a){a=j(a);if(a!==l)throw a;if(0===iL[1])throw[0,x,0];var
aR=s(aB,aD);m(function(a){return j8(b,a)},aR)}var
c=1,O=0;break;default:var
O=1}if(O)var
c=3;break;default:var
c=0}switch(c){case
0:if(typeof
a==="number")var
P=1;else
if(3===a[0]){var
R=a[1];if(0===R[0])if(a[2])var
D=1;else
if(pb(b[1],R))if(iM[1]){j8(b,h);Gh(b,R[1],h);var
p=0,P=0,D=0}else
var
D=1;else
var
D=1;else
var
D=1;if(D)var
P=2}else
var
P=1;switch(P){case
0:var
Q=0;break;case
1:if(typeof
d==="number")var
$=1;else
if(3===d[0])var
Q=1,$=0;else
var
$=1;if($)var
p=1,Q=0;break;default:var
Q=1}if(Q)var
p=1===iL[1]?(j8(b,h),j8(b,e),iM[1]?(U2(b[1],h,e),0):0):1;break;case
1:var
p=0;break;case
2:var
ao=bB(an);if(typeof
ao==="number")var
aa=1;else
if(f(am,fO)){mU(ao[1],1);if(0===a)db(b,E,e);else
db(b,bi(E[2],0),E);var
p=2,aa=0}else
var
aa=1;if(aa)throw[0,x,0];break;default:var
p=1}switch(p){case
0:break;case
1:throw[0,x,0]}if(ae){var
r=i[1];if(typeof
r==="number")var
ab=0;else
if(3===r[0]){var
ah=r[3],aG=r[1];try{ah[1]=Fe(ah[1],aG)}catch(a){a=j(a);if(a!==a$)throw a}var
ai=wV(b[1],i),aj=r[2];m(lu,aj);try{o7(ai);var
aF=1,ac=aF}catch(a){a=j(a);if(a[1]!==sg)throw a;var
ac=0}m(b3,aj);b3(ai);var
ak=1-ac;if(ak)var
aH=t(e),al=b4(t(i),aH);else
var
al=ak;var
af=al,ab=1}else
var
ab=0;if(!ab)var
af=0;var
ag=af}else
var
ag=ae;return ag}catch(a){a=j(a);if(a[1]===x){h[1]=d;throw[0,x,a[2]]}throw a}}function
w5(a,h,f){var
l=function(i,g){var
e=i,d=g;for(;;){var
b=wV(a[1],h),c=wV(a[1],f);if(m$(a[1],b,e))if(m$(a[1],c,d))return[0,b,c];var
e=b,d=c;continue}}(h,f),b=l[2],c=l[1],m=c5(c[2],b[2]);cU(a[1],m,f);cU(a[1],m,h);if(m$(a[1],c,b))return 0;var
d=t(h),e=t(f);if(j5[1]){var
n=function(c){var
b=r3(a[1],c);return b?b[1]:0},i=n(d),k=n(e);if(k<i)FM(a[1],i,e);else
if(i<k)FM(a[1],k,d)}if(!m$(a[1],d,c))if(m$(a[1],e,b))try{var
p=U6(a,e,b,d,c);return p}catch(a){a=j(a);if(a[1]===x){var
o=a[2];throw[0,x,g(function(a){return[0,a[2],a[1]]},o)]}throw a}return U6(a,d,c,e,b)}function
st(c,b,a){var
d=w(a);if(w(b)!==d)throw[0,x,0];return aC(function(a,b){return db(c,a,b)},b,a)}function
a1A(p,l,g,k,b){function
m(a,c){var
b=a[1];if(typeof
b!=="number"&&0===b[0])if(!b[1]){eq(a);a[1]=[0,c];return 0}return 0}var
h=g[1],a=b[1];if(typeof
h==="number")var
d=0;else
if(0===h[0]){var
c=h[1];if(c){if(typeof
a==="number")var
e=0;else
if(0===a[0]){var
o=a[1];if(o)var
q=g[2]<=b[2]?c:o,n=q,e=1;else
var
e=0}else
var
e=0;if(!e){if(k)m(b,c);var
n=c}var
i=n,d=1}else
var
d=0}else
var
d=0;if(!d){if(typeof
a==="number")var
f=0;else
if(0===a[0]){var
j=a[1];if(j){if(l)m(b,j);var
i=j,f=1}else
var
f=0}else
var
f=0;if(!f)var
i=0}return l?g:k?b:fR(i,p)}function
U8(d,c){var
b=bB(d),a=bB(c);if(b===a)return 0;if(typeof
b==="number"){if(0===b){if(typeof
a!=="number")return mU(a[1],b);if(0===a)return 0}}else{var
e=typeof
a==="number"?0===a?0:1:0;if(!e)return mU(b[1],a)}throw[0,h,a1B]}function
U9(e,M,L){var
a=aw(M),c=aw(L),k=fP(a),n=fP(c);if(m$(e[1],k,n))return 0;var
z=o6(a[1],c[1]),A=z[3],o=z[2],d=z[1],F=0!==d?1:0,N=F?0!==o?1:0:F;if(N){var
G=bp(0,w(d));m(function(b){var
a=b[1];return bq(G,jY(a),a)},d);m(function(b){var
a=b[1];try{throw[0,sa,a,aV(G,jY(a))]}catch(a){a=j(a);if(a===l)return 0;throw a}},o)}var
f=jX(a),h=jX(c),i=f?k:h?n:bi(c5(k[2],n[2]),a1C),O=f||h,P=a[4],p=P||c[4];function
H(d){return Z(function(a){var
c=b(d,a[2],a[3]),e=0===aB(c[1])?1:0,f=e||(0!==aB(c[2])?1:0);return f},A)}function
q(a){return Z(function(a){return 0===aB(a[2])?1:0},a)}if(p){var
Q=q(d),I=Q||c[4];if(I)var
R=q(o),J=R||a[4],B=J?Z(function(a){var
b=0===aB(a[2])?1:0,c=b||(0===aB(a[3])?1:0);return c},A):J;else
var
B=I}else
var
B=p;if(B){var
S=pa(0,1);throw[0,x,[0,[0,pa(0,1),S],0]]}if(0===a[6])var
r=0;else{if(a[4])var
D=1;else
if(q(o))var
D=1;else
var
r=0,D=0;if(D){if(c[4])if(H(function(b,a){return[0,b,a]}))if(q(d))var
v=1;else
var
r=0,v=0;else
var
r=0,v=0;else
var
v=1;if(v)var
C=a[6],r=1}}if(!r){if(0===c[6])var
u=0;else{if(c[4])var
E=1;else
if(q(d))var
E=1;else
var
u=0,E=0;if(E){if(a[4])if(H(function(b,a){return[0,a,b]}))if(q(o))var
y=1;else
var
u=0,y=0;else
var
u=0,y=0;else
var
y=1;if(y)var
C=c[6],u=1}}if(!u)var
C=0}var
T=[0,0,i,0,p,O,C];function
K(b,h){var
d=p?m5(b[4],h):h,j=0!==d?1:0;if(j)var
q=b[4],f=q||jX(b);else
var
f=j;if(f)var
g=f;else
if(p)var
o=jX(b),g=o?1-b[4]:o;else
var
g=p;if(g){var
k=pa(0,1),l=pa(d,0),r=0,s=b===a?[0,k,l]:[0,l,k];throw[0,x,[0,s,r]]}var
c=fP(b),u=j5[1]?0===c[1]?1:0:0;if(!u)if(j5[1]){var
t=ak([8,b]);cU(e[1],c[2],t)}if(jX(b))return i===c?0:bj(c)?b4(c,i):db(e,c,i);var
m=T.slice();m[1]=d;var
n=ak([8,m]);cU(e[1],c[2],n);return b4(c,n)}var
U=k[1],V=n[1];try{K(c,d);K(a,o);var
W=m(function(p){var
C=p[3],D=p[2],E=p[1];try{var
G=D,F=C;for(;;){var
c=aB(G),b=aB(F);if(c===b)var
d=0;else{if(typeof
c==="number")if(typeof
b==="number")var
d=0,a=1;else
if(1===b[0])if(0===b[3])if(h)var
a=0;else
var
d=dJ(b[4],c),a=1;else
var
a=0;else
var
a=0;else
if(0===c[0]){var
H=c[1];if(H){var
q=H[1];if(typeof
b==="number")var
a=0;else
if(0===b[0]){var
I=b[1];if(I)var
d=db(e,q,I[1]),a=1;else
var
a=0}else
if(0===b[1])if(h)var
a=0;else{var
J=b[4];dJ(J,c);var
X=t(i)[2];cU(e[1],X,q);try{var
Y=b[2],Z=m(function(a){return db(e,q,a)},Y),d=Z,a=1}catch(a){a=j(a);J[1]=0;throw a}}else
var
a=0}else
if(typeof
b==="number")var
a=0;else
if(0===b[0])if(b[1])var
a=0;else
var
d=0,a=1;else
if(0===b[1])var
a=0;else
if(b[2])var
a=0;else
if(h)var
a=0;else
var
d=dJ(b[4],c),a=1}else{var
n=c[1],l=c[3],r=c[2],u=c[4];if(typeof
b==="number")if(0===l)if(f)var
a=0;else
var
d=dJ(c[4],b),a=1;else
var
a=0;else
if(0===b[0])if(0===n){var
K=b[1];if(K)if(f)var
a=0;else{var
L=K[1],M=c[4];dJ(M,b);var
_=t(i)[2];cU(e[1],_,L);try{var
$=c[2],aa=m(function(a){return db(e,a,L)},$),d=aa,a=1}catch(a){a=j(a);M[1]=0;throw a}}else
var
a=0}else
if(c[2])var
a=0;else
if(b[1])var
a=0;else
if(f)var
a=0;else
var
d=dJ(c[4],b),a=1;else{var
v=b[4];if(u===v)var
d=0,a=1;else{var
o=b[3],y=b[2],z=b[1];if(l)var
k=l;else
if(o)var
k=o;else
if(f)var
k=f;else
if(h)var
k=h;else{var
U=w0[1];if(U)var
an=1===w(r)?1:0,k=an||(1===w(y)?1:0);else
var
k=U}if(k){var
A=s(r,y);if(A){var
ab=n||z;if(ab)throw[0,x,0];var
ac=A[2],ad=A[1];m(function(b){return function(a){return db(e,b,a)}}(ad),ac);var
ae=0!==u[1]?1:0,N=ae||(0!==v[1]?1:0)}else
var
N=0;var
O=N}else
var
O=k;if(O){var
G=c,F=b;continue}var
P=g(t,r),Q=g(t,y),B=function(b,e){var
a=e;for(;;){if(a){var
c=a[2],d=a[1];if(a8(d,b)){var
a=c;continue}return[0,d,B(b,c)]}return 0}},R=B(Q,P),S=B(P,Q),af=s(S,R),ag=t(i)[2],ah=e[1];m(function(a){return cU(ah,ag,a)},af);var
T=[0,0],ai=l||o,aj=n||z,ak=[1,aj,S,ai,T],al=l||o,am=n||z;dJ(u,ak);var
d=dJ(v,[1,am,R,al,T]),a=1}}}if(!a)throw[0,x,0]}return d}}catch(a){a=j(a);if(a[1]===x){var
V=a[2],W=pa([0,[0,E,C],0],1);throw[0,x,[0,[0,pa([0,[0,E,D],0],1),W],V]]}throw a}},A);return W}catch(a){a=j(a);eq(k);k[1]=U;eq(n);n[1]=V;throw a}}function
Gk(b,d,c){try{var
a=db(b,d,c);return a}catch(a){a=j(a);if(a[1]===x)throw[0,x,gt(b[1],a[2])];if(a===a0J)throw[0,Uw,gt(b[1],[0,[0,d,c],0])];throw a}}function
ev(c,g,f){var
a=t(g),b=t(f);if(a===b)return 0;var
d=a[1];if(typeof
d!=="number"&&0===d[0]){var
e=wN(c);try{lF(c,a,b);cU(c,a[2],b);b4(a,b);var
h=o3(e);return h}catch(d){d=j(d);if(d[1]===x){o3(e);throw[0,x,gt(c,[0,[0,a,b],d[2]])]}throw d}}return Gk([0,c],a,b)}Ga[1]=ev;function
U_(d,c,b,a){bU[1]=a;return Gk(d,c,b)}function
aq(c,b,a){return U_([0,c],b,a,0)}function
Gl(a,b){var
c=wN(a),d=wV(a,b);o3(c);return d}function
Gm(h,g,d){var
b=Gl(h,g),a=b[1];if(typeof
a!=="number")switch(a[0]){case
0:var
c=b[2],e=fR(0,c),f=fR(0,c);b4(b,bi(c,[1,d,e,f,0]));return[0,e,f];case
1:if(A(d,a[1]))return[0,a[2],a[3]];break}throw[0,x,0]}function
U$(j,e,d,i){var
f=i;for(;;){var
b=Gl(j,f),a=b[1];if(typeof
a!=="number")switch(a[0]){case
0:var
c=b[2],g=fR(0,c),k=fR(0,c),l=0===d?[0,[0,0]]:0;b4(b,bi(c,[5,e,l,g,k]));return g;case
5:var
h=bB(a[2]);if(A(a[1],e))if(1!==h){if(1===d)U8(h,0);return a[3]}var
f=a[4];continue}throw[0,x,0]}}function
su(a,e,d,h){var
b=Gl(a,h),c=b[1];if(typeof
c!=="number")switch(c[0]){case
0:var
f=U(0,0),g=F2(f);cU(a,b[2],g);b4(b,g);return U$(a,e,d,f);case
4:return U$(a,e,d,c[1])}throw[0,x,0]}function
sv(g,a,f,c,e){var
h=su(g,a,f,e);try{var
i=b(av[22],a,c[1]);return i}catch(b){b=j(b);if(b===l){var
d=[0,H(a),h];c[1]=p(av[4],a,d,c[1]);return d}throw b}}function
Gn(c,d,a){function
b(h){var
a=t(h),e=d<a[2]?1:0;if(e){var
f=bj(a),i=f?Ah<=a[2]?1:0:f;if(i)throw gs;a[2]=-1-a[2]|0;var
c=a[1];if(typeof
c!=="number"&&8===c[0]){var
g=c[1];if(cT(g))return hh(b,g)}return ba(b,a)}return e}try{b(a);b3(a)}catch(b){b=j(b);if(b===gs){b3(a);throw[0,x,0]}throw b}so(c,a);return cU(c,d,a)}function
Go(b,a){return b?a[2]!==Ah?1:0:a[2]===bm?1:0}function
fS(g,f,d,C,B){if(C===B)return 0;var
n=t(C),m=t(B);if(n===m)return 0;try{var
q=n[1],r=m[1];if(typeof
q==="number")var
k=0;else
switch(q[0]){case
0:if(Go(g,n)){Gn(d,n[2],m);lF(d,n,m);var
y=b4(n,m),k=1}else
var
k=0;break;case
3:if(q[2])var
k=0;else
if(typeof
r==="number")var
k=0;else
if(3===r[0])if(r[2])var
k=0;else
if(Y(q[1],r[1]))var
y=0,k=1;else
var
k=0;else
var
k=0;break;default:var
k=0}if(!k){var
G=aJ(d,n),H=aJ(d,m),i=t(G),o=t(H);if(i===o)var
w=0;else
try{var
S=b(ct[7],f,[0,i,o]),w=S}catch(b){b=j(b);if(b!==l)throw b;p(ct[5],f,[0,i,o],0);var
e=i[1],a=o[1];if(typeof
e==="number")if(typeof
a==="number")var
h=0,c=1;else
var
c=0;else
switch(e[0]){case
0:if(Go(g,i)){Gn(d,i[2],m);var
h=b4(i,m),c=1}else
var
c=0;break;case
1:if(typeof
a==="number")var
c=0;else
if(1===a[0])if(A(e[1],a[1])){fS(g,f,d,e[2],a[2]);var
h=fS(g,f,d,e[3],a[3]),c=1}else
var
c=0;else
var
c=0;break;case
2:if(typeof
a==="number")var
c=0;else
if(2===a[0])var
h=Gp(g,f,d,e[1],a[1]),c=1;else
var
c=0;break;case
3:if(typeof
a==="number")var
c=0;else
if(3===a[0])if(Y(e[1],a[1]))var
h=Gp(g,f,d,e[2],a[2]),c=1;else
var
c=0;else
var
c=0;break;case
4:if(typeof
a==="number")var
c=0;else
if(4===a[0])var
h=Va(g,f,d,e[1],a[1]),c=1;else
var
c=0;break;case
5:if(typeof
a==="number")var
c=0;else
if(5===a[0])var
h=Va(g,f,d,i,o),c=1;else
var
c=0;break;case
8:if(typeof
a==="number")var
c=0;else
if(8===a[0])var
h=a1D(g,f,d,e[1],a[1]),c=1;else
var
c=0;break;case
9:if(typeof
a==="number")var
c=0;else
if(9===a[0])var
h=o$(i,o,bU[1]),c=1;else
var
c=0;break;case
10:var
D=e[2],E=e[1];if(D)var
s=1;else{if(typeof
a==="number")var
u=1;else
if(10===a[0])if(a[2])var
s=1,u=0;else
var
F=fS(g,f,d,E,a[1]),s=2,u=0;else
var
u=1;if(u)var
c=0,s=0}switch(s){case
0:var
v=0;break;case
1:if(typeof
a==="number")var
z=1;else
if(10===a[0])var
I=function(a,b){return fS(g,f,d,a,b)},F=sp(d,bU,E,D,a[1],a[2],I),v=1,z=0;else
var
z=1;if(z)var
c=0,v=0;break;default:var
v=1}if(v)var
h=F,c=1;break;case
11:if(typeof
a==="number")var
c=0;else
if(11===a[0])try{var
J=a[3],K=a[2],L=a[1],M=o[2],N=e[3],O=e[2],P=e[1],Q=i[2],R=Gj(d,function(a,b){return Gp(g,f,d,a,b)},Q,P,O,N,M,L,K,J),h=R,c=1}catch(a){a=j(a);if(a===l)throw[0,x,0];throw a}else
var
c=0;break;default:var
c=0}if(!c)throw[0,x,0];var
w=h}var
y=w}return y}catch(a){a=j(a);if(a[1]===x)throw[0,x,[0,[0,n,m],a[2]]];throw a}}function
Gp(e,d,c,b,a){var
f=w(a);if(w(b)!==f)throw[0,x,0];return aC(function(a,b){return fS(e,d,c,a,b)},b,a)}function
Va(g,f,e,k,d){var
h=a6(k),i=a6(d),c=i[2],a=iN(h[1],i[1]);if(0!==a[2])throw[0,x,0];var
l=a[3],n=b(o4(t(d)[2]),l,c);fS(g,f,e,h[2],n);var
o=a[1];return m(function(a){var
b=a[5],d=a[4],h=a[3],i=a[2],k=a[1];Vb(i,d);try{var
n=fS(g,f,e,h,b);return n}catch(a){a=j(a);if(a[1]===x){var
l=a[2],m=ab([5,k,d,b,c]);throw[0,x,[0,[0,ab([5,k,i,h,c]),m],l]]}throw a}},o)}function
Vb(d,c){var
b=bB(d),a=bB(c);if(b===a)return 0;if(typeof
b==="number"){if(0===b)if(typeof
a==="number")if(0===a)return 0}else{var
e=typeof
a==="number"?0===a?0:1:0;if(!e)return mU(b[1],a)}throw[0,x,0]}function
a1D(e,f,d,D,C){var
j=aw(D),g=aw(C),a=t(j[2]),k=t(g[2]);if(a===k)return 0;var
r=bj(a),E=r?Go(e,a):r,h=E||(0===a[1]?1:0),n=o6(j[1],g[1]),s=n[2],u=n[1];if(g[4])var
F=m5(0,s),o=[0,m5(h,u),F];else
var
o=[0,u,s];var
v=o[2],y=0!==o[1]?1:0;if(y)var
p=y;else{var
B=j[4];if(B)var
H=1-g[4],p=H||(0!==v?1:0);else
var
p=B}if(p)throw[0,x,0];var
l=a[1],b=k[1],I=typeof
l==="number"?0:9===l[0]?typeof
b==="number"?1:9===b[0]?(o$(a,k,bU[1]),2):1:0;switch(I){case
0:if(typeof
b==="number")var
q=1;else
if(9===b[0])var
c=0,q=0;else
var
q=1;if(q)if(cT(j))var
c=1;else
if(h){var
z=g.slice();z[1]=v;var
A=ak([8,z]);Gn(d,a[2],A);b4(a,A);var
c=1}else{if(typeof
l==="number")var
i=1;else
if(3===l[0])if(typeof
b==="number")var
i=1;else
if(3===b[0]){fS(e,f,d,a,k);var
c=1,i=0}else
var
i=1;else
var
i=1;if(i)throw[0,x,0]}break;case
1:var
c=0;break;default:var
c=1}if(c){var
G=n[3];return m(function(l){var
b=aB(l[2]),a=aB(l[3]);if(b===a)return 0;if(typeof
b==="number"){if(typeof
a==="number")return 0}else
if(0===b[0]){var
n=b[1];if(n)if(typeof
a==="number")var
v=0;else
if(1===a[0])var
v=0;else{var
o=a[1];if(o)return fS(e,f,d,n[1],o[1]);var
v=1}else
if(typeof
a==="number")var
y=0;else
if(1===a[0])var
y=0;else{if(!a[1])return 0;var
y=1}}else{var
j=b[1];if(0===j)if(typeof
a==="number")var
c=0;else
if(0===a[0]){var
u=a[1];if(u){if(h){var
C=u[1];dJ(b[4],a);var
D=b[2];return m(function(a){return fS(e,f,d,a,C)},D)}var
c=1}else
var
c=1}else
var
c=0;else
if(b[2])var
c=0;else
if(typeof
a==="number")var
c=0;else
if(0===a[0])if(a[1])var
c=1;else{if(h)return dJ(b[4],a);var
c=1}else
var
c=0;if(!c){var
k=b[4],g=b[2];if(typeof
a==="number"){if(h)return dJ(k,a)}else
if(0!==a[0]){var
p=a[4],q=k!==p?1:0;if(q){var
i=a[2],r=a[1],z=j?1-r:j;if(z)throw[0,x,0];dJ(k,[1,r,0,a[3],p]);var
A=w(i);if(w(g)===A)return aC(function(a,b){return fS(e,f,d,a,b)},g,i);if(i){var
B=i[1];return m(function(a){return fS(e,f,d,a,B)},g)}var
s=0!==g?1:0;if(s)throw[0,x,0];var
t=s}else
var
t=q;return t}}}throw[0,x,0]},G)}throw[0,x,0]}function
sw(e,d,c,b,a){bU[1]=0;return fS(e,d,c,b,a)}function
a1E(a,f,e,c){var
g=a4[1];a4[1]=Ah;var
h=wS(af(0,a,c));a4[1]=hg;var
i=af(0,a,e);try{sw(f,d(ct[1],13),a,i,h);var
k=1,b=k}catch(a){a=j(a);if(a[1]!==x)throw a;var
b=0}a4[1]=g;return b}function
Gq(c,k){var
f=k;for(;;){var
a=t(f),g=0<=a[2]?1:0;if(g){a[2]=-1-a[2]|0;var
e=a[1];if(typeof
e!=="number")switch(e[0]){case
0:var
h=1-a8(a,c[1]),l=h?(c[1]=[0,a,c[1]],0):h;return l;case
8:var
b=aw(e[1]),d=t(b[2]),i=bj(d),m=i?1-jX(b):i;if(m){var
n=bi(d[2],d[1]);b4(d,bi(a[2],[8,[0,0,n,b[3],b[4],1,b[6]]]))}hh(function(a){return Gq(c,a)},b);var
j=1-cT(b);if(j){var
f=fP(b);continue}return j}return ba(function(a){return Gq(c,a)},a)}return g}}function
a1F(a){var
b=[0,0];Gq(b,a);b3(a);return b[1]}function
a1G(c,b){var
a=[0,0];return Z(function(d){var
b=aJ(c,d);return a8(b,a[1])?0:(a[1]=[0,b,a[1]],bj(b))},b)}function
w6(b,a){var
c=w0[1];w0[1]=1;var
d=aJ(b,a);w0[1]=c;return d}function
Vc(a){var
d=a[1],b=N(function(a){var
b=a[1][1],d=typeof
b==="number"?0:6===b[0]?1:0;if(!d){var
c=a[2][1],e=typeof
c==="number"?0:6===c[0]?1:0;if(!e)return 0}return 1},d);if(b){var
e=a[1];a[1]=g(function(a){var
b=t(a[2]);return[0,t(a[1]),b]},e);var
c=0}else
var
c=b;return c}function
fi(i,h,d,f,D,C){if(D===C)return 0;var
q=t(D),o=t(C);if(q===o)return 0;try{var
s=q[1],r=o[1];if(typeof
s==="number")var
g=0;else
switch(s[0]){case
0:if(typeof
r==="number")var
g=0;else
if(0===r[0])if(i)try{Vc(d);var
I=mw(q,d[1])!==o?1:0;if(I)throw[0,x,0];var
u=I,g=1}catch(a){a=j(a);if(a!==l)throw a;var
Z=d[1];if(N(function(a){return a[2]===o?1:0},Z))throw[0,x,0];d[1]=[0,[0,q,o],d[1]];var
u=0,g=1}else
var
g=0;else
var
g=0;break;case
3:if(s[2])var
g=0;else
if(typeof
r==="number")var
g=0;else
if(3===r[0])if(r[2])var
g=0;else
if(Y(s[1],r[1]))var
u=0,g=1;else
var
g=0;else
var
g=0;break;default:var
g=0}if(!g){var
J=w6(f,q),K=w6(f,o),n=t(J),m=t(K);if(n===m)var
z=0;else
try{var
X=b(ct[7],h,[0,n,m]),z=X}catch(b){b=j(b);if(b!==l)throw b;p(ct[5],h,[0,n,m],0);var
e=n[1],a=m[1];if(typeof
e==="number")if(typeof
a==="number")var
k=0,c=1;else
var
c=0;else
switch(e[0]){case
0:if(typeof
a==="number")var
c=0;else
if(0===a[0])if(i)try{Vc(d);var
E=mw(n,d[1])!==m?1:0;if(E)throw[0,x,0];var
k=E,c=1}catch(a){a=j(a);if(a!==l)throw a;var
L=d[1];if(N(function(a){return a[2]===m?1:0},L))throw[0,x,0];d[1]=[0,[0,n,m],d[1]];var
k=0,c=1}else
var
c=0;else
var
c=0;break;case
1:if(typeof
a==="number")var
c=0;else
if(1===a[0])if(A(e[1],a[1])){fi(i,h,d,f,e[2],a[2]);var
k=fi(i,h,d,f,e[3],a[3]),c=1}else
var
c=0;else
var
c=0;break;case
2:if(typeof
a==="number")var
c=0;else
if(2===a[0])var
k=w7(i,h,d,f,e[1],a[1]),c=1;else
var
c=0;break;case
3:if(typeof
a==="number")var
c=0;else
if(3===a[0])if(Y(e[1],a[1]))var
k=w7(i,h,d,f,e[2],a[2]),c=1;else
var
c=0;else
var
c=0;break;case
4:if(typeof
a==="number")var
c=0;else
if(4===a[0])var
k=Vd(i,h,d,f,e[1],a[1]),c=1;else
var
c=0;break;case
5:if(typeof
a==="number")var
c=0;else
if(5===a[0])var
k=Vd(i,h,d,f,n,m),c=1;else
var
c=0;break;case
8:if(typeof
a==="number")var
c=0;else
if(8===a[0])var
k=a1I(i,h,d,f,e[1],a[1]),c=1;else
var
c=0;break;case
9:if(typeof
a==="number")var
c=0;else
if(9===a[0])var
k=o$(n,m,bU[1]),c=1;else
var
c=0;break;case
10:var
F=e[2],G=e[1];if(F)var
v=1;else{if(typeof
a==="number")var
w=1;else
if(10===a[0])if(a[2])var
v=1,w=0;else
var
H=fi(i,h,d,f,G,a[1]),v=2,w=0;else
var
w=1;if(w)var
c=0,v=0}switch(v){case
0:var
y=0;break;case
1:if(typeof
a==="number")var
B=1;else
if(10===a[0])var
M=function(a,b){return fi(i,h,d,f,a,b)},H=sp(f,bU,G,F,a[1],a[2],M),y=1,B=0;else
var
B=1;if(B)var
c=0,y=0;break;default:var
y=1}if(y)var
k=H,c=1;break;case
11:if(typeof
a==="number")var
c=0;else
if(11===a[0])try{var
O=a[3],P=a[2],Q=a[1],R=m[2],S=e[3],T=e[2],U=e[1],V=n[2],W=Gj(f,function(a,b){return w7(i,h,d,f,a,b)},V,U,T,S,R,Q,P,O),k=W,c=1}catch(a){a=j(a);if(a===l)throw[0,x,0];throw a}else
var
c=0;break;default:var
c=0}if(!c)throw[0,x,0];var
z=k}var
u=z}return u}catch(a){a=j(a);if(a[1]===x)throw[0,x,[0,[0,q,o],a[2]]];throw a}}function
w7(f,e,d,c,b,a){var
g=w(a);if(w(b)!==g)throw[0,x,0];return aC(function(a,b){return fi(f,e,d,c,a,b)},b,a)}function
Vd(c,g,f,e,r,q){var
k=q;for(;;){var
l=a6(r),d=l[2],n=a6(k),a=n[2],o=d===a?1:0;if(o)var
p=o;else
var
v=b(ct[10],g,[0,d,a]),p=v||(c?aY([0,d,a],f[1]):c);if(p)return 0;var
h=w6(e,a)[1];if(typeof
h!=="number"&&4===h[0]){var
k=h[1];continue}var
i=iN(l[1],n[1]);fi(c,g,f,e,d,a);var
s=0!==i[2]?1:0,t=s||(0!==i[3]?1:0);if(t)throw[0,x,0];var
u=i[1];return m(function(b){var
d=b[5],h=b[4],i=b[3],k=b[2],l=b[1];a1H(k,h);try{var
o=fi(c,g,f,e,i,d);return o}catch(b){b=j(b);if(b[1]===x){var
m=b[2],n=ab([5,l,h,d,a]);throw[0,x,[0,[0,ab([5,l,k,i,a]),n],m]]}throw b}},u)}}function
a1H(d,c){var
b=bB(d),a=bB(c),e=typeof
b==="number"?0===b?typeof
a==="number"?0===a?1:0:0:0:typeof
a==="number"?0:1;if(e)return 0;throw[0,x,0]}function
a1I(e,d,c,b,r,q){var
f=q;for(;;){var
g=w6(b,fP(f))[1];if(typeof
g!=="number"&&8===g[0]){var
f=g[1];continue}var
a=aw(r),h=aw(f),i=o6(a[1],h[1]),j=i[2],k=i[1],l=J(a[4],h[4]);if(l)var
n=l;else{var
o=1-a[4];if(o)var
u=0!==k?1:0,p=u||(0!==j?1:0);else
var
p=o;var
n=p||(0!==m5(0,s(k,j))?1:0)}if(n)throw[0,x,0];if(1-cT(a))fi(e,d,c,b,a[2],h[2]);var
t=i[3];return m(function(l){var
f=aB(l[2]),a=aB(l[3]);if(typeof
f==="number"){if(typeof
a==="number")return 0}else
if(0===f[0]){var
n=f[1];if(n)if(typeof
a==="number")var
r=0;else
if(1===a[0])var
r=0;else{var
o=a[1];if(o)return fi(e,d,c,b,n[1],o[1]);var
r=1}else
if(typeof
a==="number")var
s=0;else
if(1===a[0])var
s=0;else{if(!a[1])return 0;var
s=1}}else
if(0===f[1]){var
g=f[2];if(g){var
h=g[2],p=g[1];if(typeof
a==="number")var
k=0;else
if(0===a[0])var
k=0;else
if(0===a[1]){var
i=a[2];if(i){var
j=i[2],q=i[1];fi(e,d,c,b,p,q);var
t=w(j);return w(h)===t?aC(function(a,f){return fi(e,d,c,b,a,f)},h,j):(m(function(a){return fi(e,d,c,b,p,a)},j),m(function(a){return fi(e,d,c,b,a,q)},h))}var
k=1}else
var
k=1}}else
if(!f[2])if(typeof
a!=="number"&&1===a[0])if(0!==a[1])if(!a[2])return 0;throw[0,x,0]},t)}}function
dc(e,c,b,a){try{bU[1]=0;w7(c,d(ct[1],11),[0,0],e,b,a);var
f=1;return f}catch(a){a=j(a);if(a[1]===x)return 0;throw a}}function
sx(f,e,d,c,b,a){bU[1]=0;return fi(f,e,d,c,b,a)}var
ew=O([I,a1J,0]);function
w8(l,f,a,d,c){try{switch(d[0]){case
0:var
g=w8(1,f,a,d[3],c),e=2;break;case
1:var
i=d[1];switch(c[0]){case
0:var
e=0;break;case
1:var
k=c[1],n=dK(t(i[1])),o=dK(t(k[1])),p=a6(n),q=a6(o)[1],r=iN(p[1],q)[1];m(function(c){try{var
b=sw(1,f,a,c[3],c[5]);return b}catch(b){b=j(b);if(b[1]===x){var
d=gt(a,b[2]);throw[0,ew,[0,[5,c[1],a,d],0]]}throw b}},r);var
s=k[2],u=function(c,d){var
e=b(av[22],c,i[2]);try{var
g=sw(1,f,a,e[3],d[3]);return g}catch(b){b=j(b);if(b[1]===x)throw[0,ew,[0,[4,c,a,gt(a,b[2])],0]];throw b}},g=b(av[10],u,s),e=2;break;default:var
e=1}break;default:switch(c[0]){case
2:if(A(d[1],c[1])){try{sw(1,f,a,d[2],c[2])}catch(b){b=j(b);if(b[1]===x)throw[0,ew,[0,[3,a,gt(a,b[2])],0]];throw b}var
g=w8(0,f,a,d[3],c[3]),e=2}else
var
e=1;break;case
0:var
e=0;break;default:var
e=1}}switch(e){case
0:var
g=w8(1,f,a,d,c[3]);break;case
1:throw[0,ew,0]}return g}catch(b){b=j(b);if(b[1]===ew){var
h=b[2],v=l?0:0===h?0:1;if(!v)throw[0,ew,[0,[2,a,d,c],h]]}throw b}}function
Ve(n,e,z,y){var
A=n?n[1]:1,f=d(ct[1],53),B=a4[1];a4[1]=Ah;var
h=a0Z(j7(0,y)[2]);a4[1]=hg;var
i=j7(0,z)[2],a=j6(i),c=j6(h),o=t(a[1]),q=t(c[1]);p(ct[5],f,[0,o,q],0);var
r=a6(dK(o)),u=a6(dK(q)),k=iN(r[1],u[1]),C=0,D=k[2],E=R(function(e,d){var
c=e[1],f=bB(e[2]),g=typeof
f==="number"?[0,[10,c],d]:(mU(f[1],1),d);return b(aL[3],c,a[3])?g:[0,[11,a1K,c],g]},D,C),F=k[3],v=g(function(a){return a[1]},F),G=s(g(function(a){return[9,a]},v),E);sw(1,f,e,r[2],u[2]);var
H=k[1],I=R(function(b,c){try{Vb(b[2],b[4]);return c}catch(a){a=j(a);if(a[1]===x)return[0,[12,b[1]],c];throw a}},H,G),J=c[2];function
K(d,h,c){try{var
i=b(av[22],d,a[2]);if(1===h[1])if(1===i[1])var
f=0;else
var
e=[0,[6,d],c],f=1;else
var
f=0;if(!f){if(1===h[2])if(1===i[2])var
g=0;else
var
e=[0,[7,d],c],g=1;else
var
g=0;if(!g)var
e=c}return e}catch(a){a=j(a);if(a===l)return[0,[8,d],c];throw a}}var
L=p(av[11],K,J,I),M=a[2];function
N(d,e,a){if(0===e[2])if(!b(av[3],d,c[2]))return[0,[11,a1L,d],a];return a}var
O=p(av[11],N,M,L),P=b(aL[9],c[3],a[3]),Q=d(aL[20],P),w=R(function(b,a){return aY(b,v)?a:[0,[14,b],a]},Q,O);if(w)var
m=[0,[2,e,i,h],w];else
try{w8(A,f,e,i,h);var
S=0,m=S}catch(a){a=j(a);if(a[1]!==ew)throw a;var
m=a[2]}a4[1]=B;return m}function
sy(i,g,f,a,d,c){try{switch(d[0]){case
0:var
k=d[3],o=0===c[0]?sy(1,g,f,a,k,c[3]):sy(1,g,f,a,k,c),h=o,e=2;break;case
1:var
l=d[1];switch(c[0]){case
0:var
e=0;break;case
1:var
n=c[1],p=dK(t(l[1])),q=dK(t(n[1])),r=a6(p),s=a6(q)[1],u=iN(r[1],s)[1];m(function(c){try{var
b=sx(1,g,f,a,c[3],c[5]);return b}catch(b){b=j(b);if(b[1]===x){var
d=gt(a,b[2]);throw[0,ew,[0,[5,c[1],a,d],0]]}throw b}},u);var
v=n[2],w=function(c,d){var
e=b(av[22],c,l[2]);try{var
h=sx(1,g,f,a,e[3],d[3]);return h}catch(b){b=j(b);if(b[1]===x)throw[0,ew,[0,[4,c,a,gt(a,b[2])],0]];throw b}},h=b(av[10],w,v),e=2;break;default:var
e=1}break;default:switch(c[0]){case
2:if(A(d[1],c[1])){try{sx(1,g,f,a,d[2],c[2])}catch(b){b=j(b);if(b[1]===x)throw[0,ew,[0,[3,a,gt(a,b[2])],0]];throw b}var
h=sy(0,g,f,a,d[3],c[3]),e=2}else
var
e=1;break;case
0:var
e=0;break;default:var
e=1}}switch(e){case
0:var
h=sy(1,g,f,a,d,c[3]);break;case
1:var
y=i?0:[0,[2,a,d,c],0];throw[0,ew,y]}return h}catch(b){b=j(b);if(b[1]===ew)if(i)throw[0,ew,[0,[2,a,d,c],b[2]]];throw b}}function
Vf(a,k,q,i,o){var
f=d(ct[1],53),m=[0,0],c=j6(q),e=j6(o),r=t(c[1]),u=t(e[1]);p(ct[5],f,[0,r,u],0);var
v=a6(dK(r)),y=a6(dK(u)),n=iN(v[1],y[1]),E=0,F=n[2],G=R(function(e,d){var
a=e[1],f=typeof
bB(e[2])==="number"?[0,[10,a],d]:d;return b(aL[3],a,c[3])?f:[0,[11,a1M,a],f]},F,E),H=n[3],z=g(function(a){return a[1]},H),I=s(g(function(a){return[9,a]},z),G);sx(1,f,m,a,v[2],y[2]);var
J=n[1],K=R(function(d,c){var
e=d[1],f=bB(d[2]),a=bB(d[4]);if(typeof
f==="number")if(0===f){if(typeof
a!=="number")return[0,[12,e],c];var
b=0===a?1:0}else
var
b=0;else
if(typeof
a==="number"){if(0===a)return[0,[13,e],c];var
b=0}else
var
b=1;if(b)return c;throw[0,h,a1N]},J,I),L=e[2];function
M(d,h,a){try{var
i=b(av[22],d,c[2]);if(1===h[1])if(1===i[1])var
f=0;else
var
e=[0,[6,d],a],f=1;else
var
f=0;if(!f){if(1===h[2])if(1===i[2])var
g=0;else
var
e=[0,[7,d],a],g=1;else
var
g=0;if(!g)var
e=a}return e}catch(b){b=j(b);if(b===l)return[0,[8,d],a];throw b}}var
N=p(av[11],M,L,K),O=c[2];function
P(c,d,a){if(0===d[2])if(!b(av[3],c,e[2]))return[0,[11,a1O,c],a];return a}var
Q=p(av[11],P,O,N),S=b(aL[9],e[3],c[3]),T=d(aL[20],S),A=R(function(b,a){return aY(b,z)?a:[0,[14,b],a]},T,Q);if(A)return A;try{var
B=w(k),C=w(i);if(B!==C)throw[0,ew,[0,[0,B,C],0]];aC(function(c,b){try{var
d=sx(1,f,m,a,c,b);return d}catch(b){b=j(b);if(b[1]===x)throw[0,ew,[0,[1,a,gt(a,b[2])],0]];throw b}},k,i);sy(0,f,m,a,[1,c],[1,e]);var
U=function(b,a){return[2,a1P,b,a]},D=function(a,b){return R(U,a,b)},V=D(i,o),W=Ve(a1Q,a,D(k,q),V);return W}catch(a){a=j(a);if(a[1]===ew)return a[2];throw a}}var
pc=[0,0];function
a1R(a){if(0===(a%2|0))if(0<a)return a-1|0;return a}function
Gr(a){return 1===(a%2|0)?a-1|0:a}function
Gs(a){var
b=0;return G(function(b,a){return cz(b,a[2])},b,a)}function
Vg(c){var
a=c;for(;;){if(a){var
b=a[1][1];if(typeof
b!=="number")switch(b[0]){case
4:case
8:return a}var
a=a[2];continue}return 0}}function
sz(b,a){return a8(b,a)?(pc[1]=1,1):0}function
sA(c,a){var
b=c?c[1]:a1S;switch(a[0]){case
0:return[0,o(b,a[1][2])];case
1:var
d=o(b,a[2]);return[1,sA(0,a[1]),d];default:var
e=sA(0,a[2]);return[2,sA([0,b],a[1]),e]}}function
Vh(g,b){var
c=iH(sA(a1T,b),g)[2],d=c[5];if(d){var
e=d[1],a=t(e)[1];if(typeof
a!=="number"&&4===a[0]){var
f=a[2][1];if(f)if(Y(b,f[1][1]))return[0,c,e]}throw l}throw[0,h,a1U]}function
Vi(b,a){return Fd(d(lE(b),a))}function
fT(b,i,k,c,e,ah){var
a=t(ah),f=a[1];if(typeof
f==="number")return c?[0,U(0,0),2]:(pc[1]=1,[0,a,0]);else
switch(f[0]){case
0:if(c)try{var
ai=mw(a,k);pc[1]=1;var
aj=[0,ai,1];return aj}catch(b){b=j(b);if(b===l)return[0,a,0];throw b}return[0,a,0];case
1:if(sz(a,i))return[0,a,0];var
v=[0,a,i],w=fT(b,v,k,1-c,e,f[2]),y=fT(b,v,k,c,e,f[3]),z=cz(w[2],y[2]);return dT(z,0)?[0,ab([1,f[1],w[1],y[1],0]),z]:[0,a,0];case
2:if(sz(a,i))return[0,a,0];var
ak=[0,a,i],al=f[1],A=g(function(a){return fT(b,ak,k,c,e,a)},al),B=Gs(A);return dT(B,0)?[0,ab([2,g(function(a){return a[1]},A)]),B]:[0,a,0];case
3:var
C=f[2],m=f[1];if(0<e)if(wY(b,m))if(wU(b,a))if(!Vi(b,a)){var
o=t(d(lE(b),a)),J=a1R(e);try{var
M=o[1];if(typeof
M!=="number"&&4===M[0])if(c)if(!wP(o)){var
O=Vh(b,m),n=t(Gb(b,a4[1],1,f[3],0,O[1][1],C,O[2])),p=n[1];if(typeof
p!=="number"&&4===p[0]){var
P=p[2][1];if(P){var
Q=P[1];if(Y(m,Q[1])){var
R=Q[2],ap=p[1];if(N(function(a){return hk(n,a)},R))throw l;n[1]=a1V;var
q=U(0,0),S=fT(b,[0,o,0],[0,[0,n,q],k],c,Gr(J),ap),T=S[1];if(bj(q)){if(dT(S[2],1))var
u=0;else
if(hk(n,T))var
u=0;else
var
V=[0,[0,m,R]],u=1;if(!u)var
V=0;q[1]=[4,T,[0,V]];try{ev(b,n,a)}catch(a){a=j(a);if(a[1]===x)throw[0,h,a1W];throw a}var
aq=[0,q,2];return aq}throw[0,h,a1X]}}}throw l}throw l}catch(d){d=j(d);if(d===l){var
K=fT(b,i,k,c,J,o),L=K[2];return dT(L,0)?[0,K[1],L]:[0,a,0]}throw d}}if(sz(a,i))return[0,a,0];var
D=[0,a,i];try{var
E=0===e?1:0,am=bg(m,b);if(E){var
F=wY(b,m);if(F)var
G=wU(b,a),r=G?1-Vi(b,a):G;else
var
r=F}else
var
r=E;if(r)pc[1]=1;var
an=am[6],H=aG(function(g,a){var
d=lt(g),f=d[1];return d[2]?f?[0,a,0]:fT(b,D,k,1-c,e,a):f?fT(b,D,k,c,e,a):[0,U(0,0),2]},an,C),I=Gs(H),ao=dT(I,0)?[0,da(m,g(function(a){return a[1]},H)),I]:[0,a,0];return ao}catch(b){b=j(b);if(b===l)return[0,a,0];throw b}case
4:var
W=f[1];if(!sz(a,i))if(!wP(W)){var
X=Gr(e),ar=X<e?0:Vg(i),Z=fT(b,[0,a,ar],k,c,X,W),_=Z[2];return dT(_,0)?[0,ab([4,Z[1],[0,0]]),_]:[0,a,0]}return[0,a,0];case
5:var
$=fT(b,i,k,c,e,f[3]),aa=fT(b,i,k,c,e,f[4]),ac=cz($[2],aa[2]);return dT(ac,0)?[0,ab([5,f[1],0,$[1],aa[1]]),ac]:[0,a,0];case
8:var
s=aw(f[1]);if(!sz(a,i))if(cT(s)){var
ad=Gr(e),as=ad<e?0:Vg(i),at=[0,a,as],au=m5(0,s[1]),ae=g(function(a){var
g=a[1],d=aB(a[2]);if(typeof
d!=="number"&&0===d[0]){var
i=d[1];if(i){var
j=fT(b,at,k,c,ad,i[1]),l=j[1];if(c)if(0<e)var
m=[1,0,[0,l,0],0,[0,0]],f=1;else
var
f=0;else
var
f=0;if(!f)var
m=[0,[0,l]];return[0,[0,g,m],j[2]]}return c?[0,[0,g,[1,1,0,0,[0,0]]],0]:[0,a,0]}throw[0,h,a1Z]},au),av=dT(Gs(ae),0)?0:s[6],ax=0,ay=0,az=U(0,0),aA=2;return[0,ab([8,[0,g(function(a){return a[1]},ae),az,ay,c,ax,av]]),aA]}return[0,a,0];case
10:var
af=fT(b,i,k,c,e,f[1]),ag=af[2];return dT(ag,0)?[0,ab([10,af[1],f[2]]),ag]:[0,a,0];case
6:case
7:throw[0,h,a1Y];default:return[0,a,0]}}function
Vj(b,a){pc[1]=0;var
c=fT(b,0,0,1,4,a);return[0,c[1],pc[1]]}var
w9=d(ct[1],17);function
a11(j,a,i,h,f){var
k=a6(i),c=k[2],l=a6(h),d=l[2],g=iN(k[1],l[1]),m=g[3],n=g[2];if(0===d[1])var
e=f;else
if(0===n)var
e=fU(j,[0,[0,c,d],a],c,d,f);else
var
s=bU[1],e=[0,[0,a,b(o4(t(i)[2]),n,c),d,s],f];if(0===m)var
o=e;else
var
q=bU[1],r=U(0,0),o=[0,[0,a,c,b(o4(t(h)[2]),m,r),q],e];var
p=g[1];return G(function(e,b){var
c=b[5],d=b[3];return fU(j,[0,[0,d,c],a],d,c,e)},o,p)}function
a10(d,c,b,a,e){var
f=w(a);if(w(b)!==f)throw[0,sb,gt(d,v(c)),0];return im(function(e,b,a){return fU(d,[0,[0,b,a],c],b,a,e)},e,b,a)}function
fU(e,af,ae,ad,ac){var
i=af,q=ae,o=ad,h=ac;for(;;){var
k=t(q),n=t(o);if(k===n)return h;try{b(ct[7],w9,[0,k,n]);return h}catch(b){b=j(b);if(b===l){p(ct[5],w9,[0,k,n],0);var
f=k[1],a=n[1];if(typeof
f==="number")var
c=0;else
switch(f[0]){case
1:var
R=f[3],S=f[2],ak=f[1];if(typeof
a==="number")var
u=1;else
switch(a[0]){case
0:var
c=0,u=0;break;case
1:var
T=a[3],U=a[2];if(A(ak,a[1])){var
al=fU(e,[0,[0,U,S],i],U,S,h),i=[0,[0,R,T],i],q=R,o=T,h=al;continue}var
c=3,u=0;break;case
3:var
c=2,u=0;break;default:var
u=1}if(u)var
c=3;break;case
2:if(typeof
a==="number")var
c=3;else
switch(a[0]){case
2:return a10(e,i,f[1],a[1],h);case
0:var
c=0;break;case
3:var
c=2;break;default:var
c=3}break;case
3:if(f[2])var
c=0;else
if(typeof
a==="number")var
c=1;else
switch(a[0]){case
3:if(a[2])var
c=1;else{if(Y(f[1],a[1]))return h;var
c=1}break;case
0:var
c=0;break;default:var
c=1}break;case
4:var
V=f[1];if(typeof
a==="number")var
B=1;else
switch(a[0]){case
0:var
c=0,B=0;break;case
3:var
c=2,B=0;break;case
4:var
W=a[1];if(bj(o5(V)))if(bj(o5(W)))return[0,[0,i,k,n,bU[1]],h];return a11(e,i,V,W,h);default:var
B=1}if(B)var
c=3;break;case
8:if(typeof
a==="number")var
c=3;else
switch(a[0]){case
8:try{var
am=a12(e,i,f[1],a[1],h);return am}catch(a){a=j(a);if(a===a$)return[0,[0,i,k,n,bU[1]],h];throw a}case
0:var
c=0;break;case
3:var
c=2;break;default:var
c=3}break;case
10:var
G=f[2],H=f[1];if(G)var
v=1;else{if(typeof
a==="number")var
w=1;else
switch(a[0]){case
0:var
c=0,v=0,w=0;break;case
3:var
c=2,v=0,w=0;break;case
10:if(!a[2]){var
q=H,o=a[1];continue}var
v=1,w=0;break;default:var
w=1}if(w)var
c=3,v=0}if(v){if(typeof
a==="number")var
C=1;else
switch(a[0]){case
0:var
c=0,C=0;break;case
3:var
c=2,C=0;break;case
10:var
X=a[2],Z=a[1];if(X)try{var
an=sp(e,bU,H,G,Z,X,function(b,a){return fU(e,i,b,a,h)});return an}catch(a){a=j(a);if(a[1]===x)return[0,[0,i,k,n,bU[1]],h];throw a}var
q=iP(0,0,G,H)[2],o=Z;continue;default:var
C=1}if(C)var
c=3}break;case
11:var
_=f[3],I=f[2],J=f[1];if(typeof
a==="number")var
D=1;else
switch(a[0]){case
0:var
c=0,D=0;break;case
3:var
c=2,D=0;break;case
11:var
$=a[3],K=a[2],L=a[1];try{var
ao=w4(0,e,K,k[2],[0,J],I,_),ap=w4(a13,e,I,n[2],[0,L],K,$),M=g(function(a){var
b=bU[1],c=a[2];return[0,i,dr(a[1],ao),c,b]},ap);if(U4(e,J,L))var
aa=s(M,h);else{var
ab=ff(0);try{m(function(a){return aq(e,a[2],a[3])},M);if(!gN(w3[1],e,J,I,_,L,K,$))throw[0,x,0];er(ab);var
ar=s(M,h),aa=ar}catch(a){a=j(a);if(a[1]===x){er(ab);throw l}throw a}}return aa}catch(a){a=j(a);if(a===l)return[0,[0,i,k,n,bU[1]],h];throw a}default:var
D=1}if(D)var
c=3;break;case
0:var
c=4;break;default:var
c=0}switch(c){case
0:var
y=typeof
a==="number"?0:0===a[0]?3:0;break;case
1:var
y=0;break;case
2:var
y=1;break;case
3:var
y=2;break;default:var
y=3}switch(y){case
0:if(typeof
f==="number")var
r=0;else
if(3===f[0])if(wY(e,f[1])){if(wU(e,k)){var
q=d(lE(e),k),o=n;continue}var
r=0}else
var
r=0;else
var
r=0;break;case
1:var
r=0;break;case
2:var
r=1;break;default:return[0,[0,i,k,n,bU[1]],h]}if(!r){if(typeof
a!=="number"&&3===a[0])if(wY(e,a[1]))if(wU(e,n)){var
q=k,o=d(lE(e),n);continue}if(typeof
f!=="number"&&3===f[0]){var
F=f[1];if(typeof
a!=="number"&&3===a[0])if(Y(F,a[1]))try{var
ag=bg(F,e),ah=dV(f[2],a[2]),ai=ag[6],aj=im(function(c,h,d){var
a=d[2],b=d[1],f=lt(h),g=f[2];if(f[1]){if(g){var
j=bU[1],k=bi(a[2],[2,[0,a,0]]);return[0,[0,i,bi(b[2],[2,[0,b,0]]),k,j],c]}return fU(e,[0,[0,b,a],i],b,a,c)}return g?fU(e,[0,[0,a,b],i],a,b,c):c},h,ai,ah);return aj}catch(a){a=j(a);if(a===l)return[0,[0,i,k,n,bU[1]],h];throw a}try{var
E=bg(F,e),N=E[3];if(typeof
N==="number")if(0===N)if(0===E[4]){var
O=E[5];if(O)var
P=t(O[1])[2]===bm?1:0,z=1;else
var
z=0}else
var
z=0;else
var
z=0;else
var
z=0;if(!z)var
P=0;var
Q=P}catch(a){a=j(a);if(a!==l)throw a;var
Q=0}if(Q){var
q=Ge(e,k),o=n;continue}}}return[0,[0,i,k,n,bU[1]],h]}throw b}}}function
a12(f,e,p,o,h){var
g=aw(p),i=aw(o),j=o6(g[1],i[1]),m=j[3],n=j[1],c=t(g[2]),d=t(i[2]),k=c[1],b=d[1];if(typeof
k==="number")var
a=0;else
switch(k[0]){case
3:if(typeof
b==="number")var
a=0;else
if(3===b[0]){if(Y(k[1],b[1]))return fU(f,[0,[0,c,d],e],c,d,h);var
a=0}else
var
a=0;break;case
9:if(typeof
b==="number")var
a=1;else
if(9===b[0])if(E(g[4],i[4]))if(0===n){if(0===j[2]){var
q=fU(f,[0,[0,c,d],e],c,d,h);return G(function(n,m){var
c=aB(m[2]),a=aB(m[3]);if(typeof
c==="number")var
b=typeof
a==="number"?1:0;else
if(0===c[0]){var
o=c[1];if(o){if(typeof
a==="number")var
g=1;else
if(1===a[0])var
g=1;else{var
p=a[1];if(p)var
j=p[1],i=o[1],b=2,g=0;else
var
b=0,g=0}if(g)var
b=0}else{if(typeof
a==="number")var
h=1;else
if(1===a[0])var
h=1;else
if(a[1])var
b=0,h=0;else
var
b=1,h=0;if(h)var
b=0}}else
if(0===c[1]){var
k=c[2];if(k)if(k[2])var
b=0;else{if(typeof
a==="number")var
d=1;else
if(0===a[0])var
d=1;else
if(0===a[1]){var
l=a[2];if(l)if(l[2])var
b=0,d=0;else
var
j=l[1],i=k[1],b=2,d=0;else
var
b=0,d=0}else
var
b=0,d=0;if(d)var
b=0}else
var
b=0}else
var
b=c[2]?0:typeof
a==="number"?0:1===a[0]?0===a[1]?0:a[2]?0:1:0;switch(b){case
0:throw a$;case
1:return n;default:return fU(f,[0,[0,i,j],e],i,j,n)}},q,m)}var
a=1}else
var
a=1;else
var
a=1;else
var
a=1;break;case
0:var
a=0;break;default:var
a=1}if(!a){if(typeof
b==="number")var
l=0;else
switch(b[0]){case
0:case
3:var
l=0;break;default:var
l=1}if(!l)if(g[4])if(0===n)return G(function(d,i){var
c=aB(i[2]),a=aB(i[3]);if(typeof
c==="number")return d;else
if(0===c[0]){var
j=c[1];if(j){var
k=j[1];if(typeof
a==="number")var
g=1;else
if(1===a[0])var
g=1;else{var
l=a[1];if(l){var
m=l[1];return fU(f,[0,[0,k,m],e],k,m,d)}var
b=1,g=0}if(g)var
b=1}else
var
b=0}else
if(0===c[1]){var
n=c[2];if(n){var
o=n[1];if(typeof
a==="number")var
h=1;else
if(1===a[0])var
h=1;else{var
p=a[1];if(p){var
q=p[1];return fU(f,[0,[0,o,q],e],o,q,d)}var
b=1,h=0}if(h)var
b=1}else
var
b=1}else
var
b=0;if(!b)if(typeof
a!=="number"&&0===a[0])if(!a[1])return d;throw a$},h,m)}throw a$}function
Gt(c,b,a){d(ct[2],w9);bU[1]=0;var
e=fU(c,[0,[0,b,a],0],b,a,0);d(ct[2],w9);return function(b){var
a=v(e);return m(function(b){try{var
a=U_([0,c],b[2],b[3],b[4]);return a}catch(a){a=j(a);if(a[1]===x){var
d=ik(ik(a[2]));throw[0,sb,gt(c,v(b[1])),d]}throw a}},a)}}function
Vk(c){var
a=t(c),b=a[1];if(typeof
b!=="number")switch(b[0]){case
3:return fR(0,a[2]);case
5:var
d=Vk(b[4]);return bi(a[2],[5,b[1],b[2],b[3],d]);case
9:return a;case
0:break;default:throw[0,h,a14]}return bi(a[2],a[1])}function
Vl(g){var
a=t(g),b=a[1];if(typeof
b!=="number")switch(b[0]){case
4:var
c=b[1],h=b[2],i=[4,Vk(c),h];return bi(c[2],i);case
8:var
d=aw(b[1]),e=d[2],f=d.slice();f[2]=bi(e[2],e[1]);return bi(a[2],[8,f]);case
0:case
9:return a}return bi(a[2],a[1])}function
Vm(b){var
a=t(b)[1];if(typeof
a!=="number"&&1===a[0])return 1+Vm(a[3])|0;return 0}function
a15(i,h,a){function
c(d,k){var
a=t(k),b=a[1];if(typeof
b!=="number"&&3===b[0]){var
e=E(b[1],[0,h]);if(e)var
f=e;else{var
g=a8(a,d);if(!g)try{var
l=c([0,a,d],Ge(i,a));return l}catch(a){a=j(a);if(a===cL)return 0;if(a[1]===x)return 1;throw a}var
f=g}return f}return 0}return c(0,a)}function
Vn(m,e,z){var
a=t(z),n=1-b(ae[3],a,e[1]);if(n){e[1]=b(ae[4],a,e[1]);var
c=a[1];if(typeof
c==="number")var
l=0;else
switch(c[0]){case
4:var
f=c[2],o=f[1];if(o){var
p=o[1],i=p[2];if(i){var
j=i[2],q=i[1],r=p[1];if(hk(a,ak([2,j])))oV(f,0);else{var
k=t(q),u=k[1];if(typeof
u==="number"){eq(a);a[1]=[3,r,j,[0,0]]}else
switch(u[0]){case
0:case
9:if(k!==q)oV(f,[0,[0,r,[0,k,j]]]);break;default:oV(f,0)}}}else
ad(a16)}var
h=t(c[1]);if(!(h[2]<0)){var
s=a6(h),A=s[2],B=s[1],C=b(o4(h[2]),B,A);eq(a);h[1]=C[1]}var
l=1;break;case
8:var
x=aw(c[1]),D=x[1],E=g(function(f){var
g=f[2],a=aB(g);if(typeof
a==="number")var
b=0;else
if(1===a[0]){var
c=a[2];if(c){var
d=c[2];if(d){var
k=[0,c[1],0],i=G(function(a,b){return N(function(a){return dc(m,0,[0,b,0],[0,a,0])},a)?a:[0,b,a]},k,d);if(a!==g)var
e=0;else{var
p=w(d);if(w(i)<p)var
e=0;else
var
j=a,e=1}if(!e)var
l=a[4],n=a[3],o=v(i),j=[1,a[1],o,n,l];var
h=j,b=1}else
var
b=0}else
var
b=0}else
var
b=0;if(!b)var
h=a;return[0,f[1],h]},D),F=d(by(function(a){return 0!==a[2]?1:0}),E),H=e8(function(b,a){return Q(b[1],a[1])},F);eq(a);var
y=x.slice();y[1]=H;a[1]=[8,y];var
l=1;break;default:var
l=0}return ba(function(a){return Vn(m,e,a)},a)}return n}function
Vo(b,a){return Vn(b,[0,ae[1]],a)}var
w_=d(d2[1],47),Gu=d(d2[1],17);function
lG(a){d(d2[2],w_);return d(d2[2],Gu)}function
ci(f,a,I){var
c=I;for(;;){var
k=c[1];if(typeof
k!=="number")switch(k[0]){case
6:var
c=k[1];continue;case
0:case
9:return c}try{var
V=b(d2[7],w_,c);return V}catch(k){k=j(k);if(k===l){var
m=fe(0,0);p(d2[5],w_,c,m);var
e=c[1];if(typeof
e==="number")var
h=0;else
switch(e[0]){case
3:var
s=e[1];if(fN(a,s)){try{var
K=bi(c[2],c[1]),L=[6,ci(f,a,d(lE(f),K))]}catch(a){a=j(a);if(a!==cL)if(a[1]!==x)throw a;throw l}var
u=L}else
var
M=[0,0],N=e[2],u=[3,s,g(function(b){return ci(f,a,b)},N),M];var
i=u,h=1;break;case
4:var
v=e[2][1];if(v){var
w=v[1],y=w[1];if(fN(a,y))var
z=0;else
var
O=w[2],z=[0,[0,y,g(function(b){return ci(f,a,b)},O)]];var
A=z}else
var
A=0;var
i=[4,ci(f,a,e[1]),[0,A]],h=1;break;case
8:var
n=aw(e[1]),o=t(n[2]);try{var
F=b(d2[7],Gu,o);p(d2[5],w_,c,F);var
S=[6,F],E=S}catch(b){b=j(b);if(b!==l)throw b;p(d2[5],Gu,o,m);var
P=cT(n)?ak(0):o,Q=1,R=1,q=wc(function(b){return ci(f,a,b)},R,n,Q,P),B=q[6];if(B)if(fN(a,B[1][1])){var
C=q.slice();C[6]=0;var
D=[8,C],r=1}else
var
r=0;else
var
r=0;if(!r)var
D=[8,q];var
E=D}var
i=E,h=1;break;case
11:var
G=e[1];if(fN(a,G)){var
H=wT(f,G);if(fN(a,H))throw l;var
T=e[3],U=g(function(b){return ci(f,a,b)},T),i=[11,H,e[2],U],h=1}else
var
h=0;break;default:var
h=0}if(!h)var
J=c[1],i=oR(0,function(b){return ci(f,a,b)},J);m[1]=i;return m}throw k}}}function
Vp(c,b,a){try{var
d=ci(c,b,a);lG(0);return d}catch(a){a=j(a);if(a===l){lG(0);throw l}throw a}}U5[1]=Vp;function
a17(e,b,d){var
a=t(d),c=[0,e];if(!bj(a))if(!N(function(b){return hk(a,b)},b))if(!wM(c)){var
f=bi(a[2],a[1]);b4(a,bi(a[2],[3,c,b,[0,0]]));return f}return a}function
w$(d,c,o){var
a=o;for(;;)switch(a[0]){case
0:var
f=a[3],h=a[1];if(fN(c,h)){var
a=f;continue}var
p=w$(d,c,f),q=a[2];return[0,h,g(function(a){return ci(d,c,a)},q),p];case
1:var
e=a[1],i=e[4],j=g(function(a){var
b=a[2],e=g(function(a){return ci(d,c,a)},b);return[0,a[1],e]},i),k=e[3],l=e[2],m=function(a){var
b=ci(d,c,a[3]);return[0,a[1],a[2],b]},n=b(av[23],m,l);return[1,[0,ci(d,c,e[1]),n,k,j]];default:var
r=w$(d,c,a[3]),s=ci(d,c,a[2]);return[2,a[1],s,r]}}function
a18(c,b,a){if(fN(b,a[3]))throw[0,h,a19];var
d=a[4],e=a[7],f=a[6],i=a[5],j=d?[0,ci(c,b,d[1])]:0,k=a[3],l=w$(c,b,a[2]),m=a[1],n=[0,g(function(a){return ci(c,b,a)},m),l,k,j,i,f,e];lG(0);return n}function
a1_(c,b,a){if(fN(b,a[3]))throw[0,h,a1$];var
d=a[6],e=a[5],f=a[4],i=a[3],j=w$(c,b,a[2]),k=a[1],l=[0,g(function(a){return ci(c,b,a)},k),j,i,f,e,d];lG(0);return l}function
Gv(b,d,g){var
a=t(g);if(a8(a,d))return 0;var
e=[0,a,d],c=a[1];if(typeof
c!=="number"&&8===c[0]){var
f=aw(c[1]),h=f[1];m(function(f){var
a=aB(f[2]);if(typeof
a!=="number"&&1===a[0]){var
c=a[2];if(c){var
d=c[2];if(d){var
e=c[1];m(function(a){return aq(b,e,a)},d);return dJ(a[4],[1,a[1],[0,e,0],a[3],[0,0]])}}}return 0},h);return hh(function(a){return Gv(b,e,a)},f)}return ba(function(a){return Gv(b,e,a)},a)}function
a2a(b,a){var
c=0;return m(function(a){return Gv(b,c,a)},a)}O([I,a2b,0]);function
gv(b,a){switch(a[0]){case
0:var
c=a[2],d=a[1];return L(e(b,a2c),gv,d,gv,c);case
1:gv(b,a[1]);eJ(b,46);return be(b,a[2]);default:return be(b,a[1])}}function
a2e(h,b){var
f=aY(b,a2d);if(f)var
g=f,c=0;else{var
a=u(b,0),j=97<=a?ue<=a?agj===a?0:1:dP<=a?0:1:91<=a?95===a?1:0:65<=a?1:0;if(j)var
g=0,c=0;else
var
i=1,c=1}if(!c)var
i=g;return i?d(e(h,a2f),b):be(h,b)}function
iQ(e,i,c,h){var
a=h;for(;;){if(a){var
f=a[2],g=a[1];if(f){b(e,c,g);d(i,c);var
a=f;continue}return b(e,c,g)}return 0}}function
a2g(a){return e(a,a2h)}function
a2i(b,a){return d(e(b,a2j),a)}function
a2k(a,b){return iQ(a2i,a2g,a,b)}function
a2l(a){return e(a,a2m)}function
a2n(b,a){return d(e(b,a2o),a)}function
a2p(a,b){return iQ(a2n,a2l,a,b)}function
na(a,c){if(typeof
c!=="number")switch(c[0]){case
2:var
F=c[2],G=c[1]?a2x:a2z,H=c[3];return bH(e(a,a2y),sC,H,G,gv,F);case
3:var
j=c[1];if(1===j[0]){var
p=j[1];if(1===p[0]){var
x=p[1];if(2===x[0])if(!f(x[1],a2A))if(!f(p[2],a2B)){var
m=j[2];if(f(m,a2C))if(f(m,a2D))if(f(m,a2E))var
g=1;else{var
n=c[2];if(n){var
q=n[1];if(typeof
q==="number")var
i=1;else
if(11===q[0]){var
y=q[2];if(0===y[0]){var
r=y[1];if(r)if(r[2])var
g=1,i=0;else{var
s=n[2];if(s){if(!s[2]){var
z=r[1],I=z[1],J=function(b,c){if(b){var
a=b[1];if(typeof
a==="number")var
d=0;else
if(9===a[0]){if(!b[2]){if(A(I,a2G))return[1,a2H,a,c];var
e=a[1];return R(function(b,a){return[1,a2I,b,a]},e,c)}var
d=1}else
var
d=0;if(!d)if(!b[2])return[1,a2F,a,c]}throw l};try{var
K=J(z[3],s[1])}catch(b){la(a,0);sC(a,n);gv(a,j);return it(a,0)}return b(e(a,a2J),sB,K)}var
g=1,i=0}else
var
g=1,i=0}else
var
g=1,i=0}else
var
g=1,i=0}else
var
i=1;if(i)var
g=1}else
var
g=1}else
var
g=0;else
var
g=0;if(!g){var
o=c[2];if(o){var
t=o[1];if(typeof
t==="number")var
k=0;else
if(11===t[0]){var
B=t[2];if(0===B[0]){var
u=B[1];if(u)if(u[2])var
k=1;else{var
v=o[2];if(v){if(!v[2]){var
C=u[1],M=C[1],N=function(a,c){if(0===a)return[1,a2L,a2K,c];if(a){var
b=a[1];if(typeof
b==="number")var
d=0;else
if(9===b[0]){if(!a[2]){if(A(M,a2N))return[1,a2O,b,c];var
e=b[1];return R(function(b,a){return[1,a2P,b,a]},e,c)}var
d=1}else
var
d=0;if(!d)if(!a[2])return[1,a2M,b,c]}throw l};try{var
D=N(C[3],v[1])}catch(b){la(a,0);sC(a,o);gv(a,j);return it(a,0)}if(f(m,a2Q)){if(f(m,a2R))throw[0,h,a2S];return b(e(a,a2T),sB,D)}return b(e(a,a2U),sB,D)}var
k=1}else
var
k=1}else
var
k=1}else
var
k=1}else
var
k=0}}}}}la(a,0);sC(a,c[2]);gv(a,j);return it(a,0);case
5:var
O=c[1],P=c[2],Q=function(a,b){return Vq(P,a,b)};return b(e(a,a2V),Q,O);case
7:return be(a,c[1]);case
10:var
S=c[2],T=c[1]?a2W:a2Y;return b(e(a,a2X),T,S);case
11:var
w=c[4],U=function(d,a){if(a){var
c=a[1];if(c)return b(e(d,a2Z),a2k,c)}return 0},V=function(b,a){if(0===a[0]){var
c=a[1];return iQ(a2q,function(a){return e(a,a20)},b,c)}var
d=a[1],f=a[2];return L(e(b,a21),sC,f,gv,d)},W=c[2],X=c[3]?0===w?a22:a26:0===w?a27:a28,Y=c[1]?a23:a25;return cw(e(a,a24),Y,X,V,W,U,w);case
13:var
Z=c[1];d(e(a,a29),Z);var
E=[0,1],_=c[3],$=c[2];aC(function(c,b){var
d=E[1]?(E[1]=0,a2_):a3a;return L(e(a,a2$),d,c,cV,b)},$,_);return e(a,a3b);case
4:case
6:case
8:break;default:la(a,1);eJ(a,40);cV(a,c);eJ(a,41);return it(a,0)}return 0}function
Gw(c,a){if(typeof
a!=="number"&&9===a[0]){var
d=a[1],f=function(a,b){return pd(na,a2v,a,b)};return b(e(c,a2w),f,d)}return na(c,a)}function
sB(a,b){if(typeof
b!=="number"&&1===b[0]){var
c=b[1];la(a,0);if(f(c,a2t)){be(a,c);eJ(a,58)}Gw(a,b[2]);be(a,a2u);lb(a,0);sB(a,b[3]);return it(a,0)}return Gw(a,b)}function
cV(b,a){if(typeof
a!=="number")switch(a[0]){case
0:var
c=a[2],d=a[1];return p(e(b,a2r),cV,d,c);case
12:var
f=a[2],g=a[1];return L(e(b,a2s),a2p,g,cV,f)}return sB(b,a)}function
Vq(b,a,j){var
c=j;for(;;){if(c){var
f=c[2],g=c[1],h=g[2],i=g[1];if(f){var
k=function(a,c){return Vq(b,a,c)};return bH(e(a,a3c),i,cV,h,k,f)}p(e(a,a3d),i,cV,h);if(b)e(a,a3e);var
c=0;continue}if(b){var
l=b[1]?a3f:a3h;return d(e(a,a3g),l)}return 0}}function
a2q(c,a){var
b=a[3],d=a[2];function
f(a){return d?e(a,a3i):0===b?e(a,a3j):e(a,a3k)}function
g(a,b){return pd(cV,a3l,a,b)}var
h=a[1];return L(e(c,a3m),h,f,g,b)}function
pd(d,h,a,g){var
c=g;for(;;){if(c){var
e=c[2],f=c[1];if(e){b(d,a,f);be(a,h);lb(a,0);var
c=e;continue}return b(d,a,f)}return 0}}function
sC(a,b){return b?b[2]?(la(a,1),eJ(a,40),pd(cV,a3n,a,b),eJ(a,41),it(a,0),lb(a,0)):(na(a,b[1]),lb(a,0)):0}function
Gx(f,c){var
d=c[2],a=c[1],g=A(a,a3o)?a:o(a3t,a),h=d[2]?d[1]?a3p:a3r:a3s;return b(e(f,a3q),h,g)}function
Vr(c,a){if(a){var
d=function(a){return e(a,a3u)},f=function(a,b){return iQ(Gx,d,a,b)};return b(e(c,a3v),f,a)}return 0}function
xa(c,a){switch(a[0]){case
0:var
g=function(c,a){if(a){var
d=function(a,b){return pd(cV,a3x,a,b)};return b(e(c,a3y),d,a)}return 0},h=a[1],i=a[2];return L(e(c,a3z),g,i,gv,h);case
1:var
d=a[1],j=a[3],k=a[2],l=f(d,a3A)?o(d,a3B):a3D;return bH(e(c,a3C),l,Gw,k,xa,j);default:var
m=function(c,a){if(a){var
d=a[1];return b(e(c,a3E),cV,d)}return 0},n=a[2],p=function(a){return e(a,a3F)},q=function(a,b){return iQ(a3w,p,a,b)},r=a[1];return L(e(c,a3G),m,r,q,n)}}function
a3w(b,a){switch(a[0]){case
0:var
c=a[2],d=a[1];return L(e(b,a3H),cV,d,cV,c);case
1:var
f=a[4],g=a[1],h=a[3]?a3I:a3M,i=a[2]?a3J:a3L;return bH(e(b,a3K),i,h,g,cV,f);default:var
j=a[4],k=a[1],l=a[3]?a3N:a3R,m=a[2]?a3O:a3Q;return bH(e(b,a3P),m,l,k,cV,j)}}var
xb=[0,function(a){return dq(a3S)}],j9=[0,function(a){return dq(a3T)}],Vs=[0,function(a){return dq(a3U)}],Vt=[0,function(a){return dq(a3V)}];function
Gy(c,a){if(typeof
a!=="number"&&0===a[0]){var
d=a[2];if(d){var
f=a[3],g=d[1],h=a[1];return bH(e(c,a3Z),h,Gz,g,Gy,f)}var
i=a[3];return b(e(c,a30),Gy,i)}return b(e(c,a3Y),Gz,a)}function
Gz(c,a){if(typeof
a==="number")return 0;else
switch(a[0]){case
0:return b(e(c,a31),Gy,a);case
1:var
d=a[1];return b(e(c,a32),gv,d);case
2:var
f=a[1],g=Vs[1];return b(e(c,a33),g,f);default:var
h=a[1];return b(e(c,a34),gv,h)}}function
GA(g,c){if(c){var
d=c[1];if(c[2]){if(2===d[0])if(0===d[2]){var
a=d[1],h=[0,[0,a[1],a[4],a[5]],0],f=c[2];for(;;){if(f){var
i=f[1];if(2===i[0])if(1===i[2]){var
j=i[1],h=[0,[0,j[1],j[4],j[5]],h],f=f[2];continue}}var
m=v(h),n=[0,a[2],a[3],m,a[6]],o=Vt[1];return L(e(g,a36),o,n,GA,f)}}var
k=c[2],l=j9[1];return L(e(g,a35),l,d,GA,k)}return b(j9[1],g,d)}return 0}function
a3W(g,a){switch(a[0]){case
0:var
x=a[4],y=a[2],z=a[3],B=a[1]?a37:a3$,C=2===a[5]?a38:a3_;return gN(e(g,a39),C,B,Vr,z,y,xa,x);case
1:var
D=a[4],E=a[2],F=a[3],G=a[1]?a4a:a4e,H=2===a[5]?a4b:a4d;return gN(e(g,a4c),H,G,Vr,F,E,xa,D);case
2:var
c=a[1];if(2<=a[2]){var
I=[0,c[1],c[4],c[5]];return b(e(g,a4f),xc,I)}var
W=function(a){function
f(b,a){var
c=A(a,a4S)?a:o(a4U,a);return d(e(b,a4T),c)}var
b=c[3];if(b){if(b[2]){var
g=c[2],h=c[3],i=function(a){return e(a,a4V)},j=function(a,b){return iQ(f,i,a,b)};return p(e(a,a4W),j,h,g)}var
k=c[2],l=b[1];return p(e(a,a4X),f,l,k)}var
m=c[2];return d(e(a,a4Y),m)},X=[0,c[1],c[4],c[5]],Y=0===c[6]?a4Z:a41;return L(e(g,a40),W,Y,xc,X);case
3:var
q=a[2],s=a[1];if(typeof
q==="number")return d(e(g,a4g),s);var
J=xb[1];return p(e(g,a4h),s,J,q);case
4:var
h=a[2],t=a[1];if(typeof
h!=="number"&&3===h[0]){var
M=h[1];return p(e(g,a4m),t,gv,M)}var
K=xb[1];switch(a[3]){case
0:var
i=a4i;break;case
1:var
i=a4k;break;default:var
i=a4l}return L(e(g,a4j),i,t,K,h);case
5:var
f=a[1];switch(a[2]){case
0:var
j=a4n;break;case
1:var
j=a4o;break;default:var
j=a4p}var
R=function(b){var
a=f[5];return m(function(a){var
c=a[2],d=a[1];return L(e(b,a4w),cV,d,cV,c)},a)},S=function(a){var
b=f[2];if(b){if(b[2]){var
c=f[1],d=f[2],g=function(a){return e(a,a4x)},h=function(a,b){return iQ(Gx,g,a,b)};return p(e(a,a4y),h,d,c)}var
i=f[1],j=b[1];return p(e(a,a4z),Gx,j,i)}return be(a,f[1])},T=function(c,a){if(typeof
a!=="number"&&4===a[0]){var
d=a[1];return b(e(c,a4A),cV,d)}return 0},U=function(a){var
b=f[3];return L(e(a,a4B),j,S,T,b)},k=f[3];if(typeof
k==="number")var
n=0;else
if(4===k[0])var
w=k[2],n=1;else
var
n=0;if(!n)var
w=f[3];var
l=function(b,a){return 0===a?e(b,a4C):0},V=function(b,a){if(typeof
a==="number")return 0===a?0:e(b,a4D);else
switch(a[0]){case
6:var
d=a[1],g=function(c,h){var
a=h;for(;;){if(a){e(c,a4F);var
b=a[1],d=b[3],f=b[1],g=b[2]?a4P:a4R;L(e(c,a4Q),g,f,cV,d);var
a=a[2];continue}return 0}},h=f[4];return L(e(b,a4G),l,h,g,d);case
8:var
i=a[1],j=function(a){return e(a,a4H)},k=function(a,b){return iQ(xc,j,a,b)},m=f[4];return L(e(b,a4I),l,m,k,i);default:var
c=f[4];return L(e(b,a4E),l,c,cV,a)}};return L(e(g,a4J),U,V,w,R);default:var
v=a[3],N=0===v?a4q:a4v,O=function(b,a){if(a){var
c=a[1];d(e(b,a4r),c);var
f=a[2];return m(function(a){if(3<=r(a))if(66===u(a,0))if(83===u(a,1))if(58===u(a,2))return e(b,a4s);return d(e(b,a4t),a)},f)}return 0},P=a[2],Q=a[1];return gN(e(g,a4u),N,a2e,Q,cV,P,O,v)}}function
xc(a,d){var
f=d[3],b=d[2],c=d[1];if(f){var
g=f[1];if(b){var
h=function(a,b){return pd(na,a4K,a,b)};return bH(e(a,a4L),c,h,b,na,g)}return p(e(a,a4M),c,na,g)}if(b){var
i=function(a,b){return pd(na,a4N,a,b)};return p(e(a,a4O),c,i,b)}return be(a,c)}function
a3X(b,a){function
c(b){function
f(b,a){var
c=A(a,a42)?a:o(a44,a);return d(e(b,a43),c)}var
c=a[2];if(c){if(c[2]){var
g=a[1],h=a[2],i=function(a){return e(a,a45)},j=function(a,b){return iQ(f,i,a,b)};return p(e(b,a46),j,h,g)}var
k=a[1],l=c[1];return p(e(b,a47),f,l,k)}var
m=a[1];return d(e(b,a48),m)}var
f=a[3];function
g(a){return e(a,a49)}function
h(a,b){return iQ(xc,g,a,b)}var
i=0===a[4]?a4_:a5a;return L(e(b,a4$),c,i,h,f)}xb[1]=Gz;Vs[1]=GA;j9[1]=a3W;Vt[1]=a3X;function
bb(b,a){switch(a[0]){case
0:return be(b,a[1]);case
1:var
c=a[2],d=a[1];return p(e(b,a5b),bb,d,c);default:var
f=a[2],g=a[1];return L(e(b,a5c),bb,g,bb,f)}}var
sD=[0,c_];function
Vu(b){try{var
a=lr(b,sD[1]);return a}catch(a){a=j(a);if(a===l)return b[2];throw a}}function
Vv(b){try{lr(b,sD[1]);var
a=0;return a}catch(a){a=j(a);if(a===l){var
c=sD[1];sD[1]=iA(b,aVT(b),c);return 0}throw a}}function
lH(b,a){return be(b,Vu(a))}var
Vw=gp(a5d);function
hl(a){switch(a[0]){case
0:return[2,Vu(a[1])];case
1:var
b=a[1];if(0===b[0])if(E(b[1],Vw))return[2,a[2]];var
c=a[2];return[1,hl(b),c];default:var
d=hl(a[2]);return[0,hl(a[1]),d]}}function
cD(b,a){switch(a[0]){case
0:return lH(b,a[1]);case
1:var
c=a[1];if(0===c[0])if(E(c[1],Vw))return be(b,a[2]);cD(b,c);eJ(b,46);return be(b,a[2]);default:var
d=a[2],f=a[1];return L(e(b,a5e),cD,f,cD,d)}}function
xd(a){switch(a[0]){case
0:var
b=[0,a5g,[0,xd(a[2]),a5f]];return dH(a5h,[0,xd(a[1]),b]);case
1:var
c=[0,a[2],0];return dH(a5i,[0,xd(a[1]),c]);default:return a[1]}}function
Vx(a){return xd(hl(a))}function
sE(a){switch(a){case
0:return 0;case
1:return 1;default:return 2}}function
GB(d,c,a){if(a){var
f=a[2],g=function(a){return m(function(c){return b(e(a,a5j),d,c)},f)},h=a[1];return p(e(c,a5k),d,h,g)}return e(c,a5l)}function
Vy(b){var
a=b;for(;;)if(typeof
a==="number")return 0;else{if(0===a[0]){var
c=Vy(a[5]);return[0,a[2],c]}var
a=a[1][1];continue}}function
Vz(b,a){if(a){var
c=a[1];return d(e(b,a5t),c)}return e(b,a5u)}var
sF=[0,0];function
gw(g,h){var
b=0,a=h;for(;;){var
c=a[1];if(typeof
c!=="number"&&6===c[0]){var
f=c[1];if(!a8(f,b)){var
b=[0,f,b],a=f;continue}}if(a8(a,sF[1])){var
i=a[3];return d(e(g,a5w),i)}sF[1]=[0,a,sF[1]];var
j=a[1],k=a[2],l=a[3];return L(e(g,a5x),l,k,a5v,j)}}function
nb(a){return function(b){return GB(gw,a,b)}}function
a5v(c,a){if(typeof
a==="number")return e(c,a5y);else
switch(a[0]){case
0:var
o=a[1];return b(e(c,a5z),Vz,o);case
1:var
j=0,g=a[4];for(;;){if(typeof
g==="number")var
n=0===g?a5q:a5r;else{var
k=g[1];if(!a8(k,j)){var
j=[0,k,j],g=k[1];continue}var
n=a5s}var
q=a[3],r=a[2],s=a[1];return cw(e(c,a5A),s,gw,r,gw,q,n)}case
2:var
t=a[1];return b(e(c,a5B),nb,t);case
3:var
u=Vy(a[3][1]),v=function(a,b){return GB(cD,a,b)},w=a[2],x=a[1];return cw(e(c,a5C),cD,x,nb,w,v,u);case
4:var
y=a[2],z=function(a){var
b=y[1];if(b){var
c=b[1],d=c[2],f=c[1];return L(e(a,a5D),cD,f,nb,d)}return e(a,a5E)},A=a[1];return p(e(c,a5F),gw,A,z);case
5:var
h=0,f=a[2],B=a[4],C=a[3];for(;;){if(typeof
f==="number")var
l=0===f?a5m:a5n;else{var
m=f[1][1];if(m){var
i=m[1];if(!a8(i,h)){var
h=[0,i,h],f=i;continue}var
l=a5o}else
var
l=a5p}var
D=a[1];return cw(e(c,a5G),D,l,gw,C,gw,B)}case
6:var
E=a[1];return b(e(c,a5H),gw,E);case
7:var
F=a[1];return b(e(c,a5I),gw,F);case
8:var
d=a[1],G=function(a){var
b=d[6];if(b){var
c=b[1],f=c[2],g=c[1];return L(e(a,a5J),cD,g,nb,f)}return e(a,a5K)},H=d[5],I=d[4],J=d[2],K=d[1],M=function(b,a){var
c=a[2],d=a[1];return p(e(b,a5P),d,VA,c)},N=function(a,b){return GB(M,a,b)};return b9K(e(c,a5R),a5Q,N,K,a5O,gw,J,a5N,I,a5M,H,a5L,G);case
9:var
O=a[1];return b(e(c,a5S),Vz,O);case
10:var
P=a[2],Q=a[1];return L(e(c,a5T),gw,Q,nb,P);default:var
R=a[3],S=a[1];return L(e(c,a5U),cD,S,nb,R)}}function
VA(c,a){if(typeof
a==="number")return e(c,a5V);else{if(0===a[0]){var
d=a[1];if(d){var
f=d[1];return b(e(c,a5W),gw,f)}return e(c,a5X)}var
g=a[4],h=function(a){var
c=g[1];if(c){var
d=c[1];return b(e(a,a5Y),VA,d)}return e(a,a5Z)},i=a[3],j=a[2],k=a[1];return bH(e(c,a50),k,nb,j,i,h)}}aWo[1]=function(b,a){sF[1]=0;gw(b,a);sF[1]=0;return 0};function
xe(a){if(typeof
a!=="number"&&0===a[0])return 1;return 0}function
a51(b,a){if(typeof
a==="number")return[1,b];else{if(0===a[0])return[0,il(b,a[1])];var
c=a[1];return[1,g(function(a){return il(b,a)},c)]}}function
sG(a,b){if(typeof
a==="number")return b;else{if(0===a[0])return[0,il(b,a[1]),0];var
c=a[1];return g(function(a){return il(b,a)},c)}}var
xf=[0,bz],VB=[0,bz],VC=[0,aL[1]],a52=[0,0],a53=[0,0];function
GC(f,e){var
b=f,a=e;for(;;){switch(b[0]){case
1:if(1===a[0]){var
c=GC(b[1],a[1]);return 0===c?Q(b[2],a[2]):c}break;case
2:if(2===a[0]){var
d=GC(b[1],a[1]);if(0===d){var
b=b[2],a=a[2];continue}return d}break}return cp(b,a)}}var
xg=g7([0,GC]),xh=[0,xg[1]];function
a54(b,a){var
c=t(a);return t(b)===c?1:0}function
GD(a,b){if(a)return b===a[1]?0:1+GD(a[2],b)|0;throw l}function
a55(d){var
a=d;for(;;){if(a){var
b=a[2],c=1-a8(a[1],b);if(c){var
a=b;continue}return c}return 1}}function
GE(n,f,c){var
h=n?n[1]:0;try{var
o=rY(c,f),a=g(t,o[1]),p=t(o[2]),d=p[1];if(typeof
d==="number")var
k=0;else
if(3===d[0]){var
r=d[1],b=g(t,d[2]),u=w(b);if(w(a)===u)if(qX(function(b,a){return b===a?1:0},a,b))var
i=GE([0,h],f,r),m=1;else
var
m=0;else
var
m=0;if(!m){if(h)var
e=0;else{var
v=w(b);if(w(a)<=v)var
e=0;else
if(a55(b))var
x=g(function(b){return GD(a,b)},b),s=GE([0,h],f,r),y=a51(x,s[2]),i=[0,s[1],y],e=1;else
var
e=0}if(!e)var
i=[0,c,0]}var
q=i,k=1}else
var
k=0;if(!k)var
q=[0,c,[0,GD(a,p)]];return q}catch(a){a=j(a);if(a===l)return[0,c,0];throw a}}function
pe(a){xf[1]=bz;if(xf[1]!==bz){var
f=T$(0),e=VB[1],c=e[4]===a[4]?1:0,d=c?e[7]===a[7]?1:0:c,g=d?b(aL[11],VC[1],f):d;if(!g){VB[1]=a;VC[1]=T$(0);xh[1]=xg[1];a52[1]=0;var
m=function(c,i){var
f=GE(a56,a,i[1]),g=0===f[2]?1:0;if(g){var
h=f[1];try{var
d=b(xg[22],h,xh[1]),e=d[1],k=0===e[0]?(d[1]=[0,[0,c,e[1]]],0):(d[1]=[0,[0,c,[0,e[1],0]]],0);return k}catch(a){a=j(a);if(a===l){xh[1]=p(xg[4],h,[0,[0,[0,c,0]]],xh[1]);return 0}throw a}}return g};a53[1]=[0,function(e){var
c=a[4];E$(function(b,a){return m([0,b],a[1])},c);function
b(a,d,c){function
e(q){var
e=aYQ(c);if(e){var
f=e[1];try{var
p=aZI(f[1],f[4]),g=p}catch(a){a=j(a);if(a!==l)throw a;var
g=0}var
h=g}else
var
h=1;if(h){var
i=d4(fQ[1],c);if(0===i[0]){var
k=i[1],n=k[4];rM(function(c,b){var
e=b[2];return m([1,a,c,e],[0,[1,d,c,e],b[1]])},n);var
o=k[7];return rM(function(e,c){var
f=c[2];return b([1,a,e,f],[1,d,e,f],c[1])},o)}return 0}return 0}T_[1]=[0,[0,a,e],T_[1]];return 0}jL(function(d,a){if(a){var
c=[0,gp(d)];return b(c,c,a[1][3])}return 0},m3);var
d=a[7];return E$(function(d,c){var
a=c[1];return b([0,d],a[1],a[2])},d)},0];return 0}}return 0}function
j_(b,a){pe(b);return Rt(a,function(a){return pe(bz)})}function
j$(a){return[0,a,0]}var
eW=[0,0],pf=[0,0],sH=[0,0];function
VD(d){var
a=d[1];if(typeof
a!=="number")switch(a[0]){case
0:case
9:var
b=a[1];if(b){var
c=b[1];return aY(c,sH[1])?0:(sH[1]=[0,c,sH[1]],0)}break}return 0}function
a57(e){for(;;){if(26<=pf[1])var
c=a(i+(pf[1]/26|0)),b=o(c6(1,dG(97+(pf[1]%26|0)|0)),c);else
var
b=c6(1,dG(97+pf[1]|0));pf[1]++;if(!aY(b,sH[1])){var
d=eW[1];if(!N(function(b){return function(a){return A(b,a[2])}}(b),d))return b}continue}}function
nc(e){try{var
b=mw(e,eW[1]);return b}catch(b){b=j(b);if(b===l){var
g=e[1];if(typeof
g==="number")var
d=0;else
switch(g[0]){case
0:case
9:var
m=g[1];if(m){var
n=m[1],h=[0,n],k=0;for(;;){var
p=eW[1];if(N(function(a){return A(h[1],a[2])},p)){h[1]=o(n,a(i+k));var
k=k+1|0;continue}var
c=h[1],d=1;break}}else
var
d=0;break;default:var
d=0}if(!d)var
c=a57(0);if(f(c,a58))eW[1]=[0,[0,e,c],eW[1]];return c}throw b}}function
nd(a){nc(a);return 0}function
VE(a){var
b=g(t,a),c=eW[1];eW[1]=d(by(function(a){return 1-a8(a[1],b)}),c);return 0}var
gx=[0,0],xi=[0,0],iR=[0,0];function
a59(a){var
b=1-a8(a,iR[1]),c=b?(iR[1]=[0,a,iR[1]],0):b;return c}function
sI(a){var
b=xi[1];return a8(c$(a),b)}function
ka(c){var
a=c$(c),b=1-sI(a);return b?(xi[1]=[0,a,xi[1]],VD(a)):b}function
VF(b){var
a=b[1];if(typeof
a!=="number")switch(a[0]){case
3:return 1-xe(j$(a[1])[2]);case
0:case
9:case
10:return 0}return 1}function
VG(b){var
a=0!==b[6]?1:0;if(a){var
c=b[1];return Z(function(f){var
a=aB(f[2]);if(typeof
a!=="number"&&1===a[0]){var
c=a[2],d=b[4];if(d){if(a[1])return 0===c?1:0;var
e=1===w(c)?1:0}else
var
e=d;return e}return 1},c)}return a}function
iS(l,k){var
d=l,e=k;for(;;){var
f=t(e),c=c$(f);if(a8(c,d))if(VF(f))return ka(c);var
b=[0,c,d],a=f[1];if(typeof
a==="number")return 0;else
switch(a[0]){case
1:iS(b,a[2]);var
d=b,e=a[3];continue;case
2:var
n=a[1];return m(function(a){return iS(b,a)},n);case
3:var
o=j$(a[1]),p=sG(o[2],a[2]);return m(function(a){return iS(b,a)},p);case
4:if(a8(c,gx[1]))return ka(c);if(wP(f))gx[1]=[0,c,gx[1]];var
h=a[2][1];if(h){var
q=ik(h[1][2]);return m(function(a){return iS(b,a)},q)}var
r=a6(a[1])[1];return m(function(a){var
c=0===bB(a[2])?1:0;return c?iS(b,a[3]):c},r);case
5:var
i=a[4];if(0===bB(a[2])){iS(b,a[3]);var
d=b,e=i;continue}var
d=b,e=i;continue;case
6:return ad(a5_);case
7:var
d=b,e=a[1];continue;case
8:if(a8(c,gx[1]))return ka(c);var
g=aw(a[1]);if(1-cT(g))gx[1]=[0,c,gx[1]];var
j=g[6];if(j)if(VG(g)){var
s=j[1][2];return m(function(a){return iS(b,a)},s)}return hh(function(a){return iS(b,a)},g);case
10:var
u=a[2];m(function(a){return ka(a)},u);var
d=b,e=a[1];continue;case
11:var
v=a[3];return m(function(a){return iS(b,a)},v);default:return VD(f)}}}function
cM(a){Vo(bz,a);return iS(0,a)}function
hm(a){sD[1]=c_;eW[1]=0;pf[1]=0;sH[1]=0;gx[1]=0;xi[1]=0;iR[1]=0;return 0}function
eX(a){hm(0);return cM(a)}function
xj(a){hm(0);return m(cM,a)}var
lI=[0,1];function
ca(a,e){var
h=t(e),c=c$(h);if(Ob(c,eW[1]))if(!a8(c,iR[1])){var
k=pg(a,h);return[10,k,nc(c)]}function
b(ak){var
b=h[1];if(typeof
b!=="number")switch(b[0]){case
0:var
Q=nc(h);return[10,pg(a,h),Q];case
1:var
D=b[2],o=b[1],R=b[3],aj=lI[1]?f(o,a5$)?1:0:0;if(aj)var
z=0;else
if(bC(o))var
z=0;else
var
A=a6b,z=1;if(!z)var
A=o;if(bC(o)){var
n=t(D)[1];if(typeof
n==="number")var
i=0;else
if(3===n[0]){var
u=n[2];if(u)if(u[2])var
i=0;else
if(Y(n[1],mV))var
B=ca(a,u[1]),i=1;else
var
i=0;else
var
i=0}else
var
i=0;if(!i)var
B=a6a;var
C=B}else
var
C=ca(a,D);return[1,A,C,ca(a,R)];case
2:return[9,fV(a,b[1])];case
3:var
E=j$(b[1]),F=E[2],G=sG(F,b[2]);if(xe(F))return ca(a,cQ(G));var
S=fV(a,G);return[3,hl(E[1]),S];case
4:return VH(a,b[1],b[2][1]);case
6:return ad(a6c);case
7:return ca(a,b[1]);case
8:var
e=aw(b[1]);if(e[4])var
T=e[1],p=d(by(function(a){return 0!==aB(a[2])?1:0}),T);else
var
p=e[1];var
v=d(by(function(b){var
a=aB(b[2]);if(typeof
a!=="number"&&0===a[0])return 1;return 0}),p),U=w(p),q=w(v)===U?1:0,H=e[6];if(H){var
I=H[1],J=I[2],K=I[1];if(VG(e)){var
L=j$(K),x=L[2],V=hl(L[1]),j=fV(a,sG(x,J));if(e[4])if(q)return xe(x)?cQ(j):[3,V,j];var
W=pg(a,c),X=q?0:[0,g(function(a){return a[1]},v)];if(j){var
r=j[1];if(typeof
r==="number")var
l=1;else
if(3===r[0])if(j[2])var
k=0,l=0;else
if(xe(x))var
M=[1,r[1],r[2]],k=1,l=0;else
var
k=0,l=0;else
var
l=1;if(l)var
k=0}else
var
k=0;if(!k)var
Z=fV(a,J),M=[1,hl(K),Z];return[11,W,M,e[4],X]}}var
N=e[4],_=N?q:N,O=1-_,$=O?pg(a,c):O,aa=g(function(g){var
c=g[1],b=aB(g[2]);if(typeof
b==="number")return[0,c,0,0];else
if(0===b[0]){var
d=b[1];if(d)return[0,c,0,[0,ca(a,d[1]),0]]}else{var
e=b[1],h=0===e?0:b[2]?0:1;if(!h){var
f=b[2];return e?[0,c,1,fV(a,f)]:[0,c,0,fV(a,f)]}}return[0,c,0,0]},p),ab=q?0:[0,g(function(a){return a[1]},v)];return[11,$,[0,aa],e[4],ab];case
9:return[10,0,nc(h)];case
10:var
P=b[2],y=b[1];if(P){var
s=g(t,P);if(0===s)return ca(a,y);var
ac=iR[1];m(a59,s);var
ae=g(nc,s),af=[12,ae,ca(a,y)];VE(s);iR[1]=ac;return af}return ca(a,y);case
11:var
ag=b[2],ah=g(function(a){return dH(a6d,Ez(a))},ag),ai=fV(a,b[3]);return[13,b_(0,b[1]),ah,ai]}return VH(a,h,0)}if(a8(c,iR[1])){var
i=iR[1];iR[1]=d(by(function(a){return c!==a?1:0}),i)}if(sI(c))if(VF(h)){nd(c);var
j=nc(c);return[0,b(0),j]}return b(0)}function
fV(b,a){return g(function(a){return ca(b,a)},a)}function
VH(a,i,c){if(c){var
d=c[1],b=d[2];if(b){var
j=pg(a,t(b[1])),k=fV(a,b[2]),e=j$(d[1]);if(0===e[2])return[2,j,hl(e[1]),k];throw[0,h,a6e]}return ad(a6f)}var
f=a6(i),l=0,m=f[1],n=R(function(a,b){var
c=bB(a[2]);if(typeof
c==="number")if(0===c)return[0,[0,a[1],a[3]],b];return b},m,l),o=e8(function(b,a){return Q(b[1],a[1])},n),g=VI(a,f[2],o);return[5,g[1],g[2]]}function
pg(b,a){if(b)var
c=bj(a),d=c?a[2]!==bm?1:0:c;else
var
d=b;return d}function
VI(d,c,b){if(b){var
e=b[1],h=ca(d,e[2]),i=[0,e[1],h],f=VI(d,c,b[2]);return[0,[0,i,f[1]],f[2]]}var
g=c[1];if(typeof
g==="number")var
a=0;else
switch(g[0]){case
3:var
a=a6h;break;case
0:case
9:var
a=[0,pg(d,c)];break;default:var
a=ad(a6g)}return[0,0,a]}function
VJ(c,d,b,a){return cV(b,ca(c,a))}function
aT(b,a){return VJ(0,0,b,a)}function
GF(b,a){eX(a);return VJ(1,0,b,a)}function
VK(a){var
b=0;return R(function(a,b){var
c=Vl(a),d=c$(c);if(c$(a)!==d){var
e=ca(1,a);return[0,[0,e,ca(1,c)],b]}return b},a,b)}function
GG(a){var
b=0;return v(G(function(a,c){var
b=t(c);return a8(b,a)?[0,ak([7,b]),a]:[0,b,a]},b,a))}function
VL(r,a){hm(0);var
b=GG(a[1]),s=a[5];if(s){var
B=lC(0,s[1]);m(function(a){var
b=a[1];if(typeof
b!=="number"&&0===b[0]){var
c=b[1];if(c)if(!f(c[1],a6k)){var
d=a8(a,B),e=d?(a[1]=a6l,0):d;return e}}return 0},b)}m(ka,b);m(cM,b);m(nd,g(c$,b));var
u=a[5];if(u){var
l=u[1],n=t(l)[1];if(typeof
n==="number")var
q=0;else
if(8===n[0]){var
w=aw(n[1]),x=w[6];if(x){var
y=x[1][1];if(0===y[0])if(E(r,y[1])){var
z=w.slice();z[6]=0;var
A=ak([8,z]),k=1}else
var
k=0;else
var
k=0}else
var
k=0;if(!k)var
A=l;var
o=A,q=1}else
var
q=0;if(!q)var
o=l;cM(o);var
d=[0,o]}else
var
d=0;var
i=a[3];if(typeof
i!=="number")if(0===i[0]){var
P=i[1];m(function(a){return cM(a[3])},P)}else{var
Q=i[1];m(function(a){m(cM,a[2]);return br(cM,a[3])},Q)}function
p(a){return d?[4,ca(0,d[1]),a]:a}var
j=a[3];if(typeof
j==="number")if(0===j)var
C=0===a[5]?1:0,e=C||(0===a[4]?1:0);else
var
e=0===a[5]?1:0;else
if(0===j[0])var
e=0===a[4]?1:0;else{var
v=0===a[4]?1:0;if(v)var
e=v;else
var
J=j[1],e=N(function(a){return 0!==a[3]?1:0},J)}var
D=a[6],F=a[1],G=aG(function(b,a){if(!e)if(bj(t(b)))return a6n;return lt(a)},F,D),H=aG(function(e,d){var
a=ca(0,e);if(typeof
a==="number")var
b=0;else
if(10===a[0])var
c=a[2],b=1;else
var
b=0;if(!b)var
c=a6m;return[0,c,d]},b,G),I=r[2],K=VK(b),h=a[3];if(typeof
h==="number")if(0===h)if(d)var
L=a[4],c=[0,ca(0,d[1]),L];else
var
c=a6o;else
var
c=[0,p(1),1];else
if(0===h[0])var
M=a[4],c=[0,p([6,g(a6j,h[1])]),M];else
var
O=a[4],c=[0,p([8,g(a6i,h[1])]),O];return[0,I,H,c[1],c[2],K]}function
a6i(a){var
b=a[1][2],c=a[3];if(c){var
d=eW[1];eW[1]=0;var
e=ca(0,c[1]),f=fV(0,a[2]);eW[1]=d;return[0,b,f,[0,e]]}return[0,b,fV(0,a[2]),0]}function
a6j(a){var
b=ca(0,a[3]);return[0,a[1][2],1===a[2]?1:0,b]}function
VM(f,e,d){var
a=sE(1),c=[5,VL(f,d),a];return b(j9[1],e,c)}function
VN(h,a,f){hm(0);var
i=b_(0,a[1]),b=GG(a[2]);m(ka,b);m(cM,b);m(nd,g(c$,b));m(cM,a[3]);br(cM,a[4]);var
j=g(function(b){var
a=ca(0,b);if(typeof
a!=="number"&&10===a[0])return a[2];return a6p},b),e=a[4],k=h[2];if(e){var
l=eW[1];eW[1]=0;var
n=ca(0,e[1]),o=fV(0,a[3]);eW[1]=l;var
c=[0,o,[0,n]]}else
var
c=[0,fV(0,a[3]),0];var
p=[0,k,i,j,c[1],c[2],a[5]];switch(f){case
0:var
d=0;break;case
1:var
d=1;break;default:var
d=2}return[2,p,d]}function
VO(d,c,a){var
e=VN(d,a,0);return b(j9[1],c,e)}function
VP(m,h){var
i=h[1],n=m[2];eX(i);var
l=ca(1,i),b=h[2];if(typeof
b==="number")var
c=0;else
if(0===b[0])var
a=b[1],d=[0,a[1],0],e=a[3]?d:[0,aWi,d],g=f(a[4],aWg)?[0,a[4],e]:e,k=a[5]?[0,aWh,g]:g,j=v(k),c=1;else
var
c=0;if(!c)var
j=0;return[6,n,l,j]}function
VQ(d,c,a){var
e=VP(d,a);return b(j9[1],c,e)}function
VR(b){var
c=bB(b[2]),d=t(b[3]);if(typeof
c==="number")if(0===c){var
a=d[1];if(typeof
a!=="number"&&10===a[0])return[0,a[1],a[2]]}return[0,d,0]}function
GH(j,i){var
a=i;for(;;)switch(a[0]){case
0:var
d=a[3],e=a[2],f=iO(d),k=gx[1];if(!a8(c$(f),k))if(Z(bj,j))if(!N(function(b){return function(a){return hk(b,a)}}(f),e))return m(cM,e);var
a=d;continue;case
1:var
c=a[1],g=t(c[1]),h=c$(g);if(a8(h,gx[1]))ka(g);else
gx[1]=[0,h,gx[1]];var
l=a6(dK(c[1]))[1];m(function(a){return cM(VR(a)[1])},l);var
n=c[2],o=function(b,a){return cM(a[3])};return b(av[10],o,n);default:cM(a[2]);var
a=a[3];continue}}function
xk(d,i,s){var
a=s;for(;;)switch(a[0]){case
0:var
l=a[3],u=iO(l),w=gx[1];if(!a8(c$(u),w))if(Z(bj,i)){var
x=fV(1,a[2]);return[0,hl(a[1]),x]}var
a=l;continue;case
1:var
e=a[1],m=t(e[1]),y=sI(m)?[0,[10,0,nc(c$(m))]]:0,z=a6(dK(e[1])),A=0,B=VK(i),C=G(function(b,a){return[0,[0,a[1],a[2]],b]},A,B),D=0,E=e[2],F=function(c,a,b){return[0,[0,c,a[1],a[2],a[3]],b]},I=v(p(av[11],F,E,D)),J=G(function(b,a){var
c=ca(d,a[4]);return[0,[2,a[1],1===a[2]?1:0,0===a[3]?1:0,c],b]},C,I),K=z[1],L=e[3];return[2,y,v(G(function(h,c){var
a=c[1];if(f(a,fO)){var
e=bB(c[2]),i=1-b(aL[3],a,L),g=VR([0,a,e,c[3]]),j=ca(d,g[1]);VE(g[2]);return[0,[1,a,0!==e?1:0,i,j],h]}return h},J,K))];default:var
n=a[2],g=a[1],N=lI[1]?f(g,a6q)?1:0:0;if(N)var
k=0;else
if(bC(g))var
k=0;else
var
o=a6s,k=1;if(!k)var
o=g;if(bC(g)){var
h=t(n)[1];if(typeof
h==="number")var
c=0;else
if(3===h[0]){var
j=h[2];if(j)if(j[2])var
c=0;else
if(Y(h[1],mV))var
q=j[1],c=1;else
var
c=0;else
var
c=0}else
var
c=0;if(!c)var
q=da([0,H(a6r)],0);var
r=q}else
var
r=n;var
M=ca(d,r);return[1,o,M,xk(d,i,a[3])]}}function
GI(b,a){hm(0);GH(0,a);return xa(b,xk(0,0,a))}function
VS(c,e){var
f=bj(t(c))?a6t:e,a=ca(1,c);if(typeof
a==="number")var
b=0;else
if(10===a[0])var
d=a[2],b=1;else
var
b=0;if(!b)var
d=a6u;return[0,d,f]}function
a6v(a){var
b=d(bM(1),a);return[0,d(bM(0),a),b]}function
VT(a){return g(a6v,a)}function
VU(e,a,d){var
b=GG(a[1]);hm(0);m(ka,b);GH(b,a[2]);var
c=iO(a[2]);m(cM,b);m(nd,g(c$,b));if(sI(c))nd(c$(c));var
f=0===a[4]?1:0,h=sE(d),i=xk(1,b,a[2]),j=aG(VS,b,VT(a[5]));return[0,f,e[2],j,i,h]}function
ph(d,c,a){var
e=VU(d,a,1);return b(j9[1],c,e)}function
VV(j,a,i){var
c=g(t,a[1]);hm(0);m(ka,c);GH(c,a[2]);var
e=iO(a[2]);m(cM,c);m(nd,g(c$,c));if(sI(e))nd(c$(e));var
d=j6(a[2]),k=a6(dK(d[1]))[1],f=N(function(c){var
a=c[1],e=A(a,fO),f=e||b(aL[3],a,d[3]);return 1-f},k);if(f)var
h=f;else
var
q=0,r=d[2],s=function(e,b,a){var
c=0===b[2]?1:0,d=c||a;return d},h=p(av[11],s,r,q);var
l=sE(i),n=xk(1,c,a[2]),o=aG(VS,c,VT(a[4]));return[1,h,j[2],o,n,l]}function
GJ(d,c,a){var
e=VV(d,a,1);return b(j9[1],c,e)}function
VW(e,c,b){var
a=xf[1];pe(d(e,a));var
f=d(c,b);pe(a);return f}function
pi(a){switch(a[0]){case
0:return[1,hl(a[1])];case
1:var
f=a[1],i=0,j=xf[1],k=function(a){return VX(j,i,a)};return[2,VW(function(a){return a},k,f)];case
2:var
c=a[3],b=a[2],d=a[1];if(b)var
g=b[1],e=VW(function(a){return iJ(a6w,d,g,a)},pi,c);else
var
e=pi(c);var
h=bt(pi,b);return[0,d[2],h,e];default:return[3,hl(a[1])]}}function
VX(l,q,k){if(k){var
a=k[1];if(0===q)var
g=0;else
if(1===a[0])if(2<=a[3])var
m=1,g=2;else
var
g=0;else
var
g=1;switch(g){case
0:if(1===a[0])if(2<=a[3])var
e=0;else{pe(l);var
m=1,e=1}else
var
e=0;break;case
1:var
e=0;break;default:var
e=1}if(!e){pe(l);var
m=0}var
c=k[2];switch(a[0]){case
5:if(c){var
h=c[2];if(h){var
i=h[2];if(i)var
f=[0,[0,c[1],[0,h[1],[0,i[1],0]]],i[2]],b=1;else
var
b=0}else
var
b=0}else
var
b=0;break;case
6:if(c){var
j=c[2];if(j)var
f=[0,[0,c[1],[0,j[1],0]],j[2]],b=1;else
var
b=0}else
var
b=0;break;default:var
b=0}if(!b)var
f=[0,0,c];var
n=f[2];switch(a[0]){case
0:var
d=[0,VP(a[1],a[2]),0];break;case
1:var
o=a[1];if(wb(o[2]))var
p=0;else{if(true)if(1===a[0])1===a[3];var
r=sE(a[3]),p=[0,[5,VL(o,a[2]),r],0]}var
d=p;break;case
2:var
d=[0,VN(a[1],a[2],a[3]),0];break;case
3:var
t=sE(a[3]),u=pi(a[2][1]),d=[0,[4,a[1][2],u,t],0];break;case
4:var
d=[0,VY(a[1],a[2]),0];break;case
5:var
d=[0,VU(a[1],a[2],a[3]),0];break;default:var
d=[0,VV(a[1],a[2],a[3]),0]}return s(d,VX(r7([0,a,f[1]],l),m,n))}return 0}function
VY(c,b){var
a=b[1],d=a?pi(a[1]):0;return[3,c[2],d]}function
pj(c,a){var
d=pi(a);return b(xb[1],c,d)}function
VZ(d,c,a){var
e=VY(d,a);return b(j9[1],c,e)}function
xl(p,o){var
f=t(p),g=t(o),h=f===g?1:0;if(h)var
i=h;else{var
c=f[1],d=g[1];if(typeof
c!=="number"&&3===c[0])if(typeof
d!=="number"&&3===d[0]){var
j=j$(c[1]),e=j[2],k=j$(d[1]),a=k[2];if(typeof
e==="number")var
b=0;else
if(0===e[0])if(typeof
a==="number")var
b=1;else
if(0===a[0]){if(e[1]===a[1])return 1;var
b=1}else
var
b=1;else
var
b=0;if(!b){var
r=typeof
a==="number"?0:1===a[0]?0:1;if(!r)if(Y(j[1],k[1])){var
l=sG(e,c[2]),m=sG(a,d[2]),q=w(m),n=w(l)===q?1:0;return n?qX(a54,l,m):n}}return 0}var
i=0}return i}function
sJ(b,c,a){if(xl(b,a))return aT(c,b);var
d=c$(a),f=c$(b)===d?Vl(a):a;return L(e(c,a6x),aT,b,aT,f)}function
sK(a,c,b){return Y(a,b)?cD(c,a):L(e(c,a6y),cD,a,cD,b)}function
xm(h,d,c,a){if(a){var
b=a[2];if(b){var
f=b[1],g=a[1];if(1-h)e(c,a6z);var
i=b[2],j=0,k=function(a,b){return xm(j,d,a,b)},l=f[2],m=f[1],n=function(a,b){return sJ(m,a,b)},o=g[2],p=g[1],q=function(a,b){return sJ(p,a,b)};return gN(e(c,a6A),q,o,d,n,l,k,i)}}return 0}function
xn(f,c){if(c){var
d=c[2];if(d){var
g=d[2],h=d[1],a=h[2],i=h[1],j=c[1],b=j[2],k=j[1];if(!g){var
l=bj(b)?0:bj(a)?0:1;if(!l)return 0}var
e=xn(f,g);if(!S0(b))if(!S0(a)){var
m=xl(k,b)?xl(i,a)?f?0===e?1:0:0:1:1;if(m)return[0,[0,k,b],[0,[0,i,a],e]]}return e}}return 0}function
V0(b,a){if(a){var
c=a[2],d=a[1],f=d[2],g=d[1];if(c){var
h=function(a,b){return sK(g,a,b)};return L(e(b,a6B),h,f,V0,c)}return sK(g,b,f)}return 0}function
V1(d){var
e=t(d),b=e[1];if(typeof
b!=="number"&&8===b[0]){var
c=b[1];if(0!==aw(c)[6]){var
a=aw(c),f=a[5],g=a[4],h=a[3],i=fR(0,fP(c)[2]);return bi(e[2],[8,[0,a[1],i,h,g,f,0]])}}return d}function
sL(c){var
a=c[1],b=V1(c[2]);cM(a);if(1-xl(a,b))cM(b);return[0,a,b]}function
V2(e,b){var
c=b[2],a=b[1],d=t(c)[1];if(typeof
d!=="number")switch(d[0]){case
4:case
8:if(e){cM(a);return[0,a,a]}break}return sL([0,a,c])}function
V3(b,a){if(a){var
c=a[1][1];d(e(b,a6C),c);var
f=a[2];return m(function(a){var
c=a[1];return d(e(b,a6D),c)},f)}return 0}function
GK(p,i){if(i){var
j=i[2];if(j){var
m=j[1][2],n=i[1][2],o=GK(p,j[2]);if(o)return o;var
d=n[1],b=m[1];if(typeof
d==="number")if(typeof
b==="number")var
a=1;else
switch(b[0]){case
0:var
a=0;break;case
3:var
a=3;break;default:var
a=1}else
switch(d[0]){case
3:var
a=typeof
b==="number"?3:0===b[0]?0:1;break;case
5:if(typeof
d[4][1]==="number")if(typeof
b==="number")var
c=1;else
switch(b[0]){case
0:var
a=0,c=0;break;case
5:if(typeof
b[4][1]==="number")var
k=A(d[1],b[1]),a=4,c=0;else
var
a=2,c=0;break;case
3:var
c=1;break;default:var
a=2,c=0}else
var
c=1;if(c){if(typeof
b==="number")var
g=1;else
switch(b[0]){case
3:var
g=1;break;case
0:var
a=0,g=0;break;default:var
a=2,g=0}if(g)var
a=3}break;case
8:if(typeof
b==="number")var
a=2;else
switch(b[0]){case
0:var
a=0;break;case
8:var
a=3;break;default:var
a=2}break;case
0:var
a=3;break;default:var
a=0}switch(a){case
0:var
e=typeof
b==="number"?0:0===b[0]?2:0;break;case
1:var
e=0;break;case
2:var
e=1;break;case
3:var
e=2;break;default:var
e=3}switch(e){case
0:if(typeof
d==="number")var
l=1;else
if(3===d[0])var
l=1;else
var
f=0,l=0;if(l)var
f=typeof
b==="number"?0:5===b[0]?1:0;break;case
1:var
f=0;break;case
2:var
f=1;break;default:var
f=2}switch(f){case
0:var
k=0;break;case
1:var
k=1;break}return k?[0,[0,n,m]]:0}throw[0,h,a6E]}return 0}function
V4(H,G,f){if(G){var
I=G[1],m=I[2],h=I[1],g=h[1],a=m[1];if(typeof
g==="number")if(typeof
a==="number")var
c=6;else
switch(a[0]){case
0:var
c=0;break;case
5:var
c=1;break;case
3:var
c=5;break;default:var
c=6}else
switch(g[0]){case
0:if(typeof
a==="number")var
c=4;else
switch(a[0]){case
2:var
c=a[1]?4:2;break;case
3:var
z=a[1];if(H){var
M=oN(z);if(h[2]<M)return b(e(f,a6Q),cD,z)}var
c=4;break;case
9:var
c=3;break;default:var
c=4}break;case
2:if(g[1])var
c=0;else
if(typeof
a==="number")var
c=6;else
switch(a[0]){case
5:var
c=1;break;case
0:var
c=2;break;default:var
c=6}break;case
3:var
B=g[1];if(typeof
a==="number")var
c=5;else
switch(a[0]){case
0:if(H){var
O=oN(B);if(m[2]<O)return b(e(f,a6S),cD,B)}var
c=0;break;case
5:var
c=1;break;default:var
c=6}break;case
8:if(typeof
a==="number")var
c=6;else
switch(a[0]){case
8:var
C=aw(g[1]),D=aw(a[1]),q=C[1],E=C[4],l=D[1],t=D[4];if(q)if(q[2])var
i=0;else
if(0===E)var
i=0;else
if(l)if(l[2])var
i=1;else
if(0===t)var
i=1;else{var
F=q[1][1];if(A(F,l[1][1]))return d(e(f,a6U),F);var
i=1}else
var
i=0;else{if(0!==E){if(!l)if(0!==t)return e(f,a6W);return b(e(f,a6V),V3,l)}var
i=0}if(!i)if(!l)if(0!==t)return b(e(f,a6T),V3,q);return 0;case
0:var
c=0;break;case
5:var
c=1;break;default:var
c=6}break;case
9:if(typeof
a==="number")var
c=6;else
switch(a[0]){case
5:var
c=1;break;case
0:var
c=3;break;default:var
c=6}break;default:var
c=0}switch(c){case
0:if(typeof
a==="number")var
u=1;else
if(0===a[0])var
j=1,u=0;else
var
u=1;if(u)if(typeof
g==="number")var
j=0;else
if(5===g[0])var
w=g[1],j=2;else
var
j=0;break;case
1:var
j=0;break;case
2:return e(f,a6P);case
3:var
N=rE(h)?h:m;return b(e(f,a6R),aT,N);case
4:var
j=1;break;case
5:var
K=0===m[1]?a6M:a6O;return d(e(f,a6N),K);default:var
j=3}switch(j){case
0:if(typeof
a==="number")var
o=1;else
if(5===a[0])var
w=a[1],o=0;else
var
o=1;break;case
1:var
x=bj(h)?[0,h,m]:[0,m,h],s=x[2],y=x[1];return a1g(bz,y,s)?L(e(f,a6J),aT,y,aT,s):p(e(f,a6L),aT,s,a6K);case
2:var
o=0;break;default:var
o=1}if(!o)if(A(w,fO))return e(f,a6I);if(typeof
g==="number")var
k=0;else
switch(g[0]){case
5:var
r=g[1];if(typeof
g[4][1]==="number")if(typeof
a==="number")var
n=1;else
switch(a[0]){case
5:if(typeof
a[4][1]==="number"){if(A(r,a[1]))return d(e(f,a6H),r);var
k=1,n=0}else
var
k=1,n=0;break;case
3:var
n=1;break;default:var
k=1,n=0}else
var
n=1;if(n){if(typeof
a==="number")var
v=1;else
if(3===a[0])var
v=1;else
var
k=1,v=0;if(v)return d(e(f,a6G),r)}break;case
3:var
k=0;break;default:var
k=1}if(!k)if(typeof
a!=="number"&&5===a[0]){var
J=a[1];return d(e(f,a6F),J)}return 0}return 0}function
xo(h,g){var
b=h,a=g;for(;;){switch(b[0]){case
0:if(0===a[0]){var
c=a[1],d=b[1],e=lq(d,c),f=e?1-E(d,c):e;return f?(Vv(d),Vv(c)):f}break;case
1:if(1===a[0])if(A(b[2],a[2])){var
b=b[1],a=a[1];continue}break;default:if(2===a[0]){xo(b[1],a[1]);var
b=b[2],a=a[2];continue}}return 0}}function
V5(d,c){var
a=t(d)[1],b=t(c)[1];if(typeof
a!=="number"&&3===a[0])if(typeof
b!=="number"&&3===b[0]){var
e=j$(b[1])[1];return xo(j$(a[1])[1],e)}return 0}function
V6(e){var
a=e;for(;;){if(a){var
b=a[2];if(b){var
c=b[1],d=a[1];V5(d[1],c[1]);V5(d[2],c[2]);var
a=b[2];continue}}return 0}}function
a6X(f,d,o,n,m){hm(0);V6(d);var
a=g(function(a){var
b=V1(a[2]);return[0,a[1],b]},d),i=GK(f,a);if(a){var
b=a[2];if(b)try{var
c=xn(0===i?1:0,b[2]),k=V2(0===c?1:0,a[1]),l=V2(0===c?1:0,b[1]);lI[1]=1;var
p=g(sL,c),q=function(a){return V4(f,i,a)},r=0,s=function(a,b){return xm(r,a6Y,a,b)},t=l[2],u=l[1],v=function(a,b){return sJ(u,a,b)},w=k[2],x=k[1],y=function(a,b){return sJ(x,a,b)};Ks(e(n,a6Z),o,y,w,m,v,t,s,p,q);lI[1]=1;var
z=0;return z}catch(a){a=j(a);lI[1]=1;throw a}}throw[0,h,a60]}function
cN(f,e,a,d,c,b){var
g=a?a[1]:1;return j_(e,function(a){return a6X(g,d,c,f,b)})}function
V7(b,g,f,e,a){lI[1]=1;V6(a);try{if(a){var
c=a[2];if(c){if(b){var
i=xn(g,c[2]);xm(b,f,e,[0,a[1],[0,c[1],i]])}else
xm(b,f,e,xn(g,a));lI[1]=1;var
h=0,d=1}else
var
d=0}else
var
d=0;if(!d)var
h=0;return h}catch(a){a=j(a);lI[1]=1;throw a}}function
a68(c,b,a){return Ve(0,c,b,a)}function
V8(c,a){if(typeof
a==="number")return e(c,a6_);else
switch(a[0]){case
0:return e(c,a6$);case
1:var
f=function(a){return e(a,a7a)},g=function(a){return e(a,a7b)};return cN(c,a[1],a7c,a[2],g,f);case
2:var
h=a[3],i=a[2],j=function(a){return bH(e(c,a7e),GI,i,a7d,GI,h)};return j_(a[1],j);case
3:var
k=function(a){return e(a,a7f)},l=function(a){return e(a,a7g)};return cN(c,a[1],a7h,a[2],l,k);case
4:var
m=a[1],n=function(a){return e(a,a7i)},o=function(a){return d(e(a,a7j),m)};return cN(c,a[2],a7k,a[3],o,n);case
5:var
p=a[1],q=function(a){return e(a,a7l)},r=function(a){return d(e(a,a7m),p)};return cN(c,a[2],a7n,a[3],r,q);case
6:var
s=a[1];return d(e(c,a7o),s);case
7:var
t=a[1];return d(e(c,a7p),t);case
8:var
u=a[1];return d(e(c,a7q),u);case
9:var
v=a[1];return d(e(c,a7r),v);case
10:var
w=a[1];return d(e(c,a7s),w);case
11:var
x=a[2],y=a[1];return b(e(c,a7t),y,x);case
12:var
z=a[1];return d(e(c,a7u),z);case
13:var
A=a[1];return d(e(c,a7v),A);default:var
B=a[1];return d(e(c,a7w),B)}}function
GL(c,a){if(a){var
d=function(c,a){return m(function(a){return b(e(c,a7x),V8,a)},a)},f=a[2],g=a[1];return L(e(c,a7y),V8,g,d,f)}return 0}var
xp=O([I,a7z,0]);function
a7A(g,f,d,c){if(a1E(g,1,d[1],c[1])){var
b=d[2],a=c[2];if(typeof
b!=="number"&&0===b[0]){var
e=b[1];if(typeof
a!=="number"&&0===a[0]){if(E(e,a[1]))return 0;throw xp}return[2,f,e]}if(typeof
a!=="number"&&0===a[0])throw xp;return 0}throw xp}function
V9(d,b){var
a=b[1];if(typeof
a!=="number"&&3===a[0])if(0===a[1][0]){var
c=aJ(d,b)[1];if(typeof
c!=="number")switch(c[0]){case
4:case
8:return 1}return 0}return 0}function
GM(g,f,c,h){function
a(a){if(4===a)return 0;function
i(r,a){function
b(a){return e(r,a)}if(typeof
a==="number")switch(a){case
0:return b(a7B);case
1:return b(a7C);case
2:return b(a7D);case
3:return b(a7E);case
4:return 0;default:return b(a7F)}else
switch(a[0]){case
0:var
h=a[1][2];return d(b(a7G),h);case
1:var
i=a[1][2];return d(b(a7H),i);case
2:var
j=a[1][2];return d(b(a7I),j);case
3:var
k=a[3][2],l=a[2][2],m=a[1];return p(b(a7J),m,l,k);case
4:var
n=a[1]?f:g,o=a[2][2];return p(b(a7K),o,n,c);default:var
q=a[1]?f:g;return p(b(a7M),q,c,a7L)}}return b(e(h,a7N),i,a)}return function(b){return m(a,b)}}function
V_(aO,b,a$,c,aN,a){var
ba=aO?aO[1]:0;if(c[2]!==a[2])return a7O;var
a1=a[4];if(0===c[4])if(0===a1)var
aa=0;else{var
aj=0===a[3]?1:0;if(aj)var
a2=0===a[5]?1:0,al=a2||(0!==c[3]?1:0);else
var
al=aj;var
aP=al,aa=1}else
var
aa=0;if(!aa)var
aP=1;if(aP){var
p=c[3],e=a[3];if(typeof
e==="number")if(0===e)var
q=0,ab=1;else
var
ab=0;else
var
ab=0;if(!ab){if(typeof
p==="number")if(1===p)if(typeof
e==="number")var
q=0,h=1;else
var
h=0;else
var
h=0;else
if(0===p[0])if(typeof
e==="number")var
h=0;else
if(0===e[0]){var
aV=e[2],X=1,C=p[1],o=e[1];for(;;){if(C){var
D=C[1];if(o){var
Y=o[1],aM=Y[1],F=D[1];if(f(F[2],aM[2]))var
r=[0,[3,X,F,aM],0];else
if(J(D[2],Y[2]))var
r=[0,[1,F],0];else{if(dc(b,1,[0,D[3],c[1]],[0,Y[3],a[1]])){var
X=X+1|0,C=C[2],o=o[2];continue}var
r=[0,[0,F],0]}}else
var
r=[0,[4,0,D[1]],0]}else
var
r=o?[0,[4,1,o[1][1]],0]:0;if(0===r)if(E(p[2],aV))var
ac=0;else
var
aW=[0,[5,1===aV?1:0],0],ac=1;else
var
ac=0;if(!ac)var
aW=r;var
q=aW,h=1;break}}else
var
h=0;else{var
aX=p[1];if(typeof
e==="number")var
ad=1;else
if(0===e[0])var
ad=1;else{var
aY=e[1],aZ=function(e,d,c,a){return m(function(e){return T7(d,b,c,a,e[1][2])},e)};if(0===c[4])var
ae=0;else
if(1===a[4])var
ae=0;else
var
a0=2,ae=1;if(!ae)var
a0=0;aZ(aX,a0,a$,c);if(ba)aZ(aY,0,aN[2],a);var
U=1,A=aX,l=aY;for(;;){if(A){var
B=A[1];if(l){var
V=l[1],W=V[3],aH=V[2],aI=V[1],aK=B[3],aL=B[2],n=B[1];if(f(n[2],aI[2]))var
i=[0,[3,U,n,aI],0];else{var
a_=w(aH);if(w(aL)!==a_)var
i=[0,[2,n],0];else{if(aK)if(W)if(dc(b,1,[0,aK[1],0],[0,W[1],0]))var
I=0;else
var
i=[0,[0,n],0],I=2;else
var
I=1;else
var
I=W?1:0;switch(I){case
0:if(Ru(function(e,d){return dc(b,1,[0,e,c[1]],[0,d,a[1]])},aL,aH)){var
U=U+1|0,A=A[2],l=l[2];continue}var
i=[0,[0,n],0];break;case
1:var
i=[0,[0,n],0];break}}}}else
var
i=[0,[4,0,B[1]],0]}else
var
i=l?[0,[4,1,l[1][1]],0]:0;var
q=i,h=1,ad=0;break}}if(ad)var
h=0}if(!h)var
q=a7U}if(0===q){var
aQ=c[5],_=a[5];if(_)if(aQ){var
v=a[1],aR=_[1],x=c[1],G=aQ[1],bb=a[4],a3=aJ(b,G),a4=aJ(b,aR),z=a3[1],k=a4[1];if(typeof
z==="number")var
d=0;else
switch(z[0]){case
4:if(typeof
k==="number")var
d=0;else
if(4===k[0]){var
an=k[1];if(V9(b,a6(an)[2])){var
ao=a6(an),ap=dc(b,1,[0,G,x],[0,ao[2],v]);if(ap){var
aq=a6(z[1]),ar=aq[2][1];if(typeof
ar==="number")var
ag=0;else
switch(ar[0]){case
0:case
3:var
ag=0;break;default:var
M=0,ag=1}if(!ag)var
M=1;if(M){var
as=iN(aq[1],ao[1]),at=0===as[3]?1:0;if(at)var
a5=as[1],au=oj(g(function(a){return[0,a[3],a[5]]},a5)),a7=s(v,au[2]),y=dc(b,1,s(x,au[1]),a7),d=1,af=0,ah=0;else
var
av=at,ah=1}else
var
av=M,ah=1;if(ah)var
ax=av,af=1}else
var
ax=ap,af=1;if(af)var
y=ax,d=1}else
var
d=0}else
var
d=0;break;case
8:if(typeof
k==="number")var
d=0;else
if(8===k[0]){var
ay=k[1];if(V9(b,fP(ay))){var
N=aw(z[1]),O=aw(ay),az=dc(b,1,[0,G,x],[0,O[2],v]);if(az){var
aA=N[2][1];if(typeof
aA==="number")var
ai=0;else
switch(aA[0]){case
0:case
3:var
ai=0;break;default:var
P=0,ai=1}if(!ai)var
P=1;if(P){var
Q=o6(N[1],O[1]),aC=1-O[4];if(aC)var
R=aC;else
var
aG=N[4],R=aG?0===m5(0,Q[1])?1:0:aG;if(R){var
a8=Q[2],aD=Z(function(b){var
a=aB(b[2]);if(typeof
a!=="number"&&0===a[0])return 0;return 1},a8);if(aD){var
u=[0,dV(x,v)],a9=Q[3],aE=Z(function(e){var
c=aB(e[2]),a=aB(e[3]);if(typeof
c==="number"){var
n=typeof
a==="number"?0:1===a[0]?0:1;if(!n)return 1}else
if(0===c[0]){var
f=c[1];if(f){if(typeof
a==="number")var
b=1;else
if(0===a[0]){var
g=a[1];if(g)var
h=g[1],b=0;else
var
b=1}else
if(0===a[1]){var
d=a[2];if(d)if(d[2])var
b=1;else
var
h=d[1],b=0;else
var
b=1}else
var
b=1;if(!b){u[1]=[0,[0,f[1],h],u[1]];return 1}}else{var
o=typeof
a==="number"?1:0===a[0]?a[1]?1:0:0===a[1]?1:a[2]?1:0;if(!o)return 1}}else{var
i=c[2];if(typeof
a==="number")var
k=0;else
if(0===a[0])var
k=0;else{var
j=a[2],l=w(j);if(w(i)===l)if(E(c[1],a[1])){var
m=u[1];u[1]=s(dV(i,j),m);return 1}var
k=1}}return 0},a9);if(aE)var
aF=oj(u[1]),y=dc(b,1,aF[1],aF[2]),d=1,K=0,L=0;else
var
S=aE,L=1}else
var
S=aD,L=1}else
var
S=R,L=1;if(L)var
T=S,K=1}else
var
T=P,K=1}else
var
T=az,K=1;if(K)var
y=T,d=1}else
var
d=0}else
var
d=0;break;default:var
d=0}if(!d)var
am=function(a){var
c=dc(b,1,[0,a,x],[0,aR,v]);if(c)var
d=c;else{var
e=0===bb?1:0;if(e)try{var
f=am(Gf(b,aJ(b,a)));return f}catch(a){a=j(a);if(a===cL)return 0;throw a}var
d=e}return d},y=am(G);var
H=y?0:a7Q}else
var
bf=ak([3,[0,aN],a[1],[0,0]]),bg=dc(b,1,c[1],a[1])?dc(b,0,[0,bf,0],[0,_[1],0])?0:a7R:a7S,H=bg;else
var
H=dc(b,1,c[1],a[1])?0:a7T;if(0===H){var
aS=0===a[4]?1:0;if(aS)var
$=aS;else
var
aU=0===a[3]?1:0,$=aU?0===a[5]?1:0:aU;var
aT=1===a[3]?1:0,bc=aT?0===a[5]?1:0:aT,bd=dV(c[6],a[6]),be=a[1];return qX(function(v,g){var
h=g[2],i=g[1];function
a(b,a){var
c=1-b,d=c||a;return d}var
j=lt(i),k=j[2],l=j[1],m=lt(h),n=m[2],o=m[1];if($)var
p=a(l,o),b=p?a(k,n):p;else{if(bc)var
f=0;else
if(1-bj(t(v)))var
f=0;else
var
b=1,f=1;if(!f)var
u=E(l,o),b=u?E(k,n):u}if(b){var
c=Fb(i),d=Fb(h),q=a(d[1],c[1]);if(q){var
r=a(d[2],c[2]);if(r)var
s=a(d[3],c[3]),e=s?a(d[4],c[4]):s;else
var
e=r}else
var
e=q;return a($,e)}return b},be,bd)?0:a7P}return H}return q}return a7V}function
xq(b,a){if(0===a[0])try{var
c=xq(b,rZ(a[1],b));return c}catch(b){b=j(b);if(b===l)return a;throw b}return a}function
kb(b,e,d){var
a=xq(b,e);switch(a[0]){case
1:return[1,sM(b,a[1],d)];case
2:var
c=a[1];if(f(c[2],a7W)){var
g=kb(b,a[3],[2,d,[0,c]]);return[2,c,a[2],g]}break}return a}function
sM(e,d,c){if(d){var
a=d[1];switch(a[0]){case
1:var
b=a[2],l=a[1],q=b[4],r=b[3];if(b[5])if(0===q)if(typeof
r==="number")var
g=0;else
var
i=b,g=1;else
var
i=b,g=1;else
var
g=0;if(!g){var
m=[0,ak([3,[1,c,l[2],dt],b[1],[0,0]])];if(0===b[3]){var
h=b.slice();h[4]=1;h[5]=m;var
n=h}else{var
o=b.slice();o[5]=m;var
n=o}var
i=n}var
s=sM(e,d[2],c);return[0,[1,l,i,a[3]],s];case
3:var
p=a[2],j=a[1],t=GN(e,p,[1,c,j[2],dt]),u=d[2],v=sM(lA(0,j,p,e),u,c);return[0,[3,j,t,a[3]],v];case
4:var
f=a[2],k=a[1],w=f[1]?f:[0,[0,[0,[1,c,k[2],dt]]],f[2],f[3]],x=d[2];return[0,[4,k,w],sM(r5(k,f,e),x,c)];default:return[0,a,sM(e,d[2],c)]}}return 0}function
GN(c,a,b){var
d=a[3],e=a[2];return[0,kb(c,a[1],b),e,d]}TX[1]=kb;function
a7X(c,b,a){function
i(c,d,k){var
a=k;for(;;)switch(a[0]){case
0:var
f=a[1];if(fN(b,f)){var
a=rZ(f,c);continue}return a;case
1:return[1,D(c,d,a[1])];case
2:var
g=a[2],h=a[1];switch(d){case
0:var
e=1;break;case
1:var
e=0;break;default:var
e=2}var
l=a[3],m=i(iJ(a7Y,h,v$(g),c),d,l);return[2,h,bt(function(a){return i(c,e,a)},g),m];default:var
j=a[1];if(fN(b,j)){var
a=iG(j,c)[1];continue}return a}}function
D(c,n,r){if(r){var
a=r[1],e=D(c,n,r[2]);switch(a[0]){case
0:var
o=a[2],V=o[4],W=o[3],X=o[2],Y=[0,Vp(c,b,o[1]),X,W,V];return[0,[0,a[1],Y],e];case
1:var
E=a[1],f=a[2],F=0===n?1:0,Z=a[3];try{var
H=f[1],z=g(function(a){return ci(c,b,a)},H);try{var
h=f[3];if(typeof
h==="number")var
p=0===h?0:1;else
if(0===h[0])var
K=h[2],L=h[1],p=[0,g(function(a){var
d=a[5],e=a[4],f=ci(c,b,a[3]);return[0,a[1],a[2],f,e,d]},L),K];else
var
M=h[1],p=[1,g(function(a){var
d=a[5],e=a[4],f=a[3],h=bt(function(a){return ci(c,b,a)},f),i=a[2],j=g(function(a){return ci(c,b,a)},i);return[0,a[1],j,h,e,d]},M)];var
A=p}catch(a){a=j(a);if(a===l)if(F)var
A=0,u=1;else
var
u=0;else
var
u=0;if(!u)throw a}try{var
C=f[5],J=C?[0,a17(E,z,ci(c,b,C[1]))]:0,k=J}catch(a){a=j(a);if(a===l)if(F)var
k=0,v=1;else
var
v=0;else
var
v=0;if(!v)throw a}lG(0);if(k)if(Fd(k[1]))var
B=0,w=1;else
var
w=0;else
var
w=0;if(!w)var
B=f[4];var
I=[0,z,f[2],A,B,k,f[6],0,f[8],f[9]]}catch(a){a=j(a);if(a===l){lG(0);throw l}throw a}return[0,[1,E,I,Z],e];case
2:var
d=a[2],_=a[3];try{if(fN(b,d[1])){var
m=t(ci(c,b,ak([3,d[1],d[2],[0,0]])))[1];if(typeof
m==="number")var
x=0;else
if(3===m[0])var
q=[0,m[1],m[2]],x=1;else
var
x=0;if(!x)throw l}else
var
S=d[2],T=g(function(a){return ci(c,b,a)},S),q=[0,d[1],T];var
N=d[3],O=g(function(a){return ci(c,b,a)},N),P=d[4],Q=bt(function(a){return ci(c,b,a)},P);lG(0);var
R=[0,q[1],q[2],O,Q,d[5],d[6],d[7]]}catch(a){a=j(a);if(a===l){lG(0);throw l}throw a}return[0,[2,a[1],R,_],e];case
3:var
s=a[2],$=a[3],aa=s[3],ab=s[2],ac=[0,i(c,n,s[1]),ab,aa];return[0,[3,a[1],ac,$],e];case
4:var
G=a[1];try{var
ad=[0,[4,G,U(c,a[2])],e];return ad}catch(a){a=j(a);if(a===l){if(0===n)return[0,[4,G,[0,0,0,y]],e];throw l}throw a}case
5:var
ae=a[3],af=a18(c,b,a[2]);return[0,[5,a[1],af,ae],e];default:var
ag=a[3],ah=a1_(c,b,a[2]);return[0,[6,a[1],ah,ag],e]}}return 0}function
U(b,a){var
c=a[3],d=a[2],e=a[1],f=2;return[0,bt(function(a){return i(b,f,a)},e),d,c]}return i(c,0,a)}function
V$(e,b,a){if(a[5])return a;try{var
f=bg(b,e);if(f[2]!==a[2])var
c=a;else{var
d=a.slice();d[5]=[0,ak([3,b,a[1],[0,0]])];var
c=d}return c}catch(b){b=j(b);if(b===l)return a;throw b}}function
Wa(d,c,a){if(1===a[0]){var
b=a[1];return[1,g(function(a){switch(a[0]){case
1:var
e=a[1],g=a[3];return[1,e,V$(d,[1,c,e[2],dt],a[2]),g];case
3:var
b=a[2],f=a[1],h=a[3],i=b[3],j=b[2];return[3,f,[0,Wa(d,[1,c,f[2],dt],b[1]),j,i],h];default:return a}},b)]}return a}function
GO(m,e,l,k){var
d=m,b=l,a=k;for(;;){if(a){var
c=a[1];switch(c[0]){case
0:var
g=c[2][2];if(typeof
g==="number")var
f=0;else
if(0===g[0])var
h=b,f=1;else
var
f=0;if(!f)var
h=b+1|0;var
b=h,a=a[2];continue;case
1:var
n=GO(d,e,b,a[2]);return[0,[1,e,c[1][2],dt],n];case
3:var
i=c[2],j=c[1],o=a[2],p=GO(lA(0,j,i,d),e,b+1|0,o);return s(Wb(d,[1,e,j[2],b],i[1]),p);case
4:var
q=a[2],d=r5(c[1],c[2],d),a=q;continue;case
6:var
a=a[2];continue;default:var
b=b+1|0,a=a[2];continue}}return 0}}function
Wb(a,d,c){var
b=xq(a,c);return 1===b[0]?GO(a,d,0,b[1]):0}function
GP(b,e){var
a=e;for(;;)switch(a[0]){case
0:try{var
c=wC(a[1],b)[1];if(c){var
f=GP(b,c[1]);return f}throw a$}catch(a){a=j(a);if(a===l)throw a$;throw a}case
1:var
g=a[1];return d(a7Z(b),g);case
2:var
a=a[3];continue;default:return 0}}function
a7Z(g){function
a(d){switch(d[0]){case
1:var
c=d[2],f=c[3];if(c[5]){if(typeof
f==="number")if(0===f)if(0===c[4])var
e=1,b=0;else
var
b=1;else
var
b=1;else
var
b=1;if(b)var
a=1,e=0}else
var
e=1;if(e)var
a=0;break;case
3:return GP(g,d[2][1]);case
4:var
a=0;break;default:var
a=1}if(a)return 0;throw a$}return function(b){return m(a,b)}}function
Wc(b,a){try{GP(b,a);var
c=0;return c}catch(a){a=j(a);if(a===a$)return 1;throw a}}var
Wd=[0,function(b,a){return Y(b,a)?0:cp(b,a)}],kc=jF(Wd),GQ=g7(Wd),pk=jF([0,cp]);function
We(a){if(0===a[0])return kc[1];var
c=a[1],d=We(c);return b(kc[4],c,d)}function
GR(d){var
a=d;for(;;)switch(a[0]){case
0:return kc[1];case
1:var
a=a[1];continue;default:var
c=a[2],e=GR(c),f=GR(a[1]),g=b(kc[7],f,e),h=We(c),i=b(kc[7],h,g);return b(kc[4],c,i)}}function
Wf(c,f){var
a=f;for(;;)try{var
g=[0,b(GQ[22],a,c)];return g}catch(b){b=j(b);if(b===l){if(1===a[0]){var
d=a[1],e=Wf(c,d);if(Y(d,e))return a;var
a=[1,e,a[2],a[3]];continue}return a}throw b}}function
Wg(c,a,g){var
d=Wf(c,g);if(0===d[0]){var
e=d[1];try{var
h=Wg(c,a,lr(e,a)),f=h}catch(a){a=j(a);if(a!==l)throw a;var
f=pk[1]}return b(pk[4],e,f)}return pk[1]}function
Wh(b,e,d){var
a=d;for(;;)switch(a[0]){case
1:return[1,xr(b,e,a[1])];case
3:var
c=o0(b,a);if(E(c,a))return a;var
a=c;continue;default:return a}}function
xr(e,d,c){if(c){var
a=c[1];switch(a[0]){case
3:var
f=a[2],g=a[1],j=f[1];if(3===j[0])if(b(pk[3],g,d))var
h=f[1],i=1;else
var
i=0;else
var
i=0;if(!i)var
h=Wh(e,d,j);var
m=c[2],n=xr(iJ(0,g,h,e),d,m);return[0,[3,g,[0,h,f[2],f[3]],a[3]],n];case
4:var
k=a[2],l=a[1],o=c[2];return[0,[4,l,k],xr(r5(l,k,e),d,o)];default:return[0,a,xr(e,d,c[2])]}}return 0}function
Wi(n,g){var
c=[0,kc[1]],e=[0,GQ[1]],f=[0,c_];function
h(a){var
d=c[1],e=GR(a);c[1]=b(kc[7],e,d);return 0}function
i(g,a){b(rG[2],g,a);if(3===a[0]){var
c=a[2][1],d=a[1];switch(c[0]){case
1:var
h=c[1];return m(function(a){if(3===a[0]){var
b=a[1];e[1]=p(GQ[4],[1,[0,d],b[2],-1],b,e[1]);return 0}return 0},h);case
3:f[1]=iA(d,c[1],f[1]);return 0}}return 0}var
a=rG.slice();a[2]=i;a[15]=h;b(a[10],a,g);b(a[10],wg,g);var
j=pk[1],k=c[1];function
l(a){var
b=Wg(e[1],f[1],a);return d(pk[7],b)}return Wh(n,p(kc[14],l,k,j),g)}var
cj=O([I,a70,0]);function
a71(d,g,f,c,a,b){a0B(a,b);FJ(d,c[2],a);var
e=wu(f,b);try{var
h=a7A(d,c,a,e);return h}catch(b){b=j(b);if(b===xp)throw[0,cj,[0,[0,g,d,[1,c,a,e]],0]];throw b}}function
Wj(c,d,j,i,a,b,h){var
k=d?d[1]:c;oY(c,a[2],b);var
e=mY(i,h),f=V_(0,c,a[2],b,a,e),g=0!==f?1:0;if(g)throw[0,cj,[0,[0,j,k,[2,a,b,e,f]],0]];return g}var
GS=O([I,a72,0]);function
Wk(c,d,b){try{var
a=rZ(b,c);return a}catch(a){a=j(a);if(a===l)throw[0,cj,[0,[0,d,c,[9,b]],0]];throw a}}function
Wl(c,d,b){try{var
a=iG(b,c)[1];return a}catch(a){a=j(a);if(a===l)throw[0,cj,[0,[0,d,c,[10,b]],0]];throw a}}function
a73(a){switch(a[0]){case
0:return a74;case
1:return a75;case
2:return a76;case
3:return a77;case
4:return a78;case
5:return a79;default:return a7_}}function
Wm(a){switch(a[0]){case
0:var
b=a[1];return[0,b,a[2][3],[0,b[2]]];case
1:var
c=a[1];return[0,c,a[2][8],[1,c[2]]];case
2:var
d=a[1];return[0,d,a[2][6],[2,d[2]]];case
3:var
e=a[1];return[0,e,a[2][3],[3,e[2]]];case
4:var
f=a[1];return[0,f,a[2][3],[4,f[2]]];case
5:var
g=a[1];return[0,g,a[2][6],[5,g[2]]];default:var
h=a[1];return[0,h,a[2][5],[6,h[2]]]}}function
GT(b){switch(b[0]){case
0:var
c=b[2][2],a=typeof
c==="number"?1:0===c[0]?0:1;break;case
1:case
4:case
6:var
a=0;break;default:var
a=1}return a?1:0}function
a7$(c,i){var
b=0,a=c;for(;;){if(a){var
d=a[1],e=d[1]===b?1:0;if(e){var
f=0===d[2]?1:0;if(f){var
b=b+1|0,a=a[2];continue}var
g=f}else
var
g=e;var
h=g}else
var
h=1;return h?0:[0,c,i]}}function
kd(f,e,d,c,b){try{var
a=a8a(f,e,d,c,b);return a}catch(a){a=j(a);if(a===GS)throw[0,cj,[0,[0,e,f,[4,c,et(d,b)]],0]];if(a[1]===cj){if(3!==c[0])if(3!==b[0]){var
g=a[2];throw[0,cj,[0,[0,e,f,[4,c,et(d,b)]],g]]}throw a}throw a}}function
Wn(k,t,g,c,e){var
F=r7(c,TT(k)),u=G(function(c,b){var
a=c[2],d=c[1];if(3===b[0])return[0,[0,[0,b[1],a,0],d],a+1|0];var
e=GT(b)?a+1|0:a;return[0,d,e]},a8d,c)[1],b=0,m=bD,a=c;for(;;){if(a){var
d=a[1],f=Wm(d),h=GT(d)?b+1|0:b,i=a[2],n=du(f[3],[0,f[1],d,b],m),b=h,m=n,a=i;continue}var
o=0,H=G(function(a,b){return GT(b)?a+1|0:a},o,e),w=function(c,x,I,G){var
a=I,f=G;for(;;){if(f){var
y=f[2],d=f[1],n=Wm(d),o=n[3],g=n[1];if(1===d[0])if(d[2][5])var
e=0;else
if(1===o[0]){var
i=o[1],C=r(i),D=4<=C?1:0,L=D?A(al(i,C-4|0,4),a8e):D;if(L)var
p=[0,[1,al(i,0,r(i)-4|0)],0],e=1;else
var
e=0}else
var
e=0;else
var
e=0;if(!e)var
p=[0,o,1];var
z=p[1];try{var
q=d3(z,m),s=q[1];switch(d[0]){case
1:var
h=rN(g,[0,s],c);break;case
3:var
h=iE(g,[0,s],c);break;case
4:var
h=Fs(g,[0,[0,s]],c);break;default:var
h=c}var
K=w(h,[0,[0,q[2],d,q[3]],x],a,y);return K}catch(b){b=j(b);if(b===l){if(p[2])var
J=a73(z),B=[0,[0,t,k,[0,g,n[2],J]],a];else
var
B=a;var
a=B,f=y;continue}throw b}}if(a)throw[0,cj,a];var
E=Wo(k,F,t,c,v(x));return b===H?a7$(E,u):[0,E,u]}};return w(g,0,0,e)}}function
Km(w,a,c,f,z,b){var
d=z;for(;;){switch(d[0]){case
0:var
m=d[1];try{rZ(m,a);var
x=1,n=x}catch(a){a=j(a);if(a!==l)throw a;var
n=0}if(n){var
d=Wk(a,c,m);continue}var
e=0;break;case
1:switch(b[0]){case
1:return Wn(a,c,f,d[1],b[1]);case
0:var
e=0;break;default:var
e=1}break;case
2:var
p=d[2],g=d[1];if(p)switch(b[0]){case
0:var
e=0;break;case
2:var
q=b[2];if(q){var
r=et(f,q[1]),s=kd(a,[0,[2,g],c],bf,r,p[1]),A=b[3],B=d[3],C=iE(b[1],[0,g],f),t=kd(iJ(0,g,r,a),[0,[3,g],c],C,B,A);if(typeof
s==="number")if(typeof
t==="number")return 0;return[1,s,t]}var
e=1;break;default:var
e=1}else
switch(b[0]){case
0:var
e=0;break;case
2:if(!b[2]){var
u=kd(a,[0,[3,g],c],f,d[3],b[3]);return typeof
u==="number"?0:[1,0,u]}var
e=1;break;default:var
e=1}break;default:var
i=d[1];if(3===b[0]){var
h=b[1];if(FH(h,a))throw[0,cj,[0,[0,c,a,[11,h]],0]];if(Y(i,h))return 0;var
D=j1(0,a,i);if(Y(D,j1(0,a,iF(f,h))))return 0;throw GS}try{var
k=j1([0,y],a,i)}catch(b){b=j(b);if(b[1]===rT){var
v=b[2];if(3===v[0])throw[0,cj,[0,[0,c,a,[10,v[3]]],0]]}throw b}return[3,k,kd(a,c,f,kb(a,Wl(a,c,k),k),b)]}if(!e)if(0===b[0]){var
o=et(f,b);return w<50?ab4(w+1|0,a,c,d,o):aa(ab4,[0,a,c,d,o])}throw GS}}function
ab4(g,d,c,b,a){if(0===b[0])if(0===a[0]){if(Y(b[1],a[1]))return 0;var
e=0}else
var
e=1;else
var
e=0;if(!e)if(0===a[0]){var
f=Wk(d,c,a[1]);return g<50?Km(g+1|0,d,c,bf,b,f):aa(Km,[0,d,c,bf,b,f])}throw[0,h,a8c]}function
a8a(a,b,c,d,e){return c4(Km(0,a,b,c,d,e))}function
Wo(m,b,i,g,f){function
j(a){return Wo(m,b,i,g,a)}if(f){var
c=f[1],a=c[1];switch(a[0]){case
0:var
B=c[2];if(0===B[0]){var
C=f[2],D=B[2],U=a71(b,i,g,a[1],a[2],D),E=D[2];if(typeof
E!=="number"&&0===E[0])return j(C);var
V=j(C);return[0,[0,c[3],U],V]}break;case
1:var
F=c[2];if(1===F[0]){Wj(b,[0,m],i,g,a[1],a[2],F[2]);return j(f[2])}break;case
2:var
G=c[2];if(2===G[0]){var
d=a[2],H=a[1],e=wv(g,G[2]);if(0===d[5])var
u=0;else
if(1===e[5])var
u=0;else
var
z=2,u=1;if(!u)var
z=0;aZx(z,b,d,H[2]);var
O=ak([3,d[1],d[2],[0,0]]),P=ak([3,e[1],e[2],[0,0]]);if(dc(b,1,[0,O,d[2]],[0,P,e[2]])){var
Q=w(e[3]);if(w(d[3])===Q){var
A=d[4],p=e[4];if(A)if(p)if(dc(b,1,[0,A[1],0],[0,p[1],0]))var
o=0;else
var
q=0,o=2;else
var
o=1;else
var
o=p?1:0;switch(o){case
0:var
R=e[3],S=d[3],q=Ru(function(c,a){return dc(b,1,[0,c,d[2]],[0,a,e[2]])},S,R);break;case
1:var
q=0;break}if(q){var
T=e[5];if(0===d[5])if(0===T)var
v=0;else
var
k=0,v=1;else
var
v=0;if(!v)var
k=1}else
var
k=0}else
var
k=0}else
var
k=0;if(k){var
W=j(f[2]);return[0,[0,c[3],0],W]}throw[0,cj,[0,[0,i,b,[3,H,d,e]],0]]}break;case
3:var
I=c[2];if(3===I[0]){var
J=a[1],X=I[2][1],Y=kd(b,[0,[0,J],i],g,kb(b,a[2][1],[0,J]),X),Z=j(f[2]);return[0,[0,c[3],Y],Z]}break;case
4:var
K=c[2];if(4===K[0]){a8b(b,i,g,a[1],a[2],K[2]);return j(f[2])}break;case
5:var
L=c[2];if(5===L[0]){var
n=a[2],_=a[1],l=rP(g,L[2]),N=l[4];if(n[4])var
x=0;else
if(N)var
s=a69,x=1;else
var
x=0;if(!x)var
s=Vf(b,n[1],n[2],l[1],l[2]);if(s)throw[0,cj,[0,[0,i,m,[8,_,n,l,s]],0]];var
$=j(f[2]);return[0,[0,c[3],0],$]}break;default:var
M=c[2];if(6===M[0]){var
t=a[2],aa=a[1],r=rQ(g,M[2]),y=Vf(b,t[1],t[2],r[1],r[2]);if(y)throw[0,cj,[0,[0,i,m,[7,aa,t,r,y]],0]];return j(f[2])}}throw[0,h,a8f]}return 0}function
a8b(c,e,k,b,d,i){var
f=ww(k,i),g=[0,[1,b],e];try{var
h=d[1],a=f[1],l=h?a?Wp(c,g,h[1],a[1]):0:a?Wp(c,g,[0,[0,b]],a[1]):0;return l}catch(a){a=j(a);if(a[1]===cj)throw[0,cj,[0,[0,e,c,[5,b,d,f]],a[2]]];throw a}}function
Wp(b,a,d,c){var
e=kd(b,a,bf,d,c),f=kd(b,a,bf,c,d);if(typeof
e==="number")if(typeof
f==="number")return 0;throw[0,cj,[0,[0,a,b,0],0]]}FC[1]=function(a,d,c,b){try{kd(a,0,bf,kb(a,d,c),b);var
e=0;return e}catch(a){a=j(a);if(a[1]===cj)throw l;throw a}};function
Wq(e,d,c,b,a){try{var
f=Wn(e,0,bf,c,a);return f}catch(a){a=j(a);if(a[1]===cj)throw[0,cj,[0,[0,0,bz,[6,d,b]],a[2]]];throw a}}function
pl(c,b,a){return kd(c,0,bf,b,a)}function
GU(c,b,a){return aY(a[1][1],a8g)?0:p(e(b,a8h),RH,a,c)}function
GV(b,a){GU(a8i,b,a[2]);return GU(a8j,b,a[1])}function
a8k(c,a){if(typeof
a==="number")return e(c,a8l);else
switch(a[0]){case
0:var
r=a[1],s=a[3];p(e(c,a8m),s,lH,r);return GU(a8n,c,a[2]);case
1:var
d=a[3],f=a[2],g=a[1],t=function(a,b){return VQ(g,a,b)},u=function(a,b){return VQ(g,a,b)};L(e(c,a8o),u,f,t,d);return GV(c,[0,f[3],d[3]]);case
2:var
h=a[3],i=a[2],j=a[1],v=a[4],w=function(a){return GM(a8r,a8q,a8p,a)},x=[0,i[8],h[8]],y=function(a,b){return VM(j,a,b)},z=function(a,b){return VM(j,a,b)};return b9L(e(c,a8u),a8t,z,i,a8s,y,h,GV,x,w,v);case
3:var
k=a[3],l=a[2],m=a[1],A=function(a,b){return VO(m,a,b)},B=function(a,b){return VO(m,a,b)};L(e(c,a8v),B,l,A,k);return GV(c,[0,l[6],k[6]]);case
4:var
C=a[2],D=a[1];return L(e(c,a8w),pj,D,pj,C);case
5:var
n=a[1],E=a[3],F=function(a,b){return VZ(n,a,b)},G=a[2],H=function(a,b){return VZ(n,a,b)};return L(e(c,a8x),H,G,F,E);case
6:var
I=a[2],J=a[1];return b(e(c,a8y),J,I);case
7:var
o=a[1],K=a[4],M=a[3],N=function(a,b){return GJ(o,a,b)},O=a[2],P=function(a,b){return GJ(o,a,b)};return cw(e(c,a8z),P,O,N,M,GL,K);case
8:var
q=a[1],Q=a[4],R=a[3],S=function(a,b){return ph(q,a,b)},T=a[2],U=function(a,b){return ph(q,a,b)};return cw(e(c,a8A),U,T,S,R,GL,Q);case
9:var
V=a[1];return b(e(c,a8B),cD,V);case
10:var
W=a[1];return b(e(c,a8C),cD,W);default:var
X=a[1];return b(e(c,a8D),cD,X)}}function
GW(b,a){if(a){var
c=a[1];switch(c[0]){case
0:var
d=a[2],f=c[1];return L(e(b,a8E),lH,f,Wr,d);case
1:var
g=a[2],h=c[1];return L(e(b,a8F),lH,h,sN,g);case
2:var
i=a[2],j=c[1];return L(e(b,a8G),lH,j,sN,i);default:var
k=a[2],l=Ws(c[1]);return p(e(b,a8H),l,sN,k)}}return e(b,a8I)}function
sN(c,a){if(a)if(!(1<a[1][0]))return b(e(c,a8J),GW,a);return GW(c,a)}function
Wr(c,a){if(a){var
d=a[1];switch(d[0]){case
2:var
f=a[2],g=d[1];return L(e(c,a8L),lH,g,sN,f);case
3:var
h=a[2],i=Ws(d[1]);return p(e(c,a8M),i,Wr,h)}}return b(e(c,a8K),sN,a)}function
Ws(b){var
a=b[2];return A(a,a8N)?a8O:a}function
a8R(i,a){if(0===a)return 0;if(Z(function(a){return 0===a[0]?1:0},a)){if(a){var
f=a[1];if(0===f[0]){var
d=[0,f[1]],c=a[2];for(;;){if(c){var
g=c[1];if(0===g[0]){var
d=[1,d,g[1][2],-1],c=c[2];continue}throw[0,h,a8P]}return b(e(i,a8S),cD,d)}}}throw[0,h,a8Q]}return b(e(i,a8T),GW,a)}function
Wt(b,a){var
c=a[3],d=a[1];function
f(f){var
a=v(d);return L(e(b,a8U),a8R,a,a8k,c)}return j_(a[2],f)}var
GX=[0,u9];function
a8V(a){if(r(GX[1])<BE)GX[1]=aN(BE);try{OG(GX[1],0,aAr,a,0);var
b=0;return b}catch(a){return 1}}function
GY(f,a){if(0===a)return 0;var
c=Rv(a),d=[0,1];function
g(c){function
a(f){if(a8V(f[3])){var
a=d[1],g=a?(e(c,a8W),d[1]=0,0):a;return g}return b(e(c,a8X),Wt,f)}return function(b){return m(a,b)}}var
h=c[2],i=c[1];return L(e(f,a8Y),g,i,Wt,h)}c8(function(a){return a[1]===cj?[0,vL(GY,a[2])]:0});function
bE(c,b,a){return[0,c,y,0,b,a,0]}var
ay=bE(0,sd,bz),a80=b2(a8Z),a82=bE([0,H(a81),a80],sd,bz);function
gy(a){return 0<a?[0,ay,gy(a-1|0)]:0}function
pm(a){return g(function(a){return ay},a)}var
a84=bE(a83,sd,bz);function
xs(b,a){return 0===SZ(b,a[1])?1:0}function
GZ(b){var
a=b[1];if(typeof
a!=="number"&&5===a[0])return xs(a[1],a[3]);return 0}function
ke(b,a){switch(b[0]){case
2:if(2===a[0])return Q(b[1],a[1]);break;case
3:if(3===a[0]){var
c=gf(a[1]);return anV(gf(b[1]),c)}break}return cp(b,a)}function
Wu(n,m){var
b=0,a=0,d=n,c=m;for(;;){if(d){var
e=d[2],g=d[1],f=g[3],h=g[2];if(c){var
i=c[2],j=c[1],k=j[3],l=j[2];if(h[5]<l[5]){var
b=[0,f,b],a=[0,ay,a],d=e;continue}if(l[5]<h[5]){var
b=[0,ay,b],a=[0,k,a],c=i;continue}var
b=[0,f,b],a=[0,k,a],d=e,c=i;continue}var
b=[0,f,b],a=[0,ay,a],d=e,c=0;continue}if(c){var
b=[0,ay,b],a=[0,c[1][3],a],d=0,c=c[2];continue}var
o=v(a);return[0,v(b),o]}}function
ne(e,d){var
b=e,a=d;for(;;){if(b){if(a){var
c=lJ(b[1],a[1]);if(c){var
b=b[2],a=a[2];continue}return c}}else
if(!a)return 1;throw[0,h,a86]}}function
lJ(v,u){var
e=v,d=u;for(;;){var
c=e[1],a=d[1];if(typeof
c==="number")var
b=0;else
switch(c[0]){case
1:var
e=c[1];continue;case
2:if(typeof
a==="number")var
b=0;else
switch(a[0]){case
2:return 0===ke(c[1],a[1])?1:0;case
8:var
b=1;break;case
0:case
1:var
b=0;break;default:var
b=2}break;case
3:if(typeof
a==="number")var
b=0;else
switch(a[0]){case
3:return ne(c[1],a[1]);case
8:var
b=1;break;case
0:case
1:var
b=0;break;default:var
b=2}break;case
4:if(typeof
a==="number")var
b=0;else
switch(a[0]){case
4:var
l=rD(c[2][6],a[2][6]);return l?ne(c[3],a[3]):l;case
8:var
b=1;break;case
0:case
1:var
b=0;break;default:var
b=2}break;case
5:var
m=c[2],n=c[1];if(m){if(typeof
a==="number")var
f=1;else
switch(a[0]){case
5:var
o=a[2];if(o){var
p=A(n,a[1]);if(p){var
e=m[1],d=o[1];continue}return p}return 0;case
8:var
b=1,f=0;break;case
0:case
1:var
f=1;break;default:var
b=2,f=0}if(f)var
b=0}else{if(typeof
a==="number")var
g=1;else
switch(a[0]){case
5:return a[2]?0:A(n,a[1]);case
8:var
b=1,g=0;break;case
0:case
1:var
g=1;break;default:var
b=2,g=0}if(g)var
b=0}break;case
6:if(typeof
a==="number")var
b=0;else
switch(a[0]){case
6:var
q=Wu(c[1],a[1]);return ne(q[1],q[2]);case
8:var
b=1;break;case
0:case
1:var
b=0;break;default:var
b=2}break;case
7:var
r=c[1];if(typeof
a==="number")var
i=1;else
switch(a[0]){case
7:var
s=a[1],x=w(s),t=w(r)===x?1:0;return t?ne(r,s):t;case
8:var
b=1,i=0;break;case
0:case
1:var
i=1;break;default:var
b=2,i=0}if(i)var
b=0;break;case
9:if(typeof
a==="number")var
b=0;else
switch(a[0]){case
9:var
e=c[1],d=a[1];continue;case
8:var
b=1;break;case
0:case
1:var
b=0;break;default:var
b=2}break;default:var
b=0}switch(b){case
0:if(typeof
a!=="number")switch(a[0]){case
1:var
d=a[1];continue;case
0:break;default:if(typeof
c!=="number"&&8===c[0]){var
j=lJ(c[1],d);if(j)return j;var
e=c[2];continue}return 1}return 1;case
1:var
k=lJ(e,a[1]);if(k)return k;var
d=a[2];continue;default:throw[0,h,a85]}}}var
kf=O([I,a87,0]);function
Wv(a){return a[2]===bm?a:wt(bf,a)}function
G0(c,b){var
a=t(aJ(b,Wv(c)))[1];if(typeof
a!=="number"&&3===a[0])return a[1];return ad(a88)}function
Ww(a){return f(a[1],a89)?0:1}function
eY(a,j){var
k=j[3];if(k){var
l=k[2],o=k[1][1];if(typeof
o==="number"){var
q=j.slice();q[3]=l;return b(e(a,a9f),eY,q)}else{if(0===o[0]){var
r=j.slice();r[3]=l;return b(e(a,a9g),eY,r)}var
s=j.slice();s[3]=l;return b(e(a,a9h),eY,s)}}var
c=j[1];if(typeof
c==="number")return e(a,a9i);else
switch(c[0]){case
0:return cC(a,c[1]);case
1:var
D=c[2],E=c[1];return L(e(a,a9j),eY,E,cC,D);case
2:var
g=c[1];switch(g[0]){case
0:var
w=g[1],h=d(ag(a8_),w);break;case
1:var
x=g[1],h=d(ag(a8$),x);break;case
2:var
y=g[1],h=d(ag(a9a),y);break;case
3:var
z=g[1],h=d(ag(a9b),z);break;case
4:var
A=g[1],h=d(ag(a9c),A);break;case
5:var
B=g[1],h=d(ag(a9d),B);break;default:var
C=g[1],h=d(ag(a9e),C)}return d(e(a,a9k),h);case
3:var
F=c[1],G=function(a,b){return xu(a9l,a,b)};return b(e(a,a9m),G,F);case
4:var
i=c[3],m=c[2];if(i){if(i[2]){var
t=m[1];if(!f(t,a9n))if(i){var
n=i[2];if(n)if(!n[2]){var
I=n[1],J=i[1];return L(e(a,a9q),Wx,J,Wy,I)}}var
H=function(a,b){return xu(a9o,a,b)};return p(e(a,a9p),t,H,i)}var
K=i[1],M=m[1];return p(e(a,a9r),M,G1,K)}var
N=m[1];return d(e(a,a9s),N);case
5:var
u=c[2],v=c[1];if(u){var
O=u[1];return p(e(a,a9t),v,G1,O)}return d(e(a,a9u),v);case
6:var
P=c[1],Q=d(by(function(a){return typeof
a[3][1]==="number"?0:1}),P);return b(e(a,a9v),Wz,Q);case
7:var
R=c[1],S=function(a,b){return xu(a9w,a,b)};return b(e(a,a9x),S,R);case
8:var
T=c[2],U=c[1];return L(e(a,a9y),xt,U,xt,T);default:var
V=c[1];return b(e(a,a9z),G1,V)}}function
Wx(d,c){var
a=c[1];if(typeof
a!=="number"&&4===a[0]){var
f=a[3];if(f){var
g=f[2];if(g)if(!g[2])if(Ww(a[2]))return b(e(d,a9A),eY,c)}}return eY(d,c)}function
Wy(f,d){var
a=d[1];if(typeof
a!=="number"&&4===a[0]){var
b=a[3];if(b){var
c=b[2];if(c)if(!c[2])if(Ww(a[2])){var
g=c[1],h=b[1];return L(e(f,a9B),Wx,h,Wy,g)}}}return eY(f,d)}function
G1(f,d){var
a=d[1];if(typeof
a==="number")var
c=0;else
switch(a[0]){case
4:var
c=a[3]?1:0;break;case
5:var
c=a[2]?1:0;break;default:var
c=0}return c?b(e(f,a9C),eY,d):eY(f,d)}function
xt(c,b){var
a=b[1];if(typeof
a!=="number"&&8===a[0]){var
d=a[2],f=a[1];return L(e(c,a9D),xt,f,xt,d)}return eY(c,b)}function
xu(c,b,a){if(a){var
d=a[2],f=a[1];if(d){var
g=function(a,b){return xu(c,a,b)};return bH(e(b,a9E),eY,f,c,g,d)}return eY(b,f)}return 0}function
Wz(b,a){if(a){var
c=a[2],d=a[1],f=d[3],g=d[2];if(c){var
h=g[1];return bH(e(b,a9F),h,eY,f,Wz,c)}var
i=g[1];return p(e(b,a9G),i,eY,f)}return 0}function
G2(c,a){return b(e(c,a9H),eY,a)}function
a9K(a){oh(a9L);m(function(a){m(function(a){G2(oz,a);og(a9I);og(vw(0));return og(a9J)},a);return oh(a9M)},a);return oh(a9N)}function
xv(e,d){var
c=e[1],b=d[1];if(typeof
c==="number")var
a=0;else
switch(c[0]){case
2:if(typeof
b==="number")var
a=0;else
switch(b[0]){case
2:return 0===ke(c[1],b[1])?1:0;case
0:var
a=0;break;default:var
a=1}break;case
3:if(typeof
b==="number")var
a=0;else
switch(b[0]){case
3:return 1;case
0:var
a=0;break;default:var
a=1}break;case
4:if(typeof
b==="number")var
a=0;else
switch(b[0]){case
4:return rD(c[2][6],b[2][6]);case
0:var
a=0;break;default:var
a=1}break;case
5:if(typeof
b==="number")var
a=0;else
switch(b[0]){case
5:return A(c[1],b[1]);case
0:var
a=0;break;default:var
a=1}break;case
6:if(typeof
b==="number")var
a=0;else
switch(b[0]){case
6:return 1;case
0:var
a=0;break;default:var
a=1}break;case
7:if(typeof
b==="number")var
a=0;else
switch(b[0]){case
7:var
f=w(b[1]);return w(c[1])===f?1:0;case
0:var
a=0;break;default:var
a=1}break;case
9:if(typeof
b==="number")var
a=0;else
switch(b[0]){case
9:return 1;case
0:var
a=0;break;default:var
a=1}break;default:var
a=0}if(!a){var
g=typeof
b==="number"?0:0===b[0]?0:1;if(!g)return 1}return 0}function
WA(b){var
a=b[1];return typeof
a==="number"?0:6===a[0]?a[1]:ad(a9O)}function
WB(b,a){return io(function(a){return b===a[2][5]?1:0},a)[3]}function
G3(a){if(a){var
c=a[1][2][6],b=em(function(a){return[0,b2(a9P),a,ay]},c);m(function(a){var
c=a[2][5];return n(b,c)[c+1]=a},a);return jA(b)}return ad(a9Q)}function
gz(d,h){var
e=h;for(;;){var
a=e[1];if(typeof
a==="number")var
c=1;else
switch(a[0]){case
1:var
e=a[1];continue;case
4:return a[3];case
5:var
f=a[2];if(f)return[0,f[1],0];var
c=0;break;case
6:var
i=a[1],k=WA(d);return g(function(a){try{var
b=WB(a[2][5],i);return b}catch(a){a=j(a);if(a===l)return ay;throw a}},k);case
9:return[0,a[1],0];case
0:var
c=1;break;case
3:case
7:return a[1];default:var
c=0}if(c){var
b=d[1];if(typeof
b!=="number")switch(b[0]){case
4:return pm(b[3]);case
5:if(b[2])return[0,ay,0];break;case
9:return[0,ay,0];case
3:case
6:case
7:return pm(b[1])}return 0}return 0}}function
fW(c){var
a=c;for(;;){var
b=a[1];if(typeof
b!=="number")switch(b[0]){case
0:return bE(0,a[4],a[5]);case
1:var
a=b[1];continue;case
3:var
d=a[5],e=a[4];return bE([3,pm(b[1])],e,d);case
4:var
f=a[5],h=a[4],i=pm(b[3]);return bE([4,b[1],b[2],i],h,f);case
5:var
j=a[5],k=a[4],l=b[3],m=b[2],n=bt(function(a){return ay},m);return bE([5,b[1],n,l],k,j);case
6:var
o=a[5],p=a[4],q=b[2],r=b[1];return bE([6,g(function(a){return[0,a[1],a[2],ay]},r),q],p,o);case
7:var
s=a[5],t=a[4];return bE([7,pm(b[1])],t,s);case
8:return ad(a9R);case
9:return bE([9,ay],a[4],a[5])}return a}}function
pn(m,k){var
f=fW(m),i=f[1];if(typeof
i!=="number"&&6!==i[0])return f;var
e=f,a=k;for(;;){if(a){var
c=a[1];if(c){var
d=c[1],b=d[1];if(typeof
b==="number")var
g=0;else
switch(b[0]){case
1:var
a=[0,[0,b[1],c[2]],a[2]];continue;case
6:var
n=WA(e),o=b[1],p=R(function(c,b){var
d=c[2];try{WB(d[5],b);return b}catch(a){a=j(a);if(a===l)return[0,[0,c[1],d,ay],b];throw a}},o,n),q=a[2],e=bE([6,p,b[2]],d[4],d[5]),a=q;continue;case
8:var
h=c[2],a=[0,[0,b[1],h],[0,[0,b[2],h],a[2]]];continue;case
0:var
g=0;break;case
3:case
9:return fW(d);default:var
g=1}if(!g){var
a=a[2];continue}}}return e}}function
sO(b,a){if(b){if(a){var
c=sO(b[2],a[2]);return[0,[0,a[1],c[1]],c[2]]}return ad(a9S)}return[0,0,a]}function
WC(k,a,b){var
c=a[1];if(typeof
c!=="number")switch(c[0]){case
3:var
e=sO(c[1],b),l=e[2];return[0,bE([3,e[1]],a[4],a[5]),l];case
4:var
f=sO(c[3],b),m=f[2];return[0,bE([4,c[1],c[2],f[1]],a[4],a[5]),m];case
5:if(c[2]){if(!b)throw[0,h,a9U];var
d=[0,[0,b[1]],b[2]]}else
var
d=[0,0,b];var
n=d[2];return[0,bE([5,c[1],d[1],c[3]],a[4],a[5]),n];case
6:var
g=c[1],i=sO(g,b),o=i[2],p=a[5],q=a[4],r=c[2],s=i[1];return[0,bE([6,aG(function(b,d){var
a=b[2],c=b[1];if(k){var
e=0===a[4]?0:1;if(e)return[0,c,a,ay]}return[0,c,a,d]},g,s),r],q,p),o];case
7:var
j=sO(c[1],b),t=j[2];return[0,bE([7,j[1]],a[4],a[5]),t];case
9:if(b){var
u=b[2];return[0,bE([9,b[1]],a[4],a[5]),u]}return ad(a9V);case
2:break;default:return ad(a9T)}return[0,a,b]}function
WD(b,a){return WC(0,b,a)}function
kg(a){function
e(g){var
a=g;for(;;){if(a){var
b=a[1];if(b){var
c=b[1][1];if(typeof
c==="number")var
d=0;else
switch(c[0]){case
1:var
a=[0,[0,c[1],b[2]],a[2]];continue;case
8:var
f=b[2],a=[0,[0,c[1],f],[0,[0,c[2],f],a[2]]];continue;case
0:var
d=0;break;default:var
d=1}if(!d){var
h=e(a[2]);return[0,b[2],h]}}var
a=a[2];continue}return 0}}return e(a)}function
sP(m,l){function
n(a,c,b){if(b){var
f=b[2],d=b[1],e=d[1];if(xv(e,a)){var
h=d[2];return[0,[0,e,[0,s(gz(e,a),c),h]],f]}return[0,d,n(a,c,f)]}var
g=fW(a);return[0,[0,g,[0,s(gz(g,a),c),0]],0]}var
r=m[1];if(typeof
r==="number")var
j=0;else
switch(r[0]){case
3:case
6:case
9:var
t=[0,[0,m,0],0],j=1;break;default:var
j=0}if(!j)var
t=0;var
h=t,a=l;for(;;){if(a){var
c=a[1];if(c){var
o=c[1],d=o[1];if(typeof
d!=="number")switch(d[0]){case
1:var
a=[0,[0,d[1],c[2]],a[2]];continue;case
8:var
p=c[2],a=[0,[0,d[1],p],[0,[0,d[2],p],a[2]]];continue;case
0:break;default:var
u=a[2],h=n(o,c[2],h),a=u;continue}var
a=a[2];continue}}var
i=h,b=l;for(;;){if(b){var
e=b[1];if(e){var
f=e[1][1];if(typeof
f==="number")var
k=0;else
switch(f[0]){case
1:var
b=[0,[0,f[1],e[2]],b[2]];continue;case
8:var
q=e[2],b=[0,[0,f[1],q],[0,[0,f[2],q],b[2]]];continue;case
0:var
k=0;break;default:var
k=1}if(!k){var
v=e[2],w=b[2],i=g(function(d){return function(a){var
b=a[1],c=a[2];return[0,b,[0,s(gz(b,ay),d),c]]}}(v),i),b=w;continue}}var
b=b[2];continue}return i}}}function
WE(b,a){if(a){var
c=a[2];if(c){var
d=WE(b,c);return[0,a[1],d]}return[0,b,0]}return 0}function
G4(f){var
a=f;for(;;){if(a){var
b=a[1];if(b){var
c=b[1][1];if(typeof
c==="number")var
d=0;else
switch(c[0]){case
1:var
a=[0,[0,c[1],b[2]],a[2]];continue;case
8:var
e=b[2],a=[0,[0,c[1],e],[0,[0,c[2],e],a[2]]];continue;case
0:var
d=0;break;default:var
d=1}if(!d)return[0,b,G4(a[2])]}var
g=G4(a[2]);return[0,WE(a84,b),g]}return 0}}function
G5(b){var
a=aJ(b[5],b[4])[1];if(typeof
a!=="number"&&8===a[0])return aw(a[1]);throw[0,h,a9W]}function
xw(m,l,a){if(a){var
f=a[1][1],b=f[1];if(typeof
b!=="number")switch(b[0]){case
2:return 1===b[1][0]?dR===w(a)?1:0:0;case
4:var
c=b[2];if(0<=c[7]){if(m){var
e=function(f){var
a=f;for(;;){if(a){var
c=a[2],d=a[1],b=d[1][1];if(typeof
b!=="number"&&4===b[0]){if(b[2][10]){var
a=c;continue}return[0,d,e(c)]}throw[0,h,a9X]}return 0}},k=e(a),n=c[9];return w(k)===n?1:0}var
o=c[7]+c[8]|0;return w(a)===o?1:0}return 0;case
5:var
i=g(function(b){var
a=b[1][1];if(typeof
a!=="number"&&5===a[0])return a[1];throw[0,h,a9Z]},a),d=G5(f);if(l)if(!jX(d)){var
q=d[1];return Z(function(b){var
a=aB(b[2]),c=typeof
a==="number"?0:1===a[0]?0===a[3]?0:1:1;return c?aY(b[1],i):1},q)}var
j=d[4];if(j){var
p=d[1];return Z(function(a){var
b=0===aB(a[2])?1:0;return b?b:aY(a[1],i)},p)}return j;case
7:return 0;case
0:case
1:case
8:break;default:return 1}}return ad(a9Y)}function
a90(a){if(a){var
b=a[1][1][1];if(typeof
b!=="number"&&4===b[0]){var
c=b[2],d=c[7]+c[8]|0;return w(a)===d?1:0}}return 1}function
WF(d,c){if(d){if(c){var
a=c[1][1],b=a[1];if(typeof
b==="number")var
e=0;else
if(4===b[0]){if(2!==b[2][6][0]){var
f=G0(a[4],a[5]);return Y(f,d[1])}var
e=1}else
var
e=0}return 0}return 0}function
xx(c,a){var
b=c.slice(),d=gy(a[5]);b[1]=[4,b2(a92),a,d];return b}function
WG(a,b){if(b){var
c=b[2],d=b[1];if(c){var
e=a.slice(),f=WG(a,c);e[1]=[8,xx(a,d),f,0];return e}return xx(a,d)}throw kf}function
WH(b,f){var
a=f;for(;;){if(a){var
c=a[2],e=d(b,a[1]);if(e){var
g=WH(b,c);return[0,e[1],g]}var
a=c;continue}return 0}}function
G6(C,J){var
j=C[1];if(typeof
j!=="number"&&4===j[0]){var
k=j[2],D=k[8],E=k[7],q=X(E,0),r=X(D,0);m(function(a){switch(a[0]){case
0:var
b=a[1];return n(q,b)[b+1]=1;case
1:var
c=a[1];return n(r,c)[c+1]=1;default:throw[0,h,a91]}},J);var
u=E-1|0,s=0,F=0;if(u<0)var
d=s;else{var
b=F,f=s;for(;;){var
y=1-n(q,b)[b+1]?[0,[0,b],f]:f,I=b+1|0;if(u!==b){var
b=I,f=y;continue}var
d=y;break}}var
v=D-1|0,G=0;if(v<0)var
w=d;else{var
a=G,e=d;for(;;){var
x=1-n(r,a)[a+1]?[0,[1,a],e]:e,H=a+1|0;if(v!==a){var
a=H,e=x;continue}var
w=x;break}}var
l=C[5],g=k[2];for(;;){var
i=t(g)[1];if(typeof
i==="number")var
c=0;else
if(3===i[0]){var
z=i[1],A=bg(z,l),B=A[3];if(typeof
B==="number")var
p=1;else
if(1===B[0])var
o=T2(z,l)[1],c=1,p=0;else
var
p=1;if(p){if(A[5]){var
g=a1b(l,Wv(g));continue}var
o=ad(a94),c=1}}else
var
c=0;if(!c)var
o=ad(a93);return WH(function(a){return N(function(b){return rD(b,a[6])},w)?[0,a]:0},o)}}return ad(a95)}function
po(i,h,f,e,b,c){var
a=f,j=g(function(a){return d(i,a[1][1])},c);for(;;){if(aY(a,j)){var
a=d(e,a);continue}var
k=b[5],l=b[4];return bE(d(h,a),l,k)}}function
a96(i,b){if(b){var
a=b[1][1],c=a[1];if(typeof
c!=="number")switch(c[0]){case
2:switch(c[1][0]){case
0:var
n=function(a){return a+1|0},o=0,p=function(a){return[2,[0,a]]};return po(function(a){if(typeof
a!=="number"&&2===a[0]){var
b=a[1];if(0===b[0])return b[1]}throw[0,h,a97]},p,o,n,a,b);case
1:var
q=g(function(c){var
a=c[1][1];if(typeof
a!=="number"&&2===a[0]){var
b=a[1];if(1===b[0])return b[1]}throw[0,h,a98]},b),s=function(e,d){var
b=e;for(;;){if(d<b)throw l;var
c=dG(b);if(aY(c,q)){var
b=b+1|0;continue}return bE([2,[1,c]],a[4],a[5])}},t=function(c){var
a=c;for(;;){if(a){var
b=a[1];try{var
d=s(b[1],b[2]);return d}catch(b){b=j(b);if(b===l){var
a=a[2];continue}throw b}}return ay}},u=dG(K);return t([0,a_a,[0,a9$,[0,a9_,[0,a99,[0,[0,dG(0),u],0]]]]]);case
2:var
v=function(a){return a+1|0},x=0,y=function(a){return[2,[2,c6(a,42),0]]};return po(function(a){if(typeof
a!=="number"&&2===a[0]){var
b=a[1];if(2===b[0])return r(b[1])}throw[0,h,a_b]},y,x,v,a,b);case
3:var
z=function(a){return a+1},A=0,B=function(a){return[2,[3,of(a)]]};return po(function(a){if(typeof
a!=="number"&&2===a[0]){var
b=a[1];if(3===b[0])return gf(b[1])}throw[0,h,a_c]},B,A,z,a,b);case
4:var
C=0,D=function(a){return[2,[4,a]]};return po(function(a){if(typeof
a!=="number"&&2===a[0]){var
b=a[1];if(4===b[0])return b[1]}throw[0,h,a_d]},D,C,OM,a,b);case
5:var
E=function(a){return[2,[5,a]]};return po(function(a){if(typeof
a!=="number"&&2===a[0]){var
b=a[1];if(5===b[0])return b[1]}throw[0,h,a_f]},E,a_e,ON,a,b);default:var
F=0,H=function(a){return[2,[6,a]]};return po(function(a){if(typeof
a!=="number"&&2===a[0]){var
b=a[1];if(6===b[0])return b[1]}throw[0,h,a_g]},H,F,OP,a,b)}case
4:var
k=c[2];if(2===k[6][0]){var
m=k.slice();m[1]=a_i;return bE([4,c[1],m,0],sd,bz)}if(i){var
I=G0(a[4],a[5]);if(Y(i[1],I))return a82}return WG(a,G6(a,g(function(b){var
a=b[1][1];if(typeof
a!=="number"&&4===a[0])return a[2][6];return ad(a_h)},b)));case
5:var
J=c[3],L=g(function(b){var
a=b[1][1];if(typeof
a!=="number"&&5===a[0])return a[1];throw[0,h,a_j]},b),M=G5(a),e=function(c,b){var
d=b?0:[0,ay];return bE([5,c,d,J],a[4],a[5])},N=M[1],O=0,f=G(function(a,d){var
c=d[1];if(aY(c,L))return a;var
b=aB(d[2]);return typeof
b==="number"?a:0===b[0]?[0,e(c,0===b[1]?1:0),a]:[0,e(c,b[1]),a]},O,N);if(f){var
P=f[2],Q=f[1];return G(function(c,b){return bE([8,b,c,0],a[4],a[5])},Q,P)}return e(a_k,1);case
7:var
d=0,R=g(function(b){var
a=b[1][1];if(typeof
a!=="number"&&7===a[0])return w(a[1]);throw[0,h,a_l]},b);for(;;){if(aY(d,R)){var
d=d+1|0;continue}var
S=a[5],T=a[4];return bE([7,gy(d)],T,S)}}return ay}return ay}function
a_m(e,a){if(a){var
b=a[1][1],c=b[1];if(typeof
c!=="number"&&4===c[0]){var
d=G6(b,g(function(b){var
a=b[1][1];if(typeof
a!=="number"&&4===a[0])return a[2][6];return ad(a_o)},a));return g(function(a){return xx(b,a)},d)}}throw[0,h,a_n]}function
G7(c){var
a=c;for(;;){if(a){var
b=WI(a[1]);if(b){var
a=a[2];continue}return b}return 1}}function
WI(i){var
c=i;for(;;){var
a=c[1];if(typeof
a==="number")var
b=0;else
switch(a[0]){case
1:var
d=a[1],b=1;break;case
4:var
e=a[3],b=2;break;case
5:var
f=a[2];if(xs(a[1],a[3]))return 0;if(f)var
d=f[1],b=1;else
var
b=0;break;case
6:var
j=a[1];return G7(g(function(a){return a[3]},j));case
8:var
h=WI(a[1]);if(h)return h;var
c=a[2];continue;case
9:var
c=a[1];continue;case
3:case
7:var
e=a[1],b=2;break;default:var
b=0}switch(b){case
0:return 1;case
1:var
c=d;continue;default:return G7(e)}}}function
xy(l,k){var
b=l,a=k;for(;;){if(b){if(a){var
e=a[1],c=e[1];if(typeof
c==="number")var
d=0;else
switch(c[0]){case
1:var
a=[0,c[1],a[2]];continue;case
5:if(xs(c[1],c[3]))return 0;var
d=1;break;case
8:var
i=a[2],j=xy(b,[0,c[1],i]);if(j)return j;var
a=[0,c[2],i];continue;case
0:var
d=0;break;default:var
d=1}if(d){var
h=pn(e,b),m=a[2],n=s(gz(h,e),m),b=function(g){function
h(i){var
a=i;for(;;){if(a){var
b=a[1];if(b){var
d=b[1],c=d[1];if(typeof
c!=="number")switch(c[0]){case
1:var
a=[0,[0,c[1],b[2]],a[2]];continue;case
8:var
f=b[2],a=[0,[0,c[1],f],[0,[0,c[2],f],a[2]]];continue}var
e=a[2];if(xv(g,d)){var
j=h(e),k=b[2];return[0,s(gz(g,d),k),j]}var
a=e;continue}}return 0}}return h}(h)(b),a=n;continue}var
f=a[2],g=sP(pn(ay,b),b);if(g){if(xw(0,0,g))return N(function(a){var
b=a[1],c=1-GZ(b);if(c){var
d=s(gz(b,ay),f);return xy(a[2],d)}return c},g);var
b=kg(b),a=f;continue}var
b=kg(b),a=f;continue}return 0}return G7(a)}}var
G8=[];qN(G8,function(b){if(b){var
c=b[2],a=b[1];if(c){var
e=d(G8,c);return bE([8,a,e,0],a[4],a[5])}return a}throw[0,h,a_p]});function
a_q(f,e){var
a=e;for(;;){if(a){var
b=a[1],c=d(f,[0,b[1],b[2]]);if(c)return c;var
a=a[2];continue}return 0}}function
WJ(e,a){if(a){var
f=a[1],b=WJ(e,a[2]),c=d(e,[0,f[1],f[2]]);return c?b?[0,s(c[1],b[1])]:c:b}return 0}function
sQ(b,a,d){if(a){if(a[1]){var
f=pn(ay,a),c=sP(f,a);if(c){var
h=function(e){var
a=e[1];if(GZ(a))return 0;var
f=(w(gz(a,ay))+d|0)-1|0,c=sQ(b,e[2],f);return c?[0,WD(a,c[1])]:c};if(xw(1,0,c))if(!WF(b,c))return a_q(h,c);var
g=sQ(b,kg(a),d-1|0);if(g)try{var
i=g[1],k=[0,[0,a96(b,c),i]];return k}catch(a){a=j(a);if(a===kf)return ad(a_r);throw a}return 0}var
e=sQ(b,kg(a),d-1|0);return e?[0,[0,f,e[1]]]:e}return 0}return[0,gy(d)]}function
a_s(f,a,e){function
c(d,a){if(a){var
e=c(d,a[2]);return[0,b(f,d,a[1]),e]}return 0}function
d(a){if(a){var
b=d(a[2]);return s(c(a[1],e),b)}return 0}return d(a)}function
xz(b,a,d){if(a){if(a[1]){var
h=pn(ay,a),c=sP(h,a);if(c){var
e=WJ(function(e){var
a=e[1];if(GZ(a))return 0;var
f=(w(gz(a,ay))+d|0)-1|0,c=xz(b,e[2],f);if(c){var
h=c[1];return[0,g(function(b){return WD(a,b)},h)]}return c},c);if(a90(c))if(!WF(b,c))return e;var
i=xz(b,kg(a),d-1|0);if(i)try{var
l=a_m(b,c),m=i[1],k=a_s(function(b,a){return[0,b,a]},l,m),n=e?[0,s(e[1],k)]:[0,k];return n}catch(a){a=j(a);if(a===kf)return ad(a_t);throw a}return e}var
f=xz(b,kg(a),d-1|0);if(f){var
o=f[1];return[0,g(function(a){return[0,h,a]},o)]}return f}return 0}return[0,[0,gy(d),0]]}function
WK(f,e,a){var
b=xz(f,e,a);if(b){var
c=b[1];if(0===c)return[0,gy(a)];var
i=0;return[0,[0,d(G8,g(function(a){if(a)if(!a[2])return a[1];throw[0,h,a_u]},c)),i]]}return 0}function
G9(v,u){var
d=v,a=u;for(;;){if(a){if(a[1]){var
i=pn(ay,a),c=sP(i,a);if(c){var
f=function(f){function
c(a){if(a){var
d=G9(f,a[1][2]),b=c(a[2]),e=b?d:b;return e}return 1}return c}(d);if(xw(1,0===d?1:0,c))return f(c);if(0===d){var
d=0,a=kg(a);continue}var
w=xw(1,1,c)?f(c):f(sP(i,G4(a)));if(c){var
j=c[1][1],k=j[1];if(typeof
k==="number")var
e=1;else
if(5===k[0])if(d){var
l=G5(j);if(jX(l))var
m=0;else
if(G9(0,kg(a)))var
m=0;else{var
x=d[1],b=aw(l),n=b[1],o=b[6],h=G(function(c,b){var
a=aB(b[2]);if(typeof
a!=="number"&&1===a[0])if(0===a[3]){dJ(a[4],0);return 0}return c},o,n),p=1-b[4],q=p||(h!==b[6]?1:0);if(q){var
r=b[5],s=b[3],t=ak([8,[0,0,fe(0,0),s,1,r,h]]);aq(x,b[2],t)}var
m=1}var
g=1,e=0}else
var
g=0,e=0;else
var
e=1;if(e)var
g=0}else
var
g=0;return w}var
a=kg(a);continue}return 1}return 0}}function
WL(a){return[0,0,0,a]}function
a_v(a){return g(WL,a)}function
WM(c){var
a=c;for(;;){var
b=a[1];if(typeof
b!=="number"&&1===b[0]){var
a=b[1];continue}return a}}function
WN(a){var
b=a[3];if(b)return[0,a[1],a[2],b[2]];throw[0,h,a_y]}function
G_(a){var
b=a[3];if(b)return[0,[0,b[1],a[1]],a[2],b[2]];throw[0,h,a_z]}function
WO(a){var
b=a[3];if(b)return[0,a[1],[0,b[1],a[2]],b[2]];throw[0,h,a_A]}function
WP(a){return g(G_,a)}function
a_C(a){return a[1]}function
WQ(b){function
c(d,a){if(a){var
e=a[2],f=a[1],g=c([0,f,d],e),h=b[1];return[0,[0,s(cG(d,e),h),0,[0,f,0]],g]}return 0}return c(0,b[2])}function
G$(r,q){var
b=r,a=q;for(;;){var
f=a[3];if(f){var
i=f[1],c=WM(i)[1];if(typeof
c==="number")var
d=1;else
switch(c[0]){case
5:if(xs(c[1],c[3]))return 1;var
d=0;break;case
8:if(c[1][2][3])if(c[2][2][3]){var
y=G_(a),b=WP(b),a=y;continue}var
z=WO(a),b=g(WO,b),a=z;continue;case
0:var
d=1;break;default:var
d=0}if(d){if(Z(function(c){var
b=c[3];if(b){var
a=WM(b[1])[1];if(typeof
a!=="number"&&0!==a[0])return 0;return 1}throw[0,h,a_w]},b)){var
t=WN(a),b=g(WN,b),a=t;continue}var
u=G_(a),b=WP(b),a=u;continue}var
j=pn(i,g(function(a){return a[3]},b)),v=f[2],w=s(gz(j,i),v),x=[0,a[1],a[2],w],b=function(i){function
j(k){var
b=k;for(;;){if(b){var
e=b[2],a=b[1],c=a[3];if(c){var
f=c[1],d=f[1];if(typeof
d!=="number")switch(d[0]){case
1:var
b=[0,[0,a[1],a[2],[0,d[1],c[2]]],e];continue;case
8:var
g=c[2],b=[0,[0,a[1],a[2],[0,d[1],g]],[0,[0,a[1],a[2],[0,d[2],g]],e]];continue}if(xv(i,f)){var
l=j(e),m=c[2],n=s(gz(i,f),m);return[0,[0,a[1],a[2],n],l]}var
b=e;continue}throw[0,h,a_B]}return 0}}return j}(j)(b),a=x;continue}if(a[2]){var
A=0,B=WQ(a);if(b){var
e=g(WQ,b);if(!e)throw[0,h,a_D];var
l=e[1],m=g(function(a){return[0,a,0]},l),n=e[2],o=function(b,a){return[0,a,b]},k=G(function(a,b){return aG(o,a,b)},m,n)}else
var
p=a[2],k=g(function(a){return 0},p);return g5(function(j,e,c){if(typeof
c==="number")if(0!==c)return 1;var
k=e[3];if(k)if(!k[2]){var
m=k[1];for(;;){var
d=m[1];if(typeof
d!=="number")switch(d[0]){case
1:var
m=d[1];continue;case
8:var
f=d[2],g=d[1],n=[0,e[1],e[2],[0,g,0]],q=[0,e[1],e[2],[0,f,0]],i=G$(j,n),r=lJ(g,f)?[0,n,j]:j,b=G$(r,q);if(typeof
i==="number")if(0===i){if(typeof
b==="number")if(0===b)var
l=0;else
var
a=[0,[0,f,0]],l=1;else
var
l=0;if(!l)var
a=b}else
var
a=typeof
b==="number"?0===b?[0,[0,g,0]]:1:[0,[0,g,b[1]]];else
var
o=i[1],a=typeof
b==="number"?0===b?i:[0,s(o,[0,f,0])]:[0,s(o,b[1])];if(typeof
c==="number")var
p=0===c?0:1;else{if(typeof
a!=="number")return[0,s(c[1],a[1])];if(0===a)return c;var
p=0}if(!p){var
t=typeof
a==="number"?0===a?0:1:0;if(!t)return a}return 1}throw[0,h,a_x]}}throw[0,h,a_E]},k,B,A)}var
C=a[1];return xy(g(a_C,b),C)?0:1}}function
hn(e,d){var
b=e,a=d;for(;;){if(b)if(a){var
c=xA(b[1],a[1]);if(c){var
b=b[2],a=a[2];continue}return c}return 1}}function
xA(t,s){var
f=t,e=s;for(;;){var
c=f[1],a=e[1];if(typeof
c==="number")var
b=2;else
switch(c[0]){case
1:var
f=c[1];continue;case
2:if(typeof
a==="number")var
b=1;else
switch(a[0]){case
2:return 0===ke(c[1],a[1])?1:0;case
1:var
b=0;break;default:var
b=1}break;case
3:if(typeof
a==="number")var
b=1;else
switch(a[0]){case
3:return hn(c[1],a[1]);case
1:var
b=0;break;default:var
b=1}break;case
4:if(typeof
a==="number")var
b=1;else
switch(a[0]){case
4:var
j=rD(c[2][6],a[2][6]);return j?hn(c[3],a[3]):j;case
1:var
b=0;break;default:var
b=1}break;case
5:var
k=c[2],l=c[1];if(k){if(typeof
a==="number")var
g=1;else
switch(a[0]){case
1:var
b=0,d=0,g=0;break;case
5:var
m=a[2];if(m){var
n=A(l,a[1]);if(n){var
f=k[1],e=m[1];continue}return n}var
d=1,g=0;break;default:var
g=1}if(g)var
b=1,d=0}else{if(typeof
a==="number")var
h=1;else
switch(a[0]){case
1:var
b=0,d=0,h=0;break;case
5:if(!a[2])return A(l,a[1]);var
d=1,h=0;break;default:var
h=1}if(h)var
b=1,d=0}if(d)return 0;break;case
6:if(typeof
a==="number")var
b=1;else
switch(a[0]){case
6:var
o=Wu(c[1],a[1]);return hn(o[1],o[2]);case
1:var
b=0;break;default:var
b=1}break;case
7:var
p=c[1];if(typeof
a==="number")var
i=1;else
switch(a[0]){case
1:var
b=0,i=0;break;case
7:var
q=a[1],u=w(q),r=w(p)===u?1:0;return r?hn(p,q):r;default:var
i=1}if(i)var
b=1;break;case
9:if(typeof
a==="number")var
b=1;else
switch(a[0]){case
9:var
f=c[1],e=a[1];continue;case
1:var
b=0;break;default:var
b=1}break;case
8:var
b=0;break;default:var
b=2}switch(b){case
0:if(typeof
a!=="number"&&1===a[0]){var
e=a[1];continue}break;case
1:break;default:return 1}return 1-xy([0,[0,f,0],0],[0,e,0])}}function
nf(f,c){function
a(h,g){var
c=h,a=g;for(;;){if(a){var
d=a[2],e=a[1];if(N(function(c){return function(a){return b(f,a,c)}}(e),d)){var
a=d;continue}var
c=[0,e,c],a=d;continue}return c}}return a(0,a(0,c))}function
Kn(l,z,y){var
d=z,i=y;for(;;){var
c=d[1],b=i[1];if(typeof
c==="number")var
a=0;else
switch(c[0]){case
1:var
d=c[1];continue;case
2:if(typeof
b==="number")var
a=1;else
switch(b[0]){case
2:if(0===ke(c[1],b[1]))return d;var
a=3;break;case
1:var
a=0;break;case
0:var
a=1;break;case
8:var
a=2;break;default:var
a=3}break;case
3:if(typeof
b==="number")var
a=1;else
switch(b[0]){case
3:var
B=sR(c[1],b[1]);return bE([3,B],d[4],d[5]);case
1:var
a=0;break;case
0:var
a=1;break;case
8:var
a=2;break;default:var
a=3}break;case
4:var
s=c[2];if(typeof
b==="number")var
g=1;else
switch(b[0]){case
0:var
g=1;break;case
1:var
a=0,g=0;break;case
4:if(rD(s[6],b[2][6])){var
C=sR(c[3],b[3]);return bE([4,c[1],s,C],d[4],d[5])}var
a=3,g=0;break;case
8:var
a=2,g=0;break;default:var
a=3,g=0}if(g)var
a=1;break;case
5:var
t=c[2],m=c[1];if(t){if(typeof
b==="number")var
e=1;else
switch(b[0]){case
0:var
e=1;break;case
1:var
a=0,e=0;break;case
5:var
u=b[2];if(u){if(A(m,b[1])){var
D=ng(t[1],u[1]);return bE([5,m,[0,D],c[3]],d[4],d[5])}var
a=3,e=0}else
var
a=3,e=0;break;case
8:var
a=2,e=0;break;default:var
a=3,e=0}if(e)var
a=1}else{if(typeof
b==="number")var
f=1;else
switch(b[0]){case
0:var
f=1;break;case
1:var
a=0,f=0;break;case
5:if(b[2])var
a=3,f=0;else{if(A(m,b[1]))return d;var
a=3,f=0}break;case
8:var
a=2,f=0;break;default:var
a=3,f=0}if(f)var
a=1}break;case
6:if(typeof
b==="number")var
a=1;else
switch(b[0]){case
6:var
E=b[1],F=c[1],k=function(b,a){if(b){if(a){var
g=a[2],d=a[1],h=d[3],e=d[2],i=b[2],f=b[1],j=f[3],c=f[2],l=f[1];if(c[5]<e[5])return[0,[0,l,c,j],k(i,a)];if(e[5]<c[5]){var
m=k(b,g);return[0,[0,d[1],e,h],m]}var
n=k(i,g);return[0,[0,l,c,ng(j,h)],n]}return b}return a},J=k(F,E);return bE([6,J,c[2]],d[4],d[5]);case
1:var
a=0;break;case
0:var
a=1;break;case
8:var
a=2;break;default:var
a=3}break;case
7:var
v=c[1];if(typeof
b==="number")var
h=1;else
switch(b[0]){case
0:var
h=1;break;case
1:var
a=0,h=0;break;case
7:var
x=b[1],G=w(x);if(w(v)===G){var
H=sR(v,x);return bE([7,H],d[4],d[5])}var
a=3,h=0;break;case
8:var
a=2,h=0;break;default:var
a=3,h=0}if(h)var
a=1;break;case
9:var
n=c[1];if(typeof
b==="number")var
j=1;else
switch(b[0]){case
0:var
j=1;break;case
1:var
a=0,j=0;break;case
8:var
a=2,j=0;break;case
9:var
I=ng(n,b[1]);return bE([9,I],n[4],n[5]);default:var
a=3,j=0}if(j)var
a=1;break;default:var
a=0}switch(a){case
0:if(typeof
b!=="number"&&1===b[0]){var
i=b[1];continue}var
K=typeof
c==="number"?1:8===c[0]?0:1;if(K)return i;break;case
1:break;case
2:var
q=b[2],r=b[1];return l<50?zp(l+1|0,r,q,d):aa(zp,[0,r,q,d]);default:throw kf}if(typeof
b!=="number"&&0!==b[0]){var
o=c[2],p=c[1];return l<50?zp(l+1|0,p,o,i):aa(zp,[0,p,o,i])}return d}}function
zp(f,g,c,a){try{var
b=ng(g,a);try{var
e=a.slice();e[1]=[8,b,ng(c,a),0];var
d=e}catch(a){a=j(a);if(a!==kf)throw a;var
d=b}return d}catch(b){b=j(b);if(b===kf)return f<50?Kn(f+1|0,c,a):aa(Kn,[0,c,a]);throw b}}function
ng(a,b){return c4(Kn(0,a,b))}function
sR(b,a){if(b)if(a){var
c=sR(b[2],a[2]);return[0,ng(b[1],a[1]),c]}return 0}function
Ha(b,a){G9([0,b],g(function(a){return[0,a,[0,ay,0]]},a));return 0}function
WR(c){var
a=c;for(;;){if(a){var
b=a[1];if(b[2]){var
a=a[2];continue}var
d=WR(a[2]);return[0,[0,b[1],0],d]}return 0}}var
Hb=O([I,a_F,0]);function
WS(b,a){if(a){var
c=a[1],d=c[1],e=a[2],f=b?0===c[2]?1:0:b,g=WS(f,e);return[0,[0,[0,d,0],d[2]],g]}if(b)throw Hb;return 0}function
WT(a){if(a){var
b=a[1],c=b[1];if(c){var
d=WT(a[2]);return[0,[0,c[2],b[2]],d]}}return 0}function
WU(j,i){var
a=j,b=i;for(;;){if(b){var
e=b[1],c=e[1],d=b[2];if(typeof
c==="number"){var
a=WT(a),b=d;continue}else{if(8===c[0]){var
g=WU(a,[0,c[1],d]);if(g)return g;var
b=[0,c[2],d];continue}var
f=fW(e),k=s(gz(f,e),d),a=function(i){function
j(k){var
a=k;for(;;){if(a){var
d=a[1],b=d[1];if(b){var
e=b[1],c=e[1];if(typeof
c!=="number")switch(c[0]){case
1:var
a=[0,[0,[0,c[1],b[2]],d[2]],a[2]];continue;case
8:var
g=d[2],h=b[2],a=[0,[0,[0,c[1],h],g],[0,[0,[0,c[2],h],g],a[2]]];continue}var
f=a[2];if(xv(i,e)){var
l=j(f),m=d[2],n=b[2];return[0,[0,s(gz(i,e),n),m],l]}var
a=f;continue}}return 0}}return j}(f)(a),b=k;continue}}if(a){var
h=a[1];if(!h[1])return[0,h[2]]}return 0}}function
a_G(e,c){var
a=c;for(;;){if(a){var
b=d(e,a[1]);if(b)return b;var
a=a[2];continue}return 0}}function
iT(a){return b9(0,0,a)}function
pp(a){if(a){var
b=a[1];if(!a[2])return g(function(a){return[0,a,0]},b);if(b){var
c=a[2],d=b[1],e=pp([0,b[2],c]),f=pp(c);return s(g(function(a){return[0,d,a]},f),e)}}return 0}var
Hc=[0,0];function
WV(b){var
c=Hc[1];Hc[1]=Hc[1]+1|0;return o(a_H,o(b,a(i+c)))}function
a_I(a){var
c=bp(0,0),d=bp(0,0);function
b(o){var
e=o;for(;;){var
a=e[1];if(typeof
a!=="number")switch(a[0]){case
1:var
e=a[1];continue;case
3:var
p=pp(g(b,a[1]));return g(function(a){return iT([4,a])},p);case
4:var
f=a[3],i=a[2],j=WV(i[1]),k=[0,[0,j],a[1][2]];bq(c,j,i);var
q=pp(g(b,f));return f?g(function(a){if(a){var
b=a[2]?[0,iT([4,a])]:[0,a[1]];return iT([5,k,b])}throw[0,h,a_J]},q):[0,iT([5,k,0]),0];case
5:var
l=a[2],m=a[1];if(l){var
r=b(l[1]);return g(function(a){return iT([6,m,[0,a]])},r)}return[0,iT([6,m,0]),0];case
6:var
n=a[1],t=pp(g(function(a){return b(a[3])},n)),u=g(function(c){var
a=c[2],b=WV(a[1]);bq(d,b,a);return[0,b]},n);return g(function(a){return iT([7,aG(function(b,a){return[0,b2(b),a]},u,a),1])},t);case
7:var
v=pp(g(b,a[1]));return g(function(a){return iT([8,a])},v);case
8:var
w=b(a[2]);return s(b(a[1]),w);case
9:var
x=b(a[1]);return g(function(a){return iT([12,a])},x)}return[0,iT(0),0]}}return[0,b(a),c,d]}function
WW(o,u,n,m,c){if(c){var
q=p(u,0,c,w(c[1]));if(q){var
d=q[1];if(d)if(!d[2]){var
r=d[1];if(o)var
e=a_I(r),v=e[1],g=a_G(b(o[1],e[2],e[3]),v);else
var
g=[0,r];if(g){var
h=g[1],i=h[1];if(typeof
i==="number")var
a=0;else
if(4===i[0])if(f(i[2][1],a_N))var
a=0;else
var
k=a_O,a=1;else
var
a=0;if(!a)try{var
l=cH(16);G2(jM(l),h);try{var
t=WU(WS(1,m),[0,h,0]),s=t}catch(a){a=j(a);if(a!==Hb)throw a;var
s=0}if(s)an(l,a_M);var
x=cA(l),k=x}catch(a){var
k=a_L}ai(n,[3,k]);return 0}return 1}return ad(a_K)}return 1}if(m)ai(n,12);return 0}function
a_P(c,b,a){return WW(0,sQ,c,b,a)}function
WX(b,a){if(a){var
c=a[1];return Y(b,c)?a:[0,c,WX(b,a[2])]}return[0,b,0]}function
sS(n,m){var
b=n,d=m;for(;;){var
a=d[1];if(typeof
a==="number")var
c=0;else
switch(a[0]){case
1:var
i=a[1],c=2;break;case
4:if(2!==a[2][6][0]){var
e=G0(d[4],d[5]),o=a[3],g=Y(e,Fi);if(g)var
f=g;else{var
h=Y(e,Fj);if(h)var
f=h;else
var
l=Y(e,rK),f=l||Y(e,mV)}var
p=1-f?WX(e,b):b;return G(sS,p,o)}var
j=a[3],c=1;break;case
5:var
k=a[2];if(k)var
i=k[1],c=2;else
var
c=0;break;case
6:var
q=a[1];return G(function(b,a){return sS(b,a[3])},b,q);case
8:var
r=a[2],b=sS(b,a[1]),d=r;continue;case
9:var
d=a[1];continue;case
3:case
7:var
j=a[1],c=1;break;default:var
c=0}switch(c){case
0:return b;case
1:return G(sS,b,j);default:var
d=i;continue}}}function
WY(e,d,c,a){var
f=0,b=G(function(b,a){return sS(b,a[1])},f,c);if(b){if(a){var
g=a[1];return m(function(b){return p(e,[0,b],a,w(g))?0:ai(d,[1,b_(0,b)])},b)}return 0}return 0}function
a_Q(a,b,c){return WY(sQ,a,b,c)}function
a_R(a,b,c){return WY(WK,a,b,c)}function
xB(g){var
a=g;for(;;){if(typeof
a==="number")var
b=0;else
switch(a[0]){case
1:var
c=a[1],b=2;break;case
4:var
d=a[3],b=1;break;case
5:var
e=a[2];if(e)var
c=e[1],b=2;else
var
b=0;break;case
6:var
h=a[1];return N(function(a){return xB(a[3][1])},h);case
8:var
f=xB(a[1][1]);if(f){var
a=a[2][1];continue}return f;case
9:return 0;case
3:case
7:var
d=a[1],b=1;break;default:var
b=0}switch(b){case
0:return 1;case
1:return Z(function(a){return xB(a[1])},d);default:var
a=c[1];continue}}}function
a_T(b){var
a=xA(b,ay);return a?xB(b[1]):a}function
WZ(g,f,b,a){if(dX(a_U)){var
c=nf(hn,WR(a)),d=p(g,b,a,c),e=1===d?1:0,h=e?dX(a_V):e;if(h)p(f,b,a,c);return d}return 0}var
Hd=O([I,a_W,0]),bv=O([I,a_X,0]),W0=O([I,a_Y,0]);function
W1(b){if(0===b[0]){var
a=b[1];if(a){var
c=a[1][1];if(0===c[0]){var
d=c[1][1];if(1===d[0])if(!a[2]){var
e=d[1];return 2===e[0]?[0,e[1]]:0}}}}return 0}function
fX(i){var
g=i[1],a=g[1];if(f(a,a_Z))if(f(a,a_0))return d(eN([0,g[2]],0,0,a_1),a);var
j=i[2],b=g[2];function
c(e){if(e){var
f=e[1][1];if(14===f[0]){var
h=c(e[2]);return[0,fX(f[1]),h]}var
g=c(e[2]);return[0,d(eN([0,b],0,0,a_2),a),g]}return 0}if(0===j[0]){var
h=j[1];if(h){var
k=h[1][1];if(0===k[0]){var
l=k[1][1];if(1===l[0]){var
m=l[1];if(2===m[0]){var
e=h[2],n=m[1];if(e){var
o=e[1][1];if(0===o[0]){var
p=o[1][1];if(1===p[0]){var
q=p[1];if(2===q[0]){var
r=[0,q[1]];return RL([0,b],[0,c(e[2])],r,n)}}}}return RL([0,b],[0,c(e)],0,n)}}}}}return d(eN([0,b],0,0,a_3),a)}function
lK(b,c,a){return m(function(c){var
d=c[1][1];if(f(d,a_4))if(f(d,a_5))return 0;var
e=W1(c[2]);if(e){var
g=e[1];return Ep?ai(b,[0,o(a,o(a_6,g))]):ai(b,[0,o(a,o(a_7,g))])}return ai(b,[0,a])},c)}var
He=Fr.slice();He[1]=function(l,b){var
d=b[1][1],k=f(d,a_8)?f(d,a_9)?1:0:0;if(k)var
a=0;else{var
e=b[2];if(0===e[0]){var
c=e[1];if(c){var
g=c[1],h=g[1];if(0===h[0]){var
i=h[1][1];if(1===i[0])var
j=i[1],a=2===j[0]?c[2]?0:(ai(g[2],[10,j[1]]),1):0;else
var
a=0}else
var
a=0}else
var
a=0}else
var
a=0}return b};var
xC=[0,0];function
sT(b){var
a=xC[1];xC[1]=[0,Eu(0),a];return 0}function
sU(b){var
a=xC[1];if(a){Ev(a[1]);xC[1]=a[2];return 0}throw[0,h,a__]}function
sV(a){function
e(c,b,e,d){var
a=W1(d);if(a)try{var
f=Ew(e,a[1]);return f}catch(a){a=j(a);if(a[1]===k9)return ai(c,[30,b,a_$]);throw a}return ai(c,[30,b,a$a])}return m(function(b){var
c=b[1],a=c[1];if(f(a,a$b)){if(f(a,a$c))if(f(a,a$d)){if(f(a,a$e))return 0;var
d=0}else
var
d=1;else
var
d=0;if(!d)return e(c[2],a,0,b[2])}return e(c[2],a,1,b[2])},a)}function
W2(a){return sl(bz,a)}function
xD(a,c,b,g){function
e(d){try{r0(1,d,a);var
b=0;return b}catch(b){b=j(b);if(b===l)return xD(a,c,d,function(a){return[20,a]});if(b===FI)throw[0,bv,c,a,1];throw b}}switch(b[0]){case
0:break;case
1:var
f=b[1];e(f);if(2===o0(a,iG(r0(1,f,a),a)[1])[0])throw[0,bv,c,a,[25,f]];break;default:e(b[1]);e(b[2]);throw[0,bv,c,a,[24,b]]}throw[0,bv,c,a,d(g,b)]}function
kh(g,k,d,e,a){try{if(1===a[0]){var
i=a[1];if(0===i[0])if(f(i[1],a$f))var
c=0;else
var
h=b(g,[0,a[2]],o1),c=1;else
var
c=0}else
var
c=0;if(!c)var
h=b(g,a,d);return h}catch(b){b=j(b);if(b===l)return xD(d,e,a,k);if(b===FI)throw[0,bv,e,d,1];throw b}}function
Hf(d,b,c){var
a=kh(iH,function(a){return[1,a]},d,b,c),e=b_(0,a[1]);lK(b,a[2][9],e);return a}function
a$g(a){return[18,a]}function
a$h(a,b,c){return kh(FK,a$g,a,b,c)}function
a$i(a){return[18,a]}function
W3(a,b,c){return kh(T9,a$i,a,b,c)}function
a$j(a){return[19,a]}function
W4(a,b,c){return kh(aZD,a$j,a,b,c)}function
Hg(d,b,c){var
a=kh(aZE,function(a){return[21,a]},d,b,c),e=b_(0,a[1]);lK(b,a[2][7],e);return a}function
a$k(d,a,c){Ug(eO(c),a);var
b=kh(fg,function(a){return[17,a]},d,a,c),e=b_(0,b[1]);lK(a,b[2][4],e);return b}function
sW(a,d,c,b){var
e=a?a[1]:0;function
f(a){return[20,a]}return kh(function(b,a){return[0,r0(e,b,a),0]},f,d,c,b)[1]}function
xE(c,b,e){var
a=sW(a$l,c,b,e),d=iG(a,c),f=b_(0,a);lK(b,d[2],f);return[0,a,d]}function
W5(d,b,c){var
a=kh(aZs,function(a){return[22,a]},d,b,c),e=b_(0,a[1]);lK(b,a[2][2],e);return a}function
a$m(b,a){function
c(a){return[18,a]}return xD(b,a[2],a[1],c)}function
W6(b,a){function
c(a){return[19,a]}return xD(b,a[2],a[1],c)}var
W7=[0,function(a){throw[0,h,a$n]}],W8=[0,function(a){throw[0,h,a$o]}],iU=[0,bD],ki=[0,0],pq=[0,0],eZ=[0,bD];function
a$p(e,a,d,b){var
f=b[2],c=e8(function(f,e){var
c=e[1],b=f[1];if(E(b[1],c[1]))throw[0,bv,a,d,[15,b[1]]];return cp(b[1],c[1])},f),g=iy([0,a],0,[0,b[1]]);return[0,c,G(function(d,c){var
b=c[1],f=0,g=e?0:[0,c[2]],h=b[2],i=[0,[0,eO(b[1]),h],0,0,0,1,g,f,a];return iy([0,a],0,[3,d,[0,[0,[0,b[1],a],i],0]])},g,c)]}function
kj(a){sc[1]=a4[1]+1|0;iU[1]=bD;return 0}function
pr(c){var
b=iU[1],a=sc[1];sc[1]=a4[1];return[0,a,b]}function
ps(a){sc[1]=a[1];iU[1]=a[2];return 0}function
W9(a){if(a){var
g=a[1];if(f(g,a$q)){var
b=u(g,0),c=95===b?1:0;if(c)var
d=c;else
var
e=97<=b?1:0,d=e?b<=n8?1:0:e;if(d)return a}return 0}return 0}function
xF(b,c){var
a=[0,W9(b)];return bi(sc[1],a)}function
iV(a,b){return U(W9(a),0)}function
W_(e,b){var
d=b[2],c=b[1];if(typeof
c==="number"){var
k=xF(a$r,0);return[0,0,k,e,d,b[3]]}else{if(0===c[0]){var
a=c[1];try{var
i=f(a,a$s),m=i?95===u(a,0)?1:0:i;if(m)throw[0,bv,d,bz,[13,o(a$t,a)]];d3(a,iU[1]);throw Hd}catch(c){c=j(c);if(c===l){var
g=xF([0,a],0);iU[1]=du(a,g,iU[1]);return[0,[0,a],g,e,d,b[3]]}throw c}}throw[0,h,a$u]}}function
sX(b,c){var
a=iV(b,0);pq[1]=[0,a,pq[1]];return a}function
sY(a){if(a){var
b=a[2];if(b){var
c=sY(b[2]);return[0,b[1],[0,a[1],c]]}}return a}function
e0(a,e,c){var
O=c[2];function
i(d,b){return[0,d,b,a,O,c[3]]}var
d=c[1];if(typeof
d==="number"){if(2===e)var
ac=sX(0,0);else{if(0===e)throw[0,bv,c[2],a,a$v];var
ac=iV(0,0)}return i(0,ac)}else
switch(d[0]){case
0:var
k=d[1],ae=f(k,a$w),a8=ae?95===u(k,0)?1:0:ae;if(a8){var
a9=[13,o(a$x,k)];throw[0,bv,c[2],a,a9]}try{var
ba=af(0,a,dr(k,ki[1])),aj=ba}catch(b){b=j(b);if(b!==l)throw b;try{var
a_=af(0,a,d3(k,eZ[1])[1]),ah=a_}catch(a){a=j(a);if(a!==l)throw a;var
ag=2===e?sX([0,k],0):iV([0,k],0);eZ[1]=du(k,[0,ag,c[2]],eZ[1]);var
ah=ag}var
aj=ah}return i([0,k],aj);case
1:var
al=d[1],am=e0(a,e,d[2]),an=e0(a,e,d[3]);return i([1,al,am,an],ab([1,al,am[2],an[2],0]));case
2:var
ao=d[1];if(w(ao)<2)jS(O,a$y);var
ap=g(function(b){return e0(a,e,b)},ao);return i([2,ap],ab([2,g(function(a){return a[2]},ap)]));case
3:var
D=d[2],P=d[1],ar=Hf(a,c[2],P[1]),q=ar[2],as=ar[1];if(D){var
at=D[1];if(typeof
at[1]==="number")if(D[2])var
C=0;else
if(1<q[2])var
bh=q[1],y=g(function(a){return at},bh),C=1;else
var
C=0;else
var
C=0}else
var
C=0;if(!C)var
y=D;var
bb=q[2];if(w(y)!==bb){var
bc=w(y);throw[0,bv,c[2],a,[3,P[1],q[2],bc]]}var
Q=g(function(b){return e0(a,e,b)},y),bd=W2(q[1]),au=q[5],be=au?t(au[1])[2]===bm?ev:aq:ev,bf=dV(y,Q);aC(function(c,b){try{var
e=be(a,b,c[2][2]);return e}catch(b){b=j(b);if(b[1]===x){var
d=[6,sY(b[2])];throw[0,bv,c[1][2],a,d]}throw b}},bf,bd);var
av=da(as,g(function(a){return a[2]},Q));try{Gg(a,av)}catch(b){b=j(b);if(b[1]===x)throw[0,bv,c[2],a,[6,b[2]]];throw b}return i([3,as,P,Q],av);case
4:var
ax=d[2],bi=d[1],ay=g(function(b){var
c=e0(a,e,oG(b[3]));return[0,b[1],b[2],c]},bi);return i([4,ay,ax],F2(W$(O,a,e,0,ax,ay)));case
5:var
E=d[2],z=d[1];try{var
aH=iH(z[1],a),aK=aH[2];(function(e){var
c=e;for(;;){var
d=c[5];if(d){var
b=t(d[1])[1];if(typeof
b!=="number")switch(b[0]){case
3:var
c=bg(b[1],a);continue;case
8:if(cT(b[1]))return 0;break}throw l}throw l}}(aK));ai(c[2],a$E);var
bw=[0,aH[1],aK,1],S=bw}catch(b){b=j(b);if(b!==l)throw b;try{var
F=z[1];switch(F[0]){case
0:var
R=[0,o(a$A,F[1])];break;case
1:var
bu=o(a$C,F[2]),R=[1,F[1],bu];break;default:var
R=ad(a$D)}var
az=iH(R,a),bj=[0,az[1],az[2],0]}catch(b){b=j(b);if(b===l){Hg(a,c[2],z[1]);throw[0,h,a$z]}throw b}var
S=bj}var
T=S[2],U=S[1],bk=T[2];if(w(E)!==bk){var
bl=w(E);throw[0,bv,c[2],a,[3,z[1],T[2],bl]]}var
V=g(function(b){return e0(a,e,b)},E),bn=W2(T[1]),bo=dV(E,V);aC(function(c,b){try{var
e=ev(a,b,c[2][2]);return e}catch(b){b=j(b);if(b[1]===x){var
d=[6,sY(b[2])];throw[0,bv,c[1][2],a,d]}throw b}},bo,bn);var
aA=g(function(a){return a[2]},V);try{var
aD=aJ(a,da(U,aA))}catch(b){b=j(b);if(b[1]===x)throw[0,bv,c[2],a,[6,b[2]]];throw b}var
H=aD[1];if(typeof
H==="number")var
N=0;else
switch(H[0]){case
4:var
br=a6(H[1]);if(2===e)pq[1]=[0,br[2],pq[1]];var
aE=aD,N=1;break;case
8:var
bs=aw(H[1])[1],bt=g(function(c){var
d=c[2],a=aB(d);if(typeof
a==="number")var
b=0;else
if(0===a[0])var
f=a[1],g=f?[1,0,[0,f[1],0],0,[0,0]]:[1,1,0,0,[0,0]],e=g,b=1;else
var
b=0;if(!b)var
e=d;return[0,c[1],e]},bs),I=[0,bt,iV(0,0),0,1,0,[0,[0,U,aA]]];if(cT(I)){var
aF=I.slice();aF[2]=ab(0);var
W=aF}else
if(2===e){var
aG=I.slice();aG[2]=sX(0,0);var
W=aG}else
var
W=I;var
aE=ab([8,W]),N=1;break;default:var
N=0}if(N)return i([5,U,z,V],aE);throw[0,h,a$B];case
6:var
r=d[2],aL=d[1];try{try{var
bz=dr(r,ki[1]),aN=bz}catch(b){b=j(b);if(b!==l)throw b;var
aN=af(0,a,d3(r,eZ[1])[1])}var
aO=e0(a,e,aL);try{ev(a,aN,aO[2])}catch(b){b=j(b);if(b[1]===x){var
by=[7,sY(b[2])];throw[0,bv,c[2],a,by]}throw b}var
Y=aO}catch(b){b=j(b);if(b!==l)throw b;var
X=iV(0,0);eZ[1]=du(r,[0,X,c[2]],eZ[1]);var
A=e0(a,e,aL);try{ev(a,X,A[2])}catch(b){b=j(b);if(b[1]===x){var
bx=[7,sY(b[2])];throw[0,bv,c[2],a,bx]}throw b}var
aM=af(0,a,X),B=c$(aM),J=B[1];if(typeof
J==="number")var
aa=0;else
switch(J[0]){case
0:var
aa=J[1]?0:(eq(B),B[1]=[0,[0,r]],1);break;case
9:var
aa=J[1]?0:(eq(B),B[1]=[9,[0,r]],1);break;default:var
aa=0}var
Y=[0,A[1],aM,A[3],A[4],A[5]]}return i([6,Y,r],Y[2]);case
7:var
n=d[3],aP=d[2],K=[0,0],aQ=function(b,a){return ab([8,[0,[0,[0,b,a],0],iV(0,0),0,1,0,0]])},L=bp(0,17),aR=function(n,b,g){var
h=jY(b);try{var
i=aV(L,h),k=i[1];if(f(b,k))throw[0,bv,c[2],a,[12,b,k]];var
d=aQ(b,g),e=aQ(b,i[2]);if(dc(a,0,[0,d,0],[0,e,0]))var
m=0;else
try{var
o=aq(a,d,e),m=o}catch(b){b=j(b);if(b[1]===x)throw[0,bv,n,a,[10,d,e]];throw b}return m}catch(a){a=j(a);if(a===l)return bq(L,h,[0,b,g]);throw a}},bB=function(b){if(0===b[0]){var
q=b[4],d=b[3],f=b[1];K[1]=0;var
i=g(function(b){return e0(a,e,b)},q);if(n)if(aY(f,n[1]))var
s=0;else
var
v=[1,d,g(function(a){return a[2]},i),0,[0,0]],s=1;else
var
s=0;if(!s){var
y=1<w(q)?1:0,z=y||(d?0!==q?1:0:d);if(z)throw[0,bv,c[2],a,[8,f]];var
v=i?[0,[0,i[1][2]]]:a$F}aR(c[2],f,v);return[0,f,b[2],d,i]}var
k=b[1],l=e0(a,e,k),A=l[2],o=t(l[2])[1];if(typeof
o==="number")var
u=0;else
if(3===o[0])var
p=[0,[0,o[1],o[2]]],u=1;else
var
u=0;if(!u)var
p=0;try{jL(function(b,a){throw a$},L);K[1]=p}catch(a){a=j(a);if(a!==a$)throw a;K[1]=0}var
r=aJ(a,l[2])[1];if(typeof
r!=="number")switch(r[0]){case
0:if(p)throw[0,bv,k[2],a,[2,p[1][1]]];break;case
8:var
x=r[1];if(cT(x)){var
B=aw(x)[1];m(function(d){var
a=d[2],e=d[1];if(n)if(aY(e,n[1]))var
b=0;else{if(typeof
a==="number")var
c=1;else
if(0===a[0])var
g=a[1],i=g?[1,0,[0,g[1],0],0,[0,0]]:[1,1,0,0,[0,0]],f=i,b=1,c=0;else
var
c=1;if(c)throw[0,h,a$G]}else
var
b=0;if(!b)var
f=a;return aR(k[2],e,f)},B);return[1,l]}break}throw[0,bv,k[2],a,[11,A]]},bC=g(bB,d[1]),bD=0,aS=ou(function(c,b,a){return[0,b,a]},L,bD);if(n){var
bE=n[1];m(function(b){var
d=1-g6(b,aS);if(d)throw[0,bv,c[2],a,[9,b]];return d},bE)}var
bF=K[1],bG=iV(0,0),M=[0,v(aS),bG,0,0===aP?1:0,0,bF];if(cT(M)){var
aT=M.slice();aT[2]=ab(0);var
Z=aT}else
if(2===e){var
aU=M.slice();aU[2]=sX(0,0);var
Z=aU}else
var
Z=M;return i([7,bC,aP,n],ab([8,Z]));case
8:var
aW=d[1];a5(0);var
aX=g(function(a){return[0,a,iV([0,a],0)]},aW),bH=ki[1];ki[1]=s(aX,ki[1]);var
aZ=e0(a,e,d[2]),_=aZ[2];ki[1]=bH;aI(0);bA(_);var
bI=0,a0=ak([10,_,v(G(function(f,e){var
b=c$(e[2]);if(hk(b,_)){var
d=b[1];if(typeof
d!=="number"&&0===d[0])if(b[2]===bm){b[1]=[9,d[1]];return[0,b,f]}throw[0,bv,c[2],a,[14,e[1],b]]}return f},bI,aX))]);ev(a,iV(0,0),a0);return i([8,aW,aZ],a0);case
9:var
a1=d[1],$=a1[1],a2=a$p(1,c[2],a,[0,$,a1[2]]),a3=a2[1],bJ=pr(0),bK=b(W8[1],a,a2[2]);ps(bJ);var
a4=g(function(b){var
c=e0(a,e,b[2]);return[0,b[1],c]},a3),a7=p(W7[1],c[2],a,$[1]),bL=g(function(a){return a[2][2]},a4),bM=ab([11,a7,g(function(a){return a[1][1]},a3),bL]);return i([9,[0,a7,a4,bK[2],$]],bM);default:throw[0,W0,fX(d[1])]}}function
W$(g,f,e,d,c,b){if(b){var
h=b[1],a=h[1];if(aY(a,d))throw[0,bv,g,f,[16,a]];var
i=W$(g,f,e,[0,a,d],c,b[2]);return ab([5,a,0,h[3][2],i])}return 0===c?ab(0):2<=e?sX(0,0):iV(0,0)}function
Hh(e){var
b=t(e),d=0<=b[2]?1:0;if(d){rF(b);var
c=b[1];if(typeof
c!=="number"&&8===c[0]){var
a=aw(c[1]);if(rE(fP(a))){var
f=a[6],h=1,i=a[4],j=a[3],k=a[2],l=a[1];b[1]=[8,[0,g(function(b){var
a=aB(b[2]);if(typeof
a!=="number"&&1===a[0])return[0,b[1],[1,a[1],a[2],1,a[4]]];return b},l),k,j,i,h,f]]}return hh(Hh,a)}return ba(Hh,b)}return d}function
Hi(a){Hh(a);return b3(a)}function
Hj(b,g){var
a=[0,0],c=eZ[1];rM(function(d,h){var
e=h[2],i=h[1],f=xF(0,0),m=ff(0);try{aq(b,f,i);var
r=1,c=r}catch(a){er(m);var
c=0}if(c)try{var
p=a[1];a[1]=[0,[0,e,f,d3(d,iU[1])],p];var
q=0;return q}catch(c){c=j(c);if(c===l){var
n=g?bj(t(i)):g;if(n)throw[0,bv,e,b,[0,o(a$H,d)]];var
k=xF(0,0);a[1]=[0,[0,e,f,k],a[1]];iU[1]=du(d,k,iU[1]);return 0}throw c}return c},c);eZ[1]=bD;return function(d){var
c=a[1];return m(function(c){try{var
a=aq(b,c[2],c[3]);return a}catch(a){a=j(a);if(a[1]===x)throw[0,bv,c[1],b,[6,a[2]]];throw a}},c)}}function
cu(b,a,e){ki[1]=0;eZ[1]=bD;var
f=a?0:1,c=e0(b,f,e);d(Hj(b,a),0);Hi(c[2]);return c}function
sZ(a,c){ki[1]=0;eZ[1]=bD;var
b=e0(a,1,c);Hi(b[2]);return[0,b,Hj(a,0)]}function
Xa(f,d,c,a){var
b=r(eO(a))-1|0,R=3<b>>>0?1<(b-4|0)>>>0?3:2:2<=b?1:0;function
g(k,h,E){var
l=E[2],m=E[1],e=r(h),c=r(k),i=c5(cz(c,e),R);if(i<k2(c-e|0))var
o=0;else{var
d=C4(c+1|0,e+1|0,i+1|0);n(n(d,0)[1],0)[1]=0;var
F=1;if(!(c<1)){var
g=F;for(;;){n(n(d,g)[g+1],0)[1]=g;var
Q=g+1|0;if(c!==g){var
g=Q;continue}break}}var
G=1;if(!(e<1)){var
f=G;for(;;){n(n(d,0)[1],f)[f+1]=f;var
P=f+1|0;if(e!==f){var
f=P;continue}break}}var
H=1;if(!(c<1)){var
a=H;for(;;){var
s=cz(1,(a-i|0)-1|0),t=c5(e,(a+i|0)+1|0);if(!(t<s)){var
b=s;for(;;){var
J=u(h,b-1|0),v=u(k,a-1|0)===J?0:1,w=b-1|0,x=a-1|0,y=b-1|0,K=n(n(d,x)[x+1],w)[w+1]+v|0,z=a-1|0,L=n(n(d,a)[a+1],y)[y+1],A=c5(1+c5(n(n(d,z)[z+1],b)[b+1],L)|0,K);if(1<a)if(1<b){var
M=u(h,b-2|0);if(u(k,a-1|0)===M){var
N=u(h,b-1|0);if(u(k,a-2|0)===N)var
B=b-2|0,C=a-2|0,D=c5(A,n(n(d,C)[C+1],B)[B+1]+v|0),j=1;else
var
j=0}else
var
j=0}else
var
j=0;else
var
j=0;if(!j)var
D=A;n(n(d,a)[a+1],b)[b+1]=D;var
O=b+1|0;if(t!==b){var
b=O;continue}break}}var
I=a+1|0;if(c!==a){var
a=I;continue}break}}var
q=n(n(d,c)[c+1],e)[e+1],o=i<q?0:[0,q]}if(o){var
p=o[1],S=p<l?[0,h,0]:p===l?[0,h,m]:m;return[0,S,c5(p,l)]}return[0,m,l]}var
h=[0,0,fD];function
i(c){var
a=v(c[1]);if(a){var
b=a[2],d=a[1],g=0===b?a$I:a$L,h=dH(a$J,v(b));return p(e(f,a$K),h,g,d)}return 0}e(f,a$M);switch(a[0]){case
0:var
j=0,k=a[1];return i(L(d,function(a,b){return g(k,a,b)},j,c,h));case
1:var
l=[0,a[1]],m=a[2];return i(L(d,function(a,b){return g(m,a,b)},l,c,h));default:return 0}}function
Hk(e,c,a){function
f(e){return d(c,function(f,c){return b(e,d(a,f),c)})}return function(a,b){return Xa(e,f,a,b)}}function
pt(c,a){function
e(c){return d(a,function(d,f,e,a){return b(c,d,a)})}return function(a,b){return Xa(c,e,a,b)}}c8(function(a){if(a[1]===bv){var
f=a[3],c=a[4],g=function(a,c){if(typeof
c==="number")return 0===c?e(a,a$N):e(a,a$O);else
switch(c[0]){case
0:var
t=c[1];return d(e(a,a$P),t);case
1:var
g=c[1];b(e(a,a$Q),bb,g);return b(pt(a,a0g),f,g);case
2:var
u=c[1];return b(e(a,a$R),cD,u);case
3:var
v=c[3],w=c[2],x=c[1];return L(e(a,a$S),bb,x,w,v);case
4:var
y=c[1];return d(e(a,a$T),y);case
5:var
z=c[1];return b(e(a,a$U),bb,z);case
6:var
A=function(a){return e(a,a$V)},B=function(a){return e(a,a$W)};return cN(a,bz,0,c[1],B,A);case
7:var
C=function(a){return e(a,a$X)},D=function(a){return e(a,a$Y)};return cN(a,bz,0,c[1],D,C);case
8:var
E=c[1];return d(e(a,a$Z),E);case
9:var
F=c[1];return d(e(a,a$0),F);case
10:var
h=c[2],i=c[1];return j_(f,function(b){xj([0,i,[0,h,0]]);return cw(e(a,a$3),a$2,aT,i,a$1,aT,h)});case
11:var
j=c[1];eX(j);return b(e(a,a$4),aT,j);case
12:var
G=c[2],H=c[1];return p(e(a,a$6),H,G,a$5);case
13:var
I=c[1];return d(e(a,a$7),I);case
14:var
k=c[2],J=bj(k)?a$8:rE(k)?a$_:a$$,K=c[1];return b(e(a,a$9),K,J);case
15:var
M=c[1];return b(e(a,baa),bb,M);case
16:var
N=c[1];return b(e(a,bac),N,bab);case
17:var
l=c[1];b(e(a,bad),bb,l);return b(pt(a,a0f),f,l);case
18:var
m=c[1];b(e(a,bae),bb,m);return b(Hk(a,Un,function(a){return a[1]}),f,m);case
19:var
n=c[1];b(e(a,baf),bb,n);return b(Hk(a,Uo,function(a){return a[1]}),f,n);case
20:var
o=c[1];b(e(a,bag),bb,o);return b(pt(a,a0e),f,o);case
21:var
q=c[1];b(e(a,bah),bb,q);return b(pt(a,a0i),f,q);case
22:var
r=c[1];b(e(a,bai),bb,r);return b(pt(a,a0h),f,r);case
23:var
s=c[1];b(e(a,baj),bb,s);return b(pt(a,a0j),f,s);case
24:var
O=c[1];return b(e(a,bak),bb,O);default:var
P=c[1];return b(e(a,bal),bb,P)}};return[0,fa(a[2],g,c)]}return a[1]===W0?[0,a[2]]:0});var
ac=O([I,bam,0]),Hl=O([I,ban,0]),Xb=[0,function(b,a){throw[0,h,bao]}],Xc=[0,function(a){throw[0,h,bap]}],Xd=[0,function(a){throw[0,h,baq]}],Xe=[0,function(b,a){throw[0,h,bar]}];function
d5(a){r_([2,a]);return a}function
fj(a){r_([3,a]);return a}function
bas(a){return a[2]}function
Xf(b,a){return[0,b,0,a]}function
Xg(q,a){function
g(g,r){var
c=r;for(;;){d(q,c);var
a=c[1];switch(a[0]){case
2:b(a[3]);return m(h,a[2]);case
3:return m(j,a[1]);case
4:br(b,a[2]);var
c=a[4];continue;case
5:b(a[1]);var
s=a[2];return m(function(a){return b(a[2])},s);case
11:br(b,a[2]);var
t=a[1];return m(function(a){return b(a[2])},t);case
13:var
n=a[3],l=a[1],f=1;break;case
15:b(a[1]);b(a[2]);return br(b,a[3]);case
18:b(a[2]);b(a[3]);var
c=a[5];continue;case
24:var
u=a[1];return m(function(a){return b(a[2])},u);case
25:b(a[3]);var
o=a[2];return g<50?e(g+1|0,o):aa(e,[0,o]);case
29:return m(k,a[1][2]);case
31:var
p=a[1];return g<50?e(g+1|0,p):aa(e,[0,p]);case
32:var
i=a[3],f=0;break;case
6:case
7:b(a[1]);return m(j,a[2]);case
8:case
14:return m(b,a[1]);case
9:case
10:return br(b,a[2]);case
16:case
17:var
n=a[2],l=a[1],f=1;break;case
23:case
30:var
i=a[2],f=0;break;case
0:case
1:case
22:case
33:return 0;default:var
i=a[1],f=0}if(f){b(l);var
c=n;continue}var
c=i;continue}}function
e(f,h){var
b=h;for(;;){var
a=b[1];switch(a[0]){case
1:return m(i,a[1]);case
2:var
d=a[3];break;case
3:c(a[1]);var
b=a[2];continue;case
4:var
d=a[1];break;case
5:var
e=a[1];return f<50?g(f+1|0,e):aa(g,[0,e]);default:return 0}var
b=d;continue}}function
b(a){return c4(g(0,a))}function
c(a){return c4(e(0,a))}function
j(a){br(b,a[2]);return b(a[3])}function
h(a){return b(a[2])}function
i(e){var
a=e[1];switch(a[0]){case
0:return b(a[1]);case
1:return m(h,a[2]);case
6:var
d=a[1][2];break;case
7:var
g=a[1];return m(function(a){return c(a[2])},g);case
10:var
i=a[1];return m(function(a){return f(a[4])},i);case
12:var
d=a[1][1];break;default:return 0}return c(d)}function
f(d){var
c=d;for(;;){var
a=c[1];switch(a[0]){case
1:return m(k,a[1][2]);case
2:br(b,a[2]);var
c=a[4];continue;case
3:f(a[1]);var
e=a[2];return m(function(a){return b(a[2])},e);case
4:m(h,a[2]);var
c=a[3];continue;case
5:var
c=a[1];continue;default:return 0}}}function
k(d){var
a=d[1];switch(a[0]){case
0:return f(a[2]);case
4:return b(a[1]);case
3:break;case
1:case
2:var
c=a[1][3];if(0!==c[0])return b(c[2]);break;default:return 0}return 0}return b(a)}function
Xh(a){switch(a[0]){case
0:return ch(iD);case
1:return ch(aXs);case
2:return ch(jZ);case
3:return ch(aXt);case
4:return ch(aXw);case
5:return ch(aXx);default:return ch(aXv)}}function
nh(a){return ab([3,mV,[0,a,0],[0,0]])}function
Xi(d,c,b,a){return[0,d,b,0,c,a,0]}function
Hm(b,a){var
c=FK(Xj,o1);return Xi([8,b2(Xj),c,0],b,a,o1)}function
Xk(a){var
b=FK(Xl,o1),c=a[5],d=a[2],e=nh(a[4]);return Xi([8,b2(Xl),b,[0,a,0]],e,d,c)}function
xG(d,c){var
a=aJ(d,c)[1];if(typeof
a!=="number"&&3===a[0]){var
b=a[2];if(b)if(!b[2])if(Y(a[1],mV))return b[1]}throw[0,h,bat]}function
xH(d,c){var
a=Gd(d,c),b=a[3][3];if(typeof
b!=="number"&&0===b[0])return[0,a[1],a[2],b[1]];throw l}function
Xm(f,e){var
b=Gd(f,e),a=b[3][3],c=b[2],d=b[1];if(typeof
a==="number"){if(1===a)return[0,d,c,0]}else
if(1===a[0])return[0,d,c,a[1]];throw l}function
bav(b){var
a=b[1][1];if(f(a,baw))if(f(a,bax))return 0;return 1}function
Xn(a){return N(bav,a)}function
fY(c,b,d,a){try{var
e=aq(b,d,a);return e}catch(a){a=j(a);if(a[1]===x)throw[0,ac,c,b,[3,a[2]]];if(a[1]===sa)throw[0,bv,c,b,[12,a[2],a[3]]];throw a}}function
lL(c,b,d,a){try{var
e=aq(b,d,a);return e}catch(a){a=j(a);if(a[1]===x)throw[0,ac,c,b,[7,a[2]]];if(a[1]===sa)throw[0,bv,c,b,[12,a[2],a[3]]];throw a}}var
s0=[0,0];function
bay(b){var
a=s0[1];if(a)return a[1];throw[0,h,baz]}function
ho(c,a,b){return fY(a[2],c,a[4],b)}function
Hn(d){var
b=d[1];if(typeof
b!=="number"&&5===b[0]){var
g=b[2],e=aJ(d[5],d[4])[1];if(typeof
e!=="number"&&8===e[0]){var
i=e[1];b[3][1]=i;var
c=aw(i),a=SZ(b[1],c);if(typeof
a==="number")return 0;else
if(1===a[0]){var
j=a[1];if(0===j){var
f=a[2];if(f)if(!c[4]){var
k=f[1];dJ(a[4],[0,[0,k]]);if(g){var
l=g[1],n=[0,k,f[2]],o=l[5];return m(function(a){return ho(o,l,a)},n)}throw[0,h,baC]}}else
if(!a[2])if(!c[4])return dJ(a[4],baD);if(0!==a[3])if(!jX(c))return dJ(a[4],[1,j,0,0,[0,0]])}return 0}throw[0,h,baB]}return 0}function
hp(b,a){d(b,a);var
c=a[1];return Ur(function(a){return hp(b,a)},c)}function
Ho(a){try{hp(function(b){var
a=b[1];if(typeof
a!=="number"&&5===a[0])throw a$;return 0},a);var
b=0;return b}catch(a){a=j(a);if(a===a$)return 1;throw a}}var
fZ=[0,0],kk=[0,0],Xo=[0,0],Xp=[0,0],xI=[0,0];function
s1(b,a){fZ[1]=0;kk[1]=0;Xo[1]=b;Xp[1]=a;xI[1]=0;return 0}function
xJ(d,c,b,a,f){var
g=d?d[1]:0,h=c?c[1]:0,i=fZ[1];if(N(function(b){return A(b[1][2],a[1])},i))throw[0,ac,b,bz,[5,a[1]]];var
e=H(a[1]);fZ[1]=[0,[0,e,f,a,b,h],fZ[1]];if(g){if(1-Xp[1])throw[0,ac,b,bz,2];xI[1]=[0,[0,a,b],xI[1]]}else{var
j=Xo[1];br(function(a){return aAo},j)}return e}function
Xq(a){return e8(function(b,a){return Q(b[1][2],a[1][2])},a)}function
baE(e,c,b,a){var
d=Xq(b),f=Xq(a);function
g(n,m){var
f=n,b=m;for(;;){if(f){var
h=f[1],a=h[1];if(b){var
i=b[2],k=b[1],d=k[1],l=f[2];if(lq(a,d)){if(a===d){var
f=l,b=i;continue}try{aq(c,h[2],k[2])}catch(b){b=j(b);if(b[1]===x)throw[0,ac,e,c,[4,a,b[2]]];throw b}return[0,[0,d,a],g(l,i)]}var
o=CP(a[2],d[2])?a:d;throw[0,ac,e,c,[6,o]]}throw[0,ac,e,c,[6,a]]}if(b)throw[0,ac,e,c,[6,b[1][1]]];return 0}}return g(d,f)}function
ni(a,q){var
c=q;for(;;){var
b=c[1];if(typeof
b!=="number")switch(b[0]){case
1:var
c=b[1];continue;case
3:var
r=b[1];return ab([2,g(function(b){return ni(a,b)},r)]);case
4:var
f=b[3],e=b[2],s=0===e[11]?1:0,u=s||(0!==e[3]?1:0);if(u)return c[4];var
v=g(function(b){return ni(a,b)},f),h=sm(0,e),w=h[1],x=dV(f,v);aC(function(b){var
c=b[1].slice();c[4]=b[2];return function(b){return ho(a,c,b)}},x,w);return h[2];case
5:var
y=b[2],z=bt(function(b){return ni(a,b)},y),A=U(0,0);return ab([8,[0,[0,[0,b[1],[0,z]],0],A,0,0,0,0]]);case
6:var
i=b[1],j=cQ(i)[2];if(0===j[8])return c[4];var
k=U(0,0),l=g(function(a){return[0,a[2][5],a[3]]},i),B=function(b){var
f=m9(0,b),g=f[2],h=c.slice(),r=f[3];h[4]=k;ho(a,h,r);var
i=0===b[4]?1:0;if(i){var
j=g6(b[5],l);if(j){var
m=t(b[3])[1];if(typeof
m==="number")var
e=0;else
if(10===m[0])var
n=0,e=1;else
var
e=0;if(!e)var
n=1;var
d=n}else
var
d=j}else
var
d=i;if(d){var
o=dr(b[5],l),p=o.slice();p[4]=ni(a,o);return ho(a,p,g)}var
q=m9(0,b);aq(a,g,q[2]);return ho(a,c,q[3])};k4(B,j[6]);return k;case
8:var
m=b[3],n=b[2];if(m){var
d=aw(m[1]),C=d[6],D=d[5],E=d[3],F=U(0,0);return ab([8,[0,d[1],F,E,0,D,C]])}var
o=ni(a,b[1]),G=ni(a,n),p=n.slice();p[4]=G;ho(a,p,o);return o}return c[4]}}function
baF(a,b,c){var
j=Hf(a,b,c),d=j[1],q=j[2][1],k=g(function(a){return U(0,0)},q),e=aJ(a,ab([3,d,k,[0,0]]))[1];if(typeof
e!=="number"&&8===e[0]){var
f=e[1];if(cT(f)){var
r=aw(f)[1],l=G(function(g,f){var
b=f[1],c=g[2],d=g[1],e=aB(f[2]);if(typeof
e!=="number"&&0===e[0]){var
h=e[1];if(h){var
i=h[1];return[0,[0,[0,b,[0,[0,0,y,0,i,a,0]]],d],[0,[0,b,[1,0,[0,i,0],1,[0,0]]],c]]}return[0,[0,[0,b,0],d],[0,[0,b,[1,1,0,1,[0,0]]],c]]}return[0,d,c]},baG,r),s=U(0,0),m=[0,v(l[2]),s,0,0,0,[0,[0,d,k]]],h=ab([8,m]),n=[0,b[1],b[2],1],o=m.slice();o[2]=U(0,0);var
t=[0,o],u=l[1],i=g(function(b){return[0,[5,b[1],b[2],t],n,0,h,a,0]},u);if(i){var
w=i[2],x=i[1],p=G(function(c,b){return[0,[8,b,c,[0,f]],n,0,h,a,0]},x,w).slice();p[2]=b;return[0,d,fj(p),h]}throw[0,ac,b,a,[30,c]]}}throw[0,ac,b,a,[30,c]]}function
xK(d,g){var
a=g;for(;;){try{var
h=[0,bg(a,d)],b=h}catch(a){a=j(a);if(a!==l)throw a;var
b=0}if(b){var
e=b[1][5];if(e){var
c=t(e[1])[1];if(typeof
c!=="number"&&3===c[0]){var
a=c[1];continue}return a}}var
f=j1(0,d,a);if(Y(a,f))return a;var
a=f;continue}}function
s2(a,c,b){var
d=xK(a,b);return Y(xK(a,c),d)}function
Xr(e){function
i(c,b){var
a=d(e[3],b)[1];if(typeof
a!=="number"&&3===a[0])return a[1];throw[0,h,baH]}function
a(g,a,f,c){function
h(b){return s2(a,f,i(a,b))?d(e[2],b):baI}return b(Hk(g,e[5],h),a,c)}function
s(b,a,f){var
g=T2(a,b),h=d(e[4],g),i=bg(a,b);oY(b,ls(a),i);var
c=f[1];if(0===c[0]){var
k=c[1];try{var
p=io(function(a){return A(d(e[2],a),k)},h);return p}catch(c){c=j(c);if(c===l){var
m=f[1],n=e[1],o=[13,baJ,U(0,0),n,a,m];throw[0,ac,f[2],b,o]}throw c}}throw l}function
c(h,g,f){var
b=g,a=f;for(;;){if(a){var
c=a[2],e=a[1];if(N(d(h,e),b)){var
a=c;continue}var
b=[0,e,b],a=c;continue}return v(b)}}function
n(a,e,d){var
f=i(a,e),h=g(function(b){return i(a,b[1])},d),j=[0,f,0],b=c(function(b,c){return s2(a,b,c)},j,h);if(b)if(!b[2])return 0;return g(Vx,b)}function
t(a,c,b){return io(function(b){return s2(a,c,i(a,b[1]))},b)}return[0,i,a,s,c,n,t,function(x,w,v,a,c,u,f){var
m=x?x[1]:ai,J=w?w[1]:function(b,a){return 0},p=v?v[1]:f;if(u){var
q=u[1],y=q[3],h=q[2],r=function(f){var
c=A(e[1],baK)?baL:baO,d=[8,o(baN,o(c,baM))];return b(m,a[2],d)};try{var
D=t(c,h,p),E=D[1];d(D[2],0);if(1-y)if(f)if(s2(c,h,i(c,f[1][1]))){var
F=n(c,E,f[2]);if(0!==F){var
Q=[24,[0,eO(a[1]),0],F,0];b(m,a[2],Q)}}else
r(0);else
r(0);var
B=E}catch(d){d=j(d);if(d!==l)throw d;try{var
C=s(c,h,a);b(J,h,C);var
O=Vx(h),P=[23,O,[0,eO(a[1]),0],0];b(m,a[2],P);if(1-y)r(0);var
z=C}catch(d){d=j(d);if(d!==l)throw d;if(0!==f){var
L=xK(c,h),M=[0,q[1],L],N=g(function(b){var
a=i(c,b[1]);return[0,a,xK(c,a)]},f);throw[0,ac,a[2],c,[14,e[1],a[1],M,N]]}var
z=b(e[6],c,a)}var
B=z}var
k=B}else
if(f){var
G=f[1],H=G[1];d(G[2],0);var
I=n(c,H,f[2]);if(0!==I){var
R=[24,[0,eO(a[1]),0],I,0];b(m,a[2],R)}var
k=H}else
var
k=b(e[6],c,a);var
S=p?p[1][1]===k?1:0:0;if(!S){var
K=[25,d(e[2],k)];ai(a[2],K)}return k}]}function
s3(f,e,c,a){try{var
g=d(c,a);return g}catch(a){a=j(a);if(a[1]===ac){var
b=a[4];if(typeof
b!=="number"&&13===b[0])throw[0,ac,a[2],a[3],[13,f,e,b[3],b[4],b[5]]]}throw a}}function
baQ(a){return a[1]}function
baR(a){return a[2]}var
xL=Xr([0,baP,baQ,baR,function(a){return a[2]},Uo,W6]);function
Xs(y,l,J,e,I,c,a){if(a){var
z=a[1][1][1];if(0===z[0])if(y){var
A=y[1];if(is(A,z[1]))var
B=g(function(a){var
b=a[1],c=b[1];if(0===c[0]){var
d=a[2];return[0,b,aV(A,c[1]),d]}throw[0,h,baU]},a),f=1;else
var
f=0}else
var
f=0;else
var
f=0}else
var
f=0;if(!f){var
k=a;for(;;){if(k){var
x=k[1][1][1];if(1!==x[0]){var
k=k[2];continue}var
o=[0,x[1]]}else
var
o=0;if(o)var
K=o[1],p=g(function(a){var
b=a[1],c=b[1];return 0===c[0]?[0,[0,[1,K,c[1]],b[2]],a[2]]:a},a);else
var
p=a;var
q=g(function(a){return eO(a[1][1])},p),r=[0,0],n=[0,0],i=[0,0],s=[0,baS],C=function(d,a){if(typeof
a!=="number")switch(a[0]){case
8:r[1]=1;return 0;case
23:var
b=a[2];if(b)if(!b[2]){i[1]=[0,b[1],i[1]];s[1]=a[1];return 0}break;case
24:var
c=a[1];if(c)if(!c[2]){n[1]=[0,[0,c[1],a[2]],n[1]];return 0}break}return ai(d,a)},t=g(function(p){var
b=p[1],u=p[2],a=W4(e,b[2],b[1]),m=0===c?1:0,t=m?0===a?1:0:m;if(t)W6(e,b);if(c)if(0===c[1][3])var
i=0;else
var
h=[0,1,a],i=1;else
var
i=0;if(!i){var
n=0===c?1:0,r=function(b){var
a=bp(0,8),c=b[1][6];k4(function(b){return bq(a,b[1],0)},c);return Z(function(b){return is(a,b)},q)},s=function(c){var
a=1-J;if(a)var
b=a;else
var
d=c[1][6].length-1,b=w(q)===d?1:0;return b},f=d(by(r),a);if(n)if(0===f)var
g=[0,0,a],j=1;else
var
j=0;else
var
j=0;if(!j){var
l=d(by(s),f);if(n)if(0===l)var
g=[0,0,f],k=1;else
var
k=0;else
var
k=0;if(!k)var
g=[0,1,l]}var
h=g}var
o=h[2],v=h[1]?gN(xL[7],[0,C],0,[0,a],b,e,c,o):cQ(o)[1];return[0,b,v,u]},p);if(r[1])ai(l,baT);else{var
j=v(n[1]);if(j){var
u=g(function(a){return b(xL[1],e,a[2])},t),E=cQ(u),F=ik(u);if(Z(function(a){return s2(e,E,a)},F)){var
G=1,H=j[1][2];ai(l,[24,g(function(a){return a[1]},j),H,G])}else
m(function(a){return ai(l,[24,[0,a[1],0],a[2],0])},j)}}if(0!==i[1]){var
D=v(i[1]);ai(l,[23,s[1],D,1])}var
B=t;break}}return g(I,e8(function(b,a){return gg(b[2][5],a[2][5])},B))}function
baV(g,b,q){if(b){var
c=b[1][2][6],d=X(c.length-1,0);m(function(e){var
a=e[2],b=a[5];if(n(d,b)[b+1])throw[0,ac,g,bz,[10,a[1]]];var
c=a[5];return n(d,c)[c+1]=1},b);var
h=0===q?1:0,i=h?dX(baW):h;if(i){var
k=c.length-1-1|0,j=0,r=0;if(k<0)var
e=j;else{var
a=r,f=j;for(;;){var
p=1-n(d,a)[a+1]?[0,n(c,a)[a+1][1],f]:f,s=a+1|0;if(k!==a){var
a=s,f=p;continue}var
e=p;break}}var
l=0!==e?1:0;if(l)return ai(g,[4,dH(baX,v(e))]);var
o=l}else
var
o=i;return o}return 0}function
baZ(a){return a[1]}function
ba0(a){return a[2]}var
Hp=Xr([0,baY,baZ,ba0,function(a){return a[1]},Un,a$m]);function
ba1(f,c,e,d){var
b=sm(0,d)[2],a=t(b)[1];if(typeof
a!=="number"&&3===a[0]){var
i=a[3],j=a[2],k=g(function(a){return U(0,0)},j);b[1]=[3,a[1],k,i];Gg(c,b);return fY(f,c,b,e)}throw[0,h,ba2]}function
Xt(D,Y,C,X,a,i,e){function
o(c,b){var
d=c?c[1]:X,e=b?b[1]:a;return function(a,b){return Xt(D,Y,C,d,e,a,b)}}var
c=i[2],f=i[1];if(typeof
f==="number")return fj([0,0,c,0,e,a[1],i[3]]);else
switch(f[0]){case
0:var
Z=f[1],aX=xJ(0,0,c,Z,e);return fj([0,[0,aX,Z],c,0,e,a[1],i[3]]);case
1:var
_=f[2],aY=f[1],E=b(o(0,0),aY,e);a5(0);var
$=ni(a[1],E);aI(0);bA($);var
aZ=xJ(0,ba3,c,_,$);return fj([0,[1,E,aZ,_],c,0,E[4],a[1],i[3]]);case
2:var
aa=f[1],a0=Xh(aa);fY(c,a[1],a0,e);return fj([0,[2,aa],c,0,e,a[1],i[3]]);case
3:var
ad=f[1];if(1===ad[0]){var
ae=f[2];if(1===ae[0]){var
F=ae[1],G=ad[1],H=[0,c[1],c[2],1],I=function(a,b){if(a===b)return EJ([0,H],0,[1,a]);var
c=I(dG(a+1|0),b);return R5([0,H],0,EJ([0,H],0,[1,a]),c)},ag=G<=F?I(G,F):I(F,G),a1=[0,ag[1],c,ag[3]];return b(o(0,0),a1,e)}}throw[0,ac,c,a[1],5];case
4:var
ah=f[1];if(w(ah)<2)jS(c,ba4);var
aj=g(function(a){return[0,a,U(0,0)]},ah),a2=ab([2,g(function(a){return a[2]},aj)]);fY(c,a[1],a2,e);var
a3=g(function(a){var
c=a[2],d=a[1];return b(o(0,0),d,c)},aj);return fj([0,[3,a3],c,0,e,a[1],i[3]]);case
5:var
ak=f[2],p=f[1];try{var
as=Xm(a[1],e),bc=[0,[0,as[1],as[2],1]],al=bc}catch(a){a=j(a);if(a!==l)throw a;var
al=0}var
am=p[1];if(0===am[0])if(D){var
an=D[1],ao=am[1];if(is(an,ao))var
a4=0,a6=function(a){return 0},ap=[0,[0,aV(an,ao),a6],a4],A=1;else
var
A=0}else
var
A=0;else
var
A=0;if(!A)var
ap=W3(a[1],p[2],p[1]);var
a7=function(d,b){var
c=b[10];if(c)throw[0,ac,p[2],a[1],[34,d,b[1]]];return c},k=s3(ba5,e,cw(Hp[7],0,[0,a7],0,p,a[1],al),ap),a8=eO(p[1]);FL(1,a[1],a8,k);lK(c,k[13],k[1]);var
a9=C?0!==k[3]?1:0:C;if(a9)throw[0,ac,c,a[1],4];if(k[10])ba1(c,a[1],e,k);if(ak){var
r=ak[1],J=r[1];if(typeof
J==="number")if(1===k[5])var
q=0;else{if(0===k[5])ai(r[2],13);var
K=vH(r,k[5]),q=1}else
if(4===J[0]){if(1<k[5])var
T=1;else
if(Xn(i[3]))var
T=1;else
var
q=0,T=0;if(T)var
K=J[1],q=1}else
var
q=0;if(!q)var
K=[0,r,0];var
s=K}else
var
s=0;var
a_=k[5];if(w(s)!==a_){var
a$=w(s);throw[0,ac,c,a[1],[1,p[1],k[5],a$]]}var
aq=sm([0,[0,a,bay(0)]],k),ar=aq[2];if(k[10])if(0===X){var
W=s0[1];if(!W)throw[0,h,baA];var
aW=W[1];try{try{bU[1]=0;w1[1]=[0,aW];F3(1,1,function(b){return Gk(a,ar,e)});w1[1]=0;d(ct[2],w2)}catch(a){a=j(a);d(ct[2],w2);if(a[1]===x)throw[0,x,a[2]];w1[1]=0;throw a}}catch(b){b=j(b);if(b[1]===x)throw[0,ac,c,a[1],[3,b[2]]];if(b[1]===sa)throw[0,bv,c,a[1],[12,b[2],b[3]]];if(b[1]===Uw)throw[0,ac,c,a[1],[33,b[2]]];throw b}var
V=1}else
var
V=0;else
var
V=0;if(!V)fY(c,a[1],ar,e);var
ba=aq[1],bb=aG(function(c,a){return b(o(0,0),c,a)},s,ba);return fj([0,[4,p,k,bb],c,0,e,a[1],i[3]]);case
6:var
t=f[2],at=f[1],u=t?[0,U(0,0),0]:0,au=[0,[0,[0,at,[1,0===t?1:0,u,1,[0,0]]],0],U(0,0),0,0,0,0],bd=ab([8,au]);fY(c,a[1],bd,e);if(t)if(u)if(u[2])var
B=0;else
var
bg=u[1],bh=t[1],av=[0,b(o(0,0),bh,bg)],B=1;else
var
B=0;else
var
B=0;if(!B)var
av=0;var
aw=au.slice(),be=i[3],bf=a[1];aw[2]=U(0,0);return fj([0,[5,at,av,[0,aw]],c,0,e,bf,be]);case
7:var
ax=f[2],ay=f[1];if(0===ay)jS(c,ba6);try{var
aB=xH(a[1],e),bo=[0,[0,[0,aB[1],aB[2],1]],e],L=bo}catch(a){a=j(a);if(a!==l)throw a;var
L=[0,0,U(0,0)]}var
az=L[2],bi=function(f){var
h=f[2],d=f[1];a5(0);var
g=m9(0,h),i=g[2],e=g[1];if(0===e)aI(0);try{fY(c,a[1],g[3],az)}catch(b){b=j(b);if(b[1]===x)throw[0,ac,d[2],a[1],[2,d[1],b[2]]];throw b}var
k=f[3],l=b(o(0,0),k,i);if(0!==e){aI(0);bA(i);m(bA,e);if(N(function(c){var
b=aJ(a[1],c),d=1-bj(b),e=d||(b[2]!==bm?1:0);return e},e))throw[0,ac,d[2],a[1],[0,d[1]]]}return[0,d,h,l]},bk=L[1],bl=a[1],bn=0,aA=s3(ba7,e,function(a){return Xs(Y,c,bn,bl,bi,bk,a)},ay);baV(c,aA,ax);fY(c,a[1],az,e);return fj([0,[6,aA,ax],c,0,e,a[1],i[3]]);case
8:var
aC=U(0,0),bp=ch(Tt(aC));fY(c,a[1],bp,e);var
bq=f[1],br=g(function(a){return[0,a,U(0,0)]},bq),bs=g(function(a){var
c=a[1];return b(o(0,0),c,aC)},br);return fj([0,[7,bs],c,0,e,a[1],i[3]]);case
9:var
bt=fZ[1],bu=f[1],bw=b(o(ba8,0),bu,e),aD=fZ[1];fZ[1]=bt;var
bx=f[2],by=b(o(ba9,0),bx,e),bz=baE(c,a[1],aD,fZ[1]);fZ[1]=aD;var
bB=i[3],bC=a[1];return fj([0,[8,bw,wK(bz,by),0],c,0,e,bC,bB]);case
10:var
v=f[1],M=v[1];if(typeof
M!=="number"&&0===M[0]){var
aK=f[2],aL=aK[1];if(typeof
aL!=="number"&&8===aL[0]){var
Q=v[2],aM=M[1],aN=sZ(a[1],aK),aO=aN[1],R=aO[2];fY(Q,a[1],R,e);kk[1]=[0,aN[2],kk[1]];var
z=R[1];if(typeof
z!=="number"&&10===z[0]){a5(0);var
aP=iP(ba$,0,z[2],z[1])[2];aI(0);bA(aP);var
bE=xJ(0,0,Q,aM,aP);return fj([0,[0,bE,aM],Q,[0,[0,[0,aO],c,i[3]],0],R,a[1],0])}throw[0,h,ba_]}}a5(0);var
aE=sZ(a[1],f[2]),aF=aE[1],O=aF[2];aI(0);fh(O);var
bD=af(0,a[1],O),P=af(0,a[1],O);fY(c,a[1],P,e);var
n=b(o(0,0),v,bD);kk[1]=[0,aE[2],kk[1]];var
aH=[0,[0,aF],c,v[3]],y=n[1];if(typeof
y!=="number"&&0===y[0])return[0,[1,[0,0,n[2],n[3],n[4],n[5],0],y[1],y[2]],n[2],[0,aH,0],P,n[5],n[6]];return[0,n[1],n[2],[0,aH,n[3]],P,n[5],n[6]];case
11:var
aQ=f[1],S=baF(a[1],c,aQ[1]),aR=S[2];fY(c,a[1],S[3],e);var
aS=aR.slice();aS[3]=[0,[0,[1,S[1],aQ],c,i[3]],aR[3]];return aS;case
12:var
aT=U(0,0),bF=ch(Tu(aT));fY(c,a[1],bF,e);var
bG=f[1],bH=b(o(0,0),bG,aT);return fj([0,[9,bH],c,0,e,a[1],i[3]]);case
13:var
aU=f[1],bI=xJ(bba,0,c,aU,e);return fj([0,[0,bI,aU],i[2],[0,[0,0,c,i[3]],0],e,a[1],0]);case
14:throw[0,ac,c,a[1],8];default:throw[0,Hl,fX(f[1])]}}function
s4(c,h,g,b,a,f,e){var
i=c?c[1]:0,k=b?b[1]:o2(0);s0[1]=[0,k];try{var
d=Xt(h,g,1-i,0,a,f,e);hp(function(b){b[5]=a[1];return 0},d);s0[1]=0;return d}catch(a){a=j(a);s0[1]=0;throw a}}function
bbb(g,f,e,d,c,b){var
a=ff(0);try{s1(0,1);var
h=s4(bbc,[0,d],[0,c],[0,g],[0,f],b,e);er(a);var
i=[0,h];return i}catch(b){er(a);return 0}}function
Hq(a,c,b){var
d=a?a[1]:o2(0);function
e(a,e,f){return bbb(d,c,b,a,e,f)}return function(a,b){return 0===WZ(a_P,a_Q,a,b)?0:WZ(function(a,b,c){return WW([0,e],WK,a,b,c)},a_R,a,b)}}function
Hr(c,b,a){var
d=ld(fZ),e=ld(xI);return[0,R(function(a,d){var
e=a[5]?b:c;return iI(e,a[1],[0,a[2],0,a[4],0],d)},d,a),e]}function
bbe(h,b,g,f,e){s1(0,0);var
a=s4(0,0,0,0,[0,b],e,U(0,0));if(Ho(a)){Ha(b,[0,a,0]);hp(Hn,a)}var
i=ld(kk);m(function(a){return d(a,0)},i);if(bC(f))ho(b,a,nh(U(0,0)));var
j=[0,0,g],k=fZ[1],c=R(function(a,b){var
c=a[2],d=a[1],f=a[5];function
g(a){return f?[12,a]:[13,a]}var
e=H(d[2]),i=iI([0,g],e,[0,c,[1,0,h],a[4],0],b[2]);return[0,[0,[0,e,a[3],d,c],b[1]],i]},k,j),l=Hr(0,0,b);return[0,a,c[1],l[1],c[2]]}var
xM=[0,0];function
bbf(f,j,b,i,e,c){var
k=b2(o(bbg,f)),l=b9(0,0,[1,b9(0,0,[1,c,b2(bbh)]),k]);s1(0,0);var
n=s4(0,0,0,0,[0,b],l,U(0,0)),p=ld(kk);m(function(a){return d(a,0)},p);var
g=[0,av[1]],h=[0,av[1]],q=fZ[1];fZ[1]=0;var
r=[0,b,i,e],a=R(function(a,b){var
c=a[4],d=a[2],e=a[1],i=a[5],k=iI(0,e,[0,d,1,c,0],b[3]),l=b[2],m=[0,d,[2,g,h,f,j],c,0],n=iI([0,function(a){return i?[12,a]:[13,a]}],e,m,l);return[0,iI(0,e,[0,d,1,c,0],b[1]),n,k]},q,r);return[0,n,g,h,a[1],a[2],a[3]]}function
Xu(a){xM[1]=0;return 0}function
s5(a){var
b=xM[1];xM[1]=[0,[0,a,Eu(0)],b];return 0}function
Xv(e){var
a=ff(0),b=Eu(0),c=v(xM[1]);m(function(a){Ev(a[2]);return d(a[1],0)},c);Ev(b);Xu(0);return er(a)}function
t3(b,v){var
c=v;for(;;){var
a=c[1];switch(a[0]){case
2:var
w=a[2],f=Z(function(a){return d6(a[2])},w);if(f){var
c=a[3];continue}return f;case
4:var
e=a[2];if(e)if(!e[1][2]){var
h=d6(a[1]);return h?Z(Xw,g(bas,e[2])):h}break;case
5:if(!a[3]){var
i=d6(a[1]);if(i){var
x=a[2];return Z(function(a){var
b=Xw(a[2]);return b?d6(a[3]):b},x)}return i}break;case
7:return Z(d6,a[1]);case
8:return Z(d6,a[3]);case
9:var
j=a[2];return b<50?nK(b+1|0,j):aa(nK,[0,j]);case
10:var
y=a[1],k=Z(function(a){var
b=0===a[2][4]?1:0;return b?d6(a[3]):b},y);if(k){var
l=a[2];return b<50?nK(b+1|0,l):aa(nK,[0,l])}return k;case
13:if(!a[1])return 1;break;case
14:var
m=d6(a[2]);if(m){var
n=a[3];return b<50?nK(b+1|0,n):aa(nK,[0,n])}return m;case
15:var
c=a[2];continue;case
19:if(0<F4(a[3][2]))return 1;break;case
23:var
o=Hs(a[3]);if(o){var
c=a[4];continue}return o;case
26:var
q=a[1],d=[0,0],z=q[2],r=Z(function(c){var
a=c[1];switch(a[0]){case
0:return 0;case
1:var
b=a[4];return 0===b[0]?(d[1]++,1):(d[1]++,d6(b[2]));case
4:return d6(a[1]);default:return 1}},z);if(r)var
A=1,B=q[3][2],C=function(e,b,a){d[1]+=-1;var
c=a?0===b[1]?1:0:a;return c},s=p(av[11],C,B,A),t=s?0===d[1]?1:0:s;else
var
t=r;return t;case
27:var
u=a[1];return b<50?Ko(b+1|0,u):aa(Ko,[0,u]);case
11:case
25:var
c=a[1];continue;case
0:case
1:case
3:return 1}return 0}}function
Ko(d,e){var
b=e;for(;;){var
a=b[1];switch(a[0]){case
1:var
f=a[1][1];return Z(function(c){var
a=c[1];switch(a[0]){case
1:var
d=a[2];return Z(function(a){return d6(a[2])},d);case
4:var
e=a[1][4];return Z(function(a){return 0===a[4][0]?0:1},e);case
5:return 0===a[1][4][0]?0:1;case
6:var
b=a[1][3];break;case
7:var
f=a[1];return Z(function(a){return Hs(a[3])},f);case
10:return 0;case
12:var
b=a[1][1];break;default:return 1}return Hs(b)},f);case
3:return 0;case
4:var
b=a[1];continue;case
5:var
c=a[1];return d<50?t3(d+1|0,c):aa(t3,[0,c]);default:return 1}}}function
nK(c,a){if(a){var
b=a[1];return c<50?t3(c+1|0,b):aa(t3,[0,b])}return 1}function
d6(a){return c4(t3(0,a))}function
Hs(a){return c4(Ko(0,a))}function
Xw(a){return c4(nK(0,a))}function
pu(b,h){var
c=h;for(;;){var
a=c[1];if(typeof
a!=="number")switch(a[0]){case
1:var
d=a[1],i=bC(d)?nh(U(0,0)):U(0,0);return ab([1,d,i,pu(b,a[3]),0]);case
2:var
k=a[1];return ab([2,g(function(a){return pu(b,a)},k)]);case
3:var
e=a[2];try{var
f=iH(a[1][1],b),m=f[2][2];if(w(e)!==m)throw l;var
n=g(function(a){return pu(b,a)},e),o=da(f[1],n);return o}catch(a){a=j(a);if(a===l)return U(0,0);throw a}case
8:var
c=a[2];continue}return U(0,0)}}function
kl(b,k){var
c=k;for(;;){var
a=c[1];switch(a[0]){case
2:var
c=a[3];continue;case
3:var
e=a[1];if(e){var
l=kl(b,e[1][3]);return ab([1,bbi,U(0,0),l,0])}break;case
4:var
f=a[4],d=a[1];if(bC(d)){var
m=kl(b,f);return ab([1,d,nh(U(0,0)),m,0])}var
n=kl(b,f);return ab([1,d,U(0,0),n,0]);case
6:var
h=a[2];if(h){var
c=h[1][3];continue}break;case
7:var
c=a[1];continue;case
8:var
o=a[1];return ab([2,g(function(a){return kl(b,a)},o)]);case
19:var
p=kl(b,a[1]),i=pu(b,a[2]);try{aq(b,p,i);return i}catch(a){a=j(a);if(a[1]===x)throw[0,ac,c[2],b,[7,a[2]]];throw a}case
20:var
q=function(a){return a?pu(b,a[1]):U(0,0)},r=kl(b,a[1]),s=q(a[2]),t=pu(b,a[3]);try{aq(b,r,s);return t}catch(a){a=j(a);if(a[1]===x)throw[0,ac,c[2],b,[7,a[2]]];throw a}case
15:case
16:var
c=a[2];continue}return U(0,0)}}function
xN(f,a){var
h=0,i=0;return F0(f,function(j){var
d=i,a=h,e=j;for(;;){var
b=aJ(f,e);if(a8(b,d))return[0,v(a),0];var
c=b[1];if(typeof
c!=="number"&&1===c[0]){var
d=[0,b,d],a=[0,c[1],a],e=c[3];continue}var
g=bj(b);return[0,v(a),g]}},a)}function
xO(b,c,l,a,k,j){var
m=c?1-d6(a):c;if(m)sj(b,a[4]);var
n=g(function(a){return aJ(b,a)},j),e=g(function(a){return aJ(b,a)},n),f=d(by(function(c){var
a=t(c);bA(a);var
b=a[1];if(typeof
b!=="number"&&0===b[0])if(a[2]===bm){eq(a);a[1]=[9,b[1]];return 1}return 0}),e),o=w(f);if(w(e)===o)return 0;var
h=ak([10,t(a[4]),f]),i=t(k);throw[0,ac,a[2],b,[31,l,[0,[0,h,h],[0,[0,i,i],0]]]]}function
Xx(d,c,a){var
e=a[2],b=aJ(d,a[4])[1];if(typeof
b!=="number")switch(b[0]){case
0:return 0;case
1:return ai(a[2],2);case
3:if(Y(b[1],rK))return 0;break}return c?ai(e,4):c}var
pv=[0,0];function
xP(b,a){return G(function(c,b){var
a=b[1],d=aZ([0,a[2]],0,[0,[0,a[1]],a[2]]),e=Sa([0,b[2]],0,d);return R9([0,c[2]],0,a,e,c)},b,a)}function
bbj(b){function
c(f){var
a=t(f),e=0<=a[2]?1:0;if(e){rF(a);var
b=a[1];if(typeof
b!=="number"&&8===b[0]){var
d=aw(b[1]);if(1-d[5]){var
g=d[1];m(function(b){var
a=aB(b[2]);if(typeof
a!=="number"&&1===a[0])throw a$;return 0},g)}return hh(c,d)}return ba(c,a)}return e}try{c(b);b3(b);var
a=0;return a}catch(a){a=j(a);if(a===a$){b3(b);return 1}throw a}}function
Ht(b,c){var
a=c[1];if(typeof
a!=="number")switch(a[0]){case
7:var
e=a[1];return m(function(a){return d(b,a[2])},e);case
9:d(b,a[1]);return d(b,a[2]);case
4:case
8:return m(b,a[1]);case
5:case
6:return br(b,a[2]);case
1:case
10:case
12:case
14:return d(b,a[1])}return 0}function
bbk(b){function
a(b){var
c=b[1];if(typeof
c!=="number")switch(c[0]){case
6:case
11:throw a$}return Ht(a,b)}try{a(b);var
c=0;return c}catch(a){a=j(a);if(a===a$)return 1;throw a}}function
xQ(d,b){function
a(b){var
c=b[1];if(typeof
c!=="number"&&5===c[0]){try{var
e=T9(c[1][1],d);m(function(b){var
a=b[1][10];if(a)throw a$;return a},e)}catch(a){a=j(a);if(a!==l)throw a}return Ht(a,b)}return Ht(a,b)}try{a(b);var
c=0;return c}catch(a){a=j(a);if(a===a$)return 1;throw a}}function
f0(c,a,b){return lL(a[2],c,a[4],b)}function
bs(e,d,a,c){var
f=r$(0);sT(0);sV(a[3]);var
b=bbl(e,d,a,c);sU(0);wL([0,[2,b],f]);return b}function
e1(b,a){return bs(0,b,a,U(0,0))}function
Xy(g,c,w,a,f,b,v){var
i=g?g[1]:[0,c,af(0,a,f)],k=i[2],l=i[1],u=a[12];if(u)a5(0);try{var
o=Gm(a,af(0,a,f),b)}catch(d){d=j(d);if(d[1]===x){var
m=aJ(a,f),n=m[1];if(typeof
n!=="number"&&1===n[0])throw[0,ac,c,a,[27,b,m]];throw[0,ac,l,a,[26,0!==g?1:0,k]]}throw d}var
d=o[2],p=o[1];if(bC(b)){var
q=U(0,0);try{aq(a,p,nh(q))}catch(a){a=j(a);if(a[1]===x)throw[0,h,bbZ];throw a}var
e=nh(q)}else
var
e=p;if(u){aI(0);fh(e);fh(d)}var
r=xR([0,[0,l,k]],a,e,d,1,c,v),s=r[1];function
y(d){var
b=xN(a,d),c=0===b[1]?1:0,e=c?1-b[2]:c;return e}var
t=bC(b),z=t?y(d):t;if(z)ai(cQ(s)[1][2],8);var
A=af(0,a,ak([1,b,e,d,0]));return d5([0,[3,b,s,r[2]],c,0,A,a,w])}function
bbl(Q,a,n,k){var
e=n[2];function
s(b){var
c=af(0,a,k);f0(a,d5(b),c);return b}var
i=n[1];switch(i[0]){case
0:var
M=i[1],b7=a$k(a,e,M[1]),am=b7[2],b8=b7[1],ew=n[3],ex=af(0,a,am[1]),S=am[2],ey=0;if(typeof
S==="number"){if(1===S)throw[0,ac,e,a,[29,M[1]]];var
aM=0}else
switch(S[0]){case
1:var
ez=fg([0,o(bbn,S[2])],a),b9=M[1];if(0!==b9[0])throw[0,h,bbo];var
aT=[20,ez[1],b8,[0,b9[1],M[2]]],aM=1;break;case
2:var
aT=[0,fg([0,o(bbp,S[3])],a)[1],M,am],aM=1;break;default:var
aM=0}if(!aM)var
aT=[0,b8,M,am];return s([0,aT,e,ey,ex,a,ew]);case
1:var
T=i[1];if(2===T[0]){var
eB=aJ(a,k),eC=[1,[0,gp(bbr)],bbq,0],aU=eB[1];if(typeof
aU==="number")var
aN=0;else
if(3===aU[0])if(Y(aU[1],eC))var
b_=1,aN=1;else
var
aN=0;else
var
aN=0;if(!aN)var
b_=0;if(b_){var
b$=T[1],bQ=[0,e[1],e[2],1];try{var
ah=function(a){return[0,a,bQ,0]},bR=function(a){return[0,a,bQ]},c=function(b,a){var
c=[1,bb1,b],d=a?a[2]?[0,ah([8,a])]:[0,a[1]]:0;return ah([9,bR(c),d])},bS=function(a){return ah([1,a])},P=function(a){return bS([0,a])},I=function(a){return bS([2,a,0])},d$=function(a){return bS([1,a])},ea=function(b,a){var
d=[0,I(a),0];return c(bcc,[0,q(b),d])},eb=function(a){switch(a){case
0:return c(bcd,0);case
1:return c(bce,0);default:return c(bcf,0)}},F=function(a){switch(a){case
0:return c(bcg,0);case
1:return c(bch,0);case
2:return c(bci,0);case
3:return c(bcj,0);case
4:return c(bck,0);case
5:return c(bcl,0);case
6:return c(bcm,0);case
7:return c(bcn,0);case
8:return c(bco,0);case
9:return c(bcp,0);case
10:return c(bcq,0);case
11:return c(bcr,0);default:return c(bcs,0)}},ec=function(a){switch(a){case
0:return c(bcJ,0);case
1:return c(bcK,0);default:return c(bcL,0)}},u=function(a){if(a){var
b=bR(bcM);return ah([9,b,[0,P(a[1])]])}return ah([9,bR(bcN),0])},r=function(a){if(typeof
a==="number")return c(bcO,0);else
switch(a[0]){case
0:return c(bcP,[0,r(a[1]),0]);case
1:return c(bcQ,[0,r(a[1]),0]);case
2:return c(bcR,[0,r(a[1]),0]);case
3:return c(bcS,[0,r(a[1]),0]);case
4:return c(bcT,[0,r(a[1]),0]);case
5:return c(bcU,[0,r(a[1]),0]);case
6:return c(bcV,[0,r(a[1]),0]);case
7:return c(bcW,[0,r(a[1]),0]);case
8:var
b=[0,r(a[2]),0];return c(bcX,[0,r(a[1]),b]);case
9:var
d=[0,r(a[3]),0],e=[0,r(a[2]),d];return c(bcY,[0,r(a[1]),e]);case
10:return c(bcZ,[0,r(a[1]),0]);case
11:return c(bc0,[0,r(a[1]),0]);case
12:return c(bc1,[0,r(a[1]),0]);case
13:return c(bc2,[0,r(a[1]),0]);default:return c(bc3,[0,r(a[1]),0])}},J=function(a){if(typeof
a==="number")return c(bdi,0);else{if(0===a[0]){var
b=[0,P(a[2]),0];return c(bdj,[0,eb(a[1]),b])}return c(bdk,[0,eb(a[1]),0])}},aj=function(a){return typeof
a==="number"?0===a?c(bdl,0):c(bdm,0):c(bdn,[0,P(a[1]),0])},q=function(a){if(typeof
a==="number")return c(bdo,0);else
switch(a[0]){case
0:return c(bdp,[0,q(a[1]),0]);case
1:return c(bdq,[0,q(a[1]),0]);case
2:var
A=[0,q(a[2]),0];return c(bdr,[0,J(a[1]),A]);case
3:var
B=[0,q(a[2]),0];return c(bds,[0,J(a[1]),B]);case
4:var
C=[0,q(a[4]),0],D=[0,aj(a[3]),C],E=[0,J(a[2]),D];return c(bdt,[0,F(a[1]),E]);case
5:var
G=[0,q(a[4]),0],H=[0,aj(a[3]),G],K=[0,J(a[2]),H];return c(bdu,[0,F(a[1]),K]);case
6:var
L=[0,q(a[4]),0],M=[0,aj(a[3]),L],N=[0,J(a[2]),M];return c(bdv,[0,F(a[1]),N]);case
7:var
O=[0,q(a[4]),0],Q=[0,aj(a[3]),O],R=[0,J(a[2]),Q];return c(bdw,[0,F(a[1]),R]);case
8:var
S=[0,q(a[4]),0],T=[0,aj(a[3]),S],U=[0,J(a[2]),T];switch(a[1]){case
0:var
d=c(bct,0);break;case
1:var
d=c(bcu,0);break;case
2:var
d=c(bcv,0);break;case
3:var
d=c(bcw,0);break;case
4:var
d=c(bcx,0);break;case
5:var
d=c(bcy,0);break;case
6:var
d=c(bcz,0);break;case
7:var
d=c(bcA,0);break;case
8:var
d=c(bcB,0);break;case
9:var
d=c(bcC,0);break;case
10:var
d=c(bcD,0);break;case
11:var
d=c(bcE,0);break;case
12:var
d=c(bcF,0);break;case
13:var
d=c(bcG,0);break;case
14:var
d=c(bcH,0);break;default:var
d=c(bcI,0)}return c(bdx,[0,d,U]);case
9:return c(bdy,[0,q(a[1]),0]);case
10:return c(bdz,[0,q(a[1]),0]);case
11:var
V=[0,q(a[2]),0];return c(bdA,[0,I(a[1]),V]);case
12:var
W=[0,q(a[2]),0];return c(bdB,[0,d$(a[1]),W]);case
13:var
X=[0,q(a[3]),0],Y=[0,r(a[2]),X];return c(bdC,[0,u(a[1]),Y]);case
14:var
Z=[0,q(a[3]),0],_=[0,r(a[2]),Z];return c(bdD,[0,u(a[1]),_]);case
15:return c(bdE,[0,q(a[1]),0]);case
16:return c(bdF,[0,q(a[1]),0]);case
17:var
$=[0,q(a[2]),0],g=a[1];if(typeof
g==="number")switch(g){case
0:var
f=c(bb2,0);break;case
1:var
f=c(bb3,0);break;case
2:var
f=c(bb4,0);break;case
3:var
f=c(bb5,0);break;case
4:var
f=c(bb6,0);break;case
5:var
f=c(bb7,0);break;default:var
f=c(bb8,0)}else
switch(g[0]){case
0:var
m=[0,P(g[3]),0],n=[0,P(g[2]),m],f=c(bb9,[0,I(g[1]),n]);break;case
1:var
o=[0,P(g[2]),0],f=c(bb_,[0,I(g[1]),o]);break;default:var
f=c(bb$,[0,d$(g[1]),0])}return c(bdG,[0,f,$]);case
18:var
aa=[0,q(a[2]),0],i=a[1];if(0===i[0])var
j=i[1],l=c(bca,[0,ea(j[1],j[2]),0]);else
var
k=i[1],l=c(bcb,[0,ea(k[1],k[2]),0]);return c(bdH,[0,l,aa]);case
19:return c(bdI,[0,q(a[1]),0]);case
20:var
ab=[0,q(a[3]),0],ac=[0,I(a[2]),ab];return c(bdJ,[0,u(a[1]),ac]);case
21:var
ad=[0,q(a[2]),0];return c(bdK,[0,ec(a[1]),ad]);case
22:return c(bdL,[0,q(a[1]),0]);case
23:var
ae=[0,q(a[2]),0],b=a[1];if(typeof
b==="number")switch(b){case
0:var
e=c(bc4,0);break;case
1:var
e=c(bc5,0);break;case
2:var
e=c(bc6,0);break;case
3:var
e=c(bc7,0);break;default:var
e=c(bc8,0)}else
switch(b[0]){case
0:var
e=c(bc9,[0,u(b[1]),0]);break;case
1:var
e=c(bc_,[0,u(b[1]),0]);break;case
2:var
p=[0,u(b[2]),0],e=c(bc$,[0,F(b[1]),p]);break;case
3:var
s=[0,u(b[2]),0],e=c(bda,[0,F(b[1]),s]);break;case
4:var
t=[0,u(b[2]),0],e=c(bdb,[0,F(b[1]),t]);break;case
5:var
v=[0,u(b[2]),0],e=c(bdc,[0,F(b[1]),v]);break;case
6:var
w=[0,u(b[2]),0],e=c(bdd,[0,u(b[1]),w]);break;case
7:var
x=[0,r(b[2]),0],e=c(bde,[0,u(b[1]),x]);break;case
8:var
y=[0,r(b[2]),0],e=c(bdf,[0,u(b[1]),y]);break;case
9:var
z=[0,I(b[2]),0],e=c(bdg,[0,u(b[1]),z]);break;default:var
e=c(bdh,[0,ec(b[1]),0])}return c(bdM,[0,e,ae]);default:throw[0,h,bdN]}},gb=vj([0,1],b$),gc=[0,I(b$),0],ed=c(bdO,[0,q(gb[1]),gc])}catch(b){b=j(b);if(b[1]===dU)throw[0,ac,bQ,a,[15,b[2]]];throw b}return bs(Q,a,[0,ed[1],n[2],ed[3]],k)}var
eD=n[3];return s([0,[1,T],e,0,ch(jZ),a,eD])}var
eA=n[3];return s([0,[1,T],e,0,Xh(T),a,eA]);case
2:var
an=i[1];if(0===an){var
aV=i[2];if(aV){var
aW=aV[1];if(!aW[3])if(!aV[2]){var
cd=aW[1];if(xQ(a,cd))return bs(Q,a,[0,[6,aW[2],[0,[0,cd,0,i[3]],0]],n[2],n[3]],k)}}}var
ca=i[3],aX=n[3];if(aX)if(f(aX[1][1][1],bbs))var
aO=0;else
if(aX[2])var
aO=0;else
var
cb=0,aO=1;else
var
aO=0;if(!aO)var
cb=0===an?[0,[1,ca[2]]]:[0,[1,e]];var
a0=Hv(0,0,a,an,i[2],cb,1),eE=xP(ca,a0[3]),cc=bs(0,a0[2],eE,k);return d5([0,[2,an,a0[1],cc],e,0,cc[4],a,n[3]]);case
3:return Xy(Q,e,n[3],a,k,bbt,i[1]);case
4:var
ce=i[2],a1=i[1];if(ce){var
cf=ce[1];if(bC(a1)){var
ao=cf[2],eF=[0,[0,oH([0,ao],0,b2(bbu),0),0,cf],0],eG=aZ([0,ao],0,b2(bbv)),eH=[0,cJ([0,ao],0,b2(bbw))],eI=[0,[0,oH([0,ao],0,b2(bbx),eH),0,eG],eF],eJ=vT([0,e],0,aZ([0,e],0,b2(bby)),eI),eK=i[4],eL=[0,ep(0,0,0,0,i[3],eJ),0],eM=R6([0,e],[0,[0,[0,b2(bbA),bbz],0]],0,eL,eK);return bs(Q,a,jQ([0,e],0,a1,0,cJ([0,e],0,b2(bbB)),eM),k)}throw[0,h,bbC]}var
cg=i[4];return Xy(Q,e,cg[3],a,k,a1,[0,[0,i[3],0,cg],0]);case
5:var
ci=i[2];if(0===ci)jS(e,bbD);a5(0);var
ap=e1(a,i[1]),eN=function(g,f){var
c=g,e=f;for(;;){var
d=aJ(a,e);if(a8(d,c))return 0;var
b=d[1];if(typeof
b!=="number"&&1===b[0]){try{var
i=b[2];ev(a,U(0,0),i)}catch(a){a=j(a);if(a[1]===x)throw[0,h,bbE];throw a}var
c=[0,d,c],e=b[3];continue}return 0}},eP=af(0,a,ap[4]);aI(0);var
eQ=0;F0(a,function(a){return eN(eQ,a)},eP);a5(0);var
cj=bbm(a,ap,ci);aI(0);var
eR=ap[4];ev(a,U(0,0),eR);return s([0,[4,ap,cj[1]],e,0,cj[2],a,n[3]]);case
6:a5(0);var
V=e1(a,i[1]);aI(0);if(d6(V))bA(V[4]);else
sj(a,V[4]);var
eS=function(h,g,f){var
d=h,c=g,a=f;for(;;){if(a){var
b=a[1],e=b[1][1];if(typeof
e!=="number"&&14===e[0]){var
c=[0,[0,e[1],b[2],b[3]],c],a=a[2];continue}var
d=[0,b,d],a=a[2];continue}var
i=v(c);return[0,v(d),i]}},ck=eS(0,0,i[2]),cl=ck[2],cm=ck[1],cn=0===cm?1:0,eT=cn?0!==cl?1:0:cn;if(eT)throw[0,ac,e,a,7];var
co=xR(0,a,V[4],k,1,e,cm),eU=xR(0,a,Ts,k,0,e,cl),eV=n[3],eW=af(0,a,k);return d5([0,[5,V,co[1],eU[1],co[2]],e,0,eW,a,eV]);case
7:var
cp=bs(0,a,i[1],k),eX=xR(0,a,Ts,k,0,e,i[2]);return d5([0,[6,cp,eX[1]],e,0,cp[4],a,n[3]]);case
8:var
a2=i[1];if(w(a2)<2)jS(e,bbF);var
cq=g(function(a){return fe(0,0)},a2);lL(e,a,ak([2,cq]),k);var
cr=aG(function(c,b){return bs(0,a,c,b)},a2,cq),eY=n[3];return d5([0,[7,cr],e,0,ab([2,g(function(a){return a[4]},cr)]),a,eY]);case
9:var
cs=n[3],ct=i[2],G=i[1];try{var
en=Xm(a,k),gk=k[2]===bm?1:0,gl=gk||1,gm=[0,[0,en[1],en[2],gl]],ee=gm}catch(a){a=j(a);if(a!==l)throw a;var
ee=0}var
gd=W3(a,G[2],G[1]),z=s3(bec,k,cw(Hp[7],0,0,0,G,a,ee),gd);FL(0,a,eO(G[1]),z);lK(e,z[13],z[1]);if(ct){var
ef=ct[1],eg=ef[1];if(8===eg[0]){if(1<z[5])var
bY=1;else
if(Xn(cs))var
bY=1;else
var
bX=0,bY=0;if(bY)var
eh=eg[1],bX=1}else
var
bX=0;if(!bX)var
eh=[0,ef,0];var
aL=eh}else
var
aL=0;var
ge=z[5];if(w(aL)!==ge){var
gf=w(aL);throw[0,ac,e,a,[1,G[1],z[5],gf]]}var
bW=a[12];if(bW){a5(0);a5(0)}var
ei=sm(0,z),al=ei[2],bT=ei[1],ej=d5([0,[8,G,z,0],e,0,al,a,cs]);if(bW){aI(0);fh(al);var
gg=af(0,a,k),ek=ej.slice();ek[4]=ch(al);f0(a,ek,gg);aI(0);m(fh,bT);fh(al)}var
bU=sl(a,[0,al,bT]);if(bU){var
el=bU[1],bV=ej.slice(),gh=bU[2];bV[4]=el;if(1-bW)f0(a,bV,af(0,a,k));var
gi=dV(bT,gh),gj=aG(function(c,b){return hq(a,c,b[1],b[2])},aL,gi);if(0===z[11])throw[0,ac,e,a,[19,el]];var
em=bV.slice();em[1]=[8,G,z,gj];return em}throw[0,h,bed];case
10:var
a3=i[2],W=i[1],cv=af(0,a,k);try{var
e2=aJ(a,k),e3=aJ(a,cv);if(a3){var
a4=e2[1];if(typeof
a4==="number")var
eo=0;else
if(8===a4[0]){var
a6=e3[1];if(typeof
a6!=="number"&&8===a6[0]){var
a7=aB(dr(W,aw(a4[1])[1])),a9=aB(dr(W,a6[1][1]));if(typeof
a7!=="number"&&0===a7[0]){var
cy=a7[1];if(cy)if(typeof
a9==="number")var
eq=0;else
if(1===a9[0])var
eq=0;else{var
cz=a9[1];if(cz){var
e4=hq(a,a3[1],cy[1],cz[1]),e5=d5([0,[9,W,[0,e4]],e,0,cv,a,n[3]]);return e5}var
eq=1}}throw l}var
eo=1}else
var
eo=0}throw l}catch(b){b=j(b);if(b===l){var
cx=bt(function(b){return e1(a,b)},a3),eZ=bt(function(a){return a[4]},cx),e0=n[3];return s([0,[9,W,cx],e,0,ab([8,[0,[0,[0,W,[0,eZ]],0],U(0,0),0,0,0,0]]),a,e0])}throw b}case
11:var
X=i[2],ar=i[1];if(0===ar)jS(e,bbG);var
as=X?[0,e1(a,X[1])]:0,cA=function(b){try{var
c=xH(a,b),d=b[2]===bm?1:0,e=d||1,f=[0,[0,c[1],c[2],e]];return f}catch(a){a=j(a);if(a===l)return 0;throw a}},cB=cA(k);if(cB)var
at=[0,k,cB];else
if(as){var
bc=cA(as[1][4]);if(bc){var
cI=bc[1][2],fd=bg(cI,a);a5(0);var
cK=da(cI,sl(a,fd[1]));aI(0);fh(cK);var
cL=[0,cK,bc]}else
var
cL=[0,U(0,0),0];var
at=cL}else
var
at=[0,U(0,0),0];var
a_=at[1],e6=0===X?1:0,e7=at[2],e8=1,e9=function(b){return XA(e8,a,e,a_,b)},e_=0,C=s3(bbH,a_,function(b){return Xs(e_,e,e6,a,e9,e7,b)},ar);lL(e,a,a_,af(0,a,k));(function(f){var
b=f;for(;;){if(b){var
c=b[2],d=b[1][2];if(c)if(d[5]===c[1][2][5])throw[0,ac,e,a,[10,d[1]]];var
b=c;continue}return 0}}(C));if(as){if(!C)throw[0,h,bbJ];var
bb=as[1],cC=af(0,a,bb[4]),e$=function(b){var
c=Z(function(a){return a[2][5]!==b[5]?1:0},C);if(c){var
d=m9(0,b),e=m9(0,b);aq(a,d[2],e[2]);var
f=e[3];aq(a,af(0,a,k),f);return lL(bb[2],a,cC,d[3])}return c};k4(e$,C[1][2][6]);var
cD=bb.slice();cD[4]=cC;var
cE=[0,cD]}else
var
cE=0;if(C){var
cF=C[1][2][6].length-1;if(0===X)if(w(ar)!==cF){var
fa=g(function(a){return a[2][5]},C);try{var
es=xH(a,k)[3],et=g(function(a){return a[1]},es)}catch(a){a=j(a);if(a===l)throw[0,h,bau];throw a}var
cG=function(e,d){var
b=e,a=d;for(;;){if(a){var
c=a[2];if(aY(b,fa)){var
b=b+1|0,a=c;continue}var
f=cG(b+1|0,c);return[0,a[1],f]}return 0}};throw[0,ac,e,a,[11,cG(0,et)]]}var
cH=0!==X?1:0,fb=cH?w(ar)===cF?1:0:cH;if(fb)ai(e,11);var
fc=n[3];return d5([0,[10,C,cE],e,0,af(0,a,k),a,fc])}throw[0,h,bbI];case
12:var
cM=i[2],cN=Xz(a,e,i[1],cM),cO=cN[2],cP=cN[1],cQ=m9(0,cO);f0(a,cP,cQ[3]);return s([0,[11,cP,cM,cO],e,0,cQ[2],a,n[3]]);case
13:var
bd=i[2],be=Xz(a,e,i[1],bd),bh=be[1],cR=0===be[3]?U(0,0):bh[4],bi=XA(0,a,e,cR,[0,bd,be[2],i[3]]),cS=bi[2];f0(a,bh,cR);if(0===cS[4])throw[0,ac,e,a,[12,bd[1]]];var
fi=n[3],fj=ch(mW);return s([0,[12,bh,bi[1],cS,bi[3]],e,0,fj,a,fi]);case
14:var
cT=fe(0,0);lL(e,a,Tt(cT),k);var
fk=i[1],fl=g(function(b){return bs(0,a,b,cT)},fk),fm=n[3];return d5([0,[13,fl],e,0,af(0,a,k),a,fm]);case
15:var
cU=i[3],cV=i[2],cW=bs(0,a,i[1],wq);if(cU){var
bk=bs(0,a,cV,k),cX=bs(0,a,cU[1],k);f0(a,cX,bk[4]);return d5([0,[14,cW,bk,[0,cX]],e,0,bk[4],a,n[3]])}var
cY=bs(0,a,cV,mW);return s([0,[14,cW,cY,0],e,0,cY[4],a,n[3]]);case
16:var
fn=Hu(a,i[1]),cZ=bs(0,a,i[2],k);return d5([0,[15,fn,cZ],e,0,cZ[4],a,n[3]]);case
17:var
fo=bs(0,a,i[1],wq),fp=Hu(a,i[2]),fq=n[3];return s([0,[16,fo,fp],e,0,ch(mW),a,fq]);case
18:var
bl=i[1],fr=bs(0,a,i[2],iD),fs=bs(0,a,i[3],iD),bn=bl[1];if(typeof
bn==="number")var
bo=[0,H(bbK),a];else{if(0!==bn[0])throw[0,ac,bl[2],a,6];var
fw=[0,ch(iD),0,e,0],fx=bn[1][1],bo=p(FT([0,function(a){return[19,a]}]),fx,fw,a)}var
ft=Hu(bo[2],i[5]),fu=n[3],fv=ch(mW);return s([0,[17,bo[1],bl,fr,fs,i[4],ft],e,0,fv,a,fu]);case
19:var
fy=i[1];a5(0);var
c0=cu(a,0,i[2]),au=c0[2];aI(0);fh(au);var
fz=af(0,a,au),ax=hq(a,fy,au,af(0,a,au));return s([0,ax[1],ax[2],[0,[0,[0,c0],e,n[3]],ax[3]],fz,a,ax[6]]);case
20:var
c1=i[3],c2=i[2],br=i[1];if(c2){a5(0);var
c3=sZ(a,c2[1]),c4=c3[1],c5=sZ(a,c1),c6=c5[1],ay=c4[2],bu=c6[2];try{var
fA=Gt(a,ay,bu);d(c3[2],0);d(c5[2],0);d(fA,0)}catch(b){b=j(b);if(b[1]===sb)throw[0,ac,e,a,[23,b[2],b[3]]];throw b}aI(0);fh(ay);fh(bu);var
fB=af(0,a,bu),_=[0,hq(a,br,ay,af(0,a,ay)),fB,[0,c4],c6]}else{var
c7=sZ(a,c1),aA=c7[2],c8=c7[1],D=c8[2];a5(0);var
E=e1(a,br);aI(0);var
c9=U(0,0),bv=E[4],fC=c9[2],b6=function(b){var
a=t(b);if(a[2]<0)return 0;if(a[2]<=fC)throw a$;rF(a);return ba(b6,a)};try{b6(bv);b3(bv);var
eu=1,bw=eu}catch(a){a=j(a);if(a!==a$)throw a;b3(bv);var
bw=0}ev(a,c9,E[4]);var
c_=E[1],c$=pv[1],bx=t(D)[1];if(0===c_[0]){var
db=c_[3][2];if(typeof
db==="number")var
K=0;else
if(2===db[0])if(c$)if(typeof
bx==="number")var
K=0;else
if(3===bx[0])var
de=c$[1],df=de[2],K=Y(de[1],bx[1])?(df[1]=[0,e,df[1]],d(aA,0),1):0;else
var
K=0;else
var
K=0;else
var
K=0}else
var
K=0;if(!K){if(0===lC([0,a],E[4]))if(0===lC([0,a],D)){if(bw)var
bZ=1;else{var
fE=ff(0),fF=Vj(a,D);try{d(aA,0);aq(a,E[4],fF[1]);var
fG=1,dc=fG}catch(a){a=j(a);if(a[1]!==x)throw a;er(fE);var
dc=0}if(dc)var
aP=1,bZ=0;else
var
bZ=1}if(bZ){try{var
fD=Gt(a,E[4],D);d(aA,0);d(fD,0);if(1-bw)ai(e,bbL)}catch(b){b=j(b);if(b[1]===sb)throw[0,ac,e,a,[23,b[2],b[3]]];throw b}var
aP=1}}else
var
aP=0;else
var
aP=0;if(!aP){var
dd=Vj(a,D);d(aA,0);try{aq(a,E[4],dd[1])}catch(b){b=j(b);if(b[1]===x){var
fH=dd[2],fI=b[2],fJ=[25,D,wX(a,D),fI,fH];throw[0,ac,br[2],a,fJ]}throw b}}}var
_=[0,E,D,0,c8]}var
az=_[1];return s([0,az[1],az[2],[0,[0,[1,_[3],_[4]],e,n[3]],az[3]],_[2],a,az[6]]);case
21:var
B=i[2],by=i[1],$=e1(a,by);try{var
bz=$[1];if(0===bz[0]){var
O=bz[3][2],dg=bz[2];if(typeof
O==="number")var
aQ=0;else
switch(O[0]){case
2:var
dm=sv(a,B,0,O[1],O[4]),dn=dm[2];if(bj(t(dn)))ai(e,[7,B]);var
dp=[0,[1,dm[1]],0,dn],aQ=1;break;case
3:var
dq=O[2];try{var
fN=dr(B,O[1])}catch(b){b=j(b);if(b===l)throw[0,ac,by[2],a,[17,B]];throw b}var
fO=fg([0,o(bbN,dq)],a),fP=fg([0,o(bbO,dq)],a),aE=fO[2],aF=aE[2];if(typeof
aF==="number")var
b1=1;else
if(2===aF[0]){var
bB=sv(a,B,0,aF[1],aF[4])[2],bD=U(0,0),ds=Gm(a,bD,bbQ);aq(a,ds[1],aE[1]);var
fQ=af(0,a,bB);aq(a,ds[2],fQ);var
dp=[0,[0,B],[0,d5([0,[4,[0,[0,[0,fN],dg,[0,bD,0,y,0]],e,0,bD,a,0],[0,[0,bbR,[0,[0,[0,fP[1],dg,aE],$[2],0,aE[1],a,0]],0],0]],e,0,bB,a,0])],bB],aQ=1,b1=0}else
var
b1=1;if(b1)throw[0,h,bbP];break;default:var
aQ=0}if(aQ)var
aC=dp,b0=1;else
var
b0=0}else
var
b0=0;if(!b0)var
aC=[0,[0,B],0,su(a,B,1,$[4])];var
dh=t(aC[3]),aD=dh[1];if(typeof
aD==="number")var
aR=0;else
switch(aD[0]){case
0:var
di=U(0,0),fK=ab([10,di,0]);aq(a,ch(dh),fK);var
dj=di,aR=1;break;case
10:var
dk=aD[2],dl=aD[1],fM=dk?iP(0,0,dk,dl)[2]:af(0,a,dl),dj=fM,aR=1;break;default:var
aR=0}if(aR){var
fL=s([0,[18,$,aC[1],aC[2]],e,0,dj,a,n[3]]);return fL}throw[0,h,bbM]}catch(b){b=j(b);if(b[1]===x)throw[0,ac,by[2],a,[16,$[4],B]];throw b}case
22:var
bE=i[1],dt=Hg(a,e,bE[1]),du=dt[2],dv=du[4];if(dv){var
fR=n[3],fS=ch(dv[1]);return s([0,[19,dt[1],bE,du],e,0,fS,a,fR])}throw[0,ac,e,a,[18,bE[1]]];case
23:var
aa=i[1];try{var
dw=fg([0,aa[1]],a),dx=dw[2],aH=dx[2];if(typeof
aH!=="number"&&1===aH[0]){if(0===aH[1])throw[0,ac,e,a,[22,1,aa[1]]];var
fT=af(0,a,dx[1]),fU=bs(0,a,i[2],fT),fV=fg([0,o(bbS,aH[2])],a),fW=n[3],fY=ch(mW),fZ=s([0,[21,fV[1],dw[1],aa,fU],e,0,fY,a,fW]);return fZ}throw[0,ac,e,a,[22,0,aa[1]]]}catch(b){b=j(b);if(b===l)throw[0,ac,e,a,[21,aa[1]]];throw b}case
24:var
dy=i[1],f1=0;R(function(d,c){var
b=d[1];if(N(function(a){return A(a[1],b[1])},c))throw[0,ac,e,a,[24,b[1]]];return[0,b,c]},dy,f1);try{var
f2=fg(bbT,a),f3=fg(bbU,a)}catch(b){b=j(b);if(b===l)throw[0,ac,e,a,0];throw b}var
dz=f3[2],bF=dz[2];if(typeof
bF!=="number"&&2===bF[0]){var
f4=bF[2],f5=g(function(d){var
c=d[1];try{var
f=b(av[22],c[1],f4[1]),g=af(0,a,f[4]),h=bs(0,a,d[2],g),i=[0,[0,f[1]],c,h];return i}catch(b){b=j(b);if(b===l)throw[0,ac,e,a,[21,c[1]]];throw b}},dy);return s([0,[22,f2[1],f5],e,0,dz[1],a,n[3]])}throw[0,h,bbV];case
25:var
bG=i[1],bI=U(0,0);a5(0);rB(bI[2]);var
f6=pr(0),dA=b(Xb[1],a,i[2]),dB=r6(0,bG[1],dA[3],a),dC=dB[2];j4(jW(0));ps(f6);var
bJ=bs(0,dC,i[3],k);aI(0);try{ev(dC,bI,bJ[4])}catch(b){b=j(b);if(b[1]===x)throw[0,ac,e,a,[28,bG[1],bJ[4]]];throw b}return d5([0,[23,dB[1],bG,dA,bJ],e,0,bI,a,n[3]]);case
26:var
dD=bs(0,a,i[1],wq),dE=dD[1];if(8===dE[0])if(f(dE[2][1],bbW))var
b5=0;else
var
dF=af(0,a,k),b5=1;else
var
b5=0;if(!b5)var
dF=ch(mW);return s([0,[24,dD],e,0,dF,a,n[3]]);case
27:var
dG=fe(0,0);lL(e,a,Tu(dG),k);var
f7=bs(0,a,i[1],dG),f8=n[3];return d5([0,[25,f7],e,0,af(0,a,k),a,f8]);case
28:var
bK=i[2],bL=i[1];if(bK)var
dH=cu(a,0,oG(bK[1])),bM=[0,t(dH[2]),[0,dH]];else
var
bM=[0,t(k),0];var
ad=bM[1];if(0!==bK){var
f9=af(0,a,k);lL(e,a,af(0,a,ad),f9)}var
aK=aJ(a,ad)[1];if(typeof
aK==="number")var
aS=0;else
switch(aK[0]){case
0:var
dI=e1(a,bL),bN=dI.slice();bN[4]=ab([10,dI[4],0]);f0(a,bN,ad);var
bO=bN,aS=1;break;case
10:var
dK=aK[2],dL=aK[1];if(dK){a5(0);var
dM=iP(0,1,dK,dL),dN=bs(0,a,bL,dM[2]);aI(0);xO(a,0,bbY,dN,k,dM[1]);var
dO=dN.slice();dO[4]=af(0,a,ad);var
dP=dO}else{var
dQ=bs(0,a,bL,dL).slice();dQ[4]=af(0,a,ad);var
dP=dQ}var
bO=dP,aS=1;break;default:var
aS=0}if(aS){var
dJ=bO.slice();dJ[3]=[0,[0,[3,bM[2]],e,n[3]],bO[3]];return d5(dJ)}throw[0,h,bbX];case
29:var
bP=p(Xe[1],a,e,i[1]);return s([0,[26,bP[1],bP[3]],e,0,bP[2][1],a,n[3]]);case
30:var
dR=i[1],dS=U(0,0);a5(0);var
dT=o2(0);rB(dS[2]);var
dW=FU(dR,[0,0,0,0,1,0,0,[0,[0,dT,dT]],e,0],a),f_=dW[1];j4(jW(0));var
ae=e1(dW[2],i[2]),dX=bp(0,8),dY=function(a){if(is(dX,a[3]))return 0;bq(dX,a[3],0);var
b=a[1];if(typeof
b!=="number"&&3===b[0]){var
c=b[1];if(0===c[0])if(f_===c[1])return b4(a,dS)}return ba(dY,a)},dZ=wt(bf,ae[4]);dY(dZ);aI(0);return s([0,ae[1],e,[0,[0,[4,dR],e,n[3]],ae[3]],dZ,ae[5],ae[6]]);case
31:var
ag=aJ(a,af(0,a,k))[1];if(typeof
ag!=="number")switch(ag[0]){case
0:throw[0,ac,e,a,3];case
11:var
d0=ag[2],d1=ag[1],d2=bH(Xd[1],a,i[1],d1,d0,ag[3]),f$=n[3],ga=ab([11,d1,d0,d2[2]]);return s([0,[27,d2[1]],e,0,ga,a,f$])}throw[0,ac,e,a,[32,k]];case
32:var
d3=i[2],d4=i[1],d7=L(Xc[1],d4,a,n[2],d3),d8=d7[2],d9=bs(0,d8,i[3],k),d_=d9.slice();d_[3]=[0,[0,[2,d4,d7[1],d3,d8],e,n[3]],d9[3]];return d_;default:throw[0,Hl,fX(i[1])]}}function
Xz(a,n,g,b){var
e=e1(a,g),c=e[4];try{var
f=xH(a,c),i=c[2]===bm?1:0,k=i||1,m=[0,[0,f[1],f[2],k]],d=m}catch(a){a=j(a);if(a!==l)throw a;var
d=0}var
h=W4(a,b[2],b[1]);return[0,e,s3(bb0,c,cw(xL[7],0,0,0,b,a,d),h),d]}function
XA(t,a,s,h,g){var
n=g[3],b=g[2],c=g[1];a5(0);var
m=a[12];if(m){a5(0);a5(0)}var
i=m9(1,b),o=i[3],p=i[2],d=i[1];if(m){aI(0);fh(p);fh(o)}try{var
u=af(0,a,h);aq(a,ch(o),u)}catch(b){b=j(b);if(b[1]===x)throw[0,ac,c[2],a,[2,c[1],b[2]]];throw b}var
e=ch(p);if(m){aI(0);fh(e)}if(0===b[8]){if(t)throw[0,ac,s,a,[19,h]];throw[0,ac,c[2],a,[20,c[1],h]]}var
v=0===d?0:[0,ff(0)],k=hq(a,n,e,af(0,a,e));aI(0);try{xO(a,0!==d?1:0,bdQ,k,b[3],d);var
l=k}catch(c){c=j(c);if(d6(k))throw c;try{br(er,v);a5(0);var
f=e1(a,n);aI(0);sj(a,f[4]);f0(a,f,e);xO(a,0,bdP,f,b[3],d)}catch(a){a=j(a);if(a[1]===ac){var
q=a[4];if(typeof
q!=="number"&&31===q[0])throw a}throw c}var
l=f}var
r=l.slice();r[4]=af(0,a,l[4]);return[0,c,b,r]}function
hq(b,i,q,m){function
r(d){var
a=xN(b,d),c=1-a[2];if(c){var
e=a[1];return Z(function(a){return E(bdR,a)},e)}return c}function
t(g){var
c=g;for(;;){var
a=c[1];switch(a[0]){case
15:var
d=a[3];if(d){var
e=t(a[2]);if(e){var
c=d[1];continue}return e}var
b=0;break;case
16:var
f=a[2],b=1;break;case
32:var
f=a[3],b=1;break;case
0:case
5:case
12:case
19:case
20:case
21:case
22:return 1;default:var
b=0}if(b){var
c=f;continue}return 0}}var
c=aJ(b,q)[1];if(typeof
c!=="number"&&1===c[0])if(!f(c[1],bdS)){var
w=c[3];if(t(i)){var
j=e1(b,i),l=0,k=j[4];for(;;){var
d=aJ(b,k)[1];if(typeof
d==="number")var
h=0;else
switch(d[0]){case
0:var
e=[0,v(l),k,0],h=1;break;case
1:var
x=d[3],n=d[1];if(bC(n)){var
G=i[2],l=[0,[0,n,[0,Hm(af(0,b,d[2]),G)],1],l],k=x;continue}if(A(n,bdT))var
I=r(x),e=[0,v(l),k,I],h=1;else
var
h=0;break;default:var
h=0}if(!h)var
e=[0,0,j[4],0];var
o=e[1],a=j.slice(),J=e[2];a[4]=af(0,b,j[4]);var
p=af(0,b,J);if(!e[3])if(!r(w)){f0(b,a,m);return a}var
z=a.slice();z[4]=p;f0(b,z,m);if(0===o)return a;var
B=function(c,a){var
d=H(c),e=[0,[0,[0,d],b2([0,c]),[0,a,0,y,0]],y,0,a,b,0];return[0,[0,[0,d,b2(c)],y,0,a,b,0],e]},C=B(bdU,c[2]),K=C[2],L=C[1],D=function(a){var
b=a[6],c=a[5],d=a[3],e=a[2],f=[0,[4,a,s(o,[0,[0,bdV,[0,K],0],0])],e,d,w,c,b],g=a[6],h=a[5],i=a[3],j=a[2];return[0,[3,bdW,[0,Xf(L,f),0],1],j,i,p,h,g]},M=[31,g(function(a){return a[1]},o)];ai(a[2],M);if(d6(a))return D(a);var
F=B(bdX,a[4]),N=a[6],O=a[5],P=a[3],Q=a[2],R=D(F[2]);return d5([0,[2,0,[0,[0,F[1],a,0,y],0],R],Q,P,p,O,N])}}}var
u=bs(0,b,i,q);f0(b,u,m);return u}function
bbm(a,c,b){function
B(b,a){return G(function(b,a){return bi(a[3],[1,a[1],a[2],b,0])},a,b)}var
z=[0,0];function
aa(N,x,M,L){var
n=N,m=M,i=L;for(;;){if(i){var
y=i[1],o=y[2],e=y[1],j=aJ(a,m),b=j[1];if(typeof
b==="number")var
h=0;else
switch(b[0]){case
0:var
q=U(0,0),E=U(0,0),F=q[2]<=j[2]?1:0;if(F){var
G=c[1];if(0===G[0]){var
r=G[3][2];if(typeof
r==="number")var
l=1;else
if(0===r[0])if(f(r[1][1],bdY))var
k=0,l=0;else
var
H=0,k=1,l=0;else
var
l=1;if(l)var
k=0}else
var
k=0;if(!k)var
H=1;var
I=H}else
var
I=F;if(I)ai(o[2],9);aq(a,j,ab([1,e,q,E,[0,[0,1]]]));var
t=[0,q,E],h=1;break;case
1:if(A(b[1],e))var
t=[0,b[2],b[3]],h=1;else
var
h=0;break;default:var
h=0}if(h){var
Q=t[1],J=bC(e)?1:0,R=function(c,d,e){return function(f){var
b=bs(0,a,c,d);if(1===e)f0(a,b,nh(U(0,0)));return b}}(o,Q,J),n=[0,[0,e,[0,R],J],n],m=t[2],i=i[2];continue}if(typeof
b==="number")var
u=0;else
if(1===b[0])var
p=ab(b),u=1;else
var
u=0;if(!u)var
p=j;var
C=B(s(x,z[1]),p),D=C[1];if(typeof
D!=="number"&&1===D[0]){var
w=xN(a,p),K=w[2],P=K||aY(e,w[1]);if(P)throw[0,ac,c[2],a,1];throw[0,ac,o[2],a,[9,e,C]]}var
O=[8,aJ(a,c[4])];throw[0,ac,c[2],a,O]}var
S=af(0,a,B(x,m)),T=v(n);return[0,g(function(a){var
b=a[2],c=a[1];if(b){var
e=a[3];return[0,c,[0,d(b[1],0)],e]}return[0,c,0,a[3]]},T),S]}}var
C=xN(a,c[4]),D=1-C[2];if(D){var
K=C[1],E=d(by(function(a){return 1-bC(a)}),K),L=w(b),F=w(E)===L?1:0;if(F){var
H=Z(function(a){return A(a[1],bea)},b);if(H)var
J=N(function(a){return f(a,beb)},E),n=J?(ai(c[2],3),1):J;else
var
n=H}else
var
n=F;var
x=n}else
var
x=D;var
I=[0,0];function
p(ak,aj,ah,ag,ae,ad,ab){var
A=ak,p=aj,J=ah,w=ag,o=ae,b=ad,d=ab;for(;;){var
B=aJ(a,J),al=aJ(a,w),g=B[1];if(typeof
g!=="number"&&1===g[0]){var
L=g[3],i=g[2],e=g[1],M=B[2],q=al[1];if(typeof
q==="number")var
$=0;else
if(1===q[0]){var
C=q[2],ax=0===b?0===d?1:0:0;if(!ax)if(0===wa(g[4])){var
k=function(d,c){var
a=1-I[1],b=a?aAq:a;return b?(I[1]=1,ai(d,c)):b},N=Ff(e),r=bC(e)?1:0;if(x)if(bC(e))var
E=0;else{if(b){var
Y=b[1];throw[0,ac,Y[2][2],a,[9,Y[1],o]]}if(!d)throw[0,h,bd7];var
Z=d[1],_=Z[2],D=Z[1];if(f(e,D))if(f(D,bd6))throw[0,ac,_[2],a,[9,D,B]];var
aw=[0,function(b,c,d){return function(e){return hq(a,d,b,c)}}(i,C,_)],m=[0,0,d[2],aw],E=1}else
var
E=0;if(!E)try{try{var
v=wi(N,b),W=v[3],X=v[2];if(0!==W)k(X[2],bd5);var
au=s(W,v[4]),av=[0,v[1],X,au,d],n=av}catch(a){a=j(a);if(a!==l)throw a;var
t=wi(N,d),R=t[3],S=t[2],ao=0!==R?1:0,ap=ao||(0!==b?1:0);if(ap)k(S[2],bd3);var
aq=t[4],ar=s(b,R),n=[0,t[1],S,ar,aq]}var
u=n[2],T=n[1],U=0===r?1:0,as=U?bC(T):U;if(as)ai(u[2],[26,e]);if(0===r)var
F=0;else
if(bC(T))var
F=0;else{k(u[2],bd4);var
V=[0,function(c,d,e){return function(f){var
b=xG(a,d);return Xk(hq(a,e,xG(a,c),b))}}(i,C,u)],F=1}if(!F)var
V=[0,function(b,c,d){return function(e){return hq(a,d,b,c)}}(i,C,u)];var
at=[0,n[3],n[4],V],m=at}catch(f){f=j(f);if(f!==l)throw f;if(1===r){if(g6(bdZ,b))var
H=1;else
if(g6(bd1,d))var
H=1;else
var
G=0,H=0;if(H){k(c[2],bd0);z[1]=[0,[0,e,i,M],z[1]];var
O=[0,function(b){return function(c){return Hm(af(0,a,b),y)}}(i)],G=1}}else
var
G=0;if(!G){k(c[2],bd2);var
O=0}var
m=[0,b,d,O]}var
P=m[3],Q=m[1],am=0===P?[0,[0,e,i,M],p]:p,an=0===Q?L:o,A=[0,[0,e,P,r],A],p=am,J=L,w=q[3],o=an,b=Q,d=m[2];continue}var
$=1}else
var
$=0}if(b)if(x){var
K=b[1];throw[0,ac,K[2][2],a,[9,K[1],o]]}return aa(A,p,w,s(b,d))}}var
q=c[1];if(0===q[0]){var
m=q[3][2];if(typeof
m==="number")var
i=0;else
if(0===m[0])if(f(m[1][1],bd8))var
i=1;else
if(b){var
r=b[1];if(f(r[1],bd9))var
i=1;else{if(!b[2]){var
t=Gm(a,af(0,a,c[4]),bd_),k=bs(0,a,r[2],t[1]),u=aJ(a,k[4])[1];if(typeof
u==="number")var
o=0;else
switch(u[0]){case
0:s5(function(b){return Xx(a,0,k)});var
o=1;break;case
1:ai(k[2],2);var
o=1;break;default:var
o=0}return[0,[0,[0,bd$,[0,k],0],0],t[2]]}var
i=1}}else
var
i=1;else
var
i=0}var
e=c[4];return x?p(0,0,e,af(0,a,e),e,0,b):p(0,0,e,af(0,a,e),e,b,0)}function
Hu(e,l){var
f=l;for(;;){var
b=f[1];switch(b[0]){case
2:var
d=b[3],a=1;break;case
6:var
k=b[2];if(k)var
d=k[1][3],a=1;else
var
a=0;break;case
7:var
d=b[1],a=1;break;case
15:case
16:var
d=b[2],a=1;break;default:var
a=0}if(a){var
f=d;continue}var
g=f[2];a5(0);var
h=e1(e,l);aI(0);var
i=aJ(e,h[4]),m=U(0,0),j=i[1];if(typeof
j==="number")var
c=0;else
switch(j[0]){case
0:var
c=m[2]<i[2]?(ai(g,10),1):(s5(function(a){return Xx(e,1,h)}),1);break;case
1:ai(g,2);var
c=1;break;case
3:var
c=Y(j[1],rK)?1:0;break;default:var
c=0}if(!c)ai(g,4);ev(e,m,i);return h}}function
xR(Q,i,p,E,P,D,e){var
F=g(function(a){return a[1]},e),H=N(bbk,F),I=H?bbj(p):H,f=N(function(a){return xQ(i,a)},F);if(f)var
y=0;else
if(I)var
y=0;else
var
k=p,y=1;if(!y)var
k=m8(p);if(f){var
M=d(by(function(a){return xQ(i,a[1])}),e),B=bp(0,8),C=function(c){var
a=c[1];if(0===a[0]){var
b=a[1][1];if(0===b[0])return jK(B,b[1],0)}return 0};m(function(a){var
b=a[2];br(function(a){return Xg(C,a)},b);return Xg(C,a[3])},M);var
K=0,L=ou(function(b,c,a){return[0,b,a]},B,K),O=G(function(a,f){try{var
c=fg([0,f],a),b=c[2],d=c[1];if(0===d[0])var
g=b[4],h=b[3],i=b[2],k=[0,m8(b[1]),i,h,g],e=iI(0,d[1],k,a);else
var
e=a;return e}catch(b){b=j(b);if(b===l)return a;throw b}},i,L),q=[0,m8(E),O]}else
var
q=[0,E,i];var
r=q[2],n=q[1];if(f){a5(0);rB(o2(0));var
t=jW(0);j4(t+hI|0);var
z=r.slice();z[13]=[0,[0,t,[0,ae[1]]],r[13]];var
u=[0,t,z]}else
var
u=[0,o2(0),r];var
a=u[2],J=u[1];a5(0);var
v=[0,0],R=U(0,0),x=g(function(b){var
e=b[3],f=b[2];if(f)var
g=e[2],h=[0,f[1][2][1],g[2],g[3]];else
var
h=e[2];var
p=[0,[1,h]],q=I?bee:0,r=af(q,a,k),t=b[1];s1(p,1);var
c=[0,a],i=s4(bbd,0,0,[0,J],c,t,r),j=c[1],l=[0,function(a){return[12,a]}],d=Hr([0,function(a){return[13,a]}],l,j),m=d[2],n=ld(kk),o=d[1];v[1]=s(n,v[1]);return[0,i,[0,o,m]]},e),c=g(function(a){return a[1]},x);m(function(b){return ho(a,b,R)},c);if(N(Ho,c)){Ha(a,c);m(function(a){return hp(Hn,a)},c)}var
S=v[1];m(function(a){return d(a,0)},S);function
T(b){var
c=U(0,0);return ev(a,b[4],c)}m(function(a){return hp(T,a)},c);m(function(b){return ho(a,b,af(0,a,k))},c);aI(0);function
V(a){return bA(a[4])}m(function(a){return hp(V,a)},c);var
W=1===w(e)?Q:0,o=aG(function(c,b){var
d=b[2],e=c[2],f=e[2],g=e[1],j=xP(b[3],f),h=xQ(a,b[1])?m8(n):n,k=d?[0,bs(0,g,xP(d[1],f),wq)]:0,i=bs(W,g,j,h).slice();i[4]=af(0,a,h);return[0,c[1],k,i]},x,e);if(f){var
X=af(0,a,n);m(function(b){return f0(a,b[3],X)},o)}var
Y=P?b(Hq([0,J],a,k),D,o):0;s5(function(b){m(function(a){var
b=a[1],k=a[2][1];return hp(function(b){var
a=b[1];if(typeof
a!=="number"&&5===a[0]){var
c=a[2],e=a[1],d=aw(a[3][1]),g=d[1];if(!N(function(a){var
b=A(e,a[1]),c=b?0!==aB(a[2])?1:0:b;return c},g)){var
l=d[5]?1:cT(d)?1:0;if(l){var
h=c?[0,m8(c[1][4]),0]:0,i=[0,[0,[0,e,[1,0===c?1:0,h,1,[0,0]]],0],U(0,0),0,0,0,0],j=m8(b[4]),f=b.slice();f[4]=ab([8,i]);return ho(k,f,j)}}return 0}return 0},b)},x);var
a=dX(5);return a?function(n,k){var
b=n,a=k;for(;;){if(a){var
f=a[2],g=a[1],c=g[1],i=[0,c,0];try{var
o=nf(hn,d(by(function(b){return function(a){return ne(b,a)}}(i)),b)),p=WL(i),e=G$(a_v(o),p);if(typeof
e==="number"){if(0!==e)ai(c[2],5)}else{var
q=e[1];m(function(a){return ai(a[2],6)},q)}}catch(a){a=j(a);if(a!==kf)if(a!==l)if(a!==Hb)throw a;throw[0,h,a_S]}if(0===g[2]){var
b=[0,[0,c,0],b],a=f;continue}var
a=f;continue}return 0}}(0,o):a});if(f){aI(0);var
Z=U(0,0);lL(D,a,af(0,a,n),Z)}return[0,o,Y]}function
Hv(t,s,a,r,c,O,N){var
P=t?t[1]:function(a){return[12,a]},k=s?s[1]:function(a){return[13,a]};a5(0);if(c){var
v=c[1][2][1];if(6===v[0]){var
G=v[1][1];if(0===G[0]){var
H=G[1][1];if(0===H[0])if(f(H[1],bel))var
i=0;else
if(c[2])var
i=0;else
var
w=1,i=1;else
var
i=0}else
var
i=0}else
var
i=0}else
var
i=0;if(!i)var
w=0;var
x=w?k:P,y=g(function(b){var
a=b[1],c=a[1],e=b[2][1];if(typeof
c!=="number"&&10!==c[0]){switch(e[0]){case
19:var
d=0;break;case
20:var
d=0;break;default:var
d=1}return a}return a},c),Q=g(function(a){return U(0,0)},y);s1(O,N);var
o=[0,a],I=0,J=0,K=0,L=0,e=aG(function(a,b){return s4(L,K,J,I,o,a,b)},y,Q),p=Hr(0,0,o[1]),q=p[2],M=ld(kk),j=p[1],h=1===r?1:0;if(h)aC(function(c,g){var
b=c[4][1];if(typeof
b==="number")var
d=0;else
if(10===b[0]){var
f=c.slice();f[4]=iP(bef,0,b[2],b[1])[2];var
e=f,d=1}else
var
d=0;if(!d)var
e=c;return ho(a,e,kl(a,g[2]))},e,c);m(function(b){var
c=Ho(b);return c?(Ha(a,[0,b,0]),hp(Hn,b)):c},e);m(function(a){return d(a,0)},M);var
z=h?j:a,l=[0,0],B=[0,0],C=dX(d(x,beg));if(C)var
D=C;else
var
T=dX(d(k,bek)),D=T||(h?dX(15):h);var
R=g(function(b){if(D){var
e=[0,0],f=[0,0];iK[1]=0;wJ(b);var
c=iK[1];iK[1]=0;m(function(o){var
g=o[1],c=wB([0,g],j),b=g[2],h=[0,0],i=A(b,beh);if(i)var
n=i;else
var
p=95===u(b,0)?1:0,n=p||(35===u(b,0)?1:0);if(1-n)s5(function(i){var
a=1-h[1];if(a){var
f=e[1]?k:x,g=d(f,b);return ai(c[3],g)}return a});return aZy(b,c,function(j){var
d=l[1];if(d){var
g=d[1];g[1]=[0,[0,b,c],g[1]];B[1]=1;return 0}var
i=ld(f);m(function(b){return FJ(a,b[1],b[2])},i);h[1]=1;e[1]=1;return 0})},c);return[0,b,[0,f]]}return[0,b,0]},e),n=aG(function(k,e){var
c=e[1],f=k[2],g=1===r?xP(f,q):f;if(h)l[1]=e[2];var
b=c[4][1];if(typeof
b!=="number"&&10===b[0]){a5(0);var
i=iP(bei,1,b[2],b[1]),d=bs(0,z,g,i[2]);aI(0);xO(a,1,bej,d,c[4],i[1]);var
j=d.slice();j[4]=af(0,a,d[4]);return j}return bs(0,z,g,c[4])},c,R);l[1]=0;if(h)var
E=1-B[1],F=E?dX(15):E;else
var
F=h;if(F)ai(cQ(c)[1][2],15);aC(function(c,d){var
e=[0,Xf(c,d),0],f=c[2];b(Hq(0,a,c[4]),f,e);return 0},e,n);aI(0);aC(function(d,c){var
b=1-d6(c);return b?hp(function(b){return sj(a,b[4])},d):b},e,n);m(function(a){return hp(function(a){return bA(a[4])},a)},e);var
S=dV(e,n);return[0,aG(function(b,a){return[0,b[1],b[2],a[3],a[4]]},S,c),j,q]}function
bem(e,d,c,b){var
a=Hv(0,0,e,d,c,b,0);return[0,a[1],a[2]]}c8(function(a){if(a[1]===ac){var
i=a[3],c=a[4],j=function(c,a){return j_(i,function(aK){if(typeof
a==="number")switch(a){case
0:return e(c,ben);case
1:e(c,beo);e(c,bep);return e(c,beq);case
2:return e(c,ber);case
3:return e(c,bes);case
4:return e(c,bet);case
5:return e(c,beu);case
6:return e(c,bev);case
7:return e(c,bew);default:return e(c,bex)}else
switch(a[0]){case
0:var
K=a[1];return p(e(c,bez),bb,K,bey);case
1:var
M=a[3],N=a[2],O=a[1];return L(e(c,beA),bb,O,N,M);case
2:var
P=a[1],Q=function(a){return e(a,beB)},R=function(a){return b(e(a,beC),bb,P)};return cN(c,i,0,a[2],R,Q);case
3:var
S=function(a){return e(a,beD)},T=function(a){return e(a,beE)};return cN(c,i,0,a[1],T,S);case
4:var
U=a[1],V=function(a){return e(a,beF)},W=function(a){var
b=U[2];return d(e(a,beG),b)};return cN(c,i,0,a[2],W,V);case
5:var
X=a[1];return d(e(c,beH),X);case
6:var
Y=a[1][2];return d(e(c,beI),Y);case
7:var
Z=function(a){return e(a,beJ)},_=function(a){return e(a,beK)};return cN(c,i,0,a[1],_,Z);case
8:var
k=a[1];eX(k);var
v=t(k)[1];if(typeof
v!=="number"&&1===v[0]){b(e(c,beN),aT,k);return d(e(c,beP),beO)}return p(e(c,beM),aT,k,beL);case
9:var
w=a[2],$=function(b,a){if(f(a,beQ)){var
c=S7(a);return d(e(b,beR),c)}return e(b,beS)};eX(w);var
aa=a[1];return L(e(c,beT),aT,w,$,aa);case
10:var
ab=a[1];return d(e(c,beU),ab);case
11:var
ac=function(a){function
b(b){var
c=b[2];return d(e(a,beV),c)}return function(a){return m(b,a)}},ad=a[1];return b(e(c,beW),ac,ad);case
12:var
ae=a[1];return b(e(c,beX),bb,ae);case
13:var
q=a[5],r=a[4],x=a[3],y=a[2];eX(y);var
af=a[1];p(e(c,beY),af,aT,y);var
ag=A(x,beZ)?be0:be3;bH(e(c,be1),ag,bb,q,cD,r);return A(x,be2)?L(xL[2],c,i,r,q):L(Hp[2],c,i,r,q);case
14:var
z=a[2],l=a[1],s=A(l,be4)?be5:be9,B=function(a){return b(e(a,be6),s,l)},ah=function(a){return L(e(a,be7),s,bb,z,l)},ai=function(a){return L(e(a,be8),s,bb,z,l)},j=a[4],C=a[3],n=C[2],o=C[1];return j_(i,function(k){hm(0);m(function(a){xo(o,a[1]);return xo(n,a[2])},j);if(j){if(j[2]){var
b=function(a,b){return sK(o,a,b)};return cw(e(c,a65),ah,V0,j,B,b,n)}var
a=j[1],d=function(a,b){return sK(o,a,b)},f=a[2],g=a[1],i=function(a,b){return sK(g,a,b)};return cw(e(c,a66),ai,i,f,B,d,n)}throw[0,h,a67]});case
15:var
aj=a[1];return d(e(c,be_),aj);case
16:var
D=a[1];eX(D);var
ak=a[2];return p(e(c,be$),aT,D,ak);case
17:var
al=a[1];return d(e(c,bfa),al);case
18:var
am=a[1];return b(e(c,bfb),bb,am);case
19:var
an=a[1];return b(e(c,bfc),aT,an);case
20:var
ao=a[2],ap=a[1];return L(e(c,bfd),bb,ap,aT,ao);case
21:var
aq=a[1];return d(e(c,bfe),aq);case
22:var
E=a[2];return a[1]?d(e(c,bff),E):d(e(c,bfg),E);case
23:var
ar=a[2],as=a[1];return j_(i,function(q){hm(0);var
f=g(sL,as),a=g(sL,ar),h=0===a?1:0,i=1;function
j(a,b){return V7(i,h,bfh,a,b)}b(e(c,a61),j,f);if(0===a)return e(c,a62);var
d=GK(1,a),k=1;function
l(a){return V4(k,d,a)}var
m=0===d?1:0,n=0;function
o(a,b){return V7(n,m,a63,a,b)}return p(e(c,a64),o,a,l)});case
24:var
at=a[1];return d(e(c,bfi),at);case
25:var
au=a[2],av=a[1],aw=function(a){return e(a,bfj)},ax=function(c){var
a=sL([0,av,au]),d=a[2],f=a[1];function
g(a,b){return sJ(f,a,b)}return b(e(c,bfk),g,d)};cN(c,i,0,a[3],ax,aw);var
F=a[4];return F?b(e(c,bfn),bfm,bfl):F;case
26:var
u=a[2];eX(u);return a[1]?(e(c,bfo),b(e(c,bfp),aT,u)):(e(c,bfq),b(e(c,bfr),aT,u));case
27:var
G=a[2];eX(G);var
H=a[1];if(f(H,bfs))var
ay=S7(H),I=d(D8(bft),ay);else
var
I=bfu;return p(e(c,bfv),aT,G,I);case
28:var
J=a[2];eX(J);b(e(c,bfw),aT,J);var
az=a[1];return d(e(c,bfx),az);case
29:var
aA=a[1];return b(e(c,bfy),bb,aA);case
30:var
aB=a[1];return b(e(c,bfz),bb,aB);case
31:var
aC=a[1],aD=function(a){return e(a,bfA)},aE=function(a){return d(e(a,bfB),aC)};return cN(c,i,0,a[2],aE,aD);case
32:var
aF=a[1];return b(e(c,bfC),aT,aF);case
33:var
aG=function(a){return e(a,bfD)},aH=function(a){return e(a,bfE)};return cN(c,i,0,a[1],aH,aG);default:var
aI=a[1],aJ=a[2];return L(e(c,bfG),aJ,cD,aI,bfF)}})};return[0,fa(a[2],j,c)]}return a[1]===Hl?[0,a[2]]:0});rR[1]=s5;var
bh=O([I,bfH,0]);function
bfI(c,a,b){var
d=a[7],e=a[8],f=0,h=a[2],i=g(function(a){return eT},h),j=a[6]?[0,U(0,0)]:0,k=a[5],m=w(a[2]),l=0,n=a[2];return eV(1,b,[0,g(function(a){return fe(0,0)},n),m,l,k,j,i,f,e,d],c)}function
bfJ(h,b,f,e){var
a=[0,f],c=bg(a,h),d=c[5];if(d){var
i=c[1],k=g(function(a){return U(0,0)},i);try{var
l=d[1],m=aq(b,da(a,k),l);return m}catch(a){a=j(a);if(a[1]===x)throw[0,bh,e,[7,b,a[2]]];throw a}}return 0}function
pw(c){var
e=c[6];if(e){var
f=0===c[4]?1:0;if(f){var
g=0===c[5]?1:0;if(g){var
d=e[1];for(;;){var
a=d[1];if(typeof
a==="number")var
b=0;else
switch(a[0]){case
4:var
b=0===a[2]?0:1;break;case
6:var
d=a[1];continue;case
7:var
b=0===a[2]?a[3]?1:0:1;break;case
5:var
b=1;break;default:var
b=0}return b?1:0}}var
h=g}else
var
h=f;return h}return 0}function
XB(l,f,k,e){var
g=e[5];if(g){var
i=aJ(l,g[1]),a=i[1];if(typeof
a==="number")var
b=0;else
switch(a[0]){case
4:var
c=a6(a[1])[2],b=1;break;case
8:var
d=aw(a[1]),j=d.slice();j[5]=1;i[1]=[8,j];var
m=cT(d)?ak(0):d[2],c=m,b=1;break;default:var
b=0}if(b){if(1-bj(c))throw[0,bh,f,bfL];c[1]=[3,k,e[1],[0,0]];return 0}throw[0,bh,f,bfK]}throw[0,h,bfM]}var
px=jF([0,Q]);function
Hw(c,a){return g(function(a){var
b=a[1];try{var
d=a[2],e=[0,W_(c,b),d];return e}catch(a){a=j(a);if(a===Hd)throw[0,bh,b[2],0];throw a}},a)}function
XC(a,f,l,e,d){if(d){var
h=d[1],m=pr(0);kj(0);var
n=0,i=g(function(b){return cu(a,n,b)},e),o=g(function(a){return a[2]},i),j=cu(a,0,h),b=j[2],c=t(b)[1];if(typeof
c!=="number"&&3===c[0])if(Y(f,c[1])){ps(m);return[0,i,[0,j],o,[0,b]]}var
p=[5,b,da(f,l)];throw[0,bh,h[2],p]}var
q=1,k=g(function(b){return cu(a,q,b)},e);return[0,k,0,g(function(a){return a[2]},k),0]}function
bfN(c,a,f){kj(0);a5(0);var
v=Hw(c,a[2]),i=g(function(a){return a[1][2]},v),G=a[3],y=g(function(a){var
b=a[3],d=cu(c,0,a[2]);return[0,cu(c,0,a[1]),d,b]},G),e=a[4];if(typeof
e==="number")var
k=0===e?bfO:bfS;else
if(0===e[0]){var
n=e[1];if(0===n)jS(a[8],bfT);var
r=[0,px[1]];m(function(d){var
c=d[1][1];if(b(px[3],c,r[1]))throw[0,bh,a[8],[0,c]];r[1]=b(px[4],c,r[1]);return 0},n);if(z<w(d(by(function(a){return 0!==a[2]?1:0}),n)))throw[0,bh,a[8],1];var
D=oj(g(function(a){var
d=H(a[1][1]),b=XC(c,[0,f],i,a[2],a[3]);return[0,[0,d,a[1],b[1],b[2],a[4],a[5]],[0,d,b[3],b[4],a[4],a[5]]]},n)),k=[0,[0,D[1]],[1,D[2]]]}else{var
s=e[1];if(0===s)jS(a[8],bfU);var
u=[0,px[1]];m(function(d){var
c=d[1][1];if(b(px[3],c,u[1]))throw[0,bh,a[8],[1,c]];u[1]=b(px[4],c,u[1]);return 0},s);var
E=g(function(a){var
b=a[1],d=cu(c,1,oG(a[3])),e=a[5],f=a[4],g=a[2];return[0,H(b[1]),b,g,d,f,e]},s),F=g(function(a){var
d=a[4][2],b=d[1];if(typeof
b==="number")var
c=0;else
if(10===b[0])if(b[2])var
c=0;else
var
e=b[1],c=1;else
var
c=0;if(!c)var
e=d;return[0,a[1],a[3],e,a[5],a[6]]},E),R=Z(function(b){var
a=t(wW(c,b[3]))[1];if(typeof
a!=="number"&&3===a[0])return Y(a[1],wl);return 0},F)?1:0,k=[0,[1,E],[0,F,R]]}var
A=a[6];if(A)var
I=1-pw(a),B=cu(c,I,A[1]),p=[0,[0,B],[0,B[2]]];else
var
p=bfR;var
J=a[7],K=a[8],L=0,M=g(function(a){return eT},i),N=p[2],O=a[5],P=k[2],q=[0,i,w(i),P,O,N,M,L,K,J];m(function(b){var
a=b[1][2],d=b[2][2];try{var
e=aq(c,a,d);return e}catch(a){a=j(a);if(a[1]===x)throw[0,bh,b[3],[6,c,a[2]]];throw a}},y);aI(0);if(pw(a)){try{var
Q=iH([0,o(f[2],bfQ)],c)}catch(a){a=j(a);if(a===l)throw[0,h,bfP];throw a}XB(c,a[8],Q[1],q)}var
C=q[5];if(C)if(a15(c,f,C[1]))throw[0,bh,a[8],[2,a[1][1]]];return[0,f,a[1],v,q,y,k[1],a[5],p[1],a[8],a[7]]}function
Hx(b){m(bA,b[1]);var
a=b[3];if(typeof
a!=="number")if(0===a[0]){var
d=a[1];m(function(a){return bA(a[3])},d)}else{var
e=a[1];m(function(a){m(bA,a[2]);return br(bA,a[3])},e)}var
c=b[5];return c?bA(c[1]):0}function
py(e,f,d,u){var
n=u;for(;;){var
a=t(n);if(b(ae[3],a,d[1]))return 0;d[1]=b(ae[4],a,d[1]);var
c=a[1];if(typeof
c!=="number")switch(c[0]){case
3:var
o=c[2],p=c[1],i=da(p,g(function(a){return U(0,0)},o));try{Gg(e,i)}catch(a){a=j(a);if(a[1]===x)throw[0,h,bfV];if(a===l)throw[0,bh,f,[17,p]];throw a}var
q=ff(0),r=a1F(a);oT(0);try{aq(e,a,i);var
s=a1G(e,r),k=s}catch(a){a=j(a);if(a[1]!==x)throw a;var
k=0}er(q);if(1-k)throw[0,bh,f,[5,a,i]];return m(function(a){return py(e,f,d,a)},o);case
10:var
n=iP(0,0,c[2],c[1])[2];continue}return ba(function(a){return py(e,f,d,a)},a)}}var
Hy=g7([0,q0]);function
XD(f,e,h,a){var
i=a[3],r=typeof
i==="number"?0===i?1:0:0;if(!r){var
k=a[5];if(k){var
g=k[1],b=t(g)[1];if(typeof
b!=="number"&&3===b[0]){var
m=b[2],c=b[1];try{var
o=bg(c,f),p=w(a[1]);if(w(m)!==p)var
d=bf1;else
if(dc(f,0,m,a[1]))var
q=mY(rN(h,c,bf),a),d=V_(bf2,f,ls(c),o,h,q);else
var
d=bf3;var
n=0!==d?1:0;if(n)throw[0,bh,e,[4,g,d]];return n}catch(a){a=j(a);if(a===l)throw[0,bh,e,[17,c]];throw a}}throw[0,bh,e,[4,g,0]]}}return 0}function
XE(s,r,g,z,a){var
h=[0,gq[1]];function
i(f,c,A){var
a=t(A);if(b(ae[3],a,c)){var
k=f[1];if(typeof
k==="number")var
o=0;else
if(3===k[0])var
u=Y(k[1],g),o=1;else
var
o=0;if(!o)var
u=0;if(u)throw[0,bh,r,[2,b_(0,g)]];throw[0,bh,r,[3,b_(0,g),f]]}try{var
y=b(gq[22],a,h[1]),G=b(ae[12],c,y)?[0,1,c]:[0,0,b(ae[7],c,y)],m=G}catch(a){a=j(a);if(a!==l)throw a;var
m=[0,0,c]}var
e=m[2],B=ff(0);if(m[1])return 0;try{h[1]=p(gq[4],a,e,h[1]);var
n=a[1];if(typeof
n!=="number"&&3===n[0]){var
H=d(ae[2],e)?d(z,n[1])?0:1:0;if(!H){var
D=Gf(s,a),E=d(ae[2],e)?a:f,F=i(E,b(ae[4],a,e),D);return F}}throw cL}catch(b){b=j(b);if(b===cL){var
v=a[1];if(typeof
v==="number")var
q=0;else
switch(v[0]){case
4:case
8:var
w=1,q=1;break;default:var
q=0}if(!q)var
w=0;var
C=w?ae[1]:e;return ba(function(a){return i(f,C,a)},a)}if(b[1]===x)return er(B);throw b}}var
c=ae[1];return F0(s,function(b){return i(a,c,b)},a)}function
XF(g,f,e,d,c){var
a=rG.slice();a[14]=function(a){return function(a){return XE(g,f,e,c,a)}};var
h=UO(d);return b(a[4],a,h)}function
XG(i,p,h,a,y){if(0===a[1])return 0;var
k=[0,0];function
f(n,e,g,z){var
q=z;for(;;){var
b=t(q),r=1-a8(b,k[1]);if(r){k[1]=[0,b,k[1]];var
c=b[1];if(typeof
c!=="number")switch(c[0]){case
3:var
o=c[2],a=c[1];if(Y(h,a)){if(1-dc(i,0,e,o))throw[0,bh,p,[8,n,b,da(h,e)]]}else{var
s=d(y,a),A=s?1-aY(a,g):s;if(A)try{var
u=rY(a,i),v=u[1],w=o9(0,v,u[2]);try{var
B=w[1];aC(function(a,b){return aq(i,a,b)},B,o)}catch(c){c=j(c);if(c[1]===x)throw[0,bh,p,[5,b,da(a,v)]];throw c}f(a,e,[0,a,g],w[2])}catch(a){a=j(a);if(a!==l)throw a}}return m(function(a){return f(n,e,g,a)},o);case
10:var
q=iP(bf4,0,c[2],c[1])[2];continue}return ba(function(a){return f(n,e,g,a)},b)}return r}}var
b=a[5];return br(function(c){var
b=o9(bf5,a[1],c);return f(h,b[1],0,b[2])},b)}function
xS(c,a){try{var
d=b(gq[22],c,a[1]);return d}catch(a){a=j(a);if(a===l)return oQ;throw a}}function
XH(w,h,b,a){function
c(q,x){var
i=t(x),r=xS(i,h);if(SX(q,r))return 0;var
b=q|r;h[1]=p(gq[4],i,b,h[1]);function
e(a){return c(b,a)}var
a=i[1];if(typeof
a!=="number")switch(a[0]){case
1:var
g=mT(b);if(d(bM(0),g))var
n=0;else
if(d(bM(1),g))var
n=0;else
var
s=g,n=1;if(!n)var
s=fd(2,1,g);c(s,a[2]);return e(a[3]);case
2:return m(e,a[1]);case
3:var
k=a[2];if(0===k)return 0;try{var
y=bg(a[1],w),f=function(a){return d(bM(a),b)},z=y[6],A=aC(function(h,e){function
a(a){return d(bM(a),e)}var
i=f(6),j=i?a(3):i;if(j)var
k=j;else
var
w=f(4),q=w||f(5),k=q?a(6):q;if(k)return c(eT,h);var
l=e&b,m=e&mT(b),r=m|mT(m),s=mT(iB)&r,t=iB&(l|mT(l))|s,n=f(2);if(n)var
u=a(0),g=u||a(1);else
var
g=n;if(g)var
o=g;else
var
v=f(0),p=v||f(1),o=p?a(2):p;return c(fd(2,o,t),h)},k,z);return A}catch(a){a=j(a);if(a===l)return m(function(a){return c(Fa,a)},k);throw a}case
5:e(a[3]);return e(a[4]);case
8:var
u=aw(a[1]),B=u[1];m(function(f){var
a=aB(f[2]);if(typeof
a!=="number"){if(0!==a[0]){var
g=b&G(function(b,a){return fd(a,1,b)},oQ,bf6),h=a[2];return m(function(a){return c(g,a)},h)}var
d=a[1];if(d)return e(d[1])}return 0},B);return e(u[2]);case
11:if(d(bM(4),b))var
o=0;else
if(d(bM(5),b))var
o=0;else
var
v=Fa,o=1;if(!o)var
v=eT;var
C=a[3];return m(function(a){return c(v,a)},C);case
4:case
7:case
10:return e(a[1])}return 0}return c(b,a)}function
XI(c,a,b){return fd(0,c,fd(1,a,fd(2,a,fd(3,b,oQ))))}function
s6(f,s,k,c,j){var
n=k[2],u=k[1],h=g(function(a){var
b=a[3],c=a[2],d=a[1];if(!d)if(!c)return[0,1,1,b];return[0,d,c,b]},u),a=g(t,c[1]),e=[0,gq[1]];m(function(a){var
b=a[2],c=a[1]?eT:iB;return XH(f,e,c,b)},j);if(s){var
l=[0,0];aC(function(g,b){var
h=b[3],i=b[2],j=b[1];l[1]++;var
k=xS(g,e),m=lt(k),c=m[2],f=m[1],o=d(bM(3),k),p=bj(g);if(p){var
q=f?1-j:f;if(q)var
a=q;else{var
r=c?1-i:c;if(r)var
a=r;else
var
s=1-o,a=s?h:s}}else
var
a=p;if(a)throw[0,bh,n,[16,l[1],[0,f,c,o],[0,j,i,h]]];return a},a,h);var
v=lC(0,ak([2,a])),o=d(by(function(b){return 1-a8(b,a)}),v);if(0!==o){var
q=[0,gq[1]];aC(function(b,a){if(bj(b))return 0;var
c=a[1]?a[2]?eT:iB:mT(iB);return XH(f,q,c,b)},a,h);var
i=[0,ae[1]],r=function(u){var
a=t(u);if(b(ae[3],a,i[1]))return 0;i[1]=b(ae[4],a,i[1]);var
v=xS(a,e),w=ff(0),x=q[1];function
y(d,c,b){return dc(f,0,[0,a,0],[0,d,0])?c|b:b}var
z=p(gq[11],y,x,oQ);er(w);var
m=lt(v),c=m[2],d=m[1],g=Fb(z),h=g[2],j=g[1],A=d?1-j:d,s=A||(c?1-h:c);if(s){if(a8(a,o)){if(g[4]){if(j)var
l=0;else
if(h)var
l=0;else
var
k=-3,l=1;if(!l)var
k=-1}else
var
k=-2;throw[0,bh,n,[16,k,[0,d,c,0],[0,j,h,0]]]}return ba(r,a)}return s};m(function(a){return r(a[2])},j)}}return aG(function(g,f){var
q=xS(g,e),h=c[4],i=0!==c[3]?1:0;if(0===h)var
k=0;else
if(bj(g))var
j=bf7,k=1;else
var
k=0;if(!k)var
j=[0,f[1],f[2]];var
m=j[2],n=j[1];if(i)var
o=i;else
var
p=f[3],o=p?0===h?1:0:p;var
b=q|XI(n,m,o);if(i){if(d(bM(4),b))if(d(bM(5),b))var
a=eT,l=1;else
var
l=0;else
var
l=0;if(!l)if(bj(g))var
a=b;else
var
r=n?m?eT:iB:mT(iB),a=b|r}else
var
a=b;if(0===c[3])if(1===h)return a;return fd(2,d(bM(1),a),a)},a,h)}function
bf8(a){return[0,0,a]}function
Hz(a){return g(bf8,a)}function
XJ(j,i,a,f,e){var
k=e[2],l=e[1],n=a[2];if(k){var
b=t(k[1])[1];if(typeof
b!=="number"&&3===b[0]){var
c=g(t,b[2]),o=0,p=g(function(a){return lC(o,a)},c),q=a[1],r=[0,0,p];im(function(f,e,d){var
a=f[2];if(a){var
g=a[2],i=f[1],m=d[1],j=m||d[2];if(j){var
o=s(i,g),c=e[1];if(typeof
c==="number")var
b=0;else
if(0===c[0])var
k=N(function(a){return a8(e,a)},o),b=1;else
var
b=0;if(!b)var
k=1;var
l=k}else
var
l=j;if(l)throw[0,bh,n,4];return[0,[0,a[1],i],g]}throw[0,h,bf_]},r,c,q);var
u=Hz(l),d=f.slice();d[1]=c;d[4]=0;return s6(j,i,a,d,u)}throw[0,h,bf9]}var
v=Hz(l),m=f.slice();m[4]=0;return s6(j,i,a,m,v)}function
HA(e,c,a,b){var
u=0===a[3]?0:1===a[3]?0:1;if(!u)if(0===a[5]){var
m=b[1];return g(function(b){var
c=0!==a[3]?1:0,d=c||b[3];return XI(1-b[2],1-b[1],d)},m)}var
l=a[5],f=l?[0,[0,0,l[1]],0]:0,i=a[3];if(typeof
i==="number")return s6(e,c,b,a,f);else{if(0===i[0]){var
n=i[1];return s6(e,c,b,a,s(f,g(function(a){return[0,1===a[2]?1:0,a[3]]},n)))}var
j=i[1];if(Z(function(a){return 0===a[3]?1:0},j))return s6(e,c,b,a,s(f,Hz(fE(g(function(a){return a[2]},j)))));var
o=g(function(a){return[0,[0,a[2],0],0]},f),p=s(o,g(function(a){return[0,a[2],a[3]]},j)),k=g(function(d){return XJ(e,c,b,a,d)},p);if(k){var
q=k[2],r=k[1],t=G(function(a,b){return aG(SW,a,b)},r,q);return g(function(a){if(d(bM(4),a))if(d(bM(5),a))return eT;return a},t)}throw[0,h,bf$]}}function
XK(h,g,d,f){var
a=f;for(;;){var
b=aG(function(a,c){var
b=a[2].slice();b[6]=c;return[0,a[1],b]},g,a),c=R(function(a,b){return eV(1,a[1],a[2],b)},b,h),i=aG(function(d){return function(a){var
b=a[2],c=0;return function(a){return HA(d,c,b,a)}}}(c),b,d),e=aG(function(a,b){return aG(SW,a,b)},i,a);if(J(e,a)){var
a=e;continue}aC(function(d,g){var
a=d[1][2],b=0<r(a)?1:0,f=b?35===u(a,0)?1:0:b,e=1-f,h=e?(HA(c,1,d[2],g),0):e;return h},b,d);return[0,b,c]}}function
XL(a){var
b=a[2][1];return g(function(a){return oQ},b)}function
bga(a){switch(a){case
0:return bgb;case
1:return bgc;default:return bgd}}function
xT(a){return g(bga,a)}function
XM(h,g,a){var
c=a[3];if(typeof
c==="number")if(0===c)if(0===a[4]){var
d=a[5];if(d)if(pw(h)){var
b=t(d[1]),e=bi(b[2],b[1]);if(hk(b,e)){b4(b,bi(b[2],[3,[0,g],a[1],[0,0]]));var
f=a.slice();f[5]=[0,e];return f}return a}}return a}function
XN(f,q,w){var
D=d(by(pw),w),a=s(g(function(a){var
b=a[1][2],c=[0,o(a[1][1],bgh),b];return[0,c,a[2],a[3],0,a[5],0,a[7],a[8]]},D),w),i=g(function(a){return H(a[1][1])},a);j4(jW(0));a5(0);var
r=0===q?f:im(bfI,f,a,i),t=[0,0],E=dX(bgi);function
F(a){if(0!==q)if(E){var
b=[0,0],c=bg([0,a],r),e=a[2];aZz(e,c,function(h){var
a=t[1];if(a){var
g=a[1];g[1]=[0,[0,e,c],g[1]];return 0}var
i=ld(b);m(function(a){return oY(f,a[1],a[2])},i);return d(h,0)});return[0,a,[0,b]]}return[0,a,0]}function
I(b,a){t[1]=a[2];return bfN(r,b,a[1])}var
k=aG(I,a,g(F,i)),e=g(function(a){return[0,a[1],a[4]]},k);t[1]=0;var
u=bp(0,7),v=bp(0,7);m(function(a){var
b=a[4];if(typeof
b==="number")return 0;else{if(0===b[0]){var
c=b[1];return m(function(b){try{var
c=aV(v,b[1][1]),d=ai(b[4],[14,bgf,b[1][1],c,a[1][1]]);return d}catch(c){c=j(c);if(c===l)return bq(v,b[1][1],a[1][1]);throw c}},c)}var
d=b[1];return m(function(b){var
c=b[1];try{var
d=aV(u,c[1]),e=ai(b[4],[14,bgg,c[1],d,a[1][1]]);return e}catch(b){b=j(b);if(b===l)return bq(u,c[1],a[1][1]);throw b}},d)}},a);var
c=R(function(a,b){return eV(1,a[1],a[2],b)},e,f);if(0!==q)aC(function(b,a){return bfJ(r,c,b,a[8])},i,a);aI(0);m(function(a){return Hx(a[2])},e);var
n=aG(function(b,a){return[0,b,a[8]]},i,a);m(function(b){var
d=b[1],e=b[2],a=[0,d],i=dr(d,n);if(0===e[5])return 0;var
f=e[1],h=da(a,g(function(a){return U(0,0)},f));return XE(c,i,a,function(b){return Y(a,b)},h)},e);function
x(a){return 0===a[0]?g6(a[1],n):0}m(function(a){var
b=a[1],d=a[2];return XF(c,dr(b,n),[0,b],d,x)},e);m(function(b){var
a=b[1],d=b[4];return XG(c,dr(a,n),[0,a],d,x)},k);aC(function(d,c){var
a=c[4],b=UF(a);if(b)throw[0,bh,d[8],[9,b[1],a]];return 0},a,k);aC(function(g,x){var
n=x[2],a=[0,ae[1]],d=n[3];if(typeof
d!=="number")if(0===d[0]){var
e=g[4];if(typeof
e==="number")var
i=0;else
if(1===e[0]){var
r=e[1],s=d[1];m(function(e){var
b=r,f=e[3],g=e[1][2];for(;;){if(b){var
d=b[1];if(A(g,d[1][1]))return py(c,d[3][2],a,f);var
b=b[2];continue}throw[0,h,bfY]}},s);var
i=1}else
var
i=0;if(!i)throw[0,h,bfX]}else{var
f=g[4];if(typeof
f==="number")var
k=0;else
if(0===f[0]){var
t=f[1],u=function(b,a){return p(Hy[4],a[1][1],a,b)},v=G(u,Hy[1],t),w=d[1];m(function(d){var
e=d[3];try{var
f=b(Hy[22],d[1][2],v)}catch(a){a=j(a);if(a===l)throw[0,h,bf0];throw a}var
g=f[3],i=d[2],k=f[2];aC(function(d,b){return py(c,d[2],a,b)},k,i);if(g)if(e)return py(c,g[1][2],a,e[1]);return 0},w);var
k=1}else
var
k=0;if(!k)throw[0,h,bfZ]}var
o=n[5];if(o){var
q=g[6];if(q)return py(c,q[1][2],a,o[1]);throw[0,h,bfW]}return 0},a,e);var
y=aG(function(c,a){var
b=a[1];return[0,b,XM(c,b,a[2])]},a,e),J=g(function(a){var
b=a[8],c=a[2];return[0,xT(g(function(a){return a[2]},c)),b]},a),z=XK(f,y,J,g(XL,y)),B=z[2],C=z[1];aC(function(b,a){return XD(B,b[8],a[1],a[2])},a,C);return[0,aG(function(c,b){var
a=c.slice();a[4]=b[2];return a},k,C),B]}function
XO(c,F,e,o,g,n,b){var
B=H(b[1][1]),i=b[2];if(0===i[0])var
k=XC(c,e,g,i[1],i[2]),l=[0,k[3],k[4],[0,k[1],k[2]]];else{var
a=i[1],d=a$h(c,b[3],a[1]);if(0===d[11])var
s=0;else
if(1===n)var
s=0;else
var
u=2,s=1;if(!s)var
u=0;FL(u,c,eO(a[1]),d);var
v=sm(0,d),w=v[1];if(d[10])var
y=sl(c,o),C=da(e,y),p=[0,C,[0,da(e,y)]];else
var
p=[0,da(e,g),0];try{aq(c,v[2],p[1])}catch(b){b=j(b);if(b[1]===x)throw[0,bh,a[2],[13,a[1],c,b[2]]];throw b}if(1-d[10]){var
D=lC(0,ak([2,w]));m(function(a){var
b=a[1];if(typeof
b!=="number"&&0===b[0]){var
c=b[1];if(c)if(!f(c[1],bgj)){var
d=a8(a,D),e=d?(a[1]=bgk,0):d;return e}}return 0},g)}var
q=d[2][1];if(typeof
q==="number")var
t=0;else
if(3===q[0]){var
r=q[1],z=bg(r,c)[1],E=[0,ak([3,r,z,[0,0]]),z];if(1-dc(c,1,E,[0,ak([3,e,o,[0,0]]),o]))throw[0,bh,a[2],[14,a[1],r,e]];if(0===d[11])if(0!==n)throw[0,bh,a[2],[15,a[1]]];var
A=d[6];if(2!==A[0])throw[0,h,bgm];var
l=[0,w,p[2],[1,A[1],a]],t=1}else
var
t=0;if(!t)throw[0,h,bgl]}return[0,B,b[1],[0,e,g,l[1],l[2],n,b[3],b[4]],l[3],b[3],b[4]]}function
XP(k,b,f,a){kj(0);a5(0);var
n=Hf(b,f,a[1][1]),c=n[2],d=n[1],o=c[3];if(typeof
o==="number"){if(0===o)if(k)try{var
B=a[3],C=[10,d];throw[0,bh,io(function(a){return 0===a[2][0]?1:0},B)[3],C]}catch(a){a=j(a);if(a!==l)throw a}var
r=c[6],p=g(function(b){var
a=lt(b);return[0,1-a[2],1-a[1],0]},r),s=w(a[2]);if(c[2]!==s)var
h=bgn;else
var
z=a[2],A=xT(g(function(a){return a[2]},z)),h=qX(function(b,a){var
e=1-a[1],c=e||b[1];if(c)var
f=1-a[2],d=f||b[2];else
var
d=c;return d},p,A)?0:bgo;if(0!==h)throw[0,bh,f,[12,d,h]];var
q=Hw(b,a[2]),i=g(function(a){return a[1][2]},q),t=sl(b,c[1]);aC(function(a,c){return ev(b,a,c)},t,i);var
u=a[3],v=a[4],x=c[1],e=g(function(a){return XO(b,k,d,x,i,v,a)},u);aI(0);m(bA,i);m(function(a){m(bA,a[3][3]);return br(bA,a[3][4])},e);m(function(a){var
b=UG(a[3]);if(b)throw[0,bh,a[5],[19,b[1],a[3]]];return 0},e);m(function(g){var
a=g[3],d=c.slice(),e=[0,a[3],a[4]];d[1]=a[2];XJ(b,1,[0,p,f],d,e);return 0},e);var
y=G(function(b,a){return wF(1,a[1],a[3],b)},b,e);return[0,[0,d,a[1],q,e,a[4],a[5]],y]}throw[0,bh,f,[11,d]]}function
XQ(b,d){kj(0);a5(0);var
a=XO(b,0,rL,0,0,1,d);aI(0);m(bA,a[3][3]);br(bA,a[3][4]);var
c=UG(a[3]);if(c)throw[0,bh,a[5],[19,c[1],a[3]]];return[0,a,wF(1,a[1],a[3],b)]}function
XR(x,w,a){var
F=a[2];kj(0);a5(0);var
l=cu(x,0,F);aI(0);bA(l[2]);var
m=l[2],i=a[3];if(i){var
c=Vm(m);if(i){var
g=i[2],d=i[1];if(g){var
h=g[1];if(f(h,aV$)){var
s=g[2];if(s)if(f(s[1],aWa))var
e=0;else
var
b=[0,d,c,1,h,1],e=1;else
var
e=0}else{var
k=g[2];if(k){var
t=k[2],v=k[1];if(t)if(f(t[1],aWd))var
q=1;else
var
b=[0,d,c,0,v,1],e=1,q=0;else
var
q=1;if(q)var
b=[0,d,c,0,v,0],e=1}else
var
e=0}if(!e)var
b=f(h,aWb)?[0,d,c,1,h,0]:[0,d,c,0,aWc,0]}else
var
b=[0,d,c,1,aWe,0]}else
var
b=ad(aWf);var
j=b[4],y=0===c?1:0;if(y){var
z=3<r(j)?1:0;if(z){var
A=66===$(j,0)?1:0;if(A)var
B=83===$(j,1)?1:0,n=B?58===$(j,2)?1:0:B;else
var
n=A}else
var
n=z;var
C=1-n,D=C?37!==u(b[1],0)?1:0:C}else
var
D=y;if(D)throw[0,bh,a[2][2],2];var
o=[0,m,[0,b],w,a[4]]}else
var
o=[0,m,0,w,a[4]];var
G=a[1][1],E=p(FT([0,function(a){return[16,a]}]),G,o,x);return[0,[0,E[1],a[1],l,o,a[3],a[5],a[4]],E[2]]}function
HB(b,h,p,o,a){oY(b,h[2],o);kj(0);a5(0);var
q=Hw(b,a[2]),e=g(function(a){return a[1][2]},q),c=UO(o),B=c[2],d=w(e)===B?1:0;if(d){var
C=c[1];aC(function(a,c){return ev(b,a,c)},e,C)}var
D=a[3],E=g(function(a){var
c=a[3];try{var
d=cu(b,0,a[1]),e=cu(b,0,a[2]);aq(b,d[2],e[2]);var
f=[0,d,e,c];return f}catch(a){a=j(a);if(a[1]===x)throw[0,bh,c,[6,b,a[2]]];throw a}},D),F=1-pw(a),r=a[6];if(r)var
s=cu(b,F,r[1]),i=[0,[0,s],[0,s[2]]];else
var
i=bgq;var
t=i[2];if(0===a[5])var
k=0;else{if(d)if(0===c[3])var
m=0;else
var
k=c[4],m=1;else
var
m=0;if(!m)var
k=a[5]}if(d)var
u=0!==c[3]?1:0,v=u?0===a[5]?1:0:u;else
var
v=d;if(v)ai(a[8],bgp);var
G=a[7],H=a[8],I=0,J=0;if(d)if(0===t)var
n=0;else
var
y=c[3],n=1;else
var
n=0;if(!n)var
y=0;var
f=[0,e,w(e),y,k,t,J,I,H,G];if(p)XB(b,a[8],p[1],f);var
z=UF(f);if(z)throw[0,bh,a[8],[9,z[1],f]];var
A=XM(a,h,f),l=A.slice(),K=a[8],L=a[2];l[6]=HA(b,0,A,[0,xT(g(function(a){return a[2]},L)),K]);aI(0);Hx(l);return[0,h,a[1],q,l,E,0,a[5],i[1],a[8],a[7]]}function
pz(i,b,h,a,g,f){try{var
c=io(function(c){return hk(b,d(a,c))},h),k=[0,ak([4,b,[0,0]]),0];xj([0,d(a,c),k]);var
m=d(a,c),n=d(f,c),o=cw(e(i,bgr),g,n,aT,m,aT,b);return o}catch(a){a=j(a);if(a===l)return 0;throw a}}function
bgA(c,a){if(typeof
a==="number")switch(a){case
0:return e(c,bgB);case
1:return b(e(c,bgD),z,bgC);case
2:return e(c,bgE);case
3:return e(c,bgF);default:return p(e(c,bgJ),bgI,bgH,bgG)}else
switch(a[0]){case
0:var
K=a[1];return d(e(c,bgK),K);case
1:var
M=a[1];return d(e(c,bgL),M);case
2:var
N=a[1];return d(e(c,bgM),N);case
3:var
s=a[2];eX(s);var
O=a[1];return p(e(c,bgN),O,aT,s);case
4:var
u=a[1];eX(u);var
P=a[2],Q=function(a){return GM(bgQ,bgP,bgO,a)};return cw(e(c,bgT),bgS,bgR,aT,u,Q,P);case
5:var
v=a[2],w=a[1];eX(w);cM(v);return bH(e(c,bgV),bgU,aT,w,aT,v);case
6:e(c,bgW);var
R=function(a){return e(a,bgX)},S=function(a){return e(a,bgY)};return cN(c,a[1],0,a[2],S,R);case
7:var
T=function(a){return e(a,bgZ)},U=function(a){return e(a,bg0)};return cN(c,a[1],0,a[2],U,T);case
8:var
x=a[3],y=a[2];eX(y);cM(x);var
V=b_(0,a[1]);return bH(e(c,bg1),V,aT,y,aT,x);case
9:var
B=a[2];e(c,bg2);var
f=t(a[1]),i=B[3],C=B[5];if(typeof
i==="number"){if(0===i)if(C){var
k=C[1],m=function(a){function
b(a){return bgs}return pz(c,f,[0,a,0],function(a){return a},bgt,b)},j=t(k)[1];if(typeof
j!=="number")switch(j[0]){case
4:var
q=a6(j[1]);if(q[2]===f)return m(k);var
G=function(a){return o(a[1],bgu)},H=function(a){return a[3]};return pz(c,f,q[1],H,bgv,G);case
8:var
r=aw(j[1]);if(r[2]===f)return m(k);var
I=function(a){return o(bgx,o(a[1],bgw))},J=function(d){var
a=aB(d[2]);if(typeof
a!=="number"){if(0!==a[0]){var
b=a[2];if(b)if(!b[2])return b[1];return ak([2,b])}var
c=a[1];if(c)return c[1]}return ak(bgz)};return pz(c,f,r[1],J,bgy,I)}return m(k)}}else{if(0===i[0]){var
W=function(a){return o(a[1][2],bg3)},X=function(a){return a[3]};return pz(c,f,i[1],X,bg4,W)}var
Y=function(a){return o(a[1][2],bg5)},Z=function(a){return ak([2,a[2]])};return pz(c,f,i[1],Z,bg6,Y)}return 0;case
10:var
_=a[1];return p(e(c,bg8),bg7,cD,_);case
11:var
$=a[1];return L(e(c,bg$),bg_,cD,$,bg9);case
12:var
aa=a[2],ab=function(a){return GM(bhc,bhb,bha,a)},ac=b_(0,a[1]);return bH(e(c,bhf),bhe,bhd,ac,ab,aa);case
13:var
ad=a[1],ae=function(a){return e(a,bhg)},af=function(a){return b(e(a,bhh),bb,ad)};return cN(c,a[2],0,a[3],af,ae);case
14:var
ag=b_(0,a[3]),ah=b_(0,a[2]),ai=a[1];return ab6(e(c,bhm),bhl,bb,ai,bhk,ah,bhj,bhi,ag);case
15:var
aj=a[1];return L(e(c,bhp),bho,bb,aj,bhn);case
16:var
g=a[1],D=function(b){var
c=b[2],a=b[3]?bhq:bhw;return 0===b[1]?0===c?A(a,bhr)?bhs:a:o(a,bht):0===c?o(a,bhu):o(a,bhv)};if(-1===g)b(e(c,bhD),bhC,bhB);else
if(-2===g)b(e(c,bhH),bhG,bhF);else
if(-3===g)b(e(c,bhK),bhJ,bhI);else{var
n=1===((g%b6|0)/10|0)?1:0,E=(g%10|0)-1|0;if(2<E>>>0)var
h=0;else
switch(E){case
0:if(n)var
h=0;else
var
l=bhy,h=1;break;case
1:if(n)var
h=0;else
var
l=bhz,h=1;break;default:if(n)var
h=0;else
var
l=bhA,h=1}if(!h)var
l=bhx;L(e(c,bhN),bhM,bhL,g,l)}var
F=-2!==g?1:0;if(F){var
al=D(a[2]),am=D(a[3]);return b(e(c,bhE),am,al)}return F;case
17:var
an=a[1];return b(e(c,bhO),cD,an);case
18:var
ao=a[1];return d(e(c,bhP),ao);default:e(c,bhQ);var
ap=function(a){return bhR},aq=function(a){return a};return pz(c,a[1],a[2][3],aq,bhS,ap)}}c8(function(a){return a[1]===bh?[0,fa(a[2],bgA,a[3])]:0});var
aP=O([I,bhT,0]),s7=O([I,bhU,0]),xU=[0,H(bhV)];function
bhW(b){var
a=b;for(;;){if(0===a[0]){var
a=a[3];continue}return a}}function
bhX(a){var
c=a?bA:fh;return function(h){var
a=h;for(;;)switch(a[0]){case
0:m(c,a[2]);var
a=a[3];continue;case
1:var
d=a[1];c(d[1]);var
e=d[2],f=function(b,a){return c(a[3])};b(av[10],f,e);var
g=d[4];return m(function(a){return m(c,a[2])},g);default:c(a[2]);var
a=a[3];continue}}}function
XS(d){var
a=a6(dK(d[1]))[1],c=0;return G(function(a,e){var
c=e[1];return A(c,fO)?a:b(aL[3],c,d[3])?a:[0,c,a]},c,a)}function
XT(b,c){var
a=c;for(;;)switch(a[0]){case
0:var
a=a[3];continue;case
1:return b;default:var
d=XT(b,a[3]);return ab([1,a[1],a[2],d,0])}}function
XU(b){var
a=b;for(;;){if(2===a[0]){var
a=a[3];continue}return a}}function
XV(b){var
a=j6(b),c=a[3],d=a6(dK(a[1]))[1],e=0,f=G(function(a,c){var
b=c[1];return A(b,fO)?a:[0,b,a]},e,d),g=0,h=a[2];function
i(b,c,a){return[0,b,a]}return[0,p(av[11],i,h,g),f,c]}function
XW(c,b,a){if(2===a[0]){var
d=XW(c,b,a[3]);return[2,a[1],a[2],d]}return[0,c,b,a]}function
bhY(e){var
f=Z(m6,e[1]);if(f){var
a=e[2];for(;;)switch(a[0]){case
0:return Z(m6,a[2]);case
1:var
b=a[1],c=m6(b[1]);if(c){var
g=1,h=b[2],i=function(e,c,b){var
a=m6(c[3]),d=a?b:a;return d};return p(av[11],i,h,g)}return c;default:var
d=m6(a[2]);if(d){var
a=a[3];continue}return d}}return f}function
HC(c,e){var
a=e;for(;;)switch(a[0]){case
0:var
f=a[2];m(function(a){return o8(c,a)},f);var
a=a[3];continue;case
1:var
d=a[1];o8(c,d[1]);var
g=d[2],h=function(b,a){return o8(c,a[3])};b(av[10],h,g);var
i=d[4];return m(function(a){var
b=a[2];return m(function(a){return o8(c,a)},b)},i);default:o8(c,a[2]);var
a=a[3];continue}}function
nj(a){r_([4,a]);return a}function
XX(j,b,i,h,a,g,f,e){var
d=p(FT(0),i,[0,a,1,b,0],g),c=d[1],k=iI(0,c,[0,a,1,b,0],e),l=iI(j,c,[0,a,h,b,0],f);return[0,c,d[2],l,k]}function
HD(u,g,t,c,d,n,f,a,m,k,i){var
v=0;function
o(b){return af(v,a,b)}try{var
e=b(av[22],c,g[1]),s=e[3];if(J(e[2],d))throw[0,aP,i,a,[22,c,d]];var
w=o(e[4]);aq(a,o(f),w);var
z=1===s?s:n,A=t?0:[0,e[1]],B=[0,A,z],h=B}catch(b){b=j(b);if(b[1]===x)throw[0,aP,i,a,[1,bhZ,c,b[2]]];if(b!==l)throw b;var
h=[0,0,n]}var
q=h[1],r=q?[0,q[1],a,m,k]:XX(0,y,c,[1,d,u],f,a,m,k);g[1]=p(av[4],c,[0,r[1],d,h[2],f],g[1]);return r}function
bh0(a){var
c=aL[1];function
d(d,c,a){return 0===c[2]?a:b(aL[4],d,a)}return p(av[11],d,a,c)}function
XY(w,f,p,o,n,a,e){var
q=bhW(e);if(1===q[0]){var
c=q[1];try{aq(f,w,c[1])}catch(b){b=j(b);if(b[1]===x){var
r=b[2];if(r){var
s=r[2];if(s){var
t=s[2];if(t){var
g=t[2];if(g){var
i=g[1][1][1];if(typeof
i!=="number"&&5===i[0])throw[0,aP,a,f,[1,bh2,i[1],g[2]]]}}}}throw[0,h,bh1]}throw b}var
k=b(aL[8],c[3],o),u=bh0(c[2]),l=b(aL[8],u,n);if(p)if(0===p[1])if(d(aL[2],k)){if(d(aL[2],l))throw[0,aP,a,f,bh3];var
m=0}else
var
m=0;else{var
v=0===e[0]?b_(0,e[1]):bh4;if(1-d(aL[2],k))ai(a,[2,[0,v,d(aL[20],k)]]);if(1-d(aL[2],l))ai(a,[5,[0,v,d(aL[20],l)]]);var
m=1}else
var
m=0;var
y=b(aL[7],c[3],o);return[0,c,y,b(aL[7],u,n)]}throw[0,aP,a,f,[2,e]]}var
s8=[0,0];function
XZ(b,f,e,d){var
a=cu(b,0,f),g=a[2],c=cu(b,0,e),h=c[2];try{aq(b,g,h)}catch(a){a=j(a);if(a[1]===x)throw[0,aP,d,b,[0,a[2]]];throw a}return[0,a,c]}function
X0(a,d,b){function
c(b){return[0,b,a]}var
e=c(o(bh7,d)),f=R3([0,a],0,cJ([0,a],0,c(bh8)),e);return jQ([0,b[2]],0,bh9,0,f,b)}function
X1(k,i,d,a,c){var
e=a[2];try{var
g=b(av[22],d,c)[2],h=1===g?g:e,f=h}catch(a){a=j(a);if(a!==l)throw a;var
f=e}return p(av[4],d,[0,a[1],f,a[3]],c)}function
bh_(a,f){var
g=f[1],ac=[0,av[1]],c=cu(a,0,g),k=c[5],m=c[4],n=c[3],o=aJ(a,c[2]),h=[0,c[1],o,n,m,k],l=h[2],i=U(0,0),q=ab(bh$);aq(a,su(a,fO,0,i),q);try{aq(a,l,i)}catch(b){b=j(b);if(b[1]===x)throw[0,aP,g[2],a,[5,l]];throw b}sT(0);var
r=f[2],s=[0,0,av[1],aL[1],0],e=G(function(s,g){var
e=s[4],f=s[3],h=s[2],i=s[1],T=g[2];function
k(a){return[0,a,T,g[3]]}var
c=g[1];switch(c[0]){case
0:var
v=c[1],w=HE(a,v),y=w[2],U=0===y[0]?[0,[0,y[1],y[2]],e]:e,E=XY(l,a,0,f,aL[1],v[2],w[2]),V=E[1][2],W=v[2],X=function(b,c,d){return X1(a,W,b,c,d)},Y=p(av[11],X,V,h),Z=E[2];return[0,[0,k([0,w]),i],Y,Z,U];case
1:var
o=c[1],F=o[3],H=o[2],I=o[1],J=cu(a,0,o[4]),_=X1(a,g[2],I,[0,H,F,J[2]],h);return[0,[0,k([1,[0,I,H,F,J]]),i],_,f,e];case
2:var
q=c[1],K=q[3],A=q[2],r=q[1],L=g[2],$=q[4],Q=sv(a,r,A,ac,l)[2],B=function(b){try{var
c=aq(a,b,Q);return c}catch(b){b=j(b);if(b[1]===x)throw[0,aP,L,a,[1,bh6,r,b[2]]];throw b}},C=oG($),n=C[1];if(typeof
n==="number")var
m=0;else
if(8===n[0])if(n[1])var
m=0;else
if(0===A)var
m=0;else{var
R=n[2],u=[0,0,ab(0),a,L,0],S=s8[1];s8[1]=[0,[z,function(n){ki[1]=0;eZ[1]=bD;pq[1]=0;a5(0);var
b=e0(a,2,R),f=eZ[1];eZ[1]=bD;rM(function(e,g){var
a=iU[1];for(;;){if(a){var
c=cp(e,a[2]),d=0===c?1:0;if(!d){var
f=0<=c?a[4]:a[1],a=f;continue}var
b=d}else
var
b=0;var
h=b?(eZ[1]=du(e,g,eZ[1]),0):b;return h}},f);d(Hj(a,0),0);aI(0);bA(b[2]);var
g=pq[1],h=0,i=G(function(c,d){var
a=t(d),b=a[1];if(typeof
b!=="number"&&0===b[0])if(a[2]===bm){a[1]=[9,b[1]];return[0,a,c]}return c},h,g);Hi(b[2]);var
j=b[5],k=b[4],l=b[3],m=af(0,a,ak([10,b[2],i])),c=[0,b[1],m,l,k,j],e=c[2];B(e);u[1]=[8,0,c];u[2]=e;return 0}],S];var
M=u,m=1}else
var
m=0;if(!m){var
D=cu(a,0,C);B(D[2]);var
M=D}var
aa=0===K?f:b(aL[4],r,f);return[0,[0,k([2,[0,r,A,K,M]]),i],h,aa,e];case
3:var
N=c[1],O=XZ(a,N[1],N[2],g[2]);return[0,[0,k([3,[0,O[1],O[2]]]),i],h,f,e];case
4:var
P=c[1];sV([0,P,0]);return[0,[0,k([4,P]),i],h,f,e];default:throw[0,s7,fX(c[1])]}},s,r);sU(0);var
u=[0,l,e[2],e[3],e[4]];return[0,h,v(e[1]),u]}function
HE(a,c){function
g(d,b){return[0,d,b,a,c[2],c[3]]}var
b=c[1];switch(b[0]){case
0:var
h=b[2],e=b[1],k=c[2],s=e[1],d=kh(aZG,function(a){return[23,a]},a,k,s),r=b_(0,d[1]);lK(k,d[2][6],r);var
i=d[2],l=d[1];if(Y(i[3],xU))throw[0,aP,c[2],a,[7,e[1]]];var
m=j7(i[1],i[2]),f=m[1],t=w(h);if(w(f)!==t){var
u=w(h),v=w(f);throw[0,aP,c[2],a,[11,e[1],v,u]]}var
y=aG(function(c,d){var
b=cu(a,0,c),e=b[2];try{aq(a,e,d);return b}catch(b){b=j(b);if(b[1]===x)throw[0,aP,c[2],a,[12,b[2]]];throw b}},h,f);return g([0,l,e,y],[0,l,f,m[2]]);case
1:var
n=bh_(a,b[1]);return g([1,n],[1,n[3]]);case
2:var
o=b[1],p=cu(a,0,b[2]),z=p[2],q=HE(a,b[3]);return g([2,o,p,q],[2,o,z,q[2]]);default:throw[0,s7,fX(b[1])]}}function
X2(b,a){s8[1]=0;var
c=HE(b,a),d=v(s8[1]);m(function(a){var
b=c3(a);return dk===b?a[1]:z===b?gm(a):a},d);s8[1]=0;return c}function
bia(aa,v,w,$,u,i,N){var
k=i[9],l=i[8],m=i[7],n=i[6],o=i[5],r=i[4],q=i[3],c=i[2],a=i[1],d=N[2];function
s(a){return[0,a,d,N[3]]}var
g=N[1];switch(g[0]){case
0:var
O=g[3],y=g[2],ac=g[1],P=pA(v,a,q,y),Q=P[3],aA=0===Q[0]?[0,[0,Q[1],Q[2]],m]:m,R=XY(w,a,[0,ac],o,n,y[2],P[3]),ad=R[1],aB=[0,a,c,q,0],aC=ad[2],aD=function(d,c,a){var
b=HD(v,u,1,d,c[1],c[2],c[3],a[1],a[2],a[3],y[2]);return[0,b[2],b[3],b[4],[0,[0,d,b[1]],a[4]]]},A=p(av[11],aD,aC,aB),ae=A[3],af=A[2],ag=A[1],aE=A[4],aF=0,aG=ad[3],aH=function(a,b){return[0,[0,a,H(a)],b]},ah=p(aL[14],aH,aG,aF);if(O)var
aJ=[3,ah,v],aK=O[1],aM=y[2],S=XX([0,function(a){return[20,a]}],aM,aK,aJ,w,ag,af,ae),B=[0,S[2],S[3],S[4]];else
var
B=[0,ag,af,ae];var
aN=R[3],aO=R[2],aQ=[0,[z,function(a){return s([0,ac,P,O,aE,ah])}],r];return[0,B[1],B[2],B[3],aQ,aO,aN,aA,l,k];case
1:var
T=g[1],C=T[3],D=T[2],e=T[1];if(0===C[0]){var
aj=cu(a,0,C[1]),E=HD(v,u,0,e[1],D,0,aj[2],a,c,q,d),al=E[3],aR=E[1],aS=[0,[z,function(a){return s([1,e,D,aR,[0,aj],c===al?1:0])}],r];return[0,E[2],al,E[4],aS,o,n,m,l,k]}var
V=C[1];if(b(aL[3],e[1],k))throw[0,aP,d,a,[24,bib,e[1]]];if(b(aL[3],e[1],n)){if(1===V)ai(e[2],[5,[0,e[1],0]])}else
if(0===V)throw[0,aP,d,a,[23,bic,e[1]]];try{var
am=e1(a,C[2])}catch(b){b=j(b);if(b[1]===x){var
W=b[2];if(W)if(!W[2])throw[0,aP,d,a,[17,W[1][1]]]}throw b}var
F=HD(v,u,0,e[1],D,1,am[4],a,c,q,d),an=F[3],aT=F[1],aU=b(aL[4],e[1],k),aV=b(aL[4],e[1],n),aW=[0,[z,function(a){return s([1,e,D,aT,[1,V,am],c===an?1:0])}],r];return[0,F[2],an,F[4],aW,o,aV,m,l,aU];case
2:var
X=g[1],G=X[3],I=X[2],f=X[1];if(0===G[0]){var
ao=f[1],aX=G[1],ay=sv(a,ao,I,$,w),_=cu(a,0,oG(aX)),az=_[2];try{aq(a,az,ay[2])}catch(b){b=j(b);if(b[1]===x)throw[0,aP,d,a,[1,bh5,ao,b[2]]];throw b}return[0,a,c,q,[0,[z,function(a){return s([2,f,I,[0,_]])}],r],o,n,m,l,k]}var
J=G[2],Y=G[1],ap=28===J[1][0]?J:R_([0,J[2]],0,J,0);if(b(aL[3],f[1],l))throw[0,aP,d,a,[24,bid,f[1]]];if(b(aL[3],f[1],o)){if(1===Y)ai(d,[2,[0,f[1],0]])}else
if(0===Y)throw[0,aP,d,a,[23,bii,f[1]]];var
K=sv(a,f[1],I,$,w)[2];try{var
Z=ap[1];if(28!==Z[0])throw[0,h,bif];var
ar=Z[2],as=Z[1];if(ar)aq(a,cu(a,0,oG(ar[1]))[2],K);var
L=t(K)[1];if(typeof
L==="number")var
M=0;else
switch(L[0]){case
0:var
at=U(0,0);aq(a,ab([10,at,0]),K);aq(a,kl(a,as),at);var
M=1;break;case
10:var
a2=iP(0,0,L[2],L[1]),a3=kl(a,as);aq(a,a3,a2[2]);var
M=1;break;default:var
M=0}if(!M)throw[0,h,big]}catch(b){b=j(b);if(b[1]===x)throw[0,aP,d,a,[1,bie,f[1],b[2]]];throw b}var
aY=X0(aa,v,ap),aZ=u[1],a0=[z,function(d){var
a=ak([1,bih,w,K,0]);FZ(0);u[1]=aZ;var
b=bs(0,c,aY,a);aI(0);return s([2,f,I,[1,Y,b]])}],a1=b(aL[4],f[1],l);return[0,a,c,q,[0,a0,r],b(aL[4],f[1],o),n,m,a1,k];case
3:var
au=g[1],aw=XZ(a,au[1],au[2],d),a4=aw[2],a5=aw[1];return[0,a,c,q,[0,[z,function(a){return s([3,a5,a4])}],r],o,n,m,l,k];case
4:var
a6=X0(aa,v,g[1]),a7=u[1];return[0,a,c,q,[0,[z,function(d){FZ(0);var
a=ab([1,bij,w,ch(mW),0]);u[1]=a7;var
b=bs(0,c,a6,a);aI(0);return s([4,b])}],r],o,n,m,l,k];case
5:var
ax=g[1];sV([0,ax,0]);return[0,a,c,q,[0,[z,function(a){return s([5,ax])}],r],o,n,m,l,k];default:throw[0,s7,fX(g[1])]}}function
X3(w,i,n,u,l,t){var
o=t[1],y=o[2],L=[0,y[1],y[2],1],c=U(0,0),M=ab(bik);aq(n,su(n,fO,0,c),M);var
B=i?U(0,0):c,k=bbf(w,B,n,u,u,o),a=k[4],C=k[3],D=k[2],E=k[1],f=E[4],N=i?ab([4,U(0,0),[0,0]]):c;try{aq(a,f,N)}catch(b){b=j(b);if(b[1]===x)throw[0,aP,o[2],a,[5,f]];throw b}function
q(b){return a6(dK(aJ(a,b)))[1]}if(i){var
O=q(f);m(function(b){var
d=0===bB(b[2])?1:0;try{var
e=su(a,b[1],d,c),f=aq(a,b[3],e);return f}catch(a){throw[0,h,bil]}},O)}sT(0);var
P=t[2],Q=[0,a,k[5],k[6],0,aL[1],aL[1],0,aL[1],aL[1]],r=G(function(a,b){return bia(L,w,c,D,C,a,b)},Q,P);sU(0);aq(a,c,U(0,0));var
S=r[7],T=r[5],V=C[1];function
W(a){return[0,a[2],a[3],a[4]]}var
e=[0,f,b(av[23],W,V),T,S],F=q(c),X=d(by(function(a){return 0!==bB(a[2])?1:0}),F);if(i){UA(c);var
H=XS([0,c,e[2],e[3],e[4]]),Y=0,Z=e[2],_=function(c,b,a){return 0===b[2]?[0,c,a]:a},I=p(av[11],_,Z,Y),$=0!==H?1:0,aa=$||(0!==I?1:0);if(aa)throw[0,aP,l,a,[10,1,i,H,I]];var
ac=ab(0),ad=R(function(c,b){var
e=c[2],f=c[1];if(A(f,fO)){var
g=bB(e);return typeof
g==="number"?b:(mU(g[1],1),b)}var
a=e,j=c[3];for(;;){if(typeof
a==="number"){if(0!==a)throw[0,h,aWI];var
i=0}else{var
d=a[1][1];if(d){var
a=d[1];continue}var
i=[0,[0,0]]}return ab([5,f,i,j,b])}},F,ac);try{aq(a,B,ab([4,ad,[0,0]]));aq(a,f,c)}catch(b){b=j(b);if(b[1]===x)throw[0,aP,l,a,[21,b[2]]];throw b}}var
ae=v(r[4]),af=g(function(a){var
b=c3(a);return dk===b?a[1]:z===b?gm(a):a},ae),ag=D[1];function
ah(a){return a[1]}var
aj=b(av[23],ah,ag),ak=q(f),al=d(by(function(a){return 0===bB(a[2])?1:0}),ak);function
am(a){return a[1]}function
J(a){return g(am,a)}var
an=J(X),ao=J(al),K=d(by(function(a){return aY(a,an)}),ao);if(0!==K)ai(l,[6,K]);if(i)var
s=e;else
var
ap=e[4],ar=e[3],as=e[2],s=[0,aJ(a,f),as,ar,ap];return[0,[0,E,af,s,aj],s]}function
pA(i,a,o,am){var
c=am;for(;;){var
d=c[1];switch(d[0]){case
0:var
u=d[1],M=Hg(a,c[2],u[1]),F=M[2],O=M[1];if(Y(F[3],xU))throw[0,aP,c[2],a,[6,u[1]]];var
an=d[2],z=g(function(b){return cu(a,0,b)},an),P=j7(F[1],F[2]),Q=P[2],B=P[1],S=XW(O,B,Q),ao=w(z);if(w(B)!==ao){var
ap=w(z),ar=w(B);throw[0,aP,c[2],a,[11,u[1],ar,ap]]}aC(function(c,b){var
d=c[2];try{var
e=aq(a,d,b);return e}catch(b){b=j(b);if(b[1]===x)throw[0,aP,c[4],a,[12,b[2]]];throw b}},z,B);var
as=nj([0,[0,O,u,z],c[2],S,a,c[3]]),I=XV(Q);return nj([0,[5,as,0,I[1],I[2],I[3]],c[2],S,a,0]);case
1:var
T=X3(i,0,a,o,c[2],d[1]);return nj([0,[1,T[1]],c[2],[1,T[2]],a,c[3]]);case
2:var
U=d[2],p=d[1];if(U){var
V=U[1],k=V[2],at=[0,[0,oH([0,k],0,b2(bim),0),0,V],0],au=aZ([0,k],0,b2(bin)),av=[0,cJ([0,k],0,b2(bio))],aw=[0,[0,oH([0,k],0,b2(bip),av),0,au],at],ax=vT([0,k],0,aZ([0,k],0,b2(biq)),aw),ay=d[4],az=[0,ep(0,0,0,0,d[3],ax),0],aA=Sh([0,c[2]],0,0,az,ay),aB=cJ([0,k],0,b2(bir)),c=Sg([0,c[2]],0,p,0,aB,aA);continue}var
C=bbe(i,a,o,p,d[3]),D=C[3],m=C[1],aD=C[2],aE=g(function(a){var
b=a[1],c=[0,a[3]],d=wB(c,D),e=af(0,D,d[1]),f=[0,[0,c,b2([0,b[2]]),d],y,0,e,D,0];return[0,b,a[2],f]},aD),aF=function(a){return 2===a[0]?0:1},aG=m[2],aH=b(Hq(0,a,m[4]),aG,[0,[0,m,0,[0,bis,y,0,sd,bz,0]],0]);FZ(0);var
J=pA(i,D,C[4],d[4]);aI(0);var
W=bC(p),aJ=W?aF(J[3]):W;if(aJ)ai(m[2],8);var
aK=c[3],aL=J[3],aM=[2,p,ch(m[4]),aL];return nj([0,[2,p,m,aE,J,aH],c[2],aM,a,aK]);case
3:var
q=d[2];if(0===q)jS(c[2],bit);var
e=pA(i,a,o,d[1]),aN=function(f,e){var
b=f,a=e;for(;;){if(2===a[0]){var
c=a[3],d=a[1];if(bC(d)){var
a=c;continue}var
b=[0,d,b],a=c;continue}return b}},aa=aN(0,e[3]),aO=w(q),ab=w(aa)===aO?1:0;if(ab){var
ac=Z(function(a){return A(a[1],biy)},q);if(ac)var
ad=N(function(a){return f(a,biz)},aa),E=ad?(ai(e[2],3),1):ad;else
var
E=ac}else
var
E=ab;var
X=function(V,U,T,S,R,Q){var
r=V,k=U,i=T,g=S,c=R,b=Q;for(;;){if(2===i[0]){var
t=i[2],d=i[1];if(2===g[0]){var
ae=0===c?0===b?1:0:0;if(!ae){var
m=g[2],H=Ff(d),u=bC(d)?1:0;if(E)if(bC(d))var
z=0;else{if(c){var
N=c[1];throw[0,aP,N[2][2],a,[4,N[1]]]}if(!b)throw[0,h,bix];var
O=b[1],P=O[2],x=O[1];if(f(d,x))if(f(x,biw))throw[0,aP,P[2],a,[4,x]];var
ad=[0,hq(a,P,t,m)],n=[0,0,b[2],ad],z=1}else
var
z=0;if(!z)try{try{var
q=wi(H,c),ab=s(q[3],q[4]),ac=[0,q[1],q[2],ab,b],o=ac}catch(a){a=j(a);if(a!==l)throw a;var
p=wi(H,b),Y=p[4],Z=s(c,p[3]),o=[0,p[1],p[2],Z,Y]}var
w=o[2],K=o[1],L=0===u?1:0,_=L?bC(K):L;if(_)ai(w[2],[26,d]);if(0===u)var
A=0;else
if(bC(K))var
A=0;else
var
aa=xG(a,t),M=[0,Xk(hq(a,w,aa,xG(a,m)))],A=1;if(!A)var
M=[0,hq(a,w,t,m)];var
$=[0,o[3],o[4],M],n=$}catch(a){a=j(a);if(a!==l)throw a;if(bC(d)){if(g6(biu,c))var
C=1;else
if(g6(biv,b))var
C=1;else
var
B=0,C=0;if(C)var
I=[0,Hm(m,y)],B=1}else
var
B=0;if(!B)var
I=0;var
n=[0,c,b,I]}var
J=n[3],X=0===J?[0,[0,d,m],k]:k,r=[0,[0,d,J,u],r],k=X,i=i[3],g=g[3],c=n[1],b=n[2];continue}}}var
D=s(c,b);if(D){if(0===k)throw[0,aP,e[2],a,[3,e[3]]];var
F=D[1];throw[0,aP,F[2][2],a,[4,F[1]]]}var
W=G(function(b,a){return[2,a[1],a[2],b]},g,k);return[0,v(r),W]}},_=j7(0,e[3])[2],$=E?X(0,0,e[3],_,0,q):X(0,0,e[3],_,q,0);return nj([0,[3,e,$[1]],c[2],$[2],a,c[3]]);case
4:var
ae=d[1];try{var
ag=bem(a,ae,d[2],0)}catch(b){b=j(b);if(b[1]===x){var
K=b[2];if(K)if(!K[2])throw[0,aP,c[2],a,[17,K[1][1]]]}throw b}var
r=ag[2],ah=ag[1],aQ=[0,0,o],aR=Ut(ah),aj=R(function(e,d){var
a=e[1],f=[0,a],b=wB(f,r);a5(0);var
h=af(0,r,b[1]),c=[0,[0,f,b2([0,a[2]]),b],y,0,h,r,0];aI(0);bA(c[4]);var
j=[0,c[4],[1,0,i],b[3],0],g=H(a[2]),k=iI(0,g,j,d[2]);return[0,[0,[0,g,e[2],c],d[1]],k]},aR,aQ),ak=pA(i,r,aj[2],d[3]);return nj([0,[4,ae,ah,aj[1],ak],c[2],ak[3],r,c[3]]);case
5:FY(0);var
aS=pr(0),t=pA(i,a,o,d[1]);ps(aS);var
aT=pr(0),n=X2(a,d[2]);ps(aT);aI(0);var
aU=t[3];HC(sf(iO(t[3])),aU);var
aV=n[2];HC(sf(iO(n[2])),aV);var
al=a68(a,t[3],n[2]);if(al)throw[0,aP,t[2],a,[14,al]];var
L=XV(n[2]),aW=c[3],aX=j7(0,n[2])[2];return nj([0,[5,t,[0,n],L[1],L[2],L[3]],c[2],aX,a,aW]);default:throw[0,s7,fX(d[1])]}}}var
X4=aXu(fe(0,0));function
X5(d){var
b=d;for(;;){var
a=b[1];switch(a[0]){case
2:var
c=a[1],e=bC(c)?ch(X4):U(0,0);return ab([1,c,e,X5(a[4]),0]);case
4:var
b=a[3];continue;case
5:var
b=a[1];continue;default:return U(0,0)}}}function
HF(c){var
a=c[1];if(2===a[0]){var
b=a[1],d=bC(b)?ch(X4):U(0,0);return ab([1,b,d,HF(a[3]),0])}return U(0,0)}function
X6(j,i,h,a){var
d=0,k=1;if(a<1)var
b=d;else{var
c=k,f=d;for(;;){var
g=[0,U(0,0),f],l=c+1|0;if(a!==c){var
c=l,f=g;continue}var
b=g;break}}var
e=F2(U(0,0));return[0,b,e,eV(1,h,[0,b,a,0,1,[0,e],vH(eT,a),0,j,0],i)]}function
biA(B,X,d,z){var
c=z[2],u=d[10],C=d[9],y=d[8],i=d[7],D=d[6],k=d[5],e=d[4],E=d[3],F=d[2],a=d[1];kj(0);FY(0);function
Y(a){var
b=a[1];try{var
d=a[2],e=[0,W_(c,b),d];return e}catch(a){a=j(a);if(a===Hd)throw[0,aP,b[2],c,0];throw a}}var
G=g(Y,a[2]),h=g(function(a){return a[1][2]},G),H=[0,0];try{pv[1]=[0,[0,[0,e],H],pv[1]];var
I=b(X,c,a[4]);pv[1]=ik(pv[1])}catch(a){a=j(a);pv[1]=0;throw a}var
f=I[2];aI(0);var
J=iO(f),Z=a6(dK(J))[1];m(function(a){var
b=A(a[1],fO);return b?bA(a[3]):b},Z);var
K=sf(J);m(function(a){return o8(K,a)},h);HC(K,f);var
L=j7(h,f),M=L[2],N=L[1],l=da([0,e],k),o=iO(M);wQ(o);UA(o);try{aC(function(a,b){return aq(c,a,b)},k,N)}catch(b){b=j(b);if(b[1]===x){var
_=[13,e,l,da([0,e],N)];throw[0,aP,a[5],c,_]}throw b}try{aq(c,o,l)}catch(b){b=j(b);if(b[1]===x){var
$=[8,l,o,aJ(c,l)];throw[0,aP,a[5],c,$]}throw b}var
O=j7(h,f),P=O[1],n=iO(O[2]);wQ(n);UB(e,sf(n),y,n);try{aC(function(a,b){return aq(c,a,b)},y,P)}catch(b){b=j(b);if(b[1]===x){var
aa=da([0,i],P),ab=[13,i,da([0,i],y),aa];throw[0,aP,a[5],c,ab]}throw b}try{aq(c,n,C)}catch(b){b=j(b);if(b[1]===x){var
ac=[8,da([0,i],h),n,C];throw[0,aP,a[5],c,ac]}throw b}try{var
ad=af(0,c,u);aq(c,XT(l,M),ad)}catch(b){b=j(b);if(b[1]===x)throw[0,aP,a[5],c,[9,a[3][1],b[2]]];throw b}var
q=g(function(a){return eT},h),ae=a[6],ag=a[5],ah=[0,h,XU(f),[0,e],q,ag,ae],ai=a[6],aj=a[5],ak=0===a[1]?0:[0,u];d[11][2]=f;var
al=[0,h,f,[0,e],ak,q,aj,ai],am=B?wG(F,al,c):c,r=wH(E,ah,am);if(1===a[1]){var
Q=j6(f),R=XS(Q),an=0,ao=Q[2],ap=function(c,b,a){return 0===b[2]?[0,c,a]:a},S=p(av[11],ap,ao,an),ar=0!==R?1:0,as=ar||(0!==S?1:0);if(as)throw[0,aP,a[5],r,[10,B,0,R,S]]}var
at=F4(f),au=a6(dK(aJ(r,D)))[1],aw=g(function(a){return a[1]},au),T=j7(h,f),U=T[2],V=T[1],ax=a[6],ay=a[5],az=[0,V,XU(U),[0,e],q,ay,ax],aA=a[6],aB=a[5],aD=0===a[1]?0:[0,af(0,r,u)],aE=[0,V,U,[0,e],aD,q,aB,aA],aF=0,aG=a[5],aH=0,aK=g(function(a){return eT},k),aL=[0,k,w(k),0,1,[0,D],aK,aH,aG,aF],W=o9(0,h,iO(f)),s=W[2],t=W[1];wQ(s);UB(e,sf(s),t,s);var
aM=0,aN=a[5],aO=0,aQ=g(function(a){return eT},t),aR=[0,t,w(t),0,1,[0,s],aQ,aO,aN,aM],aS=z[1],aT=I[1];return[0,[0,[0,a,F,aE,E,az,e,aL,i,aR,G,at,aw,v(H[1]),aT],aS],r]}function
biB(g,w,a){var
q=a[14],h=a[9],r=a[8],i=a[7],s=a[6],k=a[5],u=a[4],b=a[3],e=a[2],c=a[1];try{a2a(g,b[1])}catch(a){a=j(a);if(a[1]===x)throw[0,aP,c[5],g,[20,e,b,a[2]]];throw a}m(bA,b[1]);var
y=b[2];d(bhX(1),y);br(bA,b[4]);m(bA,i[1]);br(bA,i[5]);m(bA,h[1]);br(bA,h[5]);if(1-bhY(b))throw[0,aP,c[5],g,[18,e,b]];var
f=j6(b[2]),l=b[1],o=a6(dK(t(f[1]))),p=o[1];m(lu,l);lu(o[2]);m(function(a){var
b=A(a[1],fO);return b?lu(a[3]):b},p);try{rF(t(f[1]));m(function(b){var
c=b[3],a=0===bB(b[2])?1:0;if(a)try{var
d=o7(c);return d}catch(a){a=j(a);if(a[1]===sg)throw[0,UH,[0,a[2],a[3],b[1],c]];throw a}return a},p);S2(t(f[1]));m(b3,l);S5(f);var
v=0,n=v}catch(a){a=j(a);if(a[1]!==UH)throw a;S2(t(f[1]));m(b3,l);S5(f);var
n=[0,a[2]]}if(n){var
z=w?function(a){return ph(e,a,b)}:function(a){return GJ(e,a,k)};throw[0,aP,c[5],g,[16,z,n[1]]]}return[0,e,c[3],b,u,k,s,i,r,h,a[11],a[12],a[13],q,[0,c[1],a[10],c[3],e,u,s,r,q,b,k,c[5],c[6]]]}function
biC(a,b){return[0,[0,a[6],a[7],a[9],a[3],a[5],a[14]],b]}function
biD(a,b){return[0,a[1],a[2],b[3],a[4],b[4],a[6],b[1],a[8],b[2],a[10],a[11],a[12],a[13],a[14]]}function
biE(b,a){var
g=a[12],c=a[9],e=a[7];if(g){var
i=g[1],k=c[5],l=e[5];if(k)if(l){var
m=o9(0,c[1],k[1]),n=o9(0,e[1],l[1]),q=n[1],r=m[1];aC(function(a,c){return aq(b,a,c)},r,q);var
o=n[2],p=m[2];try{d(Gt(b,p,o),0)}catch(a){a=j(a);if(a[1]===sb)throw[0,ac,i,b,[23,a[2],a[3]]];throw a}if(1-wP(p))throw[0,aP,i,b,[19,o]];var
f=1}else
var
f=0;else
var
f=0;if(!f)throw[0,h,biF]}return[0,a[1],a[2],a[3],a[4],a[5],a[6],e,a[8],c,a[10],a[11],a[14]]}function
HG(c,z,r,q,p){var
s=g(function(a){var
b=H(o(biG,a[3][1])),c=H(a[3][1]),d=H(a[3][1]);return[0,a,H(a[3][1]),d,c,b]},p);j4(jW(0));FY(0);var
t=[0,0,q],f=G(function(p,b){var
g=b[5],h=b[4],i=b[3],j=b[2],a=b[1],k=w(a[2]),e=X6(a[5],p[2],h,k),f=X6(a[5],e[3],g,k),l=f[3],m=d(z,a[4]),q=aL[1],r=av[1],n=[1,[0,U(0,0),r,q,0]],s=0,t=0,u=0===a[1]?0:[0,m],o=[0,0,n,xU,u,t,y,s],v=c?wG(j,o,l):l,x=wH(i,[0,0,n,xU,0,y,0],v);return[0,[0,[0,a,j,i,h,e[1],e[2],g,f[1],f[2],m,o],p[1]],x]},t,s),u=[0,0,f[2]],v=f[1],h=R(function(a,b){return biA(c,r,a,b)},v,u),a=h[2];aI(0);var
x=h[1],i=mv(function(b){return biB(a,c,b)},x),j=R(biC,i,0),b=R(function(a,b){var
c=a[6],d=c[2],e=g(function(a){return a[2]},d),f=b[2],h=c[11],i=[0,[0,xT(e),h],f];return[0,[0,[0,a[1],a[2]],b[1]],i]},j,bge),e=b[1],m=g(XL,e),n=XK(a,e,b[2],m)[1],k=aG(biD,i,aG(function(g,a){var
c=g[2],b=c[6],d=a[5].slice();d[4]=b;var
e=a[4].slice();e[5]=b;var
f=a[3].slice();f[6]=b;return[0,c,f,e,d]},n,j)),l=G(function(d,a){if(c)var
e=rP(bf,a[3]),b=wG(a[1],e,d);else
var
b=d;var
f=rQ(bf,a[5]),g=wH(a[4],f,b),h=mY(bf,a[9]),i=eV(1,a[8],h,g),j=mY(bf,a[7]);return eV(1,a[6],j,i)},a,k);return[0,g(function(a){return biE(l,a)},k),l]}var
xV=[0,0];function
biH(b,d){xV[1]++;var
c=pA(a(i+xV[1]),b,b,d);return[0,c,c[3]]}function
X7(c,b){var
a=X2(c,b);return[0,a,a[2]]}function
HH(c,b){var
a=HG(0,HF,X7,c,b),d=a[2],e=a[1];return[0,g(function(a){return[0,a[4],a[2],a[5],a[6],a[7],a[8],a[9],a[12]]},e),d]}function
X8(c,b,a){var
d=a[2];return m(function(d){var
a=d[1];return 0===a[0]?biI(c,b,a[2]):0},d)}function
biI(a,c,f){var
d=f;for(;;){var
b=d[1];switch(b[0]){case
0:try{var
g=aq(a,c,af(0,a,Vh(a,T1(b[1],a)[3])[2]));return g}catch(a){a=j(a);if(a===l)return 0;throw[0,h,biJ]}case
1:return X8(a,c,b[1]);case
2:case
4:var
e=b[4];break;default:var
e=b[1]}var
d=e;continue}}Xe[1]=function(b,j,h){xV[1]++;var
d=X3(a(i+xV[1]),1,b,b,j,h),c=d[2],e=d[1],f=aJ(b,c[1]);wQ(f);var
k=a6(dK(f))[1],l=g(function(a){return a[1]},k);X8(b,c[1],e);return[0,e,c,l]};function
biK(a){var
c=[0,vS(0,0,0),0],d=Si([0,a[4][2]],0,c),b=a.slice();b[4]=d;return b}c8(function(a){if(a[1]===aP){var
g=a[3],c=a[4],h=function(c,a){return j_(g,function(aq){if(typeof
a==="number")return e(c,biL);else
switch(a[0]){case
0:e(c,biM);var
x=function(a){return e(a,biN)},y=function(a){return e(a,biO)};return cN(c,g,0,a[1],y,x);case
1:var
z=a[2],A=a[1],B=function(a){return e(a,biP)},C=function(a){return b(e(a,biQ),A,z)};return cN(c,g,0,a[3],C,B);case
2:var
D=a[1];return b(e(c,biR),GI,D);case
3:return e(c,biS);case
4:var
h=a[1],E=f(h,biT)?d(D8(biU),h):biV;return d(e(c,biW),E);case
5:var
i=a[1];eX(i);return p(e(c,biY),biX,aT,i);case
6:var
F=a[1];return b(e(c,biZ),bb,F);case
7:var
G=a[1];return b(e(c,bi0),bb,G);case
8:var
j=a[3],k=a[2],l=a[1];xj([0,l,[0,k,[0,j,0]]]);return cw(e(c,bi1),aT,l,aT,k,aT,j);case
9:var
H=a[1],I=function(a){return e(a,bi2)},J=function(a){return d(e(a,bi3),H)};return cN(c,g,0,a[2],J,I);case
10:var
n=a[4],o=a[3],K=a[2],M=a[1],N=function(b,a){return m(function(a){return d(e(b,bi4),a)},a)},q=o?n?bi5:bi_:bi$,O=function(a){return K?d(e(a,bi6),q):M?e(a,bi7):e(a,bi8)},P=s(o,n);return L(e(c,bi9),O,q,N,P);case
11:var
Q=a[3],R=a[2],S=a[1];return L(e(c,bja),bb,S,R,Q);case
12:var
T=function(a){return e(a,bjb)},U=function(a){return e(a,bjc)};return cN(c,g,0,a[1],U,T);case
13:var
r=a[3],t=a[2];xj([0,t,[0,r,0]]);var
V=a[1];return cw(e(c,bjd),lH,V,aT,t,aT,r);case
14:return GL(c,a[1]);case
15:var
W=a[1];return d(e(c,bje),W);case
16:var
u=function(g,f,a,d,c,b){var
h=d?a:ak([4,a,[0,0]]);cM(h);return cw(e(g,bjf),f,c,aT,b,aT,a)},X=function(b,a){return 0===a[0]?u(b,bjg,a[1],a[2],a[3],a[4]):u(b,bjh,a[1],a[2],a[3],a[4])};hm(0);var
Y=a[2],Z=a[1];return p(e(c,bji),Z,X,Y);case
17:var
_=a[1];return b(e(c,bjj),GF,_);case
18:var
$=a[2],aa=a[1],ab=function(a,b){return ph(aa,a,b)};return b(e(c,bjk),ab,$);case
19:var
ac=a[1];return b(e(c,bjl),GF,ac);case
20:var
ad=a[2],ae=a[1],af=function(a,b){return ph(ae,a,b)};b(e(c,bjm),af,ad);var
ag=function(a){return e(a,bjn)},ah=function(a){return e(a,bjo)};return cN(c,g,0,a[3],ah,ag);case
21:var
ai=function(a){return e(a,bjp)},aj=function(a){return e(a,bjq)};return cN(c,g,0,a[1],aj,ai);case
22:var
v=0===a[2]?bjr:bjt,al=v[2],am=v[1];return b(e(c,bjs),am,al);case
23:var
w=a[2];if(f(w,bju)){var
an=a[1];return b(e(c,bjv),an,w)}return d(e(c,bjx),bjw);default:var
ao=a[2],ap=a[1];return b(e(c,bjy),ap,ao)}})};return[0,fa(a[2],h,c)]}return a[1]===s7?[0,a[2]]:0});var
cv=O([I,bjz,0]),pB=O([I,bjA,0]);function
bjB(a){return a[1]}function
X9(b,a){switch(a[0]){case
0:return[1,[0,b],a[1][2],0];case
1:var
c=a[3],d=a[2];return[1,X9(b,a[1]),d,c];default:throw[0,h,bjC]}}function
s9(a,d,c){var
b=o0(a,c);if(1===b[0])return b[1];throw[0,cv,d,a,0]}function
X_(b,d,a){var
c=o0(b,a);if(1===c[0])return c[1];throw[0,cv,d,b,[3,a]]}function
HI(l,r,b,k,i){var
m=xE(b,i[2],i[1]),c=m[1],n=X_(b,i[2],m[2][1]),g= true?k:y,p=l?l[1]:0;if(p)var
a=0;else
if(1===r)if(g[3])var
a=0;else{if(dX(aZ8))var
e=1;else
if(dX(aZ$))var
e=1;else
if(dX(a0a))var
e=1;else
var
a=0,e=0;if(e){var
j=[0,0],q=function(b){var
a=1-j[1];return a?ai(g,[17,b_(0,c)]):a};d(rR[1],q);var
h=[0,0],o=FV([0,function(a,b,d){var
i=d?1-aY([0,a,b],h[1]):d;if(i){h[1]=[0,[0,a,b],h[1]];if(f(a,aZ9))if(f(a,aZ_))var
e=[27,a,b],c=1;else
var
c=0;else
var
c=0;if(!c)var
e=[28,a,b];ai(g,e)}j[1]=1;return 0}],c,n,b),a=1}}else
var
a=0;if(!a)var
o=FV(0,c,n,b);return[0,c,o]}function
HJ(e,d,a){var
b=HI(e,a[2],d,a[3],a[1]),c=b[1];return[0,c,b[2],[0,c,a[1],a[2],a[3],a[4]]]}var
HK=[0,function(b,a){throw[0,h,bjD]}];function
HL(o,n,e,g,c,m,l,k){var
h=eV(1,e,c,o),i=g?eV(1,g[1],c,h):h;if(0===l)var
f=i;else{var
d=i,a=k;for(;;){if(a){var
b=a[1];if(1===b[0])if(2<=b[3]){var
j=a[2],d=eV(1,b[1],b[2],d),a=j;continue}}var
f=d;break}}Wj(f,0,0,bf,e,c,m);return XD(f,n,e,c)}function
X$(c,b){if(2<=c)return b;if(b){var
a=b[1];switch(a[0]){case
1:if(2<=a[3])return[0,[1,a[1],a[2],c],b[2]];break;case
3:if(2<=a[3])return[0,[3,a[1],a[2],c],b[2]];break}}return b}function
bjE(d,m,C,b){switch(b[0]){case
2:var
r=b[1][1],s=0;break;case
3:var
r=b[1],s=0;break;default:var
e=b[1],s=1}if(!s)var
e=[0,[0,r[1]],r[2]];var
t=[0,0];function
u(c,Z,k,Y){var
n=Z,q=Y;for(;;){if(n){var
h=n[1];switch(h[0]){case
1:if(k)if(!k[2]){var
r=k[1],l=n[2],j=h[3],p=h[2],a=h[1];switch(b[0]){case
0:var
f=b[2],F=f[4];if(typeof
F==="number")if(0===F)if(A(a[2],r))if(pw(f)){var
$=0,aa=f[8],ab=0,ac=f[2],ad=g(function(c){switch(c[2]){case
0:var
a=bjF;break;case
1:var
a=bjG;break;default:var
a=bjH}var
b=1-a[1],d=1-a[2];return fd(0,d,fd(1,b,fd(2,b,fd(3,0,oQ))))},ac),ah=w(f[2]),ae=0,af=0,ag=0,ai=f[2],G=[0,g(function(a){return fe(0,0)},ai),ah,ag,af,ae,ad,ab,aa,$],v=H(o(r,bjI)),I=HB(eV(1,v,G,d),a,[0,[0,v]],p,f),x=I[4];HL(c,f[8],a,q,x,p,j,l);var
J=G.slice();J[1]=x[1];var
aj=1===j?0:j;return[0,[0,[0,a],e,[0,I]],[0,[1,v,J,aj],[0,[1,a,x,j],l]]]}if(A(a[2],r)){var
K=HB(d,a,0,p,f),L=K[4];HL(c,f[8],a,q,L,p,j,l);return[0,[0,[0,a],e,[0,K]],[0,[1,a,L,j],l]]}var
D=0;break;case
2:var
D=0;break;default:var
D=1}if(!D){var
ak=o(r,bjJ);if(A(a[2],ak)){var
n=l,q=[0,a];continue}if(2===b[0]){var
M=b[1];if(A(a[2],r)){var
N=HB(d,a,0,p,M);HL(c,M[8],a,q,N[4],p,j,l);t[1]=[0,a];return[0,[0,[0,a],e,[2,N]],X$(j,l)]}}}}break;case
3:if(k){var
O=k[2],y=k[1],z=n[2],B=h[3],s=h[2],i=h[1];if(!O)switch(b[0]){case
1:var
R=b[2];if(A(i[2],y)){var
S=xE(d,m,R[1]),C=S[2],T=S[1],an=C[3],ao=C[2],U=GN(c,[0,Wi(c,C[1]),ao,an],T);pl(c,U[1],s[1]);return[0,[0,[0,i],e,[1,T,R]],[0,[3,i,U,B],z]]}break;case
3:var
V=b[2];if(A(i[2],y)){var
W=xE(d,m,V[1]),X=W[1],ap=GN(c,W[2],X);pl(c,ap[1],s[1]);t[1]=[0,i];return[0,[0,[0,i],e,[3,X,V]],X$(B,z)]}break}if(A(i[2],y)){var
P=u(c,s9(c,m,s[1]),O,0),Q=P[1],al=[0,[3,i,[0,[1,P[2]],s[2],s[3]],B],z],am=Q[3];return[0,[0,X9(i,Q[1]),e,am],al]}}break}var
_=n[2],E=u(Ul(h,c),_,k,q);return[0,E[1],[0,h,E[2]]]}throw[0,cv,m,c,[4,e[1]]]}}try{var
n=Ez(e[1]),v=u(d,C,n,0),p=v[2];if(n)if(n[2])var
a=0;else
switch(b[0]){case
2:var
c=b[1],x=t[1];if(!x)throw[0,h,bjL];var
E=x[1];try{var
y=c[6];if(y){var
f=y[1][1];if(typeof
f==="number")var
k=1;else
if(3===f[0]){var
z=f[2],F=w(c[2]);if(w(z)===F){var
G=c[2];aC(function(e,d){var
a=e[1];if(typeof
a!=="number"&&0===a[0]){var
b=d[1][1];if(typeof
b==="number")var
c=0;else
if(0===b[0]){if(A(a[1],b[1]))return 0;var
c=1}else
var
c=0}throw a$},z,G);var
I=f[1],i=1,k=0}else
var
i=0,k=0}else
var
k=1;if(k)var
i=0}else
var
i=0;if(!i)throw a$}catch(a){a=j(a);if(a===a$)throw[0,cv,c[8],d,2];throw a}try{var
J=iH(I[1],d)}catch(a){a=j(a);if(a===l)throw[0,h,bjK];throw a}var
q=mZ(rN(E,J[1],bf),p),a=1;break;case
3:var
B=t[1];if(!B)throw[0,h,bjM];var
K=B[1],q=mZ(iE(K,sW(0,d,m,b[2][1]),bf),p),a=1;break;default:var
a=0}else
var
a=0;if(!a)var
q=p;var
D=[0,v[1],q];return D}catch(a){a=j(a);if(a[1]===cj)throw[0,cv,m,d,[5,e[1],a[2]]];throw a}}function
lM(e,a,c){if(a){var
f=a[2],g=vG(d(e,2),f,c);return[0,b(e,1,a[1]),g]}return c}function
Ya(f,e,a,c){if(a){var
g=0===f?0:1,h=a[2],i=vG(d(e,2),h,c);return[0,b(e,g,a[1]),i]}return c}function
HM(e,d,a,c){if(a){var
f=a[1];if(wb(f[1][2])){var
g=HM(e,d,a[2],c);return[0,b(d,0,f),g]}return Ya(e,d,a,c)}return c}function
HN(a){return N(function(a){var
b=a[7];return N(function(a){return A(a[1][1],bjN)},b)},a)?0:1}function
Yb(e,a,c){if(a){var
f=a[2],g=vG(d(e,1),f,c);return[0,b(e,0,a[1]),g]}return c}function
pC(c,g){var
d=g;for(;;){var
a=d[1];switch(a[0]){case
0:return[0,W5(c,d[2],a[1][1])[1]];case
1:return[1,nk(c,a[1])];case
2:var
h=a[2],e=bt(function(a){return pC(c,a)},h),i=v$(e),f=r6(bjO,a[1][1],i,c),j=pC(f[2],a[3]);return[2,f[1],e,j];case
3:var
d=a[1];continue;case
4:return b(HK[1],c,a[1])[2];case
5:throw[0,pB,fX(a[1])];default:return[3,sW(0,c,d[2],a[1][1])]}}}function
Yc(b,a){var
c=a[4],d=a[3];return[0,pC(b,a[2]),d,c]}function
nk(t,r){var
a=t,d=r;for(;;){if(d){var
b=d[2],c=d[1][1];switch(c[0]){case
1:var
f=c[1],u=HN(f),p=g(function(d){var
a=w(d[2]);function
b(a){if(0<a){var
c=b(a-1|0);return[0,U(0,0),c]}return 0}a5(0);var
e=vH(eT,a),c=[0,b(a),a,0,1,0,e,0,y,0];aI(0);Hx(c);return[0,H(d[1][1]),c]},f),v=nk(a,b);return Ya(u,function(b,a){return[1,a[1],a[2],b]},p,v);case
4:var
h=c[1],i=Yc(a,h),j=wI(0,h[1][1],i,a),x=nk(j[2],b);return[0,[3,j[1],i,0],x];case
5:var
z=c[1],k=g(function(b){var
c=Yc(a,b);return[0,H(b[1][1]),c]},z),A=nk(G(function(b,a){return lA(0,a[1],a[2],b)},a,k),b);return lM(function(b,a){return[3,a[1],a[2],b]},k,A);case
6:var
e=c[1],E=e[4],F=e[3],I=e[2],o=[0,bt(function(b){return pC(a,b)},I),F,E],l=Uk(e[1][1],o,a),B=nk(l[2],b);return[0,[4,l[1],o],B];case
7:var
a=HJ(0,a,c[1])[2],d=b;continue;case
8:var
m=c[1][1],C=pC(a,m),n=mZ(bf,s9(a,m[2],C));return s(n,nk(r7(n,a),b));case
9:case
10:var
q=HH(a,g(biK,c[1]))[1],D=[0,nk(a,b),0];return fE(lM(function(b,a){return[0,[6,a[1],a[3],b],[0,[1,a[4],a[5],b],[0,[1,a[6],a[7],b],0]]]},q,D));default:var
d=b;continue}}return 0}}function
Yd(a,c,b){var
f=g(bjB,b);return aC(function(g,b){var
c=Wb(a,[0,b[1]],b[3][2]);return m(function(b){var
d=bg(b,a),e=g[2][2];function
c(a){return N(function(b){return fN(b,a)},f)}XF(a,e,b,d,c);return XG(a,e,b,d,c)},c)},c,b)}var
fk=jF([0,Q]);function
xW(e,d,c,a){if(b(fk[3],a,c[1]))throw[0,cv,d,bz,[6,e,a]];c[1]=b(fk[4],a,c[1]);return 0}function
hr(c,b,a){return xW(c,a[2],b,a[1])}function
Ye(e,d,c,b,a){switch(a[0]){case
1:return xW(bjP,b,e,a[1][2]);case
3:return xW(bjQ,b,d,a[1][2]);case
4:return xW(bjR,b,c,a[1][2]);default:return 0}}function
Yf(f,d,h){var
a=h;for(;;){if(a){var
b=a[1];switch(b[0]){case
0:var
i=b[1];if(N(function(b){return function(a){return lq(b,a)}}(i),f)){var
a=a[2];continue}break;case
2:var
g=b[1];if(0===b[3]){var
e=a[2];if(e){var
c=e[1];if(2===c[0])if(1===c[3])if(N(function(b){return function(a){return lq(b,a)}}(g),d)){var
a=[0,[2,c[1],c[2],0],e[2]];continue}}}if(N(function(b){return function(a){return lq(b,a)}}(g),d)){var
a=a[2];continue}break}return[0,b,Yf(f,d,a[2])]}return 0}}function
HO(c){var
a=c;for(;;){if(a){var
b=a[1];if(0===b[0]){var
d=HO(a[2]);return[0,b[1],d]}var
a=a[2];continue}return 0}}function
xX(c){var
a=c;for(;;){if(a){var
b=a[1];if(2===b[0]){var
d=xX(a[2]);return[0,b[1],d]}var
a=a[2];continue}return 0}}function
Yg(c,b,a){return W5(b,c,a)[1]}function
pD(f,e,d,c,b){var
a=[0,f,e,d,c,b];r_([7,a]);return a}function
gA(d,c,b){var
a=[0,d,c,b];r_([6,a]);return a}function
iW(a,f){var
g=f[2],e=f[1];switch(e[0]){case
0:var
l=e[1],o=Yg(g,a,l[1]);return pD([0,o,l],[0,o],a,g,f[3]);case
1:var
i=[0,fk[1]],n=[0,fk[1]],L=[0,fk[1]],D=e[1],c=function(a,o){j4(jW(0));if(o){var
e=o[2],h=o[1],f=h[2],b=h[1];switch(b[0]){case
0:var
M=XR(a,h[2],b[1]),j=M[1],p=c(M[2],e),q=p[2],ah=p[3],ai=HO(q),aj=j[1],ak=N(function(a){return lq(aj,a)},ai)?q:[0,[0,j[1],j[4]],q],al=p[1];return[0,[0,gA([0,j],a,f),al],ak,ah];case
1:var
r=b[1],O=HN(r);m(function(a){return hr(bjT,i,a[1])},r);var
P=XN(a,O,r),Q=P[1],t=c(P[2],e),am=t[3],an=t[2],ao=HM(O,function(b,a){return[1,a[1],a[4],b]},Q,an),ap=t[1];return[0,[0,gA([1,Q],a,f),ap],ao,am];case
2:var
R=XP(0,a,h[2],b[1]),S=R[1],u=c(R[2],e),T=u[2],aq=S[4],ar=d(by(function(a){var
b=xX(T),c=a[1];return 1-N(function(a){return lq(c,a)},b)}),aq),as=u[3],at=Yb(function(b,a){return[2,a[1],a[3],b]},ar,T),au=u[1];return[0,[0,gA([2,S],a,f),au],at,as];case
3:var
U=XQ(a,b[1]),k=U[1],v=c(U[2],e),w=v[2],av=xX(w),aw=k[1],ax=N(function(a){return lq(aw,a)},av),ay=v[3],az=ax?w:[0,[2,k[1],k[3],2],w],aA=v[1];return[0,[0,gA([3,k],a,f),aA],az,ay];case
4:var
g=b[1];hr(bjU,n,g[1]);var
V=iW(a,g[2]),W=[0,V[2],g[3],g[4]],X=wI(0,g[1][1],W,a),Y=X[1],x=c(X[2],e),aB=x[3],aC=[0,[3,Y,W,0],x[2]],aD=x[1];return[0,[0,gA([4,[0,Y,g[1],V,g[3],g[4]]],a,f),aD],aC,aB];case
5:var
Z=b[1];m(function(a){return hr(bjV,n,a[1])},Z);var
_=Yi(h[2],a,Z),$=_[1],y=c(_[2],e),aE=y[3],aF=y[2],aH=lM(function(b,a){return[3,a[1],[0,a[3][2],a[4],a[5]],b]},$,aF),aI=y[1];return[0,[0,gA([5,$],a,f),aI],aH,aE];case
6:var
z=Yh(L,a,h[2],b[1]),A=c(z[1],e),aJ=A[3],aK=[0,z[3],A[2]],aL=A[1];return[0,[0,gA([6,z[2]],a,f),aL],aK,aJ];case
7:var
aa=HJ(0,a,b[1]),B=c(aa[2],e),aM=B[3],aN=B[2],aO=B[1];return[0,[0,gA([7,aa[3]],a,f),aO],aN,aM];case
8:var
C=b[1],ab=C[1],ac=iW(a,ab),l=mZ(bf,s9(a,ab[2],ac[2])),aP=h[2];m(function(a){return Ye(i,n,L,aP,a)},l);var
aQ=r7(l,a),aR=[0,ac,l,C[2],C[3]],D=c(aQ,e),E=D[2],aS=D[3],aT=xX(E),aU=s(Yf(HO(E),aT,l),E),aV=D[1];return[0,[0,gA([8,aR],a,f),aV],aU,aS];case
9:var
F=b[1];m(function(a){return hr(bjW,i,a[3])},F);var
K=HG(1,HF,X7,a,F),ad=K[1],G=c(K[2],e),aW=G[3],aX=[0,G[2],0],aY=fE(lM(function(b,a){return[0,[5,a[1],a[3],b],[0,[6,a[4],a[5],b],[0,[1,a[6],a[7],b],[0,[1,a[8],a[9],b],0]]]]},ad,aX)),aZ=G[1];return[0,[0,gA([9,aG(function(b,a){return a[12]},F,ad)],a,f),aZ],aY,aW];case
10:var
H=b[1];m(function(a){return hr(bjX,i,a[3])},H);var
ae=HH(a,H),af=ae[1],I=c(ae[2],e),a0=I[3],a1=[0,I[2],0],a2=fE(lM(function(b,a){return[0,[6,a[1],a[3],b],[0,[1,a[4],a[5],b],[0,[1,a[6],a[7],b],0]]]},af,a1)),a3=I[1];return[0,[0,gA([10,aG(function(b,a){return a[8]},H,af)],a,f),a3],a2,a0];case
11:var
ag=b[1];sV([0,ag,0]);var
J=c(a,e),a4=J[3],a5=J[2],a6=J[1];return[0,[0,gA([11,ag],a,f),a6],a5,a4];default:throw[0,pB,fX(b[1])]}}return[0,0,0,a]},M=r$(0);sT(0);var
h=c(TT(a),D),j=[0,h[1],h[2],h[3]];sU(0);wL([0,[5,j],M]);return pD([1,j],[1,j[2]],a,g,f[3]);case
2:var
p=e[1],E=e[2],q=bt(function(b){return iW(a,b)},E),r=bt(function(a){return a[2]},q),F=v$(r),t=r6(bjS,p[1],F,a),u=t[1];j4(jW(0));var
w=iW(t[2],e[3]);return pD([2,u,p,q,w],[2,u,r,w[2]],a,g,f[3]);case
3:var
x=e[1],y=iW(a,x),H=s9(a,x[2],y[2]),I=e[2],J=[0,0,H],z=G(function(b,d){var
c=bjE(a,f[2],b[2],d);return[0,[0,c[1],b[1]],c[2]]},J,I),K=f[3],C=et(bf,[1,z[2]]);return pD([3,y,v(z[1])],C,a,g,K);case
4:var
A=b(HK[1],a,e[1]);return pD([4,A[1]],A[2],a,g,f[3]);case
5:throw[0,pB,fX(e[1])];default:var
B=e[1],k=sW(0,a,g,B[1]);return pD([5,k,B],[3,k],a,g,f[3])}}function
Yh(j,c,l,a){var
d=a[4],e=a[3],b=a[1];hr(bjY,j,b);var
k=a[2],f=bt(function(a){return iW(c,a)},k),g=[0,bt(function(a){return a[2]},f),e,d],h=Uk(b[1],g,c),i=h[1];return[0,h[2],[0,i,b,f,e,d],[4,i,g]]}function
Yi(m,b,a){function
e(a){return G(function(b,a){return iJ(bj0,a[1],a[3][2],b)},b,a)}function
f(c,b){return aG(function(b,a){var
d=iW(c,b[2]);return[0,a[1],a[2],d]},a,b)}var
h=g(function(a){return H(a[1][1])},a),l=G(function(b,a){return iJ(bj2,a,[0,[0,H(bj1)]],b)},b,h),i=aG(function(b,a){var
c=pC(l,a[2]);return[0,b,a[1],c]},h,a),c=f(G(function(b,a){return iJ(bjZ,a[1],a[3],b)},b,i),i),j=e(c);Yd(j,a,c);var
d=f(j,c),k=e(d);Yd(k,a,d);return[0,aG(function(b,a){return[0,a[1],a[2],a[3],b[3],b[4]]},a,d),k]}function
Yj(a){function
d(c){if(c){var
a=c[1];switch(a[0]){case
0:var
e=d(c[2]),k=e[2],l=a[1][2];if(b(fk[3],l,k))return e;var
o=e[3],p=b(fk[4],l,k);return[0,[0,a,e[1]],p,o];case
2:var
f=d(c[2]),j=f[3],m=f[2],g=f[1],n=a[1][2];if(b(fk[3],n,j)){if(0===a[3])if(g){var
h=g[1];if(2===h[0])if(1===h[3])return[0,[0,[2,h[1],h[2],0],g[2]],m,j]}return f}return[0,[0,a,g],m,b(fk[4],n,j)];default:var
i=d(c[2]);return[0,[0,a,i[1]],i[2],i[3]]}}return[0,0,fk[1],fk[1]]}return d(a)[1]}var
Yk=O([I,bj3,0]);function
HP(c){var
b=c;for(;;){var
a=b[1];switch(a[0]){case
0:return a[1];case
3:var
d=HP(a[2]);return[2,HP(a[1]),d];case
4:var
b=a[1];continue;default:throw Yk}}}function
HQ(b){var
a=b;for(;;)switch(a[0]){case
1:return Z(bj4,a[1]);case
2:var
a=a[3];continue;default:return 1}}function
bj4(a){switch(a[0]){case
0:return m6(a[2][1]);case
3:return HQ(a[2][1]);default:return 1}}function
bj5(d,a){return m(function(f){var
a=f[1];switch(a[0]){case
1:var
e=a[2];return m(function(c){var
a=c[2],b=1-m6(a[4]);if(b)throw[0,cv,a[2],d,[7,a[4]]];return b},e);case
6:var
b=a[1][3],c=1-HQ(b[3]);if(c)throw[0,cv,b[2],d,[9,b[3]]];return c;default:return 0}},a)}function
Yl(b,d,a,c){return b?Wa(c,[1,b[1],d,dt],a):a}function
Ym(f,e,a,b){if(0===b)return a;var
c=s9(f,e,a);return[1,g(function(a){switch(a[0]){case
1:var
g=a[2];if(!g[1]){var
c=a[1];if(g6([0,c[2],0],b)){var
k=dr([0,c[2],0],b),h=g.slice(),l=a[3];h[5]=[0,k];return[1,c,h,l]}}break;case
3:var
d=a[2],i=a[1],j=function(e){var
a=e;for(;;){if(a){var
c=a[1],b=c[1];if(b){var
d=b[2];if(d)if(A(b[1],i[2])){var
f=j(a[2]);return[0,[0,d,c[2]],f]}}var
a=a[2];continue}return 0}},m=d[3],n=d[2],o=j(b),p=[0,Ym(f,e,d[1],o),n,m];return[3,i,p,a[3]]}return a},c)]}function
HR(a,d,c,b,i){try{var
f=wC(c,a)[1];if(f)if(0===b)var
e=0;else
var
k=dV(g(Ez,b),i),h=Ym(a,d,f[1],k),e=1;else
var
e=0;if(!e){if(0!==b)throw[0,cv,d,a,0];var
h=[0,c]}return h}catch(b){b=j(b);if(b===l)throw[0,bv,d,a,[22,sA(0,c)]];throw b}}w3[1]=function(a,i,h,g,f,e,c){function
b(f,e,c){var
g=dV(e,c),b=oj(d(by(function(a){return 0===lC(0,a[2])?1:0}),g));return HR(a,y,f,b[1],b[2])}var
k=b(i,h,g),l=b(f,e,c);try{var
m=0===pl(a,k,l)?1:0;return m}catch(a){a=j(a);if(a[1]===cj)return 0;throw a}};function
xY(c,b,a,d){try{var
e=pl(c,b[3],a)}catch(a){a=j(a);if(a[1]===cj)throw[0,cv,b[2],c,[1,a[2]]];throw a}return[0,[4,b,a,d,e],b[2],a,c,0]}function
lN(G,g,e,F,a,b){var
k=G?G[1]:0,c=b[1];switch(c[0]){case
0:var
I=c[1],f=sW([0,1-k],a,b[2],I[1]),d=[0,[0,f,I],b[2],[3,f],a,b[3]];if(k)if(FH(f,a))var
D=0;else{FG(oO(f));var
L=d,D=1}else
var
D=0;if(!D){var
m=iG(f,a)[1];if(3===m[0])if(k)var
E=0;else
var
r=j1([0,b[2]],a,m[1]),s=Wl(a,0,r),aa=d[5],ab=d[4],ad=g?kb(a,s,r):s,K=[0,[4,d,s,0,[3,r,0]],d[2],ad,ab,aa],E=1;else
var
E=0;if(!E)var
$=g?kb(a,m,f):m,K=[0,d[1],d[2],$,d[4],d[5]];var
L=K}return L;case
1:var
M=Yn(0,e,F,a,c[1],b[2]),t=M[2],O=[0,[1,M[1]],b[2],[1,t],a,b[3]],P=Yj(t),ae=w(t);return w(P)===ae?O:xY(aYU(a),O,[1,P],0);case
2:var
Q=c[1],af=c[2],R=bt(function(b){return iW(a,b)},af),u=bt(function(a){return a[2]},R),S=u?[0,r6(bj7,Q[1],u[1],a),1]:[0,[0,H(bj8),a],0],T=S[1],U=T[1],V=lN(0,g,S[2],0,T[2],c[3]);return[0,[2,U,Q,R,V],b[2],[2,U,u,V[3]],a,b[3]];case
3:var
v=c[2],x=c[1],n=lN(0,1,e,0,a,v);try{var
_=[0,HP(n)],o=_}catch(a){a=j(a);if(a!==Yk)throw a;var
o=0}var
ag=0,ah=g?0!==o?1:0:g,p=lN(0,ah,e,ag,a,x),h=o0(a,p[3]);if(2===h[0]){var
y=h[3],W=h[2],z=h[1],X=0===W?1:0,ai=v$(W);if(X){if(J(v[1],bj9))throw[0,cv,x[2],a,4];var
aj=e?Wc(a,p[3]):e;if(aj)throw[0,cv,b[2],a,1]}try{var
ak=pl(a,n[3],ai)}catch(b){b=j(b);if(b[1]===cj)throw[0,cv,v[2],a,[1,b[2]]];throw b}if(o)var
A=et(iE(z,o[1],bf),y);else
if(X)var
A=y;else{try{var
al=a7X(iJ(bj_,z,n[3],a),z,y)}catch(c){c=j(c);if(c===l)throw[0,cv,b[2],a,[2,h]];throw c}var
A=al}return[0,[3,p,n,ak],b[2],A,a,b[3]]}throw[0,cv,x[2],a,[0,p[3]]];case
4:var
am=lN([0,k],1,e,F,a,c[1]),Y=iW(a,c[2]),B=xY(a,am,Y[2],[0,Y]);return[0,B[1],b[2],B[3],B[4],b[3]];case
5:var
q=e1(a,c[1]),i=aJ(a,q[4])[1];if(typeof
i!=="number")switch(i[0]){case
0:throw[0,ac,b[2],a,3];case
11:var
Z=i[3];if(N(function(a){return 0!==lC(0,a)?1:0},Z))throw[0,cv,b[2],a,[13,q[4]]];var
C=HR(a,b[2],i[1],i[2],Z),an=e?Wc(a,C):e;if(an)throw[0,cv,b[2],a,1];return[0,[5,q,C],b[2],C,a,b[3]]}throw[0,cv,b[2],a,[12,q[4]]];default:throw[0,pB,fX(c[1])]}}function
Yn(b,r,f,i,h,n){var
aK=b?b[1]:0,o=[0,fk[1]],t=[0,fk[1]],_=[0,fk[1]];function
az(a,L){j4(jW(0));if(L){var
M=L[2],N=L[1],a6=r$(0),d=N[2],b=N[1];switch(b[0]){case
0:var
$=b[1];kj(0);a5(0);var
h=e1(a,$);aI(0);if(d6(h))bA(h[4]);else
sj(a,h[4]);var
T=$[1];if(0===T[0]){var
aF=fg(T[1][1],a),U=h.slice();U[4]=aF[2][1];var
aa=U}else
var
aa=h;var
c=[0,[0,aa,b[2]],0,a];break;case
1:var
u=b[1];if(0===u)var
aL=M?M[1][2][1]:d[2],ab=[0,[1,[0,aL,n[2],n[3]]]];else
var
ab=[0,[1,[0,d[1],n[2],n[3]]]];var
aM=b[2];kj(0);var
aD=0,aE=[0,function(a){return[16,a]}],Q=Hv([0,function(a){return[16,a]}],aE,a,u,aM,ab,aD),R=Q[2],S=Q[1],aB=Ut(S),aC=g(function(a){return a[1]},aB),c=[0,[1,u,S],g(function(a){return[0,a,wB([0,a],R)]},aC),R];break;case
2:var
ac=XR(a,d,b[1]),v=ac[1],c=[0,[2,v],[0,[0,v[1],v[4]],0],ac[2]];break;case
3:var
x=b[1],ad=HN(x);m(function(a){return hr(bj$,o,a[1])},x);var
ae=XN(a,ad,x),y=ae[1],aN=ae[2];if(f)var
aH=f[1],af=G(function(d,b){var
c=b[1];return eV(1,c,V$(a,[1,aH,c[2],dt],b[4]),d)},a,y);else
var
af=aN;var
aO=0,c=[0,[3,y],HM(ad,function(b,a){return[1,a[1],a[4],b]},y,aO),af];break;case
4:var
ag=XP(1,a,d,b[1]),ah=ag[1],aP=ag[2],aQ=0,aR=ah[4],c=[0,[4,ah],Yb(function(b,a){return[2,a[1],a[3],b]},aR,aQ),aP];break;case
5:var
ai=XQ(a,b[1]),z=ai[1],c=[0,[5,z],[0,[2,z[1],z[3],2],0],ai[2]];break;case
6:var
p=b[1],A=p[4],B=p[3],i=p[1];hr(bka,t,i);var
aS=p[2],aT=i[1],aU=f?[0,[1,f[1],aT,dt]]:0,C=lN(bkb,1,r,aU,a,aS),aV=[0,Yl(f,i[1],C[3],a),B,A],aj=wI(0,i[1],aV,a),ak=aj[1],c=[0,[6,[0,ak,i,C,B,A]],[0,[3,ak,[0,C[3],B,A],0],0],aj[2]];break;case
7:var
aW=b[1],D=g(function(b){var
c=b[2][1];if(4===c[0])return[0,b[1],c[2],c[1],b[3],b[4]];throw[0,cv,b[2][2],a,3]},aW);m(function(a){return hr(bkc,t,a[1])},D);var
al=Yi(d,a,g(function(a){return[0,a[1],a[2],a[4],a[5]]},D)),am=al[2],an=al[1],E=aG(function(c,a){var
b=c[1],d=lN(0,1,r,[0,[0,b]],am,a[3]),e=Yl(f,b[2],d[3],am);return[0,b,a[1],c[3],d,e,a[4],a[5]]},an,D),ao=G(function(b,a){return lA(0,a[1],[0,a[3][2],a[4],a[5]],b)},a,an),W=function(d,a,c,b){var
e=iF(a,[0,c]);return kb(d,et(a,b),e)},X=1,q=w(E),e=ao,l=bf;for(;;){if(0<q){var
Y=g(function(a){var
b=a[1],c=a[5];return[0,b,eS(b),c]},E),aJ=G(function(e,f){return function(b,a){var
c=a[3],d=f?c:W(b,e,a[1],c);return iJ(bj6,a[2],d,b)}}(l,X),e,Y),X=0,q=q-1|0,e=aJ,l=G(function(b,a){return iE(a[1],[0,a[2]],b)},bf,Y);continue}var
Z=g(function(a){var
c=a[4],b=a[3],d=a[1],f=et(l,b[2]),g=W(e,l,d,a[5]);try{var
h=pl(e,g,f)}catch(a){a=j(a);if(a[1]===cj)throw[0,cv,c[2],e,[1,a[2]]];throw a}return[0,d,a[2],[0,[4,c,b[2],[0,b],h],c[2],b[2],e,0],a[6],a[7]]},E),aX=0,c=[0,[7,Z],lM(function(b,a){return[3,a[1],[0,a[3][3],a[4],a[5]],b]},Z,aX),ao];break}break;case
8:var
F=Yh(_,a,d,b[1]),c=[0,[8,F[2]],[0,F[3],0],F[1]];break;case
9:var
ap=HJ([0,aK],a,b[1]),c=[0,[9,ap[3]],0,ap[2]];break;case
10:var
aq=b[1];m(function(a){return hr(bkd,o,a[3])},aq);var
V=HG(1,X5,biH,a,aq),ar=V[1],aY=V[2],aZ=0,a0=fE(lM(function(b,a){return[0,[5,a[1],a[3],b],[0,[6,a[4],a[5],b],[0,[1,a[6],a[7],b],[0,[1,a[8],a[9],b],0]]]]},ar,aZ)),c=[0,[10,g(function(a){var
b=0===a[3][4]?0:1;return[0,a[12],a[11],b]},ar)],a0,aY];break;case
11:var
as=b[1];m(function(a){return hr(bke,o,a[3])},as);var
at=HH(a,as),au=at[1],a1=at[2],a2=0,a3=fE(lM(function(b,a){return[0,[6,a[1],a[3],b],[0,[1,a[4],a[5],b],[0,[1,a[6],a[7],b],0]]]},au,a2)),c=[0,[11,g(function(a){return[0,a[1],a[2],a[8]]},au)],a3,a1];break;case
12:var
H=b[1],av=H[1],I=lN(0,1,r,0,a,av),aw=mZ(bf,X_(a,av[2],I[3])),ax=I[1];if(0===ax[0]){var
J=ax[1];if(FH(J,a))var
P=0;else{FG(oO(J));var
K=[0,0],k=g(function(a){switch(a[0]){case
0:var
d=a[2][2];if(typeof
d==="number")if(0===d)var
b=0,c=0;else
var
c=1;else
var
c=1;if(c)var
b=1;break;case
3:var
e=a[2],f=a[1],g=K[1];K[1]++;return[3,f,[0,[3,[1,J,f[2],g]],e[2],e[3]],a[3]];case
2:case
5:var
b=0;break;default:var
b=1}return b?a:(K[1]++,a)},aw),P=1}}else
var
P=0;if(!P)var
k=aw;m(function(a){return Ye(o,t,_,d,a)},k);var
a4=r7(k,a),c=[0,[12,[0,I,k,H[2],H[3]]],k,a4];break;case
13:var
ay=b[1];sV([0,ay,0]);var
c=[0,[13,ay],0,a];break;default:throw[0,pB,fX(b[1])]}var
aA=[0,c[1],N[2],a];wL([0,[1,aA],a6]);var
O=az(c[3],M),a7=O[3],a8=s(c[2],O[2]);return[0,[0,aA,O[1]],a8,a7]}return[0,0,0,a]}var
k=r$(0);sT(0);var
a=az(i,h),c=a[3],d=a[2],e=[0,a[1],d,c];sU(0);wL([0,[0,e],k]);return[0,e,d,c]}var
bkf=0,bkg=0,bkh=1,bki=0;function
HS(a,b){return lN(bki,bkh,bkg,bkf,a,b)}var
bkj=0,bkk=0,bkl=0;function
bkm(a,b,c){return Yn(bkl,bkk,bkj,a,b,c)}function
Yo(c){function
a(b){switch(b[0]){case
0:return Vo(c,b[2][1]);case
3:var
a=b[2][1];for(;;)switch(a[0]){case
1:var
e=a[1];return d(Yo(c),e);case
2:var
a=a[3];continue;default:return 0}default:return 0}}return function(b){return m(a,b)}}function
bkn(b,a){var
e=a[1];if(0===e[0])var
f=e[1],g=xE(b,a[2],f[1]),c=[0,[0,g[1],f],a[2],g[2][1],b,a[3]];else
var
c=HS(b,a);var
d=Wi(b,c[3]);if(1-HQ(d))throw[0,cv,a[2],b,[9,d]];return[0,c,d]}function
bko(d,k,i,c,s){var
o=o2(0);a5(0);rB(o);var
p=pr(0),a=HS(d,k);j4(jW(0));ps(p);var
l=a[1];if(0===l[0])var
e=[0,l[1],d];else
var
n=r6(bkr,bkq,a[3],d),e=[0,[0,n[1]],n[2]];var
b=e[2],q=e[1];function
m(b,a){switch(a[0]){case
0:return[1,b,a[1],dt];case
1:var
c=a[2];return[1,m(b,a[1]),c,dt];default:throw[0,h,bkp]}}var
f=g(function(a){return ak([3,m(q,a),0,[0,0]])},c);aI(0);if(0===c)return[0,xY(b,a,[0,i],0),0];var
r=HR(b,a[2],i,c,f);aC(function(d,c){try{var
a=aq(b,c,U(0,0));return a}catch(a){a=j(a);if(a[1]===x)throw[0,cv,k[2],b,[14,d,c]];throw a}},c,f);return[0,xY(b,a,r,0),f]}Xb[1]=HS;W7[1]=Yg;W8[1]=iW;var
bks=0;Xc[1]=function(a,b,c,d){return HI(bks,a,b,c,d)};Xd[1]=bko;HK[1]=bkn;c8(function(a){if(a[1]===cv){var
c=a[4],f=a[3],g=function(c,a){return j_(f,function(z){if(typeof
a==="number")switch(a){case
0:return e(c,bkz);case
1:return d(e(c,bkB),bkA);case
2:return e(c,bkC);case
3:return e(c,bkD);default:return e(c,bkE)}else
switch(a[0]){case
0:var
f=a[1];return b(e(c,bkF),pj,f);case
1:var
g=a[1];return b(e(c,bkG),GY,g);case
2:var
h=a[1];return b(e(c,bkH),pj,h);case
3:var
i=a[1];return b(e(c,bkI),pj,i);case
4:var
j=a[1];return b(e(c,bkJ),bb,j);case
5:var
k=a[2],l=a[1];return L(e(c,bkK),bb,l,GY,k);case
6:var
m=a[2],n=a[1];return b(e(c,bkL),n,m);case
7:var
o=a[1];return b(e(c,bkM),GF,o);case
8:var
p=a[2],q=a[1],r=function(a,b){return ph(q,a,b)};return b(e(c,bkN),r,p);case
9:var
s=a[1];return b(e(c,bkO),pj,s);case
10:var
t=a[1];return b(e(c,bkP),jP,t);case
11:var
u=a[1];return b(e(c,bkQ),jP,u);case
12:var
v=a[1];return b(e(c,bkR),aT,v);case
13:var
w=a[1];return b(e(c,bkS),aT,w);default:var
x=a[1];b(e(c,bkT),bb,x);var
y=a[2];return b(e(c,bkU),aT,y)}})};return[0,fa(a[2],g,c)]}return a[1]===pB?[0,a[2]]:0});function
Yp(c,b){var
a=[0,[0,c],le(bkV)];return HI(0,0,b,a[2],a)[2]}function
bkW(d){if(0<=E_[1])he[1]=E_[1];else
E_[1]=he[1];var
a=Rr[1]?a0y:o1,c=Yp(bkX,a),b=s(aVO,v(aAp));return G(function(b,a){return Yp(a,b)},c,b)}function
bkY(a,c,b){try{var
e=d(b,a)}catch(b){b=j(b);d(c,a);throw b}d(c,a);return e}function
bkZ(a){var
c=O([I,bk0,0]);function
b(e,d){var
b=e,a=d;for(;;){if(ms(a,0))return-2;if(E(a,1))return b;if(E(a&1,0)){var
b=b+1|0;a>>=1;continue}throw c}}try{var
d=b(0,a);return d}catch(a){a=j(a);if(a===c)return-1;throw a}}function
xZ(b,a){return vy(function(a){return dq(o(b,a))},a)}function
pE(c){var
e=r(c)-1|0,d=0,i=0;if(e<0)var
f=d;else{var
a=i,g=d;for(;;){var
h=(ue*g|0)+u(c,a)|0,j=a+1|0;if(e!==a){var
a=j,g=h;continue}var
f=h;break}}var
b=f&jc;return kS<b?b-qr|0:b}function
bk2(a){var
b=0,c=0;function
d(a){return 0}function
e(b){return as(a,b)}return[0,function(b){return an(a,b)},e,d,c,b]}function
q(a,b){d(a[1],b);a[5]=0;return 0}function
a9(a){var
c=1-a[5];if(c){d(a[2],10);var
e=a[4]-1|0,g=0;if(!(e<0)){var
b=g;for(;;){d(a[1],Yq);var
h=b+1|0;if(e!==b){var
b=h;continue}break}}a[5]=1;var
f=0}else
var
f=c;return f}function
km(a){d(a[2],10);var
c=a[4]-1|0,e=0;if(!(c<0)){var
b=e;for(;;){d(a[1],Yq);var
f=b+1|0;if(c!==b){var
b=f;continue}break}}return 0}function
M(a){return q(a,bk1)}function
x0(b,a){return q(b,c6(a,32))}function
a0(a,c,b){if(0===c)return d(b,0);var
e=a[4];a[4]=a[4]+c|0;return bkY(0,function(b){a[4]=e;return 0},b)}function
Yr(a,b){q(a,bk3);var
c=d(b,0);q(a,bk4);return c}function
iX(a,c,b){q(a,bk7);var
e=a0(a,c,function(c){a9(a);return d(b,0)});km(a);q(a,bk8);return e}function
HT(a,b,c){return a0(a,b,function(e){q(a,bk5);var
b=d(c,0);q(a,bk6);return b})}function
aU(a,c,b){return a0(a,c,function(c){return Yr(a,b)})}function
Ys(b,a){return g3(10,b6,0,[0,b,a])}function
Yt(b,a){return g3(10,b6,0,[0,b,a])}function
pF(b,a){var
c=r(b),d=r(a);return c===d?Q(b,a):gg(c,d)}function
Yu(f,j,c){var
g=f?f[1]:0,h=r(c),e=0,b=h,a=h-1|0;for(;;){if(-1===a){if(0===b)if(!g)return e;return[0,al(c,0,b),e]}if(d(j,u(c,a))){var
i=(b-a|0)-1|0;if(0===i)if(!g){var
b=a,a=a-1|0;continue}var
e=[0,al(c,a+1|0,i),e],b=a,a=a-1|0;continue}var
a=a-1|0;continue}}function
x1(d,c){var
b=r(c),e=b<=r(d)?1:0;if(e){var
a=0;for(;;){if(a<b)if($(d,a)===$(c,a)){var
a=a+1|0;continue}var
f=a===b?1:0;break}}else
var
f=e;return f}function
Yv(g,f){var
d=r(g)-1|0,e=r(f)-1|0;if(d<e)var
c=-1;else{var
b=d,a=e;for(;;){if(0<=a){if($(g,b)===$(f,a)){var
b=b-1|0,a=a-1|0;continue}var
c=-1}else
var
c=b+1|0;break}}return 0<=c?1:0}function
Yw(h,g,f,i){var
j=r(h);if(0<=g)if(!(j<=f)){var
a=g;for(;;){var
b=f<a?1:0;if(b)var
c=b;else{var
e=d(i,$(h,a));if(e){var
a=a+1|0;continue}var
c=e}return c}}return S(blc)}function
bld(h,g,d,c,b){var
f=(c+b|0)<=r(d)?1:0;if(f){var
a=0;for(;;){if(a===b)return 1;var
e=$(h,g+a|0)===$(d,c+a|0)?1:0;if(e){var
a=a+1|0;continue}return e}}return f}var
Yx=O([I,ble,0]),HU=A;function
blf(c,b){var
d=r(c),e=r(b)-d|0;O([I,blg,0]);try{var
f=e,a=e;for(;;){if(0<=a){if(bld(c,0,b,a,d))throw Yx;var
a=a-1|0,f=a;continue}var
g=-1;return g}}catch(a){a=j(a);if(a===Yx)return f;throw a}}function
x4(c,b){var
a=c;for(;;){if(b<=a)return a;if(hV<(a*2|0))return a;var
a=a*2|0;continue}}function
pG(b){var
a=x4(16,b);return[0,0,X(a,0),a]}function
blD(b){b[1]=0;var
c=b[2].length-1-1|0,d=0;if(!(c<0)){var
a=d;for(;;){b[2][a+1]=0;var
e=a+1|0;if(c!==a){var
a=e;continue}break}}return 0}function
blE(a){a[1]=0;a[2]=X(a[3],0);return 0}function
blF(a){var
b=a[3],c=k3(a[2]);return[0,a[1],c,b]}function
blG(a){return a[1]}function
blH(g,f){var
c=f[2],e=c.length-1-1|0,h=0;if(!(e<0)){var
b=h;a:for(;;){var
a=c[b+1];for(;;){if(a){d(g,a[1]);var
a=a[2];continue}var
i=b+1|0;if(e!==b){var
b=i;continue a}break}break}}return 0}function
YA(k,j,e){var
f=j[2],g=f.length-1-1|0,m=0;if(g<0)var
h=e;else{var
d=m,i=e;a:for(;;){var
c=f[d+1],a=i;for(;;){if(c){var
l=b(k,c[1],a),c=c[2],a=l;continue}var
n=d+1|0;if(g!==d){var
d=n,i=a;continue a}var
h=a;break}break}}return h}function
tb(o,d){var
g=d[2],h=g.length-1,i=h*2|0,j=i<hV?1:0;if(j){var
e=X(i,0);d[2]=e;var
l=h-1|0,p=0;if(!(l<0)){var
c=p;a:for(;;){var
a=g[c+1];for(;;){if(a){var
k=a[1],f=b(o,d,k);e[f+1]=[0,k,n(e,f)[f+1]];var
a=a[2];continue}var
q=c+1|0;if(l!==c){var
c=q;continue a}break}break}}var
m=0}else
var
m=j;return m}function
blI(a){var
b=0;return YA(function(b,a){return[0,b,a]},a,b)}function
blJ(a){var
d=a[2],e=0,c=qV(function(b,a){return cz(b,w(a))},e,d),b=X(c+1|0,0),f=a[2];k4(function(c){var
a=w(c);return b[a+1]=n(b,a)[a+1]+1|0},f);return[0,a[1],a[2].length-1,c,b]}function
lO(d,c,l){var
a=l;for(;;){if(a){var
e=a[2],g=b(d,c,a[1]);if(g)var
h=g;else{if(e){var
f=e[2],i=b(d,c,e[1]);if(i)var
j=i;else{if(f){var
k=b(d,c,f[1]);if(k)return k;var
a=f[2];continue}var
j=0}return j}var
h=0}return h}return 0}}function
YB(e,d,c,a){if(a){var
f=a[2],g=a[1];return b(e,g,d)?(c[1]=c[1]-1|0,f):[0,g,YB(e,d,c,f)]}return 0}function
tc(b,a){return g3(10,b6,0,a)&(b[2].length-1-1|0)}function
YC(a,b){var
d=tc(a,b),c=a[2],e=c[d+1],f=1-lO(HU,b,e);if(f){c[d+1]=[0,b,e];a[1]=a[1]+1|0;var
g=c.length-1<<1<a[1]?1:0;if(g)return tb(tc,a);var
h=g}else
var
h=f;return h}function
blK(b){var
c=b.length-1,d=pG(c),e=c-1|0,f=0;if(!(e<0)){var
a=f;for(;;){YC(d,b[a+1]);var
g=a+1|0;if(e!==a){var
a=g;continue}break}}return d}function
YD(b,a){var
c=tc(b,a);return lO(HU,a,b[2][c+1])}function
dd(b){var
a=x4(16,b);return[0,0,X(a,0),0,a]}function
pH(b){b[1]=0;var
c=b[2].length-1-1|0,d=0;if(!(c<0)){var
a=d;for(;;){n(b[2],a)[a+1]=0;var
e=a+1|0;if(c!==a){var
a=e;continue}break}}return 0}function
blL(a){a[1]=0;a[2]=X(a[4],0);return 0}function
blM(a){var
b=a[4],c=a[3],d=k3(a[2]);return[0,a[1],d,c,b]}function
blN(a){return a[1]}function
nm(l,c){var
e=c[2],f=e.length-1,g=f*2|0,h=g<hV?1:0;if(h){var
d=X(g,0);c[2]=d;var
i=function(a){if(a){var
f=a[1];i(a[3]);var
e=b(l,c,f),g=n(d,e)[e+1];return d[e+1]=[0,f,a[2],g]}return 0},j=f-1|0,m=0;if(!(j<0)){var
a=m;for(;;){i(e[a+1]);var
o=a+1|0;if(j!==a){var
a=o;continue}break}}var
k=0}else
var
k=h;return k}function
HV(g,f){var
d=f[2],e=d.length-1-1|0,h=0;if(!(e<0)){var
c=h;a:for(;;){var
a=d[c+1];for(;;){if(a){b(g,a[1],a[2]);var
a=a[3];continue}var
i=c+1|0;if(e!==c){var
c=i;continue a}break}break}}return 0}function
HW(j,i,d){var
e=i[2],f=e.length-1-1|0,l=0;if(f<0)var
g=d;else{var
b=l,h=d;a:for(;;){var
a=n(e,b)[b+1],c=h;for(;;){if(a){var
k=p(j,a[1],a[2],c),a=a[3],c=k;continue}var
m=b+1|0;if(f!==b){var
b=m,h=c;continue a}var
g=c;break}break}}return g}function
YE(d,c){var
b=d,a=c;for(;;){if(a){var
b=b+1|0,a=a[3];continue}return b}}function
blO(a){var
d=a[2],e=0,c=qV(function(b,a){return cz(b,YE(0,a))},e,d),b=X(c+1|0,0),f=a[2];k4(function(c){var
a=YE(0,c);return b[a+1]=n(b,a)[a+1]+1|0},f);return[0,a[1],a[2].length-1,c,b]}function
HX(f,e,g){var
a=g;for(;;){if(a){var
c=a[3];if(b(f,e,a[1]))return[0,a[2]];if(c){var
d=c[3];if(b(f,e,c[1]))return[0,c[2]];if(d){if(b(f,e,d[1]))return[0,d[2]];var
a=d[3];continue}return 0}return 0}return 0}}function
HY(g,f,e,h){var
a=h;for(;;){if(a){var
c=a[3];if(b(g,f,a[1]))return a[2];if(c){var
d=c[3];if(b(g,f,c[1]))return c[2];if(d){if(b(g,f,d[1]))return d[2];var
a=d[3];continue}return e}return e}return e}}var
blP=8;function
x5(a){return 0!==(a[3]&8)?1:0}function
YF(a){a[3]=a[3]|32;return 0}function
lP(a){return[0,0,a,blP]}function
kn(a,c){var
b=a?a[1]:blo;return H(b)}dd(31);var
YG=blQ.slice(),YH=pG(mm),YI=YG.length-1-1|0,blR=0;if(!(YI<0)){var
t0=blR;for(;;){YC(YH,n(YG,t0)[t0+1]);var
b8C=t0+1|0;if(YI!==t0){var
t0=b8C;continue}break}}var
YJ=O([I,blS,0]);function
blT(g){var
h=r(g);try{var
B=h-1|0,H=0;if(!(B<0)){var
i=H;for(;;){var
k=$(g,i);if(65<=k)var
s=k+qE|0,C=5<s>>>0?32<=s?0:1:4===s?1:0;else
var
C=48<=k?58<=k?0:1:36===k?1:0;if(!C)throw[0,YJ,i];var
I=i+1|0;if(B!==i){var
i=I;continue}break}}return g}catch(i){i=j(i);if(i[1]===YJ){var
l=i[2];if(0===l){var
c=cH(h),v=h-1|0,D=0;if(!(v<0)){var
m=D;for(;;){var
w=$(g,m),n=w+adu|0;if(89<n>>>0){var
x=n+qE|0;if(2<x>>>0)var
d=1;else{switch(x){case
0:an(c,blV);var
t=1;break;case
1:var
d=1,t=0;break;default:an(c,blW);var
t=1}if(t)var
d=0}}else{if(64<=n)var
f=1;else
switch(n){case
0:an(c,blX);var
d=0,f=0;break;case
2:an(c,blY);var
d=0,f=0;break;case
4:an(c,blZ);var
d=0,f=0;break;case
6:an(c,bl0);var
d=0,f=0;break;case
9:an(c,bl1);var
d=0,f=0;break;case
10:an(c,bl2);var
d=0,f=0;break;case
12:an(c,bl3);var
d=0,f=0;break;case
13:an(c,bl4);var
d=0,f=0;break;case
14:an(c,bl5);var
d=0,f=0;break;case
27:an(c,bl6);var
d=0,f=0;break;case
28:an(c,bl7);var
d=0,f=0;break;case
29:an(c,bl8);var
d=0,f=0;break;case
31:an(c,bl9);var
d=0,f=0;break;case
61:an(c,bl_);var
d=0,f=0;break;case
1:case
5:case
7:case
8:case
11:case
25:case
26:case
30:case
58:case
59:case
60:case
63:var
d=1,f=0;break;default:var
f=1}if(f){as(c,w);var
d=2}}switch(d){case
0:break;case
1:an(c,blU);break}var
E=m+1|0;if(v!==m){var
m=E;continue}break}}return cA(c)}var
a=cH(h),y=h-1|0;if(!(y<l)){var
p=l;for(;;){var
z=$(g,p),q=z+adu|0;if(89<q>>>0){var
A=q+qE|0;if(2<A>>>0)var
b=1;else{switch(A){case
0:an(a,bma);var
u=1;break;case
1:var
b=1,u=0;break;default:an(a,bmb);var
u=1}if(u)var
b=0}}else{if(64<=q)var
e=1;else
switch(q){case
0:an(a,bmc);var
b=0,e=0;break;case
2:an(a,bmd);var
b=0,e=0;break;case
3:an(a,bme);var
b=0,e=0;break;case
4:an(a,bmf);var
b=0,e=0;break;case
6:an(a,bmg);var
b=0,e=0;break;case
9:an(a,bmh);var
b=0,e=0;break;case
10:an(a,bmi);var
b=0,e=0;break;case
12:an(a,bmj);var
b=0,e=0;break;case
13:an(a,bmk);var
b=0,e=0;break;case
14:an(a,bml);var
b=0,e=0;break;case
27:an(a,bmm);var
b=0,e=0;break;case
28:an(a,bmn);var
b=0,e=0;break;case
29:an(a,bmo);var
b=0,e=0;break;case
31:an(a,bmp);var
b=0,e=0;break;case
61:an(a,bmq);var
b=0,e=0;break;case
1:case
5:case
7:case
8:case
11:case
25:case
26:case
30:case
58:case
59:case
60:case
63:var
b=1,e=0;break;default:var
e=1}if(e){as(a,z);var
b=2}}switch(b){case
0:break;case
1:an(a,bl$);break}var
G=p+1|0;if(y!==p){var
p=G;continue}break}}var
F=cA(a);return o(al(g,0,l),F)}throw i}}function
pI(a){return YD(YH,a)?o(bmr,a):blT(a)}var
bmu=lP(bmt),bmw=lP(bmv);function
pJ(b,a){var
c=b[1]-a[1]|0;return 0===c?pF(b[2],a[2]):c}function
cW(b,a){if(0===b[1]){var
c=0===a[1]?1:0,d=c?A(b[2],a[2]):c;return d}return b[1]===a[1]?1:0}function
x6(a){return a?a[4]:0}function
YK(c){var
a=c;for(;;){if(a){var
b=a[1];if(b){var
a=b;continue}return a[2]}throw l}}var
bV=0;function
x7(a){return a?0:1}function
YL(d,c){var
b=d,a=c;for(;;){if(a){var
e=a[1],f=YL(b,a[3]),b=[0,a[2],f],a=e;continue}return b}}function
YM(a){return YL(0,a)}function
YN(b,c){var
a=c;for(;;){if(a){YN(b,a[1]);d(b,a[2]);var
a=a[3];continue}return 0}}function
x8(d,f,e){var
a=f,c=e;for(;;){if(a){var
g=x8(d,a[1],c),h=b(d,a[2],g),a=a[3],c=h;continue}return c}}O([I,bmx,0]);O([I,bmy,0]);function
gB(b,e,a){var
c=b?b[4]:0,d=a?a[4]:0,f=d<=c?c+1|0:d+1|0;return[0,b,e,a,f]}function
iY(b,e,a){var
f=b?b[4]:0,g=a?a[4]:0;if((g+2|0)<f){if(b){var
c=b[3],k=b[2],i=b[1],m=x6(c);if(m<=x6(i))return gB(i,k,gB(c,e,a));if(c){var
n=gB(c[3],e,a),o=c[2];return gB(gB(i,k,c[1]),o,n)}throw[0,h,bmz]}throw[0,h,bmA]}if((f+2|0)<g){if(a){var
j=a[3],l=a[2],d=a[1],p=x6(d);if(p<=x6(j))return gB(gB(b,e,d),l,j);if(d){var
q=gB(d[3],l,j),r=d[2];return gB(gB(b,e,d[1]),r,q)}throw[0,h,bmB]}throw[0,h,bmC]}var
s=g<=f?f+1|0:g+1|0;return[0,b,e,a,s]}function
HZ(a){if(a){var
b=a[1];if(b){var
c=a[3],d=a[2];return iY(HZ(b),d,c)}return a[3]}return S(bmD)}function
ht(a){return[0,0,a,0,1]}function
YO(b,a){if(a){var
c=a[3],d=a[2];return iY(YO(b,a[1]),d,c)}return ht(b)}function
YP(b,a){if(a){var
c=YP(b,a[3]);return iY(a[1],a[2],c)}return ht(b)}function
ko(b,c,a){if(b){if(a){var
d=a[4],e=b[4];if((d+2|0)<e){var
f=ko(b[3],c,a);return iY(b[1],b[2],f)}if((e+2|0)<d){var
g=a[3],h=a[2];return iY(ko(b,c,a[1]),h,g)}return gB(b,c,a)}return YP(c,b)}return YO(c,a)}function
YQ(b,a){if(b){if(a){var
c=HZ(a);return ko(b,YK(a),c)}return b}return a}function
td(b,a){var
c=gg(b[1],a[1]);if(0===c){var
d=Q(b[2],a[2]);return 0===d?gg(b[3],a[3]):d}return c}function
pK(b,a){if(a){var
c=a[3],d=a[2],e=a[1],h=td(b,d);if(0===h)return[0,e,1,c];if(0<=h){var
f=pK(b,c),i=f[3],j=f[2];return[0,ko(e,d,f[1]),j,i]}var
g=pK(b,e),k=ko(g[3],d,c);return[0,g[1],g[2],k]}return bmF}function
bl(b,a){if(a){var
d=a[3],c=a[2],e=a[1],f=td(b,c);return 0===f?a:0<=f?iY(e,c,bl(b,d)):iY(bl(b,e),c,d)}return[0,0,b,0,1]}function
fl(b,a){if(b){if(a){var
e=a[4],c=a[2],f=b[4],d=b[2];if(e<=f){if(1===e)return bl(c,b);var
g=pK(d,a),i=fl(b[3],g[3]);return ko(fl(b[1],g[1]),d,i)}if(1===f)return bl(d,a);var
h=pK(c,b),j=fl(h[3],a[3]);return ko(fl(h[1],a[1]),c,j)}return b}return a}function
pL(a,c){if(a){if(c){var
d=a[3],e=a[2],f=a[1],b=pK(e,c),g=b[1];if(0===b[2]){var
h=pL(d,b[3]);return YQ(pL(f,g),h)}var
i=pL(d,b[3]);return ko(pL(f,g),e,i)}return 0}return 0}function
lQ(a,c){if(a){if(c){var
d=a[3],e=a[2],f=a[1],b=pK(e,c),g=b[1];if(0===b[2]){var
h=lQ(d,b[3]);return ko(lQ(f,g),e,h)}var
i=lQ(d,b[3]);return YQ(lQ(f,g),i)}return a}return 0}function
dv(e,d){var
a=d;for(;;){if(a){var
b=td(e,a[2]),c=0===b?1:0;if(c)return c;var
f=0<=b?a[3]:a[1],a=f;continue}return 0}}function
iZ(d,c){if(c){var
a=c[3],e=c[2],b=c[1],f=td(d,e);if(0===f){if(b){if(a){var
g=HZ(a);return iY(b,YK(a),g)}return b}return a}return 0<=f?iY(b,e,iZ(d,a)):iY(iZ(d,b),e,a)}return 0}function
x9(b){if(b){var
e=b[2],a=b[1];if(e){var
f=e[2],c=e[1];if(f){var
g=f[2],i=f[1];if(g){var
j=g[2],k=g[1];if(j){if(j[2]){var
l=u7(td,b),d=function(b,a){if(!(3<b>>>0))switch(b){case
0:return[0,0,a];case
1:if(a)return[0,[0,0,a[1],0,1],a[2]];break;case
2:if(a){var
e=a[2];if(e)return[0,[0,[0,0,a[1],0,1],e[1],0,2],e[2]]}break;default:if(a){var
f=a[2];if(f){var
g=f[2];if(g)return[0,[0,[0,0,a[1],0,1],f[1],[0,0,g[1],0,1],2],g[2]]}}}var
i=b/2|0,j=d(i,a),c=j[2];if(c){var
k=d((b-i|0)-1|0,c[2]),l=k[2];return[0,gB(j[1],c[1],k[1]),l]}throw[0,h,bmE]};return d(w(l),l)[1]}var
m=bl(k,bl(i,bl(c,ht(a))));return bl(j[1],m)}return bl(k,bl(i,bl(c,ht(a))))}return bl(i,bl(c,ht(a)))}return bl(c,ht(a))}return ht(a)}return bV}function
YR(b,a){return b===a?1:0}function
YS(d,c){var
b=d,a=c;for(;;){if(a){var
e=a[1],b=YS(b+1|0,a[4]),a=e;continue}return b}}function
YT(a){return YS(0,a)}function
nn(a){return a?a[5]:0}function
hu(b,f,e,a){var
c=nn(b),d=nn(a),g=d<=c?c+1|0:d+1|0;return[0,b,f,e,a,g]}function
YU(b,a){return[0,0,b,a,0,1]}function
gC(b,f,e,a){var
g=b?b[5]:0,h=a?a[5]:0;if((h+2|0)<g){if(b){var
c=b[4],k=b[3],l=b[2],i=b[1],o=nn(c);if(o<=nn(i))return hu(i,l,k,hu(c,f,e,a));if(c){var
p=hu(c[4],f,e,a),q=c[3],r=c[2];return hu(hu(i,l,k,c[1]),r,q,p)}return S(bmG)}return S(bmH)}if((g+2|0)<h){if(a){var
j=a[4],m=a[3],n=a[2],d=a[1],s=nn(d);if(s<=nn(j))return hu(hu(b,f,e,d),n,m,j);if(d){var
t=hu(d[4],n,m,j),u=d[3],v=d[2];return hu(hu(b,f,e,d[1]),v,u,t)}return S(bmI)}return S(bmJ)}var
w=h<=g?g+1|0:h+1|0;return[0,b,f,e,a,w]}var
cE=0;function
YV(c,e,d){var
a=e,b=d;for(;;){if(a){var
f=YV(c,a[1],b),g=p(c,a[2],a[3],f),a=a[4],b=g;continue}return b}}function
YW(c,g){var
a=g;for(;;){if(a){var
d=b(c,a[2],a[3]);if(d){var
e=YW(c,a[1]);if(e){var
a=a[4];continue}var
f=e}else
var
f=d;return f}return 1}}function
YX(c,b,a){if(a){var
d=a[4],e=a[3],f=a[2];return gC(YX(c,b,a[1]),f,e,d)}return YU(c,b)}function
YY(c,b,a){if(a){var
d=YY(c,b,a[4]);return gC(a[1],a[2],a[3],d)}return YU(c,b)}function
pM(b,d,c,a){if(b){if(a){var
e=a[5],f=b[5];if((e+2|0)<f){var
g=pM(b[4],d,c,a);return gC(b[1],b[2],b[3],g)}if((f+2|0)<e){var
h=a[4],i=a[3],j=a[2];return gC(pM(b,d,c,a[1]),j,i,h)}return hu(b,d,c,a)}return YY(d,c,b)}return YX(d,c,a)}O([I,bmK,0]);function
x_(b,c,a){if(a){var
d=a[4],g=a[3],e=a[2],f=a[1],h=gg(b,e);return 0===h?[0,f,b,c,d,a[5]]:0<=h?gC(f,e,g,x_(b,c,d)):gC(x_(b,c,f),e,g,d)}return[0,0,b,c,0,1]}O([I,bmL,0]);function
i0(b,c,a){if(a){var
d=a[4],g=a[3],e=a[2],f=a[1],h=pF(b,e);return 0===h?[0,f,b,c,d,a[5]]:0<=h?gC(f,e,g,i0(b,c,d)):gC(i0(b,c,f),e,g,d)}return[0,0,b,c,0,1]}function
H0(d,c){var
a=c;for(;;){if(a){var
b=pF(d,a[2]);if(0===b)return a[3];var
e=0<=b?a[4]:a[1],a=e;continue}throw l}}function
H1(d,c){var
a=c;for(;;){if(a){var
b=pF(d,a[2]);if(0===b)return[0,a[3]];var
e=0<=b?a[4]:a[1],a=e;continue}return 0}}function
bmM(e,d){var
a=d;for(;;){if(a){var
b=pF(e,a[2]),c=0===b?1:0;if(c)return c;var
f=0<=b?a[4]:a[1],a=f;continue}return 0}}function
H2(a){return G(function(b,a){return i0(a[1],a[2],b)},cE,a)}function
YZ(d,c,b){var
h=H1(d,b);if(h){var
e=h[1],a=e;for(;;){if(a){var
g=gg(c,a[2]);if(0!==g){var
j=0<=g?a[4]:a[1],a=j;continue}var
f=[0,a[3]]}else
var
f=0;if(f)return[0,f[1],b];var
i=YT(e);return[0,i,i0(d,x_(c,i,e),b)]}}return[0,0,i0(d,x_(c,0,cE),b)]}function
te(d,a){if(x5(a))return[0,a[2],d];var
c=pI(a[2]),e=YZ(c,a[1],d),f=e[1],g=e[2],h=0===f?c:b(ag(bmN),c,f);return[0,h,g]}function
cb(d,c,b){var
a=te(d,b);q(c,a[1]);return a[2]}function
Y0(b,a){return x8(function(a,b){var
c=a[1];return YZ(pI(a[2]),c,b)[2]},b,a)}function
Y1(a){return[0,bV]}function
no(d,c){var
b=d,a=c;for(;;){if(b){if(a){var
b=b[2],a=a[2];continue}}else
if(!a)return 1;return 0}}function
Y2(f,e,c){var
a=e,b=c;for(;;){if(a){var
g=[0,d(f,a[1]),b],a=a[2],b=g;continue}return b}}function
np(f,e){var
b=0,a=e,g=0;for(;;){if(a){var
c=a[2],b=cG(d(f,a[1]),b),a=c;continue}return cG(b,g)}}function
x$(c,a){if(a){var
d=a[2],e=a[1];if(d){var
f=b(c,0,e);return[0,f,x$(c,d)]}return[0,b(c,1,e),0]}return 0}function
f1(b,a){return jA(qU(b,a))}function
ya(a,d){var
b=eH(d),c=b.length-1;if(c<a)return S(bmR);var
e=jA(ij(b,a,c-a|0));return[0,jA(ij(b,0,a)),e]}function
Y3(e){var
b=0,a=e;for(;;){if(a){var
c=a[2],d=a[1];if(c){var
b=[0,d,b],a=c;continue}return[0,d,v(b)]}return S(bmS)}}function
Y5(e,a,c){if(c){var
f=c[2],d=c[1];return b(e,a,cQ(d))?[0,[0,a,d],f]:[0,d,Y5(e,a,f)]}return[0,[0,a,0],0]}function
Y4(b,a){if(a){var
c=Y4(b,a[2]);return Y5(b,a[1],c)}return 0}function
Y6(e,c){var
a=c;for(;;){if(a){var
b=d(e,a[1]);if(b)return b;var
a=a[2];continue}return 0}}function
Y7(c,b,a){if(a){var
e=Y7(c,b,a[2]);return[0,d(b,a[1]),e]}return c}function
tf(b,a){return a?(tf(b,a[2]),d(b,a[1])):0}function
tg(g,f,e){var
c=f,a=e;for(;;){if(c){if(a){var
d=b(g,c[1],a[1]);if(d){var
c=c[2],a=a[2];continue}return d}}else
if(!a)return 1;return 0}}function
H3(g,f){var
c=0,b=0,a=f;for(;;){if(a){var
e=d(g,a[1]),c=[0,e[1],c],b=[0,e[2],b],a=a[2];continue}var
h=v(b);return[0,v(c),h]}}function
Y8(c){var
a=c;for(;;){if(a){var
b=a[2];if(b){var
a=b;continue}return a[1]}return S(bmW)}}function
th(b,e,d){var
a=d;for(;;){if(a){var
c=a[1];if(c[1]===e)return c[2];var
a=a[2];continue}if(b)return b[1];throw[0,h,bmY]}}function
bmZ(d,c){if(0<=c){var
a=d,b=c;for(;;){if(a){if(0===b)return[0,a[1]];var
a=a[2],b=b-1|0;continue}return 0}}return 0}function
H4(a,b){var
c=a?[0,a[1]]:0;return[0,bV,bV,X(b,0),c]}function
yb(b,a){return n(b[3],a)[a+1]}var
b5=[1,[1,0,1]],yc=O([I,bm0,0]),bN=4,H5=1;function
H6(a){var
h=[0,0],p=aV3(0);function
c(s,r){var
b=s,a=r;for(;;){h[1]++;if(32<h[1])throw yc;switch(a[0]){case
0:try{var
t=lr(a[1],b);return t}catch(b){b=j(b);if(b===l)return a;throw b}case
1:var
k=a[1];switch(k[0]){case
0:var
f=2===k[1][0]?1:0;break;case
3:var
f=1;break;default:var
f=0}if(f)throw yc;return a;case
2:var
u=e(b,a[2]);return[2,c(b,a[1]),u,y];case
4:var
m=a[1];if(1===m){var
v=c(b,a[3]),w=a[4],b=iA(a[2],v,b),a=w;continue}var
n=a[2],x=c(b,a[3]),o=d(p,n),z=a[4];return[4,m,o,x,c(iA(n,[0,o],b),z)];case
6:var
A=e(b,a[2]);return[6,a[1],A,y];case
7:var
B=q(b,a[2]);return[7,c(b,a[1]),B];case
8:var
C=i(b,a[3]),D=a[2],E=g(function(a){var
d=c(b,a[2]);return[0,a[1],d]},D);return[8,c(b,a[1]),E,C,y];case
9:var
F=e(b,a[2]);return[9,a[1],F];case
10:var
G=c(b,a[3]),H=a[2];return[10,c(b,a[1]),H,G];case
11:var
I=c(b,a[3]),J=a[2];return[11,c(b,a[1]),J,I];case
12:var
K=c(b,a[3]),L=c(b,a[2]);return[12,c(b,a[1]),L,K];case
13:var
M=c(b,a[2]);return[13,c(b,a[1]),M];case
16:var
N=c(b,a[2]);return[16,a[1],N];case
17:var
O=e(b,a[4]),P=c(b,a[3]),Q=c(b,a[2]);return[17,a[1],Q,P,O,y];case
19:var
R=c(b,a[2]);return[19,a[1],R];default:throw yc}}}function
e(b,a){return g(function(a){return c(b,a)},a)}function
q(b,a){var
d=i(b,a[5]),e=a[4],f=g(function(a){var
d=c(b,a[2]);return[0,a[1],d]},e),h=a[3],j=a[2],k=g(function(a){var
d=c(b,a[2]);return[0,a[1],d]},j);return[0,a[1],k,h,f,d]}function
i(b,a){return a?[0,c(b,a[1])]:0}try{var
b=[0,c(c_,a)];return b}catch(a){a=j(a);if(a===yc)return 0;throw a}}function
H7(e,a,b){if(0===a[0])return d(b,a[1]);var
c=H(bm1);return[4,e,c,a,d(b,c)]}function
Y9(b,a){return a?d(b,a[1]):0}var
aW=jF([0,cp]);function
Y_(k,a){var
e=[0,aW[1]];function
c(a){switch(a[0]){case
2:c(a[1]);m(c,a[2]);break;case
3:c(a[3]);break;case
4:c(a[3]);c(a[4]);break;case
5:c(a[2]);var
g=a[1];m(function(a){return c(a[2])},g);break;case
7:var
f=a[2];c(a[1]);var
h=f[2];m(function(a){return c(a[2])},h);var
i=f[4];m(function(a){return c(a[2])},i);Y9(c,f[5]);break;case
8:c(a[1]);var
j=a[2];m(function(a){return c(a[2])},j);Y9(c,a[3]);break;case
12:c(a[1]);c(a[2]);c(a[3]);break;case
15:c(a[2]);c(a[3]);c(a[5]);break;case
17:m(c,[0,a[2],[0,a[3],a[4]]]);break;case
18:c(a[1]);break;case
6:case
9:m(c,a[2]);break;case
10:case
11:c(a[1]);c(a[3]);break;case
13:case
14:c(a[1]);c(a[2]);break;case
16:case
19:c(a[2]);break}var
l=e[1],n=d(k,a);e[1]=R(aW[4],n,l);switch(a[0]){case
3:var
o=a[2];return m(function(a){e[1]=b(aW[6],a,e[1]);return 0},o);case
5:var
p=a[1];return m(function(a){e[1]=b(aW[6],a[1],e[1]);return 0},p);case
10:var
q=a[2][2];return m(function(a){e[1]=b(aW[6],a,e[1]);return 0},q);case
15:e[1]=b(aW[6],a[1],e[1]);return 0;case
16:e[1]=b(aW[4],a[1],e[1]);return 0;case
4:case
11:e[1]=b(aW[6],a[2],e[1]);return 0;default:return 0}}c(a);return e[1]}function
kp(a){return Y_(function(a){return 0===a[0]?[0,a[1],0]:0},a)}var
Y$=[0,0];function
hv(a){Y$[1]++;return Y$[1]}var
Za=[0,0];function
H8(c){var
a=c;for(;;){switch(a[0]){case
4:var
a=a[4];continue;case
12:var
b=a[3];if(9===b[0])if(0===b[1])if(!b[2])return 1;break;case
18:var
a=a[1];continue}return 0}}function
H9(b,a){switch(a[0]){case
4:var
d=H9(b,a[4]);return[4,a[1],a[2],a[3],d];case
12:var
c=a[3];if(9===c[0])if(0===c[1])if(!c[2])return[12,a[1],a[2],b];break;case
18:var
e=a[2];return[18,H9(b,a[1]),e]}return ad(bm2)}function
d7(a){switch(a[0]){case
0:var
b=a[1];return rC(b)?[6,[1,b],0,y]:[0,b];case
1:var
c=[0,d7(a[1]),0];return[6,[4,a[3],[1,a[2]]],c,y];default:return ad(bm3)}}function
kq(a,c,b){var
d=a?a[1]:y;return d7(j1([0,d],c,b))}function
H_(f,a){function
b(a){switch(a[0]){case
0:try{var
k=lr(a[1],f);return k}catch(b){b=j(b);if(b===l)return a;throw b}case
1:return a;case
2:var
m=a[3],n=g(b,a[2]);return[2,b(a[1]),n,m];case
3:var
o=b(a[3]);return[3,a[1],a[2],o];case
4:var
p=b(a[4]),q=b(a[3]);return[4,a[1],a[2],q,p];case
5:var
r=b(a[2]);return[5,g(h,a[1]),r];case
6:var
s=a[3],t=g(b,a[2]);return[6,a[1],t,s];case
7:var
c=a[2],u=e(c[5]),v=g(d,c[4]),w=c[3],x=g(d,c[2]),y=[0,c[1],x,w,v,u];return[7,b(a[1]),y];case
8:var
z=a[4],A=e(a[3]),B=g(i,a[2]);return[8,b(a[1]),B,A,z];case
9:var
C=g(b,a[2]);return[9,a[1],C];case
10:var
D=b(a[3]),E=a[2];return[10,b(a[1]),E,D];case
11:var
F=b(a[3]),G=a[2];return[11,b(a[1]),G,F];case
12:var
H=b(a[3]),I=b(a[2]);return[12,b(a[1]),I,H];case
13:var
J=b(a[2]);return[13,b(a[1]),J];case
14:var
K=b(a[2]);return[14,b(a[1]),K];case
15:var
L=b(a[5]),M=a[4],N=b(a[3]),O=b(a[2]);return[15,a[1],O,N,M,L];case
16:var
P=b(a[2]);return[16,a[1],P];case
17:var
Q=a[5],R=g(b,a[4]),S=b(a[3]),T=b(a[2]);return[17,a[1],T,S,R,Q];case
18:var
U=a[2];return[18,b(a[1]),U];default:var
V=b(a[2]);return[19,a[1],V]}}function
h(a){var
c=b(a[2]);return[0,a[1],c]}function
d(a){var
c=b(a[2]);return[0,a[1],c]}function
i(a){var
c=b(a[2]);return[0,a[1],c]}function
e(a){return a?[0,b(a[1])]:0}return b(a)}function
gD(d,c,a,b){if(0===a[0])if(E(c,a[1]))return b;return[4,d,c,a,b]}function
H$(h,e){var
f=e[1],b=mJ(f),c=b[3],d=b[2],a=b[1],g=(e[2][4]-f[4]|0)+c|0;switch(h){case
0:return[1,[4,a]];case
1:return[1,[0,[0,d]]];case
2:var
i=rf(a),j=A(m2,bm7)?o(bm9,o(i,bm8)):m2;return[1,[4,j]];case
3:return[1,[4,L(ag(bm_),a,d,c,g)]];default:return[1,[2,0,0,[0,[4,a],[0,[0,[0,d]],[0,[0,[0,c]],[0,[0,[0,g]],0]]]]]]}}var
bm$=0;function
Zc(a){return bm$}var
bna=0;function
Ze(a){return Zd}var
Zf=1,bnD=qU(dR,function(a){return c6(1,dG(a))}),yd=bnE.slice();function
nq(a,e){q(a,bnP);var
g=r(e),h=g-1|0,j=0;if(!(h<0)){var
d=j;for(;;){var
b=$(e,d);if(92<=b)var
c=kQ<=b?cm<=b?(q(a,bnF),q(a,yd[(b>>>4|0)+1]),q(a,yd[(b&15)+1]),2):1:93<=b?0:(q(a,bnH),2);else
if(8<=b)if(35<=b)var
c=0;else
switch(b-8|0){case
0:q(a,bnI);var
c=2;break;case
1:q(a,bnJ);var
c=2;break;case
2:q(a,bnK);var
c=2;break;case
4:q(a,bnL);var
c=2;break;case
5:q(a,bnM);var
c=2;break;case
26:q(a,bnN);var
c=2;break;case
24:case
25:var
c=0;break;default:var
c=1}else
if(0===b){if(d===(g-1|0))var
f=1;else{var
i=$(e,d+1|0),l=i<48?1:0,m=l||(57<i?1:0);if(m)var
f=1;else
var
c=1,f=0}if(f){q(a,bnO);var
c=2}}else
var
c=1;switch(c){case
0:q(a,bnD[b+1]);break;case
1:q(a,bnG);q(a,yd[(b>>>4|0)+1]);q(a,yd[(b&15)+1]);break}var
k=d+1|0;if(h!==d){var
d=k;continue}break}}return q(a,bnQ)}function
Zx(e,d,a,c){a9(a);var
f=[0,d,0,0],b=G(function(a,b){var
c=te(a[1],b[1]),d=c[1],e=cz(a[3],r(d));return[0,c[2],[0,[0,d,b[2]],a[2]],e]},f,c),g=b[3];km(a);var
h=b[2];tf(function(b){var
c=b[1],d=b[2];q(a,i1);M(a);q(a,c);x0(a,(g-r(c)|0)+1|0);q(a,hw);M(a);q(a,e);aU(a,0,function(b){return nq(a,d)});q(a,tj);return a9(a)},h);return b[1]}function
Zy(b){var
c=r(b);if(0<c){var
a=$(b,0),d=91<=a?97<=a?dP<=a?0:1:95===a?1:0:36===a?1:65<=a?1:0;return d?Yw(b,1,c-1|0,function(a){if(65<=a)var
b=a+qE|0,c=5<b>>>0?32<=b?0:1:4===b?1:0;else
var
c=48<=a?58<=a?0:1:36===a?1:0;return c?1:0}):0}return 0}function
Zz(a,b){return Zy(b)?(q(a,d8),q(a,b)):HT(a,1,function(c){return nq(a,b)})}var
gE=[],bnR=0,bnS=0;qN(gE,[0,0,function(j){var
a=mE(j,Rq),m=a[1],n=a[2],e=a[3],g=a[5],o=a[6],q=a[8],r=a[11],s=a[13],k=a[14],t=a[15],h=a[17],u=a[19],c=a[25],v=a[30],f=a[31],i=a[37],l=a[38],w=a[39],x=a[4],y=a[7],z=a[9],A=a[10],C=a[12],D=a[16],E=a[18],F=a[20],G=a[21],H=a[22],I=a[23],J=a[24],K=a[26],L=a[27],M=a[28],N=a[29],O=a[32],P=a[33],Q=a[34],R=a[35],S=a[36];function
T(a,b){return a}var
U=3;function
V(a){return d(B(a,AZ,1),a)}var
W=16;function
X(g,f,a){var
c=a[2],d=b(f,g,a[1]),e=b(B(d,dC,2),d,c[1]);return b(B(e,akq,3),e,c[2])}var
Y=3;function
Z(c,a){var
e=b(c[1][s+1],c,a[1]),f=b(B(e,438617127,4),e,a[2]),g=a[3];return p(B(f,hM,6),f,function(a){return d(B(a,g0,5),a)},g)}var
_=3,$=3;function
aa(c,a){var
e=b(c[1][v+1],c,a[1]),f=a[2];return p(B(e,hM,8),e,function(a){return d(B(a,g0,7),a)},f)}function
ab(c,a){switch(a[0]){case
0:var
j=b(c[1][g+1],c,a[1]),L=a[2];return p(B(j,kR,10),j,function(a){return d(B(a,ce,9),a)},L);case
1:var
k=b(c[1][f+1],c,a[1]);return b(B(k,-254016456,11),k,a[2]);case
11:return b(c[1][i+1],c,a[1]);case
18:var
n=b(c[1][e+1],c,a[1]),M=a[2];return p(B(n,kR,14),n,function(a){return d(B(a,ce,13),a)},M);case
20:var
o=b(c[1][f+1],c,a[1]),q=b(B(o,ce,15),o,a[2]);return b(B(q,ce,16),q,a[3]);case
21:var
s=b(c[1][w+1],c,a[1]),u=b(B(s,ce,17),s,a[2]);return b(B(u,ce,18),u,a[3]);case
24:var
v=b(c[1][f+1],c,a[1]),N=a[2],x=p(B(v,kR,20),v,function(a){return d(B(a,ce,19),a)},N);return b(B(x,uE,21),x,a[3]);case
27:var
y=b(c[1][f+1],c,a[1]),z=b(B(y,g0,22),y,a[2]);return b(B(z,akq,23),z,a[3]);case
28:var
A=b(c[1][f+1],c,a[1]),O=a[2];return p(B(A,hM,26),A,function(a){return b(B(a,kR,25),a,function(a){return d(B(a,ce,24),a)})},O);case
29:return b(c[1][m+1],c,a[1]);case
30:var
C=b(c[1][i+1],c,a[1]),P=a[2],D=p(B(C,kR,28),C,function(a){return d(B(a,ad4,27),a)},P),E=b(B(D,dC,29),D,a[3]);return b(B(E,uE,30),E,a[4]);case
31:var
F=b(c[1][i+1],c,a[1]);return b(B(F,g0,31),F,a[2]);case
32:return b(c[1][g+1],c,a[1]);case
33:var
G=b(c[1][g+1],c,a[1]);return b(B(G,-109756416,32),G,a[2]);case
34:var
Q=a[1],R=function(a){return d(B(a,ce,33),a)},H=p(c[1][h+1],c,R,Q);return b(B(H,adc,34),H,a[2]);case
35:var
S=a[1],T=function(a){return d(B(a,ce,35),a)},I=p(c[1][h+1],c,T,S),J=b(B(I,adc,36),I,a[2]),K=b(B(J,ce,37),J,a[3]);return b(B(K,-737397837,38),K,a[4]);case
40:return b(c[1][t+1],c,a[1]);case
41:return b(c[1][r+1],c,a[1]);case
7:case
8:case
19:case
22:case
23:case
25:case
26:case
36:case
38:case
39:var
l=b(c[1][f+1],c,a[1]);return b(B(l,ce,12),l,a[2]);default:return b(c[1][f+1],c,a[1])}}var
ac=3,ad=3,ae=3,af=3,ag=3,ah=3,ai=3,aj=3,ak=3,al=3,am=3,an=3,ao=3;function
ap(c,a){var
d=b(c[1][g+1],c,a[1]),e=b(B(d,dC,39),d,a[2]),f=b(B(e,694269055,40),e,a[3]);return b(B(f,uE,41),f,a[4])}var
aq=3;function
ar(c,a){var
d=b(B(c,ai1,42),c,a[1]);return b(B(d,ce,43),d,a[2])}var
as=16,at=3,au=3;function
av(a,c){return b(a[1][f+1],a,c[1])}function
aw(c,a){var
e=b(c[1][o+1],c,a[1]),f=a[2];return p(B(e,hM,45),e,function(a){return d(B(a,g0,44),a)},f)}function
ax(c,a){if(typeof
a==="number")return c;else
switch(a[0]){case
0:return b(c[1][l+1],c,a[1]);case
1:return b(c[1][n+1],c,a[1]);case
3:var
e=b(c[1][f+1],c,a[1]),g=b(B(e,dC,46),e,a[2]),C=a[3];return p(B(g,hM,48),g,function(a){return d(B(a,dC,47),a)},C);case
4:var
D=a[1],E=function(a){return d(B(a,amQ,49),a)},h=p(c[1][k+1],c,E,D),i=b(B(h,ce,50),h,a[2]),j=b(B(i,dC,51),i,a[3]);return b(B(j,uE,52),j,a[4]);case
5:var
F=a[1],G=function(a){return d(B(a,alG,53),a)},m=p(c[1][k+1],c,G,F),o=b(B(m,1027850867,54),m,a[2]),r=b(B(o,285130234,55),o,a[3]),s=b(B(r,463546953,56),r,a[4]),t=b(B(s,dC,57),s,a[5]);return b(B(t,uE,58),t,a[6]);case
6:return b(c[1][u+1],c,a[1]);case
7:return b(c[1][q+1],c,a[1]);case
8:var
v=b(c[1][f+1],c,a[1]),H=a[2],w=p(B(v,kR,61),v,function(a){return b(B(a,BZ,60),a,function(a){return d(B(a,aky,59),a)})},H),I=a[3];return p(B(w,hM,63),w,function(a){return d(B(a,dC,62),a)},I);case
9:var
x=b(c[1][f+1],c,a[1]),J=a[2],y=p(B(x,kR,66),x,function(a){return b(B(a,BZ,65),a,function(a){return d(B(a,g0,64),a)})},J),K=a[3];return p(B(y,hM,68),y,function(a){return d(B(a,dC,67),a)},K);case
11:var
z=b(c[1][l+1],c,a[1]),L=a[2],A=p(B(z,hM,71),z,function(c,a){var
d=b(B(c,alV,69),c,a[1]);return b(B(d,dC,70),d,a[2])},L),M=a[3];return p(B(A,hM,73),A,function(a){return d(B(a,dC,72),a)},M);default:return b(c[1][f+1],c,a[1])}}var
ay=3;function
az(e,a){var
f=b(e[1][c+1],e,a[1]),i=a[2],g=p(B(f,hM,75),f,function(a){return d(B(a,ce,74),a)},i),h=b(B(g,741886037,76),g,a[3]);return b(B(h,237661021,77),h,a[4])}function
aA(e,a){if(0===a[0])return b(e[1][c+1],e,a[1]);var
f=b(e[1][c+1],e,a[1]),g=b(B(f,-955653804,78),f,a[2]),h=a[3];return p(B(g,hM,80),g,function(a){return d(B(a,g0,79),a)},h)}function
aB(a,b){return a}var
aC=3;function
aD(d,c,a){if(a){var
e=b(c,d,a[1]);return p(B(e,kR,81),e,c,a[2])}return d}eM(j,[0,g,3,e,k,function(c,d,a){return a?b(d,c,a[1]):c},h,aD,I,aC,e,i,aB,m,aA,n,az,x,ay,e,o,ax,y,aw,q,av,z,au,e,A,at,e,r,as,h,ar,C,aq,e,s,ap,t,ao,e,D,an,e,E,am,e,u,al,g,F,ak,e,G,aj,e,H,ai,e,J,ah,e,c,ag,e,K,af,f,L,ae,c,M,ad,e,N,ac,f,v,ab,f,aa,O,$,e,P,_,c,Q,Z,R,Y,e,S,X,l,W,h,V,w,U,e,e,T]);return function(b,a){return eL(a,j)}},bnS,bnR]);var
Ie=[0,0,0,0];function
ZA(i,h){if(!Ie[1]){var
f=g$(aAc),a=jO(f,az7,aAe),c=a[7],e=a[8],j=a[1],k=a[2],l=a[3],m=a[4],n=a[5],o=a[6],g=fI(f,0,0,gn,gE,0),p=g[1],q=g[10],r=1,s=1,t=function(a){return lQ(a[e+1],a[c+1])},u=function(a,c){var
d=c[1];if(30===d[0]){var
f=ds(a);f[e+1]=fl(d[4][1],a[e+1]);return f}return b(q,a,c)},v=function(a,b){if(dv(b,a[c+1]))return a;var
d=ds(a);d[e+1]=bl(b,a[e+1]);return d};eM(f,[0,j,function(a,e){var
f=e[2],g=e[1];if(f){var
i=f[1],d=ds(a);d[c+1]=bl(g,a[c+1]);return b(B(d,ce,82),d,i)}var
h=ds(a);h[c+1]=bl(g,a[c+1]);return h},k,v,o,u,m,t,l,s,e,n,r,c]);var
w=function(d){var
g=d[1],a=eL(0,f);b(p,d[2],a);a[c+1]=g[3];a[e+1]=g[2];return fJ(0,a,f)};ha(f);Ie[1]=w}return d(Ie[1],[0,[0,0,i,h],gE[4]])}function
ZB(g,f,e){var
a=ZA(g,f),c=b(B(a,ce,85),a,e);return d(B(c,ajd,86),c)}function
pP(i){var
b=i;for(;;){var
a=b[1];switch(a[0]){case
4:var
b=a[1];continue;case
21:var
d=0!==a[1]?1:0;if(d){var
e=pP(a[2]);if(e){var
b=a[3];continue}var
f=e}else
var
f=d;return f;case
31:return a[1];case
41:var
h=a[1];return Z(function(a){return pP(a[2])},h);case
23:case
26:var
g=pP(a[1]);if(g){var
b=a[2];continue}return g;case
30:case
40:return 1;case
34:case
35:return Z(pP,a[1]);case
7:case
8:case
19:var
c=pP(a[1]);if(c){var
b=a[2];continue}return c;case
11:case
29:case
32:return 1;case
1:case
2:case
3:case
12:case
37:var
b=a[1];continue;default:return 0}}}function
ck(a){return pP(a)}var
If=[0,0,0,0];function
ZC(t){var
u=1;if(!If[1]){var
a=g$(aAb),e=jO(a,az_,aAi),h=e[3],i=e[4],c=e[5],k=e[1],l=e[2],f=fI(a,0,0,gn,gE,0),m=f[1],n=f[24],o=f[34],q=function(a,d){if(a[c+1]){var
b=ds(a);b[c+1]=ck(d);return b}return a},r=function(a,c,b){return d(a[1][h+1],a)?p(n,a,c,b):a};eM(a,[0,h,1,c,k,function(a,e){if(a[c+1]){var
d=e[1];if(typeof
d!=="number")switch(d[0]){case
2:return b(a[1][i+1],a,d[1]);case
1:case
6:case
10:break;default:return b(o,a,e)}var
f=ds(a);f[c+1]=0;return f}return a},l,r,i,q]);var
s=function(e){var
d=eL(0,a);b(m,e[2],d);d[c+1]=e[1][2];return fJ(0,d,a)};ha(a);If[1]=s}var
g=d(If[1],[0,[0,0,u],gE[4]]),j=b(B(g,AZ,87),g,t);return d(B(j,-279471100,88),j)}function
Ig(e,d){var
b=e,a=d;for(;;){if(b){if(a){var
c=gF(b[1],a[1]);if(c){var
b=b[2],a=a[2];continue}return c}return 0}return a?0:1}}function
gF(z,y){var
d=z,c=y;for(;;){var
a=c[1],b=d[1];switch(b[0]){case
0:if(0===a[0]){var
g=A(b[1],a[1]);return g?Ig(b[2],a[2]):g}return 0;case
11:return 11===a[0]?E(b[1],a[1]):0;case
18:if(18===a[0]){var
h=E(b[1],a[1]);return h?Ig(b[2],a[2]):h}return 0;case
19:if(19===a[0]){var
i=gF(b[1],a[1]);if(i){var
d=b[2],c=a[2];continue}return i}return 0;case
21:if(21===a[0]){var
j=E(b[1],a[1]);if(j){var
k=gF(b[2],a[2]);if(k){var
d=b[3],c=a[3];continue}var
l=k}else
var
l=j;return l}return 0;case
24:if(24===a[0]){var
m=gF(b[1],a[1]);return m?Ig(b[2],a[2]):m}return 0;case
26:if(26===a[0]){var
n=gF(b[1],a[1]);if(n){var
d=b[2],c=a[2];continue}return n}return 0;case
27:if(27===a[0]){var
o=A(b[2],a[2]);if(o){var
p=E(b[3],a[3]);if(p){var
d=b[1],c=a[1];continue}var
q=p}else
var
q=o;return q}return 0;case
29:var
e=b[1];if(0===e[0]){if(29===a[0]){var
r=a[1];if(0===r[0])return E(e[1],r[1])}return 0}if(29===a[0]){var
f=a[1];if(0!==f[0]){var
s=E(e[1],f[1]);if(s)var
t=E(e[2],f[2]),u=t?E(e[3],f[3]):t;else
var
u=s;return u}}return 0;case
31:if(31===a[0]){var
v=E(b[1],a[1]),B=v?A(b[2],a[2]):v;return B}return 0;case
40:var
w=b[1];switch(w[0]){case
0:if(40===a[0])if(0===a[1][0])return 0;return 0;case
1:if(40===a[0]){var
x=a[1];if(1===x[0])return E(w[1],x[1])}return 0}break}return 0}}function
ZD(g,f){var
a=f[1],b=g[1];if(typeof
b==="number")return 0===b?0===a?1:0:1===a?1:0;else
switch(b[0]){case
0:if(typeof
a!=="number"&&0===a[0]){var
d=b[1],c=a[1];for(;;){if(d){if(c){var
e=ZD(d[1],c[1]);if(e){var
d=d[2],c=c[2];continue}return e}return 0}return c?0:1}}return 0;case
2:if(typeof
a!=="number"&&2===a[0])return gF(b[1],a[1]);return 0;case
7:if(typeof
a!=="number"&&7===a[0])return gF(b[1][1],a[1][1]);return 0;default:return 0}}function
Ih(a){function
d(f,e){var
b=f,a=e;for(;;){var
c=a[1];if(19===c[0]){var
g=c[2],b=d(b,c[1]),a=g;continue}return[0,[0,[2,a],0],b]}}return d(0,a)}function
tk(f){var
b=f;for(;;){var
a=b[1];switch(a[0]){case
21:var
c=tk(a[2]);if(c){var
b=a[3];continue}return c;case
26:var
d=tk(a[1]);if(d){var
b=a[2];continue}return d;case
31:return a[1];case
34:return Z(tk,a[1]);case
35:if(1===a[2]){var
e=Z(tk,a[1]);if(e){var
b=a[3];continue}return e}break;case
40:return 1}return 0}}function
tl(c){var
a=c;for(;;){var
b=a[1];switch(b[0]){case
27:var
a=b[1];continue;case
11:case
29:case
31:case
40:return 1;default:return 0}}}function
yf(a){switch(a){case
0:return bnT;case
1:return bnU;case
2:return bnV;case
10:return bnY;case
11:return bnZ;case
12:return bn0;case
3:case
4:return bnW;case
16:case
17:return bn2;case
13:case
14:case
15:return bn1;case
18:case
19:case
20:return bn3;default:return bnX}}function
i2(a,b){return 3<=a[1]?(a[1]=b,0):0}function
pQ(e,b){if(0===e[0]){if(0===b[0])return E(e[1],b[1])}else
if(1===b[0]){var
i=E(e[1],b[1]);if(i){var
c=b[2],g=e[2];if(typeof
g==="number"){if(0===g)if(typeof
c==="number")if(0===c)var
d=1;else
var
a=0,d=0;else
var
a=0,d=0;else
if(typeof
c==="number")if(0===c)var
a=0,d=0;else
var
d=1;else
var
a=0,d=0;if(d)var
f=1,a=1}else
if(typeof
c==="number")var
a=0;else
var
f=A(g[1],c[1]),a=1;if(!a)var
f=0;if(f){var
h=b[3],j=e[3];if(j){if(h)return A(j[1],h[1])}else
if(!h)return 1;return 0}var
k=f}else
var
k=i;return k}return 0}function
Ik(a){switch(a){case
0:return 3;case
1:return 4;case
2:return 6;case
3:return 8;case
4:return 7;default:return 9}}function
nt(b){var
a=b[1];switch(a[0]){case
19:var
d=nt(a[1]),c=nt(a[2]);return d?c?[0,[0,[19,d[1],c[1]],b[2]]]:d:c?c:0;case
26:var
e=nt(a[1]),f=nt(a[2]);if(!e)if(!f)return 0;return[0,b];case
34:var
g=a[1];return Z(function(a){return 0===nt(a)?1:0},g)?0:[0,b];case
29:case
31:case
40:return 0;default:return[0,b]}}function
a1(b,a){return[0,[29,[0,a]],b]}function
ZM(c,b,a){return[0,[29,[1,lP(b),1,[0,a]]],c]}function
Il(c,b,a){return[0,[29,[1,b,0,[0,a]]],c]}function
tn(d,c,b,a){return[0,[29,[1,a,[0,c],b]],d]}function
cl(a,c,b){var
d=a?a[1]:1;return[0,[31,d,b],c]}function
yg(c,b,a){return[0,[33,a,b],c]}function
ZN(b,a){return 31===a[1][0]?a:[0,[17,a],b]}function
lR(c,b,a){return[0,[34,a,b],c]}function
ZO(b,a){var
c=a[2];if(c){var
d=[0,o(b,o(boI,c[1]))];return[0,a[1],d]}return[0,a[1],[0,b]]}function
pR(f,k,a,d,j){if(f)var
g=f;else{if(typeof
a==="number")switch(a){case
0:var
b=boB;break;case
1:var
b=boC;break;case
2:var
b=boD;break;case
3:var
b=boE;break;default:var
b=0}else
switch(a[0]){case
0:var
b=[0,a[1]];break;case
1:var
b=[0,o(boF,a[1])];break;case
2:var
b=boG;break;default:var
b=boH}var
g=b}if(typeof
a==="number")var
c=0;else
switch(a[0]){case
2:var
h=a[1];if(0===h.length-1)var
c=0;else
var
e=qW(function(a,b){return ZO(n(h,a)[a+1],b)},d),c=1;break;case
3:var
i=a[1];if(i)var
e=aG(ZO,i[1],d),c=1;else
var
c=0;break;default:var
c=0}if(!c)var
e=d;return[0,[35,e,j,k,a],g]}function
ZP(a,b){switch(b[1][0]){case
31:return cl(0,a,bll);case
34:return cl(0,a,blm);case
1:case
40:return cl(0,a,blk);default:return[0,[12,b],a]}}function
Im(c,b,a){return[0,[28,b,[0,a]],c]}function
de(c,b,a){return[0,[0,b,a],c]}function
hx(d,c,a,b){return[0,[30,0,a,b,H4(c,w(a))],d]}function
boJ(d,c,a,b){return[0,[30,1,a,b,H4(c,w(a))],d]}function
d_(l,k,j){var
a=k,b=j;for(;;){var
c=a[1],d=b[1];if(19===c[0]){var
h=c[1];if(40===c[2][1][0])var
i=h,e=1;else
if(40===h[1][0])var
i=c[2],e=1;else
var
e=0;if(e){var
a=i;continue}}if(19===d[0]){var
f=d[1];if(40===f[1][0]){var
b=d[2];continue}var
g=d[2];if(40===g[1][0]){var
a=d_(0,a,f),b=g;continue}}return[0,[19,a,b],l]}}function
to(b,a){return 0===a?b:G(function(a){var
b=0;return function(c){return d_(b,a,c)}},b,a)}function
a7(c,b,a){return[0,[40,[1,[0,a,b]]],c]}function
gG(a){if(10<=a){if(I===a)return boU}else
if(0<=a)switch(a){case
0:return df;case
1:return yh;case
2:return boM;case
3:return boN;case
4:return boO;case
5:return boP;case
6:return boQ;case
7:return boR;case
8:return boS;default:return boT}return a7(0,0,a)}function
pS(f,a,b){var
c=a[1],d=b[1];if(34===c[0])if(40===d[0]){var
e=d[1];if(1===e[0])if(ck(a))return il(c[1],e[1][1])}return[0,[26,a,b],f]}function
ex(d,a,b){var
c=a[1];switch(c[0]){case
34:case
35:if(ck(a))return il(c[1],b);break}return[0,[26,a,a7(d,0,b)],0]}function
dL(d,c,b,a){return[0,[24,b,a,c],d]}function
bO(d,c,b,a){return dL(d,bmP,ZM(0,c,b),a)}function
In(b,a){return ZM(0,b,a)}function
Io(b,a){return a1(b,lP(a))}function
pT(b,a){return a1(b,lP(a))}function
ey(c,b,a){return[0,[27,b,a,1],c]}var
hy=a1(0,bmu),ZQ=a1(0,bmw);function
ZR(c,b,a){return[0,[27,Io(0,b),a,1],c]}function
ZS(c,b,a){return[0,[7,b,a],c]}function
Ip(c,b,a){return[0,[18,b,a],c]}function
Iq(f,n,m){var
d=n,c=m;for(;;){var
e=d[1],a=c[1];switch(e[0]){case
8:var
g=e[2][1];if(31===g[0]){var
h=g[2],i=e[1];switch(a[0]){case
8:var
j=a[1][1];if(31===j[0]){var
p=a[2],d=Iq(0,i,cl(0,0,o(h,j[2]))),c=p;continue}var
b=1;break;case
17:var
b=0;break;case
31:var
d=i,c=cl(0,0,o(h,a[2]));continue;default:var
b=1}}else
var
b=0;break;case
31:var
k=e[2];switch(a[0]){case
8:var
l=a[1][1];if(31===l[0]){var
q=a[2],d=cl(0,0,o(k,l[2])),c=q;continue}var
b=1;break;case
17:var
b=0;break;case
31:return cl(0,f,o(k,a[2]));default:var
b=1}break;default:var
b=0}if(!b){if(17===a[0]){var
c=a[1];continue}if(17===e[0]){var
d=e[1];continue}}return[0,[8,d,c],f]}}function
yi(b,a){return[0,[41,a],b]}function
ez(c,b,a){return[0,[21,0,b,a],c]}function
d$(b,a){switch(a[1][0]){case
9:case
40:return a;default:return[0,[9,a],b]}}var
kr=a7(boX,0,1),i3=a7(boY,0,0);function
nu(a){return a?kr:i3}function
ks(y,x,w){var
d=x,c=w;for(;;){var
e=d[1],b=c[1];switch(e[0]){case
2:if(2===b[0]){var
d=e[1],c=b[1];continue}var
a=0;break;case
3:var
k=e[1];switch(b[0]){case
3:var
d=k,c=b[1];continue;case
40:var
l=b[1];if(1===l[0]){var
m=l[1][2];if(m)var
o=m[1],n=k,a=2;else
var
a=0}else
var
a=0;break;default:var
a=0}break;case
29:var
p=e[1];if(0===p[0]){var
q=p[1],r=q[2];if(f(r,bo1))if(f(r,bo2))var
a=1,g=0;else
var
g=1;else
var
g=1;if(g)switch(b[0]){case
2:case
3:case
9:case
11:case
12:case
30:case
34:case
35:case
40:if(x5(q))if(ck(c))return i3;var
a=1;break;default:var
a=1}}else
var
a=1;break;case
31:if(31===b[0])return nu(A(e[2],b[2]));var
a=1;break;case
40:var
s=e[1];if(1===s[0]){var
t=s[1],u=t[2];switch(b[0]){case
3:if(u)var
o=u[1],n=b[1],a=2;else
var
a=0;break;case
40:var
v=b[1];if(1===v[0])return nu(E(t[1],v[1][1]));var
a=0;break;default:var
a=0}}else
var
a=0;break;case
9:case
11:case
12:case
30:case
34:case
35:var
a=0;break;default:var
a=1}switch(a){case
0:if(29===b[0]){var
h=b[1];if(0===h[0]){var
i=h[1],j=i[2],z=f(j,boZ)?f(j,bo0)?1:0:0;if(!z)if(x5(i))if(ck(d))return i3}}break;case
1:break;default:var
d=n,c=cl(0,0,c6(1,o));continue}return d$(0,[0,[21,3,d,c],y])}}function
pU(b,a){return[0,[40,[0,[0,a]]],b]}function
nv(d,c,b,a){return 3===c?ks(d,b,a):[0,[21,c,b,a],d]}function
tp(f,c,b){var
d=c[1],a=b[1];switch(d[0]){case
9:if(9===a[0])return d$(0,tp(f,d[1],a[1]));break;case
29:var
g=d[1];switch(a[0]){case
21:if(2===a[1]){var
h=a[2][1];if(29===h[0])var
j=h[1],e=0;else{var
i=a[3][1];if(29===i[0])var
j=i[1],e=0;else
var
e=1}if(!e)if(pQ(g,j))return b}break;case
29:if(pQ(g,a[1]))return c;break}break}return[0,[21,2,c,b],f]}function
i4(f,c,b){var
d=c[1],a=b[1];switch(d[0]){case
9:if(9===a[0])return d$(0,i4(f,d[1],a[1]));break;case
29:var
g=d[1];switch(a[0]){case
21:if(1===a[1]){var
h=a[2][1];if(29===h[0])var
j=h[1],e=0;else{var
i=a[3][1];if(29===i[0])var
j=i[1],e=0;else
var
e=1}if(!e)if(pQ(g,j))return b}break;case
29:if(pQ(g,a[1]))return c;break}break}return[0,[21,1,c,b],f]}function
i5(c){var
e=c[2],a=c[1];switch(a[0]){case
9:var
d=a[1],g=d[2],b=d[1];if(21===b[0])switch(b[1]){case
3:return d$(0,[0,[21,4,b[2],b[3]],g]);case
4:return d$(0,[0,[21,3,b[2],b[3]],g]);case
6:return d$(0,[0,[21,9,b[2],b[3]],d[2]]);case
7:return d$(0,[0,[21,8,b[2],b[3]],d[2]]);case
8:return d$(0,[0,[21,7,b[2],b[3]],d[2]]);case
9:return d$(0,[0,[21,6,b[2],b[3]],d[2]])}return[0,[13,c],0];case
21:switch(a[1]){case
3:return[0,[21,4,a[2],a[3]],e];case
4:return[0,[21,3,a[2],a[3]],e];case
6:return[0,[21,9,a[2],a[3]],c[2]];case
7:return[0,[21,8,a[2],a[3]],c[2]];case
8:return[0,[21,7,a[2],a[3]],c[2]];case
9:return[0,[21,6,a[2],a[3]],c[2]]}break;case
40:var
f=a[1];if(1===f[0])return J(f[1][1],0)?i3:kr;break;case
13:case
14:return a[1]}return[0,[13,c],0]}function
kt(n){var
a=n;for(;;){var
b=a[1];switch(b[0]){case
9:var
a=b[1];continue;case
13:var
o=kt(b[1]);return[0,[14,o],a[2]];case
14:var
c=b[1],d=kt(c);return d===c?a:[0,[14,d],a[2]];case
21:var
e=b[1];if(!(3<=e))switch(e){case
0:break;case
1:var
f=b[3],g=b[2],h=kt(g),i=kt(f);if(g===h)if(f===i)return a;return[0,[21,1,h,i],a[2]];default:var
j=b[3],k=b[2],l=kt(k),m=kt(j);if(k===l)if(j===m)return a;return[0,[21,2,l,m],a[2]]}break}return a}}function
gH(K,I,H,G){var
f=K,b=I,d=H,e=G;for(;;){var
c=b[1],h=d[1],i=e[1];switch(c[0]){case
11:return 0===c[1]?e:d;case
21:var
r=c[1];if(3<=r)switch(r-3|0){case
0:var
s=c[2],t=s[1];if(40===t[0]){var
x=t[1];if(1===x[0])if(J(x[1][1],0))var
j=0;else
var
w=c[3],j=1;else
var
j=0}else
var
j=0;if(j)var
g=1;else{var
u=c[3][1];if(40===u[0]){var
v=u[1];if(1===v[0])if(J(v[1][1],0))var
a=1,g=0;else
var
w=s,g=1;else
var
a=1,g=0}else
var
a=1,g=0}if(g){var
b=w,L=e,e=d,d=L;continue}break;case
5:var
y=c[2];if(1===y[1][0]){var
z=c[3][1];if(40===z[0]){var
A=z[1];if(1===A[0]){if(!J(A[1][1],0)){var
b=y;continue}var
a=1}else
var
a=1}else
var
a=1}else
var
a=1;break;case
6:if(1===c[2][1][0]){var
B=c[3][1];if(40===B[0]){var
C=B[1];if(1===C[0]){if(!J(C[1][1],0))return e;var
a=1}else
var
a=1}else
var
a=1}else
var
a=1;break;case
7:var
D=c[3][1];if(40===D[0]){var
E=D[1];if(1===E[0]){if(!J(E[1][1],0)){var
f=0,b=c[2];continue}var
a=1}else
var
a=1}else
var
a=1;break;default:var
a=1}else
var
a=1;break;case
40:var
F=c[1];if(1===F[0]){if(!J(F[1][1],0))return e;var
a=0}else
var
a=0;break;case
34:case
35:var
a=0;break;default:var
a=1}if(!a)if(ck(b))return d;if(20===h[0]){var
o=h[3],p=h[2],q=h[1];if(gF(o,e)){var
f=0,b=tp(0,b,q),d=p;continue}if(gF(p,e)){var
f=0,b=tp(0,b,i5(q)),d=o;continue}}if(20===i[0]){var
l=i[3],m=i[2],n=i[1];if(gF(d,m)){var
f=0,b=i4(0,b,n),e=l;continue}if(gF(d,l)){var
f=0,b=i4(0,b,i5(n)),e=m;continue}}switch(c[0]){case
9:var
b=c[1];continue;case
13:case
14:var
b=c[1],M=e,e=d,d=M;continue;default:var
k=kt(b);return gF(d,e)?ck(k)?d:d_(f,k,d):[0,[20,k,d,e],f]}}}function
Ir(I,H,G){var
e=H,f=G;for(;;){var
c=e[1],b=f[1];switch(c[0]){case
2:if(2===b[0]){var
e=c[1],f=b[1];continue}var
a=0;break;case
3:var
j=c[1];switch(b[0]){case
3:var
e=j,f=b[1];continue;case
40:var
k=b[1];if(1===k[0]){var
l=k[1][2];if(l)var
n=l[1],m=j,a=1;else
var
a=0}else
var
a=0;break;default:var
a=0}break;case
21:if(10===c[1]){var
o=c[2],p=o[1];switch(p[0]){case
37:var
q=c[3][1];if(40===q[0]){var
r=q[1];if(1===r[0])if(J(r[1][1],0))var
d=2;else
var
w=o,d=1;else
var
a=0,d=0}else
var
a=0,d=0;break;case
40:var
y=p[1];if(1===y[0])if(J(y[1][1],0))var
d=2;else{var
z=c[3];if(37===z[1][0])var
w=z,d=1;else
var
a=0,d=0}else
var
a=0,d=0;break;default:var
a=0,d=0}switch(d){case
0:var
g=0;break;case
1:if(40===b[0]){var
x=b[1];if(1===x[0]){if(!J(x[1][1],0))return i5(w);var
g=1}else
var
g=1}else
var
a=0,g=0;break;default:var
g=1}if(g){var
s=c[2],t=s[1];if(40===t[0])if(J(t[1][1][1],0))var
a=0,h=0;else{var
v=c[3];if(37===v[1][0])var
u=v,h=1;else
var
a=0,h=0}else
if(J(c[3][1][1][1][1],0))var
a=0,h=0;else
var
u=s,h=1;if(h){if(40===b[0]){var
e=u;continue}var
a=0}}}else
var
a=0;break;case
40:var
i=c[1];switch(i[0]){case
0:if(40===b[0]){var
B=b[1];if(0===B[0]){if(A(i[1][1],B[1][1]))return kr;var
a=0}else
var
a=0}else
var
a=0;break;case
1:var
C=i[1],D=C[2];switch(b[0]){case
3:if(D)var
n=D[1],m=b[1],a=1;else
var
a=0;break;case
40:var
F=b[1];if(1===F[0])return nu(E(C[1],F[1][1]));var
a=0;break;default:var
a=0}break;default:var
a=0}break;default:var
a=0}if(a){var
e=m,f=cl(0,0,c6(1,n));continue}return d$(0,[0,[21,3,e,f],I])}}function
Is(e,d,c){var
b=d[1],a=c[1];switch(b[0]){case
31:if(31===a[0])return nu(A(b[2],a[2]));break;case
32:if(32===a[0])return nu(A(b[1],a[1]));break}return d$(0,[0,[21,3,d,c],e])}function
ZT(b,a){var
c=cl(0,0,bo4);return Is(b,ZP(0,a),c)}function
It(b,a){return[0,[21,10,[0,[37,a],b],df],0]}function
yj(C,B,A){var
h=C,g=B,p=A;for(;;){var
c=g[1],b=p[1];switch(c[0]){case
21:if(10===c[1]){var
x=c[3][1];if(40===x[0]){var
l=x[1];switch(l[0]){case
0:var
a=0,d=0;break;case
1:if(J(l[1][1],0))var
a=0,d=0;else
var
d=1;break;case
2:if(J(l[1],0))var
a=0,d=0;else
var
d=1;break;default:if(J(l[1],0))var
a=0,d=0;else
var
d=1}if(d)switch(b[0]){case
21:var
a=0;break;case
40:var
m=b[1];switch(m[0]){case
0:var
a=1,e=0;break;case
1:if(J(m[1][1],0))var
a=1,e=0;else
var
e=1;break;case
2:if(J(m[1],0))var
a=1,e=0;else
var
e=1;break;default:if(J(m[1],0))var
a=1,e=0;else
var
e=1}if(e){var
h=0,g=c[2];continue}break;default:var
a=1}}else
var
a=0}else
var
a=0;break;case
40:var
q=c[1];switch(q[0]){case
1:var
y=q[1][1],r=1;break;case
2:var
y=q[1],r=1;break;default:var
a=0,r=0}if(r)switch(b[0]){case
21:var
a=0;break;case
40:var
z=b[1];if(1===z[0])return a7(h,0,y|z[1][1]);var
a=1;break;default:var
a=1}break;default:var
a=0}if(!a){if(21===b[0])if(14===b[1]){var
w=b[3][1];if(40===w[0]){var
k=w[1];switch(k[0]){case
0:var
n=1;break;case
1:var
n=J(k[1][1],0)?1:0;break;case
2:var
n=J(k[1],0)?1:0;break;default:var
n=J(k[1],0)?1:0}if(!n){var
h=0,p=b[2];continue}}}if(21===c[0])if(14===c[1]){var
s=c[3][1];if(40===s[0]){var
i=s[1];switch(i[0]){case
0:var
f=2;break;case
1:var
t=i[1][1];if(J(t,0))var
u=t,f=1;else
var
f=0;break;case
2:var
v=i[1];if(J(v,0))var
u=v,f=1;else
var
f=0;break;default:var
f=J(i[1],0)?2:0}switch(f){case
0:var
h=0,g=c[2];continue;case
1:if(40===b[0]){var
j=b[1];switch(j[0]){case
0:var
o=1;break;case
1:var
o=J(j[1][1],0)?1:0;break;case
2:var
o=J(j[1],0)?1:0;break;default:var
o=J(j[1],0)?1:0}if(!o)if(dT(u,0))return g}break}}}}return[0,[21,10,g,p],h]}}function
ku(b,a){return yj(b,a,df)}function
tq(d,c,b,a){return d$(0,nv(c,d,b,a))}function
pV(h,r,q,p){var
i=r,b=q,a=p;for(;;){var
c=b[1],j=a[1];if(24===c[0]){var
k=c[1][1];if(29===k[0]){var
d=k[1];if(0!==d[0]){var
l=d[2];if(typeof
l==="number")if(0!==l){var
m=d[3];if(m){var
n=m[1],s=f(n,bo7)?f(n,bo8)?1:0:0;if(!s){var
e=c[2];if(e){var
g=e[2];if(g)if(!g[2])if(40===j[0]){var
o=j[1];if(1===o[0])if(!J(o[1][1],0)){var
i=0,b=e[1],a=g[1];continue}}}}}}}}}return 0===h?Ir(0,b,a):d$(0,nv(i,Ik(h),b,a))}}function
yk(d,c,b,a){return d$(0,nv(c,Ik(d),b,a))}function
Iu(y,x,q){var
d=x;for(;;){var
m=function(b,a){return[0,[40,[2,b>>>a|0]],0]},b=d[1],a=q[1];switch(b[0]){case
21:var
r=b[1];if(10===r){var
s=b[3][1];if(40===s[0]){var
e=s[1];switch(e[0]){case
0:var
j=1;break;case
1:var
j=J(e[1][1],0)?1:0;break;case
2:var
j=J(e[1],0)?1:0;break;default:var
j=J(e[1],0)?1:0}if(!j)if(40===a[0]){var
f=a[1];switch(f[0]){case
0:var
k=1;break;case
1:var
k=J(f[1][1],0)?1:0;break;case
2:var
k=J(f[1],0)?1:0;break;default:var
k=J(f[1],0)?1:0}if(!k){var
d=b[2];continue}}}}else
if(14===r)if(40===a[0]){var
g=a[1];switch(g[0]){case
0:var
l=1;break;case
1:var
l=J(g[1][1],0)?1:0;break;case
2:var
l=J(g[1],0)?1:0;break;default:var
l=J(g[1],0)?1:0}if(!l)return d}break;case
40:var
h=b[1];switch(h[0]){case
0:var
c=1;break;case
1:var
t=h[1][1],c=0;break;case
2:var
t=h[1],c=0;break;default:if(40===a[0]){var
i=a[1],v=h[1];switch(i[0]){case
0:var
c=1,o=0;break;case
1:var
w=i[1][1],o=1;break;case
2:var
w=i[1],o=1;break;default:return m(v,i[1])}if(o)return m(v,w)}else
var
c=1}if(!c)if(40===a[0]){var
n=a[1];switch(n[0]){case
1:var
u=n[1][1],p=0;break;case
2:var
u=n[1],p=0;break;default:var
p=1}if(!p)return m(t,u)}break}return[0,[21,14,d,q],y]}}function
Iv(b,a){return Iu(b,a,df)}function
pW(c,b,a){var
d=b[1],e=a[1];if(40===d[0]){var
f=d[1];if(1===f[0])if(40===e[0]){var
g=e[1];if(1===g[0])return a7(c,0,f[1][1]-g[1][1]|0)}}return[0,[21,17,b,a],c]}function
yl(c,f,e){var
a=f[1],b=e[1];if(40===a[0]){var
l=a[1];if(1===l[0])if(40===b[0]){var
m=b[1];if(1===m[0])return a7(c,0,l[1][1]+m[1][1]|0);var
d=1}else
var
d=1;else
var
d=0}else
var
d=0;if(!d)if(40===b[0]){var
g=b[1];if(1===g[0]){var
h=g[1],i=h[1];if(fC(i,0))return pW(c,f,[0,[40,[1,[0,-i|0,h[2]]]],e[2]]);if(21===a[0])if(16===a[1]){var
j=a[3][1];if(40===j[0]){var
k=j[1];if(1===k[0]){var
n=a7(0,0,k[1][1]+b[1][1][1]|0);return[0,[21,16,a[2],n],c]}}}}}return[0,[21,16,f,e],c]}function
ZU(c,b,a){return yl(c,b,a)}function
tr(c,b,a){return ku(0,yl(c,b,a))}function
pX(c,b,a){return ku(0,pW(c,b,a))}function
Iw(c,b,a){return pW(c,b,a)}function
ym(c,b,a){return nv(c,19,b,a)}function
ZV(c,b,a){return[0,[21,15,b,a],c]}function
yn(l,h,c,d){var
g=c[1],e=d[1];if(1===g[0])if(40===e[0]){var
f=e[1];switch(f[0]){case
0:var
b=1,a=0;break;case
1:if(J(f[1][1],2))var
b=0,a=0;else
var
a=1;break;case
2:if(J(f[1],2))var
b=1,a=0;else
var
a=1;break;default:if(J(f[1],2))var
b=1,a=0;else
var
a=1}if(a)return ZV(0,c,yh)}else
var
b=1;else
var
b=0;if(!b)if(40===e[0]){var
i=e[1];if(1===i[0]){var
j=i[1][1];if(J(j,0)){if(40===g[0]){var
k=g[1];if(1===k[0])return a7(0,0,Cp(k[1][1],j))}return ku(0,ym(h,c,d))}}}return l?bO(0,ns,bo9,[0,c,[0,d,0]]):ku(0,ym(h,c,d))}function
ZW(c,b,a){return nv(c,18,b,a)}function
ZX(g,f,e){var
h=f[1];if(40===h[0]){var
a=h[1];switch(a[0]){case
1:var
i=a[1][1],c=0;break;case
2:var
i=a[1],c=0;break;default:var
c=1}if(!c){var
j=e[1];if(40===j[0]){var
b=j[1];switch(b[0]){case
1:var
k=b[1][1],d=0;break;case
2:var
k=b[1],d=0;break;default:var
d=1}if(!d)return a7(g,0,i<<k)}}}return[0,[21,13,f,e],g]}function
ZY(q,e,a){var
r=e[1];if(40===r[0]){var
j=r[1];switch(j[0]){case
0:var
f=0,b=0;break;case
1:if(J(j[1][1],0))var
f=0,b=0;else
var
b=1;break;case
2:if(J(j[1],0))var
f=0,b=0;else
var
b=1;break;default:if(J(j[1],0))var
f=0,b=0;else
var
b=1}if(b)var
C=a,f=1}else
var
f=0;if(f)var
c=0;else{var
s=a[1];if(40===s[0]){var
i=s[1];switch(i[0]){case
0:var
c=1,d=0;break;case
1:if(J(i[1][1],0))var
c=1,d=0;else
var
d=1;break;case
2:if(J(i[1],0))var
c=1,d=0;else
var
d=1;break;default:if(J(i[1],0))var
c=1,d=0;else
var
d=1}if(d)var
C=e,c=0}else
var
c=1}if(!c)if(ck(C))return df;var
h=e[1];if(40===h[0]){var
z=h[1];if(1===z[0]){var
A=a[1];if(40===A[0]){var
B=A[1];switch(B[0]){case
1:return a7(0,0,jy(z[1][1],B[1][1]));case
2:var
g=0;break;default:var
g=1}}else
var
g=1}else
var
g=0}else
var
g=0;if(g)var
k=0;else{var
t=a[1];if(40===t[0]){var
m=t[1];switch(m[0]){case
1:var
y=m[1][1],n=1;break;case
2:var
y=m[1],n=1;break;default:var
k=0,n=0}if(n)var
w=y,v=e,k=1}else
var
k=0}if(!k){if(40===h[0]){var
l=h[1];switch(l[0]){case
1:var
u=l[1][1],p=1;break;case
2:var
u=l[1],p=1;break;default:var
o=0,p=0}if(p)var
w=u,v=a,o=1}else
var
o=0;if(!o)return bO(q,ns,Yy,[0,e,[0,a,0]])}var
x=bkZ(w);return 0<=x?ZX(0,v,gG(x)):bO(q,ns,Yy,[0,e,[0,a,0]])}function
ZZ(c,b,a){return[0,[21,18,b,a],c]}function
Ix(q,p,o){var
d=q,j=p,i=o;for(;;){var
a=j[1],b=i[1];if(40===a[0]){var
m=a[1];if(1===m[0])switch(b[0]){case
21:var
c=0;break;case
40:var
n=b[1];if(1===n[0])return a7(d,0,m[1][1]^n[1][1]);var
c=1;break;default:var
c=1}else
var
c=0}else
var
c=0;if(!c){if(21===b[0])if(14===b[1]){var
l=b[3][1];if(40===l[0]){var
f=l[1];switch(f[0]){case
0:var
g=1;break;case
1:var
g=J(f[1][1],0)?1:0;break;case
2:var
g=J(f[1],0)?1:0;break;default:var
g=J(f[1],0)?1:0}if(!g){var
d=0,i=b[2];continue}}}if(21===a[0])if(14===a[1]){var
k=a[3][1];if(40===k[0]){var
e=k[1];switch(e[0]){case
0:var
h=1;break;case
1:var
h=J(e[1][1],0)?1:0;break;case
2:var
h=J(e[1],0)?1:0;break;default:var
h=J(e[1],0)?1:0}if(!h){var
d=0,j=a[2];continue}}}}return[0,[21,11,j,i],d]}}function
Iy(h,g,f){var
c=h,b=g;for(;;){var
a=b[1];if(21===a[0])if(10===a[1]){var
d=a[3][1];if(40===d[0]){var
e=d[1];if(1===e[0])if(!J(e[1][1],0)){var
c=0,b=a[2];continue}}}return[0,[21,12,b,f],c]}}function
Iz(c,b,a){var
d=0,e=H4(0,0),f=b?s(a,[0,[0,[7,[0,b[1]]],c],0]):a;return dL(0,bmQ,[0,[30,0,0,f,e],c],d)}function
Z0(b,a){return ks(b,a,ZQ)}function
yo(b,a){return[0,[11,a],b]}function
Z1(b,a){return ks(b,a,hy)}function
Z2(g,a){var
b=a[1];switch(b[0]){case
29:var
c=b[1];if(0===c[0]){var
d=c[1],e=d[2],h=f(e,bo$)?f(e,bpa)?1:0:0;if(!h)if(x5(d))return kr}break;case
34:case
35:case
40:return i3}return d$(0,[0,[4,a],g])}function
nw(b,a){return bO(0,boz,bpc,[0,cl(0,0,o(a,bpb)),0])}function
Z3(b){if(b==NY)return bpd;if(b==NZ)return bpe;if(b!=b)return bpf;var
c=b|0;if(c==b)return a(i+c);var
e=d(ag(bpg),b);if(b==gf(e))return e;var
f=d(ag(bph),b);return b==gf(f)?f:d(ag(bpi),b)}function
Z4(a){if(a){var
d=w(a),e=X(d,a[1]),c=0,b=a[2];for(;;){if(b){e[((d-c|0)-2|0)+1]=b[1];var
c=c+1|0,b=b[2];continue}return e}}return[0]}function
Z5(e,b){if(b){var
f=b[2],h=d(e,b[1]),g=X(w(f)+1|0,h),c=1,a=f;for(;;){if(a){g[c+1]=d(e,a[1]);var
c=c+1|0,a=a[2];continue}return g}}return[0]}function
Z6(c,a){var
d=a[4]-a[3]|0,f=a[2];return b(e(c,bpk),f,d)}O([I,bpl,0]);function
bpm(a,b){if(typeof
b==="number")switch(b){case
0:return e(a,bpn);case
1:return e(a,bpo);case
2:return e(a,bpp);case
3:return e(a,bpq);case
4:return e(a,bpr);case
5:return e(a,bps);case
6:return e(a,bpt);default:return e(a,bpu)}else{if(0===b[0]){var
c=u8(b[1]);return d(e(a,bpv),c)}var
f=b[1];return d(e(a,bpw),f)}}function
Z7(b,a){var
c=a[3],d=a[2],f=a[1];return cw(e(b,bpx),bpm,f,Z6,d,Z6,c)}var
IA=O([I,bpy,0]);Pu(function(a){if(a[1]===IA){var
c=a[2];return[0,b(rc(bpz),Z7,c)]}return 0});function
i6(a,b){throw[0,IA,[0,b,a[11],a[12]]]}function
Z8(a){return a[6]-a[5]|0}function
yp(b,c){var
a=b[12];b[12]=[0,a[1],a[2]+1|0,a[4]-c|0,a[4]];return 0}var
bpA=10;function
Kp(q,b,a){a:for(;;){var
m=0;for(;;){var
i=om(IB,m,a);if(16<i>>>0){d(a[1],a);var
m=i;continue}switch(i){case
1:yp(a,0);continue a;case
2:c:for(;;){var
n=40;for(;;){var
j=om(IB,n,a);if(2<j>>>0){d(a[1],a);var
n=j;continue}switch(j){case
0:return q<50?Kp(q+1|0,b,a):aa(Kp,[0,b,a]);case
1:continue c;default:return i6(a,1)}}}case
3:return 9;case
4:return 2;case
5:return 5;case
6:return 4;case
7:return 8;case
8:return 3;case
9:return 7;case
10:return 0;case
11:return 6;case
13:return[0,cg(a)];case
14:c:for(;;){var
o=45;for(;;){var
k=om(IB,o,a);if(9<k>>>0){d(a[1],a);var
o=k;continue}switch(k){case
0:break;case
1:yp(a,Z8(a)-2|0);continue c;case
2:yp(a,Z8(a)-3|0);continue c;case
3:var
e=jC(a,a[5]+1|0);if(hF<=e)if(ml<=e)var
c=0;else
switch(e+alC|0){case
0:var
f=10,c=1;break;case
4:var
f=13,c=1;break;case
6:var
f=9,c=1;break;default:var
c=0}else
if(98===e)var
f=8,c=1;else
var
c=0;if(!c)var
f=e;as(b,f);continue c;case
4:var
u=jC(a,a[5]+1|0),v=jC(a,a[5]+2|0),w=jC(a,a[5]+3|0),l=((b6*(u+eF|0)|0)+(10*(v+eF|0)|0)|0)+(w+eF|0)|0,x=on(a,a[5],a[5]+4|0);if(K<l)i6(a,[1,x]);as(b,dG(l));continue c;case
5:var
g=jC(a,a[5]+2|0),h=jC(a,a[5]+3|0),r=97<=g?g+BN|0:65<=g?g+Ab|0:g+eF|0,s=97<=h?h+BN|0:65<=h?h+Ab|0:h+eF|0;as(b,dG((r*16|0)+s|0));continue c;case
6:var
y=jC(a,a[5]+1|0);as(b,92);as(b,y);continue c;case
7:yp(a,0);as(b,bpA);continue c;case
8:var
p=a[5];vf(b,a[2],p,a[6]-p|0);continue c;default:i6(a,0)}var
t=cA(b);vd(b);return[1,t]}}case
15:return 1;case
16:return i6(a,[0,jC(a,a[5])]);default:continue a}}}}function
bpB(a,b){return c4(Kp(0,a,b))}function
bpC(a){var
g=[0,0],d=cH(64);function
b(c){var
b=g[1];return b?(g[1]=0,b[1]):bpB(d,a)}function
h(a){var
c=b(0);if(typeof
c==="number")switch(c){case
2:return[1,a[11]];case
3:var
l=a[11],e=cE;for(;;){var
f=b(0);if(typeof
f==="number"){if(7===f)return[6,[0,e,l]]}else
if(1===f[0]){var
o=f[1],p=b(0);if(typeof
p==="number")if(6===p){var
q=h(a),k=b(0);if(typeof
k==="number"){if(7===k)return[6,[0,i0(o,q,e),l]];if(0===k){var
e=i0(o,q,e);continue}}return i6(a,4)}return i6(a,5)}return i6(a,6)}case
4:var
m=a[11],d=0;for(;;){var
i=b(0);if(typeof
i==="number")if(8===i){var
r=a[12];return[5,[0,Z4(d),m,r]]}g[1]=[0,i];var
n=h(a),j=b(0);if(typeof
j==="number"){if(8===j){var
s=a[12];return[5,[0,Z4([0,n,d]),m,s]]}if(0===j){var
d=[0,n,d];continue}}return i6(a,3)}case
5:return[2,a[11]];case
9:return[0,a[11]];default:return i6(a,2)}else
return 0===c[0]?[3,[0,c[1],a[11]]]:[4,[0,c[1],a[11]]]}var
e=h(a),c=b(0);if(typeof
c==="number")if(1===c)return e;return i6(a,7)}function
bpD(c,a){return b(e(c,bpE),Z7,a)}var
Z9=O([I,bpF,0]);c8(function(a){return a[1]===Z9?[0,fa(a[2],bpD,a[3])]:0});function
bpG(b,a){try{var
c=bpC(Dm(a))}catch(a){a=j(a);if(a[1]===IA)throw[0,Z9,b,a[2]];throw a}switch(c[0]){case
0:return 1;case
1:return 2;case
2:return 0;default:return[2,a]}}function
yq(a){return[0,a,IC]}var
bpR=qU(dR,function(i){var
a=dG(i),c=97<=a?1:0,d=c?a<=n8?1:0:c;if(d)var
b=d;else{var
e=65<=a?1:0,f=e?a<=90?1:0:e;if(f)var
b=f;else{var
g=48<=a?1:0,h=g?a<=57?1:0:g;if(h)var
b=h;else
var
j=95===a?1:0,b=j||(36===a?1:0)}}return b});function
Z_(a){return bpR[a+1]}var
bpS=qU(dR,function(g){var
a=dG(g),c=97<=a?1:0,d=c?a<=n8?1:0:c;if(d)var
b=d;else{var
e=65<=a?1:0,f=e?a<=90?1:0:e;if(f)var
b=f;else
var
h=95===a?1:0,b=h||(36===a?1:0)}return b});function
bpT(a){return bpS[a+1]}function
ID(a){var
d=r(a),e=0<d?1:0;if(e){var
f=Z_(u(a,0));if(f){var
g=bpT(u(a,0));if(g){var
h=O([I,bpU,0]);try{var
i=d-1|0,k=1;if(!(i<1)){var
b=k;for(;;){if(1-Z_($(a,b)))throw h;var
m=b+1|0;if(i!==b){var
b=m;continue}break}}var
l=1;return l}catch(a){a=j(a);if(a===h)return 0;throw a}}var
c=g}else
var
c=f}else
var
c=e;return c}function
Z$(d,a){var
c=1-ID(a);if(c){var
e=Yu(bpV,function(a){return 46===a?1:0},a);return m(function(e){var
c=1-ID(e);return c?b(T(d,0,0),bpW,a):c},e)}return c}function
_a(c,a){if(f(a[1],bpY)){var
b=a[2],e=b?f(b[1],bpZ)?0:1:0;if(!e)return 0}return d(T(c,0,0),bp0)}var
IE=o(bp1,En),bp2=r(IE);function
_b(a){return o(IE,CL(a,0))}function
_c(b,a){return d(e(g_,mu(bp6,mu(a,bp5))),b)}function
yr(b,a){return d(e(g_,mu(bp8,mu(a,bp7))),b)}function
_d(b,a){return d(Qv(g_,mu(bp_,mu(a,bp9))),b)}function
IF(a){return[0,[0],0]}function
_e(j,b){var
c=b[2],k=b[1];if(0===c)return 0;var
f=c-1|0,e=0;if(f<0)var
g=e;else{var
a=f,h=e;for(;;){var
i=[0,d(j,k[a+1]),h],l=a-1|0;if(0!==a){var
a=l,h=i;continue}var
g=i;break}}return g}function
_f(b,a){return b[1][a+1]}function
_g(c,a){var
b=a[2],d=a[1],e=d.length-1;if(0===e){a[2]=1;a[1]=[0,c];return 0}if(b===e){if(hV<=b)dq(bp$);var
f=X(c5(ol,b)*2|0,0);a[1]=f;gk(d,0,f,0,b)}a[2]=b+1|0;a[1][b+1]=c;return 0}function
bqp(W){var
a=W[1];function
c(a){return a[2]}function
g(a){var
b=a[1],c=a[2]!==b.length-1?1:0,d=c?(a[1]=js(b,0,a[2]),0):c;return d}function
h(a){return[0,[0,a],1]}function
i(a){return[0,[0],0]}function
j(a){return 0===a[2]?1:0}function
k(a){a[2]=0;a[1]=[0];return 0}function
l(c){var
a=c[2]-1|0,b=0,e=c[1];for(;;){if(0<=a){var
d=[0,e[a+1],b],a=a-1|0,b=d;continue}return b}}function
m(b){var
a=eH(b);return[0,a,a.length-1]}function
n(a){return js(a[1],0,a[2])}function
o(a){return[0,k3(a),a.length-1]}function
p(c,b,a){return[0,ij(c,b,a),a]}function
q(a){return a[1]}function
f(a){var
b=a[2];return[0,js(a[1],0,b),b]}function
r(e){var
b=e[2],c=e[1];if(0===b)return 0;var
d=(b-1|0)/2|0,f=0;if(!(d<0)){var
a=f;for(;;){var
g=c[(a|0)+1];c[(a|0)+1]=c[(((b|0)-1|0)-a|0)+1];c[(((b|0)-1|0)-a|0)+1]=g;var
h=a+1|0;if(d!==a){var
a=h;continue}break}}return 0}function
s(c,b,a){var
d=c[2];if(0<=a)if(!((d-a|0)<b))return[0,js(c[1],b,a),a];return S(bqb)}function
t(e,b){var
c=b[2]-1|0,f=b[1],g=0;if(!(c<0)){var
a=g;for(;;){d(e,f[a+1]);var
h=a+1|0;if(c!==a){var
a=h;continue}break}}return 0}function
u(e,c){var
d=c[2]-1|0,f=c[1],g=0;if(!(d<0)){var
a=g;for(;;){b(e,a,f[a+1]);var
h=a+1|0;if(d!==a){var
a=h;continue}break}}return 0}function
v(c,b,f,e){if(0<=c)if(!(e[2]<=b)){var
g=e[1];if(!(b<c)){var
a=c;for(;;){d(f,g[a+1]);var
h=a+1|0;if(b!==a){var
a=h;continue}break}}return 0}return S(bqc)}function
w(d,c,f,e){if(0<=d)if(!(e[2]<=c)){var
g=e[1];if(!(c<d)){var
a=d;for(;;){b(f,a,g[a+1]);var
h=a+1|0;if(c!==a){var
a=h;continue}break}}return 0}return S(bqd)}function
x(e,c){var
b=c[2],f=c[1];if(0===b)return[0];var
g=X(b,d(e,f[1])),h=b-1|0,i=1;if(!(h<1)){var
a=i;for(;;){g[a+1]=d(e,f[a+1]);var
j=a+1|0;if(h!==a){var
a=j;continue}break}}return g}function
y(j,b){var
c=b[2],k=b[1];if(0===c)return 0;var
f=c-1|0,e=0;if(f<0)var
g=e;else{var
a=f,h=e;for(;;){var
i=[0,d(j,k[a+1]),h],l=a-1|0;if(0!==a){var
a=l,h=i;continue}var
g=i;break}}return g}function
z(h,d){var
c=d[2];if(0===c)return[0,[0],c];var
e=d[1],f=X(c,e[1]),g=c-1|0,i=1;if(!(g<1)){var
a=i;for(;;){f[a+1]=b(h,a,e[a+1]);var
j=a+1|0;if(g!==a){var
a=j;continue}break}}return[0,f,c]}function
A(f,e,d){var
a=0,c=e,h=d[1],i=d[2];for(;;){if(i<=a)return c;var
g=b(f,c,h[a+1]),a=a+1|0,c=g;continue}}function
B(f,d,e){var
a=d[2]-1|0,c=e,h=d[1];for(;;){if(0<=a){var
g=b(f,h[a+1],c),a=a-1|0,c=g;continue}return c}}function
C(l,c){var
e=f(c),h=c[2]-1|0,m=e[1],n=c[1],g=0,o=0;if(h<0)var
i=g;else{var
b=o,a=g;for(;;){var
j=n[b+1],k=d(l,j)?(m[a+1]=j,a+1|0):a,p=b+1|0;if(h!==b){var
b=p,a=k;continue}var
i=k;break}}e[2]=i;return e}function
D(e,c,d){if(c[2]!==d[2])return 0;var
a=c[2]-1|0,f=d[1],g=c[1];for(;;){if(0<=a){if(b(e,g[a+1],f[a+1])){var
a=a-1|0;continue}return 0}return 1}}function
E(b,a){if(0<=a)if(!(b[2]<=a))return b[1][a+1];return S(bqe)}function
F(b,a){return b[1][a+1]}function
G(a){return 0<a[2]?a[1][(a[2]-1|0)+1]:S(bqf)}function
H(a){return a[1].length-1}function
I(c,b){var
a=0,e=b[1],f=b[2];for(;;){if(a===f)return 0;if(d(c,e[a+1]))return 1;var
a=a+1|0;continue}}function
J(e,c){var
b=c[2];if(0===b)return[0,[0],0];var
f=c[1],g=X(b,d(e,f[1])),h=b-1|0,i=1;if(!(h<1)){var
a=i;for(;;){g[a+1]=d(e,f[a+1]);var
j=a+1|0;if(h!==a){var
a=j;continue}break}}return[0,g,b]}function
K(a,c){if(0<=a){if(0===a)return[0,[0],0];var
e=X(a,d(c,0)),f=a-1|0,g=1;if(!(f<1)){var
b=g;for(;;){e[b+1]=d(c,b);var
h=b+1|0;if(f!==b){var
b=h;continue}break}}return[0,e,a]}return S(bqg)}function
L(b){if(b<0)S(bqh);return[0,X(b,a),0]}function
M(c,b){var
d=c[2],e=c[1];if(!(b<d))if(!(b<e.length-1)){var
f=X(c5(ol,b),a);mo(e,0,f,0,d);c[1]=f;return 0}return 0}function
N(d,b){var
c=b[2],e=b[1],f=e.length-1;if(0===f){b[2]=1;b[1]=[0,d];return 0}if(c===f){if(hV<=c)dq(bqi);var
g=X(c5(ol,c)*2|0,a);b[1]=g;mo(e,0,g,0,c)}b[2]=c+1|0;return b[1][c+1]=d}function
O(c,b){var
d=c[2],g=b<0?1:0,h=g||(d<=b?1:0);if(h)S(bqj);var
e=c[1];mo(e,b+1|0,e,b,(d-b|0)-1|0);var
f=d-1|0;c[2]=f;return e[f+1]=a}function
P(b){var
c=b[2]-1|0;if(c<0)S(bqk);b[2]=c;return b[1][c+1]=a}function
Q(b){var
c=b[2]-1|0;if(c<0)S(bql);var
d=b[1][c+1];b[2]=c;b[1][c+1]=a;return d}function
e(f,c,b){var
d=f[2],h=b<0?1:0;if(h)var
i=h;else
var
m=c<0?1:0,i=m||(d<(c+b|0)?1:0);if(i)S(bqm);var
g=f[1];mo(g,c+b|0,g,c,(d-c|0)-b|0);f[2]=d-b|0;var
j=d-b|0,k=d-1|0;if(!(k<j)){var
e=j;for(;;){g[e+1]=a;var
l=e+1|0;if(k!==e){var
e=l;continue}break}}return 0}function
R(g,c,b){var
d=g[2],h=b<0?1:0;if(h)var
i=h;else
var
n=c<0?1:0,i=n||(d<(c+b|0)?1:0);if(i)S(bqn);var
e=g[1],l=js(e,c,b);mo(e,c+b|0,e,c,(d-c|0)-b|0);g[2]=d-b|0;var
j=d-b|0,k=d-1|0;if(!(k<j)){var
f=j;for(;;){e[f+1]=a;var
m=f+1|0;if(k!==f){var
f=m;continue}break}}return[0,l,b]}function
T(c){var
d=c[2]-1|0,e=0;if(!(d<0)){var
b=e;for(;;){c[1][b+1]=a;var
f=b+1|0;if(d!==b){var
b=f;continue}break}}c[2]=0;return 0}function
U(m,c){var
h=c[1],i=c[2],k=i-1|0,j=0,n=0;if(k<0)var
f=j;else{var
b=n,a=j;for(;;){var
l=h[b+1];if(d(m,l)){if(a!==b)h[a+1]=l;var
g=a+1|0}else
var
g=a;var
o=b+1|0;if(k!==b){var
b=o,a=g;continue}var
f=g;break}}return e(c,f,i-f|0)}function
V(a,m,f){if(a<0)S(bqo);var
i=f[1],j=f[2],k=j-1|0;if(k<a)var
g=a;else{var
c=a,b=a;for(;;){var
l=i[c+1];if(d(m,l)){if(b!==c)i[b+1]=l;var
h=b+1|0}else
var
h=b;var
n=c+1|0;if(k!==c){var
c=n,b=h;continue}var
g=h;break}}return e(f,g,j-g|0)}return[0,c,g,h,i,L,K,j,p,q,M,N,O,P,Q,e,R,T,k,l,m,n,o,f,r,t,u,v,w,J,z,x,y,A,B,C,U,function(s,r,l,f){var
m=f[1],o=f[2],p=o-1|0,n=0,t=0;if(p<0)var
q=l,g=n;else{var
c=t,h=l,a=n;for(;;){var
i=m[c+1];if(d(s,i)){if(a!==c)m[a+1]=i;var
k=h,j=a+1|0}else
var
k=b(r,i,h),j=a;var
u=c+1|0;if(p!==c){var
c=u,h=k,a=j;continue}var
q=k,g=j;break}}e(f,g,o-g|0);return q},V,D,E,F,G,H,I,s]}var
ys=bqp([0,IF(0)]),_h=ys[34],_i=ys[1],bqq=ys[11],bqr=ys[4];function
_j(b,a){return b<a?b:a}function
_k(s){var
t=[0,0],f=IF(0),u=d(bqr,0),c=s.length-1,i=X(c,0),j=X(c,-1),e=X(c,-1);function
v(a){var
m=t[1]+1|0;t[1]=m;_g(a,f);n(j,a)[a+1]=m;n(e,a)[a+1]=m;n(i,a)[a+1]=1;var
w=n(s,a)[a+1],p=w[2]-1|0,B=w[1],C=0;if(!(p<0)){var
h=C;for(;;){var
g=B[h+1];if(0<=j[g+1]){if(i[g+1])e[a+1]=_j(e[a+1],e[g+1])}else{v(g);e[a+1]=_j(e[a+1],e[g+1])}var
D=h+1|0;if(p!==h){var
h=D;continue}break}}var
x=e[a+1]===j[a+1]?1:0;if(x){var
y=f[2],z=y-1|0,o=_f(f,z),c=z;for(;;){if(o!==a){i[o+1]=0;var
A=c-1|0,o=_f(f,A),c=A;continue}n(i,a)[a+1]=0;var
d=y-c|0,k=f[2],q=d<0?1:0;if(q)var
r=q;else
var
F=c<0?1:0,r=F||(k<(c+d|0)?1:0);if(r)S(bqa);var
l=f[1],E=js(l,c,d);gk(l,c+d|0,l,c,(k-c|0)-d|0);f[2]=k-d|0;return b(bqq,[0,E,d],u)}}return x}var
g=c-1|0,h=0;if(!(g<0)){var
a=h;for(;;){if(j[a+1]<0)v(a);var
k=a+1|0;if(g!==a){var
a=k;continue}break}}return u}function
IG(b,a){var
c=b[2].length-1-1|0;return Ys(a[2],a[1])&c}function
_l(d,a){var
j=IG(a,d),c=a[2][j+1];for(;;){if(c){var
e=c[2],f=c[1];if(cW(d,f[1]))var
b=f[2]?0:(f[2]=1,1);else
if(e){var
g=e[2],h=e[1];if(cW(d,h[1]))var
b=h[2]?0:(h[2]=1,1);else
if(g){var
i=g[1];if(!cW(d,i[1])){var
c=g[2];continue}var
b=i[2]?0:(i[2]=1,1)}else
var
b=0}else
var
b=0}else
var
b=0;if(b)a[4]=a[4]+1|0;return a[1]===a[4]?1:0}}function
IH(b,a){var
c=b[2].length-1-1|0;return Ys(a[2],a[1])&c}function
II(b,a){var
c=IH(b,a);return lO(cW,a,b[2][c+1])}function
pY(b,a){var
c=b[2].length-1-1|0;return Yt(a[1],a[2])&c}function
bW(a,c,f){var
d=pY(a,c),b=a[2];b[d+1]=[0,c,f,b[d+1]];a[1]=a[1]+1|0;var
e=b.length-1<<1<a[1]?1:0;return e?nm(pY,a):e}function
bX(b,a){var
c=pY(b,a);return HX(cW,a,b[2][c+1])}function
yt(b,a,c){var
d=pY(b,a);return HY(cW,a,c,b[2][d+1])}function
kv(a,b,f){function
d(a){if(a){var
c=a[3],e=a[1];if(cW(e,b))return[0,b,f,c];var
g=d(c);return[0,e,a[2],g]}throw l}var
e=pY(a,b),c=a[2],g=c[e+1];try{c[e+1]=d(g);var
i=0;return i}catch(d){d=j(d);if(d===l){c[e+1]=[0,b,f,g];a[1]=a[1]+1|0;var
h=c.length-1<<1<a[1]?1:0;return h?nm(pY,a):h}throw d}}function
_m(a,c){var
b=dd(w(a));aC(function(c,a){return bW(b,c,a)},a,c);return b}function
pZ(b,a){return g3(10,b6,0,a)&(b[2].length-1-1|0)}function
yu(a,c,f){var
d=pZ(a,c),b=a[2];b[d+1]=[0,c,f,b[d+1]];a[1]=a[1]+1|0;var
e=b.length-1<<1<a[1]?1:0;return e?nm(pZ,a):e}function
IJ(b,a){var
c=pZ(b,a);return HX(YR,a,b[2][c+1])}function
_n(b,a,c){var
d=pZ(b,a);return HY(YR,a,c,b[2][d+1])}function
bqs(b){var
c=b[1];function
a(c,a){var
e=c[2].length-1-1|0;return d(b[2],a)&e}function
f(b,d){var
e=a(b,d),f=b[2],h=b[1],i=YB(c,d,b,f[e+1]),g=h!==b[1]?1:0,j=g?(f[e+1]=i,0):g;return j}function
e(b,d){var
f=a(b,d),e=b[2],g=e[f+1],h=1-lO(c,d,g);if(h){e[f+1]=[0,d,g];b[1]=b[1]+1|0;var
i=e.length-1<<1<b[1]?1:0;if(i)return tb(a,b);var
j=i}else
var
j=h;return j}function
g(b){var
c=b.length-1,d=pG(c),f=c-1|0,g=0;if(!(f<0)){var
a=g;for(;;){e(d,b[a+1]);var
h=a+1|0;if(f!==a){var
a=h;continue}break}}return d}function
h(b,d){var
f=a(b,d),e=b[2],g=e[f+1];if(lO(c,d,g))return 0;e[f+1]=[0,d,g];b[1]=b[1]+1|0;if(e.length-1<<1<b[1])tb(a,b);return 1}return[0,pG,blD,blE,blF,f,e,g,h,function(d,b){var
e=a(d,b);return lO(c,b,d[2][e+1])},blH,YA,blG,blJ,blI]}function
bqt(g){function
c(b,a){var
c=b[2].length-1-1|0;return d(g[2],a)&c}var
a=g[1];function
e(a,d,g){var
e=c(a,d),b=a[2];b[e+1]=[0,d,g,b[e+1]];a[1]=a[1]+1|0;var
f=b.length-1<<1<a[1]?1:0;return f?nm(c,a):f}function
h(e,h,n,m){var
i=c(e,h),g=e[2],f=g[i+1];for(;;){if(f){if(!b(a,f[1],h)){var
f=f[3];continue}d(n,f[2]);var
j=0}else
var
j=1;if(j){var
o=g[i+1];g[i+1]=[0,h,d(m,0),o];e[1]=e[1]+1|0;var
k=g.length-1<<1<e[1]?1:0;if(k)return nm(c,e);var
l=k}else
var
l=j;return l}}function
f(e,d,c){if(c){var
g=c[3],h=c[1];if(b(a,h,e)){d[1]=d[1]-1|0;return g}var
i=f(e,d,g);return[0,h,c[2],i]}return 0}function
i(a,b){var
d=c(a,b),e=a[2],h=a[1],i=f(b,a,e[d+1]),g=h!==a[1]?1:0,j=g?(e[d+1]=i,0):g;return j}function
k(i,e){var
j=c(i,e),f=i[2][j+1];if(f){var
g=f[3];if(b(a,e,f[1]))return f[2];if(g){var
h=g[3];if(b(a,e,g[1]))return g[2];if(h){if(b(a,e,h[1]))return h[2];var
d=h[3];for(;;){if(d){if(b(a,e,d[1]))return d[2];var
d=d[3];continue}throw l}}throw l}throw l}throw l}function
m(d,b){var
e=c(d,b);return HX(a,b,d[2][e+1])}function
n(k,e){var
l=c(k,e),d=k[2][l+1];for(;;){if(d){var
f=d[3],h=d[1];if(b(a,e,h))return[0,h];if(f){var
g=f[3],i=f[1];if(b(a,e,i))return[0,i];if(g){var
j=g[1];if(b(a,e,j))return[0,j];var
d=g[3];continue}return 0}return 0}return 0}}function
o(d,b,e){var
f=c(d,b);return HY(a,b,e,d[2][f+1])}function
p(e,d){function
f(g){var
c=g;for(;;){if(c){var
e=c[3];if(b(a,c[1],d)){var
h=f(e);return[0,c[2],h]}var
c=e;continue}return 0}}var
g=c(e,d);return f(e[2][g+1])}function
q(d,e,h){function
i(c){if(c){var
d=c[3],f=c[1];if(b(a,f,e))return[0,e,h,d];var
g=i(d);return[0,f,c[2],g]}throw l}var
g=c(d,e),f=d[2],k=f[g+1];try{f[g+1]=i(k);var
n=0;return n}catch(a){a=j(a);if(a===l){f[g+1]=[0,e,h,k];d[1]=d[1]+1|0;var
m=f.length-1<<1<d[1]?1:0;return m?nm(c,d):m}throw a}}function
r(f,e){var
h=c(f,e),d=f[2][h+1];for(;;){if(d){var
g=b(a,d[1],e);if(g)return g;var
d=d[3];continue}return 0}}return[0,dd,pH,blL,blM,e,h,i,k,p,m,n,o,q,r,HV,HW,blN,blO,function(a,c){var
b=dd(w(a));aC(function(c,a){return e(b,c,a)},a,c);return b}]}function
ts(a){return[0,a,0]}function
_o(a){return[0,a,1]}function
tt(a){var
b=a[2];return typeof
b==="number"?a[1][2]:b[1]}function
bqu(b,a){var
c=b[2];if(typeof
c==="number")return cW(b[1],a[1]);var
d=a[2];return typeof
d==="number"?0:A(c[1],d[1])}var
_p=[0,bqu,function(a){var
b=a[2];if(typeof
b==="number"){var
c=a[1];return Yt(c[1],c[2])}return g3(10,b6,0,b[1])}],lS=bqt(_p),nx=bqs(_p),bqw=bqv.slice(),bqz=[0,bqy,bqx];function
_q(f,e){var
c=e[2],d=c.length-1-1|0,g=0;if(!(d<0)){var
b=g;a:for(;;){var
a=c[b+1];for(;;){if(a){p(f,a[1],a[3],a[2]);var
a=a[4];continue}var
h=b+1|0;if(d!==b){var
b=h;continue a}break}break}}return 0}function
yv(b,a){return g3(10,b6,0,a[1])&(b[2].length-1-1|0)}function
_r(e,d){var
f=yv(e,d),a=e[2][f+1];for(;;){if(a){var
b=a[4];if(cW(d,a[1]))return a[2];if(b){var
c=b[4];if(cW(d,b[1]))return b[2];if(c){if(cW(d,c[1]))return c[2];var
a=c[4];continue}return-1}return-1}return-1}}function
_s(e,d){var
f=yv(e,d),a=e[2][f+1];for(;;){if(a){var
b=a[4];if(cW(d,a[1]))return a[3];if(b){var
c=b[4];if(cW(d,b[1]))return b[3];if(c){if(cW(d,c[1]))return c[3];var
a=c[4];continue}throw l}throw l}throw l}}function
IK(f,a){function
b(D){var
a=D;for(;;)switch(a[0]){case
0:return dv(a[1],f);case
3:var
g=a[1],h=b(g[1]);return h?h:N(b,g[2]);case
4:var
a=a[1][4];continue;case
5:var
i=b(a[3]);if(i)return i;var
a=a[4];continue;case
6:var
j=b(a[2]);if(j)return j;var
E=a[1];return N(function(a){return b(a[2])},E);case
7:return N(b,a[1][2]);case
8:var
d=a[2],k=b(a[1]);if(k)var
c=k;else{var
F=d[2],l=N(function(a){return b(a[2])},F);if(l)var
c=l;else{var
G=d[4],m=N(function(a){return b(a[2])},G);if(m)var
c=m;else{var
n=d[5];if(n){var
a=n[1];continue}var
c=0}}}return c;case
9:var
o=a[3],p=b(a[1]);if(p)var
e=p;else{var
H=a[2],q=N(function(a){return b(a[2])},H);if(q)var
e=q;else{if(o){var
a=o[1];continue}var
e=0}}return e;case
10:return N(b,a[2]);case
13:var
s=b(a[1]);if(s)var
t=s;else{var
u=b(a[2]);if(!u){var
a=a[3];continue}var
t=u}return t;case
16:var
w=b(a[2]);if(w)var
x=w;else{var
y=b(a[3]);if(!y){var
a=a[5];continue}var
x=y}return x;case
17:var
z=dv(a[1],f);if(z)return z;var
a=a[2];continue;case
18:var
A=b(a[2]);if(A)var
B=A;else{var
C=b(a[3]);if(!C)return N(b,a[4]);var
B=C}return B;case
19:var
a=a[2];continue;case
1:case
2:return 0;case
11:case
12:var
r=b(a[1]);if(r)return r;var
a=a[3];continue;default:var
v=b(a[1]);if(v)return v;var
a=a[2];continue}}return b(a)}function
yw(a){var
c=[0,bV];function
b(j){var
a=j;for(;;)switch(a[0]){case
0:c[1]=bl(a[1],c[1]);return 0;case
3:var
e=a[1];b(e[1]);return m(b,e[2]);case
4:var
f=a[1];b(f[4]);var
k=f[3];return m(function(a){c[1]=iZ(a,c[1]);return 0},k);case
5:b(a[3]);b(a[4]);c[1]=iZ(a[2],c[1]);return 0;case
6:var
g=a[1];b(a[2]);m(function(a){return b(a[2])},g);return m(function(a){c[1]=iZ(a[1],c[1]);return 0},g);case
7:return m(b,a[1][2]);case
8:var
d=a[2];b(a[1]);var
l=d[2];m(function(a){return b(a[2])},l);var
n=d[4];m(function(a){return b(a[2])},n);var
h=d[5];if(h){var
a=h[1];continue}return 0;case
9:var
i=a[3];b(a[1]);var
o=a[2];m(function(a){return b(a[2])},o);if(i){var
a=i[1];continue}return 0;case
10:return m(b,a[2]);case
11:b(a[1]);b(a[3]);var
p=a[2][2];return m(function(a){c[1]=iZ(a,c[1]);return 0},p);case
12:b(a[1]);b(a[3]);c[1]=iZ(a[2],c[1]);return 0;case
13:b(a[1]);b(a[2]);var
a=a[3];continue;case
16:b(a[2]);b(a[3]);b(a[5]);c[1]=iZ(a[1],c[1]);return 0;case
17:b(a[2]);c[1]=bl(a[1],c[1]);return 0;case
18:b(a[2]);b(a[3]);return m(b,a[4]);case
19:var
a=a[2];continue;case
1:case
2:return 0;default:b(a[1]);var
a=a[2];continue}}b(a);return c[1]}function
ea(A){var
a=A;for(;;)switch(a[0]){case
3:var
e=a[1],f=ea(e[1]);return f?Z(ea,e[2]):f;case
4:var
g=a[1],h=0===g[3]?1:0;if(h){var
a=g[4];continue}return h;case
6:var
i=0===a[1]?1:0;if(i){var
a=a[2];continue}return i;case
7:return Z(ea,a[1][2]);case
8:var
c=a[2],j=ea(a[1]);if(j){var
B=c[2],k=Z(function(a){return ea(a[2])},B);if(k){var
C=c[4],l=Z(function(a){return ea(a[2])},C);if(l){var
m=c[5];if(m){var
a=m[1];continue}var
b=1}else
var
b=l}else
var
b=k}else
var
b=j;return b;case
9:var
n=a[3],o=ea(a[1]);if(o){var
D=a[2],p=Z(function(a){return ea(a[2])},D);if(p){if(n){var
a=n[1];continue}var
d=1}else
var
d=p}else
var
d=o;return d;case
10:return Z(ea,a[2]);case
11:var
q=0===a[2][2]?1:0;if(q){var
r=ea(a[1]);if(r){var
a=a[3];continue}var
s=r}else
var
s=q;return s;case
13:var
t=ea(a[1]);if(t){var
u=ea(a[2]);if(u){var
a=a[3];continue}var
v=u}else
var
v=t;return v;case
18:var
x=ea(a[2]);if(x){var
y=ea(a[3]);if(y)return Z(ea,a[4]);var
z=y}else
var
z=x;return z;case
14:case
15:var
w=ea(a[1]);if(w){var
a=a[2];continue}return w;case
17:case
19:var
a=a[2];continue;case
5:case
12:case
16:return 0;default:return 1}}var
bqD=O([I,bqC,0]);function
tu(e,c,a){if(e){if(c){var
f=c[1],h=e[2],i=e[1];switch(f[0]){case
0:if(a)if(E(i,f[1])){var
l=tu(h,c[2],a[2]);return[0,a[1],l]}break;case
7:var
d=f[1],j=d[1];if(typeof
j==="number")var
b=0;else
if(57===j[0]){var
g=d[2];if(g){var
k=g[1];if(0===k[0])if(g[2])var
b=1;else
if(a){if(E(i,k[1])){var
m=tu(h,c[2],a[2]);return[0,[7,[0,d[1],[0,a[1],0],d[3]]],m]}var
b=1}else
var
b=1;else
var
b=1}else
var
b=1}else
var
b=0;break}}}else
if(!c)if(!a)return 0;throw bqD}function
tv(a){return[0,a]}function
bw(c,b,a,d){if(4===c[0]){var
j=c[1],e=j[4],g=j[3];switch(e[0]){case
7:var
f=e[1],h=f[1];if(typeof
h==="number"){var
k=h+uG|0;if(!(7<k>>>0))if(4!==k){var
i=f[2];if(i){var
l=i[1];if(7===l[0])if(!i[2]){var
m=l[1];try{var
r=tu(g,m[2],b)}catch(e){return[3,[0,c,b,a,d]]}return[7,[0,h,[0,[7,[0,m[1],r,a]],0],a]]}}}}try{var
q=tu(g,f[2],b)}catch(e){return[3,[0,c,b,a,d]]}return[7,[0,f[1],q,a]];case
14:var
n=e[1];if(7===n[0]){var
o=e[2];if(2===o[0]){var
p=n[1];try{var
s=tu(g,p[2],b)}catch(e){return[3,[0,c,b,a,d]]}return[14,[7,[0,p[1],s,a]],o]}}break}}return[3,[0,c,b,a,d]]}function
dw(d,c,b,a){return[4,[0,d,c,b,a]]}function
f2(d,a,b){if(2===d[0]){var
c=d[1];switch(c[0]){case
1:return 0===c[1]?b:a;case
5:return J(c[1],0)?a:b;case
6:return J(c[1],bqE)?a:b;case
7:return J(c[1],0)?a:b;case
0:case
8:return 0===c[1]?b:a;default:return a}}return[13,d,a,b]}function
kw(b,a){if(2===b[0]){var
c=b[1];switch(c[0]){case
9:return th(a[5],c[1],a[4]);case
0:case
8:return th(a[5],c[1],a[2])}}return[8,b,a]}function
lT(c,e,b){if(2===c[0]){var
f=c[1];if(2===f[0]){var
a=e,g=f[1];for(;;){if(a){var
d=a[1];if(A(d[1],g))return d[2];var
a=a[2];continue}if(b)return b[1];throw[0,h,bmX]}}}return[9,c,e,b]}function
bqF(b,a){return f2(b,_t,a)}function
bqG(b,a){return f2(b,a,_u)}function
tw(c,b,a){switch(c){case
0:return E(b,a);case
1:return J(b,a);case
2:return fC(b,a);case
3:return dT(b,a);case
4:return ms(b,a);default:return ic(b,a)}}function
tx(a){return[2,[0,a]]}function
lU(a){return a?_t:_u}function
gI(a){return[2,[5,a]]}function
gJ(a){return[2,[6,a]]}function
bqH(a){return[2,[2,a]]}function
bqI(a){return[2,[1,a]]}function
C(c,l,t){function
d(a){return[7,[0,c,l,t]]}if(l){var
p=l[1];if(2===p[0]){var
m=l[2],a=p[1];if(!m){if(typeof
c==="number")switch(c){case
6:if(8===a[0])return lU(0===a[1]?1:0);break;case
7:if(0===a[0])return tx(-a[1]|0);break;case
19:if(4===a[0])return tx(gf(a[1])|0);break;case
29:if(2===a[0])return tx(r(a[1]));break}else
if(24===c[0])switch(c[1]){case
1:if(5===a[0])return gI(-a[1]|0);break;case
2:if(6===a[0])return gJ(fB(a[1]));break}return d(0)}var
q=m[1];if(2===q[0])if(!m[2]){var
b=q[1];if(typeof
c==="number")switch(c){case
4:if(8===a[0])if(8===b[0]){var
s=1===a[1]?1:0,v=s?1===b[1]?1:0:s;return lU(v)}break;case
5:if(8===a[0])if(8===b[0]){var
w=1===a[1]?1:0,x=w||(1===b[1]?1:0);return lU(x)}break;case
32:if(2===a[0])if(2===b[0])return bqH(o(a[1],b[1]));break;case
30:case
31:if(2===a[0])switch(b[0]){case
0:case
8:try{var
y=bqI(u(a[1],b[1]));return y}catch(a){return d(0)}}break;case
8:case
9:case
10:case
11:case
12:case
13:case
14:case
15:case
16:case
17:case
18:if(0===a[0])if(0===b[0]){var
e=b[1],f=a[1],g=function(a){return tx(a)};if(typeof
c==="number")if(!(19<=c))switch(c){case
8:return g(f+e|0);case
9:return g(f-e|0);case
10:return g(jy(f,e));case
11:return E(e,0)?d(0):g(Cp(f,e));case
12:return E(e,0)?d(0):g(jx(f,e));case
13:return g(f&e);case
14:return g(f|e);case
15:return g(f^e);case
16:return g(f<<e);case
17:return g(f>>>e|0);case
18:return g(f>>e)}return d(0)}break}else
switch(c[0]){case
10:switch(a[0]){case
0:case
8:switch(b[0]){case
0:case
8:return lU(tw(c[1],a[1],b[1]))}break}break;case
13:if(7===a[0])if(7===b[0])return lU(tw(c[1],a[1],b[1]));break;case
33:switch(c[1]){case
1:if(5===a[0])if(0===b[0])return gI(a[1]<<b[1]);break;case
2:if(6===a[0])if(0===b[0])return gJ(Cx(a[1],b[1]));break}break;case
34:switch(c[1]){case
1:if(5===a[0])if(0===b[0])return gI(a[1]>>>b[1]|0);break;case
2:if(6===a[0])if(0===b[0])return gJ(an9(a[1],b[1]));break}break;case
35:switch(c[1]){case
1:if(5===a[0])if(0===b[0])return gI(a[1]>>b[1]);break;case
2:if(6===a[0])if(0===b[0])return gJ(NA(a[1],b[1]));break}break;case
36:var
n=c[2];switch(a[0]){case
5:if(5===b[0])return lU(tw(n,a[1],b[1]));break;case
6:if(6===b[0])return lU(tw(n,a[1],b[1]));break;case
7:if(7===b[0])return lU(tw(n,a[1],b[1]));break}break;case
25:case
26:case
27:case
28:case
29:case
30:case
31:case
32:switch(c[1]){case
1:if(5===a[0])if(5===b[0]){var
h=b[1],i=a[1];if(typeof
c!=="number")switch(c[0]){case
25:return gI(i+h|0);case
26:return gI(i-h|0);case
27:return gI(jy(i,h));case
28:try{var
z=gI(Cp(i,h));return z}catch(a){return d(0)}case
29:try{var
A=gI(jx(i,h));return A}catch(a){return d(0)}case
30:return gI(i&h);case
31:return gI(i|h);case
32:return gI(i^h)}return d(0)}break;case
2:if(6===a[0])if(6===b[0]){var
j=b[1],k=a[1];if(typeof
c!=="number")switch(c[0]){case
25:return gJ(uQ(k,j));case
26:return gJ(qJ(k,j));case
27:return gJ(Nz(k,j));case
28:try{var
B=gJ(an5(k,j));return B}catch(a){return d(0)}case
29:try{var
C=gJ(Ny(k,j));return C}catch(a){return d(0)}case
30:return gJ(an4(k,j));case
31:return gJ(Cw(k,j));case
32:return gJ(NB(k,j))}return d(0)}break}break}return d(0)}}}return d(0)}function
IL(b,a){return C(6,[0,a,0],b)}var
_v=nx[6];function
_w(b,c,a){switch(c){case
2:return C(45,[0,a,0],b);case
3:return C(46,[0,a,0],b);case
4:return C(47,[0,a,0],b);case
5:return C(51,[0,a,0],b);case
6:return[14,a,kx];default:return a}}function
yx(d,b,a){if(b){var
c=b[1],e=c[1];if(typeof
e!=="number"&&4===e[0])if(a){var
j=yx(d,b[2],a[2]),k=j[2],l=[0,C([57,e[1]],[0,a[1],0],d),k];return[0,[0,[0,2,c[2]],j[1]],l]}if(a){var
f=b[2],g=c[1];if(typeof
g!=="number"&&3===g[0]){var
i=yx(d,f,a);return[0,[0,c,i[1]],i[2]]}var
h=yx(d,f,a[2]);return[0,[0,c,h[1]],[0,a[1],h[2]]]}}return[0,b,a]}function
_x(i){var
j=w(i),f=x4(16,j),a=[0,0,X(f,0),f],e=x4(8,j),c=[0,0,X(e,0),e,0];m(function(aa){var
b=aa[1],aj=aa[2],e=yv(a,b),k=n(a[2],e)[e+1];for(;;){if(k){var
w=k[4],W=cW(b,k[1]);if(W)var
Y=W,m=0;else
if(w){var
x=w[4],Z=cW(b,w[1]);if(Z)var
_=Z,y=1;else
if(x){var
$=cW(b,x[1]);if(!$){var
k=x[4];continue}var
l=$,m=1,y=0}else
var
_=0,y=1;if(y)var
l=_,m=1}else
var
Y=0,m=0;if(!m)var
l=Y}else
var
l=0;if(1-l){var
ah=n(a[2],e)[e+1],ai=[0,b,a[1],aj,ah];n(a[2],e)[e+1]=ai;a[1]=a[1]+1|0;if(a[2].length-1<<1<a[1]){var
R=a[2],S=R.length-1,T=S*2|0;if(T<hV){var
u=X(T,0);a[2]=u;var
V=S-1|0,af=0;if(!(V<0)){var
j=af;b:for(;;){var
d=R[j+1];for(;;){if(d){var
U=d[1],v=yv(a,U),ae=n(u,v)[v+1];u[v+1]=[0,U,d[2],d[3],ae];var
d=d[4];continue}var
ag=j+1|0;if(V!==j){var
j=ag;continue b}break}break}}}var
ab=1}else
var
ab=0}else
var
ab=0;var
M=IG(c,b),t=c[2],N=t[M+1],f=N;for(;;){if(f){var
q=f[2],A=cW(b,f[1][1]);if(A)var
B=A,o=0;else
if(q){var
r=q[2],C=cW(b,q[1][1]);if(C)var
D=C,z=1;else
if(r){var
E=cW(b,r[1][1]);if(!E){var
f=r[2];continue}var
i=E,o=1,z=0}else
var
D=0,z=1;if(z)var
i=D,o=1}else
var
B=0,o=0;if(!o)var
i=B}else
var
i=0;var
O=1-i;if(O){t[M+1]=[0,[0,b,0],N];c[1]=c[1]+1|0;var
P=t.length-1<<1<c[1]?1:0;if(P){var
F=c[2],G=F.length-1,H=G*2|0,I=H<hV?1:0;if(I){var
s=X(H,0);c[2]=s;var
K=G-1|0,ac=0;if(!(K<0)){var
h=ac;c:for(;;){var
g=F[h+1];for(;;){if(g){var
J=g[1],p=IG(c,J[1]);s[p+1]=[0,J,n(s,p)[p+1]];var
g=g[2];continue}var
ad=h+1|0;if(K!==h){var
h=ad;continue c}break}break}}var
L=0}else
var
L=I;return L}var
Q=P}else
var
Q=O;return Q}}},i);if(0===a[1])var
d=[0];else{var
b=0,o=a[2].length-1,p=a[2];for(;;){if(o<=b)throw l;var
g=p[b+1];if(!g){var
b=b+1|0;continue}var
h=X(a[1],g[1]);_q(function(b,c,a){return h[a+1]=b},a);var
d=h;break}}var
k=X(d.length-1,IF(0));_q(function(q,o,i){var
p=n(k,i)[i+1];function
b(D){var
a=D;for(;;)switch(a[0]){case
0:return _l(a[1],c);case
3:var
g=a[1],h=b(g[1]);return h?h:N(b,g[2]);case
4:var
a=a[1][4];continue;case
5:var
i=b(a[3]);if(i)return i;var
a=a[4];continue;case
6:var
j=b(a[2]);if(j)return j;var
E=a[1];return N(function(a){return b(a[2])},E);case
7:return N(b,a[1][2]);case
8:var
e=a[2],k=b(a[1]);if(k)var
d=k;else{var
F=e[2],l=N(function(a){return b(a[2])},F);if(l)var
d=l;else{var
G=e[4],m=N(function(a){return b(a[2])},G);if(m)var
d=m;else{var
n=e[5];if(n){var
a=n[1];continue}var
d=0}}}return d;case
9:var
o=a[3],p=b(a[1]);if(p)var
f=p;else{var
H=a[2],q=N(function(a){return b(a[2])},H);if(q)var
f=q;else{if(o){var
a=o[1];continue}var
f=0}}return f;case
10:return N(b,a[2]);case
13:var
s=b(a[1]);if(s)var
t=s;else{var
u=b(a[2]);if(!u){var
a=a[3];continue}var
t=u}return t;case
16:var
w=b(a[2]);if(w)var
x=w;else{var
y=b(a[3]);if(!y){var
a=a[5];continue}var
x=y}return x;case
17:var
z=_l(a[1],c);if(z)return z;var
a=a[2];continue;case
18:var
A=b(a[2]);if(A)var
B=A;else{var
C=b(a[3]);if(!C)return N(b,a[4]);var
B=C}return B;case
19:var
a=a[2];continue;case
1:case
2:return 0;case
11:case
12:var
r=b(a[1]);if(r)return r;var
a=a[3];continue;default:var
v=b(a[1]);if(v)return v;var
a=a[2];continue}}b(o);var
g=c[2],h=g.length-1-1|0,l=0;if(!(h<0)){var
f=l;a:for(;;){var
d=g[f+1];for(;;){if(d){var
e=d[1],j=e[1];if(e[2])_g(_r(a,j),p);if(e[2]){e[2]=0;c[4]=c[4]-1|0}var
d=d[2];continue}var
m=f+1|0;if(h!==f){var
f=m;continue a}break}break}}return 0},a);return[0,a,d,k]}function
bqS(a){return 4===a[2][0]?1:0}function
IM(a){return Z(bqS,a)?a:e8(function(c,b){var
a=b[2];return 4===c[2][0]?4===a[0]?0:-1:4===a[0]?1:0},a)}var
_y=O([I,brP,0]);function
ky(b,c,a){if(a){var
d=a[4],g=a[3],e=a[2],f=a[1],h=pJ(b,e);return 0===h?[0,f,b,c,d,a[5]]:0<=h?gC(f,e,g,ky(b,c,d)):gC(ky(b,c,f),e,g,d)}return[0,0,b,c,0,1]}function
IN(b,e,c,a){if(a){var
f=a[4],g=a[3],h=a[2],i=a[1],j=pJ(b,h);if(0===j){var
k=a[5];return[0,i,b,d(c,g),f,k]}return 0<=j?gC(i,h,g,IN(b,e,c,f)):gC(IN(b,e,c,i),h,g,f)}return[0,0,b,d(e,0),0,1]}function
brQ(d,c){var
a=c;for(;;){if(a){var
b=pJ(d,a[2]);if(0===b)return a[3];var
e=0<=b?a[4]:a[1],a=e;continue}throw l}}function
ty(d,c){var
a=c;for(;;){if(a){var
b=pJ(d,a[2]);if(0===b)return[0,a[3]];var
e=0<=b?a[4]:a[1],a=e;continue}return 0}}function
_z(e,d,c){var
a=d;for(;;){if(a){var
b=pJ(e,a[2]);if(0===b)return a[3];var
f=0<=b?a[4]:a[1],a=f;continue}return c}}function
yy(b,a){if(a){var
c=a[4],d=a[3],e=a[2],f=a[1],i=pJ(b,e);if(0===i)return[0,f,[0,d],c];if(0<=i){var
g=yy(b,c),j=g[3],k=g[2];return[0,pM(f,e,d,g[1]),k,j]}var
h=yy(b,f),l=pM(h[3],e,d,c);return[0,h[1],h[2],l]}return brR}function
tz(b,a){if(b){var
c=b[2],g=nn(a);if(g<=b[5]){var
d=yy(c,a);if(d[2])throw[0,_y,c];var
i=tz(b[4],d[3]),j=b[3];return pM(tz(b[1],d[1]),c,j,i)}}else
if(!a)return 0;if(a){var
e=a[2],f=yy(e,b);if(f[2])throw[0,_y,e];var
k=tz(f[3],a[4]),l=a[3];return pM(tz(f[1],a[1]),e,l,k)}throw[0,h,brS]}function
eb(P){var
a=P;for(;;)switch(a[0]){case
1:return 1;case
5:var
s=eb(a[3]);if(s){var
a=a[4];continue}return s;case
6:var
R=a[1],t=Z(function(a){return eb(a[2])},R);if(t){var
a=a[2];continue}return t;case
7:var
u=a[1],e=u[2],j=u[1],v=Z(eb,e);if(v){if(typeof
j==="number")switch(j){case
11:case
12:var
g=0;break;case
2:case
3:case
27:case
28:case
35:case
37:case
40:case
41:case
42:case
43:case
44:case
54:case
57:var
g=2;break;default:var
g=1}else
switch(j[0]){case
7:var
d=j[1][1],y=Q(d,brU);if(0<=y)if(0<y)var
b=f(d,brV)?f(d,brW)?f(d,brX)?f(d,brY)?f(d,brZ)?0:1:1:1:1:1;else
if(e){var
z=e[1];if(2===z[0]){var
A=z[1];if(0===A[0])if(1<(A[1]-1|0)>>>0)var
b=0;else{if(!e[2])return 1;var
b=0}else
var
b=0}else
var
b=0}else
var
b=0;else
if(f(d,br0))if(f(d,br1))if(f(d,br2))if(f(d,br3))if(f(d,br4))var
b=0;else
if(e){var
B=e[1];if(2===B[0]){var
C=B[1];if(0===C[0])if(0===C[1]){if(!e[2])return 1;var
b=0}else
var
b=0;else
var
b=0}else
var
b=0}else
var
b=0;else
var
b=1;else
var
b=1;else
var
b=1;else
var
b=1;return b?1:0;case
28:case
29:var
g=0;break;case
3:case
5:case
8:case
12:case
18:case
20:case
38:case
39:case
40:case
41:case
42:case
43:case
44:case
45:case
46:case
47:case
48:case
49:case
50:case
51:case
53:case
54:case
55:case
56:case
58:case
59:case
60:var
g=2;break;default:var
g=1}switch(g){case
0:if(e){var
k=e[2];if(k){var
x=k[1];if(2===x[0])if(!k[2]){var
i=x[1];switch(i[0]){case
0:return 0!==i[1]?1:0;case
5:return J(i[1],0);case
6:return J(i[1],brT);case
7:return J(i[1],0);default:return 0}}}}return 0;case
1:return 1;default:var
w=0}}else
var
w=v;return w;case
12:var
l=a[1];if(7===l[0]){var
F=l[1],m=F[1];if(typeof
m==="number")var
c=0;else
if(7===m[0])if(f(m[1][1],br5))var
c=1;else{var
n=F[2];if(n)if(2===n[1][0])if(n[2])var
c=1;else{var
o=a[3];if(13===o[0]){var
G=o[1];if(7===G[0]){var
p=G[1][2];if(p){var
H=p[1];if(0===H[0]){var
q=p[2];if(q){var
I=q[1];if(7===I[0]){var
K=I[1],r=K[1];if(typeof
r==="number")var
h=1;else
if(0===r[0])if(f(r[1][2],br6))var
c=1,h=0;else
if(K[2])var
c=1,h=0;else
if(q[2])var
c=1,h=0;else{if(E(H[1],a[2])){var
a=o[2];continue}var
c=1,h=0}else
var
h=1;if(h)var
c=1}else
var
c=1}else
var
c=1}else
var
c=1}else
var
c=1}else
var
c=1}else
var
c=1}else
var
c=1;else
var
c=1}else
var
c=0}var
D=eb(l);if(D){var
a=a[3];continue}return D;case
13:var
L=eb(a[1]);if(L){var
M=eb(a[2]);if(M){var
a=a[3];continue}var
N=M}else
var
N=L;return N;case
14:var
O=eb(a[1]);if(O){var
a=a[2];continue}return O;case
0:case
2:case
4:return 1;default:return 0}}var
_A=O([I,br7,0]);function
br8(a){throw _A}function
dx(a){try{switch(a[0]){case
2:var
b=_B(a[1]);break;case
3:var
i=a[1],k=i[2],b=_C(dx(i[1]),k);break;case
4:var
b=dx(a[1][4]);break;case
5:var
l=dx(a[4]),b=(1+dx(a[3])|0)+l|0;break;case
7:var
d=a[1],e=d[1];if(typeof
e==="number")if(3===e){var
g=d[2];if(g)if(g[2])var
c=0;else
var
f=dx(g[1]),c=1;else
var
c=0}else
var
c=0;else
if(2===e[0]){var
h=d[2];if(h)if(1===h[1][0])if(h[2])var
c=0;else
var
f=1,c=1;else
var
c=0;else
var
c=0}else
var
c=0;if(!c)var
f=_C(1,d[2]);var
b=f;break;case
10:var
m=a[2],n=1,b=G(function(b,a){return dx(a)+b|0},n,m);break;case
13:var
o=dx(a[3]),p=dx(a[2]),b=((1+dx(a[1])|0)+p|0)+o|0;break;case
14:var
q=dx(a[2]),b=dx(a[1])+q|0;break;case
17:var
b=1+dx(a[2])|0;break;case
19:var
b=dx(a[2]);break;case
0:case
1:var
b=1;break;default:var
b=br8(0)}return b}catch(a){a=j(a);if(a===_A)return hI;throw a}}function
_B(a){switch(a[0]){case
9:var
b=a[3],c=0;return G(function(b,a){return b+_B(a)|0},c,b);case
10:return w(a[1]);default:return 1}}function
_C(b,a){return G(function(b,a){return b+dx(a)|0},b,a)}function
yz(b,a){switch(b){case
0:return 0===a?1:0;case
1:return 1===a?1:0;case
2:return 2===a?1:0;case
3:return 3===a?1:0;case
4:return 4===a?1:0;default:return 5===a?1:0}}function
p0(b,a){switch(b){case
0:return 0===a?1:0;case
1:return 1===a?1:0;case
3:var