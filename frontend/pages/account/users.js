import React, { Component } from 'react';
import AccountLayout from '../../components/AccountLayout';
import Users from '../../components/Users';
import { users } from '../../data';

class UsersPage extends Component {
  render() {
    return (
      <AccountLayout active="users">
        <Users users={users} />
      </AccountLayout>
    );
  }
}

export default UsersPage;
