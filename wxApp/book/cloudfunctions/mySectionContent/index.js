// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio') // 获取网页内容对应标签项
const superagent = require('superagent') // 发起请求
const charset = require('superagent-charset')  // 解决乱码

charset(superagent)
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = `http://yulinzhanye.in/${event.url}`
  let result = await superagent.get(serverUrl).charset('utf-8')
  let data = result.text || ''
  let $ = cheerio.load(data)
  let sectionWrap = $('.container')

  
  let name = $(sectionWrap).find('.page-title').text()
  let content = $(sectionWrap).find('#ChapterView .bd .font-large p').html()
  let pre = $(sectionWrap).find('.page-control .bd .prev').attr('href')
  let next = $(sectionWrap).find('.page-control .bd .next').attr('href')
  let catalog = $(sectionWrap).find('.slide-baidu .mod-back .bd a').eq(2).attr('href')
  return {
    name,
    content,
    pre,
    next,
    catalog
  }
}