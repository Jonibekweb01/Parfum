import React, { useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import HeaderProduct from "../components/HeaderProduct";
import FooterProduct from "../components/FooterProduct";
import MainProduct from "./MainProduct";
import { allProducts } from "../data/parfumes";
import "../styles/global.css";
import "../styles/responsive.css";
export default function Products() {
  const location = useLocation();
  const showMainProduct = location.pathname === "/products";

  const [filter, setFilter] = useState("");

  const filteredProducts = allProducts.filter((item) => {
    if (!filter) return true;
    return item.category === filter;
  });

  return (
    <>
      <HeaderProduct />
      <Outlet />
      {showMainProduct && <MainProduct filteredProducts={filteredProducts} onFilterChange={setFilter} />}
      <FooterProduct />
    </>
  );
}

{
  /* <FilterBar onFilterChange={setFilter} /> */
}

//  {filteredProducts.map((item, idx) => (
//         <ProductCard key={idx} {...item} />
//       ))}
