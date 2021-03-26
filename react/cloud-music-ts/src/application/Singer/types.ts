import { MutableRefObject, RefObject } from 'react';
import {RouteConfigComponentProps} from 'react-router-config'

// 样式接口
export interface ImgProps {
  bgUrl: string,
}

// 函数组件propsjiekou
export interface IProps extends RouteConfigComponentProps {
  match: any
}
