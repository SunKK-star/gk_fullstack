// 该文件专门为Count组件生成action对象
import { INCREMENT, DECREMENT } from '../constant'
// 同步action，就是action的值为对象
export const createIncrementAcrion = data => ({ type: INCREMENT, data })
export const createDecrementAcrion = data => ({ type: DECREMENT, data })
// 所谓的异步的action，就是action值为函数,异步action中一般都会调用同步action，异步action不是必要的
export const createAsyncIncrementSAction = (data, delay) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAcrion(data))
    }, delay)
  }
}

