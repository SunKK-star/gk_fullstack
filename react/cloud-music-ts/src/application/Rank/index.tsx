import React, { CSSProperties, FC, ReactElement, useEffect } from 'react'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import { Record } from 'immutable'
import { filterIndex } from '../../api/utils'
import { getRankList, RANK } from './store'
import { IAction, StoreState } from '../../typings'
import { List, ListItem, SongItem, SongWrapper, Container } from './style'
import Scroll from '../../baseUI/MyScroll'
import { nanoid } from 'nanoid'
import Loading from '../../baseUI/loading'
import { RouteConfigComponentProps } from 'react-router-config'
import {renderRoutes} from 'react-router-config'
 
interface IProps extends RouteConfigComponentProps {
  rankList: Record<any[]>,
  loading: boolean,
  getRankListDispatch: Function,
  [extra: string]: any
}
interface ITracks {
  first: string,
  second: string
}

interface IRankListItem {
  tracks: ITracks[];
  [extra: string]: any
}

const Rank: FC<IProps> = (props): ReactElement => {
  const { rankList, loading, getRankListDispatch } = props
  let list = rankList.toJS() || []
  const hasTracksIdx = filterIndex(list);
  const noTracksList = list.splice(hasTracksIdx!)
  // 控制榜单标题显示
  const displayStyle: CSSProperties = list.length ? { "display": '' } : { "display": 'none' }
  useEffect(() => {
    if (!list.length) {
      getRankListDispatch();
    }

  }, [getRankListDispatch, list.length]);
  // 渲染榜单函数，传入不同的global来区分不同的布局
const renderRankList = (rankList: IRankListItem[], global: boolean) => {
  const enterDetail = (id: number) => {
    props.history.push(`/rank/${id}`)
  }
  return (
    <List globalRank={global}>
      {
        rankList.map((item) => {
          return (
            <ListItem onClick={() => enterDetail(item.id)}>
              <div className="img_wrapper">
                <img src={item.coverImgUrl} alt="" />
                <div className="decorate"></div>
                <div className="update_frequency">{item.updateFrequency}</div>
              </div>
              {renderSongList(item.tracks)}
            </ListItem>  
          )
        })
      }
    </List>
  )
}

const renderSongList = (tracks: any[]) => {
  return tracks.length ? (
    <SongWrapper>
      {
        tracks.map((item, idex) => {
          return (
            <SongItem key={nanoid()}>
              <div className="songitem">{idex + 1}.{item.first} - {item.second}</div>
            </SongItem>
          )
        })
      }
    </SongWrapper>
  ) : null
}

  return (
    <div>
      <Container>
      <Scroll direction="vertical">
        <div>
          {loading?<Loading/>:null}
          <div className="office" style={displayStyle}>官方榜</div>
          {renderRankList(list, true)}
          <div className="global" style={displayStyle}>全球榜</div>
          {renderRankList(noTracksList, false)}
        </div>
      </Scroll>
      </Container>
      {renderRoutes(props.route?.routes)}
    </div>
  )
}

const mapStateToProps = (state: Record<StoreState>) => {
  return {
    rankList: state.getIn(['rank', 'rankList']),
    loading: state.getIn(['rank', 'loading'])
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<Record<StoreState>, any, IAction<RANK>>) => {
  return {
    getRankListDispatch() {
      dispatch(getRankList());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Rank))
