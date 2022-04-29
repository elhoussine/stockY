import React from 'react';
import isEmpty from '../../utils/obj-util';

export default class ListingsForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.product || {};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);

    this.user_id = this.props.currentUser.id;
    this.errors = this.props.errors || [];
    this.products = [];
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  updateSelect(option){
      return (e) => {
        this.setState({ [option]: e.target.value });
      }
  }


  handleFile(e) {
    this.setState({ photoUrl: e.currentTarget.files[0] })
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    //data.append('product[id]', this.props.productId);
    data.append('product[category_id]', this.state.category_id);
    data.append('product[name]', this.state.name);
    data.append('product[style]', this.state.style);
    data.append('product[color]', this.state.color);
    data.append('product[brand]', this.state.brand);
    data.append('product[price]', this.state.price);
    data.append('product[release_date]', this.state.release_date);
    data.append('product[description]', this.state.description);
    data.append('product[photo]', this.state.photoUrl);
    data.append('product[seller_id]', this.props.currentUser.id);
    data.append('product[image]', 'true');

    this.props.createProduct(data).then(response => {
      if (this.props.formType === 'Create Product') {
        this.props.history.push(`/profile/listings`);
      }
      else {
        this.props.history.push(`/profile/listings/${this.state.id}`)
      };
    }, failure => {
      this.setState({ errors: failure.errors });
    });
  }

  componentDidMount() {
    if (isEmpty(this.props.products)) {
      this.props.fetchProducts().then((pl) => this.setState({ products: Object.values(pl.products) }));
    } else {
      this.setState({ products: Object.values(this.props.products) });
    }
  }

  // handleInput(type) {
  //   return (e) => { this.setState({ [type]: Math.round(e.target.value) }) }
  // }

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
    //if (!this.props.product) return null;
    // const image = this.state.photoUrl ? (
    //   <div className='image'>Image uploaded</div>
    // ) : (
    //   <div className='image'></div>
    // )
    return (
      <div id="listings-form-div">
        <form id="listings-form" onSubmit={this.handleSubmit}>
          <h2>New Product</h2>
          <br />
          <span> </span>
          <br />
          <br />
          <label htmlFor="category">Category
            <select name="product[category_id]" value={this.state.category_id} onChange={this.updateSelect('category_id')}>
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
          <label htmlFor="">Name
            <input type="text" name="product[name]" id="" value={this.state.name} onChange={this.update('name')}/>
          </label>
          <br />
          <label htmlFor="">Style
            <input type="text" name="product[style]" id="" value={this.state.style} onChange={this.update('style')}/>
          </label>
          <br />
          <label htmlFor="">Color
            <input type="text" name="product[color]" id="" value={this.state.color} onChange={this.update('color')}/>
          </label>
          <br />
          <label htmlFor="">Brand
            <input type="text" name="product[brand]" id="" value={this.state.brand} onChange={this.update('brand')}/>
          </label>
          <br />
          <label htmlFor="">Price $$
            <input type="number" name="product[price]" id="" value={this.state.price} onChange={this.update('price')} />
          </label>
          <br />
          <label htmlFor="">Image
            <input type="file" name="product[image]" id="" onChange={this.handleFile}/>
          </label>
          <br />
          <label htmlFor="">Release Date
            <input type="date" name="product[release_date]" id="" value={this.state.release_date} onChange={this.update('release_date')}/>
          </label>
          <br />
          <label htmlFor="">Description
            <textarea rows={7} cols={25} name="product[description]" id="" value={this.state.description} onChange={this.update('description')}/>
          </label>
          <br />
          <br />
          <span> </span>
          <br />
          <input type="submit" value="Add product" id="listings-form-submit" />
        </form>
        <div id="listings-form-errors" className="hidden">
          {/* {this.renderErrors()} */}
        </div>
      </div>
    );
  }
}