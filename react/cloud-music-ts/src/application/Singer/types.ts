import {RouteConfigComponentProps} from 'react-router-config'

// 样式接口
export interface ImgProps {
  bgUrl: string,
}

// 函数组件props接口
export interface IProps extends RouteConfigComponentProps {
  match: any;
  getSingerDataDispatch: (id: number) => void;
  artist: any;
  songsOfArtist: any;
  loading: boolean
}

// reducer状态
export interface IState {
  artist: any,
  songsOfArtist: any[],
  loading: boolean
}

// actiontype常量
export enum SINGER {
  CHANGE_ARTIST = 'singer/CHANGE_ARTIST',
  CHANGE_SONGS_OF_ARTIST = 'singer/CHANGE_SONGS_OF_ARTIST',
  CHANGE_ENTER_LOADING = 'singer/CHANGE_ENTER_LOADING'
}

export interface IArtist {
  artist: any;
  hotSongs: any
}


