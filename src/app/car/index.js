"use client";

import { useState, useEffect } from "react";

// Components
import Carousel from "../assets/components/carrosel";
import HandleViewDetails from "../assets/components/viewDetails";
import { fetchCars } from "../assets/components/fetch";

// Swiper
import { SwiperSlide } from "swiper/react";

// Styles
import styles from "./style.module.sass";

// Next
import Image from "next/image";

// Images
import carImage from "../assets/img/skooby-doo.webp";

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
      setCars(data);
    }
    getCars();
  }, [model]);

  function handleFavoritar(id) {
    if (
      favoritos.find((car) => `${car.model}-${favoritos.indexOf(car)}` === id)
    ) {
      const newFavoritos = favoritos.filter(
        (car) => `${car.model}-${favoritos.indexOf(car)}` !== id
      );
      setFavoritos(newFavoritos);
      localStorage.setItem("favoritos", JSON.stringify(newFavoritos));
      alert("Carro desfavoritado com sucesso!");
    } else {
      const car = cars.find(
        (car) => `${car.model}-${cars.indexOf(car)}` === id
      );
      const newFavoritos = [...favoritos, car];
      setFavoritos(newFavoritos);
      localStorage.setItem("favoritos", JSON.stringify(newFavoritos));
      alert("Carro favoritado com sucesso!");
    }
  }

  return (
    <>
      <Carousel>
        {cars.map((car, i) => {
          const uniqueId = `${car.model}-${i}`;
          return (
            <SwiperSlide key={uniqueId}>
              <div className={styles.card}>
                <div className={styles.card__info}>
                  <div>
                    <h2 className={styles.card__info__title}>{car.model}</h2>
                    <p className={styles.card__info__text}>{car.class}</p>
                  </div>
                </div>
                <div className={styles.card__info__buttons}>
                  <HandleViewDetails id={uniqueId} />
                  <button onClick={() => handleFavoritar(uniqueId)}>
                    {favoritos.find(
                      (car) =>
                        `${car.model}-${favoritos.indexOf(car)}` === uniqueId
                    )
                      ? "Desfavoritar"
                      : "Favoritar"}
                  </button>
                </div>
                <Image
                  src={carImage}
                  alt={`Foto do ${car.model}`}
                  width={300}
                  height={300}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Carousel>
    </>
  );
}
