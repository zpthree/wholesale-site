import React, { Component } from 'react';
import AccountLayout from '../../components/AccountLayout';
import Users from '../../components/Users';
import { users } from '../../data';

export default class UsersPage extends Component {
  render() {
    return (
      <AccountLayout active="user-list">
        <Users users={users} />
      </AccountLayout>
    );
  }
}
