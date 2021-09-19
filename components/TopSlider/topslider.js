import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import slider from './TopSlider.module.scss';
import 'swiper/css';
import "swiper/css/pagination"

import SwiperCore, { Pagination, Mousewheel } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Mousewheel]);

export default function Slider() {
  return (
    <div className={slider.container}>
      <Swiper
        className={slider.swiper}
        direction={'horizontal'}
        pagination={{
          "type": "fraction"
        }}
        grabCursor={false}
        mousewheel={{
          releaseOnEdges: true,
          forceToAxis: true
        }}
      >
        <SwiperSlide>
            <div className={slider.imageContainer}>
              <Image
                src={'/img/locations/molnes.jpg'}
                layout="fill"
                objectFit="cover"
                loading='lazy'
              />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={slider.imageContainer}>
              <Image
                src={'/img/locations/cover.jpg'}
                layout="fill"
                objectFit="cover"
              />
            </div>
        </SwiperSlide>
        </Swiper>
    </div>
  );
}
