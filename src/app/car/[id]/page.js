"use client";

//Components
import useSpecificCar from "../../assets/components/getSpecificCar";

//Next
import Link from "next/link";

//Styles
import styles from "./page.module.sass";

export default function CarDetails({ params }) {
  const { id } = params;
  const car = useSpecificCar({ id });

  function removeCar() {
    const favoritos = JSON.parse(localStorage.getItem("favoritos"));
    const updatedFavoritos = favoritos.filter((car) => car.id !== id);
    localStorage.setItem("favoritos", JSON.stringify(updatedFavoritos));
    alert("Carro removido dos favoritos");
    history.back();
    setCar(null);
  }

  if (!car) return <p>Loading...</p>;

  return (
    <>
      <section className={styles.car__hero}>
        {JSON.parse(localStorage.getItem("favoritos")).some(
          (favorite) => favorite.id === id
        ) && (
          <div onClick={removeCar} className={styles.remove__favorite}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z"></path>
            </svg>
          </div>
        )}
        <div className={styles.car__title}>
          <h1>{car.model}</h1>
        </div>
      </section>
      <section className={styles.car__details}>
        <table className={styles.car__table}>
          <tbody>
            <tr>
              <td>Class</td>
              <td>{car.class}</td>
            </tr>
            <tr>
              <td>City MPG</td>
              <td>{car.city_mpg}</td>
            </tr>
            <tr>
              <td>Combination MPG</td>
              <td>{car.combination_mpg}</td>
            </tr>
            <tr>
              <td>Cylinders</td>
              <td>{car.cylinders}</td>
            </tr>
            <tr>
              <td>Displacement</td>
              <td>{car.displacement}</td>
            </tr>
            <tr>
              <td>Drive</td>
              <td>{car.drive}</td>
            </tr>
            <tr>
              <td>Fuel Type</td>
              <td>{car.fuel_type}</td>
            </tr>
            <tr>
              <td>Highway MPG</td>
              <td>{car.highway_mpg}</td>
            </tr>
            <tr>
              <td>Make</td>
              <td>{car.make}</td>
            </tr>
            <tr>
              <td>Transmission</td>
              <td>{car.transmission}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{car.year}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className={styles.car__reservation}>
        <div className={styles.car__reservation__container}>
          <div className={styles.car__reservation__content}>
            <h2>
              Reserve
              <span className={styles.circle__sketch__highlight}>agora</span>
            </h2>
            <p>Reserve o carro dos seus sonhos</p>
            <div className={styles.car__reservation__button}>
              <Link href={`/car/${id}/reservar`}>
                <button>Reservar</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
