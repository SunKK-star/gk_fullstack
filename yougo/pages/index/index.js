import { request } from  "../../resuest/index"
Page({
  data: {
    // 轮播图数组
    swiperList: [
      {src: 'https://i.loli.net/2020/11/12/4BYP7XELdyRMKaA.jpg'},
      {src: 'https://i.loli.net/2020/11/12/QZhyjUAbKTetJgD.jpg'},
      {src: 'https://i.loli.net/2020/11/12/37YDtLZkbazwuXN.jpg'}
    ],
    // 
    cateList: [],
    // 楼层数据
    floorList: []
  },
  // 页面开始加载，就会触发
  onLoad(options){
    this.getCateList()
    this.getfloorList()
  },
  // 获取 分类导航数据
  getCateList() {
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"})
    .then(res => {
      this.setData({
        cateList: res.data.message
      })
    })
  },
  getfloorList() {
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"})
    .then(res => {
      this.setData({
        floorList: res.data.message
      })
    })
  },
  onReady(){
    
  },
  onShow(){
    
  },
  onHide(){

  },
  onUnload(){

  },
  onPullDownRefresh(){

  },
  onReachBottom(){

  },
  onShareAppMessage(){

  },
  onPageScroll(){

  },
  onTabItemTap(item){

  }
});