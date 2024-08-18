import React, { useState } from 'react';

const Favorites = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <i
      className={`bi bi-heart${isFavorited ? '-fill' : ''}`}
      onClick={toggleFavorite}
      style={{ cursor: 'pointer',fontSize:'25px' }}
    ></i>
  );
};

export default Favorites;
