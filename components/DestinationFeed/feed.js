import Image from 'next/image';
import Link from 'next/link';
import feed from './Feed.module.scss';

export default function Feed() {
  return (
    <div className={feed.container}>
      <Link href="#">
        <div className={feed.destination}>
          <div className={feed.imageContainer}>
            <Image
              className={feed.image}
              src={'/img/locations/molnes.jpg'}
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <p className={feed.text}>Molnesfjellet</p>
          <p className={feed.tags}>
            Familievennlig | Parkering 
          </p>
        </div>
      </Link>
      <Link href="#">
        <div className={feed.destination}>
          <div className={feed.imageContainer}>
            <Image
              className={feed.image}
              src={'/img/locations/molnes.jpg'}
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <p className={feed.text}>Molnesfjellet</p>
          <p className={feed.tags}>
          Familievennlig | Parkering 
          </p>
        </div>
      </Link>
      <Link href="#">
        <div className={feed.destination}>
          <div className={feed.imageContainer}>
            <Image
              className={feed.image}
              src={'/img/locations/molnes.jpg'}
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <p className={feed.text}>Molnesfjellet</p>
          <p className={feed.tags}>
          Familievennlig | Parkering 
          </p>
        </div>
      </Link>
      <Link href="#">
        <div className={feed.destination}>
          <div className={feed.imageContainer}>
            <Image
              className={feed.image}
              src={'/img/locations/molnes.jpg'}
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <p className={feed.text}>Molnesfjellet</p>
          <p className={feed.tags}>
          Familievennlig | Parkering 
          </p>
        </div>
      </Link>
      <Link href="#">
        <div className={feed.destination}>
          <div className={feed.imageContainer}>
            <Image
              className={feed.image}
              src={'/img/locations/molnes.jpg'}
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <p className={feed.text}>Molnesfjellet</p>
          <p className={feed.tags}>
          Familievennlig | Parkering 
          </p>
        </div>
      </Link>
      <Link href="#">
        <div className={feed.destination}>
          <div className={feed.imageContainer}>
            <Image
              className={feed.image}
              src={'/img/locations/molnes.jpg'}
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <p className={feed.text}>Molnesfjellet</p>
          <p className={feed.tags}>
          Familievennlig | Parkering 
          </p>
        </div>
      </Link>
    </div>
  );
}
