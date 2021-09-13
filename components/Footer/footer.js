import Image from 'next/image';
import footer from './Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={footer.section}>
      <div className={footer.collection}>
        <h2 className={footer.logo}>
          Telturer
          <br />
          <span>2021 © Tomas Roaldsnes. Alle rettigheter.</span>
        </h2>
      </div>
      <div className={footer.collection}>
        <strong className={footer.link}>
          <span>Om Telturer.no</span>
        </strong>
        <p className={footer.link}>Kontakt</p>
        <p className={footer.link}>Hvorfor</p>
      </div>
      <div className={footer.collection}>
        <strong className={footer.link}>
          <span>Lovligheter</span>
        </strong>
        <p className={footer.link}>Personvernsærklering</p>
        <p className={footer.link}>Chill på data</p>
      </div>
      <div className={footer.collectionSocial}>
        <Image
          className={footer.social}
          src={'/img/facebook.svg?1'}
          height={48}
          width={48}
          loading={'lazy'}
        />
        <Image
          className={footer.social}
          src={'/img/instagram.svg?1'}
          height={48}
          width={48}
          loading={'lazy'}
        />
      </div>
    </div>
  );
}