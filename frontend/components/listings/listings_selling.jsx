import React from 'react'
import isEmpty from '../../utils/obj-util';
import ListingItemContainer from './listing_item_container';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

export default class ListingsSelling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products
    }
  }

  componentDidMount() {

    this.props.fetchProducts().then(action => this.setState({ products: action.products }));
    console.log(this.state.products);
  }

  render() {
    let products = Object.values(this.state.products).slice(0).reverse();
    console.log(products);
    return (
      <div id="listings-selling">
        <span id="listings-sell-header">Selling</span>

        <Link to="/profile/listings/new" className="new-listing">+ New Item</Link>
        
        <table id="listings-sell-table">
          <thead id="listings-sell-table-heading">
            <tr className="listing-row">
              <th className="listing-col0"></th>
              <th className="listing-col1">Item</th>
              <th className="listing-col2">Category</th>
              <th className="listing-col2">Brand</th>
              <th className="listing-col2">Style</th>
              <th className="listing-col2">Price</th>
              <th className="listing-col2">Release Date</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => isEmpty(product) ? null : <ListingItemContainer product={product} key={`product${product.id}`} />)}
          </tbody>
        </table>
      </div>
    )
  }
}
