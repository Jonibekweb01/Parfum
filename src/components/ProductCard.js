import { FaPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/responsive.css";
export default function ProductCard({ name, price, image, about }) {
  const { addToCart } = useCart();

  return (
    <>
      <div className="products-card">
        <h3 className="product-card-title">{name}</h3>
        <span className="product-card-span">{about}</span>
        <Link className="product-card-link" to={`/product/${name}`}>
          <img className="product-card-img" src={image} alt={name} width={120} height={150} />
        </Link>
        <p className="product-card-text">{price} so‘m</p>
        <button
          className="product-card-btn"
          onClick={() => addToCart({ name, price, image })}
        >
          <FaPlus size={14} color="white"/>
        </button>
      </div>
    </>
  );
}
