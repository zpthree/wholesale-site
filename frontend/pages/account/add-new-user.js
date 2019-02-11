import React, { Component } from 'react';
import AccountLayout from '../../components/AccountLayout';
import CreateUser from '../../components/CreateUser';

class AddNewCustomerPage extends Component {
  render() {
    return (
      <AccountLayout active="add-new-user">
        <CreateUser action="create" title="Add New User" initialState={{}} />
      </AccountLayout>
    );
  }
}

export default AddNewCustomerPage;
