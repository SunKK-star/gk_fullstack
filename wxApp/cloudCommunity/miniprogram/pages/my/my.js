// miniprogram/pages/my/my.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '/icons/头像.png',
    nickName: ''
  },
  change() {
    db.collection('comment')
          .doc('ce805e785ff18e3f0317b7e90d5d39f0').get().then(res => {
            let {replyArr} = res.data
            let newArr = replyArr.concat([{'dsada': 5,'b': 2}])
            db.collection('comment')
            .doc('b45a21d55ff18e20036ccf1a7cb33e17').update({
              // data 传入需要局部更新的数据
              data: {
                // 表示将 done 字段置为 true
                replyArr: newArr
              }
            })
            .then(res => {
              console.log(res);
            })
            .catch(console.error)
          })
    // .update({
    //   // data 传入需要局部更新的数据
    //   data: {
    //     // 表示将 done 字段置为 true
    //     image: true,
    //     asdads: 'fdsfasfdssafasfafsafafafaf',
    //     b: {
    //       a:'dsfsa',
    //       b:'fasa'
    //     }
    //   }
    // })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(console.error)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getUserInfo(e) {
    let { avatarUrl, nickName } = e.detail.userInfo
    this.setData({
      avatarUrl,
      nickName
    })
  },
  // 进入关注的圈子界面
  handleAttention() {
    wx.navigateTo({ url: '/pages/attention/attention' });
  },
  onLoad: function (options) {

    // console.log(app.globalData);

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