import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import "../styles/global.css";
import "../styles/responsive.css";
export default function FooterProduct() {
  return (
    <div style={styles.footer}>
      <NavLink
        to="/products"
        style={styles.link}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <FaHome size={24} />
      </NavLink>
      <NavLink
        to="/products/cart"
        style={styles.link}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <FaShoppingCart size={24} />
      </NavLink>
      <NavLink
        to="/products/profile"
        style={styles.link}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <FaUser size={24} />
      </NavLink>
    </div>
  );
}

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px 0",
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
    zIndex: 1000,
  },
  link: {
    textDecoration: "none",
    color: "#333",
  },
};
