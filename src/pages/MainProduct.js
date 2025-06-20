import React from "react";
import MainSectionProduct from "../components/MainSectionProduct";
import FilteredProducts from "../components/FilteredProducts";

export default function MainProduct({ onFilterChange, filteredProducts }) {
  return (
    <>
      <MainSectionProduct onFilterChange={onFilterChange} />
      <FilteredProducts filteredProducts={filteredProducts} />
    </>
  );
}
