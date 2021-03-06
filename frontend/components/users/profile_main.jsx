import React from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="profile-main-div">
        <p id="profile-main-title">PROFILE</p>
        <p id="welcome-msg">Hi, {this.props.currentUser.name}!</p>
        <p id="welcome-msg">Email : {this.props.currentUser.email}</p>
        <br />
        <button id="temp-logout-btn" onClick={this.props.logout}>Log Out</button>
      </div>
    )
  }
}