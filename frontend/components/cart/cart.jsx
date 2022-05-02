import React from "react"
import CartItemContainer from "./cart_item_container";
import { Link } from "react-router-dom";

class Cart extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         buttonMesage: "Proceed to Checkout",
         checkoutMessage: ""
      };
      this.updateMessage = this.updateMessage.bind(this)
   }

   amountFormat (num) {
      return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
   }

   updateMessage() {
      if (this.state.buttonMesage === "Proceed to Checkout") {
         this.setState({
            buttonMesage: "Thanks for visiting StockY!",
            checkoutMessage: "Nothing for sale here"
         })
      } else {
         this.setState({
            buttonMesage: "Proceed to Checkout",
            checkoutMessage: ""
         })
      }
   }

   render() {
      const { cartItems, subtotal, quantity, checkout } = this.props;
      return (
         <div className="cart">

            {Object.values(cartItems).length !== 0 ? (
               <>
                  <div className="cart-item-list-container">
                     {Object.values(cartItems).map(cartItem => (
                        <CartItemContainer
                           key={cartItem.id}
                           cartItem={cartItem} />
                     ))}
                  </div>
                  <div className="checkout-container">
                     <div className="bottom-line">
                        <h5>Subtotal:</h5>
                        <h5 className="bold">${this.amountFormat(subtotal)}</h5>
                     </div>
                     <div className="bottom-line">
                        <h5>Shipping:</h5>
                        <h5 className="bold">{(subtotal > 250) ? ("FREE") : ("$9.99")}</h5>
                     </div>
                     <button
                        className="cart-checkout"
                        onClick={() => this.updateMessage()}
                     >{this.state.buttonMesage}</button>
                     <p className="cart-thanks-msg">&nbsp;{this.state.checkoutMessage}</p>
                  </div>

               </>

            ) : (
            <div className="cart">
               <div className="empty-cart-message">Your Cart is Empty !</div>
               <Link to="/products" className="cart-shop-now-link">
                  <button className="cart-shop-now-btn" >SHOP NOW</button>
               </Link>
            </div>

            )
            }
         </div>
      )
   };
};

export default Cart;