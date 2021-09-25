import Head from 'next/head'
import Image from 'next/image'
import nav from './Nav.module.scss'
import Link from 'next/link'
import Burger from '@animated-burgers/burger-slip';

export default function Nav({ menuOpen, openMenu }) {
  return (
<nav className={nav.navbar}>
        <ul id="navbar">
          <li>
            <Link href="/">
            <a className={nav.logo} id="logo">
              Teltturer<span>.</span>
            </a>
            </Link>
          </li>
          <li>
            <Burger
              direction="right"
              isOpen={menuOpen}
              onClick={() => openMenu(!menuOpen)}
            />
          </li>
        </ul>
      </nav>
       )
}