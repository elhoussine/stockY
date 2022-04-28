import React from "react"
import { amountFormat } from "../../util/string_util"
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
            buttonMesage: "Thanks for visiting The Verve!",
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
      const { cartItems, toggleCartModal, updateFilter, subtotal, quantity, checkout } = this.props;
      return (
         <div className="relative">
            <div
               className={this.props.visible ? "blurred-modal-area blur-visible" : "blurred-modal-area"}
            >
            </div>
            <div className={this.props.visible ? "cart-index-modal modal-visible" : "cart-index-modal"}>
               <div
                  className="non-cart-area"
                  onClick={() => toggleCartModal()}
               >
               </div>
            </div>
            <div className={this.props.visible ? "cart-index cart-visible" : "cart-index"}>
               <a
                  onClick={() => toggleCartModal()}
                  className="close-cart-modal-button"
               ><i className="fa-solid fa-xmark"></i></a>
               <div className="cart-title-container">
                  <h2><i className="fa-solid fa-cart-shopping"></i> ({quantity})</h2>
               </div>

               {Object.values(cartItems).length !== 0 ? (
                  <>
                     <div className="cart-item-list-container">
                        {Object.values(cartItems).map(cartItem => (
                           <CartItemContainer
                              key={`${cartItem.id}-${cartItem.grind}-${cartItem.bagSize}-${cartItem.quantity}`}
                              cartItem={cartItem} />
                        ))}
                     </div>
                     <div className="checkout-container">
                        <div className="bottom-line">
                           <h5>Subtotal:</h5>
                           <h5 className="not-bold">${amountFormat(subtotal)}</h5>
                        </div>
                        <div className="bottom-line">
                           <h5>Shipping:</h5>
                           <h5 className="not-bold">{(subtotal > 35) ? ("FREE") : ("$4.99")}</h5>
                        </div>
                        <button
                           className="add-cart-button"
                           id="checkout"
                           onClick={() => this.updateMessage()}
                        >{this.state.buttonMesage}</button>
                        <p>&nbsp;{this.state.checkoutMessage}</p>
                     </div>

                  </>

               ) : (
                  <>
                     <div className="empty-cart-message">Your Cart is Empty</div>
                     <Link
                        to="/collections/coffee/all-coffee"
                        onClick={() => {
                           updateFilter("category", "all-coffee")
                           toggleCartModal()
                        }}>
                        <button
                           className="cart-shop-now"
                        >Shop Now</button>
                     </Link>
                  </>
               )
               }

            </div>
         </div>
      )
   };
};

export default Cart;