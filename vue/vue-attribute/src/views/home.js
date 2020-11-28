const addLog = {
  updated () {
    console.log('数据发生变化了')
  }
}

const app = {
  created () {
    console.log('我是扩展的created')
  }
}

module.exports = { addLog, app }
