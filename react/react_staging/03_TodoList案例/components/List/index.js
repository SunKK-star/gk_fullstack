import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item/index'

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    changeCheck: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }
  render() {
    const {todos,deleteTodo,changeCheck} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(item => {
            return <Item deleteTodo={deleteTodo} changeCheck={changeCheck} key={item.id} {...item} />
          })
        }
      </ul>
    )
  }
}
