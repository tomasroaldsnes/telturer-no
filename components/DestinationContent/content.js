import Head from "next/head";
import content from "./Content.module.scss";
import button from "../Buttons.module.scss";
import Image from "next/image";
//import AdSense from 'react-adsense';

export default function DestinationContent({ destination }) {
  const tag = destination.tags.replace(new RegExp("\\|", "g"), "·");
  console.log(destination);
  return (
    <>
      <div className={content.container}>
        <h1 className={content.heading}>{destination.title}</h1>
        <p className={content.tags}>{tag}</p>
        {destination?.description && (
          <p className={content.description}>{destination.description}</p>
        )}
        {destination?.Adkomst.length > 0 && (
          <>
            <h2 className={content.headingSmall}>Slik kommer du deg dit:</h2>
            <div className={content.adkomst}>
              {destination.Adkomst[0].Bil === true && (
                <div className={content.adkomstIcon}>
                  <Image
                    src="/icons/car.svg"
                    height={24}
                    width={24}
                    alt="Bil"
                  />
                  <span>Krever bil</span>
                </div>
              )}
              {destination.Adkomst[0].Kollektivtransport === true && (
                <div className={content.adkomstIcon}>
                  <Image
                    src="/icons/bus.svg"
                    height={24}
                    width={24}
                    alt="Buss"
                  />
                  <span>Buss og kollektiv</span>
                </div>
              )}
              {destination.Adkomst[0].Tog === true && (
                <div className={content.adkomstIcon}>
                  <Image
                    src="/icons/train.svg"
                    height={24}
                    width={24}
                    alt="Tog"
                  />
                  <span>Tog</span>
                </div>
              )}
              <div className={content.adkomstIcon}>
                <Image
                  src="/icons/parking.svg"
                  height={24}
                  width={24}
                  alt="Parkering:"
                />
                <span>Parkering i nærheten</span>
              </div>
            </div>
          </>
        )}

        {destination?.Stedstype && (
          <>
            <h2 className={content.headingSmall}>Stedstype:</h2>
            <div className={content.adkomst}>
              {destination.Stedstype.Teltplass === true && (
                <div className={content.adkomstIcon}>
                  <Image
                    src="/icons/tent.svg"
                    height={24}
                    width={24}
                    alt="Telt"
                  />
                  <span>Telt og hengekøye</span>
                </div>
              )}
              {destination.Stedstype.Vann === true && (
                <div className={content.adkomstIcon}>
                  <Image
                    src="/icons/ripple.svg"
                    height={24}
                    width={24}
                    alt="Vann"
                  />
                  <span>Ved vannet</span>
                </div>
              )}
              {destination.Stedstype.Camper === true && (
                <div className={content.adkomstIcon}>
                  <Image
                    src="/icons/caravan.svg"
                    height={24}
                    width={24}
                    alt="Camper"
                  />
                  <span>Spot for camper</span>
                </div>
              )}
            </div>
          </>
        )}

        <h2 className={content.headingSmall}>Veibeskrivelse:</h2>
        <div className={button.maps}>
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
