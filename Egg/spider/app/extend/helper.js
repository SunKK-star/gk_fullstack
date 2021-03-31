// 引入第三方模块
const sd = require('silly-datetime')

module.exports = {
  formatTime() {
    // 格式化日期
    return sd.format(new Date(param), 'YYYY-MM-DD HH:mm')
  },
  returnHelperData() {
  }
}