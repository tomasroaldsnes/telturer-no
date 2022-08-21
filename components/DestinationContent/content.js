import Head from "next/head";
import content from "./Content.module.scss";
import button from "../Buttons.module.scss";
import Image from "next/image";
//import AdSense from 'react-adsense';

export default function DestinationContent({ destination }) {
  const tag = destination.tags.replace(new RegExp("\\|", "g"), "·");
  console.log(destination.description.split(/\r?\n|\r|\n/g));
  return (
    <>
      <div className={content.container}>
        <h1 className={content.heading}>{destination.title}</h1>
        <p className={content.tags}>{tag}</p>
        {destination?.description &&
          destination.description != null &&
          destination.description
            .split(/\r?\n|\r|\n/g)
            .map((paragraphs) => (
              <p className={content.description}>{paragraphs}</p>
            ))}
        {destination?.Adkomst && (
          <>
            <h2 className={content.headingSmall}>Slik kommer du deg dit:</h2>
            <div className={content.adkomst}>
              {destination.Adkomst.Bil === true && (
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
              {destination.Adkomst.Kollektivtransport === true && (
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
              {destination.Adkomst.Tog === true && (
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
              {destination.Adkomst.Parkering === true && (
                <div className={content.adkomstIcon}>
                  <Image
                    src="/icons/parking.svg"
                    height={24}
                    width={24}
                    alt="Parkering:"
                  />
                  <span>Parkering i nærheten</span>
                </div>
              )}
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
              {destination.Stedstype.Topptur === true && (
                <div className={content.adkomstIcon}>
                  <Image
                    src="/icons/winter.svg"
                    height={24}
                    width={24}
                    alt="Topptur"
                  />
                  <span>Topptur</span>
                </div>
              )}
              {destination.Stedstype.Fjelltur === true && (
                <div className={content.adkomstIcon}>
                  <Image
                    src="/icons/fjell.svg"
                    height={24}
                    width={24}
                    alt="Fjell"
                  />
                  <span>Fjelltur</span>
                </div>
              )}
              {destination.Stedstype.Sopptur === true && (
                <div className={content.adkomstIcon}>
                  <Image
                    src="/icons/sopp.svg"
                    height={24}
                    width={24}
                    alt="Sopp"
                  />
                  <span>Sopptur</span>
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

        {destination?.Rating && (
          <>
            <div className={content.ratings}>
              {destination.Rating.Vanskelighetsgrad && (
                <div className={content.rating}>
                  <span>Vanskelighetsgrad</span>
                  <h3>
                    {destination.Rating.Vanskelighetsgrad === 1
                      ? "Nybegynner"
                      : destination.Rating.Vanskelighetsgrad === 2
                      ? "Noe krevende"
                      : destination.Rating.Vanskelighetsgrad === 3
                      ? "Svært krevende"
                      : "Ikke satt"}
                  </h3>
                  <div className={content.ratingLevels}>
                    <div className={content.ratingLevelActive} />
                    <div
                      className={
                        destination.Rating.Vanskelighetsgrad > 1
                          ? content.ratingLevelActive
                          : content.ratingLevel
                      }
                    />
                    <div
                      className={
                        destination.Rating.Vanskelighetsgrad > 2
                          ? content.ratingLevelActive
                          : content.ratingLevel
                      }
                    />
                  </div>
                  <p>
                    {destination.Rating.Vanskelighetsgrad === 1
                      ? "Passer for de aller fleste."
                      : destination.Rating.Vanskelighetsgrad === 2
                      ? "Kan være krevende å nå stedet."
                      : destination.Rating.Vanskelighetsgrad === 3
                      ? "Ikke for nybegynnere. Krevende å nå stedet og ofte krevende forhold."
                      : "Ikke satt"}
                  </p>
                </div>
              )}
              {destination.Rating.Folkemengde && (
                <div className={content.rating}>
                  <span>Folkemengde</span>
                  <h3>
                    {destination.Rating.Folkemengde <= 3
                      ? "Svært rolig"
                      : destination.Rating.Folkemengde <= 6
                      ? "Noen i nærheten"
                      : destination.Rating.Folkemengde <= 10
                      ? "Folksomt"
                      : "Ikke satt"}
                  </h3>
                  <div
                    className={content.ratingSlider}
                    style={{
                      background: `linear-gradient(to right, #1deb32 ${
                        destination.Rating.Folkemengde * 10
                      }%, rgb(0, 0, 0, 0.2) 0)`,
                    }}
                  />
                  <p>
                    {destination.Rating.Folkemengde <= 3
                      ? "Som regel ingen i nærheten."
                      : destination.Rating.Folkemengde <= 6
                      ? "Noe folksomt i helgene."
                      : destination.Rating.Folkemengde <= 10
                      ? "Ofte trangt om plassen."
                      : "Ikke satt"}
                  </p>
                </div>
              )}

              {destination.Rating.Bakkefaktor && (
                <div className={content.rating}>
                  <span>Bakkefaktor</span>
                  <h3>
                    {destination.Rating.Bakkefaktor <= 3
                      ? "Krevende terreng"
                      : destination.Rating.Bakkefaktor <= 6
                      ? "Variabelt"
                      : destination.Rating.Bakkefaktor <= 10
                      ? "Flatt og fint"
                      : "Ikke satt"}
                  </h3>
                  <div
                    className={content.ratingSlider}
                    style={{
                      background: `linear-gradient(to right, #1deb32 ${
                        destination.Rating.Bakkefaktor * 10
                      }%, rgb(0, 0, 0, 0.2) 0)`,
                    }}
                  />
                  <p>
                    {destination.Rating.Bakkefaktor <= 3
                      ? "It's gonna be a bumpy ride."
                      : destination.Rating.Bakkefaktor <= 6
                      ? "Ikke helt rett frem å finne flat bakke."
                      : destination.Rating.Bakkefaktor <= 10
                      ? "Gode områder for telt."
                      : "Ikke satt"}
                  </p>
                </div>
              )}

              {destination.Rating.Hengefaktor && (
                <div className={content.rating}>
                  <span>Hengefaktor</span>
                  <h3>
                    {destination.Rating.Hengefaktor <= 3
                      ? "Lav"
                      : destination.Rating.Hengefaktor <= 6
                      ? "Helt greit"
                      : destination.Rating.Hengefaktor <= 10
                      ? "God"
                      : "Ikke satt"}
                  </h3>
                  <div
                    className={content.ratingSlider}
                    style={{
                      background: `linear-gradient(to right, #1deb32 ${
                        destination.Rating.Hengefaktor * 10
                      }%, rgb(0, 0, 0, 0.2) 0)`,
                    }}
                  />
                  <p>
                    {destination.Rating.Hengefaktor <= 3
                      ? "Få eller ingen trær."
                      : destination.Rating.Hengefaktor <= 6
                      ? "Mulighet for hengekøye."
                      : destination.Rating.Hengefaktor <= 10
                      ? "Hengekøye anbefales."
                      : "Ikke satt"}
                  </p>
                </div>
              )}

              {destination.Rating.Vibe && (
                <div className={content.rating}>
                  <span>Vibe</span>
                  <h3>
                    {destination.Rating.Vibe <= 3
                      ? "Ok"
                      : destination.Rating.Vibe <= 6
                      ? "Chill"
                      : destination.Rating.Vibe <= 10
                      ? "Idyllisk"
                      : "Ikke satt"}
                  </h3>
                  <div
                    className={content.ratingSlider}
                    style={{
                      background: `linear-gradient(to right, #1deb32 ${
                        destination.Rating.Vibe * 10
                      }%, rgb(0, 0, 0, 0.2) 0)`,
                    }}
                  />
                  <p>
                    {destination.Rating.Vibe <= 3
                      ? "Helt greit sted å overnatte."
                      : destination.Rating.Vibe <= 6
                      ? "Pen natur og rolig natur."
                      : destination.Rating.Vibe <= 10
                      ? "Instagram materiale."
                      : "Ikke satt"}
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
