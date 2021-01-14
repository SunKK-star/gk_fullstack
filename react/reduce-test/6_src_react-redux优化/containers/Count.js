// 引入Count的UI组件
import CountUI from '../components/Count'

import { createIncrementAcrion, createDecrementAcrion, createAsyncIncrementSAction } from '../redux/count_action'

// 引入connect用于连接UI组件与redux

import { connect } from 'react-redux'
// 创建并暴露一个Count的容器组件
// export default connect(
//   state => ({ count: state }),
//   dispatch => (
//     {
//       increment: data => dispatch(createIncrementAcrion(data)),

//       decrement: data => dispatch(createDecrementAcrion(data)),

//       incrementAsync: (data, delay) => dispatch(createAsyncIncrementSAction(data, delay))
//     }
//   )
// )(CountUI)
export default connect(
  state => ({ count: state }),
  // mapDispatchToProps的一般写法

  // dispatch => (

  //   {

  //     increment: data => dispatch(createIncrementAcrion(data)),

  //     decrement: data => dispatch(createDecrementAcrion(data)),

  //     incrementAsync: (data, delay) => dispatch(createAsyncIncrementSAction(data, delay))

  //   }

  // )

  {
    
    increment: createIncrementAcrion,
    decrement: createDecrementAcrion,
    incrementAsync: createAsyncIncrementSAction

  }
)(CountUI)