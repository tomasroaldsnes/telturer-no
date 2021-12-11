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
          src={'/img/winter.jpg'}
          layout={'fill'}
          alt={'Trip Name'}
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className={pick.content}>
        <p className={pick.header}>Vinteridyll?</p>
        <p className={pick.text}>
          Skal du på fjellet i vinter? Vi har samlet de beste turene.
        </p>
        <Link href={'/destinations?keyword=Topptur'}>
          <button className={button.primary}>Se destinasjoner</button>
        </Link>
      </div>
    </div>
  );
}
