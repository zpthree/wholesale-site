import React, { Component } from 'react';
import AccountLayout from '../../components/account/AccountLayout';
import Sales from '../../components/account/Sales';

export default class SalesPage extends Component {
  render() {
    return (
      <AccountLayout active="sales">
        <Sales />
      </AccountLayout>
    );
  }
}
