import React, { Component } from 'react';
import AccountLayout from '../../components/account/AccountLayout';
import Users from '../../components/account/Users';
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
