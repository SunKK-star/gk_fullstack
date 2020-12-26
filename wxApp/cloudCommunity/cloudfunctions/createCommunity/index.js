// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'lian-8glg18vb9345a675'
})

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {

  // 判断是否存在相同的社区名字
  db.collection('community').where({
    communityName: event.communityName
  }).get().then(res => {
    console.log(res.data);
    let nameData = res.data || []
    if (nameData.length > 0) {
      wx.showToast({
        title: '名字重复了呢！', //提示的内容,
        icon: 'success', //图标,
        duration: 2000, //延迟时间,
        mask: true, //显示透明蒙层，防止触摸穿透
      });
    } else {
      db.collection('community').add({
        data: {
          communityName: event.communityName,
          selectedItem: event.selectedItem
        }
      })
      .then(res => {
        console.log(res);
        wx.showToast({
          title: '创建成功！', //提示的内容,
          icon: 'success', //图标,
          duration: 2000, //延迟时间,
          mask: true, //显示透明蒙层，防止触摸穿透,
        });
      })
    }
  })


  

  return  db.collection('community').get()
  
}