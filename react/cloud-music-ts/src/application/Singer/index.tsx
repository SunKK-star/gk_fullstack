import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ImgWrapper, CollectButton, BgLayer, SongListWrapper, Container } from './style'
import Header from '../../baseUI/header'
import { IProps, SINGER } from './types'
import SongList from '../SongList'
import Scroll, { IRefProps } from '../../baseUI/MyScroll'
import { HEADER_HEIGHT } from '../../api/config'
import BScroll from 'better-scroll'
import { connect } from 'react-redux'
import { Record } from 'immutable'
import { IAction, StoreState } from '../../typings'
import { ThunkDispatch } from 'redux-thunk'
import { actionCreators } from './store'
import Loading from '../../baseUI/loading'


const Singer: FC<IProps> = (props) => {
  const { getSingerDataDispatch, loading, artist, songsOfArtist } = props
  console.log(loading);
  useEffect(() => {
    getSingerDataDispatch(props.match.params.id)
  }, [])

  const [showStatus, setShowStatus] = useState<boolean>(true);
  const collectButton = useRef<HTMLDivElement>(null);
  const imageWrapper = useRef<HTMLDivElement>(null);
  const songScrollWrapper = useRef<HTMLDivElement>(null);
  const songScroll = useRef<IRefProps>(null);
  const header = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);
  // 图片初始高度
  const initialHight = useRef<number>(0);

  // 往上偏移的尺寸，露出圆角
  const OFFSET = 5;

  useEffect(() => {
    let h = imageWrapper.current!.offsetHeight;
    initialHight.current = h;
    songScrollWrapper.current!.style.top = `${h - OFFSET}px`;
    // 把遮罩先放在下面，以裹住歌曲列表
    layer.current!.style.top = `${h - OFFSET}px`;
    songScroll.current?.refresh();
  }, [])

  // 记得用useCallback包裹起来，不然每次组件更新都会传递不一样的函数引用，导致不必要的渲染，浪费浏览器的性能
  const setShowStatusFalse = useCallback(() => {
    setShowStatus(false);
  }, []);

  const handleScroll = useCallback((pos: BScroll) => {
    let height = initialHight.current;
    const newY = pos.y;
    const imageDOM = imageWrapper.current;
    const buttonDOM = collectButton.current;
    const headerDOM = header.current;
    const layerDOM = layer.current;
    const minScrollY = -(height - OFFSET) + HEADER_HEIGHT

    // 指的是滑动距离占图片高度的百分比
    const percent = Math.abs(newY / height);
    // 图片放大，按钮跟着偏移
    if (newY > 0) {
      imageDOM!.style["transform"] = `scale (${1 + percent})`;
      buttonDOM!.style["transform"] = `translate3d(0, ${newY}px, 0)`;
      layerDOM!.style.top = `${height - OFFSET + newY}px`;
    }
    // 往上滑动，但是遮罩还没超过 Header
    else if (newY >= minScrollY) {
      layerDOM!.style.top = `${height - OFFSET - Math.abs(newY)}px`;
      // 这时候保证遮罩的层叠优先级比图片高，不至于被图片挡住
      layerDOM!.style.zIndex = '1';
      imageDOM!.style.paddingTop = "75%";
      imageDOM!.style.height = '0';
      imageDOM!.style.zIndex = '-1';
      // 按钮跟着移动且渐渐变透明
      buttonDOM!.style["transform"] = `translate3d(0, ${newY}px, 0)`;
      buttonDOM!.style["opacity"] = `${1 - percent * 2}`;
    }

    //往上滑动，但是遮罩超过 Header 部分
    else if (newY < minScrollY) {
      // 往上滑动，但是超过 Header 部分
      layerDOM!.style.top = `${HEADER_HEIGHT - OFFSET}px`;
      layerDOM!.style.zIndex = '1';
      // 防止溢出的歌单内容遮住 Header
      headerDOM!.style.zIndex = '100';
      // 此时图片高度与 Header 一致
      imageDOM!.style.height = `${HEADER_HEIGHT}px`;
      imageDOM!.style.paddingTop = '0';
      imageDOM!.style.zIndex = '99';
    }
  }, [])

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames='fly'
      appear={true}
      unmountOnExit
      onExit={() => props.history.goBack()}
    >
      <Container>
        {loading ? <Loading /> : null}
        <Header title={"头部"} handleClik={setShowStatusFalse} ref={header}></Header>
        <ImgWrapper bgUrl={artist.picUrl} ref={imageWrapper}>
          <div className="filter"></div>
        </ImgWrapper>
        <CollectButton ref={collectButton}>
          <i className="iconfont">&#xe632;</i>
          <span className="text">收藏</span>
        </CollectButton>
        <BgLayer ref={layer}></BgLayer>
        <SongListWrapper ref={songScrollWrapper}>
          <Scroll
            onScroll={handleScroll}
            ref={songScroll}
          >
            <SongList songs={songsOfArtist} showCollect={false} />
          </Scroll>
        </SongListWrapper>
      </Container>
    </CSSTransition>
  )
}


const mapStateToProps = (state: Record<StoreState>) => {
  return {
    artist: state.getIn(['singerInfo', 'artist']).toJS(),
    songsOfArtist: state.getIn(['singerInfo', 'songsOfArtist']).toJS(),
    loading: state.getIn(['singerInfo', 'loading'])
  }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<Record<StoreState>, any, IAction<SINGER>>) => {
  return {
    getSingerDataDispatch: (id: number) => {
      dispatch(actionCreators.changeEnterLoading(true));
      dispatch(actionCreators.getSingerInfo(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Singer))