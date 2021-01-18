import React, { Component } from 'react'
import {  Route, Link } from 'react-router-dom'
import Detail from '../Message/Detail'





export default class index extends Component {
  state = {
    mesageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' },
    ]
  }
  pushShow = (id, title) => {
    // push跳转+携带params参数
    this.props.history.push(`/home/message/detail/${id}/${title}`)

    // push跳转+携带search参数
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

    // push跳转+携带state参数
    // this.props.history.push('/home/message/detail', {id, title})
  }
  replaceShow = (id, title) =>{
    // replace跳转+携带params参数
    this.props.history.replace(`/home/message/detail/${id}/${title}`)

    // replace跳转+携带search参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

    // replace跳转+携带state参数
    // this.props.history.replace('/home/message/detail', {id, title})

  }

  goForward = () => {
    this.props.history.goForward()
  }
  goBack = () => {
    this.props.history.goBack()
  }
  go = () => {
    this.props.history.go(2)
  }
  render() {
    
    return (
      <div>
        <ul>
          {
            this.state.mesageArr.map((item) => {
              // 向路由组件携带params参数
              return <li key={item.id}>
                <Link to={`/home/message/detail/${item.id}/${item.title}`} children={item.title} />
                <button onClick={() => {this.pushShow(item.id, item.title)}}>push查看</button>
                <button onClick={() => {this.replaceShow(item.id, item.title)}}>replace查看</button>
              </li>
            })
          }
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        <Route path="/home/message/detail/:id/:title" component={Detail} />

        <button onClick={this.goForward}>前进</button>
        <button onClick={this.goBack}>后退</button>
        <button onClick={this.go}>go</button>
      </div>

    )
  }
}
