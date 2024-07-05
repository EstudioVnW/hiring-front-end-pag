import Image from "next/image"
import styles from "./styles.module.scss"
import logo from "@/public/logowhite.png"
import { FaRegCopyright, FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { RiWhatsappFill, RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <section className={styles.footer}>
        <div className={styles.footer__wrapper}>
            <div className={styles.footer__container}>
            <div className={styles.footer__brand}>
                <Image src={logo} className={styles.footer__logo} alt="logo"/>
                <p>Na VIP Cars, oferecemos uma experiência de aluguel superior com veículos de alta qualidade. Dirija com estilo e conforto em qualquer viagem, com a garantia de um serviço VIP.</p>
            </div>
            <div className= {styles.footer__content}>
                <ul>
                    <h3>Empresa</h3>
                    <li>Sobre nós</li>
                    <li>Serviços</li>
                    <li>Pontos de coleta </li>
                </ul>
                <ul>
                    <h3>Produtos</h3>
                    <li>Carros de Luxo</li>
                    <li>Carros de Serviço</li>
                    <li>Carros populares </li>
                </ul>
            </div>
            </div>
            <div className={styles.footer__copy}>
                <div className={styles.footer__copyText}>
                    <FaRegCopyright />
                    <p>Copyright 2024. Powered by Igor Vinicius</p>
                </div>
                <div className={styles.footer__social}>
                    <a href=""><FaFacebook /></a>
                    <a href=""><RiWhatsappFill /></a>
                    <a href=""><RiInstagramFill /></a>
                    <a href=""><FaLinkedin /></a>
                </div>
            </div>
        </div>
    </section>
  )
}