import React, { FC, useCallback, useEffect } from 'react'
import { Container, TopDesc, Menu  } from './style'
import { RouteComponentProps } from 'react-router-dom'
import Header from '../../baseUI/header'
import Scroll from '../../baseUI/MyScroll'
import { isEmptyObject } from '../../api/utils'
import { connect } from 'react-redux'
import { StoreState, IAction, IAlbum } from '../../typings'
import { ALBUM } from './store/constants'
import { getCurrentAlbum, changeEnterLoading } from './store/actionCreator'
import { Record } from 'immutable'
import { ThunkDispatch } from 'redux-thunk' 
import Loading from '../../baseUI/loading'
import SongList from '../SongList'




interface IProps extends RouteComponentProps {
  match: any,
  currentAlbum: IAlbum,
  enterLoading: boolean,
  getCurrentAlbumDispatch: (id: number) => void
}
const Album: FC<IProps> = (props) => {
  const { match: { params: { id } }, currentAlbum, enterLoading, getCurrentAlbumDispatch } = props
  const handleBack = useCallback(      
    () => {
      props.history.goBack();
    },[props.history]
  )
  useEffect(() => {
    getCurrentAlbumDispatch(id)
  }, [getCurrentAlbumDispatch, id])
  const renderTesc = () => {
    return (
      <TopDesc background={currentAlbum.coverImgUrl}>
        <div className="background">
          <div className="filter"></div>
        </div>
        <div className="img_wrapper">
          <div className="decorate"></div>
          <img src={currentAlbum.coverImgUrl} alt="" />
          <div className="play_count">
            <i className="iconfont play">&#xe885;</i>
            <span className="count">{Math.floor(currentAlbum.subscribedCount / 1000) / 10} 万 </span>
          </div>
        </div>
        <div className="desc_wrapper">
          <div className="title">{currentAlbum.name}</div>
          <div className="person">
            <div className="avatar">
              <img src={currentAlbum.creator.avatarUrl} alt="" />
            </div>
            <div className="name">{currentAlbum.creator.nickname}</div>
          </div>
        </div>
      </TopDesc>
    )
  }
  const renderMenu = () => {
    return (
      <Menu>
        <div>
          <i className="iconfont">&#xe6f5;</i>
        评论
      </div>
        <div>
          <i className="iconfont">&#xe60e;</i>
        点赞
      </div>
        <div>
          <i className="iconfont">&#xe632;</i>
        收藏
      </div>
        <div>
          <i className="iconfont">&#xe621;</i>
        更多
      </div>
      </Menu>
    )
  }
  
  return (
    <Container>
      {enterLoading ? <Loading /> : null}
      <Header title={"返回"} handleClik={handleBack}></Header>
      {!isEmptyObject(currentAlbum) ? (
        <Scroll bounceTop={false}>
          <div>
            {renderTesc()}
            {renderMenu()}
            <SongList showCollect={true} songs={currentAlbum.tracks} collectCount={currentAlbum.subscribedCount} />
          </div>
        </Scroll>
      ) : null}
    </Container>
  )
}

const mapStateToProps = (state: Record<StoreState>) => {
  return {
    currentAlbum: state.getIn(['album', 'currentAlbum']).toJS(),
    enterLoading: state.getIn(['album', 'enterloading'])
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<Record<StoreState>, any, IAction<ALBUM>>) => {
  return {
    getCurrentAlbumDispatch: (id: number) => {
      dispatch (changeEnterLoading (true));
      dispatch(getCurrentAlbum(id));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Album))
