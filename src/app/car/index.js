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

//React-icons
import { FaHeart } from "react-icons/fa";

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
                        <FaHeart className={styles.favorited} />
                      ) : (
                        <FaHeart />
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
