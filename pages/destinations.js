import { useState } from 'react';
import layout from '../styles/Layout.module.scss';
import DestinationFeed from '../components/DestinationFeed/feed';
import AppNav from '../components/AppNav/appnav';
import { useRouter } from 'next/router';

export async function getStaticProps() {
  const res_dest = await fetch(`https://telturer.herokuapp.com/destinations`);
  const destinations = await res_dest.json();

  return {
    props: {
      destinations,
    },
  };
}
export default function Destinations({ destinations }) {
  const param = useRouter();
  let query_state = 'Alle';
  let show_destinations = destinations;
  if (param.query && param.query.keyword) {
    query_state = param.query.keyword;
  }
  const [sort, setSort] = useState(query_state);
  if (sort != 'Alle') {
    show_destinations = destinations.filter((d) => d.tags.includes(sort));
  } else {
    show_destinations = destinations;
  }

  return (
    <div className={layout.container}>
      <main>
        <AppNav _sort={sort} _setSort={setSort} />
        <DestinationFeed destinations={show_destinations} />
      </main>
    </div>
  );
}
