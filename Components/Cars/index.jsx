
import Sliders from '../Sliders'
import styles from './styles.module.scss'


export default function Cars() {
  return (
    <section className={styles.carsContainer}>
        <div className={styles.carsContainer__wrapper}>
          <div className={styles.carsContainer__texts}>
            <h2>Alugar um carro nunca foi tão facil</h2>
            <div className={styles.carsContainer__dash}></div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum ut nulla cumque earum</p>
          </div>
          <Sliders />
          <Sliders />
          <Sliders />
        </div>
    </section>
  )
}
