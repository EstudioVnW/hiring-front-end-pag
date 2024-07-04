"use client";

import { useState, useEffect } from "react";

//Components
import HandleViewDetails from "../assets/components/viewDetails";

export default function Page() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos"));
    setFavoritos(favoritos);
  }, []);

  return (
    <>
      <h1>Favoritos</h1>
      {favoritos && favoritos.length ? (
        favoritos.map((car, i) => {
          const uniqueId = `${car.model}-${i}`;
          return (
            <div key={uniqueId}>
              <h2>{car.model}</h2>
              <p>{car.class}</p>
              <HandleViewDetails id={uniqueId} />
            </div>
          );
        })
      ) : (
        <p>Nenhum carro favoritado</p>
      )}
    </>
  );
}
