import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'



export default class MyNavLink extends Component {
  
  render() {
    return (
      <div>
        <NavLink replace replace activeClassName="demo" className="list-group-item" {...this.props} />
      </div>
    )
  }
}
