// 改文件专门用于暴露store对象，整个应用只有一个store对象
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import allReducer from './index'

export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))