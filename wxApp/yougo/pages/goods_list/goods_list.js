import { request } from "../../resuest/index";
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        value: '综合',
        isActive: true
      },
      {
        id: 1,
        value: '销量',
        isActive: false
      },
      {
        id: 3,
        value: '价格',
        isActive: false
      }
    ],
    goodsList: []
  },
  // 接口要的参数
  QueryParams: {
    query: '',
    cid: '',
    pagenum: 1,
    pagesize: 10
  },
  // 总页数
  totalPages: 1,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.QueryParams.cid = options.cid
    this.getGoodsList()
  },

  // 获取商品列表的数据
  async getGoodsList() {
    const res = await request({url:"/goods/search", data: this.QueryParams})
    // 获取总条数
    // console.log(res);
    const total = res.total
    this.totalPages = Math.ceil(total / this.QueryParams.pagesize)
    // 拼接了数组
    this.setData({
      goodsList: [...this.data.goodsList,...res.goods]
    })
 
    // 关闭下拉关闭的窗口
    wx.stopPullDownRefresh()
  },

  handleItemChange(e) {
    // console.log(e);
    let {index} = e.detail
    let {tabs} = this.data
    tabs.forEach((v, i) =>i === index?v.isActive=true:v.isActive=false)
    
    this.setData({
      tabs
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
  onPullDownRefresh (e) {
    //重置数组
    this.setData({
      goodsList: []
    }),
    // 重新请求接口
    this.getGoodsList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (e) {
    if(this.QueryParams.pagenum >= this.totalPages) {
      // 没有下一页数据
      // console.log('没有下一页数据了');
      wx.showToast({
        title: '没有下一页数据了', //提示的内容,
      });
    }else {
      this.QueryParams.pagenum++
      this.getGoodsList()
    }
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})