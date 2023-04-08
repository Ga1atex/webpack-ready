const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

let isDev = process.env.NODE_ENV.trim() === 'development';
let isProd = !isDev;

module.exports = {
  context: __dirname + '/src',
  entry: {
    main: './index.js',
    // user: './user.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[path][hash][ext][query]',
    publicPath: 'auto',
    clean: true,
  },
  devtool: isDev ? 'eval-cheap-module-source-map' : false,
  devServer: {
    port: 8081,
    static: './dist',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@scripts': path.resolve(__dirname, 'src/scripts'),
      '@mixins': path.resolve(__dirname, 'src/mixins'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new ImageMinimizerPlugin({
      test: /\.(png|jpe?g|gif|svg)$/i,
      // deleteOriginalAssets: true,
      // filename: "[path][name].webp", //conflict
      minimizerOptions: {
        plugins: [
          // "imagemin-webp"
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
          // ["svgo",  //issue: did you forget to install imagemin-svgo?
          //   {
          //     plugins: [
          //       'preset-default',
          //       {
          //         name: "removeViewBox",
          //         active: false,
          //       },
          //       {
          //         name: "addAttributesToSVGElement",
          //         params: {
          //           attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
          //         },
          //       },
          //     ],
          //   },
          // ],
        ],
      },
    }),
  ],
  module: {
    rules: [
      {                            // for html & css imgs
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {
            loader: isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  ["postcss-preset-env"],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {                                     // imports from index.js
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      // {
      //   test: /\.(jpe?g|png|gif)$/i,
      //   use: [
      //     {
      //       loader: ImageMinimizerPlugin.loader,
      //       options: {
      //         filename: 'assets/[path][hash].webp',
      //         deleteOriginalAssets: true,
      //         minimizerOptions: {
      //           plugins: ["imagemin-webp"],
      //         },
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource', //asset/inline for inline input into css
      },
    ]
  },
};
