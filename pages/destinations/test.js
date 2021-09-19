import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import TopSlider from '../../components/TopSlider/topslider'
import Content from '../../components/DestinationContent/content'
import layout from '../../styles/Layout.module.scss';

export default function Destination() {
  return (
    <div className={layout.container}>
      <main>
      <Script
        data-ad-client="ca-pub-1605579254477855"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
        <TopSlider/>
        <Content/>
        
      </main>
    </div>
  );
}
