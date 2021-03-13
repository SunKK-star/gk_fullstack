import styled from 'styled-components'
import style from '../../assets/global-style'

export const ListContainer = styled.div`
  padding: 0 3px;
  .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 60px;
  }
`
export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 2px;
`

export const ListItem = styled.div`
  width: 118px;
  padding: 2px;
  position: relative;
  .img_wrapper {
    position: relative;
    .iconfont {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));
    }
  }
  .desic {
    margin-top: 2px;
    padding: 0 2px;
    text-align: left;
    font-size: ${style['font-size-s']};
    line-height: 1.4;
    color: ${style['font-color-desc']};
  }
  .detail {
    position: absolute;
    top: 5px;
    right: 5px;
    display: flex;
    font-size: ${style ["font-size-s"]};
    line-height: 15px;
    color: ${style ["font-color-light"]};
  }
`