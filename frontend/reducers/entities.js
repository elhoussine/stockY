import {
  combineReducers
} from 'redux';
import usersReducer from './entities/users';
import productsReducer from './entities/products';
import salesReducer from './entities/sales';

export default combineReducers({
  currentUser: usersReducer,
  products: productsReducer,
  sales: salesReducer
});