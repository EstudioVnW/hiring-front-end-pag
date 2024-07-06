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
import React, { useState } from 'react';
import Link from 'next/link';
import CarsMake from '../../component/CarsMake';
import styles from './style.scss'; 


export default function Home() {
  const [favoritos, setFavoritos] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const handleFavoritar = (car) => {
    if (!favoritos.some(fav => fav.id === car.id)) {
      setFavoritos([...favoritos, car]);
      setShowMessage(true);

      // Esconde a mensagem após 3 segundos
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  };

  return (
    <main className={styles.home}>
      <h1>Página Principal</h1>

      <CarsMake marca="bmw" onFavoritar={handleFavoritar} />
      <CarsMake marca="ferrari" onFavoritar={handleFavoritar} />
      <CarsMake marca="audi" onFavoritar={handleFavoritar} />

      {showMessage && <p className={`${styles.message} ${styles.visible}`}>Carro favoritado!</p>}

      <Link href={{ pathname: '/favoritos', query: { favoritos: JSON.stringify(favoritos) } }}>
        <button className="button">Favoritos</button>
      </Link>

    </main>
  );
}
