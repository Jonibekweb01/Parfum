import React from 'react';

export default function FilterBar({ onFilterChange }) {
  return (
    <div className="filter-bar">
      <button onClick={() => onFilterChange('all')}>Barchasi</button>
      <button onClick={() => onFilterChange('erkak')}>Erkaklar</button>
      <button onClick={() => onFilterChange('ayol')}>Ayollar</button>
      <button onClick={() => onFilterChange('unisex')}>Unisex</button>
    </div>
  );
}
