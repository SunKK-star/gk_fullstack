const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, "build"),
    // 告诉webpack不用用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node-modules/,
        use: [
          // 配置babel
          {
            loader: 'babel-loader',
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome": "58",
                      "ie": "11"
                    },
                    "corejs": "3",
                    // 使用corejs的方式 "usage" 表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            },

          },
          'ts-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'typescript',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  mode: 'production'
}