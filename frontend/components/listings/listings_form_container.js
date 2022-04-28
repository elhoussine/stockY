import React from 'react';
import {
  connect
} from 'react-redux';
import ListingsForm from './listings_form';
import {
  fetchProducts, createProduct, deleteProduct
} from '../../actions/products';
import {
  resetErrors
} from '../../actions/errors';


const mapStateToProps = (state, ownProps) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  return ({
    product : {category_id: 1, name: '', style: '', color: '', brand: '', price: 0.0, release_date: '', description: '', image:'', photoUrl: null},
    formType: 'Create Product',
    currentUser: (isLoggedIn ? state.entities.currentUser : null),
    products: state.entities.products
    //productId: ownProps.match.params.id
  });
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  createProduct: (product) => dispatch(createProduct(product)),
  deleteProduct: (productId) => dispatch(deleteProduct(productId)),
  resetErrors: () => dispatch(resetErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsForm);