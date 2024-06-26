import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

// FilterableProductTable-Komponente: Die Hauptkomponente, die den Zustand verwaltet und an andere Komponenten weitergibt.
const PRODUCTS = [
  { category: 'Elektronik', price: '$499.99', stocked: true, name: 'iPhone 5', favorite: false },
  { category: 'Elektronik', price: '$99.99', stocked: true, name: 'Nexus 7', favorite: false },
  { category: 'Elektronik', price: '$399.99', stocked: false, name: 'Samsung Galaxy S10', favorite: false },
  { category: 'Elektronik', price: '$299.99', stocked: true, name: 'Sony Headphones', favorite: false },
  { category: 'Elektronik', price: '$59.99', stocked: true, name: 'Amazon Echo', favorite: false },
  { category: 'Elektronik', price: '$799.99', stocked: false, name: 'MacBook Pro', favorite: false },
  { category: 'Elektronik', price: '$49.99', stocked: true, name: 'Logitech Mouse', favorite: false },
  { category: 'Elektronik', price: '$199.99', stocked: true, name: 'Fitbit Charge 4', favorite: false },
  { category: 'Elektronik', price: '$129.99', stocked: false, name: 'GoPro Hero 8', favorite: false },
  { category: 'Elektronik', price: '$299.99', stocked: true, name: 'Bose SoundLink', favorite: false },
  { category: 'Möbel', price: '$199.99', stocked: false, name: 'Tisch', favorite: false },
  { category: 'Möbel', price: '$799.99', stocked: true, name: 'Stuhl', favorite: false },
  { category: 'Möbel', price: '$99.99', stocked: true, name: 'Lampe', favorite: false },
  { category: 'Möbel', price: '$299.99', stocked: false, name: 'Sofa', favorite: false },
  { category: 'Möbel', price: '$49.99', stocked: true, name: 'Kissen', favorite: false },
  { category: 'Möbel', price: '$149.99', stocked: true, name: 'Schreibtisch', favorite: false },
  { category: 'Möbel', price: '$249.99', stocked: false, name: 'Regal', favorite: false },
  { category: 'Möbel', price: '$59.99', stocked: true, name: 'Couchtisch', favorite: false },
  { category: 'Möbel', price: '$499.99', stocked: true, name: 'Kleiderschrank', favorite: false },
  { category: 'Möbel', price: '$39.99', stocked: false, name: 'Nachttisch', favorite: false },
  { category: 'Kleidung', price: '$29.99', stocked: true, name: 'T-Shirt', favorite: false },
  { category: 'Kleidung', price: '$49.99', stocked: true, name: 'Jeans', favorite: false },
  { category: 'Kleidung', price: '$19.99', stocked: false, name: 'Socken', favorite: false },
  { category: 'Kleidung', price: '$99.99', stocked: true, name: 'Jacke', favorite: false },
  { category: 'Kleidung', price: '$14.99', stocked: true, name: 'Mütze', favorite: false },
  { category: 'Kleidung', price: '$24.99', stocked: false, name: 'Schal', favorite: false },
  { category: 'Kleidung', price: '$39.99', stocked: true, name: 'Pullover', favorite: false },
  { category: 'Kleidung', price: '$59.99', stocked: true, name: 'Hemd', favorite: false },
  { category: 'Kleidung', price: '$79.99', stocked: false, name: 'Schuhe', favorite: false },
  { category: 'Kleidung', price: '$9.99', stocked: true, name: 'Handschuhe', favorite: false },
];

function FilterableProductTable() {
  const [filterText, setFilterText] = useState('');
  const [favorites, setFavorites] = useState([]);

  const handleFilterTextChange = (text) => {
    setFilterText(text);
  };

  const toggleFavorite = (productName) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productName)
        ? prevFavorites.filter((name) => name !== productName)
        : [...prevFavorites, productName]
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <SearchBar filterText={filterText} onFilterTextChange={handleFilterTextChange} />
          <ProductTable products={PRODUCTS} filterText={filterText} favorites={favorites} onToggleFavorite={toggleFavorite} />
        </div>
      </div>
    </div>
  );
}

export default FilterableProductTable;
