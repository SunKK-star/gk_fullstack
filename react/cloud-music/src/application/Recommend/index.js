import React, { useEffect } from 'react'
import Slider from '../../components/Slider/slider'
import Scroll from '../../components/Scroll'
import RecommendList from '../../components/RecommendList'
import { getRecommendList, getBannerList } from './store/action'
import { connect } from 'react-redux'
import { Content } from './style'
import { forceCheck } from 'react-lazyload'
import { renderRoutes } from 'react-router-config'
import Loading from '../../components/Loading'

function Recommend(props) {
  const { bannerList, recommendList, enterLoading } = props;
  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];
  useEffect(() => {
    if (!bannerList.size) {
      props.getRecommendList()
    }
    if (!recommendList.size) {
      props.getBanners()
    }
  }, [])

  return (
    <div>
      <Content>
        {enterLoading ? <Loading /> : null}
        <Scroll className="list" onScroll={forceCheck}>
          <div >
            <Slider bannerList={bannerListJS} />
            <RecommendList recommendList={recommendListJS} />
          </div>
        </Scroll>
      </Content>
      {renderRoutes(props.route.routes)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['recommend', 'recommendList']),
    bannerList: state.getIn(['recommend', 'bannerList']),
    enterLoading: state.getIn(['recommend', 'enterLoading'])
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

