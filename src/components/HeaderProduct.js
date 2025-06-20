import React from "react";
import burger from "../assets/burger.svg";
import logo from "../assets/product-logo.svg";
import search from "../assets/carbon_search.svg";
import { Link } from "react-router-dom";

export default function HeaderProduct() {
  return (
    <header className="product-header">
      <div className="container">
        <div className="product-header_inner">
          <div className="product-header_inner_left">
            <button className="product-header_inner_left_btn">
              <img src={burger} alt="Burger" width={35} height={21} />
            </button>
          </div>
          <div className="product-header_inner_center">
            <Link to={"/"}>
              <img src={logo} alt="Logo of the site" width={45} height={37} />
            </Link>
          </div>
          <div className="product-header_inner_right">
            <button className="product-header_inner_right_btn">
              <img src={search} alt="Search side" width={37} height={37} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
