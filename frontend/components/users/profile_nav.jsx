import React from 'react';
import { Link } from 'react-router-dom';

export default class ProfileNav extends React.Component {
  constructor(props) {
    super(props);
    this.changeBold = this.changeBold.bind(this);
  }

  componentDidMount() {
    $(document.getElementById(`p-navbar-${this.props.selected}`)).addClass("profile-selected");
  }

  changeBold(e) {
    let selected = document.getElementsByClassName("profile-selected")
    if (selected.length > 0) $(selected[0]).removeClass("profile-selected");
    $(e.currentTarget).addClass("profile-selected");
  }

  render() {
    return (
      <ul id="profile-nav-bar">
        <span id="profile-nav-name">{this.props.currentUser ? this.props.currentUser.name : "Guest"}</span>

        <Link to="/profile"><li onClick={this.changeBold} id="p-navbar-profile" className="profile-nav-item"><span className="nav-icon"><img src="https://img.icons8.com/office/80/000000/user.png" /></span><span className="nav-label">Profile</span></li></Link>

        <Link to="/profile/listings"><li onClick={this.changeBold} id="p-navbar-listings" className="profile-nav-item"><span className="nav-icon"><img src="https://img.icons8.com/office/80/000000/cash-in-hand.png" /></span><span className="nav-label">Listings</span></li></Link>

        <Link to="/profile/cart"><li onClick={this.changeBold} id="p-navbar-orders" className="profile-nav-item"><span className="nav-icon"><img src="https://img.icons8.com/office/80/000000/shopping-cart-loaded--v1.png" /></span><span className="nav-label">Cart</span></li></Link>

        <Link to="/profile/edit"><li onClick={this.changeBold} id="p-navbar-settings" className="profile-nav-item"><span className="nav-icon"><img src="https://img.icons8.com/office/80/000000/edit-user-male--v1.png" /></span>Edit Profile</li></Link>
      </ul>
    );
  }
}