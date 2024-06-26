import React from 'react';

// ProductCategoryRow-Komponente: Stellt die Kategoriezeile dar.
function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="3" className="bg-secondary text-white">{category}</th>
    </tr>
  );
}

export default ProductCategoryRow;
