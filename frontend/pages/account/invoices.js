import React, { Component } from 'react';
import AccountLayout from '../../components/AccountLayout';
import Invoices from '../../components/Invoices';

export default class InvoicesPage extends Component {
  render() {
    return (
      <AccountLayout active="invoices">
        <Invoices />
      </AccountLayout>
    );
  }
}
