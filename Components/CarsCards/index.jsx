"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { useAppContext } from "@/Context";
import carImage from "@/public/car.png";
import { useEffect } from "react";

export default function CarsCards() {
  const { handleFavorite, favorites, handleSelectedCar, setFavorites  } = useAppContext();

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("cars"));
    setFavorites(favoritos);
  },[setFavorites]);

  return (
    <section className={styles.carsCards}>
      <div className={styles.carsCards__wrapper}>
        <h2 className={styles.carsCards__title}>Favoritos:</h2>
        <div className={styles.carsCards__container}>
          {favorites.length === 0 ? (
            <p className={styles.carsCards__noFavorites}>Você não tem nenhum carro nos favoritos.</p>
          ) : (
            favorites.map((car, i) => (
              <div className={styles.carsCards__card} key={i}>
                <Image
                  src={carImage}
                  className={styles.carsCards__image}
                  alt={`imagem do ${car?.model}`}
                />
                <div className={styles.carsCards__containerInfo}>
                  <h3>{car?.model}</h3>
                  <p>{car?.year}</p>
                </div>
                <div className={styles.carsCards__buttons}>
                <button className={styles.carsCards__about} onClick={() => handleSelectedCar(car)} >Saiba mais</button>
                  <button onClick={() => handleFavorite(car)}>
                    <FaHeart size={26} color="red" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
