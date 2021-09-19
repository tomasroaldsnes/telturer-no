import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Script from 'next/script';
import layout from '../styles/Layout.module.scss';
import DestinationFeed from '../components/DestinationFeed/feed'

export default function Destinations() {
  return (
    <div className={layout.container}>
      <main>
        <DestinationFeed/>
        
        
      </main>
    </div>
  );
}
