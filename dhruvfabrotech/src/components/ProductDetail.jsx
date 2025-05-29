import React from "react";
import './IndustrialFermenter.css';
import { Link } from "react-router-dom";
import './LaboratoryFermenter.css';

const ProductDetail = ({ product }) => {
  return (
    <div className="product-container">
      <img src={product.image} alt="Product" className="product-image" />

      <div className="product-details">
        <h2 className="title">{product.title}</h2>
        <div className="price-line">
          <span className="price">₹ {product.price}</span>
          <span className="unit"> </span>
          <a href="#" className="latest-price"></a>
        </div>

        <table className="spec-table">
          <tbody>
            {product.specs.map((spec, index) => (
              <tr key={index}>
                <td className="spec-label">{spec.label}</td>
                <td>{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="description">
          <strong>{product.highlight}</strong>
          {product.description}
        </p>
       <Link to="/contact">
        <button className="interest-btn">
          📩 Yes! I am interested
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
