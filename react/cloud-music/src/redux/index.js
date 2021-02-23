import { combineReducers } from 'redux-immutable'
import recommendReducer from '../application/Recommend/store/reducer'
import singersReducer from '../application/Singers/store/reducer'
import rankReducer from '../application/Rank/store/reducer'
export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  rank: rankReducer
})
