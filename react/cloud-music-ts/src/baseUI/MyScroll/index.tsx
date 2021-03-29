import React, { useEffect, useState, useRef, useMemo, useImperativeHandle, ReactNode } from 'react'
import BScroll from 'better-scroll'
import styled from 'styled-components'
import Loading from '../loading'
import LoadingV2 from '../loading-v2'
import { debounce } from '../../api/utils'

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const PullUpLoading = styled.div``;
const PullDownLoading = styled.div``;

interface Iprops {
  probeType?: number;
  direction?: 'horizental' | 'vertical';
  refresh?: boolean;
  pullUpLoading?: boolean;
  pullDownLoading?: boolean;
  bounceTop?: boolean;
  bounceBottom?: boolean;
  pullDown?: Function;
  pullUp?: Function;
  onScroll?: Function;
  click?: boolean;
  children: ReactNode
}

export interface IRefProps {
  refresh: () => void,
  getBScroll: () => void
}

const MyScroll = React.forwardRef<IRefProps, Iprops>((props, ref) => {

  const [bScroll, setBScroll] = useState<BScroll | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const {
    direction = "vertical",
    click = true,
    refresh = true,
    pullUpLoading = false,
    pullDownLoading = false,
    bounceTop = true,
    bounceBottom = true
  } = props;
  const {
    pullUp = null,
    pullDown = null,
    onScroll = null
  } = props;

  let pullUpDebounce = useMemo(() => {
    return debounce(pullUp!, 300);
  }, [pullUp])

  let pullDownDebounce = useMemo(() => {
    return debounce(pullDown!, 300)
  }, [pullDown]);

  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current!, {
      scrollX: direction === "horizental",
      scrollY: direction === "vertical",
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    });
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!bScroll || !onScroll) return;
    bScroll.on('scroll', (scroll: BScroll) => {
      onScroll(scroll);
    })
    return () => {
      bScroll.off('scroll');
    }
  }, [onScroll, bScroll]);

  useEffect(() => {
    if (!bScroll || !pullUp) return;
    let handlePullUp = (pos: BScroll) => {
      console.log(bScroll.y);
      
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUpDebounce();
      }
    }
    bScroll.on('scrollEnd', handlePullUp);
    return () => {
      bScroll.off('scrollEnd', handlePullUp);
    }
  }, [pullUp, bScroll, pullUpDebounce]);

  useEffect(() => {
    if (!bScroll || !pullDown) return;
    let handlePullDown = (pos: BScroll) => {
      // 判断用户的下拉动作
      if (pos.y > 50) {
        pullDownDebounce();
      }
    };
    bScroll.on('touchEnd', handlePullDown);
    return () => {
      bScroll.off('touchEnd', handlePullDown);
    }
  }, [pullDown, bScroll, pullDownDebounce]);


  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },
    getBScroll() {
      if (bScroll) {
        return bScroll;
      }
    }
  }));

  const PullUpdisplayStyle = pullUpLoading ? { display: "" } : { display: "none" };
  const PullDowndisplayStyle = pullDownLoading ? { display: "" } : { display: "none" };
  return (
    <ScrollContainer ref={scrollContainerRef}>
      {props.children}
      {/* 滑到底部加载动画 */}
      <PullUpLoading style={PullUpdisplayStyle}><Loading></Loading></PullUpLoading>
      {/* 顶部下拉刷新动画 */}
      <PullDownLoading style={PullDowndisplayStyle}><LoadingV2></LoadingV2></PullDownLoading>
    </ScrollContainer>
  );
})

export default MyScroll
