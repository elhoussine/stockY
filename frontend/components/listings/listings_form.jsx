import React from 'react';
import isEmpty from '../../utils/obj-util';
import ProductDropdown from './listings_form_product_dropdown';

export default class ListingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.currentUser.id,
      price: "",
      errors: this.props.errors || [],
      products: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (isEmpty(this.props.products)) {
      this.props.fetchProducts().then((pl) => this.setState({ products: Object.values(pl.products) }));
    } else {
      this.setState({ products: Object.values(this.props.products) });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemData = document.getElementById("listings-form-product-dropdown").value.split('|jj|');
    let ss = document.getElementById("listings-form-size-sex-dropdown").value;
    let sn = document.getElementById("listings-form-size-num-dropdown").value;
    let ot = document.getElementById("listings-form-type-dropdown").value;
    const item = Object.assign({}, this.state, {
      product_id: itemData[0]
    });
    this.props.createOrder(item).then(success => {
      window.location.href = window.location.origin + `/#/profile/listings/created`;
      // this.props.history.push('/profile/listings');
    }, failure => {
      this.setState({ errors: failure.errors });
      $(document.getElementById("listings-form-errors")).removeClass('hidden');
    });
  }

  handleInput(type) {
    return (e) => { this.setState({ [type]: Math.round(e.target.value) }) }
  }

  renderErrors() {
    return (
      <ul className="error-list">
        {this.state.errors.map((error, i) => (
          <li className="error-item" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.state.errors = [];
    this.props.resetErrors();
  }

  render() {
    //let products = this.state.products;
    return (
      <div id="listings-form-div">
        <form id="listings-form" onSubmit={this.handleSubmit}>
          <h2>New Product</h2>
          <br />
          <span> </span>
          <br />
          <br />
          <label htmlFor="category">Category:
            <select name="product[category]" id="">
              <option value="1">Sneakers</option>
              <option value="2">Apparel</option>
              <option value="3">Electronics</option>
              <option value="4">Trading Cards</option>
              <option value="5">Collectibles</option>
              <option value="6">Accessories</option>
              <option value="7">NFTs</option>
            </select>
          </label>
          <br />
          <label htmlFor="">Name:
            <input type="text" name="product[name]" id="" />
          </label>
          <br />
          <label htmlFor="">Style:
            <input type="text" name="product[style]" id="" />
          </label>
          <br />
          <label htmlFor="">Color:
            <input type="text" name="product[color]" id="" />
          </label>
          <br />
          <label htmlFor="">Brand:
            <input type="text" name="product[brand]" id="" />
          </label>
          <br />
          <label htmlFor="">Image:
            <input type="file" name="product[image]" id="" />
          </label>
          <br />
          <label htmlFor="">Release Date:
            <input type="date" name="product[release_date]" id="" />
          </label>
          <br />
          <label htmlFor="">Description:
            <textarea rows={7} cols={25} type="file" name="product[description]" id="" />
          </label>
          <br />
          <br />
          <span> </span>
          <br />
          <input type="submit" value="Submit" id="listings-form-submit" />
        </form>
        <div id="listings-form-errors" className="hidden">
          {this.renderErrors()}
        </div>
      </div>
    );
  }
}