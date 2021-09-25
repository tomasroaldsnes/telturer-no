import { useState } from 'react';
import layout from '../styles/Layout.module.scss';
import DestinationFeed from '../components/DestinationFeed/feed'
import AppNav from '../components/AppNavTravels/appnav'

export default function Travels() {
  const [sort, setSort] = useState('Alle');
  return (
    <div className={layout.container}>
      <main>
        <AppNav _sort={sort} _setSort={setSort}/>
        <DestinationFeed/>
        
        
      </main>
    </div>
  );
}
