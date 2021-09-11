import Head from 'next/head'
import Image from 'next/image'
import hero from './Hero.module.scss'
import button from '../Buttons.module.scss'

export default function Hero() {
  return (
    <div className={hero.container}>
      <div className={hero.overlay}>
        <div className={hero.content}>
          <p className={hero.text}>Skal du ut å telte? Digg.</p>
          <button className={button.primaryDark}>Finn destinasjon</button>
         </div>
      </div>
    </div>
  )
}