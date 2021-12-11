import React, { useState, useEffect } from 'react';
import nav from './Nav.module.scss';
import Link from 'next/link';
import Burger from '@animated-burgers/burger-slip';

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export default function Nav({ menuOpen, openMenu }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  return (
    <nav className={visible ? nav.navbar : nav.navbarHidden}>
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
  );
}
