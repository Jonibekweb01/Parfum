import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/responsive.css";
export default function FooterHome() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_inner">
            <div className="footer_inner_box">
              <p className="footer_inner_text">
                Experience the Essence of Luxury Perfumes
              </p>
              <Link to={"/products"} className="footer_inner_link">
                Kirish
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
