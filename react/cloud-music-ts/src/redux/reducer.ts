import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../application/Recommend/store'
import { reducer as singersReducer } from '../application/Singers/store'
import { rankReducer } from '../application/Rank/store'
import { albumReducer } from '../application/Albun/store'
import { reducer as SingerReducer } from '../application/Singer/store'
import {reducer as PlayerReducer} from '../application/Player/store'
export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  rank: rankReducer,
  album: albumReducer,
  singerInfo: SingerReducer,
  player: PlayerReducer
})