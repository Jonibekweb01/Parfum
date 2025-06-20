import React from "react";
import MainSectionProduct from "../components/MainSectionProduct";
import FilteredProducts from "../components/FilteredProducts";
import "../styles/global.css";
import "../styles/responsive.css";
export default function MainProduct({ onFilterChange, filteredProducts }) {
  return (
    <>
      <MainSectionProduct onFilterChange={onFilterChange} />
      <FilteredProducts filteredProducts={filteredProducts} />
    </>
  );
}
