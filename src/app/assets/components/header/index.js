"use client";

import { useEffect } from "react";

import styles from "./page.module.sass";

//Next
import Image from "next/image";
import Link from "next/link";

//Font
import { GeistSans } from "geist/font/sans";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <header className={styles.header}>
        <section className={styles.header__container}>
          <Link href="/" data-aos="fade-right">
            <div className={styles.header__logo}>
              <div className={styles.header__icon}>
                <Image src="/car.svg" alt="Car icon" width={25} height={25} />
              </div>
              <div className={styles.header__title}>
                <h1 className={GeistSans.className}>LocaWeb</h1>
              </div>
            </div>
          </Link>
          <nav className={styles.header__nav} data-aos="fade-left" data-aos-delay="200">
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
