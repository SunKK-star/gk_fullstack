import React, { useEffect, FC, ReactElement, useContext } from 'react'
import Horizen from '../../baseUI/horizen-item'
import { categoryTypes, alphaTypes } from '../../api/config'
import { NavContainer } from './style'
import { List, ListItem, ListContainer } from './style'
import Scroll from '../../baseUI/MyScroll'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Record } from 'immutable'
import { getHotSingerList, getSingerList, changePageCount, changeEnterLoading, changePullDownLoading, changePullUpLoading, getMoreSingerList, getMoreHotSingerList } from './store/actionCreator'
import { IArtist, keyType, StoreState, IAction, SingerState } from '../../typings'
import { nanoid } from 'nanoid'
import Loading from '../../baseUI/loading'
import { CategoryDataContext, CATEGORY } from './data'
import { actionType } from './store/constants'



interface IProps {
  [extra: string]: any
}
export interface IHandleClick<T> {
  (id: number, key: T): void
}



const Singer: FC<IProps> = (props): ReactElement => {

  const { singerList, enterLoading, pullUpLoading, pullDownLoading, pageCount } = props

  const { getHotSingerListDispatch, getSingerListDispatch, pullUpRefreshDispatch, pullDownRefreshDispatch } = props

  const { data, dispatch } = useContext<any>(CategoryDataContext);
  const { category: categoryKey, alpha: alphaKey, categoryId, alphaId } = data.toJS();
  const singerListJS = singerList.toJS() || [];

  const handleCategory: IHandleClick<keyType | string> = (categoryId, categoryKey) => {
    dispatch({ type: CATEGORY.CHANGE_CATEGORY_ID, payload: categoryId })
    dispatch({ type: CATEGORY.CHANGE_CATEGORY, payload: categoryKey });
    getSingerListDispatch((categoryKey as keyType).type, (categoryKey as keyType).area, alphaKey);
  }
  const handleAlpha: IHandleClick<keyType | string> = (alphaId, alphaKey) => {
    dispatch({ type: CATEGORY.CHANGE_ALPHA_ID, payload: alphaId })
    dispatch({ type: CATEGORY.CHANGE_ALPHA, payload: alphaKey });
    getSingerListDispatch((categoryKey as keyType).type, (categoryKey as keyType).area, alphaKey);
  }

  // 下拉刷新
  function handlePullDown() {
    pullDownRefreshDispatch((categoryKey as keyType).type, (categoryKey as keyType).area, alphaKey)
  }

  // 上拉刷新
  function handlePullUp() {
    pullUpRefreshDispatch((categoryKey as keyType).type, (categoryKey as keyType).area, alphaKey, pageCount)
  }


  useEffect(() => {
    if (!singerList.size) {
      getHotSingerListDispatch();
    }
  }, [getHotSingerListDispatch, singerList.size])

  const renserList = () => {
    return (
      <List>
        {
          singerListJS.map((item: IArtist) => {
            return (
              <ListItem key={nanoid()}>
                <div className="img_wrapper">
                    <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music" />
                </div>
                <span className="name">{item.name}</span>
              </ListItem>
            )
          })
        }
      </List>
    )
  }
  return (
    <div>
      {enterLoading ? <Loading /> : null}
      <NavContainer>
        <Horizen
          list={categoryTypes}
          oldVal={categoryId}
          title="分类(默认热门)"
          handleClick={handleCategory}
        ></Horizen>
        <Horizen
          list={alphaTypes}
          oldVal={alphaId}
          title="首字母"
          handleClick={handleAlpha}
        ></Horizen>
      </NavContainer>
      <ListContainer>
        <Scroll
          pullDown={handlePullDown}
          pullUp={handlePullUp}
          pullUpLoading={pullUpLoading}
          pullDownLoading={pullDownLoading}
        >
          {renserList()}
        </Scroll>
      </ListContainer>
    </div>
  )
}

const mapStateToProps = (state: Record<SingerState>) => ({
  singerList: state.getIn(['singer', 'singerList']),
  enterLoading: state.getIn(['singer', 'enterLoading']),     //控制进场Loading
  pullUpLoading: state.getIn(['singer', 'pullUpLoading']),  //控制上拉加载动画
  pullDownLoading: state.getIn(['singer', 'pullDownLoading']), //控制下拉加载动画
  pageCount: state.getIn(['singer', 'pageCount'])
})

const mapDispatchToProps = (dispatch: ThunkDispatch<Record<StoreState>, any, IAction<actionType>>) => ({
  getHotSingerListDispatch() {
    dispatch(getHotSingerList())
  },
  getSingerListDispatch(type: string, area: string, alpha: string) {
    dispatch(changeEnterLoading(true));
    dispatch(getSingerList(type, area, alpha))
  },
  // 上拉到底部的处理
  pullUpRefreshDispatch(type: string, area: string, alpha: string, pageCount: number) {
    dispatch(changePullUpLoading(true))
    dispatch(changePageCount(pageCount + 1));
    if (type === '-1' && area === '-1' && alpha === '') {
      dispatch(getMoreHotSingerList());
    } else {
      dispatch(getMoreSingerList(type, area, alpha));
    }
  },
  // 下拉到顶部的处理
  pullDownRefreshDispatch(type: string, area: string, alpha: string) {
    dispatch(changePullDownLoading(true));
    dispatch(changePageCount(0)); // 重新获取数据
    if (type === '-1' && area === '-1' && alpha === '') {
      dispatch(getHotSingerList());
    } else {
      dispatch(getSingerList(type, area, alpha));
    }
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singer))