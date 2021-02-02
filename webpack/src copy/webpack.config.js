const {resolve} = require('path')
const HtmlWebpackPlugins = require('html-webpack-plugins')

module.exports = {
  // 入口起点
  entry: './src/index.js',
  // 输出
  output: {
    // 输出文件名
    filename: 'built.js',
    // 输出路径
    path: resolve(__dirname,"../build")
  },
  // loader的配置
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // use数组中loader执行顺序： 从右到左
          // 创建style标签，将js中的样式资源插入进去，添加到head中生效
          'style-loader',
          // 将css文件变成commonJS模块加载到JS中，里面的内容时样式字符串
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          // use数组中loader执行顺序： 从右到左
          // 创建style标签，将js中的样式资源插入进去，添加到head中生效
          'style-loader',
          // 将css文件变成commonJS模块加载到JS中，里面的内容时样式字符串
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugins({
      
    })
  ],
  mode: 'development'
}