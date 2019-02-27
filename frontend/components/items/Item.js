import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { ItemStyles } from './styles/ItemStyles';
import { formatMoney } from '../../lib/money';
import formatDate from '../../lib/formatDate';
import AddToCart from './AddToCart';
import Me from '../auth/Me';

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const {
      id,
      brand,
      title,
      size,
      unitsPerCase,
      uom,
      expDate,
      price,
      casesAvailable,
      image,
    } = this.props.item;

    const pricePerUnit = price && unitsPerCase && price / unitsPerCase;

    return (
      <Me>
        {({ data: { me } }) => (
          <ItemStyles
            className={casesAvailable === 0 ? 'zero-cases' : ''}
            data-can-order={me.canOrder}
          >
            <div className="item">
              <div className="image-container">
                <img src={image} alt={title} />
              </div>
              <div className="item-information">
                <Link href={`/item?id=${id}`}>
                  <a className="card-title">
                    {brand && brand} {title}
                  </a>
                </Link>
                <span>
                  {unitsPerCase && size && uom && (
                    <span>
                      <p className="bold-text">Size&nbsp;</p>
                      <p>
                        {unitsPerCase}/{size} {uom}
                      </p>
                      &nbsp;&nbsp;
                    </span>
                  )}
                  <span>
                    <p className="bold-text">Exp. Date&nbsp;</p>
                    {expDate ? formatDate(expDate) : 'N/A'}
                  </span>
                </span>

                <span>
                  <p className="bold-text">Price&nbsp;</p>
                  <p className="price">{formatMoney(price)}&nbsp;</p>
                  {unitsPerCase && price && (
                    <p className="price price-per">
                      ({formatMoney(pricePerUnit)}/unit)
                    </p>
                  )}
                </span>

                <span className="cases">
                  <p className="bold-text">Cases Available&nbsp;</p>
                  <p className="cases-num">
                    {casesAvailable ? casesAvailable : 0}
                  </p>
                </span>
              </div>
            </div>
            {me.canOrder && (
              <AddToCart
                id={id}
                casesAvailable={casesAvailable}
                cart={me.cart}
              />
            )}
          </ItemStyles>
        )}
      </Me>
    );
  }
}

export default Item;
