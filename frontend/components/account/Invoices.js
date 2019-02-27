import Router from 'next/router';
import dateFns from 'date-fns';
import InvoicesStyles from './styles/InvoicesStyles';
import Table from '../_styles/Table';
import formatMoney from '../../lib/formatMoney';
import { invoices } from '../../data';

const Invoices = () => (
  <InvoicesStyles>
    <div className="account-header">
      <h4>Invoices</h4>
    </div>
    <Table>
      <div className="trow thead">
        <th className="tcell customer">Customer</th>
        <th className="tcell date-ordered text-center">Issued Date</th>
        <th className="tcell date-ordered text-center">Pickup/Delivery Date</th>
        <th className="tcell skus text-center">SKUs</th>
        <th className="tcell total-cost text-center">Amount</th>
        <th className="tcell status text-center">Status</th>
      </div>

      {invoices.map(invoice => {
        const {
          id,
          customer,
          dateOrdered,
          pickupDateTime,
          itemsOrdered,
          totalCost,
          status,
        } = invoice;
        let displayName;

        if (customer.company) {
          displayName = customer.company;
        } else if (customer.firstName && customer.lastName) {
          displayName = customer.firstName + ' ' + customer.lastName;
        } else if (customer.firstName) {
          displayName = customer.firstName;
        }

        return (
          <div
            key={invoice.id}
            className="trow"
            onClick={() => Router.push(`/invoice?id=${id}`)}
          >
            <div className="tcell customer">
              <div>{displayName}</div>
            </div>
            <div className="tcell date-ordered">
              <div>{dateFns.format(dateOrdered, 'MM-DD-YY')}</div>
            </div>
            <div className="tcell date-ordered">
              <div>
                {pickupDateTime && dateFns.format(pickupDateTime, 'MM-DD-YY')}
              </div>
            </div>
            <div className="tcell skus">
              <div>{itemsOrdered}</div>
            </div>
            <div className="tcell total-cost">
              <div>{formatMoney(totalCost)}</div>
            </div>
            <div className="tcell status">
              <div
                className="invoice-status"
                data-status={status.toLowerCase()}
              >
                {status.toLowerCase()}
              </div>
            </div>
          </div>
        );
      })}
    </Table>
  </InvoicesStyles>
);

export default Invoices;
