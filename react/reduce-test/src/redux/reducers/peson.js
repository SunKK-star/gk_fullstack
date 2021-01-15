import {ADD_PERSON} from '../constant'

// 初始化人的列表
const initState = [{id:'001', name: 'Tom', age: 18}]
export default function personReducer(perState = initState, action) {
  console.log('@personReducer');
  const {type, data} = action 
  switch (type) {
    case ADD_PERSON:
      return [data, ...perState]
    default:
      return perState
  }
}