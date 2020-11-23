/** 
 * 1.获取用户的收获地址
 *  1. 绑定点击事件  authSetting  scope.address
 *  2. 
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    adress: []
  },

  onShow() {
    const adress = wx.getStorageSync(key);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleChooseAdress(e) {
    wx.chooseAddress({
      success: (result)=>{
        console.log(result);
      }
    });
    
  }
})