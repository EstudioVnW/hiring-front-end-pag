// import React from 'react';

// const FavoritosPage = ({ favoritos }) => {
//   // Converte a string JSON de favoritos de volta para array
//   const favoritosArray = JSON.parse(favoritos);

//   return (
//     <div>
//       <h1>Lista de Favoritos</h1>
//       <ul>
//         {favoritosArray.map(car => (
//           <li key={car.id}>
//             {car.year} - {car.model}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // Parse query para garantir que favoritos é passado corretamente
// FavoritosPage.getInitialProps = ({ query }) => {
//   return { favoritos: query.favoritos || '[]' };
// };

// export default FavoritosPage;
import React from 'react';

const FavoritosPage = ({ favoritos }) => {
  return (
    <div>
      <h1>Lista de Favoritos</h1>
      <ul>
        {favoritos.map(car => (
            <li key={car.id}>
                {car.year} - {car.model}
            </li>
        ))}
      </ul>
    </div>
  );
};

// Parse query para garantir que favoritos é passado corretamente
FavoritosPage.getInitialProps = ({ query }) => {
  return { favoritos: JSON.parse(localStorage.getItem('favoritos') || '[]') };
};

export default FavoritosPage;
