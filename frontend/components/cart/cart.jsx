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

   updateMessage() {
      if (this.state.buttonMesage === "Proceed to Checkout") {
         this.setState({
            buttonMesage: "Thanks for visiting The StockY!",
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
      return (
         <div className="cart">
            <div className="empty-cart-message">Your Cart is Empty !</div>
            <Link to="/products" className="cart-shop-now-link">
               <button className="cart-shop-now-btn" >SHOP NOW</button>
            </Link>
         </div>
      )
   };
};

export default Cart;