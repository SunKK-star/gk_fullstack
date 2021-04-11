import React, { EventHandler, MouseEventHandler, TouchEventHandler, useEffect, useRef, useState } from 'react'
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
  margin-right: 10px;
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
      background-color: ${style["font-color-light"]};
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(-60%);
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
  const progressBarWidth = useRef<number>(0);
  const [touch, setTouch] = useState<Partial<IStartTouch>>({})
  useEffect(() => {
    progressBarWidth.current = progressBarRef.current!.offsetWidth
  }, [])

  // 处理进度条的偏移
  const _offset = (offsetWidth: number): void => {
    progressRef.current!.style.width = `${offsetWidth}px`;
    progressBtnRef.current!.style.transform = `translate(${offsetWidth}px, -60%)`;
  }
  const touchStart: TouchEventHandler = (e) => {
    const startTouch: Partial<IStartTouch> = {};
    startTouch.initiated = true;
    startTouch.startX = e.touches[0].clientX;
    startTouch.Plength = progressRef.current!.offsetWidth;
    setTouch(startTouch!);
  }
  const touchMove: TouchEventHandler = (e) => {
    if (!touch.initiated) return;
    let moveLength = e.touches[0].clientX - touch.startX!;
    const offsetWidth = Math.min(Math.max(0, touch.Plength! + moveLength), progressBarWidth.current)
    _offset(offsetWidth);
    _changePercent();
  }
  const touchEnd: TouchEventHandler = () => {
    const endTouch = JSON.parse(JSON.stringify(touch));
    endTouch.initiated = false;
    setTouch(endTouch);
    _changePercent();
  }

  // 进度条点击事件
  const progressClick: MouseEventHandler = (e) => {
    const rect = progressBarRef.current!.getBoundingClientRect();
    const offsetWidth = e.pageX - rect.left;
    _offset(offsetWidth);
    _changePercent();
  }

  // 改变新的进度
  const _changePercent = () => {
    const percent = progressRef.current!.offsetWidth / progressBarRef.current!.clientWidth
  }
  return (
    <ProgressBarWrapper>
      <div className="bar-inner" ref={progressBarRef} onClick={progressClick}>
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
