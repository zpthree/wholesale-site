import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import dateFns from 'date-fns';
import { Query } from 'react-apollo';
import InvoicesStyles from './styles/InvoicesStyles';
import Table from '../_styles/Table';
import { formatMoney } from '../../lib/money';
import { ALL_INVOICES_QUERY } from './graphql/query';

const Invoices = () => (
  <InvoicesStyles>
    <div className="account-header">
      <h4>Invoices</h4>
    </div>
    <Table>
      <div className="trow thead">
        <p className="tcell customer">Customer</p>
        <p className="tcell date-ordered text-center">Issued Date</p>
        <p className="tcell date-ordered text-center">Pickup/Delivery Date</p>
        <p className="tcell skus text-center">SKUs</p>
        <p className="tcell total-cost text-center">Amount</p>
        <p className="tcell status text-center">Status</p>
      </div>

      <Query query={ALL_INVOICES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          return data.invoices.map(invoice => (
            <InvoiceListing data={invoice} key={invoice.id} />
          ));
        }}
      </Query>
    </Table>
  </InvoicesStyles>
);

const InvoiceListing = ({ data }) => {
  let displayName;
  const { user } = data;

  if (user.company) {
    displayName = user.company;
  } else if (user.firstName && user.lastName) {
    displayName = `${user.firstName} ${user.lastName}`;
  } else if (user.firstName) {
    displayName = user.firstName;
  }

  return (
    <Link href={`/account/invoice?id=${data.id}`}>
      <a className="trow">
        <div className="tcell customer">
          <div>{displayName}</div>
        </div>
        <div className="tcell date-ordered">
          <div>{dateFns.format(data.createdAt, 'MM-DD-YY')}</div>
        </div>
        <div className="tcell date-ordered">
          <div>
            {data.pickupDate && dateFns.format(data.pickupDate, 'MM-DD-YY')}
          </div>
        </div>
        <div className="tcell skus">
          <div>{data.items.length}</div>
        </div>
        <div className="tcell total-cost">
          <div>{formatMoney(data.total)}</div>
        </div>
        <div className="tcell status">
          <div
            className="invoice-status"
            data-status={data.status.toLowerCase()}
          >
            {data.status.toLowerCase()}
          </div>
        </div>
      </a>
    </Link>
  );
};

InvoiceListing.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired,
    pickupDate: PropTypes.string,
    deliveryDate: PropTypes.string,
    status: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
  }).isRequired,
};

export default Invoices;
