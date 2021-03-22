import { createStore, applyMiddleware, Store } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const store: Store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store