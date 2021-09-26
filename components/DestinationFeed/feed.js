import Image from 'next/image';
import Link from 'next/link';
import feed from './Feed.module.scss';

export default function Feed({ destinations }) {
  return (
    <div className={feed.container}>
      {destinations.map((destination) => (
        <Link href={"/destinations/" + destination.id}>
        <div className={feed.destination}>
          <div className={feed.imageContainer}>
            <Image
              className={feed.image}
              src={destination.teaser.formats.small.url}
              layout="fill"
              objectFit="cover"
              loading="lazy"
            />
          </div>
          <p className={feed.text}>{destination.title}</p>
          <p className={feed.tags}>
          {destination.tags}
          </p>
        </div>
      </Link>
      ))}
    </div>
  );
}
