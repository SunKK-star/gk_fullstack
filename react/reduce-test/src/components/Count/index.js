import React, { Component } from 'react'


export default class Count extends Component {
  decrement = () => {
    const {value} = this.selectNumber
    
  }
  // 奇数再加
  incrementIfodd = () => {
    const {value} = this.selectNumber
  }
  increment = () => {
    const {value} = this.selectNumber
  }
  incrementAsync = () => {
    const {value} = this.selectNumber
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>当前求和为：{}</h1>
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
