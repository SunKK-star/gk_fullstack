// store
export enum playMode {
  sequence,
  loop,
  random
}

export enum PLAYER {
  SET_CURRENT_SONG = 'player/SET_CURRENT_SONG',
  SET_FULL_SCREEN = 'player/SET_FULL_SCREEN',
  SET_PLAYING_STATE = 'player/SET_PLAYING_STATE',
  SET_SEQUECE_PLAYLIST = 'player/SET_SEQUECE_PLAYLIST',
  SET_PLAYLIST = 'player/SET_PLAYLIST',
  SET_PLAY_MODE = 'player/SET_PLAY_MODE',
  SET_CURRENT_INDEX = 'player/SET_CURRENT_INDEX',
  SET_SHOW_PLAYLIST = 'player/SET_SHOW_PLAYLIST'
}



// index
export type IProps = TStateProps & TDispatchProps

// normalPlayer/index
export interface INormalProps {
  fullScreen: boolean
  toggleFullScreen: (data: boolean) => void,
  
}
// normalPlayer/style
export interface IShowState {
  show: boolean
}

// minPlayer
export interface IMinProps {
  fullScreen: boolean
  toggleFullScreen: (data: boolean) => void
  togglePlayingDispatch: (data: boolean) => void,
  playing: boolean
  song: any
  percent: number
}

export interface TStateProps {
  fullScreen: true
  playing: true
  sequencePlayList: any[]
  playList: any[]
  mode: playMode,// 播放模式
  currentIndex: number,// 当前歌曲在播放列表的索引位置
  showPlayList: true,// 是否展示播放列表
  currentSong: any
}

export interface TDispatchProps {
  togglePlayingDispatch: (data: boolean) => void,
  toggleFullScreenDispatch: (data: boolean) => void,
  togglePlayListDispatch: (data: boolean) => void,
  changeCurrentIndexDispatch: (data: number) => void,
  changeCurrentDispatch: (data: any) => void,
  changeModeDispatch: (data: playMode) => void,
  changePlayListDispatch: (data: any[]) => void,
}
