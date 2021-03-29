import { fromJS, Record } from "immutable";
import { IAction } from "../../../typings";
import { IState, SINGER } from "../types";
import {Reducer} from 'redux'

const initialState = fromJS({
  artist: {},
  songsOfArtist: [],
  loading: true
})
const SingerReducer: Reducer<Record<IState>, IAction<SINGER>> = (state = initialState, action) => {
  switch (action.type) {
    case SINGER.CHANGE_ARTIST:
      return state.set('artist', action.payload)
    case SINGER.CHANGE_SONGS_OF_ARTIST:
      return state.set('songsOfArtist', action.payload)
    case SINGER.CHANGE_ENTER_LOADING:
      return state.set('loading', action.payload)
    default:
      return state
  }
}

export default SingerReducer