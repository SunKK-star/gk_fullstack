import React, { useEffect, useState, useRef } from 'react'
import BScroll from 'better-scroll'
import styled from 'styled-components'

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

interface Iprops {
  bounce?: boolean | Object;
  probeType?: number;
  direction: 'vertical' | 'horizental';
  refresh?: boolean;
  pullUpLoading?: boolean;
  pullDownLoading?: boolean;
  bounceTop?: boolean;
  bounceBottom?: boolean;
  pullDown?: Function;
  pullUp?: Function;
  onScroll?: Function;
  click?: boolean
}

const MyScroll = React.forwardRef<Iprops, any>((props, ref) => {

  const [bScroll, setBScroll] = useState<BScroll | null>(null);
  const scrollContainerRef = useRef<any>()
  const {
    direction = 'vertical',
    click = 'true',
    refresh = 'true',
    pullUpLoading = 'false',
    pullDownLoading = 'false',
    bounceTop = 'true',
    bounceBottom = 'true'
  } = props;
  const {
    pullUp,
    pullDown,
    onScroll = null
  } = props;
  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current, {
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
    bScroll.on('scrollEnd', () => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUp();
      }
    });
    return () => {
      bScroll.off('scrollEnd');
    }
  }, [pullUp, bScroll]);

  useEffect(() => {
    if (!bScroll || !pullDown) return;
    bScroll.on('touchEnd', (pos: any) => {
      // 判断用户的下拉动作
      if (pos.y > 50) {
        pullDown();
      }
    });
    return () => {
      bScroll.off('touchEnd');
    }
  }, [pullDown, bScroll]);


  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });




  return (
    <ScrollContainer ref={scrollContainerRef}>
      {props.children}
    </ScrollContainer>
  );
})

export default MyScroll
