import { request } from "../../resuest/index";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 左侧菜单数据
    leftMenuList: [],
    //右侧商品数据
    rigthContent: [],
    // 被点击的左侧的菜单
    currentIndex: 0
  },
  // 接口返回数据
  Cates: [],
  // 右侧内容的滚动条距离顶部的距离
  scrollTop: 0,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
    0. web中的本地存储和小程序中的本地存储的区别
      1.写代码的方式不一样了
        web: localStorage.setItem("key", "value") localStorage.getItem('key')
        小程序：wx.setStorageSync("key", "value") wx.getStorageSync("key")
      2.存的时候，有没有做类型转换
        web:不管存入什么数据类型的数据，最终都会先调用一下toString(),把数据变成字符串，
    1. 先判断本地存储中有没有旧的数据
    {time: Date.now(),data:[...]}
    2. 没有旧数据 直接大宋新请求
    3. 有旧数据 旧的数据没过期 就使用 本地存储中的旧数据即可
    */
    // 获取本地存储中的数据， {小程序也是存在本地存储技术}
    const Cates = wx.getStorageSync('cates');
    if (!Cates) {
      // 不存在
      this.getCates()
    } else {
      if (Date.now() - Cates.time > 1000 * 10) {
        this.getCates()
      } else {
        this.Cates = Cates.data
        let leftMenuList = this.Cates.map(v => v.cat_name)
        let rigthContent = this.Cates[0].children
        this.setData({
          leftMenuList,
          rigthContent
        })
      }
    }
  },
  // 获得分类数据
  async getCates() {
    // request({
    //   url: "/categories"
    // })
    // .then((res) => {
    //   // console.log(res);
    //   this.Cates = res.data.message;

    //   // 把接口的数据存入到本地存储中
    //   wx.setStorageSync('cates', {time: Date.now(), data: this.Cates})


    //   // 构造左侧的大菜单数据
    //   let leftMenuList = this.Cates.map(v => v.cat_name)
    //   // 构造右侧商品数据
    //   let rigthContent = this.Cates[0].children
    //   this.setData({
    //     leftMenuList,
    //     rigthContent
    //   })
    // })

    // 使用es7 的async await来发送请求
    const res = await request({ url: "/categories" });
    // console.log(res); 
    this.Cates = res;

    // 把接口的数据存入到本地存储中
    wx.setStorageSync('cates', { time: Date.now(), data: this.Cates })


    // 构造左侧的大菜单数据
    let leftMenuList = this.Cates.map(v => v.cat_name)
    // 构造右侧商品数据
    let rigthContent = this.Cates[0].children
    this.setData({
      leftMenuList,
      rigthContent
    })
  },
  // 左侧菜单的点击事件
  handleItemTap(e) {
    /* 
    1.获取被点击的标题身上的索引值
    2.给data中的currentIndex赋值
    3.根据不同的索引来渲染右边的内容
    */
    const { index } = e.currentTarget.dataset
    // 构造右侧商品数据
    let rigthContent = this.Cates[index].children
    this.setData({
      currentIndex: index,
      rigthContent,
      scrollTop: 0
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