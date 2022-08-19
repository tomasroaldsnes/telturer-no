import TopSlider from "../../../components/TopSlider/topslider";
import AppNavSimple from "../../../components/AppNavSimple/appnav";
import Content from "../../../components/DestinationContent/content";
import layout from "../../../styles/Layout.module.scss";
import Head from "next/head";

export async function getStaticPaths() {
  const res_dest = await fetch(`https://telturer.herokuapp.com/destinations`);
  const destinations = await res_dest.json();

  const paths = destinations.map((destination) => ({
    params: {
      slug: destination.title
        .toString()
        .toLowerCase()
        .toString()
        .replaceAll(" ", "-")
        .toString()
        .replaceAll("å", "aa")
        .toString()
        .replaceAll("æ", "ae")
        .toString()
        .replaceAll("ø", "o"),
      id: destination.id.toString(),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { id, slug } }) {
  const res_dest = await fetch(
    `https://telturer.herokuapp.com/destinations/${id}`
  );
  const destination = await res_dest.json();

  return {
    props: {
      destination,
      id,
      slug,
    },
  };
}

export default function Destination({ destination, id, slug }) {
  //console.log(destination);
  return (
    <>
      <Head>
        <title>Telttur til {destination.title}</title>
        <meta name="description" content={destination.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={destination.title} />
        <meta property="og:description" content={destination.description} />
        <meta
          property="og:url"
          content={`https://teltturer.no/destinasjoner/${id}/${slug}`}
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className={layout.container}>
        <main>
          <AppNavSimple />
          <TopSlider destination={destination} />
          <Content destination={destination} />
        </main>
      </div>
    </>
  );
}
