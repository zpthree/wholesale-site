import React, { Component } from 'react';
import AccountLayout from '../../components/AccountLayout';
import PrintList from '../../components/PrintList';

export default class PrintListPage extends Component {
  render() {
    return (
      <AccountLayout active="print-list">
        <PrintList />
      </AccountLayout>
    );
  }
}
