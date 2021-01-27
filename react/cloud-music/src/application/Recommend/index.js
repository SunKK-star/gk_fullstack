import React, { useRef, useEffect } from 'react'
import Slider from '../../components/Slider/slider'
import Scroll from '../../components/Scroll'
import RecommendList from '../../components/RecommendList'
import { } from './store/action'
import { connect } from 'react-redux'
import { Content } from './style'

function Recommend(props) {
  console.log(props);
  const bannerList = [1, 2, 3, 4].map(() => {
    return { imageUrl: 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg' }
  })
  const recommendList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) => {
    return {
      id: index,
      picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
      playCount: 17171122,
      name: "朴树、许巍、李健、郑钧、老狼、赵雷"
    }
  })
  return (
    <Content>
      <Scroll className="list">
        <div >
          <Slider bannerList={bannerList} />
          <RecommendList recommendList={recommendList} />
        </div>
      </Scroll>
    </Content>
  )
}

const mapStateToProps = (state) => {
  return {
    
    recommendList: state.recommend.get(['recommend', 'bannerList'])
  }
}
const mapDisPatchToProps = (dispatch) => {
  return {
    getBanners: () => { },
    getRecommendList: () => { }
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(React.memo(Recommend)) 