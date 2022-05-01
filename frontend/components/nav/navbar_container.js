import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout, checkLogin } from '../../actions/session';

const quantity = cartItems => {
    let quantity = 0;
    for (const id in cartItems){
      quantity += parseInt(cartItems[id].quantity);
    }
    return quantity;
};

const mapStateToProps = (state) => {
  return ({
    currentUser: state.entities.currentUser,
    loggedIn: state.session.currentUserId,
    cartItemQuantity: quantity(state.entities.cartItems)
    
  })
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    checkLogin: () => dispatch(checkLogin())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);