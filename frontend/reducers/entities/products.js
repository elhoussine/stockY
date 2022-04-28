import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT, REMOVE_PRODUCT, RECEIVE_PRODUCT_ERRORS } from '../../actions/products';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return Object.assign({}, action.products);
    case RECEIVE_PRODUCT:
      if (action.product) {
        return Object.assign({}, state, {[action.product.id]: action.product});
      } else {
        return state;
      }
    case REMOVE_PRODUCT:
      delete newState[action.productId];
      return newState;
    default:
      return state;
  }
};