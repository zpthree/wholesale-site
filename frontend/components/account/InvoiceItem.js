import React from 'react';
import PropTypes from 'prop-types';
import InvoiceItemStyles from './styles/InvoiceItemStyles';
import { formatMoney } from '../../lib/money';

const InvoiceItem = ({ item }) => (
  <InvoiceItemStyles>
    <p className="description">
      {item.brand && item.brand} {item.title}
    </p>
    <p className="location">{item.location}</p>
    <p className="qty">{item.cases}</p>
    <p className="price">{formatMoney(item.price)}</p>
    <p className="total-cost">{formatMoney(item.price * item.cases)}</p>
  </InvoiceItemStyles>
);

InvoiceItem.propTypes = {
  item: PropTypes.shape({
    department: PropTypes.string.isRequired,
    brand: PropTypes.string,
    title: PropTypes.string.isRequired,
    cases: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    size: PropTypes.number,
    unitsPerCase: PropTypes.number,
    uom: PropTypes.string,
  }).isRequired,
};

export default InvoiceItem;
