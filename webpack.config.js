const path = require('path');

module.exports = {
  entry: './public/mmd/index.ts',
  mode:"development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './public/mmd/dist'),
    publicPath: ''
  },
  plugins: []
};