const path = require('path');

module.exports = {
  mode: 'production',
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve(__dirname, './client/public'),
    filename: 'carousel.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',
              '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
