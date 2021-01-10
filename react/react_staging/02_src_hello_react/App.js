// 外壳组件
import React, {Component} from 'react' // React用了是默认暴露    {Component}是用了分别暴露
import Hello from './components/Hello/index'
import Welcome from './components/Welcome/Welcome'
// 创建并暴露App组件
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}

