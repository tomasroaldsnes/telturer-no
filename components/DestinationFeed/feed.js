import Image from 'next/image';
import Link from 'next/link';
import feed from './Feed.module.scss';

export default function Feed({ destinations }) {
  return (
    <div className={feed.container}>
      {destinations.map((destination) => (
        <Link href="#">
        <div className={feed.destination}>
          <div className={feed.imageContainer}>
            <Image
              className={feed.image}
              src={'https://telturer.herokuapp.com' + destination.Teaser.formats.small.url}
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <p className={feed.text}>{destination.Title}</p>
          <p className={feed.tags}>
            Familievennlig | Parkering 
          </p>
        </div>
      </Link>
      ))}
    </div>
  );
}
