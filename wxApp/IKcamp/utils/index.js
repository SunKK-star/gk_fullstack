import config from './config'
import * as Mock from './mock'

let util = {
  isDEV: config.isDev,
  log() {
    this.isDEV && console.log(...arguments)
  },
  alert(title = '提示', content = config.defaultAlerMessage) {
    if(typeof content === 'object') {
      content = this.isDEV && JSON.stringify(content)
    }
    wx.showModal({
      title: title, //提示的标题,
      content: content //提示的内容,
      
    });
  },
  getStorageData(key, cb) {
    wx.getStroage({
      key: key,
      success (res) {
        cb && cb(res.data)
      },
      fail (err) {
        this.log(err)
      }
    })
  },
  setStorageData(key, value = '', cb) {
    wx.setStorage({
      key:"key",
      data:"value",
      success() {
        cb && cb()
      }
    })
  },
  request(opt) {
    let {url, data, header, method, dataType, mock = false} = opt
    let self = this
    return new Promise((resolve, reject) => {
      if (mock) {
        let res = {
          statusCode: 200,
          data: Mock[url]  // Mock[]并不是数组
        }
        if(res && res.statusCode == 200 && res.data) {
          resolve(res.data)
        } else {
          self.alert('提示',res)
          reject(res)
        }
      } else {
        wx.request({
          url: url, //开发者服务器接口地址",
          data: data,
          header: header || {'content-type': 'application/json'}, //请求的参数",
          method: method || 'GET',
          dataType: dataType || 'json', //如果设为json，会尝试对返回的数据做一次 JSON.parse
          success(res) {
            if(res && res.statusCode == 200 && res.data) {
              resolve(res.data)
            } else {
              self.alert('提示',res)
              reject(res)
            }
          },
          fail(err) {
            self.log(err)
            self.alert('提示', err)
            reject(err)
          }
        });
      }
 
    })
  }
}

export default util