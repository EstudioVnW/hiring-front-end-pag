"use client"; 
import { useState, useEffect } from 'react';

const items = [
  { id: 1, name: 'BMW X1', image: "/imagens/bmw-x1.png" },
];

export default function Favoritos() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (item) => {
    let updatedFavorites;
    if (favorites.includes(item.id)) {
      updatedFavorites = favorites.filter(favId => favId !== item.id);
    } else {
      updatedFavorites = [...favorites, item.id];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <ul className='idUL'>
        {items.map(item => (
          <li key={item.id}>
           <h1>{item.name}</h1>
           <img src={item.image} alt={item.name} width="300" height="200" />
            <button onClick={() => toggleFavorite(item)}>
              {favorites.includes(item.id) ? 'Remover' : 'Adicionar aos Favoritos'}
            </button>
          </li>
        ))}
      </ul>
      <h2 className='cardfav'>Seus Favoritos</h2>
      <ul className='saved'>
        {items.filter(item => favorites.includes(item.id)).map(item => (
          <li key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} width="100" height="100" />
          </li>
        ))}
      </ul>
    </div>
  );
}

