import {RECOMMEND} from './constants';
import { fromJS, Record } from 'immutable';// 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构
import {IAction, RecommendState} from '../../../typings'


const initialState = fromJS ({
  bannerList: [],
  recommendList: [],
  enterLoading: true
});


const RecommendReducer =  (state: Record<RecommendState> = initialState, {type, payload}: IAction<RECOMMEND>) => {
  switch (type) {
    case RECOMMEND.CHANGE_BANNER:    
      return state.set('bannerList', payload);
    case RECOMMEND.CHANGE_RECOMMEND_LIST:
      return state.set('recommendList', payload);
    case RECOMMEND.CHANGE_ENTER_LOADING:
      return state.set('enterLoading', payload)
    default:
      return state;
  }
}

export default RecommendReducer
