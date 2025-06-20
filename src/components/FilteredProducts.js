import React from "react";
import ProductCard from "./ProductCard";
import "../styles/responsive.css";
export default function FilteredProducts({ filteredProducts }) {
  return (
    <>
      <div className="container">
        <div className="card_inner">
          {filteredProducts.map((item, idx) => (
            <ProductCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
