//index.js
const db = wx.cloud.database()  // wx 微信 在云端找数据库
const _ = db.command  // CRUD(增删改查)
const productsCollection = db.collection('products')
const photos = db.collection('photos') 
const app = getApp()

Page({
  data: {
    products: [],
    photos: [],
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },

  upload () {
    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: res => {
          // successlog
          // console.log(res);
          const tempFilePaths = res.tempFilePaths
          for (var i = 0; i < tempFilePaths.length; i++) {
              let randString = +new Date() + '' + Math.floor(Math.random() * 100000) + '.png' //+new类型转换
              wx.cloud.uploadFile({
                  cloudPath: randString,
                  filePath: tempFilePaths[i],
                  success: res => {
                      // console.log(res);
                      if (res.statusCode == 200) {
                        photos.add({
                          data: {
                            image: res.fileID
                          }
                        })
                        .then(res => {
                          wx.showToast({
                            title: '上传成功',
                            icon: 'success'
                          })
                        })
                      }
                  }
              })
          }
        }
        })
  },
  onLoad: function() {
    productsCollection
      .get()
      .then(res => {
        // console.log(res);
        this.setData({
          products: res.data
        })
      })
      photos
        .get()
        .then(res => {
          console.log(res);
          this.setData({
            photos: res.data
          })

        })
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
