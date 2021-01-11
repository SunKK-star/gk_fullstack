import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
  state = {
    isChecked: false
  }
  static propTypes = {
    todos: PropTypes.array.isRequired,
    deleteDoneTodo: PropTypes.func.isRequired
  }
  componentDidMount() {
    
  }
  // 点击事件的回调，为了删除已完成事件
  handlerDeleteDoneTodo = () => {
    const {deleteDoneTodo} = this.props
    if(window.confirm('你确定删除已完成任务吗？')) {
      deleteDoneTodo()
    }
  }
  // todos事件全选
  selectAll = (e) => {
    const {selectAllTodo} = this.props
    selectAllTodo(e.target.checked)
  }
  
  render() {
    const {todos, isChecked} = this.props
    // 已完成的个数 
    const doneCount = todos.reduce((pre, cur) => {
      if(cur.done) {
        pre += 1
      }
      return pre
    },0)

    // 总数
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input checked={doneCount === total} type="checkbox" onClick={this.selectAll} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{todos.length}
        </span>
        <button onClick={this.handlerDeleteDoneTodo} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}
