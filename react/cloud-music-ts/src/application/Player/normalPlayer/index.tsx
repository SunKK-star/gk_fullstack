import React, { FC, useRef } from "react";
import {
  NormalPlayerContainer,
  Top,
  Middle,
  Bottom,
  Operators,
  CDWrapper,
  ProgressWrapper
} from "./style";
import { INormalProps } from '../types'
import { CSSTransition } from 'react-transition-group'  
import ProgressBar from '../../../baseUI/progressBar'

const NormalPlayer: FC<INormalProps> = (props) => {
  const { fullScreen } = props
  const { toggleFullScreen } = props
  const normalPlayerRef = useRef<HTMLDivElement>(null)
  return (
    <CSSTransition
      in={fullScreen}
      timeout={400}
      classNames="normal"
      mountOnEnter
      onEnter={() => {
        normalPlayerRef.current!.style.display = "";
      }}
      onExited={() => {
        normalPlayerRef.current!.style.display = "none";
      }}
    >
      <NormalPlayerContainer ref={normalPlayerRef}>
        <div className="background">
          <img
            src="http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"
            width="100%"
            height="100%"
            alt="歌曲图片"
          />
        </div>
        <div className="background layer"></div>
        <Top className="top">
          <div className="back" onClick={() => toggleFullScreen(false)}>
            <i className="iconfont icon-back">&#xe638;</i>
          </div>
          <h1 className="title">木偶人</h1>
          <h1 className="subtitle">薛之谦</h1>
        </Top>
        <Middle>
          <CDWrapper>
            <div className="cd">
              <img
                className="image play"
                src="http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"
                alt=""
              />
            </div>
          </CDWrapper>
        </Middle>
        <Bottom className="bottom">
          <ProgressWrapper>
            <span className="time time-l">0:00</span>
            <ProgressBar/>
            <span className="time time-r">4:17</span>
          </ProgressWrapper>
          <Operators>
            <div className="icon i-left">
              <i className="iconfont">&#xe66c;</i>
            </div>
            <div className="icon i-left">
              <i className="iconfont">&#xe62f;</i>
            </div>
            <div className="icon i-center">
              <i className="iconfont">&#xe65c;</i>
            </div>
            <div className="icon i-right">
              <i className="iconfont">&#xe62e;</i>
            </div>
            <div className="icon i-right">
              <i className="iconfont">&#xe670;</i>
            </div>
          </Operators>
        </Bottom>
      </NormalPlayerContainer>
    </CSSTransition>
  );
}
export default React.memo(NormalPlayer);