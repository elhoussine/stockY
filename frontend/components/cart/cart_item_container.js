import { connect } from "react-redux";
import CartItem from "./cart_item";
import { removeCartItem, updateCartItem } from "../../actions/cart";

const mSTP = state => ({});

const mDTP = dispatch => ({
  removeCartItem: (item) => dispatch(removeCartItem(item)),
  updateCartItem: (item, quantity) => dispatch(updateCartItem(item, quantity))
});

export default connect(mSTP, mDTP)(CartItem);