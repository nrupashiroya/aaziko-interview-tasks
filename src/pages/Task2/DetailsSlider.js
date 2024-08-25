import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import SliderItem from './SliderItem';
import data from '../../configs/data';

import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const DetailsSlider = () => {
  const options = {
    loop: false,
    margin: 30,
    nav: true,
    dots: false,
    navText: [`<i class="fa-solid fa-chevron-left"></i>`, `<i class="fa-solid fa-chevron-right"></i>`],
    responsive: {
      0: {
        items: 1
      },
      575: {
        items: 2
      },
      767: {
        items: 2.4
      },
      991: {
        items: 3.3,
      },
      1200: {
        items: 3.5,
      },
      1400: {
        items: 4.4,
      },
    },
  }

  return (
    <div className='py-5'>
      <div className='containPadding'>
        <h2 className='sliderTitle mb-5'>Get to know Boat 1200</h2>
      </div>

      <Swiper
        className='boatSwiper'
        spaceBetween={30}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          575: {
            slidesPerView: 2
          },
          767: {
            slidesPerView: 2.4
          },
          991: {
            slidesPerView: 3.3,
          },
          1200: {
            slidesPerView: 3.5,
          },
          1400: {
            slidesPerView: 4.4,
          },
        }}
      >
        {data.sliderItems?.length > 0 && data.sliderItems?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <SliderItem itemDetails={item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default DetailsSlider