// 加载https模块，只要有获取网站链接的操作，都需要
const https = require('https')
// 加载cheerio
const cheerio = require('cheerio')
// 加载fs
const fs = require('fs')

https.get('https://movie.douban.com/top250', (res) => {
  let html = ''
  // res.on（） 类似于addEventListener,用于监听数据  data固定
  res.on('data', (chunk) => {
    html += chunk  //数据是分段获取的
  })     
  // 监听res数据加载完成就执行我需要的效果
  res.on('end', () => {
    // console.log(html);
    const $ = cheerio.load(html)
    // 用一个数组来保存我们爬到的数据
    let allFiles = []

    $('li .item').each(function() {
      const title = $('.title', this).text()
      const star = $('.rating_num',this).text()
      const pic = $('.pic img',this).attr('src')
      allFiles.push({title, star, pic})

    })

    //生成JSON文件到本地磁盘
    fs.writeFile('./files.json', JSON.stringify(allFiles), (err) => {
      if(!err){
        console.log('文件写入完成');
      }
    })
  })
})