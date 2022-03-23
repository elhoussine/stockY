import React from 'react';
import { connect } from 'react-redux';
import Follows from './follows';
import { fetchFollows } from '../../actions/follows';
import { fetchProducts } from '../../actions/products';
import { fetchOrdersByProduct } from '../../actions/orders';

const mapStateToProps = (state) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  return ({
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products,
    portfolio: state.entities.portfolio,
    sales: state.entities.sales
  });
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchFollows: (id) => dispatch(fetchFollows(id)),
  fetchOrdersByProduct: (id) => dispatch(fetchOrdersByProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Follows);