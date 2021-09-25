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
        <SwiperSlide onClick={() => _setSort('Bil')}>
          <div
            className={_sort === 'Bil' ? appnav.sortBoxActive : appnav.sortBox}
          >
            <p className={_sort === 'Bil' ? appnav.textSelected : appnav.text}>
              Bil
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => _setSort('Tog')}>
          <div
            className={
              _sort === 'Tog' ? appnav.sortBoxActive : appnav.sortBox
            }
          >
            <p
              className={
                _sort === 'Tog' ? appnav.textSelected : appnav.text
              }
            >
              Tog
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => _setSort('Vestland')}>
          <div
            className={
              _sort === 'Vestland' ? appnav.sortBoxActive : appnav.sortBox
            }
          >
            <p
              className={
                _sort === 'Vestland' ? appnav.textSelected : appnav.text
              }
            >
              Vestland
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => _setSort('Østland')}>
          <div
            className={
              _sort === 'Østland' ? appnav.sortBoxActive : appnav.sortBox
            }
          >
            <p
              className={
                _sort === 'Østland' ? appnav.textSelected : appnav.text
              }
            >
              Østland
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => _setSort('Nordland')}>
          <div
            className={
              _sort === 'Nordland' ? appnav.sortBoxActive : appnav.sortBox
            }
          >
            <p
              className={
                _sort === 'Nordland' ? appnav.textSelected : appnav.text
              }
            >
              Nordland
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={() => _setSort('Sørland')}>
          <div
            className={
              _sort === 'Sørland' ? appnav.sortBoxActive : appnav.sortBox
            }
          >
            <p
              className={
                _sort === 'Sørland' ? appnav.textSelected : appnav.text
              }
            >
              Sørland
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
