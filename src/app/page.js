"use client";

import { useEffect, lazy, Suspense } from "react";

//Styles
import styles from "./page.module.sass";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

//Components
import Loading from "./assets/components/loading";
const Cars = lazy(() => import("./car"));

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <section className={styles.home__container}>
        <section className={styles.home__hero}>
          <h1 className={styles.home__hero__title} data-aos="fade-up">
            Encontre seu carro
            <span className={styles.circle__sketch__highlight}>dos sonhos</span>
          </h1>
        </section>
        <section>
          <h2 className={styles.model__title} data-aos="fade-up" data-aos-delay="200">
            Toyota
          </h2>
          <Suspense fallback={<Loading />}>
            <Cars model="corolla" />
          </Suspense>

          <h2 className={styles.model__title} data-aos="fade-up" data-aos-delay="200">
            Volkswagen
          </h2>
          <Suspense fallback={<Loading />}>
            <Cars model="taos" />
          </Suspense>

          <h2 className={styles.model__title} data-aos="fade-up" data-aos-delay="200">
            Chevrolet
          </h2>
          <Suspense fallback={<Loading />}>
            <Cars model="cruze" />
          </Suspense>
        </section>
      </section>
    </>
  );
}
