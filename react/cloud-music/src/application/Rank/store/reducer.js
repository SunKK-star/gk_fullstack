import * as actionTypes from './constants'
import {fromJS} from 'immutable'

const initState = fromJS({
  loading: true,
  rankList: []
})

export default (state = initState, action) => {
  const {type, data} = action
  switch (type) {
    case actionTypes.CHANGE_LOADING:
      return state.set('loading', data)
    case actionTypes.CHANGE_RANK_LIST:
      return state.set('rankList', data)
    default:
      return state
  }
}