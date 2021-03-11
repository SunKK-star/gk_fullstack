import { createStore, applyMiddleware, compose, Store } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const store: Store = createStore(reducer, compose(applyMiddleware, thunk))

export default store