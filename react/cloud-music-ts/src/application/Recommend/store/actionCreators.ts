import { RECOMMEND } from './constants'
import { fromJS } from 'immutable'
import { getBannerRequest, getRecommendListRequest } from '../../../api/request'
import { IAction, AsyncAction } from '../../../typings'
import { ActionCreator } from 'redux'


export const changeBannerList: ActionCreator<IAction<RECOMMEND>> = (data) => ({
  type: RECOMMEND.CHANGE_BANNER,
  payload: fromJS(data)
})

export const changeEnterLoading: ActionCreator<IAction<RECOMMEND>> = (data) => ({
  type: RECOMMEND.CHANGE_ENTER_LOADING,
  payload: data
})

export const changeRecommendList: ActionCreator<IAction<RECOMMEND>> = (data) => ({
  type: RECOMMEND.CHANGE_RECOMMEND_LIST,
  payload: fromJS(data)
})

export const getBannerList: AsyncAction<RECOMMEND> = () => {
  return (dispatch) => {
    getBannerRequest().then((data: any) => {
      dispatch(changeBannerList(data.banners));
      dispatch(changeEnterLoading(false));
    }).catch(() => {
      console.log('轮播图数据传输错误');
    })
  }
}

export const getRecommendList: AsyncAction<RECOMMEND> = () => {
  return (dispatch) => {
    getRecommendListRequest().then((data: any) => {
      dispatch(changeRecommendList(data.result))
    }).catch(() => {
      console.log("推荐歌单数据传输错误");
    });
  }
}




