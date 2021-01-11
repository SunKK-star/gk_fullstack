import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state = {
    mouse: false
  }
  // 标识鼠标移入、移出
  handlerMouse = (param) => {
    return (e) => {
      this.setState({
        mouse: param
      })
    }
  }
  // 标识事件的勾选
  handlerCheck = (param) => {
    return (e) => {
      this.props.changeCheck(param, e.target.checked)
    }

  }
  // 删除todo的回调
  handlerDelete = (id) => {
    if (window.confirm('确定删除吗？')) {
      this.props.deleteTodo(id)
    }
  }
  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li onMouseLeave={this.handlerMouse(false)} onMouseEnter={this.handlerMouse(true)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handlerCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={() => this.handlerDelete(id)} className="btn btn-danger" style={{ display: mouse ? '' : 'none' }}>删除</button>
      </li>
    )
  }
}
