import React, { FC, ReactElement, useEffect } from 'react'
import Slider from '../../components/Slider/'
import RecommendList from '../../components/List'
import Scroll from '../../baseUI/MyScroll'
import { Content } from './style'
import {axiosInstance} from '../../api/config'

interface IProps {

}

const Recommend: FC<IProps> = (): ReactElement => {

  useEffect(() => {
    axiosInstance.get('/top/artists').then(res => {
      console.log(res);
      
    })
  },[])

  const bannerList = [1, 2, 3, 4].map(item => {
    return { imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" }
  });
  console.log(bannerList);

  const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(item => {
    return {
      id: 1,
      picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
      playCount: 17171122,
      name: "朴树、许巍、李健、郑钧、老狼、赵雷"
    }
  })

  return (
    <Content>
      <Scroll>
        <div>
          <Slider bannerList={bannerList} />
          <RecommendList recommendList={recommendList}></RecommendList>
        </div>
      </Scroll>
    </Content>
  )
}

export default React.memo(Recommend)
