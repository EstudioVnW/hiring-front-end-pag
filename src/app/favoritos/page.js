import React from 'react';
import styles from '../style.scss'; // Importar estilos SASS

const FavoritosPage = ({ favoritos }) => {
  return (
    <div className={styles.favoritosPage}>
      <h1>Lista de Favoritos</h1>
      <ul>
        {favoritos && favoritos.length > 0 ? (
          favoritos.map(car => (
            <li key={car.id}>
              {car.year} - {car.model}
              <Button className={`${styles.button} ${styles.buttonInfo}`} text="&#9193;" />
            </li>
          ))
        ) : (
          <li>Nenhum carro favorito encontrado.</li>
        )}
      </ul>
    </div>
  );
};

FavoritosPage.getInitialProps = ({ query }) => {
  const favoritos = JSON.parse(query.favoritos || '[]');
  return { favoritos };
};

export default FavoritosPage;
