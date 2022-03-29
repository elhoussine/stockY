import React from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.dir(this.props);
    // console.log(this.props.match.path);


    // console.log(selected);
    return (
      <div id="profile-main-div">
        <p id="profile-main-title">PROFILE</p>
        <button id="temp-logout-btn" onClick={this.props.logout}>Logout</button>
        <p id="welcome-msg">Hi, {this.props.currentUser.name}!</p>
        <br />
        {/* <Link to="/profile/edit">Edit Profile</Link> */}
      </div>
    )
  }
}