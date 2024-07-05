"use client";
import Image from "next/image";
import cross from "@/public/cross.jpg";
import { useAppContext } from "@/Context";
import { useRouter } from "next/navigation";

export default function Details() {
  const router = useRouter();
  const { selectedCar } = useAppContext();

  const car = selectedCar;

  const handleRent = (car) => {
    router.push(`/rent/${car.model}`);
  };

  return (
    <section>
      <picture>
        <Image src={cross} alt="imagem do carro" />
      </picture>
      <div>
        <h1>{car?.model}</h1>
        <p>{car?.year}</p>
        <button onClick={() => handleRent(car)}>Alugar</button>
      </div>
    </section>
  );
}
