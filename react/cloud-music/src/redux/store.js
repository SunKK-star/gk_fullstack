import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import allReducer from './index'

export default createStore(allReducer, applyMiddleware(thunk))