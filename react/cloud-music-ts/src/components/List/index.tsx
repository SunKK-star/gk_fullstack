import { nanoid } from 'nanoid'
import React, { FC, ReactElement } from 'react'
import { IRecommend } from '../../typings'
import { ListContainer, ListItem, ListWrapper } from './style'
import {getCount} from '../../api/utils'

interface IProps {
  recommendList: any[]
}

const List: FC<IProps> = (props): ReactElement => {
  const { recommendList } = props

  return (
    <ListContainer>
      <h1 className="title">推荐歌单</h1>
      <ListWrapper>
        {
          recommendList.map(item => {
            return (
              <ListItem key={nanoid()}>
                <div className="img_wrapper">
                  <img width="100%" height="100%" src={item.picUrl} alt="music" />
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

export default React.memo(List)