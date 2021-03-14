import {ActionRecommendConstants} from './constants';
import { fromJS, List } from 'immutable';// 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构
import {Reducer} from 'redux'
import { Action } from './actionCreators'
import { IBannerData, IRecommend } from '../../../typings'
import {IAction} from './types'


const initialState = fromJS ({
  bannerList: [],
  recommendList: [],
});

type StateType = typeof initialState

interface RecommendReducerType {
  
}
interface IState {
  bannerList: IBannerData[];
  recommendList: IRecommend[]
}

const RecommendReducer =  (state: List<IState>, {type, payload}: IAction) => {
  switch (type) {
    case ActionRecommendConstants.CHANGE_BANNER:    
      return state.set('bannerList', payload);
    case ActionRecommendConstants.CHANGE_RECOMMEND_LIST:
      return state.set('recommendList', payload);
    default:
      return state;
  }
}

export default RecommendReducer




/**
 * 
 * @augments
 *  */





 interface API {
  '/user': { name: string },
  '/menu': { foods: Food[] },
}
const get = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
  return fetch(url).then(res => res.json())
}
API[URL]
