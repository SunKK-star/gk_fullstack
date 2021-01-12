import React, { Component } from 'react'
import Search from './components/Search/index'
import List from './components/List/index'
import PubSub from 'pubsub-js'
import './App.css'

export default class App extends Component {
  componentDidMount() {
    PubSub.subscribe('@gk', (_,data) => {
      console.log('App组件收到数据了', data);
    })
  }
  render() {
    return (
      (
        <div className="container">
          <Search updateAppState={this.updateAppState}/>
          <List {...this.state} />
        </div>
      )
    )
  }
}

