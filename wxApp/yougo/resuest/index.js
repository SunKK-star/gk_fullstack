export const request = (param) => {
  return new Promise((resolve, reject) => {
    wx.request({
      ...param,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    });
  })
}