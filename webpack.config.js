var path = require('path');

var entryPointsPathPrefix = './src';
module.exports = {
  mode: 'production', // change to 'development' to disable minimization and optimization the output. see: https://webpack.js.org/configuration/mode/
  entry: {
    one: `${entryPointsPathPrefix}/action-one.js`,
    two: `${entryPointsPathPrefix}/action-two.js`,
  },
  optimization: {
    usedExports: true, // enables tree shaking. see: https://webpack.js.org/guides/tree-shaking/
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'action-[name].bundle.js'
  }
};
