import { PLAYER } from '../types'
import { IAction } from '../../../typings'
import { ActionCreator } from 'redux'
import { fromJS } from 'immutable'

export const changeCurrentSong: ActionCreator<IAction<PLAYER>> = (data) => ({
  type: PLAYER.SET_CURRENT_SONG,
  payload: fromJS(data)
})

export const changeFullScreen: ActionCreator<IAction<PLAYER>> = (data) => ({
  type: PLAYER.SET_FULL_SCREEN,
  payload: data
})

export const changePlayingState: ActionCreator<IAction<PLAYER>> = (data) => ({
  type: PLAYER.SET_PLAYING_STATE,
  payload: data
})

export const changeSequecePlayList: ActionCreator<IAction<PLAYER>> = (data) => ({
  type: PLAYER.SET_SEQUECE_PLAYLIST,
  payload: fromJS(data)
});

export const changePlayList: ActionCreator<IAction<PLAYER>> = (data) => ({
  type: PLAYER.SET_PLAYLIST,
  payload: fromJS(data)
});

export const changePlayMode: ActionCreator<IAction<PLAYER>> = (data) => ({
  type: PLAYER.SET_PLAY_MODE,
  payload: data
});

export const changeCurrentIndex: ActionCreator<IAction<PLAYER>> = (data) => ({
  type: PLAYER.SET_CURRENT_INDEX,
  payload: data
});

export const changeShowPlayList: ActionCreator<IAction<PLAYER>> = (data) => ({
  type: PLAYER.SET_SHOW_PLAYLIST,
  payload: data
});