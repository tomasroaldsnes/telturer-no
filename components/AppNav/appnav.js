import Image from 'next/image';
import Link from 'next/link';
import appnav from './Appnav.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';

import SwiperCore, { Pagination, Mousewheel } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Mousewheel]);

export default function AppNav({ _sort, _setSort }) {
  return (
    <div className={appnav.container}>
      <Link href={'/'}>
        <div className={appnav.icon}>
          <Image src="/back.svg" height={16} width={16}></Image>
        </div>
      </Link>
      <Swiper
        className={appnav.slider}
        spaceBetween={4}
        slidesPerView={4.5}
        direction={'horizontal'}
        grabCursor={false}
        mousewheel={{
          releaseOnEdges: true,
          forceToAxis: true,
        }}
      >
        <SwiperSlide onClick={() => _setSort('Alle')}>
          <div
            className={_sort === 'Alle' ? appnav.sortBoxActive : appnav.sortBox}
          >
            <p className={_sort === 'Alle' ? appnav.textSelected : appnav.text}>
              Alle
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => _setSort('Topptur')}>
          <div
            className={
              _sort === 'Topptur' ? appnav.sortBoxActive : appnav.sortBox
            }
          >
            <p
              className={
                _sort === 'Topptur' ? appnav.textSelected : appnav.text
              }
            >
              Toppturer
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => _setSort('Parkering')}>
          <div
            className={
              _sort === 'Parkering' ? appnav.sortBoxActive : appnav.sortBox
            }
          >
            <p
              className={
                _sort === 'Parkering' ? appnav.textSelected : appnav.text
              }
            >
              Parkering
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => _setSort('Familie')}>
          <div
            className={
              _sort === 'Familie' ? appnav.sortBoxActive : appnav.sortBox
            }
          >
            <p
              className={
                _sort === 'Familie' ? appnav.textSelected : appnav.text
              }
            >
              Familie
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => _setSort('Fjelltur')}>
          <div
            className={
              _sort === 'Fjelltur' ? appnav.sortBoxActive : appnav.sortBox
            }
          >
            <p
              className={
                _sort === 'Fjelltur' ? appnav.textSelected : appnav.text
              }
            >
              Fjelltur
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => _setSort('Sykkel')}>
          <div
            className={
              _sort === 'Sykkel' ? appnav.sortBoxActive : appnav.sortBox
            }
          >
            <p
              className={_sort === 'Sykkel' ? appnav.textSelected : appnav.text}
            >
              Sykkel
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => _setSort('Surfing')}>
          <div
            className={
              _sort === 'Surfing' ? appnav.sortBoxActive : appnav.sortBox
            }
          >
            <p
              className={
                _sort === 'Surfing' ? appnav.textSelected : appnav.text
              }
            >
              Surfing
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => _setSort('Kajakk')}>
          <div
            className={
              _sort === 'Kajakk' ? appnav.sortBoxActive : appnav.sortBox
            }
          >
            <p
              className={_sort === 'Kajakk' ? appnav.textSelected : appnav.text}
            >
              Kajakk
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => _setSort('Perler')}>
          <div
            className={
              _sort === 'Perler' ? appnav.sortBoxActive : appnav.sortBox
            }
          >
            <p
              className={_sort === 'Perler' ? appnav.textSelected : appnav.text}
            >
              Perler
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
