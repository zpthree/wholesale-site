import React, { Component } from 'react';
import AccountLayout from '../../components/account/AccountLayout';
import PrintList from '../../components/account/PrintList';

export default class PrintListPicturesPage extends Component {
  render() {
    return (
      <AccountLayout active="print-list-with-pictures">
        <PrintList pictures="true" />
      </AccountLayout>
    );
  }
}
