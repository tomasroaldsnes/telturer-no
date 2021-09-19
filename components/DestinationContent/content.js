import Image from 'next/image';
import Link from 'next/link';
import content from './Content.module.scss';
import button from '../Buttons.module.scss';
import InstagramEmbed from 'react-instagram-embed';
import AdSense from 'react-adsense';

export default function DestinationContent() {
  return (
    <div className={content.container}>
      <h2 className={content.heading}>Rundvann</h2>
      <p className={content.tags}>
        Familie | Parkeringsplass | Hengekøye | 4 Telt
      </p>
      <p className={content.headingSmall}>Veibeskrivelse:</p>
      <div className={button.containerRowSmall}>
        <a
          href="https://ut.no/kart#16.02/59.85179/10.876905"
          className={button.secondaryLight}
        >
          Ut.no
        </a>
        <a
          href="https://www.google.com/maps/place/Rundvannet/@59.8514047,10.8750611,17.67z/data=!4m5!3m4!1s0x4641660bd210cf09:0xd9fd0ad80643139c!8m2!3d59.8514389!4d10.8764787"
          className={button.primaryLight}
        >
          Google Maps
        </a>
      </div>
      <p className={content.headingSmall}>Fra sosiale medier:</p>
      <div className={content.instagramContainer}>
        <InstagramEmbed
          url="https://www.instagram.com/p/B-xW5TEJ4mC/"
          clientAccessToken="281376926884992|RjE6Rwh8bKRcL8KT6AioC6s1CBE"
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
      <AdSense.Google
        client="ca-pub-1605579254477855"
        slot="7806394673"
        style={{ display: 'block' }}
        format="auto"
        responsive="true"
        layoutKey="-gw-1+2a-9x+5c"
      />
    </div>
  );
}
