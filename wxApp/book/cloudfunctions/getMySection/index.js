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
  let result = await superagent.get(serverUrl).charset('gb2312')
  let data = result.text || ''
  let $ = cheerio.load(data)
  let sectionWrap = $('.container')


  let bookDetailData = {} // 本书详情
  bookDetailData['name'] = $(sectionWrap).find('.detail .column-2 .right h1').text()
  bookDetailData['imgurl'] = 'https://imgsa.baidu.com/forum/w%3D580%3B/sign=bc6b3493913df8dca63d8f99fd2a738b/0eb30f2442a7d9330431de17a34bd11373f0013c.jpg';
  bookDetailData['status'] = '连载' //状态
  bookDetailData['lastTime'] = '未知'
  bookDetailData['lastSection'] = $('.chapter-list').eq(0).find('.bd .list').find('li').eq(0).find('a').text() //最新章节
  bookDetailData['lastSectionUrl'] = $('.chapter-list').eq(0).find('.bd .list').find('li').eq(0).attr('href') //最新章节地址
  bookDetailData['bookDetail'] = $(sectionWrap).find('.book-intro .bd').text()  //小说介绍

  // 上一页和下一页地址
  let index = $(sectionWrap).find('.page .pagelistbox .page').find('.indexPage').attr('href')
  let pre = $(sectionWrap).find('.page .pagelistbox .page').find('.prePage').attr('href') || '';
  let next = $(sectionWrap).find('.page .pagelistbox .page').find('.nextPage').attr('href') 
  let end = $(sectionWrap).find('.page .pagelistbox .page').find('.endPage').attr('href')
  
  // 取到所有的分页
  let pageArray = []
  const pageNum = $('.listpage').find('.middle').find('select').find('option');
  for (let j = 0; j < pageNum.length;j++){
    let obj = {};
    obj['name'] = $(pageNum[j]).attr('value');
    obj['num'] = j+1;
    pageArray.push(obj);
  }
  
  // 取最新章节
  const lastsection = $('.chapter-list').eq(0).find('.bd .list').find('li')
  let lastData = []
  for (let i = 0; i < lastsection.length; i++) {
    let obj = {}
    obj['sectionName'] = $(lastsection[i]).find('a').text()
    obj['sectionUrl'] = $(lastsection[i]).find('a').attr('href')
    lastData.push(obj)
  }

  // 本页章节
  const pagesection = $('.chapter-list').eq(1).find('.bd .list').find('li')
  let pageData = [];
  for (let i = 0; i < pagesection.length; i++) {
    let obj = {};
    obj['sectionName'] = $(pagesection[i]).find('a').text();
    obj['sectionUrl'] = $(pagesection[i]).find('a').attr('href');
    pageData.push(obj);
  }
  return {
    bookDetailData,
    pageData,
    lastData,
    index,
    pre,
    next,
    end
  }
}