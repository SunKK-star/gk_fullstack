import styled from 'styled-components'
import style from '../../../assets/global-style'

export const MiniPlayerContainer = styled.div`
  /* &.mini-enter{
    transform: translate3d(0, 100%, 0);
  }
  &.mini-enter-active{
    transform: translate3d(0, 0, 0);
    transition: all .5s;
  }
  &.mini-exit{
    transform: translate3d(0, 0, 0);
  }
  &.mini-exit-active{
    transform: translate3d(0, 100%, 0);
    transition: all .5s;
  } */
  display: flex;  
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  height: 60px;
  background-color: ${style['highlight-background-color']};
  padding: 0 10px;
  &.mini-enter{
    transform: translate3d(0, 100%, 0);
  }
  &.mini-enter-active{
    transform: translate3d(0, 0, 0);
    transition: all 0.4s;
  }
  &.mini-exit-active{
    transform: translate3d(0, 100%, 0);
    transition: all .4s
  }
    .imgWrapper {
      flex: 0 0 40px;
      margin-left: 15px;
      .play {
        border-radius: 50%;
        background-color: #000;
      }
    }
  .text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 20px;
    margin-left: 20px;
    .name {
      font-size: ${style["font-size-m"]};
      color: ${style["font-color-desc"]};
      ${style.noWrap()}
    }
    .desc {
      font-size: ${style["font-size-s"]};
      color: ${style["font-color-desc-v2"]};
      ${style.noWrap()}
    }
  }
  .control {
    flex: 0 0 30px;
    padding: 0 10px;
    color: ${style['theme-color']};
  }
  .control {
    position: relative;
    .iconfont {
      font-size: 30px;
    }
    .icon-mini {
      position: absolute;
      font-size: 16px;
      left: 9px;
      top: 7px; 
    }
  }
  
`