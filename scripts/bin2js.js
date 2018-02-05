// Based on https://github.com/astrada/reason-react-playground/blob/source/compiler/bin2js.js, which is itself based a piece of code from js_of_ocaml

'use strict';

function serializeBinary(binContent) {
  var binLength = binContent.length;

  var arrayStr1 = [];
  for (var i = 0; i < 256; i++) {
    arrayStr1.push(String.fromCharCode(i));
  }
  var arrayConv = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

  var output = "";

  for(var i = 0 ,i_finish = binLength - 1 | 0; i <= i_finish; ++i){
    var c = binContent.charCodeAt(i);
    var exit = 0;
    if (c >= 32) {
      if (c >= 127) {
        if (c >= 128) {
          output += "\\x";
          output += arrayConv[(c >>> 4)];
          output += arrayConv[c & 15];
        } else {
          exit = 1;
        }
      } else if (c !== 92) {
        if (c === /* "\"" */34) {
          output += "\\";
          output += arrayStr1[c];
        } else {
          output += arrayStr1[c];
        }
      } else {
        output += "\\\\";
      }
    } else if (c >= 14) {
      exit = 1;
    } else {
      switch (c) {
        case 0 : 
            if (i === (binLength - 1 | 0) || binContent.charCodeAt(i + 1 | 0) < /* "0" */48 || binContent.charCodeAt(i + 1 | 0) > /* "9" */57) {
              output += "\\0";
            } else {
              exit = 1;
            }
            break;
        case 8 : 
            output += "\\b";
            break;
        case 9 : 
            output += "\\t";
            break;
        case 10 : 
            output += "\\n";
            break;
        case 1 : 
        case 2 : 
        case 3 : 
        case 4 : 
        case 5 : 
        case 6 : 
        case 7 : 
        case 11 : 
            exit = 1;
            break;
        case 12 : 
            output += "\\f";
            break;
        case 13 : 
            output += "\\r";
            break;
        
      }
    }
    if (exit === 1) {
      output += "\\x";
      output += arrayConv[(c >>> 4)];
      output += arrayConv[c & 15];
    }
    
  }

  return output;
}

exports.serializeBinary = serializeBinary;
/* fs Not a pure module */

if (require.main === module) {
  const fs = require('fs');
  const {
    stdin,
    stdout 
  } = require('process');

  let file = process.argv[2];

  if (file) {
    let content = fs.readFileSync(file, 'binary');
    let output = serializeBinary(content);
    process.stdout.write(output);
  } else {
    let content;
		stdin.setEncoding('binary');

		stdin.on('readable', () => {
			let chunk;

			while (chunk = stdin.read()) {
				content += chunk;
			}
		});

		stdin.on('end', () => {
      let output = serializeBinary(content);
      process.stdout.write(output, 'ascii');
    });
  }
}