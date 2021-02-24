import styled from 'styled-components';
import style from '../../assets/global-style';

// Props 中的 globalRank 和 tracks.length 均代表是否为全球榜

export const Container = styled.div`
  position: fixed;
  top: 100px;
  bottom: 0;
  width: 100%;
  .titleStyle{
    font-weight: 700;
    margin-left: 5px;
    font-size: ${style['font-size-m']};
    padding: 10px 0;
  }
`

export const List = styled.ul`
  width: 100%;
  display: ${props => props.globalRank ? "flex" : ""};
  flex-wrap: wrap;
  margin-left: 3px;
`


export const ListItem = styled.li`
  position: relative;
  margin-left: 2px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  .img_wrapper{
    width: 120px;
    height: 120px;  
    .decorate{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient (hsla (0,0%,100%,0),hsla (0,0%,43%,.4));
    }
  }
  .updateFrequency{
    position: absolute;
    bottom: 7px;
    left: 7px;
    font-size: ${style["font-size-ss"]};
    color: ${style["font-color-light"]};
  }
`

export const SongList = styled.ul`
margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
  >li {
    font-size: ${style["font-size-s"]};
    color: grey;
  }
`