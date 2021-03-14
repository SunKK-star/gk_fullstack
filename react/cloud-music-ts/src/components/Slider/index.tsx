import React, { FC, ReactElement } from 'react'
import SwiperCore, { Pagination, Autoplay  } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { SliderContainer } from './style'
import { nanoid } from 'nanoid'

SwiperCore.use([Pagination, Autoplay]);
interface Iprops {
  bannerList: any[]
}

const Slider: FC<Iprops> = ({
  bannerList
}): ReactElement => {


  return (
    <SliderContainer>
      <div className="before"></div>
      <Swiper
        pagination
        loop
        autoplay
        speed={1000}
      >
        {
          bannerList.map(slider => {
            return (
              <SwiperSlide key={nanoid()}>
                <div className="img_wrapper">
                  <img src={slider.imageUrl + "?param=300x300"} width="100%" height="100%" alt="推荐" />
                </div>
              </SwiperSlide>
            );
          })
        }
        <div className="swiper-pagination"></div>
      </Swiper>
    </SliderContainer>
  )
}

export default React.memo(Slider)



