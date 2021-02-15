import React, { useRef, useEffect } from 'react'
import Slider from '../../components/Slider/slider'
import Scroll from '../../components/Scroll'
import RecommendList from '../../components/RecommendList'
import { getRecommendList, getBannerList } from './store/action'
import { connect } from 'react-redux'
import { Content } from './style'
import {forceCheck} from 'react-lazyload'

import Loading from '../../components/Loading'

function Recommend(props) {
  const { bannerList, recommendList } = props;
  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];
  useEffect(() => {
    props.getRecommendList()
    props.getBanners()
  }, [])

  return (
    <Content>
      <Loading></Loading>
      <Scroll className="list" onScroll={forceCheck}>
        <div >
          <Slider bannerList={bannerListJS} />
          <RecommendList recommendList={recommendListJS} />fd
        </div>
      </Scroll>
    </Content>
  )
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['recommend', 'recommendList']),
    bannerList: state.getIn(['recommend', 'bannerList'])
  }
}
const mapDisPatchToProps = (dispatch) => {
  return {
    getBanners: () => {
      dispatch(getBannerList())
    },
    getRecommendList: () => {
      dispatch(getRecommendList())
    }
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(React.memo(Recommend))

