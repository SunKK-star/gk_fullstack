import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ImgWrapper, CollectButton, BgLayer, SongListWrapper, Container } from './style'
import Header from '../../baseUI/header'
import { getSingerInfoRequest } from '../../api/request'
import { IProps } from './types'
import SongList from '../SongList'
import Scroll from '../../baseUI/MyScroll'

const Singer: FC<IProps> = (props) => {
  useEffect(() => {
    getSingerInfoRequest(props.match.params.id).then((res) => {
      console.log(res);
    })
  }, [])
  const [showStatus, setShowStatus] = useState<boolean>(true);

  const artist = {
    picUrl: "https://p2.music.126.net/W__FCWFiyq0JdPtuLJoZVQ==/109951163765026271.jpg",
    name: "薛之谦",
    hotSongs: [
      {
        name: "我好像在哪见过你",
        ar: [{ name: "薛之谦" }],
        al: {
          name: "薛之谦专辑"
        }
      },
      {
        name: "我好像在哪见过你",
        ar: [{ name: "薛之谦" }],
        al: {
          name: "薛之谦专辑"
        }
      },
      // 省略 20 条
    ]
  }

  const collectButton = useRef();
  const imageWrapper = useRef<HTMLDivElement>(null);
  const songScrollWrapper = useRef<HTMLDivElement>(null);
  const songScroll = useRef();
  const header = useRef();
  const layer = useRef<HTMLDivElement>(null);
  // 图片初始高度
  const initialHight = useRef(0);

  // 往上偏移的尺寸，露出圆角
  const OFFSET = 5;

  useEffect(() => {
    let h = imageWrapper.current?.offsetHeight;
    songScrollWrapper.current!.style.top = `${h! - OFFSET}px`;
    // 把遮罩先放在下面，以裹住歌曲列表
    layer.current!.style.top = `${h}px`;
  })


  // 记得用useCallback包裹起来，不然每次组件更新都会传递不一样的函数引用，导致不必要的渲染，浪费浏览器的性能
  const setShowStatusFalse = useCallback(() => {
    setShowStatus(false);
  }, []);

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
        <Header title={"头部"} handleClik={setShowStatusFalse}></Header>
        <ImgWrapper bgUrl={artist.picUrl} ref={imageWrapper}>
          <div className="filter"></div>
        </ImgWrapper>
        <CollectButton>
          <i className="iconfont">&#xe632;</i>
          <span className="text">收藏</span>
        </CollectButton>
        <BgLayer ref={layer}></BgLayer>
        <SongListWrapper ref={songScrollWrapper}>
          <Scroll>
            <SongList songs={artist.hotSongs} showCollect={false} />
          </Scroll>
        </SongListWrapper>
      </Container>
    </CSSTransition>

  )
}

export default React.memo(Singer)