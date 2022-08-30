import Image from "next/image";
import footer from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={footer.section}>
      <div className={footer.collection}>
        <h2 className={footer.logo}>
          Teltturer<span>.</span>no
          <br />
          <p className={footer.byline}>
            2022 © Tomas Roaldsnes og Milos Rados. Alle rettigheter.
          </p>
        </h2>
      </div>
      <div className={footer.collection}>
        <strong className={footer.link}>
          <span>Om Telturer.no</span>
        </strong>
        <Link href="/om-oss">
          <a className={footer.link}>Om oss</a>
        </Link>
        <Link href="https://tally.so/r/wgDrkN">
          <a className={footer.link}>Kontakt oss</a>
        </Link>
        <Link href="https://tally.so/r/w5B5pM">
          <a className={footer.link}>Tilbakemelding</a>
        </Link>
      </div>
      <div className={footer.collection}>
        <strong className={footer.link}>
          <span>Lovligheter</span>
        </strong>
        <Link href="/personvern">
          <a className={footer.link}>Personvernsærklering</a>
        </Link>
      </div>
      <div className={footer.collectionSocial}>
        <Image
          className={footer.social}
          src={"/img/facebook.svg"}
          height={48}
          width={48}
          loading={"lazy"}
        />
        <Link href="https://www.instagram.com/teltturer/" passHref={true}>
          <Image
            className={footer.social}
            src={"/img/instagram.svg"}
            height={48}
            width={48}
            loading={"lazy"}
          />
        </Link>
      </div>
    </div>
  );
}
