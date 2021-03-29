import { SINGER } from '../types'
import { IAction, AsyncAction } from '../../../typings'
import { ActionCreator } from 'redux'
import { fromJS } from 'immutable'
import { getSingerInfoRequest } from '../../../api/request'


const changeArtist: ActionCreator<IAction<SINGER>> = (data) => ({
  type: SINGER.CHANGE_ARTIST,
  payload: fromJS(data)
});

const changeSongs: ActionCreator<IAction<SINGER>> = (data) => ({
  type: SINGER.CHANGE_SONGS_OF_ARTIST,
  payload: fromJS(data)
})
export const changeEnterLoading: ActionCreator<IAction<SINGER>> = (data) => ({
  type: SINGER.CHANGE_ENTER_LOADING,
  payload: data
})

export const getSingerInfo: AsyncAction<SINGER> = (id: number) => {
  return dispatch => {
    getSingerInfoRequest(id).then((data: any) => {
      dispatch(changeArtist(data.artist));
      dispatch(changeSongs(data.hotSongs));
      dispatch(changeEnterLoading(false));
    })
  }
}