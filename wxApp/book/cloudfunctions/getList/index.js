    // 云函数入口文件
    const cloud = require('wx-server-sdk')
    const rp = require('request-promise') //http模块
    const cheerio = require('cheerio') //获取网页对应标签内容项
    let charset = require('superagent-charset') //解决乱码
    let surperagent = require('superagent') //发起请求

    charset(surperagent) //用charset解决surperagent请求乱码
    cloud.init()

    // 云函数入口函数
    exports.main = async(event, context) => {
        let serverUrl = "https://wap.biqiuge8.com/"
            //result
        const result = await surperagent.get(serverUrl).charset('gb2312') //取决网页编码
        const data = result.text || ''
        const $ = cheerio.load(result.text)
        // 热门推荐
        let hotList = $('.hot').find('.image')
        let hotData = [] //热榜
        for (let i = 0; i < hotList.length; i++) {
            let obj = {};
            obj['url'] = $(hotList[i]).find('a').attr('href')
            obj['imgUrl'] = $(hotList[i]).find('img').attr('src')
            obj['name'] = $(hotList[i]).find('img').attr('alt')
            obj['author'] = $(hotList[i]).next().find('dt').find('span').text()
            obj['detail'] = $(hotList[i]).next().find('dd').text()
            hotData.push(obj)
        }

        // 分类推荐
        let classifyData = [] // 分类
        let classifyList = $('.block')
        for (let i = 0;i < classifyList.length; i++) {
            let obj = {}
            let childrenData = []
            let dom = $(classifyList[i]).find('.lis').find('li')
            for(let j = 0;j < dom.length; j++) {
                let childObj = {}
                childObj['name'] = $(dom[j]).find('.s2').find('a').text()
                childObj['url'] = $(dom[j]).find('.s2').find('a').attr('href')
                childObj['author'] = $(dom[j]).find('.s3').text()
                childrenData.push(childObj)
            }
            obj['classifyList'] = $(classifyList[i]).find('h2').text()
            obj['data'] = childrenData
            classifyData.push(obj)
        }

        return {
            hotData,
            classifyData
        }
    }
