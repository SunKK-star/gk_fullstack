import React, { memo } from 'react'
import styled from 'styled-components';
import Scroll from '../../components/Scroll'
import { propTypes } from 'prop-types'

function Horizen(props) {
  return (
    <>

    </>
  )
}
// 首先考虑接受的参数
//list 为接受的列表数据
//oldVal 为当前的 item 值
//title 为列表左边的标题
//handleClick 为点击不同的 item 执行的方法
Horizen.propTypes = {
  list: PropTypes.array,
  oldVal: PropTypes.string,
  title: PropTypes.string,
  handleClick: PropTypes.func
}
Horizen.defaultProps = {
  list: [],
  oldVal: '',
  title: '',
  handleClick: null
}

export default memo(Horizen)

