import Image from 'next/image';
import cookie from './Cookie.module.scss';

export default function Cookie({ setConsent, setHideCookie }) {
  return (
    <div className={cookie.container}>
      <div className={cookie.image}>
        <Image src={'/cookie.jpg?1'} width={167} height={125} />
      </div>
      <div className={cookie.content}>
        <p className={cookie.title}>Cookies!</p>
        <p className={cookie.text}>
          Vi bruker informasjonskapsler for å gjøre nettsiden bedre å bruke.
        </p>
      </div>
      <div className={cookie.buttonContainer}>
        <button className={cookie.decline} onClick={() => {setConsent('rejected'); setHideCookie(false);}}>
          Nei takk
        </button>
        <button className={cookie.consent} onClick={() => {setConsent('given'); setHideCookie(false);}}>
          OK
        </button>
      </div>
    </div>
  );
}
