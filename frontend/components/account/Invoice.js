import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import Link from 'next/link';
import dateFns from 'date-fns';
import{ SINGLE_INVOICE_QUERY } from './graphql/query';
import InvoiceStyles from './styles/InvoiceStyles';
import Logo from '../../elements/Logo';
import InvoiceItem from './InvoiceItem';

const Invoice = ({ id }) => console.log(id) || (
  <Query query={SINGLE_INVOICE_QUERY} variables={{ id }}>
    {({loading, error, data}) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error</p>
      const { invoice } = data;

      return (
        <InvoiceStyles>
          <div className="cookie-crumb">
            <Link href="/account/invoices">
              <a>Back to Account</a>
            </Link>
          </div>
          <div className="invoice">
            <div className="header">
              <div className="header-left">
                <Logo />
              </div>
              <div className="header-right">
                <h6>{invoice.user.firstName} {invoice.user.lastName && invoice.user.lastName}</h6>
                <p>Invoice #</p> {/* get invoice numbers */}
                {dateFns.format(new Date(invoice.createdAt), 'MM/DD/YYYY')}
              </div>
            </div>
            <div className="items-container">
              <div className="items-header">
                <p className='description'>Description</p>
                <p className='location'>Location</p>
                <p className='qty'>Quantity</p>
                <p className='price'>Price</p>
                <p className='total-cost'>Line Cost</p>
              </div>
              <div className="item-listings">
                {invoice.items.map(item => console.log(item) || <InvoiceItem item={item} />)}
              </div>
            </div>
          </div>
        </InvoiceStyles>      
      )
    }}
  </Query>
);

Invoice.propTypes = {
  id: PropTypes.string.isRequired
}

export default Invoice;