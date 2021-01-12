import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MyNavLink from './components/MyNavLink'

import Home from './pages/Home/index'
import About from './pages/About/index'

export default class App extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}
              {/*原生html中，靠<a>跳转不同的页面*/}
              {/*在React中靠路由链接实现切换组件 ---编写路由链接*/}
              <MyNavLink  to="/home" a="a" b="b" c="c" children="Home" />
              <MyNavLink to="/about" children="About" />
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Switch>
                  {/* 严格匹配 */}
                  <Route exact path='/about' component={About} />
                  <Route path='/home' component={Home} />
                  <Redirect to="about" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

