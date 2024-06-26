import React from 'react';
import FavoriteButton from './FavoriteButton';

// ProductRow-Komponente: Stellt jede Produktzeile dar.
function ProductRow({ product, isFavorite, onToggleFavorite }) {
  const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
      <td><FavoriteButton isFavorite={isFavorite} onClick={() => onToggleFavorite(product.name)} /></td>
    </tr>
  );
}

export default ProductRow;
