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
    this.removeProduct = this.removeProduct.bind(this);
  }

  // componentDidMount() {
  // }

  removeProduct (e, productId){
    e.preventDefault();
    this.props.deleteProduct(productId);
    location.reload();
  }

  render() {
    let product = this.props.product;
    if (isEmpty(product)) return (null);
    //const {deleteProduct} = this.props;
    return (
      <tr className="listing-row listing-item">
        <td className="listing-col0">
          <Link to="#"><img className="delete-listing-item-btn" src="https://img.icons8.com/office/30/000000/delete--v1.png" onClick={(e) => this.removeProduct(e, product.id)} height="25px" /></Link>
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