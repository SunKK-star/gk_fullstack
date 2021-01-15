// 改文件专门用于暴露store对象，整个应用只有一个store对象
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/peson'

// 汇总所有的reducer变为一个总的reducers
const allReducer = combineReducers({
  he: countReducer,
  ren: personReducer
}) // combineReducers传入的对象就是redux保存的总状态对象
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))