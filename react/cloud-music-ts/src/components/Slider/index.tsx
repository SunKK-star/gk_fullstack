import React, { FC, ReactElement, ReactPropTypes, useEffect } from 'react'
import Swiper, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper'
import { IList } from '../../typings'
import { SliderContainer } from './style'
import { nanoid } from 'nanoid'




interface Iprops {
  bannerList: IList[]
}

const Slider: FC<Iprops> = ({
  bannerList
}): ReactElement => {

  useEffect(() => {
    const mySlider = new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  })

  return (
    <div>
      <SliderContainer>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              bannerList.map(slider => {
                return (
                  <div className="swiper-slider" key={nanoid()}>
                    <div className="img_wrapper">
                      <img width="100%" height="100%" src={slider.imageUrl} alt="music" />
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>
      </SliderContainer>
    </div >
  )
}

export default React.memo(Slider)