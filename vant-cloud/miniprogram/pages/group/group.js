// miniprogram/pages/group/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupList: [
      {
        createBy: {
          avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJxcn8jmPIKryYFcVanCeEwwV8E7hVhxTEaMggWA60zTJ26ea1fgwuWc4L8HnjmozKEPxTO1UqS8g/132",
          createTime: "2020-10-26T08:10:35.109Z",
          name: "",
          nickName: "蜗牛先笙",
          openId: "o-acn47o_Gj7t_-0WqsuQ6HouUvU",
          sex: 1,
          _id: "c54bd3a25f96847b01a88a0344b9c8a2",
        },
        createTime: "2020-10-26T06:41:06.952Z",
        deleted: false,
        name: "啦啦啦啦啦啦啦",
        relateUserGroupId: "e656fa635f966f83020a8fbf205326ec",
        updateTime: "2020-10-26T06:41:06.952Z",
        _id: "8e5be7055f966f830254f88274de6820",
      },
      {
        createBy: {
          _id: "c54bd3a25f96847b01a88a0344b9c8a2",
          avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJx…TEaMggWA60zTJ26ea1fgwuWc4L8HnjmozKEPxTO1UqS8g/132", 
          nickName: "蜗牛先笙", 
          sex: 1, 
          name: "",
          openId: "o-acn47o_Gj7t_-0WqsuQ6HouUvU",
          sex: 1,
          _id: "c54bd3a25f96847b01a88a0344b9c8a2"
        },
        createTime: "2020-10-23T08:34:05.185Z",
        deleted: false,
        name: "再次拼单",
        relateUserGroupId: "e373396c5f92957d01da0f03182a7481",
        updateTime: "2020-10-23T08:34:05.185Z",
        _id: "d81cd5415f92957d019ac27e26f2ca6f",
      }
    ]

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
    const self = this
    wx.showNavigationBarLoading()
    wx.cloud.callFunction({
      name: 'getGroup',
      data: {},
      success(res) {
        console.log(res);
        // ....
        self.setData({
          groupList: res.returnResult
        })
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        wx.hideNavigationBarLoading()
      }
    })
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