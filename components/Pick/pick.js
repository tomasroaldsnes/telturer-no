import Image from 'next/image';
import pick from './Pick.module.scss';
import button from '../Buttons.module.scss';
import Link from 'next/link';

export default function Pick() {
  return (
    <div className={pick.container}>
      <div className={pick.imageContainer}>
        <Image
          className={pick.image}
          src={'/img/locations/cover-desktop.jpg'}
          layout={'fill'}
          alt={'Trip Name'}
          objectFit="cover"
          loading='lazy'
        />
      </div>
      <div className={pick.content}>
        <p className={pick.header}>Norgesferie?</p>
        <p className={pick.text}>Skal du ut å reise i sommer? Vi har samlet de beste turene.</p>
        <button className={button.primary}>Reiseplanlegger</button>
      </div>
    </div>
  );
}