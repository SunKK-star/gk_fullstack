// pages/list/list.js
const db = wx.cloud.database()
var app =  getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookItem: [],
    mylikeList: [
      {name: '花嫁(阴雷篇)', url: '/12/12369/'},
      {name: '花嫁(窃脂篇)', url: '/12/12639/'},
      {name: '花嫁(拾棘篇)', url: '/16/16373/'},
      {name: '逍遥小散仙(23卷)', url: '/19/19374/'},
      {name: '逍遥小散仙(1-16)', url: '/6/6589/'},
      {name: '逍遥小散仙(17卷)', url: '/7/7212/'},
      {name: '逍遥小散仙(18卷)', url: '/8/8224/'},
      {name: '逍遥小散仙(19卷)', url: '/9/9530/'},
      {name: '逍遥小散仙(20卷)', url: '/13/13740/'},
      {name: '逍遥小散仙(21卷)', url: '/15/15324/'},
      {name: '逍遥小散仙(22卷)', url: '/17/17160/'},
      {name: '娱乐春秋(未删减)', url: '/12/12747/'},
      {name: '妖刀记(1-44卷)', url: '/4/4628/'},
      {name: '妖刀记(45-46卷)', url: '/6/6791/'},
      {name: '妖刀记(47卷)', url: '/8/8335/'},
      {name: '妖刀记(48卷)', url: '/8/8847/'},
      {name: '妖刀记(49卷)', url: '/9/9473/'},
      {name: '妖刀记(45卷)', url: '/10/10330/'},
      {name: '广陵传', url: '/7/7113/'},
      {name: '琼明神女录', url: '/7/7614/'},
      {name: '仙子下地狱', url: '/10/10455_6/'},
      {name: '山海图', url: '/14/14295/'},
      {name: '仙子蒙尘传', url: '/3/3820/'},
      {name: '仙绿妙语', url: '/9/9374/'},
      {name: '烽火烟波楼', url: '/8/8553/'},
      {name: '利娴庄', url: '/2/2295/'},
      {name: '欲望后宫传奇录', url: '/4/4830/'},
      {name: '母上攻略', url: '/14/14102/'},
      {name: '朱颜血（精装版）', url: '/10/10294/'},
      {name: '风雨里的罂粟花', url: '/2/2208/'},
      {name: '与母亲的二十年', url: '/5/5916/'}
    ]
  },
  getBookItem() {
    // 获取数据库数据
    db.collection('book').get()
    .then((res) => {
      console.log(res);
      this.setData({
        bookItem: res.data
      })
    })
  },

  outBook(e) {
    const {name} = e.currentTarget.dataset
    db.collection('book').where({
      _openid: app.globalData.openid,
      bookName: name
    }).get().then((res) => {
      console.log(res);
      let data = res.data || []
      if(data.length > 0) {
        let id = data[0]._id || ''
        db.collection('book').doc(id).remove({
          success: res => {
            wx.showToast({
              title: '移出成功', //提示的内容,
              icon: 'success', //图标,
              duration: 2000, //延迟时间,
              mask: true, //显示透明蒙层，防止触摸穿透,
            });
          },
        })
      }
    })
  },

  navTo(e) {
      
  },

  handlebook(e) {
    let {url} = e.currentTarget.dataset
    wx.navigateTo({ url: `../myBook/myBook?url=${url}` });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBookItem()
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