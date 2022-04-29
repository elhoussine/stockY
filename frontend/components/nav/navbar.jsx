import React from 'react';
import { Link, withRouter } from 'react-router-dom';

//import logo from './logo.svg';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn
    }
    this.handleSearch = this.handleSearch.bind(this);

  }

  handleLogout() {
    this.props.logout();
  }

  componentDidUpdate() {
    if (this.state.loggedIn != this.props.loggedIn) this.setState({ loggedIn: this.props.loggedIn });
  }

  handleSearch(e) {
    e.preventDefault();
    window.location.hash = "#/products/search";


  }

  render() {
    // console.log(this.state.loggedIn);
    const { currentUser, toggleCartModal, cartItemQuantity } = this.props;
    return (
      <div id="navbar-div">
        <span id="logo-span">
          <Link to="/"><img src={window.logo} /></Link>
          {/* <Link to="/">StockY</Link> */}
        </span>
        <span id="navbar-search-span">
          <span id="navbar-search-outer">
            <form id="search-form" onSubmit={this.handleSearch}>
              <span id="navbar-search-icon"><i className="fa fa-search"></i></span>
              <input type="text" name="search" placeholder="Search for brand, color, etc. (ex. Nike, blue...)" id="navbar-search" />
              <input type="submit" style={{ display: 'none' }} />
            </form>
          </span>
        </span>
        <span id="navbar-nav-ele">
          <ul id="navbar-els1">
            <Link to="/products">
              <li id="navbar-browse" className="navbar-dropdown">Products</li>
            </Link>
            <Link to="/about">
              <li id="navbar-about" className="navbar-dropdown">About</li>
            </Link>
            {this.state.loggedIn ?
              <Link to="/profile">
                <li id="navbar-my-account" className="navbar-dropdown">My Account</li>
              </Link> : <span id="navbar-auth"><Link to="/login"><li id="navbar-login">Login</li></Link>
              <Link to="/register"><li id="navbar-register">Register</li></Link></span>}
          </ul>

          <Link
            to="/profile/cart"
            className="cart-icon"
            key={cartItemQuantity}
          >
            <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-shopping-cart-interface-kiranshastry-lineal-kiranshastry.png" />
          </Link>

          <span id="navbar-els2">
            <Link to="/profile/listings/new">
              <button id="navbar-sell-btn">Sell</button>
            </Link>
          </span>
        </span>

      </div>
    );
  }


}




