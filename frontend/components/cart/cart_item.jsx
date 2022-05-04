import React from "react";
import { Link } from "react-router-dom";

class CartItem extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         quantity: parseInt(this.props.cartItem.quantity),
         buyerId: this.props.currentUser.id
      }
   }

   // update(val) {
   //    if (this.state.quantity <= 0 && val === -1) return
   //    this.setState({ quantity: parseInt(val) });
   //    this.props.updateCartItem(this.props.cartItem, parseInt(this.state.quantity) + parseInt(val))
   // }

   update(value) {
      if (this.state.quantity <= 1 && value < 1) return
      this.setState({ quantity: (parseInt(this.state.quantity) + parseInt(value)) })
      this.props.updateCartItem(this.props.cartItem, parseInt(this.state.quantity) + parseInt(value))
   };

   render() {
      const { cartItem } = this.props;
      const id = cartItem.id;
      return (
         <div className="cart-item">
            <div className="cart-item-delete">
               <a onClick={() => this.props.removeCartItem(cartItem)}>
                  <i className="fa fa-trash remove-product" aria-hidden="true"></i>
               </a>
            </div>
            <div className="cart-item-photo-container">
               <Link
                  to={`/products/${id}/view`}
                  className="cart-item-photo"
               >
                  <img
                     className="product-cart-img"
                     src={cartItem.image}
                     alt={`${cartItem.name}-img`}
                  />
                  {/* <div className="circle">
                     Qty:{cartItem.quantity}
                  </div> */}
               </Link>
            </div>

            <div className="cart-item-name">
               <Link
                  to={`/products/${id}/view`}
                  className="cart-item-title"
                  >{cartItem.name} 
               </Link>
            </div>
            {/* <div className="cart-item-brand">{cartItem.brand} </div> */}

            <div className="cart-item-quantity">
               <a className="quantity-add minus" onClick={() => this.update(-1)}></a>
               <input type="text"
                  value={this.state.quantity}
                  className="input-box cart-update-box"
                  disabled
                  min={0}
                  pattern="(500|([1-4][0-9][0-9])|([1-9][0-9])|[1-9])"
                  title="Quantity should contain only positive numerical values and be less than 500"
               />
               <a className="quantity-add" onClick={() => this.update(1)}></a>
            </div>

            <div className="cart-item-price">${cartItem.price} </div>

         </div>
      )
   }
};

export default CartItem;