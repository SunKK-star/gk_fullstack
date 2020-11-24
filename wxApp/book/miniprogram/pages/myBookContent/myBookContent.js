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
    nextAble: true,
    restChapter: [],
    isActive: false
  },

  getSectionContent(url, index ) {
    wx.showLoading({
      title: '正在加载', //提示的内容,
    });
    wx.cloud.callFunction({
      name: 'mySectionContent',
      data: {
        url: url
      },
    //   header: {
    //     'content-type': 'application/xhtml+xml'
    // },
    }).then(res => {
      console.log(res, index);
      wx.hideLoading();
      let {result} = res
      let restcap = result.restchapter
      restcap[0].isActive = true
      restcap.forEach((v, i) => {
        if(index !== undefined) {
          i === index?v.isActive=true:v.isActive=false
        }
      })
      // for(let i = 0; i < restcap.length;i++){
      //   if(index === undefined) restcap[0].isActive = true
      //   else {
      //     if( i===index) {
      //       restcap[i].isActive = true
      //     }
      //   }
      // }
      this.setData({
        preChapter: result.pre,
        nextChapter: result.next,
        catalog: result.catalog,
        contentH: this.Change(result.content).replace(/\<img/gi, '<img class="api-editor-pic" mode="widthFix"'),
        sectionName: result.name,
        restChapter: result.restchapter,
        
      })
      wx.pageScrollTo({
        scrollTop: 0, //滚动到页面的目标位置（单位px）,
        duration: 0 //滚动动画的时长，默认300ms，单位 ms,
      });
    })
  },

  prePage() {
    this.getSectionContent(this.data.preChapter)
    this.joinBook(this.data.preChapter)
  },

  nextPage() {
    this.getSectionContent(this.data.nextChapter)
  },
  handleCatalog() {
    wx.navigateTo({ url: `../myBook/myBook?url=${this.data.catalog}` });
  },
  // 更新最新章节
  // joinBook(url) {
  //   db.collection('book').where({
  //     _openid: app.globalData.openid
  //   }).get().then(res => {
  //     const data = res.data || []
  //     if(data.length > 0) {
  //       if(data[0].bookUrl !== url) {
  //         const id = data[0]._id || ''
  //         db.collection('book').doc(id).update({
  //           data: {
  //             bookUrl: url
  //           }
  //         }).then(res => {
  //           console.log(res);
  //         })
  //       }
  //     }
  //   })
  // },
  // 去重
  unique(arr) {
    return [...new Set(arr)]
},


  Change(a) {
    // a 为富文本的字符串内容，为了测试，只写了img标签
	let b = /<img [^>]*src=['"]([^'"]+)[^>]*>/g;// img 标签取src里面内容的正则
  let s = a.match(b);// 取到所有img标签 放到数组 s里面
  let srcImgList = []
	for (let i = 0; i < s.length; i++) {
		let srcImg = s[i].replace(b, '$1');//取src面的内容
    //修改富文本字符串内容 img标签src 相对路径改为绝对路径
    srcImgList.push(srcImg)
    
  }
  let newArray = this.unique(srcImgList)
  for(let j = 0; j < newArray.length; j++){
    let bc = newArray[j]
    a = a.replace(new RegExp(bc, 'g'), 'http://yulinzhanye.in'+newArray[j]);
  }
    console.log(a);
    return a
  },
  // 点击章节的分页
  handleChapter(e) {
    let {url, index} = e.currentTarget.dataset
    console.log(index);
    
    this.getSectionContent(this.data.catalog + url , index)
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let {url} = options
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