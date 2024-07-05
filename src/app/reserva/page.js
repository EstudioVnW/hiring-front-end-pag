"use client"
import Image from "next/image";
import styles from "../page.module.css";

import { useParams } from "next/navigation";

export default function Produto() {

    const params = useParams();
        
  return (
    <main className={styles.main}>
      <div className={styles.description}>

        <h1>Reserva de Carro</h1>

      </div>
    </main>
  );
}
