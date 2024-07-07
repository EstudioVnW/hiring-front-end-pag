"use client";

import styles from "./page.module.sass";

import { useEffect, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  if (count === 0) {
    history.back();
  }

  return (
    <>
      <section className={styles.container}>
        <h1>Reservado com sucesso!</h1>
        <p>
          {`Agradecemos por reservar o carro! Você será redirecionado para a página anterior em ${count} segundos...`}
        </p>
      </section>
    </>
  );
}
