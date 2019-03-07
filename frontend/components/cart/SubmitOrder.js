import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { calcTotalPrice } from '../../lib/money';
import Error from '../ErrorMessage';
import Me from '../auth/Me';
import { CURRENT_USER_QUERY } from '../auth/graphql/query';
import { CREATE_INVOICE_MUTATION } from './graphql/Mutation';

class SubmitOrder extends Component {
  render() {
    return (
      <Me>
        {({ data: { me } }) => (
          <Mutation
            mutation={CREATE_INVOICE_MUTATION}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}
          >
            {createInvoice => (
              <div
                onClick={async e => {
                  e.preventDefault();

                  const invoice = await createInvoice();
                  console.log(invoice);
                }}
              >
                {this.props.children}
              </div>
            )}
          </Mutation>
        )}
      </Me>
    );
  }
}

export default SubmitOrder;
