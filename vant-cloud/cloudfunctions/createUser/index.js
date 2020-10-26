// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'lian-8glg18vb9345a675'

const db = cloud.database({ env }) // 指明云函数生效的环境


cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo

  // 查看user库里有没有这个openId
  const checkUser = await db.collection('user').where({
    openId: userInfo.openId
  }).get()
  if (checkUser.data.length > 0) {
    await db.collection('user').doc(checkUser.data[0]._id)
      .update({
        data: {
          avatarUal: event.avatarUal,
          nickName: event.nickName,
          sex: event.sex
        }
      })
  } else {
    const insertResult = await db.collection('user').add({
      data: {
        avatarUal: event.avatarUal,
        nickName: event.nickName,
        sex: event.sex,
        name: '',
        openId: event.openId
      }
    })
  }
}