import React, { Component } from 'react';
import AccountLayout from '../../components/AccountLayout';
import CreateItem from '../../components/CreateItem';
import 'react-day-picker/lib/style.css';

class AddNewItemPage extends Component {
  render() {
    return (
      <AccountLayout active="add-new-item">
        <CreateItem />
      </AccountLayout>
    );
  }
}

export default AddNewItemPage;
