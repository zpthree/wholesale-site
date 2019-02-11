import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import ProductCard from './ProductCard';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products {
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
      discountPrice
      discountQty
      comments
      image
      status
    }
  }
`;

class Products extends Component {
  render() {
    return (
      <Query query={ALL_PRODUCTS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return data.products.map(product => (
            <ProductCard key={product.id} product={product} />
          ));
        }}
      </Query>
    );
  }
}

export default Products;
export { ALL_PRODUCTS_QUERY };
