import React, { useState } from "react";
import burger from "../assets/burger.svg";
import logo from "../assets/product-logo.svg";
import search from "../assets/carbon_search.svg";
import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/responsive.css";

export default function HeaderProduct() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="product-header">
        <div className="container">
          <div className="product-header_inner">
            <div className="product-header_inner_left">
              <button className="burger-btn" onClick={toggleMenu}>
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

      {/* Burger Menu Panel */}
      <div className={`burger-menu ${menuOpen ? "open" : ""}`}>
        <ul className="menu-list">
          <li>
            <Link to="/category/electronics">Elektronika</Link>
          </li>
          <li>
            <Link to="/category/fashion">Ayollar kiyimlari</Link>
          </li>
          <li>
            <Link to="/category/men">Erkaklar kiyimlari</Link>
          </li>
          <li>
            <Link to="/category/home">Uy va ro‘zg‘or buyumlari</Link>
          </li>
          <li>
            <Link to="/category/toys">Bolalar o‘yinchoqlari</Link>
          </li>
        </ul>
      </div>

      {/* Shadow background */}
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
}
