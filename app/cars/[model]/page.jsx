"use client";
import Image from "next/image";
import carImage from "@/public/car.png";
import { useAppContext } from "@/Context";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

export default function Details() {
  const router = useRouter();
  const { selectedCar } = useAppContext();

  const car = selectedCar;

  const handleRent = (car) => {
    router.push(`/rent/${car.model}`);
  };

  return (
    <section className={styles.Container}>
      <div className={styles.Container__wrapper}>
        <div className={styles.Container__content}>
          <Image src={carImage} alt="imagem do carro" className={styles.Container__image} />
          <div className={styles.Container__info}>
            <h1>{car?.model}</h1>
            <div className={styles.Container__dash}></div>
            <p>Marca: {car?.make}</p>
            <p>Ano: {car?.year}</p>
            <p>Tamanho: {car?.class}</p>
            <p>Média de consumo: {car?.combination_mpg}</p>
            <p>cilindrada: {car?.cylinders}</p>
            <p>Tração: {car?.drive}</p>
            <p>Combustível: {car?.fuel_type}</p>
            <p>Média na pista: {car?.highway_mpg}</p>
            <p>Transmissão: {car?.transmission}</p>
          </div>
          <button onClick={() => handleRent(car)} className={styles.Container__button}>Alugar</button>
        </div>
      </div>
    </section>
  );
}