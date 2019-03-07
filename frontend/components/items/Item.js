import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { ItemStyles } from './styles/ItemStyles';
import { formatMoney } from '../../lib/money';
import formatDate from '../../lib/formatDate';
import AddToCart from './AddToCart';
import Me from '../auth/Me';
import ItemOptions from './ItemOptions';

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;

    const pricePerUnit =
      item.price && item.unitsPerCase && item.price / item.unitsPerCase;

    return (
      <Me>
        {({ data: { me } }) => (
          <ItemStyles
            className={item.cases === 0 ? 'zero-cases' : ''}
            data-can-order={me.canOrder}
          >
            <ItemOptions id={item.id} />
            <div className="item">
              <div className="image-container">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="item-information">
                <Link href={`/item?id=${item.id}`}>
                  <a className="card-title">
                    {item.brand && item.brand} {item.title}
                  </a>
                </Link>
                <span>
                  {item.unitsPerCase && item.size && item.uom && (
                    <span>
                      <p className="bold-text">Size&nbsp;</p>
                      <p>
                        {item.unitsPerCase}/{item.size} {item.uom}
                      </p>
                      &nbsp;&nbsp;
                    </span>
                  )}
                  <span>
                    <p className="bold-text">Exp. Date&nbsp;</p>
                    {item.expiry ? formatDate(item.expiry) : 'N/A'}
                  </span>
                </span>

                <span>
                  <p className="bold-text">Price&nbsp;</p>
                  <p className="price">{formatMoney(item.price)}&nbsp;</p>
                  {item.unitsPerCase && item.price && (
                    <p className="price price-per">
                      ({formatMoney(pricePerUnit)}/item.unit)
                    </p>
                  )}
                </span>

                <span className="cases">
                  <p className="bold-text">Cases Available&nbsp;</p>
                  <p className="cases-num">{item.cases ? item.cases : 0}</p>
                </span>
              </div>
            </div>
            {me.canOrder && (
              <AddToCart id={item.id} cases={item.cases} cart={me.cart} />
            )}
          </ItemStyles>
        )}
      </Me>
    );
  }
}

export default Item;
