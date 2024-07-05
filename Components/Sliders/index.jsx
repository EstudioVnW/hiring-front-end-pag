"use client";
import styles from "./styles.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import cross from "@/public/cross.jpg";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getCars } from "@/Services/getCars";

const mock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Sliders({make}) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [cars,setCars]= useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCars() {
      const response = await getCars({ make });
      setCars(response);
    }
    fetchCars()
    setLoading(false)
  }, [make]);

  return (
    <>
      <h2 className={styles.brand}>{make}</h2>
      <Slider {...settings} className={styles.slider}>
        {cars.map((car) => (
          <div className={styles.card} key={car?.id}>
            <Image src={cross} className={styles.card__image}  alt={`imagem do ${car?.model}`}/>
            <div className={styles.card__containerInfo}>
              <h3>{car?.model}</h3>
              <p>{car?.year}</p>
            </div>
            <div className={styles.card__buttons}>
              <button className={styles.card__about}>Saiba mais</button>
              <button
                className={styles.card__favorite}>
               <FaRegHeart />
              </button>
            </div>
          </div>
        ))}
      </Slider>
      {loading && <p className={styles.loading}>Loading...</p>}
    </>
  );
}