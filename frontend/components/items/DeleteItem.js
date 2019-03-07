import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { DELETE_ITEM_MUTATION } from './graphql/mutation';
import { ALL_ITEMS_QUERY } from './graphql/query';
import { itemsPerPage } from '../../config';

class DeleteItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  update = (cache, payload) => {
    console.log({ cache: { ...cache }, payload: { ...payload } });
    const dept = payload.data.deleteItem.department;
    console.log(dept);
    const data = cache.readQuery({
      query: gql`
        query ALL_ITEMS_QUERY($skip: Int = 0, $perPage: Int, $dept: String) {
          items(
            where: { department_contains: $dept }
            first: $perPage
            skip: $skip
            orderBy: createdAt_DESC
          ) {
            id
            department
            barcode
            brand
            title
            cases
            buyingLimit
            casesPerSkid
            casesPerRow
            unitsPerCase
            size
            uom
            price
            discountQty
            image
          }
        }
      `,
      variables: {
        dept,
        perPage: itemsPerPage,
      },
    });
    console.log(data);
  };

  render() {
    return (
      <Mutation
        mutation={DELETE_ITEM_MUTATION}
        variables={{ id: this.props.id }}
        // update={this.update}
      >
        {(deleteItem, { loading, error }) => (
          <button
            onClick={() => {
              deleteItem();
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteItem;
