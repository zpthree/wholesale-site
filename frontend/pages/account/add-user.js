import React, { Component } from 'react';
import AccountLayout from '../../components/AccountLayout';
import CreateUser from '../../components/CreateUser';

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
