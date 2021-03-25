import { fromJS } from 'immutable'
import { actionType } from './constants'
import { ActionCreator } from 'redux'
import { IAction, AsyncAction } from '../../../typings'
import { getHotSingerListRequest, getSingerListRequest } from '../../../api/request'


export const changeSingerList: ActionCreator<IAction<actionType>> = (data) => ({
  type: actionType.CHANGE_SINGER_LIST,
  payload: fromJS(data)
})

export const changePageCount: ActionCreator<IAction<actionType>> = (data) => ({
  type: actionType.CHANGE_PAGE_COUNT,
  payload: data
})

export const changeEnterLoading: ActionCreator<IAction<actionType>> = (data) => ({
  type: actionType.CHANGE_ENTER_LOADING,
  payload: data
})

export const changePullUpLoading: ActionCreator<IAction<actionType>> = (data) => ({
  type: actionType.CHANGE_PULLUP_LOADING,
  payload: data
})

export const changePullDownLoading: ActionCreator<IAction<actionType>> = (data) => ({
  type: actionType.CHANGE_PULLDOWN_LOADING,
  payload: data
})

// 第一次加载热门歌手列表
export const getHotSingerList: AsyncAction<actionType> = () => {
  return (dispatch) => {
    getHotSingerListRequest(0).then((res: any) => {
      dispatch(changeSingerList(res.artists));
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false));
    }).catch(() => {
      console.log('加载热门歌手失败');
    })
  }
}

// 加载更多歌手列表
export const getMoreHotSingerList: AsyncAction<actionType> = () => {
  return (dispatch, getState) => {
    const pageCount = getState().getIn(['singer', 'pageCount']);
    const singerList = getState().getIn(['singer', 'singerList']).toJS();
    getHotSingerListRequest(pageCount).then((res: any) => {
      const data = [...singerList, ...res.artists];
      dispatch(changeSingerList(data));
      dispatch(changePullUpLoading(false));
    }).catch(() => {
      console.log('加载更多热门歌手失败');
    })
  }
}

// 第一次加载歌手列表
export const getSingerList: AsyncAction<actionType> = (category: string, area: string, alpha: string) => {
  return (dispatch, getState) => {
    const pageCount = getState().getIn(['singer', 'pageCount']);
    getSingerListRequest(category, area, alpha, pageCount).then((res: any) => {
      dispatch(changeSingerList(res.artists));
      dispatch(changePullDownLoading(false));
      dispatch(changeEnterLoading(false));
    }).catch(() => {
      console.log('加载歌手列表失败');
    })
  }
}

// 获取更多歌手列表
export const getMoreSingerList: AsyncAction<actionType> = (category: string, area: string, alpha: string) => {
  return (dispatch, getState) => {
    const pageCount = getState().getIn(['singer', 'pageCount']);
    const singerList = getState().getIn(['singer', 'singerList'])
    getSingerListRequest(category, area, alpha, pageCount).then((res: any) => {
      const data = [...singerList ,...res.artists]
      dispatch(changeSingerList(data));
      dispatch(changePullUpLoading(false));
    }).catch(() => {
      console.log('加载更多歌手失败');
    })
  }
}

