import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import count from './reducers/count'
import person from './reducers/person'
// 汇总所有的reducer为一个总的reducer
const allReducer = combineReducers({he: count, rens: person})

export default createStore(allReducer, applyMiddleware(thunk))