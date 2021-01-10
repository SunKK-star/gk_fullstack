import React, { Component } from 'react'
import Header from './components/Header/index'
import List from './components/List/index'
import Footer from './components/Footer/index'
import './App.css'


export default class App extends Component {
  // 初始化状态
  state = {
    todos: [
      {id: '001', name: '吃饭', done: true},
      {id: '002', name: '睡觉', done: true},
      {id: '003', name: '敲代码', done: false}
    ]
  }
  // 添加todo事件
  addTo = (data) => {
    const todos = this.state.todos
    this.setState({
      todos: [{id: '00'+(todos.length+1), name: data, done: false}, ...todos]
    })
    console.log(this.state.todos);
  }

  // 获取从List组件中获取的Item组件中的id 和 done值
  receiveVal = (id, checkedVal) => {
    const {todos} = this.state
    const newTodos = todos.map((item) => {
      if(item.id === id) return {...item,done: checkedVal}
      else return item
    })
    this.setState({todos: newTodos})
  }
  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTo={this.addTo} />
          <List todos={todos} changeCheck={this.receiveVal} />
          <Footer />
        </div>
      </div>
    )
  }
}
