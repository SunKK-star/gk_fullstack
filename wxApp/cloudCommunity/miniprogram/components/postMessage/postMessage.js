// components/postMessage/postMessage.js
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
    selectpic: [],
    selectedpic: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    backTo() {
      let myEventDetail = {};
      let myEventOption = {};
      this.triggerEvent('backTo', myEventDetail, myEventOption)
    },
    addpic() {
      let self = this;
      wx.chooseImage({
        count: '9', //最多可以选择的图片张数,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: res => {
          let { tempFilePaths } = res
          self.setData({
            selectpic: tempFilePaths
          }).then(() => {
            let selectedpic = [1, 5]
            selectedpic.map(item => {
              self.data.selectedpic.push(item)
            })
            console.log(self.data.selectedpic);
          })

        }, //返回图片的本地文件路径列表 tempFilePaths,
        fail: () => {
          wx.showToast({
            title: '图片上传失败', //提示的内容,
            icon: 'success', //图标,
            duration: 1000, //延迟时间,
            mask: true, //显示透明蒙层，防止触摸穿透,
            success: res => { }
          });
        },
      });

    }
  }
})
