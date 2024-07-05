"use client";

import { useState, useEffect } from "react";

// Components
import Carousel from "../assets/components/carrosel";
import HandleViewDetails from "../assets/components/viewDetails";
import { fetchCars } from "../assets/components/fetch";

// Swiper
import { SwiperSlide } from "swiper/react";

// Styles
import styles from "./page.module.sass";

// Next
import Image from "next/image";

// Images
import carImage from "../assets/img/car-example.webp";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function Index({ model }) {
  const [cars, setCars] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const storedFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(storedFavoritos);
  }, []);

  useEffect(() => {
    async function getCars() {
      const data = await fetchCars({ model });
      const newData = data.map((car, i) => ({
        ...car,
        id: `${car.model}-${i}`,
      }));
      setCars(newData);
    }
    getCars();
  }, [model]);

  function handleFavoritar(id) {
    const updatedFavoritos = favoritos.some((car) => car.id === id)
      ? favoritos.filter((car) => car.id !== id)
      : [...favoritos, cars.find((car) => car.id === id)];

    setFavoritos(updatedFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(updatedFavoritos));
  }

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Carousel>
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <section className={styles.cards__container} data-aos="fade-up">
              <div className={styles.card}>
                <div className={styles.card__wrapper}>
                  <div className={styles.card__color} />
                  <Image
                    src={carImage}
                    alt={`Foto do ${car.model}`}
                    width={300}
                    height={300}
                    className={styles.card__image}
                  />
                  <div className={styles.card__info}>
                    <p className={styles.car__model}>{car.model}</p>
                    <p className={styles.car__year}>{car.year}</p>
                  </div>
                  <div className={styles.card__actions}>
                    <div
                      className={styles.card__favorite}
                      onClick={() => handleFavoritar(car.id)}
                    >
                      {favoritos.some((favorito) => favorito.id === car.id) ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 64 64"
                          className={styles.favorited}
                        >
                          <path
                            d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z"
                            className={styles.filled}
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 64 64"
                        >
                          <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z" />
                        </svg>
                      )}
                    </div>
                    <div className={styles.card__view}>
                      <HandleViewDetails id={car.id} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Carousel>
    </>
  );
}
