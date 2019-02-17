import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { itemsPerPage } from '../config';

import Item from './Item';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      department
      barcode
      brand
      title
      location
      casesAvailable
      buyingLimit
      casesPerSkid
      casesPerRow
      unitsPerCase
      size
      uom
      price
      discountQty
      comments
      image
      status
    }
  }
`;

class Items extends Component {
  render() {
    return (
      <Query
        query={ALL_ITEMS_QUERY}
        variables={{
          skip: this.props.page * itemsPerPage - itemsPerPage,
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return data.items.map(item => <Item key={item.id} item={item} />);
        }}
      </Query>
    );
  }
}

export default Items;
export { ALL_ITEMS_QUERY };
