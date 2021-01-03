// pages/communityDetail/communityDetail.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    communityDetail: {},
    showdetail: true,
    msgArr: [],
    isMoreThenOne: false
  },
  showpost() {
    this.setData({
      showdetail: !this.data.showdetail 
    })
  },
  // 取到帖子详情页面
  backtoshow() {
    this.setData({
      showdetail: !this.data.showdetail
    })
    const self = this;
    wx.showLoading({
      title: '正在加载...',
    })
    wx.cloud.callFunction({
      name: 'getMsg',
      data: {
        communityId: this.data.communityDetail._id
      },
    }).then(res => {
      let msgArr = res.result.data;
      self.setData({
        msgArr
      })
      wx.hideLoading({
        complete: (res) => { },
      })
      console.log(self.data.msgArr);
    })
  },
  toMsgDetail(e) {
    let {_id, communityId, contentVal, postBy, postTime, selectedpic, titleVal, userInfo} = e.currentTarget.dataset.msgarr;
    let {avatarUrl, nickName} = userInfo
    wx.navigateTo({ url: `/pages/msgDetail/msgDetail?msgId=${_id}&communityId=${communityId}&contentVal=${contentVal}&postBy=${postBy}&postTime=${postTime}&selectedpic=${selectedpic}&titleVal=${titleVal}&avatarUrl=${avatarUrl}&nickName=${nickName}`});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let communityDetail = { ...options }
    // console.log(communityDetail);
    this.setData({
      communityDetail
    })
    const self = this;
    wx.showLoading({
      title: '正在加载...',
    })
    wx.cloud.callFunction({
      name: 'getMsg',
      data: {
        communityId: communityDetail._id
      },
    }).then(res => {
      let msgArr = res.result.data;
      self.setData({
        msgArr
      })
      
      // console.log(self.data.msgArr);
      wx.hideLoading({
        complete: (res) => { },
      })
      // console.log(self.data.msgArr);
    })
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