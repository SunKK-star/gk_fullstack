import React, { Component} from 'react'
import Header from './components/Header/index'
import List from './components/List/index'
import Footer from './components/Footer/index'
import './App.css'


export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里
  // 初始化状态
  state = {
    todos: []
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
  // 删除todo
  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((item) => {
      if (item.id !== id) return item
    })
    this.setState({todos: newTodos})
  }

  // 删除已完成事件
  deleteDoneTodo = () => {
    const {todos} = this.state
    let newTodos = todos.reduce((pre, cur) =>{
      if(!cur.done) {
        let newArr = pre.concat(cur)
        return newArr
      }
      return pre
    },[])
    this.setState({todos: newTodos})
  }

  // 全选事件
  selectAllTodo = (param) => {
    console.log(param);
    const {todos} = this.state
    const newTodos = todos.map((item) =>{
      return {...item, done: param}
    })
    this.setState({
      todos: newTodos
    })
  }
  render() {
    const {todos, isChecked} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTo={this.addTo} />
          <List deleteTodo={this.deleteTodo} todos={todos} changeCheck={this.receiveVal} />
          <Footer selectAllTodo={this.selectAllTodo} todos={todos} deleteDoneTodo={this.deleteDoneTodo} />
        </div>
      </div>
    )
  }
}
