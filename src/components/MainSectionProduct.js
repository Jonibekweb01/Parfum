import React from "react";

export default function MainSectionProduct({ onFilterChange }) {
  const handleChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className="container">
      <div className="sellers_inner">
        <div className="sellers_inner_left">
          <h2>Best Sellers</h2>
          <p>The Best Parfume Ever</p>
        </div>
        <div className="sellers_inner_right">
          <select className="sellers_inner_select" onChange={handleChange}>
            <option value="">Barchasi</option>
            <option value="erkak">Erkak</option>
            <option value="ayol">Ayol</option>
          </select>
        </div>
      </div>
    </div>
  );
}
