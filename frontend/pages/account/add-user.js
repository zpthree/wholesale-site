import React, { Component } from 'react';
import AccountLayout from '../../components/account/AccountLayout';
import CreateUser from '../../components/account/CreateUser';

class AddNewCustomerPage extends Component {
  render() {
    return (
      <AccountLayout active="add-user">
        <CreateUser />
      </AccountLayout>
    );
  }
}

export default AddNewCustomerPage;
