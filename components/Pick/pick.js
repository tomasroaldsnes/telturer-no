import Image from "next/image";
import pick from "./Pick.module.scss";
import button from "../Buttons.module.scss";
import Link from "next/link";

export default function Pick() {
  return (
    <div className={pick.container}>
      <div className={pick.imageContainer}>
        <Image
          className={pick.image}
          src={"/img/picks/shroom.jpg"}
          layout={"fill"}
          alt={"Trip Name"}
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className={pick.content}>
        <p className={pick.header}>På jakt etter skogens gull?</p>
        <p className={pick.text}>
          Vi har laget en samleside for de beste soppturene.
        </p>
        <Link href={"/destinasjoner?keyword=Sopptur"}>
          <button className={button.primary}>Alle soppturer</button>
        </Link>
      </div>
    </div>
  );
}
