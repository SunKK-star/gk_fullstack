import {ActionRecommendConstants} from './constants';
import { fromJS } from 'immutable';// 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构
import {IAction} from './types'


const initialState = fromJS ({
  bannerList: [],
  recommendList: [],
});


const RecommendReducer =  (state: any = initialState, {type, payload}: IAction) => {
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
