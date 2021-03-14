import { ActionRecommendConstants } from './constants'
import { fromJS } from 'immutable'
import { ThunkAction } from 'redux-thunk'
import {AxiosResponse} from 'axios'
import { getBannerRequest, getRecommendListRequest } from '../../../api/request'
import { IBannerData, IRecommend, RootState } from '../../../typings'
import {IAction} from './types'

interface Banner {
  banners: IBannerData[],
}
interface Recommend extends AxiosResponse{
  result?: IRecommend[]
}


export const changeBannerList = (data: Banner) => ({
  type: ActionRecommendConstants.CHANGE_BANNER,
  data: fromJS(data)
})

export const changeRecommendList = (data: Recommend) => ({
  type: ActionRecommendConstants.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
})

export const getBannerList = (): ThunkActionType => {
  return (dispatch) => {
    getBannerRequest().then((data: any) => {
      dispatch(changeBannerList(data.banners))
    }).catch(() => {
      console.log('轮播图数据传输错误');
    })
  }
}

export const getRecommendList = (): ThunkActionType => {
  return (dispatch) => {
    getRecommendListRequest().then((data: any) => {
      dispatch(changeRecommendList(data.result))
    }).catch(() => {
      console.log("推荐歌单数据传输错误");
    });
  }
}



export interface BannerAction {
  type: ActionRecommendConstants.CHANGE_BANNER
  [extryProp: string]: any
}
export interface RecommendAction {
  type: ActionRecommendConstants.CHANGE_RECOMMEND_LIST
  [extryProp: string]: any
}



// 声明thunkAction
export type ThunkActionType = ThunkAction<any,RootState,any,IAction>

