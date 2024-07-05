"use client";

import { useState, useEffect } from "react";

//Components
import { fetchCars } from "../../components/fetch";

export default function GetSpecificCar({ id }) {
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

  return car;
}
