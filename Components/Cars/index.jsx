import Sliders from "../Sliders";
import styles from "./styles.module.scss";

export default function Cars() {
  return (
    <section className={styles.carsContainer}>
      <div className={styles.carsContainer__wrapper}>
        <div className={styles.carsContainer__texts}>
          <h2>Alugar um carro nunca foi tão facil</h2>
          <div className={styles.carsContainer__dash}></div>
        </div>
        <div className={styles.carsContainer__carrossel}>
          <Sliders make="Audi" />
          <Sliders make="toyota" />
          <Sliders make="Mitsubishi" />
        </div>
      </div>
    </section>
  );
}
