import { fromJS } from 'immutable';
import * as actionTypes from './constants'

const defaultState = fromJS({
  singerList: [],
  enterLoading: true,     //控制进场Loading
  pullUpLoading: false,   //控制上拉加载动画
  pullDownLoading: false, //控制下拉加载动画
  pageCount: 0            //这里是当前页数，我们即将实现分页功能
});

export default (state = defaultState, action) => {
  const { type, data } = action
  switch (type) {
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set('singerList', data)
    case actionTypes.CHANGE_PAGE_COUNT:
      return state.set('pageCount', data)
    case actionTypes.CHANGE_PULLDOWN_LOADING:
      return state.set('pullDownLoading', data)
    case actionTypes.CHANGE_PULLUP_LOADING:
      return state.set('pullUpLoading', data)
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set('enterLoading', data)
    default: 
      return state;
  }
}