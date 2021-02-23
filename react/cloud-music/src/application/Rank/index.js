import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getRankList} from '../Rank/store/actionCreator'
import {getRankListRequest} from '../../api/requset'

function Rank(props) {
  const {loading, rankList:list} = props;
  const {getRankListDispatch} = props
  const rankList = list.toJS() || []
  useEffect(() => {
    getRankListDispatch();
    getRankListRequest().then(res =>  {
      console.log(res);
    })
  }, [])
  return (
    <>
      <h1>Rank</h1>
      {
        rankList.map((item,index) =>{
          return (
            <>
              <h1 key={index}>{item.description}</h1>
            </>
          )
        })
      }
    </>

  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.getIn(['rank', 'loading']),
    rankList: state.getIn(['rank', 'rankList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRankListDispatch: () => {
      dispatch(getRankList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Rank))

