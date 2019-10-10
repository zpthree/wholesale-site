import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { itemsPerPage } from '../../config';
import Pagination from './Pagination';
import Item from './Item';
import { ALL_ITEMS_QUERY } from './graphql/query';

const ItemsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

class Items extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    dept: PropTypes.string,
  };

  render() {
    const { page, dept } = this.props;

    return (
      <Query
        query={ALL_ITEMS_QUERY}
        variables={{
          skip: page * itemsPerPage - itemsPerPage,
          dept,
          perPage: itemsPerPage,
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <>
              <Pagination page={page} dept={dept} />
              <ItemsStyles>
                {data.items.map(item => (
                  <Item key={item.id} item={item} />
                ))}
              </ItemsStyles>
              <Pagination page={page} dept={dept} />
            </>
          );
        }}
      </Query>
    );
  }
}

export default Items;
