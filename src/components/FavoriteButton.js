import React from 'react';

// FavoriteButton-Komponente: Handhabt die Favoriten-Button-Funktionalität.
function FavoriteButton({ isFavorite, onClick }) {
  return (
    <button className="btn btn-outline-primary" onClick={onClick}>
      {isFavorite ? '★' : '☆'}
    </button>
  );
}

export default FavoriteButton;
