import React from 'react';
import isEmpty from '../../utils/obj-util';
import ProductOrders from './show_components/orders-sales';

export default class ProductShow extends React.Component {
  constructor(props) {
    super(props);
    let prodId = this.props.location.pathname.split('/')[2];
    this.state = {
      productId: prodId,
    }
    this.handleBuy = this.handleBuy.bind(this);
  }

  componentDidMount() {
    this.props.fetchProduct(this.state.productId);
  }

  handleBuy(e) {
    if (!this.props.currentUser) {
      location.href = location.origin + `/#/login`;
      return false;
    }
    e.preventDefault();
    if (this.state.follows) {
      this.props.deleteFollow(this.state.follow_id);
      this.setState({ follows: false, follow_id: -1 });
    }
    else if (!this.state.follows) {
      this.props.createFollow({ user_id: this.props.currentUser.id, product_id: this.state.productId }).then(data => {
        // console.log(data);
        this.setState({ follows: true, follow_id: data.follow.id });
      })
    }
  }

  render() {

    let product = this.props.products[this.state.productId] || {};

    return (
      <div className="product-show">
        <div id="prod-show-buttons-outer">
          <div id="prod-show-buttons">
            <button id="prod-show-buy" onClick={this.handleBuy}>Buy</button>
          </div>
        </div>
        <header>{product.name}</header>
        <br />
        <span id="prod-show-misc">
          <span id="prod-show-condition">
            Condition: <p style={{ color: 'green' }}>New</p>
          </span> | <span id="prod-show-authenticity">
            <p style={{ color: 'green' }}>100% Authentic</p>
          </span>
        </span>

        <div id="prod-show-main">
          <div id="prod-show-img">
            <span id="prod-show-detail">
              <div><p className="bold-this">Brand</p> <span>{product.brand}</span></div>
              <br />
              <div><p className="bold-this">Style</p> <span>{product.style}</span></div>
              <br />
              <div><p className="bold-this">Color</p> <span>{product.color ? product.color.split(' ').join('/') : 'black'}</span></div>
              <br />
              <div><p className="bold-this">Price</p> <span>${product.price}</span></div>
              <br />
              <div><p className="bold-this">Release Date</p> <span>{product.release_date}</span></div>
              <br />
              <div><p className="bold-this">Description</p> <span id='description'>{product.description}</span></div>
            </span>
            <img src={product.image} />
          </div>
        </div>
      </div>
    )
  }
}