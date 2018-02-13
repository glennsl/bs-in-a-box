
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

### Standard Library

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

### Bundling

The compiler has been tested to work with `webpack`, but requires a tiny bit of configuration because it depends on a few
ndoe modules in code paths that aren't actually used in practice. To stub these out, just put the following in your
`webpack.config.js`:

```javascript
  node: {
    fs: 'empty',
    child_process: 'empty'
  }
```

### Load external modules

Using external modules requires two components, the type information to use at compile-time, and the js-compiled module
to use at runtime.

#### Compile-time

The type information will be retrieved from the `.cmi` and `.cmj` compilation artifacts, which needs to be encoded using
[scripts/bin2js.js](https://github.com/glennsl/bs-in-a-box/blob/master/scripts/bin2js.js) and then loaded into the compiler
using `BsBox.loadModule`:

```reason
BsBox.loadModule(
  ~name="MyExternal",
  ~cmi=[%raw {|"Caml1999I017\x84\x95\xa6\xbe\0\0\0f\0\0\0\x19\0\0\0V\0\0\0Q\xa0*MyExternal\xa0\xa0\xb0\x01\x03\xf3%hello@\xc0\xb0\xc1 \xb0\xb3\x90\xb0C&string@@\x90@\x02\x05\xf5\xe1\0\0\xfc\xb0\xb3\x90\xb0C&string@@\x90@\x02\x05\xf5\xe1\0\0\xfd@\x02\x05\xf5\xe1\0\0\xfe@\xb0\xc0&_none_A@\0\xff\x04\x02A@@\x84\x95\xa6\xbe\0\0\0\xf3\0\0\0(\0\0\0\x90\0\0\0w\xa0\xa0*MyExternal\x900\x02LzF\xe5\xf4\xb2\xdc|\xa1\xf5\xde3\xe4\xdf\"\xa0\xa0&String\x900e\x90\x7f\x1d\xde\xc3+\xe4\xc8\xa1\x90\x07\x91p\xe0\xf1\xa0\xa0*Pervasives\x900\r\x01ZZ!6e\x9b\r\xe41\xbe\x7f\x15E\xbe\xa0\xa0)Js_string\x900GV\xce|\x10H7Ib\x80\x9b\xb5F\".u\xa0\xa0%Js_re\x9006s\xb2X\x9a=\x93\xf6=\x05#\0\xa2\r\xd3f\xa0\xa0(Js_array\x900\x92\x1e\xbe\x88=\x94\xf1y@\x9d\x98\xefN\xd6\xdc\x0f\xa0\xa0\"Js\x900\xd3g\x87\x88u\xa2\xf2\xe6\x1b\xad\xa9\xc5\x81\x85lF\xa0\xa08CamlinternalFormatBasics\x900\x8b\x06\x9f\xca\x1eM\x93\x16\xb5\x88\xe5UO8\xbb$@\x84\x95\xa6\xbe\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0@%"|}],
  ~cmj=[%raw {|"Caml1999I017\x84\x95\xa6\xbe\0\0\0D\0\0\0\x10\0\0\x008\0\0\x004\xa0*MyExternal\xa0\xa0\xb0\x01\x03\xf1%hello@\xc0\xb0\xb3\x90\xb0C&string@@\x90@\x02\x05\xf5\xe1\0\0\xfe@\xb0\xc0&_none_A@\0\xff\x04\x02A@@\x84\x95\xa6\xbe\0\0\0l\0\0\0\x0f\0\0\0:\0\0\0/\xa0\xa0*MyExternal\x900\xb3K@\b]?\xb6}\xec\xe1Q\xf5\x97\xb9\xe4\x06\xa0\xa0*Pervasives\x900\r\x01ZZ!6e\x9b\r\xe41\xbe\x7f\x15E\xbe\xa0\xa08CamlinternalFormatBasics\x900\x8b\x06\x9f\xca\x1eM\x93\x16\xb5\x88\xe5UO8\xbb$@\x84\x95\xa6\xbe\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0@%"|}]
);
```

#### Runtime

The js artifact needs to be bundled in such a way that it can be accessed via `require`. This can either be accomplished
using browserify, which requires the compiled modules to be in amdjs format, or you can provide your own require function
like the [external_module](https://github.com/glennsl/bs-in-a-box/blob/master/examples/external_module.re) example does.

## Licensing

The `vendor` directory contains files built from code in the BuckleScript repository. Refer to its [Licensing](https://github.com/BuckleScript/bucklescript#licensing) section. Everything else is licensed under the [MIT license](LICENSE).


## Acknowledgement

Thanks to [Hongbo Zhang](https://github.com/bobzhang) for creating the BuckleScript compiler, and [Alessandro Strada](https://github.com/astrada) for figuring out and doing the necessary work to be able to include external modules.
