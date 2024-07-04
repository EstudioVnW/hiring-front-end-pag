"use client";

import { useState, useEffect } from "react";

//Components
import { fetchCars } from "../../assets/components/fetch";

export default function CarDetails({ params }) {
  const { id } = params;
  const [car, setCar] = useState(null);

  useEffect(() => {
    if (id) {
      const [model, index] = id.split("-");
      async function getCar() {
        const data = await fetchCars({ model });
        const specificCar = data[parseInt(index, 10)];
        setCar(specificCar);
      }
      getCar();
    }
  }, [id]);

  if (!car) return <p>Loading...</p>;

  return (
    <div>
      <h1>{car.model}</h1>
      <p>Class: {car.class}</p>
      <p>City MPG: {car.city_mpg}</p>
      <p>Combination MPG: {car.combination_mpg}</p>
      <p>Cylinders: {car.cylinders}</p>
      <p>Displacement: {car.displacement}</p>
      <p>Drive: {car.drive}</p>
      <p>Fuel Type: {car.fuel_type}</p>
      <p>Highway MPG: {car.highway_mpg}</p>
      <p>Make: {car.make}</p>
      <p>Transmission: {car.transmission}</p>
      <p>Year: {car.year}</p>
    </div>
  );
}
