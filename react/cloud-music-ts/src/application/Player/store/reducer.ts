import { playMode, PLAYER } from '../types'
import { IAction, IPlayerState } from '../../../typings'
import { fromJS, Record } from 'immutable'
import { Reducer } from 'redux'

const initialState = fromJS({
  fullScreen: false,// 播放器是否为全屏模式
  playing: false, // 当前歌曲是否播放
  sequencePlayList: [], // 顺序列表 (因为之后会有随机模式，列表会乱序，因从拿这个保存顺序列表)
  playList: [],
  mode: playMode.sequence,// 播放模式
  currentIndex: -1,// 当前歌曲在播放列表的索引位置
  showPlayList: false,// 是否展示播放列表
  currentSong: {}
})

const PlayerReducer: Reducer<Record<IPlayerState>, IAction<PLAYER>> = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER.SET_CURRENT_SONG:
      return state.set('currentSong', action.payload);
    case PLAYER.SET_FULL_SCREEN:
      return state.set('fullScreen', action.payload);
    case PLAYER.SET_PLAYING_STATE:
      return state.set('playing', action.payload);
    case PLAYER.SET_SEQUECE_PLAYLIST:
      return state.set('sequencePlayList', action.payload);
    case PLAYER.SET_PLAYLIST:
      return state.set('playList', action.payload);
    case PLAYER.SET_PLAY_MODE:
      return state.set('mode', action.payload);
    case PLAYER.SET_CURRENT_INDEX:
      return state.set('currentIndex', action.payload);
    case PLAYER.SET_SHOW_PLAYLIST:
      return state.set('showPlayList', action.payload);
    default:
      return state;
  }
}

export default PlayerReducer