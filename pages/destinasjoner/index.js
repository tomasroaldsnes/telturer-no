import { useState, useEffect } from "react";
import Head from "next/head";
import layout from "../../styles/Layout.module.scss";
import DestinationFeed from "../../components/DestinationFeed/feed";
import AppNav from "../../components/AppNav/appnav";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const res_dest = await fetch(`https://telturer.herokuapp.com/destinations`);
  const destinations = await res_dest.json();

  return {
    props: {
      destinations,
    },
  };
}
export default function Destinations({ destinations }) {
  const param = useRouter();
  const [sort, setSort] = useState("Alle");
  const [checkParam, setCheckParam] = useState(true);
  let show_destinations = destinations;

  if (sort != "Alle") {
    show_destinations = destinations.filter((d) => d.tags.includes(sort));
  } else {
    show_destinations = destinations;
  }

  if (checkParam && param.query && param.query.keyword) {
    show_destinations = destinations.filter((d) =>
      d.tags.includes(param.query.keyword)
    );
    if (checkParam) {
      setSort(param.query.keyword);
      setCheckParam(false);
    }
  }

  return (
    <>
      <Head>
        <title>Destinasjoner</title>
        <meta
          name="description"
          content="De råeste stedene for teltturer og hengekøyeturer i Norge."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Destinasjoner" />
        <meta
          property="og:description"
          content="De råeste stedene for teltturer og hengekøyeturer i Norge."
        />
        <meta property="og:url" content="https://teltturer.no/destinasjoner" />
        <meta property="og:type" content="website" />
        <html lang="nb" />
      </Head>
      <div className={layout.container}>
        <main>
          <AppNav _sort={sort} _setSort={setSort} />
          <DestinationFeed destinations={show_destinations} />
        </main>
      </div>
    </>
  );
}
