// pages/bookCity/bookCity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
      this.getList()
  },
  getList() {
      wx.showLoading({
          title: '正在加载', // 内容
          success: (res) => {

          }
      });
      wx.cloud.callFunction({
              name: 'getList',
              data: {}
          })
          .then(res => {
              console.log(res);
              wx.hideLoading()
              const result = res.result || {}
              this.setData({
                hotData: result.hotData
              })
          })
  }

})
