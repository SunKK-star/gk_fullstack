/** 
 * 3. 点击加入购物车
 *  1. 先绑定点击事件
 *  2. 获取缓存中的购物车数据，数组格式
 *  3. 先判断当前商品是否存在于购物车
 *  4. 已经存在的修改商品数据，执行++，重新把购物车数组填充回缓存中
 */
 

import { request } from "../../resuest/index";
import regeneratorRuntime, { async } from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj: {}
  },
  // 商品对象
  GoodsInfo: {},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {goods_id} = options
    this.getGoodsDetail(goods_id)
  },
  // 获取商品的详情数据
  async getGoodsDetail(goods_id) {
    const goodsObj = await request({url: "/goods/detail", data: {goods_id}})
    this.GoodsInfo = goodsObj
    console.log(goodsObj);
    this.setData({
      goodsObj: {
        goods_name: goodsObj.goods_name,
        goods_price: goodsObj.goods_price,
        // iphone部分手机不识别 webp图片格式
        
        goods_introduce: goodsObj.goods_introduce.replace(/\.webp/g,'.jpg'),
        pics: goodsObj.pics
      }
    })
  },

  // 点击加入购物车
  handleCartAdd(e) {
    console.log(e);
    let cart = wx.getStorageSync('cart') || [];
    let index = cart.findIndex(v => v.goods_id === this.GoodsInfo.goods_id)
    if(index === -1) {
      // 不存在 第一次添加
      this.GoodsInfo.num = 1
      cart.push(this.GoodsInfo)
    }else {
      // 已经存在购物车数据，执行num++
      cart[index].num++
    }
    // 把购物车重新添加回缓存中
    wx.setStorageSync('cart',cart)
    wx.showToast({
      title: '加入成功', //提示的内容,
      icon: 'success', //图标,
    });
  } 
})