import styled from 'styled-components'
import style from '../../assets/global-style'

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style["theme-color"]};
  &>span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`
export const Tab = styled.div`
  width: 100%;
  height: 44px;
  background-color: ${style['theme-color']};
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    font-size: 14px;
    color: #e4e4e4;
    &.selected {
      span {
        border-bottom: 2px solid #f1f1f1;
        padding: 2px 0;
      }
    }
  }
`



