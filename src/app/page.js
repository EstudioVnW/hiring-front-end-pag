//components
import Cars from "./car";

//styles
import styles from "./page.module.sass";

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
          <Cars model="corolla" />

          <h2 className={styles.model__title}>Volkswagen</h2>
          <Cars model="taos" />

          <h2 className={styles.model__title}>Chevrolet</h2>
          <Cars model="cruze" />
        </section>
      </section>
    </>
  );
}
