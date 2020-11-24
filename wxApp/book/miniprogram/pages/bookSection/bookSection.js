// pages/bookSection/bookSection.js
 
const db = wx.cloud.database()
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookDetailData: {},
    lastData: [],
    pageData: [],
    pageArray: [],
    page: 1,
    pre: '',
    next: '',
    preAble: false,
    nextAble: false
  },
  // 上一页
  prePage() {
    if(this.data.preAble) return
    this.getSection(this.data.pre) 
  },

  // 下一页
  nextPage() {
    if(this.data.nextAble) return
    this.getSection(this.data.next) 
  },

  //加入书架
  joinBook(e) {
    let {url} =  e.currentTarget.dataset
    if(url) {
      db.collection('book')
      .where({
        userId: app.globalData.openid,
        bookName: this.data.bookDetailData.name
      })
      .get()
      .then(res => {
        console.log(res);
        let data = res.data || []
        if(data.length > 0) {
          if(data[0].bookUrl !== url ) {
            const id = data[0]._id || ''
            db.collection('book').doc(id).update({
              data: {
                bookUrl: url 
              }

            }).then(res => {console.log(res);})
          }
        } 
      })
    }
    db.collection('book').where({
      userId: app.globalData.openid,
      bookName: this.data.bookDetailData.name
    }).get().then(res => {
      console.log(res);
      const data = res.data[0] || []
      if(data.length == 0) {
        db.collection('book').add({
          data: {
            userId: app.globalData.openid,
            bookName: this.data.bookDetailData.name,
            bookUrl: url,
            imgUrl: this.data.bookDetailData.imgurl,
            lastRead: this.data.pageData[0].sectionName,
            author: this.data.bookDetailData.author,
            lastSection: this.data.bookDetailData.lastSection
          }
        }).then(res => {
          // console.log(res);
          wx.showToast({
            title: '加入书架成功', //提示的内容,
            icon: 'success', //图标,
          },3000);
        })
      }else {
        wx.showToast({
          title: '本书已在书架', //提示的内容,
          icon: 'none', //图标,
        });
      }
    })
  },
  navtoUrl(e) {
    
    let {url,name} =  e.currentTarget.dataset
    // 已经存入书架的书，记录阅读状态
    db.collection('book')
    .where({
      _openid: app.globalData.openid,
      bookName: this.data.bookDetailData.name
    })
    .get()
    .then((res) => {
      let data = res.data || []
      if(data.length > 0) {
        if(data[0].bookUrl !== url) {
          const id = data[0]._id || ''
          db.collection('book').doc(id)
          .update({
            data: {
              bookUrl: url,
              lastRead: name
            }
          }).then(res =>{
            // console.log(res);
          })
        }
      }
    })

    wx.navigateTo({ url: `../bookContent/bookContent?url=${url}$sname=${name}&name=${this.data.bookDetailData.name}&img=$${this.data.bookDetailData.imgUrl}` });
  },
  bindPickerChange(e) {
    console.log(e);
    let page = parseInt(e.detail.value)
    if(page != this.page) {
      this.setData({
        page: page + 1
      })
      this.getSection(this.data.pageArray[page].name)
    }
  },
  getSection(url) {
    wx.showLoading({
      title: '正在加载'
    });
    wx.cloud.callFunction({
      name: 'bookSection',
      data: {
        url: url
      }
    }).then(res => {
      console.log(res);
      wx.hideLoading();
      const {result} = res
      this.setData({
        bookDetailData: result.bookDetailData,
        lastData: result.lastData,
        pageData: result.pageData,
        pageArray: result.pageArray,
        pre: result.pre,
        next: result.next,
        preAble: result.pre === ''? true: false,
        nextAble: result.next === ''? true: false,
        // page: result.next.split('/')[2] - 1
        page: result.next.split('/')[2] - 1
      })
    })
      
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {url} = options
    console.log(url);
    this.getSection(url)
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