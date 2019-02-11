import React, { Component } from 'react';
import AccountLayout from '../../components/AccountLayout';
import UserList from '../../components/UserList';
import { users } from '../../data';

export default class UserListPage extends Component {
  render() {
    return (
      <AccountLayout active="user-list">
        <UserList users={users} />
      </AccountLayout>
    );
  }
}
