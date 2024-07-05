"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './Button';

const CarsMake = ({ marca, onFavoritar }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoritadoAlert, setFavoritadoAlert] = useState(false); // Estado para controlar o alerta

  useEffect(() => {
    const fetchCars = async () => {
      const model = marca;
      try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/cars?make=${model}`, {
          headers: {
            'X-Api-Key': '9OrY6jgAHniXmz1qCgC4sa1ZuzX1TQosVXnZn3An'
          }
        });
        setCars(response.data); // Armazena os dados da API no estado 'cars'
        setLoading(false); // Marca que o carregamento está completo
      } catch (error) {
        console.error('Request failed:', error);
        setLoading(false); // Mesmo em caso de erro, marca que o carregamento está completo
      }
    };

    fetchCars();
  }, [marca]); // Dependência 'marca' assegura que useEffect seja executado sempre que 'marca' mudar

  const handleFavoritarClick = (car) => {
    onFavoritar(car);
    setFavoritadoAlert(true); // Ativa o alerta de favoritado
    setTimeout(() => {
      setFavoritadoAlert(false); // Desativa o alerta após 3 segundos
    }, 3000);
  };

  return (
    <div>
      <h1>Lista de Carros - {marca}</h1>
      {loading ? ( // Verifica se ainda está carregando
        <p>Carregando...</p>
      ) : (
        <ul>
          {cars.map(car => (
            <li key={car.id}>
              {car.year} - {car.model}
              <Button className="buttonFav" text="&#127775;" onClick={() => handleFavoritarClick(car)} />
              <Button className="buttonInfo" text="&#9193;" />
            </li>
          ))}
        </ul>
      )}

      {favoritadoAlert && (
        <div className="alert alert-success" role="alert">
          Carro favoritado com sucesso!
        </div>
      )}
    </div>
  );
};

export default CarsMake;
