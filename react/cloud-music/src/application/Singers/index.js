import React, { useState, useEffect } from 'react'
import Horizen from '../../baseUI/horizen-item'
import { categoryTypes, alphaTypes } from '../../api/config'
import { NavContainer, List, ListItem, ListContainer } from './style'
import Scroll from '../../components/Scroll';
import { connect } from 'react-redux'
import * as actions from '../Singers/store/actionCreateor'
import Loading from '../../components/Loading'

function Singers(props) {
  const { singerList, pageCount, pullDownLoading, pullUpLoading, enterLoading } = props
  const singerListData = singerList.toJS() || []
  const { changePageCount, getHotSingerList, getMoreHotSingerList, getSingerList, getMoreSingerList } = props
  const [category, setCategory] = useState(null);
  const [alpha, setAlpha] = useState(null)
  useEffect(() => {
    getHotSingerList()
    console.log(singerListData, getHotSingerList);
  }, [])
  const renderSingerList = () => {
    return (
      <>
        {enterLoading?<Loading/>: null}
        <List>
          {
            singerListData.map(item => {
              return (
                <ListItem
                  key={item.id}
                >
                  <div className="img_wrapper">
                    <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music"></img>
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

  return (
    <>
      <NavContainer>
        <Horizen
          list={categoryTypes}
          title={"分类(默认热门)"} oldVal={category}
          handleClick={val => setCategory(preVal => preVal = val)}
        >
        </Horizen>
        <Horizen
          list={alphaTypes}
          title={"首字母:"} oldVal={alpha}
          handleClick={val => setAlpha(preVal => preVal = val)}
        >
        </Horizen>
        <ListContainer>
          <Scroll>
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
    changePageCount: () => {
      dispatch(actions.changePageCount())
    },
    getHotSingerList: () => {
      dispatch(actions.getHotSingerList())
    },
    getMoreHotSingerList: () => {
      dispatch(actions.getMoreHotSingerList())
    },
    getSingerList: () => {
      dispatch(actions.getSingerList())
    },
    getMoreSingerList: () => {
      dispatch(actions.getMoreSingerList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singers))

