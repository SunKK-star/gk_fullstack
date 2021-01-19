import {createGlobalStyle} from 'styled-components'

export const IconStyle = createGlobalStyle`
  @font-face {
  font-family: 'iconfont';  /* project id 2241759 */
  src: url('//at.alicdn.com/t/font_2241759_u6w7eekb2jn.eot');
  src: url('//at.alicdn.com/t/font_2241759_u6w7eekb2jn.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2241759_u6w7eekb2jn.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2241759_u6w7eekb2jn.woff') format('woff'),
  url('//at.alicdn.com/t/font_2241759_u6w7eekb2jn.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2241759_u6w7eekb2jn.svg#iconfont') format('svg');

  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
}
`