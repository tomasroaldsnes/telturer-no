import Head from "next/head";
import content from "./Content.module.scss";
import button from "../Buttons.module.scss";
//import AdSense from 'react-adsense';

export default function DestinationContent({ destination }) {
  const tag = destination.tags.replace(new RegExp("\\|", "g"), "·");
  return (
    <>
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
