"use client";

import { useEffect } from "react";

//Components
import useSpecificCar from "../../assets/components/getSpecificCar";
import Loading from "../../assets/components/loading";

//Next
import Link from "next/link";

//Styles
import styles from "./page.module.sass";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

//React-icons
import { FaHeart } from "react-icons/fa";

export default function CarDetails({ params }) {
  const { id } = params;
  const car = useSpecificCar({ id });

  function removeCar() {
    const favoritos = JSON.parse(localStorage.getItem("favoritos"));
    const updatedFavoritos = favoritos.filter((car) => car.id !== id);
    localStorage.setItem("favoritos", JSON.stringify(updatedFavoritos));
    alert("Carro removido dos favoritos");
    history.back();
  }

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  if (!car) return <Loading />;

  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  return (
    <>
      <section className={styles.car__hero}>
        {favoritos.some((car) => car.id === id
        ) && (
          <div
            onClick={removeCar}
            className={styles.remove__favorite}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaHeart />
          </div>
        )}
        <div className={styles.car__title} data-aos="fade-up">
          <h1>{car.model}</h1>
        </div>
      </section>
      <section className={styles.car__details}>
        <table className={styles.car__table}>
          <tbody>
            <tr data-aos="fade-up">
              <td>Class</td>
              <td>{car.class}</td>
            </tr>
            <tr data-aos="fade-up" data-aos-duration="2200">
              <td>City MPG</td>
              <td>{car.city_mpg}</td>
            </tr>
            <tr data-aos="fade-up" data-aos-duration="2300">
              <td>Combination MPG</td>
              <td>{car.combination_mpg}</td>
            </tr>
            <tr data-aos="fade-up" data-aos-duration="2300">
              <td>Cylinders</td>
              <td>{car.cylinders}</td>
            </tr>
            <tr data-aos="fade-up" data-aos-duration="2400">
              <td>Displacement</td>
              <td>{car.displacement}</td>
            </tr>
            <tr data-aos="fade-up" data-aos-duration="2500">
              <td>Drive</td>
              <td>{car.drive}</td>
            </tr>
            <tr data-aos="fade-up" data-aos-duration="2600">
              <td>Fuel Type</td>
              <td>{car.fuel_type}</td>
            </tr>
            <tr data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2700">
              <td>Highway MPG</td>
              <td>{car.highway_mpg}</td>
            </tr>
            <tr data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2800">
              <td>Make</td>
              <td>{car.make}</td>
            </tr>
            <tr data-aos="fade-up" data-aos-duration="2900">
              <td>Transmission</td>
              <td>{car.transmission}</td>
            </tr>
            <tr data-aos="fade-up" data-aos-duration="3000">
              <td>Year</td>
              <td>{car.year}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className={styles.car__reservation}>
        <div className={styles.car__reservation__container}>
          <div className={styles.car__reservation__content}>
            <h2 data-aos="fade-up">
              Reserve
              <span className={styles.circle__sketch__highlight}>agora</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
            >Reserve o carro dos seus sonhos</p>
            <div className={styles.car__reservation__button} data-aos="fade-up" data-aos-delay="400">
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
