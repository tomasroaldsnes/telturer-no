import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import hero from "./Hero.module.scss";
import button from "../Buttons.module.scss";
import HERO_IMAGE from "../../public/img/hero.webp";
import HERO_IMAGE_BLUR from "../../public/img/hero-blur.webp";
export default function Hero({ text, image }) {
  return (
    <div className={hero.container}>
      <Image
        priority
        src={image}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt={text}
      />
      <div className={hero.content}>
        <p className={hero.text}>{text}</p>
      </div>
    </div>
  );
}
