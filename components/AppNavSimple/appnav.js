import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import appnav from './Appnav.module.scss';

export default function AppNavSimple() {
  const router = useRouter();
  return (
    <div className={appnav.container}>
      <a onClick={() => router.back()}>
        <div className={appnav.icon}>
          <Image src="/back.svg" height={12} width={12}></Image>
        </div>
        </a>
        <a onClick={() => router.back()}>
        <p className={appnav.text}>Flere steder</p>
        </a>
    </div>
  );
}
