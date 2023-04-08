npm i -D postcss ?

npm install --save-dev @babel/core @babel/preset-env babel-loader @babel/cli
npm install --save @babel/polyfill
entry: ['@babel/polyfill', './src/index.js'],
https://babeljs.io/setup#installation

npm i -D pug pug-loader

  new HTMLWebpackPlugin({
      template: './index.pug',
      filename: 'index.html'
    }),

    {
      test: /\.pug$/i,
      loader: 'pug-loader',
      exclude: /(node_modules|bower_components)/,
    }

https://realfavicongenerator.net/
https://favicomatic.com/

  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">

  нет конфликта с output, но не удаляет оригиналы
  npm i -D imagemin-webp-webpack-plugin внутри него уже есть imagemin и imagemin-webp
  const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
  plugins:
  new ImageminWebpWebpackPlugin()


  замена img на picture webp
  
  https://stackoverflow.com/questions/63962037/how-can-i-load-webp-images-after-these-are-generated-by-imagemin-webp-webpack-pl

https://stackoverflow.com/questions/44096749/webpack-load-images-from-inline-style-background-image

options: {
          sources: {
            list: [
              // All default supported tags and attributes
              "...",
              {
                tag: "div",
                attribute: "data-style",
                type: "src",
              },
            ],
          },
        },

"postcss-preset-env",
                    {                            //package.json browserlist autoprefixes
                      // browsers: []
                    },

        
import $ from "jquery";
npm i jquery