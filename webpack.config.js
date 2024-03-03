const path = require('path');

module.exports = {
  mode: 'development', // or 'production' for production build
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
};
