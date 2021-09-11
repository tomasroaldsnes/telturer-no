import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import Script from 'next/script';
import layout from '../styles/Layout.module.scss';
import Nav from '../components/Nav/nav'
import Menu from '../components/Nav/menu'
import Hero from '../components/Hero/hero'
import Slider from '../components/Slider/slider'
import '@animated-burgers/burger-slip/dist/styles.css?2';



export default function Home() {
  const [menuOpen, openMenu] = useState(false);
  return (
    <div className={layout.container}>
      <Head>
        <title>Telturer.no</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="/nav.js?3" strategy="afterInteractive" />
      <main>
      <Nav menuOpen={menuOpen} openMenu={openMenu}></Nav>
      {menuOpen ? <Menu open={menuOpen} /> : null}
      {!menuOpen ? <Hero/> : null}
      {!menuOpen ? <Slider title={"Nærheten av Oslo"}></Slider> : null}
      {!menuOpen ? <Slider title={"Nærheten av Bergen"}></Slider> : null}
        
      </main>
    </div>
  )
}
