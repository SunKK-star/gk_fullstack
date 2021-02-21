import { getHotSingerListRequest, getSingerListRequest } from '../../../api/requset';
import { CHANGE_ENTER_LOADING, CHANGE_PULLDOWN_LOADING, CHANGE_PAGE_COUNT, CHANGE_PULLUP_LOADING, CHANGE_SINGER_LIST } from './constants'
import { fromJS } from 'immutable';

const changeSingerList = (data) => ({
  type: CHANGE_SINGER_LIST,
  data: fromJS(data)
})

export const changePageCount = (data) => ({
  type: CHANGE_PAGE_COUNT,
  data
})

// 进场Loading
const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data
})

// 滑动最底部上拉Loading
const changePullUpLoading = (data) => ({
  type: CHANGE_PULLUP_LOADING,
  data
})

// 顶部下拉刷新Loading
const changePullDownLoading = (data) => ({
  type: CHANGE_PULLDOWN_LOADING,
  data
})

// 第一次加载热门歌手
export const getHotSingerList = () => {
  return (dispatch) => {
    getHotSingerListRequest(0).then(res => {
      const data = res.artists;
      dispatch(changeSingerList(data));
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false))
    }).catch(err => {
      console.log('热门歌手数据获取失败');
    })
  }
}

// 加载更多热门歌手
export const getMoreHotSingerList = () => {
  return (dispatch, getState) => {
    const pageCount = getState().getIn(['singers', 'pageCount'])
    const singerList = getState().getIn(['singers', 'singerList']).toJS()
    getHotSingerListRequest(pageCount).then(res => {
      const data = [...singerList, ...res.artists];
      dispatch(changeSingerList(data));
      dispatch(changePullUpLoading(false))
    }).catch(err => {
      console.log('加载更多热门歌手失败');
    })
  }
}

// 第一次加载对应类别的歌手
export const getSingerList = (category, alpha) => {
  return (dispatch) => {
    getSingerListRequest(category, alpha, 0).then(res => {
      const data = res.artists;
      dispatch(changeSingerList(data));
      dispatch(changeEnterLoading(false));
      dispatch(changePullDownLoading(false));
    }).catch(err => {
      console.log('获取歌手信息失败');
    })
  }
}

// 加载更多对应类别歌手数据
export const getMoreSingerList = (category, alpha) => {
  return (dispatch, getState) => {
    const pageCount = getState().getIn(['singers', 'pageCount'])
    const singerList = getState().getIn(['singers', 'singerList']).toJS();
    getSingerListRequest(category, alpha, pageCount).then(res => {
      const data = [...singerList, ...res.artists]
      dispatch(changeSingerList(data))
      dispatch(changePullUpLoading(false))
    }).catch(err => {
      console.log('获取歌手信息失败');
    })
  }
}