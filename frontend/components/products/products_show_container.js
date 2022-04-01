import React from 'react';
import {
  connect
} from 'react-redux';
import ProductsShow from './products_show';
import {
  fetchProduct
} from '../../actions/products'
import {
  fetchSales,
  fetchLastSale,
  createSale
} from '../../actions/sales';

const mapStateToProps = (state, ownProps) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  // console.dir(ownProps);
  return ({
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products,
    sales: state.entities.sales
  });
};

const mapDispatchToProps = dispatch => ({
  fetchProduct: (id) => dispatch(fetchProduct(id)),
  fetchSales: (id) => dispatch(fetchSales(id)),
  fetchLastSale: (id) => dispatch(fetchLastSale(id)),
  createSale: (sale) => dispatch(createSale(sale)),
  addItem: (id, item) => dispatch(addItem(id, item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsShow);