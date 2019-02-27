import React, { Component } from 'react';
import AccountLayout from '../../components/account/AccountLayout';
import Invoices from '../../components/account/Invoices';

export default class InvoicesPage extends Component {
  render() {
    return (
      <AccountLayout active="invoices">
        <Invoices />
      </AccountLayout>
    );
  }
}
