// pages/msgDetail/msgDetail.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comment: '',
    msgDeati: {},
    picarr: [],
    isSend: false,
    commentArr: [],
    isReply: false,
    send: '',
    reply: '',
    replyObj: '',
    commentDetail: {},
    isZan: false
  },

  // 点击输入框时触发
  sendComment(e) {

    this.setData({
      isSend: true
    })
  },

  // input失去焦点时触发
  dissendComment() {
    this.setData({
      isSend: false
    })
  },
  // input框输入内容
  inputComment(e) {
    this.setData({
      comment: e.detail.value
    })
  },

  // 点击输入框时触发
  inputReply(e) {
    console.log(e);
    let { communityId, msgId, _id, postBy, msgPostBy } = e.currentTarget.dataset.commentdetail;
    let commentDetail = { communityId, msgId, _id, postBy, msgPostBy, }

    this.setData({
      commentDetail
    })
    this.setData({
      isReply: true,
      send: '发送'
    })
  },

  // input失去焦点时触发
  disinputReply() {
    this.setData({
      isReply: false,
      send: ''
    })
  },
  // 输入回复内容
  inputReplayCtx(e) {
    // console.log(e.detail.value);
    this.setData({
      replay: e.detail.value
    })


  },

  // 点击发送回复
  sendReply(e) {

    wx.showLoading({
      title: '发送中...',
      mask: true,
    })

    let replayCtx = this.data.replay
    let commentDetail = this.data.commentDetail
    let { postBy, _id, msgPostBy, communityId, msgId } = commentDetail
    wx.getUserInfo({
      success: res => {
        // console.log(res);

        let { avatarUrl, nickName } = res.userInfo;
        let userInfo = { avatarUrl, nickName };
        let replyerInfo = { avatarUrl, nickName };
        db.collection('comment')
          .doc(_id).get().then(res => {
            let { replyArr } = res.data
            let count = replyArr.length;
            count++
            let newArr = replyArr.concat([{ replyerInfo, replayCtx, replyTime: new Date() }])
            db.collection('comment')
              .doc(_id).update({
                // data 传入需要局部更新的数据
                data: {
                  // 表示将 done 字段置为 true
                  replyArr: newArr,
                  replyNum: count
                }
              })
              .then(res => {
                // console.log(res);
              })
              .catch(console.error)
          })

        wx.cloud.callFunction({
          name: 'saveReplay',
          data: {
            commentPostBy: postBy,
            commentId: _id,
            replayCtx,
            msgPostBy,
            userInfo,
            communityId,
            msgId,
          }
        }).then((res) => {
          wx.hideLoading({
            success: () => {
              if (!res.result) {

                wx.showToast({
                  title: '输入不能为空哦！',
                  duration: 1000,
                  icon: 'error',
                  mask: true,
                })
              } else {
                // console.log(res);
                wx.cloud.callFunction({
                  name: 'getComment',
                  data: {
                    communityId,
                    msgId
                  }
                }).then(res => {
                  let { data } = res.result
                  // console.log(data);
                  this.setData({
                    commentArr: data
                  })
                  wx.showToast({
                    title: '回复成功！',

                    duration: 1000,

                    icon: 'success',

                    mask: true,
                    success: (res) => { },
                  })
                }).catch(err => {
                  console.log(err);
                  wx.showToast({
                    title: '出了点问题!',

                    duration: 1000,

                    icon: 'error',

                    mask: true,
                    success: (res) => { },
                  })
                })

              }
            },
          })

        }).catch((err) => {
          console.log(err);
        })
      },
    });

    this.setData({
      reply: ''
    })
  },

  // 发送评论
  confireSend(e) {
    let { postBy, communityId, msgId } = this.data.msgDeati
    wx.showLoading({
      title: '发送中...',
      mask: true,
    })
    let commentCtx = this.data.comment
    wx.getUserInfo({
      success: res => {
        // console.log(res);
        let { avatarUrl, nickName } = res.userInfo;
        let userInfo = { avatarUrl, nickName };
        wx.cloud.callFunction({
          name: 'saveComment',
          data: {
            commentCtx: commentCtx,
            msgPostBy: postBy,
            userInfo,
            communityId,
            msgId,
            replyArr: []
          }
        }).then((res) => {
          wx.hideLoading({
            success: () => {
              if (!res.result) {
                console.log(res);
                wx.showToast({
                  title: '输入不能为空哦！',
                  duration: 1000,
                  icon: 'error',
                  mask: true,
                })
              } else {
                wx.cloud.callFunction({
                  name: 'getComment',
                  data: {
                    communityId,
                    msgId
                  }
                }).then(res => {
                  let { data } = res.result

                  this.setData({
                    commentArr: data,
                    comment: ''
                  })
                  wx.showToast({
                    title: '评论成功！',
                    duration: 1000,
                    icon: 'success',
                    mask: true,
                  })
                }).catch(err => {
                  console.log(err);
                })

              }
            },
          })

        }).catch((err) => {
          console.log(err);
        })
      },
    });



  },

  // 点赞
  giveZan(e) {
    console.log(e);
    let { _id, communityId, msgId } = e.currentTarget.dataset.commentdetail
    // console.log(res)
    db.collection('comment')
      .doc(_id).get().then(res => {
        let { zanDetail } = res.data
        let num = zanDetail.num;
        if (!zanDetail.isActive) {
          num++
          db.collection('comment')
            .doc(_id).update({
              data: {
                zanDetail: {
                  num,
                  isActive: true
                }
              }
            }).then(res => {
              console.log(res);
            })
        } else {
          num--;
          db.collection('comment')
            .doc(_id).update({
              data: {
                zanDetail: {
                  num,
                  isActive: false
                }
              }
            }).then(res => { })
        }
        db.collection('comment').where({
          communityId,
          msgId
        }).get().then(res => {
          console.log(res);
          // this.setData({
          //   commentArr: data
          // })
        })

      }).catch((err) => {
        console.log(err);
      })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    let { selectedpic, communityId, msgId } = options
    let picarr = selectedpic.split(',')
    this.setData({
      msgDeati: { ...options },
      picarr
    });

    // 获取评论
    wx.cloud.callFunction({
      name: 'getComment',
      data: {
        communityId,
        msgId
      }
    }).then(res => {
      let { data } = res.result
      console.log(data);
      this.setData({
        commentArr: data
      })
    }).catch(err => {
      console.log(err);
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
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})