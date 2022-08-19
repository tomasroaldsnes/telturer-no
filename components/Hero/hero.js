import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import hero from "./Hero.module.scss";
import button from "../Buttons.module.scss";

export default function Hero() {
  return (
    <div className={hero.container}>
      <div className={hero.overlay}>
        <div className={hero.content}>
          <p className={hero.text}>Skal du ut å telte? Digg.</p>
          <Link href="/destinasjoner">
            <button className={button.primary}>Finn destinasjon</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
