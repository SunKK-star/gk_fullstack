import React, { Component } from 'react'
import  {Redirect, Route, Switch, Link } from 'react-router-dom'
import Detail from '../Message/Detail'





export default class index extends Component {
  state = {
    mesageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' },
    ]
  }
  render() {
    
    return (
      <div>
        <ul>
          {
            this.state.mesageArr.map((item) => {
              // 向路由组件携带params参数
              return <li key={item.id}> <Link to={`/home/message/detail/${item.id}/${item.title}`} children={item.title}/></li>
            })
          }
        </ul>
        <hr/>
        {/* 声明接收params参数 */}
          <Route path="/home/message/detail/:id/:title" component={Detail} />
      </div>

    )
  }
}
