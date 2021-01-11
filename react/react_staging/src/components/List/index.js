import React, { Component } from 'react'
import PubSub from 'pubsub-js'


export default class List extends Component {
  componentDidMount() {
    PubSub.subscribe('@gk', (_, data) => {
      console.log('List组件收到数据了', data);
      this.setState(data)
    })
  }
  state = { // 初始化状态
    users: [], // users初始值为数组
    isFirst: true, // 是否第一次打开页面
    isLoading: false, // 表示是否处于加载中
    err: '' // 存储请求相关的错误信息
  }
  render() {
    const { users, isFirst, isLoading, err } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h1>欢迎使用，输入关键字，随后点击搜索。</h1> :
            isLoading ? <h2>Loading...</h2> :
              err ? <h2 style={{ color: "red" }}>{err}</h2> :
                users.map((item) => {
                  return (
                    <div key={item.id} className="card">
                      <a href={item.html_url} target="_blank" rel="noreferrer">
                        <img alt="avatar" src={item.avatar_url} style={{ width: "100px" }} />
                      </a>
                      <p className="card-text">{item.login}</p>
                    </div>
                  )
                })
        }
      </div>
    )
  }
}
