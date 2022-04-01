import React from 'react';
import {
  connect
} from 'react-redux';
import ListingItem from './listing_item';

const mapStateToProps = (state, ownProps) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  return ({
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingItem);