import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import slider from "./Slider.module.scss";
import "swiper/css";
import "swiper/css/scrollbar";

import SwiperCore, { Pagination, Mousewheel } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Mousewheel]);

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function Slider({ title, destinations, filter, keyword }) {
  if (filter === "city") {
    destinations = destinations.filter((d) => d.city === keyword);
  }
  if (filter === "tags") {
    destinations = destinations.filter((d) => d.tags.includes(keyword));
  }
  return (
    <div className={slider.container}>
      <h2 className={slider.header}>{title}</h2>
      <Swiper
        className={slider.swiper}
        spaceBetween={16}
        direction={"horizontal"}
        slidesPerView={1.5}
        grabCursor={false}
        mousewheel={{
          releaseOnEdges: true,
          forceToAxis: true,
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
        {destinations.map((destination) => (
          <SwiperSlide key={destination.id}>
            <Link
              href={
                "/destinasjoner/" +
                destination.id +
                "/" +
                destination.title
                  .toString()
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("å", "aa")
                  .replaceAll("æ", "ae")
                  .replaceAll("ø", "o")
              }
            >
              <div className={slider.destination}>
                <div className={slider.imageContainer}>
                  <Image
                    className={slider.image}
                    src={destination.teaser.formats.small.url}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                    placeholder="blur"
                    alt={destination.title}
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475)
                    )}`}
                  />
                </div>
                <p className={slider.text}>{destination.title}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
