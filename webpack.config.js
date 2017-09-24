const path = require('path');

module.exports = {
  entry: './src/App.js',
  output: {
    path: path.resolve('public'),
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env'],
          plugins: ["transform-class-properties"]
        }
      },
        {
          test:/\.css$/,
          exclude: /(node_modules)/,
          use: ['style-loader','css-loader'],
        }
    ]
  },
};