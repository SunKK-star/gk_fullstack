import React, { Component } from 'react'
import Item from '../Item/index'

export default class List extends Component {
  changeCheck = (id, checkedVal) => {
    this.props.changeCheck(id, checkedVal)
  }
  render() {
    const {todos} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(item => {
            return <Item changeCheck={this.changeCheck} key={item.id} {...item} />
          })
        }
      </ul>
    )
  }
}
