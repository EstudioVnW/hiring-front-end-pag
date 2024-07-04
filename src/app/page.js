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
          <h2 className={styles.model__title}>Toyotas</h2>
          <Cars model="corolla" />

          <h2 className={styles.model__title}>Renaults</h2>
          <Cars model="renault" />

          <h2 className={styles.model__title}>BMW</h2>
          <Cars model="bmw" />
        </section>
      </section>
    </>
  );
}
