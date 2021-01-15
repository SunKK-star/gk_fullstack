import React, { Component } from 'react'

export default class Demo extends Component {
  state = {
    count: 0
  }
  add = () => {
    const { count } = this.state
    // 对象式的setstate
    // this.setState({
    //   count: count + 1
    // }, () => {
    //   console.log(this.state.count);
    // })
    this.setState(state => ({ count: state.count + 1 }))
  }
  render() {
    return (
      <div>
        <h1>当前求和为{this.state.count}</h1>
        <button onClick={this.add}>加一</button>
      </div>
    )
  }
}
