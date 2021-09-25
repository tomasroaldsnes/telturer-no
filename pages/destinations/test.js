import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import TopSlider from '../../components/TopSlider/topslider'
import AppNavSimple from '../../components/AppNavSimple/appnav'
import Content from '../../components/DestinationContent/content'
import layout from '../../styles/Layout.module.scss';

export default function Destination() {
  return (
    <div className={layout.container}>
      <main>
        <AppNavSimple/>
        <TopSlider/>
        <Content/>
        
      </main>
    </div>
  );
}
