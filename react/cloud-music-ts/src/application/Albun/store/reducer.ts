import { IAction, AlbumState } from '../../../typings'
import { ALBUM } from './constants'
import {fromJS, Record} from 'immutable'
import { Reducer } from 'redux'

const initalState = fromJS({
  currentAlbum: {},
  enterloading: true
})
const albumReducer: Reducer<Record<AlbumState>, IAction<ALBUM>> = (state = initalState, action) => {
  switch (action.type) {
    case ALBUM.CHANGE_CURRENT_ALBUM:
      return state.set('currentAlbum', action.payload)
    case ALBUM.CHANGE_ENTER_LOADING:
      return state.set('enterloading', action.payload)
    default:
      return state
  }
}

export default albumReducer