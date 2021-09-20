import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider from './Slider.module.scss';
import 'swiper/css';
import 'swiper/css/scrollbar';

import SwiperCore, { Pagination, Mousewheel } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Mousewheel]);

export default function Slider({ title }) {
  return (
    <div className={slider.container}>
      <h2 className={slider.header}>{title}</h2>
      <Swiper
        className={slider.swiper}
        spaceBetween={16}
        direction={'horizontal'}
        slidesPerView={1.5}
        grabCursor={false}
        mousewheel={{
          releaseOnEdges: true,
          forceToAxis: true
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 16,
          },
          1500: {
            slidesPerView: 4.5,
            spaceBetween: 16,
          },
        }}
      >
        <SwiperSlide>
          <Link href="/destinations/test">
          <div className={slider.destination}>
            <div className={slider.imageContainer}>
              <Image
                className={slider.image}
                src={'/img/locations/molnes.jpg'}
                layout="fill"
                objectFit="cover"
                loading='lazy'
              />
            </div>
            <p className={slider.text}>Molnesfjellet</p>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/destinations/test">
          <div className={slider.destination}>
            <div className={slider.imageContainer}>
              <Image
                className={slider.image}
                src={'/img/locations/molnes.jpg'}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className={slider.text}>Molnesfjellet</p>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/destinations/test">
          <div className={slider.destination}>
            <div className={slider.imageContainer}>
              <Image
                className={slider.image}
                src={'/img/locations/molnes.jpg'}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className={slider.text}>Molnesfjellet</p>
          </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <div className={slider.destination}>
            <div className={slider.imageContainer}>
              <Image
                className={slider.image}
                src={'/img/locations/molnes.jpg'}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className={slider.text}>Molnesfjellet</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={slider.destination}>
            <div className={slider.imageContainer}>
              <Image
                className={slider.image}
                src={'/img/locations/molnes.jpg'}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className={slider.text}>Molnesfjellet</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={slider.destination}>
            <div className={slider.imageContainer}>
              <Image
                className={slider.image}
                src={'/img/locations/molnes.jpg'}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className={slider.text}>Molnesfjellet</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={slider.destination}>
            <div className={slider.imageContainer}>
              <Image
                className={slider.image}
                src={'/img/locations/molnes.jpg'}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className={slider.text}>Molnesfjellet</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={slider.destination}>
            <div className={slider.imageContainer}>
              <Image
                className={slider.image}
                src={'/img/locations/molnes.jpg'}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className={slider.text}>Molnesfjellet</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
