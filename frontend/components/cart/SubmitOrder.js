import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
// import Error from '../ErrorMessage';
import Btn from '../_styles/Btn';
import { CURRENT_USER_QUERY } from '../auth/graphql/query';
import { CREATE_INVOICE_MUTATION } from './graphql/Mutation';
import { ALL_INVOICES_QUERY } from '../account/graphql/query';

class SubmitOrder extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
  };

  render() {
    const { children } = this.props;

    return (
      <Mutation
        mutation={CREATE_INVOICE_MUTATION}
        refetchQueries={[
          { query: CURRENT_USER_QUERY },
          { query: ALL_INVOICES_QUERY },
        ]}
      >
        {createInvoice => (
          <Btn
            onClick={e => {
              e.preventDefault();
              createInvoice().then(
                data =>
                  (window.location.href = `/account/invoice?id=${
                    data.data.createInvoice.id
                  }`)
              );
            }}
          >
            {children}
          </Btn>
        )}
      </Mutation>
    );
  }
}

export default SubmitOrder;
