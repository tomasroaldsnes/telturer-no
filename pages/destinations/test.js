import Image from 'next/image';
import Link from 'next/link';
import TopSlider from '../../components/TopSlider/topslider'
import Content from '../../components/DestinationContent/content'
import layout from '../../styles/Layout.module.scss';

export default function Destination() {
  return (
    <div className={layout.container}>
      <main>
        <TopSlider/>
        <Content/>
        
      </main>
    </div>
  );
}
