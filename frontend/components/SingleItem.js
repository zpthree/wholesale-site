import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
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
      createdAt
      updatedAt
      expDate
      comments
      largeImage
    }
  }
`;

class SingleItem extends Component {
  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ error, loading, data }) => {
          if (error) return <p>Error!</p>;
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No item found for {this.props.id}</p>;
          const { item } = data;

          return (
            <>
              <h1>{item.title}</h1>
              <p>{item.department}</p>
              <img src={item.largeImage} alt={item.title} />
            </>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
