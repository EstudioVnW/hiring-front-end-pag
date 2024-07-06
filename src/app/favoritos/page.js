import React from 'react';

const FavoritosPage = ({ favoritos }) => {
  return (
    <div>
      <h1>Lista de Favoritos</h1>
      <ul>
        {favoritos && favoritos.length > 0 ? (
          favoritos.map(car => (
            <li key={car.id}>
              {car.year} - {car.model}
            </li>
          ))
        ) : (
          <li>Nenhum carro favorito encontrado.</li>
        )}
      </ul>
    </div>
  );
};

// Parse query para garantir que favoritos é passado corretamente
FavoritosPage.getInitialProps = ({ query }) => {
  const favoritos = JSON.parse(query.favoritos || '[]');
  return { favoritos };
};

export default FavoritosPage;
