import Image from 'next/image';
import Link from 'next/link';
import appnav from './Appnav.module.scss';

export default function AppNavSimple() {
  return (
    <div className={appnav.container}>
      <Link href={'/destinations'}>
        <div className={appnav.icon}>
          <Image src="/back.svg" height={12} width={12}></Image>
        </div>
        </Link>
        <Link href={'/destinations'}>
        <p className={appnav.text}>Flere steder</p>
        </Link>
    </div>
  );
}
