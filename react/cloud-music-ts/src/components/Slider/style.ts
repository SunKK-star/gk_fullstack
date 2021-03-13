import styled from 'styled-components';
import style from '../../assets/global-style';

export const SliderContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  margin: auto;
  background: white;
  .before {
    position: absolute;
    top: -300px;
    height: 400px;
    width: 100%;
    background-color: ${style['theme-color']};
  }
  .swiper-container-initialized {
    width: 98%;
    border-radius: 6px;
    margin: auto;
  }
  .swiper-pagination-bullet-active {
    background-color: ${style['theme-color']};
  }
`
