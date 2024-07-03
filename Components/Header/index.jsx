import Image from "next/image"
import styles from "./styles.module.scss"
import logo from "@/public/logo.png"
import UserBtn from "../UserBtn"

export default function Header() {
  return (
    <header className={styles.header}>
       <div className={styles.header__wrapper}>
        <Image src={logo} className={styles.header__logo}/>
        <nav className={styles.header__nav}>
          <ul>
            <li><a href="" >Favoritos</a></li>
            <li><a href="" >Contratos</a></li>
            <li><a href="" >Saiba mais</a></li>
          </ul>
        </nav>
        <UserBtn />
       </div>
    </header>
  )
}
