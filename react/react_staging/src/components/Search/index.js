import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  
  search = () => {
    
    // 获取用户的输入
    const {keyWordElement:{value: keyWord}} = this // 解构赋值的连续写法 并重命名
    // 发送请求前通知List更新状态
    PubSub.publish("@gk", {isFirst:false,isLoading: true})
    //发送网络请求
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      res => {
   
        PubSub.publish('@gk', {isLoading: false,users:res.data.items})
        // 请求成功后通知List更新状态
        // this.props.updateAppState({isLoading: false,users:res.data.items})
      },
      err => {
        // 请求失败后通知List更新状态
        // this.props.updateAppState({isLoading: false,err:err.message})
        PubSub.publish('@gk',{isLoading: false,err:err.message})
      }
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
