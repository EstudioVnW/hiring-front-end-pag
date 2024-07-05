"use client";

import { useEffect } from "react";

//Components
import useSpecificCar from "../../../assets/components/getSpecificCar";

//Styles
import styles from "./page.module.sass";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page({ params }) {
  const { id } = params;
  const car = useSpecificCar({ id });

  function handleReservar() {
    alert("Reservado com sucesso!");
    history.back();
  }

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <section className={styles.reservar__hero}>
        <div
          onClick={() => history.back()}
          className={styles.goBack}
          data-aos="fade-right"
        >
          <svg
            stroke="#f9f9f9"
            fill="#f9f9f9"
            stroke-width="0"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"></path>
          </svg>
          <p>Voltar</p>
        </div>
        <div className={styles.reservar__hero__title} data-aos="fade-up">
          <h1>Voce está reservando o carro: {car?.model}</h1>
        </div>
      </section>
      <section className={styles.reservar__details}>
        <h2 data-aos="fade-up">
          {car?.model} tem as seguintes características:
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Classe: {car?.class}
        </p>
        <p data-aos="fade-up" data-aos-delay="400">
          City MPG: {car?.city_mpg}
        </p>
        <p data-aos="fade-up" data-aos-delay="600">
          Ano de fabricação: {car?.year}
        </p>
        <p data-aos="fade-up" data-aos-delay="800">
          Para mais informações, volte para a página anterior
        </p>
      </section>
      <section className={styles.reservar__form}>
        <form onSubmit={handleReservar}>
          <label data-aos="fade-up" htmlFor="name">
            Nome:
          </label>
          <input
            data-aos="fade-up"
            type="text"
            id="name"
            name="name"
            required
          />
          <label data-aos="fade-up" htmlFor="phone">
            Telefone:
          </label>
          <input
            data-aos="fade-up"
            type="tel"
            id="phone"
            name="phone"
            minLength="11"
            maxLength="11"
            required
          />
          <label data-aos="fade-up" htmlFor="cpf">
            CPF:
          </label>
          <input
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            type="text"
            id="cpf"
            name="cpf"
            minLength="11"
            maxLength="11"
            required
          />
          <label data-aos="fade-up" htmlFor="birth">
            Data de nascimento:
          </label>
          <input
            data-aos="fade-up"
            type="date"
            id="birth"
            name="birth"
            minLength="8"
            maxLength="8"
            required
          />
          <button type="submit" data-aos="fade-up" data-aos-anchor-placement="top-bottom">Reservar</button>
        </form>
      </section>
    </>
  );
}
