import React, { Component } from 'react'
import Search from './components/Search/index'
import List from './components/List/index'
import './App.css'

export default class App extends Component {
  state= { // 初始化状态
    users: [], // users初始值为数组
    isFirst: true, // 是否第一次打开页面
    isLoading: false, // 表示是否处于加载中
    err: '' // 存储请求相关的错误信息
  }
  // 更新App的state
  updateAppState = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    const {users} = this.state
    return (
      (
        <div className="container">
          <Search updateAppState={this.updateAppState}/>
          <List {...this.state} />
        </div>
      )
    )
  }
}

