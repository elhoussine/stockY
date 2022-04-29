import { connect } from "react-redux";
import Cart from "./cart";
import { checkout } from "../../actions/cart";

const subtotal = (cartItems) => {
  let subtotal = 0;
    for (const id in cartItems){
      subtotal += parseFloat(cartItems[id].price) * parseInt(cartItems[id].quantity);
    }
    return subtotal;
};

const quantity = (cartItems) => {
  let quantity = 0;
    for (const id in cartItems){
      quantity += (cartItems[id].quantity);
    }
    return quantity;
};

const mSTP = state => {
  return {
    cartItems: state.entities.cartItems,
    subtotal: subtotal(state.entities.cartItems),
    quantity: quantity(state.entities.cartItems)
  }
};

const mDTP = dispatch => ({
  checkout: () => dispatch(checkout()),
});

export default connect(mSTP, mDTP)(Cart)