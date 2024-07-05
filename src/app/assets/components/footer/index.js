import styles from "./page.module.sass";

//Font
import { GeistSans } from "geist/font/sans";

export default function Index() {
  return (
    <footer className={styles.footer}>
      <p className={GeistSans.className}>
        Feito com ❤️ por{" "}
        <a href="https://spookyblog.bohr.io" target="_blank" rel="noreferrer">
          Gustavo
        </a>
      </p>
    </footer>
  );
}
