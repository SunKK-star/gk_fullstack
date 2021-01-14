import React, { Component } from 'react'
import {connect} from 'react-redux'

 class Person extends Component {
  render() {
    return (
      <div>
        <input ref={c => this.nameNode = c} type="text" placeholder="输入名字" />
        <input ref={c => this.nameNode = c} type="text" placeholder="输入年龄" />
      </div>
    )
  }
}

export default connect()(Person)
