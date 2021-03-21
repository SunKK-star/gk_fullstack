import { fromJS } from 'immutable'
import { actionType } from './constants'
import { ActionCreator } from 'redux'
import { IArtist } from '../../../typings'
import { getHotSingerListRequest, getSingerListRequest } from '../../../api/request'
import { ThunkDispatch } from 'redux-thunk'

export interface IAction {
  type: actionType,
  [payload: string]: any
}

interface IAxiosData {
  artists: IArtist[];
  code: number;
  more: boolean
}


export interface IState {
  singerList: IArtist[],
  enterLoading: boolean,     //控制进场Loading
  pullUpLoading: boolean,   //控制上拉加载动画
  pullDownLoading: boolean, //控制下拉加载动画
  pageCount: number
}


export const changeSingerList: ActionCreator<IAction> = (data) => ({
  type: actionType.CHANGE_SINGER_LIST,
  payload: fromJS(data)
})

export const changePageCount: ActionCreator<IAction> = (data) => ({
  type: actionType.CHANGE_PAGE_COUNT,
  payload: data
})

export const changeEnterLoading: ActionCreator<IAction> = (data) => ({
  type: actionType.CHANGE_ENTER_LOADING,
  payload: data
})

export const changePullUpLoading: ActionCreator<IAction> = (data) => ({
  type: actionType.CHANGE_PULLUP_LOADING,
  payload: data
})

export const changePullDownLoading: ActionCreator<IAction> = (data) => ({
  type: actionType.CHANGE_PULLDOWN_LOADING,
  payload: data
})

// 第一次加载热门歌手列表
export const getHotSingerList = () => {
  return (dispatch: ThunkDispatch<IState, any, IAction>) => {
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
export const getMoreHotSingerList = () => {
  return (dispatch: ThunkDispatch<IState, any, IAction>, getState: any) => {
    const pageCount = getState().getIn(['singer', 'pageCount']);
    const singerList = getState().getIn(['singer', 'singerList']).toJS();
    getHotSingerListRequest(pageCount).then((res: any) => {
      const data = [...singerList, ...res.artists];
      dispatch(changeSingerList(data));
      dispatch(changePullUpLoading(false))
    }).catch(() => {
      console.log('加载更多热门歌手失败');
    })
  }
}

// 第一次加载歌手列表
export const getSingerList = (category: string, area: string, alpha: string) => {
  return (dispatch: ThunkDispatch<IState, any, IAction>, getState: any) => {
    const pageCount = getState().getIn(['singer', 'pageCount']);
    getSingerListRequest(category, area, alpha, pageCount).then((res: any) => {
      dispatch(changeSingerList(res.artists));
      dispatch(changeEnterLoading(false))
      dispatch(changePullDownLoading(false));
    }).catch(() => {
      console.log('加载歌手列表失败');
    })
  }
}

// 获取更多歌手列表
export const getMoreSingerList = (category: string, area: string, alpha: string) => {
  return (dispatch: ThunkDispatch<IState, any, IAction>, getState: any) => {
    const pageCount = getState().getIn(['singer', 'pageCount']);
    const singerList = getState().getIn(['singer', 'singerList'])
    getSingerListRequest(category, area, alpha, pageCount).then((res: any) => {
      const data = [...singerList ,...res.artists]
      dispatch(changeSingerList(data));
      dispatch(changePullUpLoading(false))
    }).catch(() => {
      console.log('加载更多歌手失败');
    })
  }
}

