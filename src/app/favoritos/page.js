"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

//Components
import HandleViewDetails from "../assets/components/viewDetails";

//Styles
import styles from "./page.module.sass";

//Images
import carImage from "../assets/img/pink-tractor.webp";

//AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos"));
    setFavoritos(favoritos);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <section className={styles.fav__container}>
        <h1 className={styles.fav__title} data-aos="fade-up">
          Favoritos
        </h1>
        <div className={styles.fav__cards__container}>
          {favoritos && favoritos.length ? (
            favoritos.map((car, i) => {
              return (
                <div
                  key={i}
                  className={styles.fav__card}
                  data-aos="fade-up"
                  data-aos-duration="2400"
                >
                  <div className={styles.img__container}>
                    <div className={styles.img__wrapper}>
                      <figure className={styles.img__skew}>
                        <Image
                          src={carImage}
                          width={200}
                          height={250}
                          alt="Pink tractor"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className={styles.card__content}>
                    <h3>{car.model}</h3>
                    <div className={styles.card__details}>
                      <HandleViewDetails id={car.id} />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p
              className={styles.fav__no__favorites}
              data-aos="fade-up"
              data-aos-duration="2400"
            >
              Nenhum carro favoritado
            </p>
          )}
        </div>
      </section>
    </>
  );
}
