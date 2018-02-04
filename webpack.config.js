module.exports = {
  entry: './examples/browser.bs.js',
  output: {
    filename: 'examples/browserBundle.js'
  },
  node: {
    fs: 'empty',
    child_process: 'empty'
  }
};