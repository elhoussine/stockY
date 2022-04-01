import React from 'react';
import {
  connect
} from 'react-redux';
import ProfileNav from './profile_nav';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.entities.currentUser
  })
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNav);