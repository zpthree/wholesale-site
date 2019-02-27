import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { SINGLE_ITEM_QUERY } from './graphql/query';

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
