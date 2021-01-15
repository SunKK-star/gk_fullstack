// 该文件用于汇总所有的reducer为一个总的reducer
import count from './reducers/count'
import persons from './reducers/peson'
import {combineReducers} from 'redux'

// 汇总所有的reducer变为一个总的reducers
export default  combineReducers({
  count,
  persons
}) // combineReducers传入的对象就是redux保存的总状态对象