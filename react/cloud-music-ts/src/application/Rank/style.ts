import styled, { StyledComponent } from 'styled-components'
import style from '../../assets/global-style'
export interface ListProps {
  globalRank: boolean
}

export const Container = styled.div`
  position: fixed; 
  top: 90px;
  bottom: 0;
  width: 100%;
  .office, .global {
    margin: 10px 5px;
    padding-top: 10px;
    font-weight: 700;
    font-size: ${style["font-size-m"]};
    color: ${style["font-color-desc"]};
  }
`

export const List = styled.div`
  display: ${(props: ListProps) => props.globalRank ? "" : "flex"};
  padding: 5px 2px;
  flex-wrap: wrap;
`

export const ListItem = styled.div`
  display: flex;
  padding: 2px 1.5px;
  border-bottom: 1px solid ${style["border-color"]};
  .img_wrapper {
    position: relative;
    flex: 0 0 auto;
    img {
      width: 120px;
      height: 120px;
      border-radius: 3px;
    }
    .decorate {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,43%,.4));
    }
    .update_frequency {
      position: absolute;
      bottom: 8px;
      left: 5px;
      font-size: ${style["font-size-ss"]};
      color: ${style["font-color-light"]};
    }
  }
`

export const SongWrapper = styled.ul`
  flex: 1;
  padding: 20px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SongItem = styled.li`
  font-size: ${style["font-size-s"]};
  font-size: ${style["font-size-s"]};
  color: grey;
`