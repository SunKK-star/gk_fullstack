import React, { TouchEventHandler, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import style from '../../assets/global-style'

interface IStartTouch {
  initiated: boolean  // 滑动状态
  startX: number // 滑动开始时的横向坐标
  Plength: number // 当前进度条的长度
}
const ProgressBarWrapper = styled.div`
  height: 30px;
  flex: 1;
  .bar-inner {
    position: relative;
    top: 13px;
    background-color: ${style["background-color-shadow"]};
    height: 4px;
    .progress {
      background-color: ${style["theme-color"]};
      height: 4px;
      width: 0;
    }
    .progress-btn-wrapper {
      position: absolute;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      transform: translate(-40%, -60%);
      background-color: ${style["font-color-light"]};
      display: flex;
      justify-content: center;
      align-items: center;
      .progress-btn {
        position: absolute;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: ${style["theme-color"]};
      }
    }
  }
`
const ProgressBar = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  const progressBtnRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [touch, setTouch] = useState<Partial<IStartTouch>>({})
  useEffect(() => {
  }, [])

  // 处理进度条的偏移
  const _offset = (offsetWidth: number): void => {
    progressRef.current!.style.width = `${offsetWidth}px`;
    progressBtnRef.current!.style.transform = `translate(${offsetWidth}px, -60%)`;
  }
  const touchStart:TouchEventHandler = (e) => {
    const startTouch: Partial<IStartTouch> = {};
    startTouch.initiated = true;
    startTouch.startX = e.touches[0].clientX;
    startTouch.Plength = progressRef.current!.offsetWidth;
    setTouch(startTouch!)
  }
  const touchMove:TouchEventHandler = (e) => {
    let moveLength = e.touches[0].clientX - touch.startX!;
    _offset(moveLength)
  }
  const touchEnd:TouchEventHandler = (e) => {
  }
  return (
    <ProgressBarWrapper>
      <div className="bar-inner" ref={progressBarRef}>
        <div className="progress" ref={progressRef}></div>
        <div className="progress-btn-wrapper" ref={progressBtnRef}
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          onTouchEnd={touchEnd}
        >
          <div className="progress-btn"></div>
        </div>
      </div>
    </ProgressBarWrapper>
  )
}

export default React.memo(ProgressBar)
