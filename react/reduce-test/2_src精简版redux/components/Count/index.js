import React, { Component } from 'react'
// 引入store，获取store的状态
import store from '../../redux/store'

export default class Count extends Component {

  decrement = () => {
    const {value} = this.selectNumber
    store.dispatch({type: 'decrement', data: value * 1})
  }
  // 奇数再加
  incrementIfodd = () => {
    const {value} = this.selectNumber
    if(store.getState() % 2 !== 0) {
      store.dispatch({type: 'increment',data: value * 1})
    } 
  }
  increment = () => {
    const {value} = this.selectNumber
    // 通知redux加状态
    store.dispatch({type: 'increment', data: value * 1})
  }
  incrementAsync = () => {
    const {value} = this.selectNumber
    setTimeout(() => {
      store.dispatch({type: 'increment',data: value * 1})
    }, 500);
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.incrementIfodd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}
