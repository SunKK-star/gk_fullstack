import React, { Component } from 'react'
import { createIncrementAcrion, createDecrementAcrion, createAsyncIncrementSAction } from '../redux/actions/count'
import { connect } from 'react-redux'

class Count extends Component {
  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value * 1)
  }
  // 奇数再加
  incrementIfodd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }
  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value * 1)
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.incrementAsync(value * 1, 500)
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>我是Count组件,Person组件有{this.props.personArr.length}个人</h2>
        <h4>当前求和为：{this.props.count}</h4  >
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

export default connect(
  state => ({ count: state.he, personArr: state.ren}),
  {
    increment: createIncrementAcrion,
    decrement: createDecrementAcrion,
    incrementAsync: createAsyncIncrementSAction

  }
)(Count)