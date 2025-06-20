import React from "react";
import "../styles/responsive.css";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";


export default function HeaderHome() {
  return (
    <header className="header">
      <div className="container">
        <div className="header_inner">
          <Link to={"/"}>
            <img src={logo} alt="Logo of the site" width={130} height={87} />
          </Link>
        </div>
      </div>
    </header>
  );
}
