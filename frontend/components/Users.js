import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import UsersStyles from './styles/UsersStyles';
import Table from './styles/Table';
import Icon from '../elements/Icon';
import { usersPerPage } from '../config';
import UserRow from './UserRow';

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
      password
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
          if (error) return `Error! ${error.message}`;

          return (
            <UsersStyles>
              <Table>
                <tbody>
                  <tr className="header">
                    <th className="user-name">Name</th>
                    <th className="user-contact"> Information</th>
                    <th className="user-can-order">Access</th>
                  </tr>
                  {data.users.map(user => (
                    <UserRow key={user.id} user={user} />
                  ))}
                </tbody>
              </Table>
            </UsersStyles>
          );
        }}
      </Query>
    );
  }
}

export default Users;
