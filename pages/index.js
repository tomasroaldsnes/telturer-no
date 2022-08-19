import Head from "next/head";
import { useState } from "react";
import Script from "next/script";
import layout from "../styles/Layout.module.scss";
import Nav from "../components/Nav/nav";
import Menu from "../components/Nav/menu";
import Hero from "../components/Hero/hero";
import Pick from "../components/Pick/pick";
import Activities from "../components/Activities/activities";
import Slider from "../components/Slider/slider";
import Footer from "../components/Footer/footer";
import Cookie from "../components/Cookie/cookie";
import "@animated-burgers/burger-slip/dist/styles.css";
import { useLocalStorage } from "../components/Utils/useLocalStorage";

export async function getStaticProps() {
  const res_dest = await fetch(`https://telturer.herokuapp.com/destinations`);
  const destinations = await res_dest.json();

  return {
    props: {
      destinations,
    },
  };
}

export default function Home({ destinations }) {
  const [menuOpen, openMenu] = useState(false);
  const [utilizesNav, useNav] = useState(true);
  const [hideCookie, setHideCookie] = useState(true);
  const [consent, setConsent] = useLocalStorage("consent", "undefined");
  return (
    <div className={layout.container}>
      <Head>
        <title>Telturer.no - de beste telt og hengekøye turene i Norge</title>
        <meta
          name="description"
          content="Teltturer.no gir deg en oversikt over Norges beste steder å sove i naturen. Her finner du de beste telt- og hengekøyeturene i Norge. Planlegg Norgesferien med reisebeskrivelser, parkering og aktiviteter der du skal telte."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Telturer.no - de beste telt og hengekøye turene i Norge"
        />
        <meta
          property="og:description"
          content="Teltturer.no gir deg en oversikt over Norges beste steder å sove i naturen. Her finner du de beste telt- og hengekøyeturene i Norge. Planlegg Norgesferien med reisebeskrivelser, parkering og aktiviteter der du skal telte."
        />
        <meta property="og:url" content="https://teltturer.no/" />
        <meta property="og:type" content="website" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
               (adsbygoogle = window.adsbygoogle || []).push({
                   google_ad_client: "ca-pub-1605579254477855",
                   enable_page_level_ads: true
              });
                `,
          }}
        />
        <script
          defer
          data-domain="teltturer.no"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>
      {consent === "consent" && (
        <>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-0CJDSPS544"
          />
          <Script src="/gtag.js" strategy="afterInteractive" />
        </>
      )}

      <main>
        <Nav menuOpen={menuOpen} openMenu={openMenu}></Nav>
        {menuOpen ? <Menu open={menuOpen} /> : null}
        {!menuOpen ? <Hero /> : null}
        {!menuOpen ? (
          <Slider
            title={"Nærheten av Oslo"}
            filter={"city"}
            keyword={"Oslo"}
            destinations={destinations}
          ></Slider>
        ) : null}
        {!menuOpen ? (
          <Slider
            title={"De beste turene"}
            filter={"tags"}
            keyword={"Langtur"}
            destinations={destinations}
          ></Slider>
        ) : null}
        <Pick />
        {!menuOpen ? (
          <Slider
            title={"Enkelt å parkere"}
            filter={"tags"}
            keyword={"Parkering"}
            destinations={destinations}
          ></Slider>
        ) : null}
        <Activities />
        <Footer />
        {consent === "undefined" && hideCookie && (
          <Cookie setConsent={setConsent} setHideCookie={setHideCookie} />
        )}
      </main>
    </div>
  );
}
