import { useState, useEffect } from "react";
import layout from "../styles/Layout.module.scss";
import Nav from "../components/Nav/nav";
import Menu from "../components/Nav/menu";
import Hero from "../components/HeroContent/hero";
import Footer from "../components/Footer/footer";
import Content from "../components/Content/content";
import "@animated-burgers/burger-slip/dist/styles.css";
import HERO_IMAGE from "../public/img/om-oss.webp";

export default function Home({ destinations }) {
  const [menuOpen, openMenu] = useState(false);
  return (
    <div className={layout.container}>
      <main>
        <Nav menuOpen={menuOpen} openMenu={openMenu}></Nav>
        {menuOpen ? <Menu open={menuOpen} /> : null}
        {!menuOpen ? <Hero text="Om oss" image={HERO_IMAGE} /> : null}
        <Content
          headline="Hvem er vi?"
          text="Vi er en liten gjeng som elsker å telte. Etter flere Norgesferier og økende frustrasjon over at det var vanskelig å få en oversikt over de gode stedene tenkte vi at det hadde vært kult å hatt 'en slags Airbnb for teltturer i Norge' - og vipps, så var teltturer.no født."
        />
        <Content
          headline="Vår misjon"
          text="Vi vil gjøre det enklere å dra på telttur i Norge! Ikke noe mer, ikke noe mindre. Vi kartlegger, rangerer og anbefaler steder i Norge for å gjøre det enklere for alle å dra ut i naturen. "
        />
        <Content
          headline="Neste på listen?"
          text="Det neste som kommer nå er selvfølgelig flere steder, kart-funksjonalitet og muligheter til at alle kan kommentere og rangere stedene."
        />
        <Footer />
      </main>
    </div>
  );
}
