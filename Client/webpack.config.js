const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/index.tsx',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: '../wwwroot/js',
    hot: true,
    publicPath: '/js',
    compress: true,
    disableHostCheck: true,
    allowedHosts: [
      '*'
    ],
    host: '0.0.0.0',
    port: 3000,
    overlay: true
  },

  plugins: [
    new CleanWebpackPlugin()
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
}