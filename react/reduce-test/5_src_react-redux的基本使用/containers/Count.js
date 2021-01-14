// 引入Count的UI组件
import CountUI from '../components/Count'
import { createIncrementAcrion, createDecrementAcrion, createAsyncIncrementSAction } from '../redux/count_action'

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'


// a函数的返回值的key作为状态传递给UI组件的props的key，返回值的value作为传递给UI组件的value---状态
function mapStateToprops(state) {
  return { count: state }
}

// a函数的返回值的key作为状态传递给UI组件的props的key，返回值的value作为传递给UI组件的value---操作状态的方法
function mapDispatchToprops(dispatch) {
  return {
    increment: data => dispatch(createIncrementAcrion(data)),
    decrement: data => dispatch(createDecrementAcrion(data)),
    incrementAsync: (data, delay) => dispatch(createAsyncIncrementSAction(data, delay)) 
  }
}
// 创建并暴露一个Count的容器组件
export default connect(mapStateToprops, mapDispatchToprops)(CountUI)