import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import feed from "./Feed.module.scss";

export default function Feed({ destinations }) {
  let _destinations = destinations;
  for (var i in _destinations) {
    if (_destinations[i].tags)
      _destinations[i].tags = _destinations[i].tags.replace(
        new RegExp("\\|", "g"),
        "·"
      );
  }
  return (
    <div className={feed.container}>
      {_destinations.map((destination) => (
        <Link
          href={"/destinasjoner/" + destination.id + "/" + destination.slug}
        >
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
