import React, { FC, ReactElement, useEffect } from 'react'
import Slider from '../../components/Slider/'
import RecommendList from '../../components/List'
import Scroll from '../../baseUI/MyScroll'
import { Content } from './style'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import { IBannerData, IRecommend } from '../../typings'
import Loading from '../../baseUI/loading'
import { renderRoutes } from 'react-router-config'

interface IProps {
  bannerList: IBannerData[];
  recommendList: IRecommend[];
  enterLoading: boolean;
  [prop: string]: any
}

const Recommend: FC<IProps> = (props): ReactElement => {
  let { bannerList, recommendList, enterLoading, route } = props
  let { getRecommendListDataDispatch, getBannerDataDispatch } = props
  let bannerListJS = bannerList ? bannerList : [];
  let recommendListJS = recommendList ? recommendList : [];

  useEffect(() => {
    if (!bannerList.length || !recommendList.length) {
      getRecommendListDataDispatch();
      getBannerDataDispatch();
    }
  }, [getRecommendListDataDispatch, getBannerDataDispatch, bannerList.length, recommendList.length])


  return (
    <div>
      <Content>
        <Scroll
          direction="vertical"
        >
          <div>
            {enterLoading ? <Loading /> : null}
            <Slider bannerList={bannerListJS} />
            <RecommendList recommendList={recommendListJS} />
          </div>
        </Scroll>
      </Content>
      {renderRoutes(route.routes)}
    </div>
  )
}

const mapStateToprops = (state: any) => {
  return {
    bannerList: state.getIn(['recommend', 'bannerList']).toJS(),
    recommendList: state.getIn(['recommend', 'recommendList']).toJS(),
    enterLoading: state.getIn(['recommend', 'enterLoading'])
  }
}
const mapDispatchToprpps = (dispatch: any) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    },
  }
}

export default connect(mapStateToprops, mapDispatchToprpps)(React.memo(Recommend))