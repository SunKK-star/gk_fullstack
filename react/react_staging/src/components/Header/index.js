import React, { Component } from 'react'
import './index.css'

export default class Header extends Component {
  handlerKeyUp = (e) => {
    const {keyCode, target} = e
    if(keyCode !== 13) return
    // 添加的todoname不能为空
    if(!target.value) return
    this.props.addTo(target.value)
    // 清空输入
    target.value = ''
  }
  render() {
    // console.log(nanoid());
    // console.log(nanoid());
    // console.log(nanoid());
    return (
      <div className="todo-header">
        <input onKeyUp={this.handlerKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
