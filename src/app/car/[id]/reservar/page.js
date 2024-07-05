"use client";

//Components
import useSpecificCar from "../../../assets/components/getSpecificCar";

//Styles
import styles from "./page.module.sass";

export default function Page({ params }) {
  const { id } = params;
  const car = useSpecificCar({ id });

  function handleReservar() {
    alert("Reservado com sucesso!");
    history.back();
  }

  return (
    <>
      <section className={styles.reservar__hero}>
        <div onClick={() => history.back()} className={styles.goBack}>
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
        <div className={styles.reservar__hero__title}>
          <h1>Voce está reservando o carro: {car?.model}</h1>
        </div>
      </section>
      <section className={styles.reservar__details}>
        <h2>{car?.model} tem as seguintes características:</h2>
        <p>Classe: {car?.class}</p>
        <p>City MPG: {car?.city_mpg}</p>
        <p>Ano de fabricação: {car?.year}</p>
        <p>Para mais informações, volte para a página anterior</p>
      </section>
      <section className={styles.reservar__form}>
        <form onSubmit={handleReservar}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="phone">Telefone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            minLength="11"
            maxLength="11"
            required
          />
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            minLength="11"
            maxLength="11"
            required
          />
          <label htmlFor="birth">Data de nascimento:</label>
          <input
            type="date"
            id="birth"
            name="birth"
            minLength="8"
            maxLength="8"
            required
          />
          <button type="submit">
            Reservar
          </button>
        </form>
      </section>
    </>
  );
}
