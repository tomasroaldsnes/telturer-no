import Image from "next/image";
import Link from "next/link";
import layout from "../../styles/Layout.module.scss";
import button from "../Buttons.module.scss";

export default function Nav() {
  return (
    <div className={!open ? layout.menu : layout.menuOpen}>
      <ul className={layout.menuList}>
        <li className={layout.menuItem}>
          <Link href="/destinasjoner">
            <a>Destinasjoner</a>
          </Link>
        </li>
        <li className={layout.menuItem}>
          <Link href="/destinasjoner?keyword=Familie">
            <a>For familien</a>
          </Link>
        </li>
        <li className={layout.menuItem}>
          <Link href="/destinasjoner?keyword=Topptur">
            <a>Toppturer</a>
          </Link>
        </li>

        <li className={layout.menuItem}>
          <Link href="/destinasjoner?keyword=Sopptur">
            <a>Soppturer</a>
          </Link>
        </li>
        <li className={layout.menuItem}>
          <Link href="/destinasjoner?keyword=Sykkel">
            <a>Sykkelturer</a>
          </Link>
        </li>
        <li className={layout.menuItem}>
          <Link href="/destinasjoner?keyword=Kajakk">
            <a>Kano og kajakk</a>
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
  );
}
