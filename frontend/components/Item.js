import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { ItemStyles } from './styles/ItemStyles';
import Btn from './styles/Btn';
import formatMoney from '../lib/formatMoney';
import formatDate from '../lib/formatDate';

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
      <ItemStyles className={casesAvailable === 0 ? 'zero-cases' : ''}>
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
              <p className="cases-num">{casesAvailable ? casesAvailable : 0}</p>
            </span>
          </div>
        </div>
        <form method="post" autoComplete="off" className="add-to-cart">
          <fieldset
            disabled={casesAvailable === 0}
            aria-busy={casesAvailable === 0}
          >
            <div className="add-to-cart-inner">
              <input type="number" name="cartNum" />
              <Btn type="submit">Add to Cart</Btn>
            </div>
          </fieldset>
        </form>
      </ItemStyles>
    );
  }
}

export default Item;
