// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'lian-8glg18vb9345a675'
})

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  if (!event.commentCtx) return
  const wxContext = cloud.getWXContext()
  
  try {
    return await db.collection('comment').add({
      data: {
        commentCtx: event.commentCtx,
        postTime: Date.now(),
        communityId: event.communityId,
        msgId: event.msgId,
        msgPostBy: event.msgPostBy,
        postBy: wxContext.OPENID,
        userInfo: event.userInfo
      }
    })
  } catch (err) {
    console.log(err);
  }

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}