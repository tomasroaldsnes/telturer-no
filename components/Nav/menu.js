import Image from 'next/image'
import Link from 'next/link'
import layout from '../../styles/Layout.module.scss'
import button from '../Buttons.module.scss'

export default function Nav() {
  return (
    <div className={!open ? layout.menu : layout.menuOpen}>
      <ul className={layout.menuList}>
        <li className={layout.menuItem}>
        <Link href="/destinations">
          <a>Destinasjoner</a>
          </Link>
        </li>
        <li className={layout.menuItem}>
        <Link href="/destinations?keyword=Parkering">
          <a>Steder med parkering</a>
        </Link>
        </li>
        <li className={layout.menuItem}>
        <Link href="/destinations?keyword=Langtur">
          <a>Langturer</a>
        </Link>
        </li>
        <li className={layout.menuItem}>
        <Link href="/destinations?keyword=Familie">
          <a>For familien</a>
        </Link>
        </li>
        {/* <li className={layout.menuItemNoHover}>
          <div className={button.containerRow}>
            <button className={button.secondary}>Logg inn</button>
            <button className={button.primary}>Kjøp Premium</button>
          </div>
        </li> */}
      </ul>
    </div>
  )
}

