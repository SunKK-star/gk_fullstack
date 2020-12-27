// pages/createCommunity/createCommunity.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */



    data: {
      value: '',
      communityName: '',
      selectedItem: '',
      option: [
        { text: '全部目录', value: 0 },
        { text: '动漫', value: 1 },
        { text: '电视剧', value: 2 },
        { text: '电影', value: 3 },
        { text: '金融', value: 4 },
        { text: '情感', value: 5 },
        { text: '人文自然', value: 6 },
        { text: '社会', value: 7 },
        { text: '体育', value: 8 },
        { text: '游戏', value: 9 },
        { text: '音乐', value: 10 },
      ],
      value1: 0
     
    },
    
    changeValue(e) {
      this.setData({
        selectedItem: this.data.option[e.detail].text
      })
      // console.log(this.data.selectedItem);
    },
    onChange (e) {
      this.setData({
        communityName: e.detail
      })
      // console.log(this.data.communityName);
    },
    confirmCreate (e) {
      // 判断是否存在相同的社区名字
  db.collection('community').where({
    communityName: this.data.communityName
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
          communityName: this.data.communityName,
          selectedItem: this.data.selectedItem
        }
      })
      .then(res => {
        wx.showToast({
          title: '创建成功！', //提示的内容,
          icon: 'success', //图标,
          duration: 2000, //延迟时间,
          mask: true, //显示透明蒙层，防止触摸穿透,
        });
      })
    }
  })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})