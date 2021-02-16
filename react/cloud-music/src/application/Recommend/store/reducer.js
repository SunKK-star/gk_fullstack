import * as actionTypes from './constants';
import { fromJS } from 'immutable';// 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构

const defaultState = fromJS ({
  bannerList: [],
  recommendList: [],
  enterLoading: true
});
  
export default (state = defaultState, action) => {
  const {type, data} = action
  switch (type) {
    case actionTypes.CHANGE_BANNER:
      return state.set('bannerList', data);
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set('recommendList', data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set('enterLoading',data)
    default:
      return state;
  }
}