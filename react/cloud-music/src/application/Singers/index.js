import React, { useState, useEffect } from 'react'
import Horizen from '../../baseUI/horizen-item'
import { categoryTypes, alphaTypes } from '../../api/config'
import { NavContainer, List, ListItem, ListContainer } from './style'
import Scroll from '../../components/Scroll';
import { connect } from 'react-redux'
import * as actions from '../Singers/store/actionCreateor'
import Loading from '../../components/Loading'
import LazyLoad, { forceCheck } from 'react-lazyload'

function Singers(props) {
  const { singerList, pageCount, pullDownLoading, pullUpLoading, enterLoading } = props
  const singerListData = singerList.toJS() || []
  const { updateDispatch, getHotSingerList, PullDownRefreshDispatch, pullUpRefreshDispatch } = props
  const [type, setType] = useState('-1');
  const [area, setArea] = useState('-1');
  const [alpha, setAlpha] = useState('');
  const [categoryId, setCategoryId] = useState(null)
  const [alphaId, setAlphaId] = useState(null)
  useEffect(() => {
    getHotSingerList();
  },[])
  const renderSingerList = () => {
    return (
      <>
        {enterLoading ? <Loading /> : null}
        <List>
          {
            singerListData.map((item, index) => {
              return (
                <ListItem
                  key={item.id + '' + index}
                >
                  <div className="img_wrapper">
                    <LazyLoad placeholder={<img width="100%" height="100%" src={require('../../assets/img/music.png')} alt="music"></img>}>
                      <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music"></img>
                    </LazyLoad>
                  </div>
                  <span className="name">{item.name}</span>
                </ListItem>
              )
            })
          }
        </List>
      </>
    )
  }
  const handleUpdateAlpha = (alpha) => {
    setAlpha(alpha);
    updateDispatch(type, area, alpha);
  }
  const handleUpdateCategory = ({ type, area }) => {
    setType(type);
    setArea(area);
    updateDispatch(type, area, alpha);
  }

  const handleSelectedAlpha = (id) => {
    setAlphaId(id)
  }

  const handleSelectedCategory = (id) => {
    setCategoryId(id)
  }

  const handlePullUp = () => {
    pullUpRefreshDispatch(type, area, alpha, alpha === '' && type === '-1' && area === '-1', pageCount)
  }
  const handlePullDown = () => {
    PullDownRefreshDispatch(type, area, alpha)
  }

  
  
  return (
    <>
      <NavContainer>
        <Horizen
          list={categoryTypes}
          title={"分类(默认热门)"}
          oldVal={categoryId}
          handleClick={handleUpdateCategory}
          handleSelected={handleSelectedCategory}
        >
        </Horizen>
        <Horizen
          list={alphaTypes}
          title={"首字母:"}
          oldVal={alphaId}
          handleClick={handleUpdateAlpha}
          handleSelected={handleSelectedAlpha}
        >
        </Horizen>
        <ListContainer>
          <Scroll
            pullUp={handlePullUp}
            pullDown={handlePullDown}
            pullUpLoading={pullUpLoading}
            pullDownLoading={pullDownLoading}
            onScroll={forceCheck}
          >
            {renderSingerList()}
          </Scroll>
        </ListContainer>
      </NavContainer>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    singerList: state.getIn(['singers', 'singerList']),
    pageCount: state.getIn(['singers', 'pageCount']),
    pullDownLoading: state.getIn(['singers', 'pullDownLoading']),
    pullUpLoading: state.getIn(['singers', 'pullUpLoading']),
    enterLoading: state.getIn(['singers', 'enterLoading'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHotSingerList: () => {
      dispatch(actions.getHotSingerList())
    },
    updateDispatch: (type, area, alpha) => {
      dispatch(actions.changePullDownLoading(true))
      dispatch(actions.changePageCount(0));
      dispatch(actions.getSingerList(type, area, alpha))
    },
    // 滑到最底部刷新部分的处理
    pullUpRefreshDispatch: (type, area, alpha, hot, count) => {
      dispatch(actions.changePullUpLoading(true));
      dispatch(actions.changePageCount(count + 1));
      if (hot) {
        dispatch(actions.getMoreHotSingerList());
      } else {
        dispatch(actions.getMoreSingerList(type, area, alpha));
      }
    },
    // 顶部下拉刷新
    PullDownRefreshDispatch: (type, area, alpha) => {
      dispatch(actions.changePullDownLoading(true));
      dispatch(actions.changePageCount(0));//属于重新获取数据
      if (type === '-1' && area === '-1', alpha === '') {
        dispatch(actions.getHotSingerList());
      } else {
        dispatch(actions.getSingerList(type, area, alpha));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers))

