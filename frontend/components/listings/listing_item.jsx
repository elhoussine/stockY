import React from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import isEmpty from '../../utils/obj-util';

Array.prototype.rotateRight = function (n) {
  this.unshift(this.splice(n, this.length))
  return this;
}

Array.prototype._formatDateFromDate = function () {
  this[1] -= 1;
  if (this[0].length === 1) this[0] = `0${this[0]}`;
  if (this[1].length === 1) this[1] = `0${this[1]}`;
  return this;
}

Array.prototype._formatDateFromString = function () {
  this[2] -= 1;
  return this;
}
export default class ListingItem extends React.Component {
  constructor(props) {
    super(props);
    // console.log('here');
    // console.dir(this.props);
    this.handleDelete = this.handleDelete.bind(this);
    // this.state = {
    //   //order: (this.props.order ? this.props.order : {}),
    //   product: (this.props.products[this.props.order.product_id] ? this.props.products[this.props.order.product_id] : {}),
    // };
  }

  componentDidMount() {
    // let p_id = this.state.order.product_id;
    // if (!this.props.products[p_id]) this.props.fetchProduct(p_id);
    // this.props.fetchOrdersByProduct(p_id).then((data) => {
    //   let newState = Object.assign({}, this.state);
    //   // console.dir(data);
    //   for (let order of Object.values(data.orders)) {
    //     if (order.order_type === 'buy' && order.price > newState.hBid) newState.hBid = order.price;
    //     else if (order.order_type === 'sell' && order.price < newState.lAsk) newState.lAsk = order.price;
    //   }
    //   this.setState(newState);
    //   // console.dir(this.state);
    // })
  }

  handleDelete(e) {
    // e.preventDefault();
    let newOrder = Object.assign({}, this.state.order);
    newOrder.active = 'false'
    this.props.updateOrder(newOrder)
    this.setState({ order: {}, product: {} });
    location.reload();
  }

  render() {
    let product = this.props.product;
    if (isEmpty(product)) return (null);
    return (
      <tr className="listing-row listing-item">
        <td className="listing-col0">
          <Link to="#"><img className="delete-listing-item-btn" src="https://img.icons8.com/office/30/000000/delete--v1.png" onClick={this.handleDelete} height="25px" /></Link>
        </td>
        <td className="listing-col1 listing-item-info">
          <span className="listing-item-pic">
            <img src={product.image} width="80px" />
          </span>
          <Link to={`/products/${product.id}/view`}>
            <p>{product.name}</p>
          </Link>
        </td>

        <td className="listing-col2"><p>{product.style}</p></td>
        <td className="listing-col3"><p>{product.brand}</p></td>
        <td className="listing-col4"><p>${product.price}</p></td>
        <td className="listing-col4"><p>{product.release_date}</p></td>
      </tr>
    )
  }
}