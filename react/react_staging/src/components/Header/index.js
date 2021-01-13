import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd';
import 'antd/dist/antd.css'

class Header extends Component {
  goForward = () => {
    this.props.history.goForward()
  }
  goBack = () => {
    this.props.history.goBack()
  }
  go = () => {
    this.props.history.go()
  }
  render() {
    return (
      <div>
        <button onClick={this.goForward}>前进</button>
        <button onClick={this.goBack}>后退</button>
        <button onClick={this.go}>go</button>
        <Button type="primary">Primary Button</Button>
      </div>
    )
  }
}

export default withRouter(Header)
// withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter的返回值是一个新组件
