import styles from "./page.module.sass";

//Next
import Image from "next/image";
import Link from "next/link";

//Font
import { GeistSans } from "geist/font/sans";

export default function header() {
  return (
    <>
      <header className={styles.header}>
        <section className={styles.header__container}>
          <Link href="/">
            <div className={styles.header__logo}>
              <div className={styles.header__icon}>
                <Image src="/car.svg" alt="Car icon" width={25} height={25} />
              </div>
              <div className={styles.header__title}>
                <h1
                  className={GeistSans.className}
                >LocaWeb</h1>
              </div>
            </div>
          </Link>
          <nav className={styles.header__nav}>
            <ul className={styles.header__nav__list}>
              <li className={GeistSans.className}>
                <Link href="/">Home</Link>
              </li>
              <li className={GeistSans.className}>
                <Link href="/favoritos">Favoritos</Link>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
}
