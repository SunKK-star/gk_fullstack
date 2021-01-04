// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'lian-8glg18vb9345a675'
})
const db = cloud.database()


// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('replay').where({
    communityId: event.communityId,
    msgId: event.msgId,
    commentId: event.commentId
  }).get()

}