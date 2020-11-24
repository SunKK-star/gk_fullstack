// pages/bookContent/bookContent.js

const db = wx.cloud.database()
const app =  getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sectionName: '',
    preChapter: '',
    nextChapter: '',
    catalog: '',
    contentH: '',
    preAble: true,
    nextAble: true
  },

  getSectionContent(url) {
    wx.showLoading({
      title: '正在加载', //提示的内容,
      mask: true, //显示透明蒙层，防止触摸穿透,
    });
    wx.cloud.callFunction({
      name: 'sectionContent',
      data: {
        url: url
      }
    }).then(res => {
      wx.hideLoading();
      console.log(res);
      let {result} = res
      this.setData({
        preChapter: result.pre,
        nextChapter: result.next,
        catalog: result.catalog,
        contentH: result.content,
        preAble: result.pre?true:false,
        nextAble: result.next?true:false
      })
      wx.pageScrollTo({
        scrollTop: 0, //滚动到页面的目标位置（单位px）,
        duration: 0 //滚动动画的时长，默认300ms，单位 ms,
      });
    })
  },

  prePage() {
    if(!this.data.preAble) return
    this.getSectionContent(this.data.preChapter)
    this.joinBook(this.data.preChapter)
  },

  nextPage() {
    if(!this.data.nextAble) return
    this.getSectionContent(this.data.nextChapter)
  },
  catalog() {
    this.getSectionContent(this.data.catalog)
  },
  // 更新最新看的章节
  joinBook(url) {
    db.collection('book').where({
      _openid: app.globalData.openid
    }).get().then(res => {
      const data = res.data || []
      if(data.length > 0) {
        if(data[0].bookUrl !== url) {
          const id = data[0]._id || ''
          db.collection('book').doc(id).update({
            data: {
              bookUrl: url
            }
          }).then(res => {
            console.log(res);
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {url, name, imgUrl} = options
    this.setData({
      sectionName: name

    })
    this.getSectionContent(url)
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