import { combineReducers } from 'redux'

import recommendReducer from '../application/Recommend/store/reducer'
export default combineReducers({
  recommend: recommendReducer
})