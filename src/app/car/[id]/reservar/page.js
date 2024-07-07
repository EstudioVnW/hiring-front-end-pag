"use client";

import { useEffect } from "react";

//Components
import useSpecificCar from "../../../assets/components/getSpecificCar";

//Styles
import styles from "./page.module.sass";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

//Next
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const { id } = params;
  const car = useSpecificCar({ id });

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const router = useRouter();

  function handleReservar(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form.entries());
    data.name = data.name.trim();
    data.cpf = data.cpf.replace(/\D/g, "");
    data.phone = data.phone.replace(/\D/g, "");
    data.birth = data.birth.replaceAll("-", "/").split("/").reverse().join("/");
    const confirm = window.confirm(
      `Você está prestes a reservar o carro: ${car?.model} \nCom os seguintes dados: \nNome: ${data.name}, \nCPF: ${data.cpf}, \nTelefone: ${data.phone}, \nData de nascimento: ${data.birth}. \nDeseja continuar?`
    );
    if (confirm) {
      router.push(`/car/${id}/reservar/sucess`);
    }
  }

  return (
    <>
      <section className={styles.reservar__hero}>
        <div
          onClick={() => router.back(`/car/${id}`)}
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
        <form onSubmit={handleReservar} action="" method="">
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
            type="number"
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

          <button
            type="submit"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            Reservar
          </button>
        </form>
      </section>
    </>
  );
}
