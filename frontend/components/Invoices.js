import Router from 'next/router';
import dateFns from 'date-fns';
import InvoicesStyles from './styles/InvoicesStyles';
import Table from './styles/Table';
import formatMoney from '../lib/formatMoney';
import { invoices } from '../data';

const Invoices = () => (
  <InvoicesStyles>
    <div className="account-header">
      <h4>Invoices</h4>
    </div>
    <Table>
      <tbody className="account-page-invoices-container">
        <tr className="header">
          <th className="customer">Customer</th>
          <th className="text-center">Issued Date</th>
          <th className="text-center">Pickup/Delivery Date</th>
          <th className="text-center">SKUs</th>
          <th className="text-center">Amount</th>
          <th className="text-center">Status</th>
        </tr>

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
            <tr
              key={invoice.id}
              className="row"
              onClick={() => Router.push(`/invoice?id=${id}`)}
            >
              <td className="customer">{displayName}</td>
              <td className="text-center">
                {dateFns.format(dateOrdered, 'MM-DD-YY')}
              </td>
              <td className="text-center">
                {pickupDateTime && dateFns.format(pickupDateTime, 'MM-DD-YY')}
              </td>
              <td className="text-center">{itemsOrdered}</td>
              <td className="text-center">{formatMoney(totalCost)}</td>
              <td className="text-center status">
                <span className={status.toLowerCase()}>
                  {status.toLowerCase()}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  </InvoicesStyles>
);

export default Invoices;
