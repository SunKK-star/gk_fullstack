import React, { FC, useRef, MouseEvent } from 'react'
import { IMinProps } from '../types'
import { MiniPlayerContainer } from './style'
import { CSSTransition } from 'react-transition-group'
import ProgressWrapper from '../../../baseUI/progress-circle'

const MiniPlayer: FC<IMinProps> = (props) => {
  const { fullScreen, percent, playing, song } = props
  const { toggleFullScreen, togglePlayingDispatch} = props
  const miniPlayerRef = useRef<HTMLDivElement>(null)
  let persent = 0.2

  // 点击播放/暂停事件
  const clickPlaying = (e: MouseEvent, playing: boolean): void => {
    e.stopPropagation();
    togglePlayingDispatch(playing) 
  }
  return (
    <CSSTransition
      in={!fullScreen}
      timeout={400}
      classNames="mini"
      onEnter={() => {
        miniPlayerRef.current!.style.display = 'flex'
      }}
      onExit={() => {
        miniPlayerRef.current!.style.display = 'none'
      }}
    >
      <MiniPlayerContainer ref={miniPlayerRef} onClick={() => toggleFullScreen(true)}>
        <div className="imgWrapper">
          <img className={`${playing?"play":""}`} src="http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" alt="img" width="40" height="40" />
        </div>
        <div className="text">
          <h2 className="name">木偶人</h2>
          <p className="desc">薛之谦</p>
        </div>
        <div className="control">
          <ProgressWrapper radius={32} percent={persent}>  
            {
              playing ?
                <i className="icon-mini iconfont icon-pause" onClick={(e) => clickPlaying(e, false)}>&#xe650;</i> :
                <i className="icon-mini iconfont icon-play" onClick={(e) => clickPlaying(e, true)}>&#xe77e;</i>
            }
          </ProgressWrapper>
        </div>
        <div className="control">
          <i className="iconfont icon-option">&#xe670;</i>
        </div>
      </MiniPlayerContainer>
    </CSSTransition>
  )
}

export default React.memo(MiniPlayer)