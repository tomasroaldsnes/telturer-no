import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import hero from "./Hero.module.scss";
import button from "../Buttons.module.scss";
import HERO_IMAGE from "../../public/img/hero.webp";
import HERO_IMAGE_BLUR from "../../public/img/hero-blur.webp";
export default function Hero() {
  return (
    <div className={hero.container}>
      <Image
        priority
        src={HERO_IMAGE}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="Velkommen til teltturer.no"
        placeholder="blur"
        blurDataURL={HERO_IMAGE_BLUR}
      />
      <div className={hero.content}>
        <p className={hero.text}>Skal du ut å telte? Digg.</p>
        <Link href="/destinasjoner">
          <button className={button.primary}>Finn destinasjon</button>
        </Link>
      </div>
    </div>
  );
}
