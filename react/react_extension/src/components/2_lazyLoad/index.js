import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Loading from '../loading'
// import Home from '../Home'
// import About from '../About'
const Home = lazy(() => import('../Home'),)
const About = lazy(() => import('../About'),)

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

              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink>

            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Suspense fallback={<Loading></Loading>}>
                  <Route path='/about' component={About} />
                  <Route path='/home' component={Home} />
                </Suspense>


              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

