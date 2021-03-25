import { fromJS, Record } from 'immutable'
import { getRankListRequest } from '../../../api/request'
import { ActionCreator } from 'redux'
import {RankState,IAction, AsyncAction} from '../../../typings'

// action
export enum RANK {
  CHANGE_RANK_LIST = 'rank/CHANGE_RANK_LIST',
  CHANGE_LOADING = 'rank/CHANGE_LOADING'
}


// actionCreate
export const changeRankList: ActionCreator<IAction<RANK>> = (data) => ({
  type: RANK.CHANGE_RANK_LIST,
  payload: fromJS(data)
})

export const changeLoading: ActionCreator<IAction<RANK>> = (data) => ({
  type: RANK.CHANGE_LOADING,
  payload: data
})

export const getRankList: AsyncAction<RANK> = () => {
  return (dispatch) => {
    getRankListRequest().then((res: any) => {
      let list = res && res.list;
      dispatch(changeRankList(list));
      dispatch(changeLoading(false))
    })
  }
}

const initialStaet = fromJS({
  rankList: [],
  loading: true
})

// reducer
export const rankReducer = (state: Record<RankState> = initialStaet, action: IAction<RANK>) => {
  switch (action.type) {
    case RANK.CHANGE_RANK_LIST:
      return state.set('rankList', action.payload)
    case RANK.CHANGE_LOADING:
      return state.set('loading', action.payload)
    default:
      return state;
  }
}
