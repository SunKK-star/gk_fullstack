import { actionType } from './constants'
import { fromJS, Record } from 'immutable'
import {IState} from './actionCreator'


interface IAction {
  type: actionType,
  [payload: string]: any
}


const defaultState = fromJS({
  singerList: [],
  enterLoading: true,     //控制进场Loading
  pullUpLoading: false,   //控制上拉加载动画
  pullDownLoading: false, //控制下拉加载动画
  pageCount: 0            //这里是当前页数，我们即将实现分页功能
});

export default (state: Record<IState> = defaultState, action: IAction) => {
  const {type, payload} = action
  switch (type) {
    case actionType.CHANGE_SINGER_LIST:
      return state.set('singerList', payload)
    case actionType.CHANGE_PAGE_COUNT:
      return state.set('pageCount', payload)
    case actionType.CHANGE_ENTER_LOADING:
      return state.set('enterLoading', payload)
    case actionType.CHANGE_PULLDOWN_LOADING:
      return state.set('pullDownLoading', payload)
    default:
      return state.set('pullUpLoading', payload)
  }
}   