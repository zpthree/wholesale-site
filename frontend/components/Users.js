import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import UsersStyles from './styles/UsersStyles';
import Table from './styles/Table';
import Icon from '../elements/Icon';
import { usersPerPage } from '../config';
import UserRow from './UserRow';
import Error from './ErrorMessage';

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      firstName
      lastName
      company
      email
      address
      phone
      username
      permissions
      canOrder
      active
    }
  }
`;

class Users extends Component {
  render() {
    return (
      <Query query={ALL_USERS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return <Error error={error} />;

          return (
            <UsersStyles>
              <Table>
                <div className="trow thead">
                  <div className="tcell user-name">Name</div>
                  <div className="tcell user-contact">Contact Information</div>
                  <div className="tcell user-permissions">Permissions</div>
                  <div className="tcell user-permissions">Can Order</div>
                </div>
                {data.users.map(user => (
                  <UserRow key={user.id} user={user} />
                ))}
              </Table>
            </UsersStyles>
          );
        }}
      </Query>
    );
  }
}

export default Users;
