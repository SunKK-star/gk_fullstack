// 改文件专门用于暴露store对象，整个应用只有一个store对象
import thunk from 'redux-thunk'

import {createStore, applyMiddleware} from 'redux'
import countReducer from './count_reducer'

export default createStore(countReducer, applyMiddleware(thunk))