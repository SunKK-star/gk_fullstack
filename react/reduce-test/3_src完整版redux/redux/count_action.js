// 该文件专门为Count组件生成action对象
import {INCREMENT, DECREMENT} from './constant'

export const createIncrementAcrion = data => ({type: INCREMENT, data})
export const createDecrementAcrion = data => ({type: DECREMENT, data})