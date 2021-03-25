import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../application/Recommend/store'
import { reducer as singerReducer } from '../application/Singer/store'
import { rankReducer } from '../application/Rank/store'
import {albumReducer} from '../application/Albun/store'
export default combineReducers({
  recommend: recommendReducer,
  singer: singerReducer,
  rank: rankReducer,
  album: albumReducer
})