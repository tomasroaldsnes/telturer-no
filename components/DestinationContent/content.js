import Head from 'next/head';
import content from './Content.module.scss';
import button from '../Buttons.module.scss';
//import AdSense from 'react-adsense';

export default function DestinationContent({ destination }) {
  const tag = destination.tags.replace(new RegExp('\\|', 'g'), '·');
  return (
    <>
      <Head>
        <title>{`Telt og hengekøye tur til ${destination.title}`}</title>
        <meta name="description" content={`Type tur: ${destination.tag}`} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content={`Telt og hengekøye tur til ${destination.title}`}
        />
        <meta
          property="og:description"
          content={`Type tur: ${destination.tag}`}
        />
        <meta
          property="og:url"
          content={`https://teltturer.no/destinations/${destination.id}`}
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className={content.container}>
        <h2 className={content.heading}>{destination.title}</h2>
        <p className={content.tags}>{tag}</p>
        <p className={content.headingSmall}>Veibeskrivelse:</p>
        <div className={button.containerRowSmall}>
          {destination.ut && (
            <a href={destination.ut} className={button.secondaryLight}>
              Ut.no
            </a>
          )}

          <a href={destination.maps} className={button.primaryLight}>
            Google Maps
          </a>
        </div>
      </div>
    </>
  );
}
