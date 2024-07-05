"use client";
import styles from "./styles.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import carImage from "@/public/car.png";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getCars } from "@/Services/getCars";
import { useAppContext } from "@/Context";
import SkeletonCard from "@/Components/SkeletonCard/index"; 

export default function Sliders({ make }) {
  const { handleFavorite, favorites, handleSelectedCar, setFavorites } = useAppContext();

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
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("cars"));
    setFavorites(favoritos);
  },[setFavorites]);

  useEffect(() => {
    async function fetchCars() {
      const response = await getCars({ make });
      setCars(response);
      setLoading(false);
    }
    fetchCars();
  }, [make]);

  return (
    <>
      <h2 className={styles.brand}>{make}</h2>
      <Slider {...settings} className={styles.slider}>
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : cars.map((car, i) => (
              <div className={styles.card} key={i}>
                <Image
                  src={carImage}
                  className={styles.card__image}
                  alt={`imagem do ${car?.model}`}
                />
                <div className={styles.card__containerInfo}>
                  <h3>{car?.model}</h3>
                  <p>{car?.year}</p>
                </div>
                <div className={styles.card__buttons}>
                  <button className={styles.card__about} onClick={() => handleSelectedCar(car)} >Saiba mais</button>
                  <button
                    className={styles.card__favorite}
                    onClick={() => handleFavorite(car)}
                  >
                    {favorites?.find((i) => i.model === car.model) ? (
                      <FaHeart size={26} color="red" />
                    ) : (
                      <FaRegHeart size={26} />
                    )}
                  </button>
                </div>
              </div>
            ))}
      </Slider>
    </>
  );
}
