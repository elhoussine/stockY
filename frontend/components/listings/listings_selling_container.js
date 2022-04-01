import React from 'react';
import {
  connect
} from 'react-redux';
import ListingsSelling from './listings_selling';
import {
  fetchProducts
} from '../../actions/products';
import {
  fetchLastSale
} from '../../actions/sales';

const mapStateToProps = (state) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  return ({
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products,
    sales: state.entities.sales
  });
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchLastSale: (id) => dispatch(fetchLastSale(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsSelling);