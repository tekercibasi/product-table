import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

// ProductTable-Komponente: Stellt die Tabelle mit Produkten und Kategorien dar.
function ProductTable({ products, filterText, favorites, onToggleFavorite }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(
      <ProductRow product={product} key={product.name} isFavorite={favorites.includes(product.name)} onToggleFavorite={onToggleFavorite} />
    );
    lastCategory = product.category;
  });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Preis</th>
          <th>Favorit</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
