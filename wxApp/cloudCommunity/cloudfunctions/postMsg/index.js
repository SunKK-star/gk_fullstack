// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'lian-8glg18vb9345a675'
})

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  if (!event.contentVal || !event.titleVal) return
  const wxContext = cloud.getWXContext()
  
  try {
    return await db.collection('msg').add({
      data: {
        postTime: Date.now(),
        titleVal: event.titleVal,
        contentVal: event.contentVal,
        selectedpic: event.selectedpic,
        postBy: wxContext.OPENID,
        userInfo: event.userInfo,
        communityId: event.communityId
      }
    })
  } catch (error) {
    console.log(err);
  }
  db.collection('msg').get().then((res) => {
    msg = res
  })

  return {
    msg,
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}