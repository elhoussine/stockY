const path = require('path'); // require a module that has methods to get us a directory

module.exports = {
  context: __dirname,
  entry: './frontend/entry.jsx', // specify where does webpack look?
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'), // resolves path into an absolute
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        }
      },
    }]
  },
  devtool: 'source-map', // creates a bundle.js.map - without this chrome would only tell you where your errors are in the bundle file
  resolve: {
    extensions: [".js", ".jsx", "*"] // import a file - import something from 'something'
  }
};