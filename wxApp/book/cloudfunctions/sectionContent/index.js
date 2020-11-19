// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio') // 获取网页内容对应标签项
const superagent = require('superagent') // 发起请求
const charset = require('superagent-charset')  // 解决乱码

charset(superagent)
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = `https://wap.biqiuge8.com/${event.url}`
  let result = await superagent.get(serverUrl).charset('gb2312')
  let data = result.text || ''
  let $ = cheerio.load(data, {decode})
  let sectionWrap = $('.read')

  
  let content = $(sectionWrap).find('.Readarea').html()
  
  let pre = $(sectionWrap).find('.Readpage').eq(1).find('#pb_prev').attr('href')
  let next = $(sectionWrap).find('.Readpage').eq(1).find('#pb_next').attr('href')
  let catalog = $(sectionWrap).find('.Readpage').eq(1).find('#pb_mulu').attr('href')
  return {
    content,
    pre,
    next,
    catalog
  }
}