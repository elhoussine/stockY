import React from 'react';
import {
  connect
} from 'react-redux';
import ListingItem from './listing_item';
import {
  fetchProduct, deleteProduct
} from '../../actions/products';

const mapStateToProps = (state, ownProps) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  return ({
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  deleteProduct: (productId) => dispatch(deleteProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingItem);