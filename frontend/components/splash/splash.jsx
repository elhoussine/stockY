import React from 'react';
import { Link } from 'react-router-dom';

import ProductsIndexContainer from './../products/products_index_container';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='splash'>

        <div className='splash-header'>

          <div className='splash-text-div'>
            <span className='splash-title'>Air Jordan 6 Retro Sp Reflections</span>
            <Link to="/products" className='splash-btn'>
              <button className='shop-now-btn'>SHOP NOW</button>
            </Link>
          </div>
          
          <div className='splash-image-div'>
            <img src='https://stocky-assets.s3.us-west-1.amazonaws.com/jordan_2021.png' alt='Air Jordan 6 Retro Sp Reflections'/>
          </div>
          
        </div>

        <div className='popular-brands'>
          <h3 className='popular-brands-title'>Popular Brands</h3>
          <div className='popular-brands-items'>
            <div className='popular-brands-item'>
              <img src="https://stocky-assets.s3.us-west-1.amazonaws.com/jordan-logo.svg" alt="Nike" />
            </div>
            <div className='popular-brands-item'>
              <img src="https://stocky-assets.s3.us-west-1.amazonaws.com/adidas-logo.svg" alt="Nike" />
            </div>
            <div className='popular-brands-item'>
              <img src="https://stocky-assets.s3.us-west-1.amazonaws.com/nike-logo.svg" alt="Nike" />
            </div>
            <div className='popular-brands-item'>
              <img src="https://stocky-assets.s3.us-west-1.amazonaws.com/puma-logo.svg" alt="Nike" />
            </div>
            <div className='popular-brands-item'>
              <img src="https://stocky-assets.s3.us-west-1.amazonaws.com/convers-logo.svg" alt="Nike" />
            </div>
            <div className='popular-brands-item last-item'>
              <img src="https://stocky-assets.s3.us-west-1.amazonaws.com/new-balance-logo.svg" alt="Nike" />
            </div>
          </div>
        </div>

        <div className='popular-products'>
          <h3 className='popular-products-title'>Most Popular Products</h3>
          <ProductsIndexContainer />
          <div className='popular-products-items'></div>
        </div>

      </div>
    )
  }
}