import { connect } from "react-redux";
import AddToCart from "./add_to_cart";
import { addCartItem } from "./../../actions/cart";

const mDTP = dispatch => ({
  addCartItem: (item, quantity) => dispatch(addCartItem(item, quantity))
})

export default connect(null, mDTP)(AddToCart);