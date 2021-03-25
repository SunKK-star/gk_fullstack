import styled from 'styled-components'
import style from '../../assets/global-style'

export const ListContainer = styled.div`
  h1 {
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 60px;
  }
`
export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 2px;
`
export const ListItem = styled.div`
  position: relative;
  width: 32%;
  margin: 0 2px;
  .wrapper {
    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));
    }
    .img_wrap {
      width: 120px;
      height: 120px;
      position: relative;
      .play_count {
        position: absolute;
        top: 2px;
        right: 2px;
        color: #fff;
        font-size: ${style['font-size-s']};
        line-height: 15px;
        
        .play {
          vertical-align: middle;
          margin-right: 1px;
        }
        .count {
          display: inline-block;
          vertical-align: middle;
          color: ${style['font-color-light']};
        }
      }
    }
  span {
    font-size: ${style["font-size-s"]};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    margin: 2px 0;
    padding: 0 2px;
    color: ${style["font-color-desc"]};
  }
  }
`