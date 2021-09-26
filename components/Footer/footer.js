import Image from 'next/image';
import footer from './Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={footer.section}>
      <div className={footer.collection}>
        <h2 className={footer.logo}>
          Telturer<span>.</span>no
          <br />
          <p className={footer.byline}>2021 © Tomas Roaldsnes. Alle rettigheter.</p>
        </h2>
      </div>
      <div className={footer.collection}>
        <strong className={footer.link}>
          <span>Om Telturer.no</span>
        </strong>
        <p className={footer.link}>Kontakt</p>
      </div>
      <div className={footer.collection}>
        <strong className={footer.link}>
          <span>Lovligheter</span>
        </strong>
        <Link href="/personvern"><p className={footer.link}>Personvernsærklering</p></Link>
        <Link href="/personvern"><p className={footer.link}>Chill på data</p></Link>
      </div>
      <div className={footer.collectionSocial}>
        <Image
          className={footer.social}
          src={'/img/facebook.svg?1'}
          height={48}
          width={48}
          loading={'lazy'}
        />
        <Link href="https://www.instagram.com/teltturer/" passHref={true}>
        <Image
          className={footer.social}
          src={'/img/instagram.svg?1'}
          height={48}
          width={48}
          loading={'lazy'}
        /></Link>
      </div>
    </div>
  );
}
