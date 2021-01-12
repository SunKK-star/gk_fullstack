import React, { Component } from 'react'
import  {Route, Link } from 'react-router-dom'
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
              // 向路由组件传递state参数
              return <li key={item.id}> <Link to={{pathname: '/home/message/detail',state:{id: item.id, title: item.title}}} children={item.title}/></li>
            })
          }
        </ul>
        <hr/>
        {/* 声明接收state参数,正常注册路由即可 */}
          <Route path="/home/message/detail" component={Detail} />
      </div>

    )
  }
}
