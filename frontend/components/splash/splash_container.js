import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = (state) => {
  let isLoggedIn = (state.session.currentUserId ? true : false);
  return ({
      loggedIn: isLoggedIn,
      currentUser: (isLoggedIn ? state.entities.currentUser : null)
  });
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);