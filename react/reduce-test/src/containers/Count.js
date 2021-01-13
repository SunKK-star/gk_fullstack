// 引入Count的UI组件
import CountUI from '../components/Count'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

// a函数的返回值的key作为状态传递给UI组件的props的key，返回值的value作为传递给UI组件的value---状态
function a(state) {
  return {count: state}
}

// a函数的返回值的key作为状态传递给UI组件的props的key，返回值的value作为传递给UI组件的value---操作状态的方法
function b() {
  return {'increment': () =>{

  }}
}
// 创建并暴露一个Count的容器组件
export default connect(a, b)(CountUI )

