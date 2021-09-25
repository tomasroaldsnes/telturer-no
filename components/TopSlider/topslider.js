import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider from './TopSlider.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';

import SwiperCore, { Pagination, Mousewheel } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Mousewheel]);

export default function Slider({ destination }) {
  destination.Images.map((image) => (console.log(image.url)))
  return (
    <div className={slider.container}>
      <Swiper
        className={slider.swiper}
        direction={'horizontal'}
        pagination={{
          type: 'fraction',
        }}
        grabCursor={false}
        mousewheel={{
          releaseOnEdges: true,
          forceToAxis: true,
        }}
      >
        {destination.Images.map((image) => (
          <SwiperSlide>
            <div className={slider.imageContainer}>
              <Image
                src={'https://telturer.herokuapp.com' + image.url}
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
