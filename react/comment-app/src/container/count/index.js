import React, { useEffect, useReducer } from 'react'
import store from '../../redux/store'
import { connect } from 'react-redux'
import { jiaaction, jianaction, jiaAsync } from '../../redux/actions/count'

function Count(props) {
  console.log('@',props);
  const {count} = props
  function jia() {
    props.jia(2)
  }

  function jian() {
    props.jian(2)
  }
  function jiaAsyc() {
    props.jiaAsync(2, 500)
  }

  return (

    <div>
      <h2>当前求和为{count}</h2>
      <button onClick={jia}>加</button>&nbsp;
      <button onClick={jian}>减</button>&nbsp;
      <button onClick={jiaAsyc}>异步加</button>
    </div>
  )
}

// const mapStateToProps = (state) => ({ count: state })
// function mapDispatchToProps(dispatch) {
//   return {
//     jia: (value) => {
//       dispatch(jiaaction(value))
//     },
//     jian: (value) => {
//       dispatch(jianaction(value))
//     },
//     jiaAsync: (value, delay) => {
//       dispatch(jiaAsync(value, delay))
//     }
//   }
// }


export default connect(
  state => ({ count: state.he }),
  {
    jia: jiaaction,
    jian: jianaction,
    jiaAsync
  }
  )(React.memo(Count))

