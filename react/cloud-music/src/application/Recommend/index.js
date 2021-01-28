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

import React, { Component } from 'react'
import { increment, decrement, incrementAsync } from '../redux/actions/count'
import { connect } from 'react-redux'

class Count extends Component {
  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value * 1)
  }
  // 奇数再加
  incrementIfodd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }
  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value * 1)
  }
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.incrementAsync(value * 1, 500)
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>我是Count组件,Person组件有{this.props.personArr.length}个人</h2>
        <h4>当前求和为：{this.props.count}</h4  >
        <select ref={c => this.selectNumber = c}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.incrementIfodd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

export default connect(
  state => ({ count: state.count, personArr: state.persons}),
  {
    increment,
    decrement,
    incrementAsync

  }
)(Count)