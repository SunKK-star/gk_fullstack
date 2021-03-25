import { ALBUM } from './constants'
import { IAction, AsyncAction} from '../../../typings'
import { ActionCreator } from 'redux'
import { fromJS } from 'immutable'
import { getAlbumDetailRequest } from '../../../api/request'

export const changeCurrentAlbum: ActionCreator<IAction<ALBUM>> = (data) => ({
  type: ALBUM.CHANGE_CURRENT_ALBUM,
  payload: fromJS(data)
})

export const changeEnterLoading: ActionCreator<IAction<ALBUM>> = (data) => ({
  type: ALBUM.CHANGE_ENTER_LOADING,
  payload: data
})

export const getCurrentAlbum: AsyncAction<ALBUM> = (id: number) => {
  return (dispatch) => {
    getAlbumDetailRequest(id).then((res: any) => {
      dispatch(changeCurrentAlbum(res.playlist));
      dispatch(changeEnterLoading(false));
    }).catch (() => {
      console.log ("获取 album 数据失败！")
    });
  }
}