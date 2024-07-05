"use client";
import styles from "./styles.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import cross from "@/public/cross.jpg";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

const mock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Sliders() {
  var settings = {
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

  const [clicked, setClicked] = useState(Array(mock.length).fill(false));

  const handleHeartClick = (index) => {
    setClicked((prev) => {
      const newClicked = [...prev];
      newClicked[index] = !newClicked[index];
      return newClicked;
    });
  };

  return (
    <>
      <h2 className={styles.brand}>Volkswagen</h2>
      <Slider {...settings} className={styles.slider}>
        {mock.map((item, index) => (
          <div className={styles.card} key={item}>
            <Image src={cross} className={styles.card__image} />
            <div className={styles.card__containerInfo}>
              <h3>CROSS</h3>
              <p>2015</p>
            </div>
            <div className={styles.card__buttons}>
              <button className={styles.card__about}>Saiba mais</button>
              <button
                className={styles.card__favorite}
                onClick={() => handleHeartClick(index)}
              >
                {clicked[index] ? (
                  <FaHeart color="red" />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}