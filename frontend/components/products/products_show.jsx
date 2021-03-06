import React from 'react';
import isEmpty from '../../utils/obj-util';
import AddToCartContainer from "./add_to_cart_container";

export default class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    let prodId = this.props.location.pathname.split('/')[2];
    this.state = {
      productId: prodId,
    }
  }

  componentDidMount() {
    this.props.fetchProduct(this.state.productId);
  }

  render() {

    let product = this.props.products[this.state.productId] || {};

    return (
      <div className="product-show">
        <div id="prod-show-buttons">
          <header className='product-show-header'>{product.name}</header>
          {/* <button id="prod-show-buy" onClick={this.handleBuy}>Buy</button> */}
          <AddToCartContainer
            product={product}
            price = {product.price}
            currentUser = {this.props.currentUser}
          />
        </div>
        <br />
        <span id="prod-show-misc">
          <span id="prod-show-condition">
            Condition: <p>New</p>
          </span> | <span id="prod-show-authenticity">
            <p>100% Authentic</p>
          </span>
        </span>

        <div className="prod-show-main">
            <div className="prod-show-img">
              <img src={product.image} alt={product.name}/>
            </div>
            <div className="prod-show-detail">
              <div className='prod-info-detail'>
                <p className="bold-this">Category</p> <span>{product.category}</span>
              </div>
              <div className='prod-info-detail'>
                <p className="bold-this">Brand</p> <span>{product.brand}</span>
              </div>
              <div className='prod-info-detail'>
                <p className="bold-this">Style</p> <span>{product.style}</span>
              </div>
              <div className='prod-info-detail'>
                <p className="bold-this">Color</p> <span>{product.color ? product.color.split(' ').join('/') : 'N/A'}</span>
              </div>
              <div className='prod-info-detail'>
                <p className="bold-this">Price</p> <span className="bold-this">${product.price}</span>
              </div>
              <div className='prod-info-detail'>
                <p className="bold-this">Release Date</p> <span>{product.release_date}</span>
              </div>
              <div className='prod-info-detail'>
                <p className="bold-this">Description</p> <span>{product.description}</span>
              </div>
            </div>
          </div>
      </div>
    )
  }
}