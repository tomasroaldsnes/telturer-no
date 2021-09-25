import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import TopSlider from '../../components/TopSlider/topslider'
import AppNavSimple from '../../components/AppNavSimple/appnav'
import Content from '../../components/DestinationContent/content'
import layout from '../../styles/Layout.module.scss';
import Destinations from '../destinations';

export async function getStaticPaths() {

  const res_dest = await fetch(`https://telturer.herokuapp.com/destinations`);
  const destinations = await res_dest.json();

  const paths = destinations.map((destination) => ({
    params: { id: destination.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {

  const res_dest = await fetch(`https://telturer.herokuapp.com/destinations/${params.id}`);
  const destination = await res_dest.json();

  return {
      props: {
          destination,
      },
  };
}

export default function Destination({ destination }) {
  return (
    <div className={layout.container}>
      <main>
        <AppNavSimple/>
        <TopSlider destination={destination}/>
        <Content destination={destination}/>
        
      </main>
    </div>
  );
}
