import React from 'react';
import Invoice from '../../components/account/Invoice';

const InvoicePage = (props) => <Invoice id={props.query.id} />;

export default InvoicePage;
