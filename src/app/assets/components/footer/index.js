"use client";

import { useEffect } from "react";

import styles from "./page.module.sass";

//Font
import { GeistSans } from "geist/font/sans";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function Index() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <footer className={styles.footer}>
      <p className={GeistSans.className} data-aos="fade-right" data-aos-anchor-placement="top-bottom">
        Feito com ❤️ por{" "}
        <a href="https://spookyblog.bohr.io" target="_blank" rel="noreferrer">
          Gustavo
        </a>
      </p>
    </footer>
  );
}
