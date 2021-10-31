import Image from 'next/image';
import Link from 'next/link';
import content from './Content.module.scss';
import button from '../Buttons.module.scss';
import InstagramEmbed from 'react-instagram-embed';
//import AdSense from 'react-adsense';

export default function DestinationContent({ destination }) {
  const tag = destination.tags.replaceAll('|', '·');
  return (
    <div className={content.container}>
      <h2 className={content.heading}>{destination.title}</h2>
      <p className={content.tags}>{tag}</p>
      <p className={content.headingSmall}>Veibeskrivelse:</p>
      <div className={button.containerRowSmall}>
        <a href={destination.ut} className={button.secondaryLight}>
          Ut.no
        </a>
        <a href={destination.maps} className={button.primaryLight}>
          Google Maps
        </a>
      </div>
      { destination.instagram && <p className={content.headingSmall}>Fra sosiale medier:</p>}
      {destination.instagram && destination.instagram.map((e) => (
        <div
        dangerouslySetInnerHTML={{
          __html:  e.embed,
        }}
      />
      /* <AdSense.Google
        client="ca-pub-1605579254477855"
        slot="1"
        style={{ display: 'block' }}
        format="auto"
        responsive="true"
        layoutKey="-gw-1+2a-9x+5c"
      /> */
      ))}
    </div>
  );
}
