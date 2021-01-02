// components/postMessage/postMessage.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    communityId: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectpic: [],
    selectedpic: [],
    titleVal: '',
    contentVal: ''
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
    // 上传图片
    addpic() {
      let self = this;
      wx.chooseImage({
        count: '9', //最多可以选择的图片张数,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          wx.showLoading({
            title: '正在上传图片...',
            mask: true,
          })
          let promiseArr = [];
          let { tempFilePaths } = res;
          tempFilePaths.forEach((item) => {
            self.data.selectpic.push(item)
          })
          self.setData({
            selectpic: self.data.selectpic
          })
          tempFilePaths.map(item => {
            promiseArr.push(new Promise((resolve, reject) => {
              return wx.cloud.uploadFile({
                cloudPath: new Date().getTime() + /\.\w+$/.exec(item)[0],
                filePath: item,
                success: res => {
                  self.data.selectedpic.push(res.fileID)
                  self.setData({
                    selectedpic: self.data.selectedpic
                  });
                  resolve();
                }
              })
            }))
          })



          Promise.all(promiseArr).then((res) => {
            // console.log(self.data.selectedpic);
            wx.hideLoading({
              success: (res) => { },
            })

          })



        }, //返回图片的本地文件路径列表 tempFilePaths,



        // success: (res) => {
        //   let promiseArr = [];
        //   let { tempFilePaths } = res;
        //   tempFilePaths.forEach((item) => {
        //     self.data.selectpic.push(item)
        //   })
        //   self.setData({
        //     selectpic: self.data.selectpic
        //   })
        //   tempFilePaths.map(item => {
        //     promiseArr.push(new Promise((resolve, reject) => {
        //       return wx.cloud.uploadFile({
        //         cloudPath: new Date().getTime() + /\.\w+$/.exec(item)[0],
        //         filePath: item,
        //         success: res => {
        //           self.data.selectedpic.push(res.fileID)
        //           self.setData({
        //             selectedpic: self.data.selectedpic
        //           });
        //           resolve();
        //         }
        //       })
        //     }))
        //   })

        //   Promise.all(promiseArr).then((res) => {
        //     console.log(self.data.selectedpic);

        //   })



        // },


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

    },
    // 清除已上传图片
    deletePic(e) {
      let { index } = e.currentTarget.dataset
      console.log(e.currentTarget.dataset.index);
      this.data.selectpic.splice(index, 1)
      this.data.selectedpic.splice(index, 1)
      this.setData({
        selectpic: this.data.selectpic,
        selectpiced: this.data.selectpic
      })
    },
    onChange() {
    },
    // 输入标题时
    inputTitle(e) {
      this.setData({
        titleVal: e.detail
      })
    },
    // 输入内容时
    inputcontent(e) {
      this.setData({
        contentVal: e.detail
      })
    },

    // 发布
    postMsg() {
      const self = this;
      wx.showLoading({
        title: '正在发布..',
        mask: true,
      })
      wx.getUserInfo({
        withCredentials: false,
        success: res => {
          let { avatarUrl, nickName } = res.userInfo;
          let userInfo = {
            avatarUrl,
            nickName
          }
          wx.cloud.callFunction({
            name: 'postMsg',
            data: {
              selectedpic: self.data.selectedpic,
              titleVal: self.data.titleVal,
              contentVal: self.data.contentVal,
              communityId: self.properties.communityId,
              userInfo
            }
          }).then(res => {
            console.log(res);
            let resul = res
            wx.hideLoading({
              success: (res) => {
                if (!resul.result) {
                  wx.showToast({
                    title: '输入框不能为空哦！',
                    duration: 1000,
                    mask: true,
                  })
                } else {
                  return new Promise((resolve, reject) => {
                    wx.showToast({
                      title: '发布成功！',
                      duration: 500,
                      mask: true,
                      success: (res) => {
                      },
                    })
                    resolve('ok')
                  }).then(() => {
                    this.triggerEvent('backTo')
                  })

                }

              },
            })
          }).catch(err => {
            console.log(err);
          })
        },
      });

    }
  }
})
