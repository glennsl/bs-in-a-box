
# bs-in-a-box

The BuckleScript compiler stuffed into a neatly wrapped box with a bow on top, for embedding into BuckleScript apps.

Or, all-in-one BuckleScript compiler compiled to JavaScript, including the standard library and BuckleScript/Reason bindings

## Installation

Run `npm install --save glennsl/bs-in-a-box` and add `bs-in-a-box` to the `bs-dependencies` in `bsconfig.json`. 

## Example

```reason
[@bs.val] external eval : string => 'a = "";

let code  = {|
  let hello thing =
    Js.log {j|Hello $thing!|j}

  let () =
    hello "world"
|};

let result =
  BsBox.compile(code);

switch result {
| Ok({ code })       => eval(code);
| Error({ message }) => Js.log2("Error: ", message)
};
```

## Usage

Compiling and running code that does not use the standard library can be as simple as the example above. But you should
be aware that the compiler is not modular, but instead attaches itself to `window.ocaml` or `global.ocaml` and can be
interferred with by other code.

If you want to use the standard library it gets a bit more complicated. This package includes a standard library bundle
that must be evaluated in the context the compiled code will be run in. This is because the compiler will emit `require`
calls, and the standard library bundle includes a `require` polyfill/override that knows about the standard library
modules.

In a browser context it is sufficient to include the bundle in a script tag:

```html
<script src="node_modules/bs-in-a-box/vendor/stdlibBundle.js"></script>
```

In case you don't want to include all of `node_modules` in your production build, you can use `webpack`s `file-loader` to
copy the file to your `build` directory. This is the setup [rebench](https://github.com/rebench/rebench.github.io) uses,
in `webpack.config.js`:

```javascript
...
module: {
  loaders: [{
    test: /\.(png|jpg|gif|html|css)$|stdlibBundle.js$/,
    loader: 'file-loader?name=[name].[ext]'
  }],
},
...
```

Then in a web worker (written in JavaScript):

```javascript
require('../node_modules/bs-in-a-box/vendor/stdlibBundle.js');
importScripts('stdlibBundle.js');
```

If you use a script tag, you should put the `require` in your entry point module. If it's in Reason, just put this at the top:

```reason
[%%raw "require('../node_modules/bs-in-a-box/vendor/stdlibBundle.js')"];
```

Then the script tag might look like this, depending on what your output directory is:

```html
<script src="build/stdlibBundle.js"></script>
```

In a node context you can read it in as a text file and then evaluate it using `vm.runInContext` or a similar function. See
the node_sandbox example for details.

This package does not contain the Reason preprocessor (`refmt`). For bindings to that, see [bs-refmt](https://github.com/glennsl/bs-refmt)

## Licensing

The `vendor` directory contains files built from code in the BuckleScript repository. Refer to its [Licensing](https://github.com/BuckleScript/bucklescript#licensing) section. Everything else is licensed under the [MIT license](LICENSE).
