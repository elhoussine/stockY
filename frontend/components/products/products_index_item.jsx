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
          <h3>
            <ul>
              <li>
                {product.brand}
              </li>
              <li>
                "{product.name}"
              </li>
              <li className="prod-style-code">
                {product.style}
              </li>
            </ul>
          </h3>
        </span>
      </Link>
    </li>
  );
}
