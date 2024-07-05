"use client";
import useLocalStorage from "@/CustomHooks/useLocalStorage";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

const AppContext = createContext({});

export function AppWrapper({ children }) {
    const router = useRouter();

  const [favorites, setFavorites] = useState([]);
  const [selectedCar, setSelectedCar] = useLocalStorage('car', {})


    function handleSelectedCar(car) {
        setSelectedCar(car)
        router.push(`/cars/${car.model}`);
    }

  function handleFavorite(car) {
    const favoriteCars = [...favorites];

    const newCar = favoriteCars.find((i) => i.model === car.model);

    if (!newCar) {
      favoriteCars.push({
        city_mpg: car.city_mpg,
        class: car.class,
        combination_mpg: car.combination_mpg,
        cylinders: car.cylinders,
        displacement: car.displacement,
        drive: car.drive,
        fuel_type: car.fuel_type,
        highway_mpg: car.highway_mpg,
        make: car.make,
        model: car.model,
        transmission: car.transmission,
        year: car.year,
      });
    } else {
      favoriteCars.pop(car);
    }
    localStorage.setItem("cars", JSON.stringify(favorites));
    setFavorites(favoriteCars);
  }

  return (
    <AppContext.Provider value={{ handleFavorite, favorites, setFavorites, handleSelectedCar, selectedCar }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
