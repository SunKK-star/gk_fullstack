import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getRankList } from '../Rank/store/actionCreator'
import { filterIndex } from '../../api/utils'
import { List, Container, ListItem, SongList } from './style'
import Loading from '../../components/Loading'
import Scroll from '../../components/Scroll'
import styled from 'styled-components'
import { nanoid } from 'nanoid'

const EnterLoading = styled.div``

function Rank(props) {
  const { loading, rankList: list } = props;
  const { getRankListDispatch } = props
  const rankList = list.toJS() || [];
  let globalStartIndex = filterIndex(rankList);
  // 官方榜
  let officialList = rankList.slice(0, globalStartIndex);
  // 全球榜
  let globalList = rankList.slice(globalStartIndex);
  useEffect(() => {
    getRankListDispatch();
  }, [])

  const renderRankList = (list, global) => {
    return (
      <List globalRank={global}>
        {
          list.map((item) => {
            return (
              <ListItem key={nanoid()} tracks={item.tracks}>
                <div className="img_wrapper">
                  <img width="100%" height="100%" src={item.coverImgUrl} alt=""></img>
                  <div className="decorate"></div>
                </div>
                <p className="updateFrequency">{item.updateFrequency}</p>
                {item.tracks.length > 0 && renderSongList(item.tracks)}
              </ListItem>
            )
          })
        }
      </List>
    )
  }
  const renderSongList = (tracks) => {
    return (
      <SongList>
        {
          tracks.map((item, idx) => {
            return (
              <li key={nanoid()}>{idx + 1}.{item.first}-{item.second}</li>
            )
          })
        }
      </SongList>
    )
  }
  let displayStyle = loading ? { "display": "none" } : { "display": "" }
  return (
    <>
      {loading ? <EnterLoading><Loading /></EnterLoading> : null}
      <Container>
        <Scroll>
          <div>
            <h1 className="titleStyle" style={displayStyle}>官方榜</h1>
            {renderRankList(officialList)}
            <h1 className="titleStyle" style={displayStyle}>全球榜</h1>
            {renderRankList(globalList, globalList)}
          </div>
        </Scroll>
      </Container>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.getIn(['rank', 'loading']),
    rankList: state.getIn(['rank', 'rankList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRankListDispatch: () => {
      dispatch(getRankList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Rank))

