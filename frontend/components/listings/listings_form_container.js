import React from 'react';
import {
  connect
} from 'react-redux';
import ListingsForm from './listings_form';
import {
  fetchProducts, createProduct
} from '../../actions/products';
import {
  resetErrors
} from '../../actions/errors';


const mapStateToProps = (state) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  return ({
    product : {category_id: '', name: '', style: '', color: '', brand: '', price: 0.0, release_date: '', description: '', photoUrl: null},
    formType: 'Create Product',
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products
  });
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  createProduct: (product) => dispatch(createProduct(product)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsForm);