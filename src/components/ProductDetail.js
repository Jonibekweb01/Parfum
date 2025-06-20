import React from 'react';
import { Link, useParams } from 'react-router-dom';
import "../styles/global.css";
import "../styles/responsive.css";
export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div className="container">
      <h2>Mahsulot ID: {id}</h2>
      <p>Bu yerda mahsulot tafsilotlari bo‘ladi.</p>
      <Link to={"/"}>Back</Link>
    </div>
  );
}
