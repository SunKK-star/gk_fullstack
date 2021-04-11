import React, { FC, useEffect, useRef, useState } from 'react'
import { TDispatchProps, TStateProps, IProps } from './types'
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux'
import MiniPlayer from './miniPlayer'
import NormalPlayer from './normalPlayer'
import { StoreState } from '../../typings'
import { Record } from 'immutable'
import { ActionCreator } from './store'
import { getSongUrl, isEmptyObject } from '../../api/utils'


const playList = [
  {
    ftype: 0,
    djId: 0,
    a: null,
    cd: '01',
    crbt: null,
    no: 1,
    st: 0,
    rt: '',
    cf: '',
    alia: [
      '手游《梦幻花园》苏州园林版推广曲'
    ],
    rtUrls: [],
    fee: 0,
    s_id: 0,
    copyright: 0,
    h: {
      br: 320000,
      fid: 0,
      size: 9400365,
      vd: -45814
    },
    mv: 0,
    al: {
      id: 84991301,
      name: '拾梦纪',
      picUrl: 'http://p1.music.126.net/M19SOoRMkcHmJvmGflXjXQ==/109951164627180052.jpg',
      tns: [],
      pic_str: '109951164627180052',
      pic: 109951164627180050
    },
    name: '拾梦纪',
    l: {
      br: 128000,
      fid: 0,
      size: 3760173,
      vd: -41672
    },
    rtype: 0,
    m: {
      br: 192000,
      fid: 0,
      size: 5640237,
      vd: -43277
    },
    cp: 1416668,
    mark: 0,
    rtUrl: null,
    mst: 9,
    dt: 234947,
    ar: [
      {
        id: 12084589,
        name: '妖扬',
        tns: [],
        alias: []
      },
      {
        id: 12578371,
        name: '金天',
        tns: [],
        alias: []
      }
    ],
    pop: 5,
    pst: 0,
    t: 0,
    v: 3,
    id: 1416767593,
    publishTime: 0,
    rurl: null
  }
];


const Player: FC<IProps> = (props) => {

  const { fullScreen, playing, currentSong, currentIndex } = props
  const { toggleFullScreenDispatch, togglePlayingDispatch, changeCurrentIndexDispatch, changeCurrentDispatch } = props
  // 目前播放时间
  const [currentTime, setCurrentTime] = useState<number>(0);
  // 歌曲总时长
  const [duration, setDuration] = useState<number>(0);
  // 歌曲播放进度
  let percet = isNaN(currentTime / duration) ? 0 : currentTime / duration;
  // 绑定ref
  const audioRef = useRef<HTMLAudioElement>(null)
  useEffect(() => {
    if(!currentSong) return;
    changeCurrentIndexDispatch(0);//currentIndex默认为-1，临时改成0
    let current = playList[0];
    changeCurrentDispatch(current);//赋值currentSong
    audioRef.current!.src = getSongUrl(current.id);
    togglePlayingDispatch(true);//播放状态
    setCurrentTime(0);//从头开始播放
    setDuration((current.dt / 1000) | 0);//时长
  }, []);

  useEffect(() => {
    playing ? audioRef.current!.play() : audioRef.current!.pause();
  }, [playing]);

  return (
    <div>
      {
        isEmptyObject(currentSong) ? null :
          <MiniPlayer
            fullScreen={fullScreen}
            toggleFullScreen={toggleFullScreenDispatch}
            playing={playing}
            song={currentSong}
            percent={0.2}
            togglePlayingDispatch={togglePlayingDispatch}
          />
      }
      {
        isEmptyObject(currentSong) ? null :
          <NormalPlayer
            fullScreen={fullScreen}
            toggleFullScreen={toggleFullScreenDispatch}
          />
      }
      <audio ref={audioRef}></audio>
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
