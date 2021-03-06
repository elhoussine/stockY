import * as ProductsUtil from '../utils/api-products-util';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const RECEIVE_PRODUCT_ERRORS = 'RECEIVE_PRODUCT_ERRORS'

const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

const removeProduct = (product) => ({
    type: REMOVE_PRODUCT,
    productId: product.id
});

const receiveProductErrors = errors => ({
  type: RECEIVE_PRODUCT_ERRORS,
  errors
});

export const fetchProducts = () => dispatch =>
  ProductsUtil.fetchProducts().then(products => dispatch(receiveProducts(products)));

export const fetchProduct = id => dispatch =>
  ProductsUtil.fetchProduct(id).then(product => dispatch(receiveProduct(product)));

export const createProduct = product => dispatch =>
  ProductsUtil.createProduct(product).then(p => dispatch(receiveProduct(p)), errors => dispatch(receiveProductErrors(errors.responseJSON)));

export const updateProduct = product => dispatch =>
  ProductsUtil.updateProduct(product).then(p => dispatch(receiveProduct(p)), errors => dispatch(receiveProductErrors(errors.responseJSON)));

export const deleteProduct = id => dispatch =>
  ProductsUtil.deleteProduct(id).then(product => dispatch(removeProduct(product)));