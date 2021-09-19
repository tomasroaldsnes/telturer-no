import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Script from 'next/script';
import layout from '../styles/Layout.module.scss';
import Nav from '../components/Nav/nav';
import Menu from '../components/Nav/menu';
import Hero from '../components/Hero/hero';
import Pick from '../components/Pick/pick';
import Activities from '../components/Activities/activities';
import Slider from '../components/Slider/slider';
import Footer from '../components/Footer/footer';
import Cookie from '../components/Cookie/cookie';
import '@animated-burgers/burger-slip/dist/styles.css?2';
import { useLocalStorage } from '../components/Utils/useLocalStorage';

export default function Destinations() {
  const [menuOpen, openMenu] = useState(false);
  return (
    <div className={layout.container}>
      <Script src="/nav.js?3" strategy="afterInteractive" />
      <main>
        <Nav menuOpen={menuOpen} openMenu={openMenu}></Nav>
        {menuOpen ? <Menu open={menuOpen} /> : null}
        {!menuOpen ? <Hero /> : null}
        {!menuOpen ? <Slider title={'Nærheten av Oslo'}></Slider> : null}
        {!menuOpen ? <Slider title={'Nærheten av Bergen'}></Slider> : null}
        <Pick />
        {!menuOpen ? <Slider title={'Nærheten av Ålesund'}></Slider> : null}
        <Footer/>
      </main>
    </div>
  );
}