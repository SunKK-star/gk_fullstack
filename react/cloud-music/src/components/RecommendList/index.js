import React from 'react'
import { ListContainer, List, ListItem } from './style'
import LazyLoad from 'react-lazyload'
import { getCount } from '../../api/utils'

function RecommendList(props) {
  console.log(props);
  return (
    <ListContainer>
      <h1>推荐歌单</h1>
      <List>
        {props.recommendList.map(item => {
          return (
            <ListItem key={item.id}>
              <div className="wrapper">
                <div className="img_wrap">
                  <div className="decorate"></div>
                  {/* 加此参数可以减小请求的图片资源大小 */}
                  <LazyLoad placeholder={<img width='100%' height="100%" src={require('../../assets/img/music.png')} alt="music"></img>}>
                    <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music"></img>
                  </LazyLoad>
                  <div className="play_count">
                    <i className="iconfont play">&#xe655;</i>
                    <span className="count">{getCount(item.playCount)}</span>
                  </div>
                </div>
                <span>{item.name}</span>
              </div>
            </ListItem>
          )
        })}
      </List>
    </ListContainer>
  )
}

export default React.memo(RecommendList)