import React, { Component } from 'react';
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
  render() {
    return (
      <Query
        query={ALL_ITEMS_QUERY}
        variables={{
          skip: this.props.page * itemsPerPage - itemsPerPage,
          dept: this.props.dept,
          perPage: itemsPerPage,
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <>
              <Pagination page={this.props.page} dept={this.props.dept} />
              <ItemsStyles>
                {data.items.map(item => (
                  <Item key={item.id} item={item} />
                ))}
              </ItemsStyles>
              <Pagination page={this.props.page} dept={this.props.dept} />
            </>
          );
        }}
      </Query>
    );
  }
}

export default Items;
export { ALL_ITEMS_QUERY };
