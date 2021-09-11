import Image from 'next/image'
import Link from 'next/link'
import layout from '../../styles/Layout.module.scss'

export default function Nav() {
  return (
    <div className={!open ? layout.menu : layout.menuOpen}>
      <ul className={layout.menuList}>
        <li className={layout.menuItem}>
          <a>Login</a>
        </li>
        <li className={layout.menuItem}>
        <Link href="/templates">
          <a>Templates</a>
        </Link>
        </li>
        <li className={layout.menuItem}>
          <a>How to use</a>
        </li>
        <li className={layout.menuItem}>
          <a>About MVTP</a>
        </li>
      </ul>
    </div>
  )
}

