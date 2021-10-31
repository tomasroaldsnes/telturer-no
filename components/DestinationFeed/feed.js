import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';
import feed from './Feed.module.scss';
import Destinations from '../../pages/destinations';

export default function Feed({ destinations }) {
  let _destinations = destinations;
  for (var i in _destinations) {
    if (_destinations[i].tags)
      _destinations[i].tags = _destinations[i].tags.replace(/|/g, '·');;
  }
  return (
    <div className={feed.container}>
      {_destinations.map((destination) => (
        <Link href={'/destinations/' + destination.id}>
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
            <p className={feed.tags}>{destination.tags}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
