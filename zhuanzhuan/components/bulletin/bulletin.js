// components/bulletin/bulletin.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true,
    nextmargin: 20,

    evaluateList: [
      {userInfo: {src: 'https://i.loli.net/2020/11/09/hPSGl1u3MmnLifs.png', id: '18379995092'}, model: 'nova5Pro', ram: 128, color: '黑亮色', originplace: '国行', finalPrice: '1451', value: '态度各方面都还不错，好评！'},
      {userInfo: {src: '', id: ''}, model: '', ram: '', color: '', finalPrice: '', value: ''},
      {userInfo: {src: '', id: ''}, model: '', ram: '', color: '', finalPrice: '', value: ''},
      {userInfo: {src: '', id: ''}, model: '', ram: '', color: '', finalPrice: '', value: ''},
      {userInfo: {src: '', id: ''}, model: '', ram: '', color: '', finalPrice: '', value: ''}
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
