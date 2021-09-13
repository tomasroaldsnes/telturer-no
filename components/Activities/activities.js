import Image from 'next/image';
import activities from './Activities.module.scss';
import Link from 'next/link';

export default function Activities() {
  return (
    <div className={activities.section}>
      <h2 className={activities.header}>For de aktive</h2>
      <div className={activities.container}>
        <div className={activities.imageContainer}>
          <Image
            src={'/img/activities/kano.png'}
            height={100}
            width={100}
            loading={'lazy'}
            alt={'Kajakk'}
          />
          <p className={activities.text}>Kajakk</p>
        </div>
        <div className={activities.imageContainer}>
          <Image
            className={activities.image}
            src={'/img/activities/surfing.png'}
            height={100}
            width={100}
            loading={'lazy'}
            alt={'Surfing'}
          />
          <p className={activities.text}>Surfing</p>
        </div>
        <div className={activities.imageContainer}>
          <Image
            className={activities.image}
            src={'/img/activities/sykkel.png'}
            height={100}
            width={100}
            loading={'lazy'}
            alt={'Sykkel'}
          />
          <p className={activities.text}>Sykkel</p>
        </div>
        <div className={activities.imageContainer}>
          <Image
            className={activities.image}
            src={'/img/activities/tur.png'}
            height={100}
            width={100}
            loading={'lazy'}
            alt={'Fjelltur'}
          />
          <p className={activities.text}>Fjelltur</p>
        </div>
      </div>
    </div>
  );
}