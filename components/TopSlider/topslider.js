import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import slider from "./TopSlider.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

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

export default function Slider({ destination }) {
  return (
    <div className={slider.container}>
      <Swiper
        className={slider.swiper}
        direction={"horizontal"}
        pagination={{
          type: "fraction",
        }}
        grabCursor={false}
        mousewheel={{
          releaseOnEdges: true,
          forceToAxis: true,
        }}
      >
        {destination.images.map((image) => (
          <SwiperSlide>
            <div className={slider.imageContainer}>
              <Image
                src={image.url}
                layout="fill"
                objectFit="cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475)
                )}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
