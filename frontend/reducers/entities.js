import {
  combineReducers
} from 'redux';
import usersReducer from './entities/users';
import productsReducer from './entities/products';
import salesReducer from './entities/sales';
import cartItemsReducer from "./entities/cart";

export default combineReducers({
  currentUser: usersReducer,
  products: productsReducer,
  sales: salesReducer,
  cartItems: cartItemsReducer
});