import styles from "./styles.module.scss";
import { ImWhatsapp } from "react-icons/im";

export default function Contact() {
  return (
    <section className={styles.contact} id="contato">
      <div className={styles.contact__wrapper}>
        <div className={styles.contact__container}>
          <form className={styles.contact__form}>
            <h2>Fale Conosco</h2>
            <div className={styles.contact__dash}></div>
            <input type="text" placeholder="Nome" name="nome" />
            <input type="email" placeholder="E-mail" name="email" />
            <input type="text" placeholder="Nome" name="nome" />
            <select id="subject" name="subject" required>
              <option value="">Selecione um assunto</option>
              <option value="duvida">Dúvida</option>
              <option value="suporte">Suporte Técnico</option>
              <option value="sugestao">Canal de Vendas</option>
              <option value="elogio">Seguro</option>
              <option value="reclamacao">Reclamação</option>
              <option value="reclamacao">Outro Assunto</option>
            </select>
            <textarea placeholder="Deixe sua mensagem aqui..."></textarea>
            <button>Enviar</button>
          </form>

          <div className={styles.contact__info}>
            <h2>Entre em contato conosco pelo seu smartphone</h2>
            <div className={styles.contact__dash}></div>
            <a className={styles.contact__sac} href="tel:21932149953">
              <h3>SAC</h3>
              <p>(21) 93214-9953</p>
            </a>
            <button className={styles.contact__whatsapp}>
              <ImWhatsapp className={styles.contact__img} />
              <h3>WhatsApp</h3>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}