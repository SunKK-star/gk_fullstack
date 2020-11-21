// pages/myBook/myBook.js
const db = wx.cloud.database()
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    // urlParams: '/19/19374/',
    bookDetailData: [],
  },
  // 首页
  indexPage() {
    this.getMyBook(this.data.index)
  },
  // 上一页
  prePage() {
    this.getMyBook(this.data.pre) 
  },

  // 下一页
  nextPage() {
    this.getMyBook(this.data.next) 
  },
  // 尾页
  endPage() {
    this.getMyBook(this.data.end)
  },
  getMyBook(url) {
    wx.showLoading({
      title: '正在加载'
    });
    wx.cloud.callFunction({
      name: 'getMySection',
      data: {
        url: url
      }
    }).then(res => {
      wx.hideLoading();
      let {result} = res
      this.setData({
        bookDetailData: result.bookDetailData,
        pageData: result.pageData,
        lastData: result.lastData,
        index: result.index,
        pre: result.pre,
        next: result.next,
        end: result.end
      })
      wx.pageScrollTo({
        scrollTop: 0, //滚动到页面的目标位置（单位px）,
        duration: 0 //滚动动画的时长，默认300ms，单位 ms,
      });
    })
  },

  navtoUrl(e) {
    
    let {url} =  e.currentTarget.dataset
    // 已经存入书架的书，记录阅读状态

    wx.navigateTo({ url: `../myBookContent/myBookContent?url=${url}`});
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {url} = options
      this.getMyBook(url)
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