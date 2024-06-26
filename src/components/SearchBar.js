import React from 'react';

// SearchBar-Komponente: Handhabt die Suchleiste.
function SearchBar({ filterText, onFilterTextChange }) {
  const handleChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  return (
    <form className="mb-3">
      <input type="text" className="form-control" placeholder="Suchen..." value={filterText} onChange={handleChange} />
    </form>
  );
}

export default SearchBar;
