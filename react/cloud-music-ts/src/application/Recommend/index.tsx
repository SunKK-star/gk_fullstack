import React, { FC, ReactElement, useEffect } from 'react'
import Slider from '../../components/Slider/'
import RecommendList from '../../components/List'
import Scroll from '../../baseUI/MyScroll'
import { Content } from './style'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'

interface IProps {
  bannerList: any;
  recommendList: any;
  getBannerDataDispatch: any;
  getRecommendListDataDispatch: any
}

const Recommend: FC<IProps> = (props): ReactElement => {
  let { bannerList, recommendList } = props
  let {getRecommendListDataDispatch, getBannerDataDispatch} = props
  console.log(bannerList, recommendList);
  let bannerListJS = bannerList ? bannerList : [];
  let recommendListJS = recommendList ? recommendList : [];

  useEffect(() => {
    getRecommendListDataDispatch();
    getBannerDataDispatch();
  },[])
  

  return (
    <Content>
      <Scroll>
        <div>
          {
            bannerListJS.map((item: any) => {
              return (
                <h1>{ item.encodeId}</h1>
              )
            })
          }
        </div>
      </Scroll>
    </Content>
  )
}

const mapStateToprops = (state: any) => {
  return {
    bannerList: state.getIn(['recommend', 'bannerList']).toJS(),
    recommendList: state.getIn(['recommend', 'recommendList']).toJS()
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