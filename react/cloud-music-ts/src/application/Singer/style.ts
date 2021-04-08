import styled from 'styled-components'
import style from '../../assets/global-style'
import { ImgProps } from './types'

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${style['background-color']};
  overflow: hidden;
  transform-origin: right bottom;
  &.fly-enter, &.fly-appear {
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-appear-active {
    transition: transform 0.3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit-active {
    transition: transform .3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`


export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 75%;
  transform-origin: top;
  background: url(${(props: ImgProps) => props.bgUrl});
  background-size: cover;
  .filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.3);
  }
`

export const CollectButton = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  box-sizing: border-box;
  width: 120px;
  height: 40px;
  background-color: ${style['theme-color']};
  display: flex;
  align-items: center;
  color: ${style['font-color-light']};
  z-index: 50;
  border-radius: 20px;
  font-size: 0;
  line-height: 40px;
  justify-content: center;
  margin: auto;
  margin-top: -60px;
  opacity: 0.8;
  .iconfont {
    display: inline-block;
    font-size: 12px;
    vertical-align: 1px;
  }
  .text {
    display: inline-block;
    font-size:14px;
    letter-spacing: 5px;
    margin-left: 15px;
  }
`
// 白色背景遮罩
export const BgLayer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  z-index: 50;
`

export const SongListWrapper = styled.div`
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px;
  >div {
    position: absolute;
    left: 0;
    width: 100%;
    overflow: visible;
  }
`