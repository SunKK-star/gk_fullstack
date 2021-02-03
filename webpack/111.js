const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口起点
  entry: './src/index.js',
  // 输出
  output: {
    // 输出文件名
    filename: 'built.js',
    // 输出路径
    path: resolve(__dirname,"build")
  },
  // loader的配置
  module: {   
        
  },
  plugins: [
    // 功能: 默认会创建一个空的hmtl文件
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'admin.html',
      template: './src/index.html'
    })
  ],
  mode: 'development'
}