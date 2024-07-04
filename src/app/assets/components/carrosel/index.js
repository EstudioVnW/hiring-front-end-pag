//Swiper
import { Swiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

//Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import styles from "./style.module.sass";

export default function Slider({ children }) {
  return (
    <>
      <section className={styles.carrosel__container}>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
        >
          {children}
        </Swiper>
      </section>
    </>
  );
}
