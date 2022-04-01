import React from 'react'
import isEmpty from '../../utils/obj-util';
import ListingsSellingContainer from './listings_selling_container';
import ListingsCreated from './listings_created';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from '../../utils/route-util';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

export default class ListingsBuying extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchProducts();
  }

  render() {
    return (
      <div id="listings-index-div">
        <ProtectedRoute exact path="/profile/listings/selling" component={ListingsSellingContainer} />
        <ProtectedRoute exact path="/profile/listings/created" component={ListingsCreated} />
      </div>
    )
  }
}
