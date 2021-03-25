import { nanoid } from 'nanoid'
import React, { FC, ReactElement } from 'react'
import { IRecommend } from '../../typings'
import { ListContainer, ListItem, ListWrapper } from './style'
import { getCount } from '../../api/utils'
import LazyLoad from 'react-lazyload'
import { RouteComponentProps, withRouter } from 'react-router-dom'

interface IProps extends RouteComponentProps {
  recommendList: IRecommend[]
}



const RecommendList: FC<IProps> = (props): ReactElement => {
  const { recommendList,history } = props
  // 进入详情页
  const enterDetail = (id: number) => {
    history.push(`/recommend/${id}`)
  }

  return (
    <ListContainer>
      <h1 className="title">推荐歌单</h1>
      <ListWrapper>
        {
          recommendList.map(item => {
            return (
              <ListItem key={nanoid()} onClick={() => enterDetail(item.id)}>
                <div className="img_wrapper">
                  <LazyLoad placeholder={<img width="100%" height="100%" src={require('./music.png')} alt="music" />}>
                    <img width="100%" height="100%" src={item.picUrl} alt="music" />
                  </LazyLoad>

                  <div className="decorate"></div>
                </div>
                <div className="detail">
                  <div className="iconfont earphone">&#xe655;</div>
                  <div className="count">{getCount(item.playCount)}</div>
                </div>
                <div className="desic">{item.name}</div>
              </ListItem>
            )
          })
        }
      </ListWrapper>
    </ListContainer>
  )
}

export default React.memo(withRouter(RecommendList))