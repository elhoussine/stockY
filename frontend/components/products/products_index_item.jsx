import React from 'react';
import { Link } from 'react-router-dom';


export default ({ product }) => {
  const linkPath = `/products/${product.id}/view`
  return (
    <li className="products-index-item">
      <Link to={linkPath}>
        <span className="products-index-img">
          <img src={product.image} />
        </span>
        <span className="products-index-tag">
          <ul>
            <li>
              {product.name}
            </li>
            <li>
              {product.brand} | {product.category}
            </li>
            <li className="product-price">
              ${product.price}
            </li>
          </ul>
        </span>
      </Link>
    </li>
  );
}
