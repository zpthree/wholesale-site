import React, { Component } from 'react';
import AccountLayout from '../../components/AccountLayout';
import Sales from '../../components/Sales';

export default class SalesPage extends Component {
  render() {
    return (
      <AccountLayout active="sales">
        <Sales />
      </AccountLayout>
    );
  }
}
