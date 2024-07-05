"use client"
// import React, { useState } from 'react';
// import Link from 'next/link';
// import CarsMake from '../../component/CarsMake';

// export default function Home() {
//   const [favoritos, setFavoritos] = useState([]);

//   const handleFavoritar = (car) => {
//     if (!favoritos.some(fav => fav.id === car.id)) {
//       setFavoritos([...favoritos, car]);
//     }
//   };

//   return (
//     <main>
//       <h1>Página Principal</h1>

//       <CarsMake marca="toyota" onFavoritar={handleFavoritar} />
//       <CarsMake marca="ferrari" onFavoritar={handleFavoritar} />
//       <CarsMake marca="audi" onFavoritar={handleFavoritar} />

//       <Link href={{
//         pathname: '/favoritos',
//         query: { favoritos: JSON.stringify(favoritos) } // Passa os favoritos como JSON na query
//       }}>
//         <button>Favoritos</button>
//       </Link>
//     </main>
//   );
// }
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CarsMake from '../../component/CarsMake';

export default function Home() {
  const [favoritos, setFavoritos] = useState([]);

  // Função para carregar os favoritos do localStorage ao iniciar a página
  useEffect(() => {
    const favoritosStorage = JSON.parse(localStorage.getItem('favoritos')) || [];
    setFavoritos(favoritosStorage);
  }, []);

  // Função para adicionar um carro aos favoritos e atualizar o localStorage
  const handleFavoritar = (car) => {
    if (!favoritos.some(fav => fav.id === car.id)) {
      const novosFavoritos = [...favoritos, car];
      setFavoritos(novosFavoritos);
      localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
    }
  };

  return (
    <main>
      <h1>Página Principal</h1>

      <CarsMake marca="toyota" onFavoritar={handleFavoritar} />
      <CarsMake marca="ferrari" onFavoritar={handleFavoritar} />
      <CarsMake marca="audi" onFavoritar={handleFavoritar} />

      <Link href="/favoritos">
        <button>Favoritos</button>
      </Link>
    </main>
  );
}
