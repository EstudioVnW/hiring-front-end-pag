import { lazy, Suspense } from "react";

//Styles
import styles from "./page.module.sass";

//Components
// import Cars from "./car";
import Loading from "./assets/components/loading";
const Cars = lazy(() => import("./car"));

export default function Home() {
  return (
    <>
      <section className={styles.home__container}>
        <section className={styles.home__hero}>
          <h1 className={styles.home__hero__title}>
            Encontre seu carro
            <span className={styles.circle__sketch__highlight}>dos sonhos</span>
          </h1>
        </section>
        <section>
          <h2 className={styles.model__title}>Toyota</h2>
          <Suspense fallback={<Loading />}>
            <Cars model="corolla" />
          </Suspense>

          <h2 className={styles.model__title}>Volkswagen</h2>
          <Suspense fallback={<Loading />}>
            <Cars model="taos" />
          </Suspense>

          <h2 className={styles.model__title}>Chevrolet</h2>
          <Suspense fallback={<Loading />}>
            <Cars model="cruze" />
          </Suspense>
        </section>
      </section>
    </>
  );
}
