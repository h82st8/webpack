const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: "./src/script.js",
  mode: "production",
  module: {
    rules: [

      // images loader
      {
        test: /\.(png|jpe?g|webp|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: "images",
            name: '[name].[ext]',
          }
        }]
      },

      // fonts loader
      {
        test: /\.(woff2?)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: "fonts",
            name: '[name].[ext]',
          }
        }]
      },

      // scss & css loader
      {
        test: /\.(s[ca]ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style-[hash:4].css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
    })
  ],
};
