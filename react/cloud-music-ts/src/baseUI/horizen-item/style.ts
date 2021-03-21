import styled from 'styled-components'
import style from '../../assets/global-style'

export const HorzienContainer = styled.div`
  margin-left: 3px;
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  >span:nth-child(1) {
    display: block;
    margin-right: 5px;
    color: grey;
    font-size: ${style["font-size-m"]};
    flex: 0 0 auto;
  }
  .selected {
    color: ${style["theme-color"]}
  }
`
export const HorizenItem = styled.span`
  flex: 0 0 auto;
  font-size: ${style['font-size-m']};
  padding: 5px 8px;
`