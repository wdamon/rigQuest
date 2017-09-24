const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('public'),
    filename: 'app.bundle.js',
  },
  resolve: {
    modules: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react'],
          plugins: ["transform-class-properties"],
        }
      },
        {
          test:/\.css$/,
          loader: 'style-loader!css-loader',
        }
    ]
  },
};
