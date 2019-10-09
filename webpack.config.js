module.exports = {
  mode: 'production',
  entry: './src/hayaimori.js',
  output: {
    filename: 'hayaimori.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {},
      },
    ],
  },
};
