import Image from 'next/image';
import Link from 'next/link';
import content from './Content.module.scss';
import button from '../Buttons.module.scss';
import InstagramEmbed from 'react-instagram-embed';
//import AdSense from 'react-adsense';

export default function DestinationContent({ destination }) {
  return (
    <div className={content.container}>
      <h2 className={content.heading}>{destination.Title}</h2>
      <p className={content.tags}>
      {destination.tags}
      </p>
      <p className={content.headingSmall}>Veibeskrivelse:</p>
      <div className={button.containerRowSmall}>
        <a
          href={destination.ut}
          className={button.secondaryLight}
        >
          Ut.no
        </a>
        <a
          href={destination.maps}
          className={button.primaryLight}
        >
          Google Maps
        </a>
      </div>
      <p className={content.headingSmall}>Fra sosiale medier:</p>
      <div className={content.instagramContainer}>
        <InstagramEmbed
          url="https://www.instagram.com/p/CUDtJc0A19t/"
          clientAccessToken="281376926884992|bff1440019cb39053da2436a370f800b"
          maxWidth={320}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
      {/* <AdSense.Google
        client="ca-pub-1605579254477855"
        slot="1"
        style={{ display: 'block' }}
        format="auto"
        responsive="true"
        layoutKey="-gw-1+2a-9x+5c"
      /> */}
    </div>
  );
}
