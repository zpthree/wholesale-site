import React, { Component } from 'react';
import AccountLayout from '../../components/AccountLayout';
import UpdateUser from '../../components/UpdateUser';

const user = {
  firstName: 'Peter',
  lastName: 'Parker',
  username: 'spiderman',
  company: 'Sommers Market',
  email: 'zach@sommersmarket.com',
  permissions: 'ADMIN',
  canOrder: true,
  phone: '330-324-5201',
  address: '8746 Lost Trail Ave Canton, Ohio 44721',
  password: 'thundercats',
  confirmPassword: 'thundercats',
};

export default class EditUserInfoPage extends Component {
  render() {
    return (
      <AccountLayout active="update-user">
        <UpdateUser
          action="update"
          title="Update User"
          initialState={{ ...user }}
        />
      </AccountLayout>
    );
  }
}
