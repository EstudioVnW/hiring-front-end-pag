import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "@/public/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link href="/">
          <Image src={logo} className={styles.header__logo} />
        </Link>
        <nav className={styles.header__nav}>
          <ul>
            <li>
              <Link href="favorites">Favoritos</Link>
            </li>
            <li>
              <a href="#contato">Contatos</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
