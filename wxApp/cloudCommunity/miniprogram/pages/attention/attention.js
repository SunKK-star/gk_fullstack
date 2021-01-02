// pages/attention/attention.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: []
  },
  topages(e) {
    
    let {_id, _openid, selectedItem, picUrl, communityName} = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/communityDetail/communityDetail?selectedItem=${selectedItem}&picUrl=${picUrl}&communityName=${communityName}&_id=${_id}&_openid=${_openid}`,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db.collection('community').get()
      .then(res => {
        console.log(res.data);
        let dataArr = res.data
        this.setData({
          dataArr
        })
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