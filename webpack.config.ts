import path from "path";
import webpack from "webpack";
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config: webpack.Configuration = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
            {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
      alias: {
    api: path.resolve(__dirname, './src/api'),
    app: path.resolve(__dirname, './src/app'),
    components: path.resolve(__dirname, './src/components'),
    features: path.resolve(__dirname, './src/features'),
    pages: path.resolve(__dirname, './src/pages'),
    layout: path.resolve(__dirname, './src/layout'),
    utils: path.resolve(__dirname, './src/utils'),
    styles: path.resolve(__dirname, './src/styles.scss'),
    themes: path.resolve(__dirname, './src/themes.ts'),
    translations: path.resolve(__dirname, './src/translations.json'),
  }
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 4000,
  },
  plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
new CopyWebpackPlugin({
            patterns: [
                { from: 'public' }
            ]
        }),
 new webpack.DefinePlugin({
            'process.env.PLAIN_HMR': JSON.stringify('true'),
            'process.env.NODE_ENV': JSON.stringify('development'),
        })

    ]
};

export default config;