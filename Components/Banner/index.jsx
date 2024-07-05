import Image from "next/image"
import styles from "./styles.module.scss"
import imgGoogle from "../../public/googleplay.png" 
import imgApple from "../../public/appstore.png"
import imgBanner from "../../public/banner.png"

export default function Banner() {
  return (
    <section className={styles.banner}> 
        <div className={styles.banner__wrapper}> 
            <div className={styles.banner__content}>
                <h1>Alugue o Carro Perfeito e Descubra a Liberdade nas Estradas</h1>
                <div className={styles.banner__dash}></div>
                <p>Veículos de Qualidade para Todas as Suas Necessidades de Viagem, Garantindo Conforto e Segurança em Cada Quilômetro Percorrido.</p>
                <div className={styles.banner__buttons}>
                    <button> <Image src={imgApple}  alt="icone applestore"/> </button>
                    <button> <Image src={imgGoogle} alt="icone googleplay"/> </button>
                </div>
            </div>
            <picture className={styles.banner__imgCars}>
                <Image src={imgBanner} alt="lancer preto com fundo azul" />
            </picture>
        </div>
    </section>
  )
}
