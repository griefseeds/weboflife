var path = require("path");

module.exports = {
  mode: "development",
  entry: {
    content_script: "./src/App.bs.js",
    popup: "./src/popup/Index.bs.js"
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.bs.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.bs.js']
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
