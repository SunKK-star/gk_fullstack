import React, { FC, useEffect } from 'react'
import { TDispatchProps, TStateProps, IProps } from './types'
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux'
import MiniPlayer from './miniPlayer'
import NormalPlayer from './normalPlayer'
import { StoreState} from '../../typings'
import { Record } from 'immutable'
import { ActionCreator } from './store'



const Player: FC<IProps> = (props) => {
  const { fullScreen } = props
  const {toggleFullScreenDispatch} = props
  useEffect(() => {
    console.log(props);
  }, [])
  
  return (
    <div>
      <MiniPlayer
        fullScreen={fullScreen}
        toggleFullScreen={toggleFullScreenDispatch}
      />
      <NormalPlayer
        fullScreen={fullScreen}
        toggleFullScreen={toggleFullScreenDispatch}
      />
    </div>
  )
}

const mapStateToProps: MapStateToProps<TStateProps, any, Record<StoreState>> = (state) => {
  return {
    fullScreen: state.getIn(['player', 'fullScreen']),
    playList: state.getIn(['player', 'playList']).toJS(),
    playing: state.getIn(['player', 'playing']),
    sequencePlayList: state.getIn(['player', 'sequencePlayList']).toJS(),
    mode: state.getIn(['player', 'mode']),
    currentIndex: state.getIn(['player', 'currentIndex']),
    showPlayList: state.getIn(['player', 'showPlayList']),
    currentSong: state.getIn(['player', 'currentSong']).toJS(),
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<TDispatchProps, any> = (dispatch) => {
  return {
    toggleFullScreenDispatch: (data) => {
      dispatch(ActionCreator.changeFullScreen(data))
    },
    togglePlayListDispatch: (data) => {
      dispatch(ActionCreator.changeShowPlayList(data))
    },
    togglePlayingDispatch: (data) => {
      dispatch(ActionCreator.changePlayingState(data))
    },
    changeCurrentDispatch: (data) => {
      dispatch(ActionCreator.changeCurrentSong(data))
    },
    changeCurrentIndexDispatch: (data) => {
      dispatch(ActionCreator.changeCurrentIndex(data))
    },
    changeModeDispatch: (data) => {
      dispatch(ActionCreator.changePlayMode(data))
    },
    changePlayListDispatch: (data) => {
      dispatch(ActionCreator.changePlayList(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Player))
