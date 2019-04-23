const path = require('path');
module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'Source/index'),
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: "bundle.js",
    chunkFilename: '[name].js',
    library: 'osg'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, 'app')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          ["@babel/env", {
            "targets": {
              "browsers": "last 2 chrome versions"
            }
          }]
        ]
      }
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    openPage: "index.html",
    inline: true,
    port: 8080,
  }
};