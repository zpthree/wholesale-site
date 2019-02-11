import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ProductCardStyles,
  ProductCardImage,
  ProductCardInformation,
  ProductCardAddToCart,
} from './styles/ProductCardStyles';
import Btn from './styles/Btn';
import formatMoney from '../lib/formatMoney';
import formatDate from '../lib/formatDate';

class ProductCard extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  };

  render() {
    const {
      brand,
      title,
      size,
      unitsPerCase,
      UOM,
      expDate,
      price,
      casesAvailable,
    } = this.props.product;

    const pricePerUnit = price && unitsPerCase && price / unitsPerCase;

    return (
      <ProductCardStyles>
        <div className="card-content">
          <ProductCardImage />
          <ProductCardInformation>
            <p className="card-title">
              {brand && brand} {title}
            </p>
            <span>
              {unitsPerCase && size && UOM && (
                <>
                  <p className="bold-text">Size&nbsp;</p>
                  <p>
                    {unitsPerCase}/{size} {UOM}
                  </p>
                </>
              )}
              <span>
                &nbsp;&nbsp;
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
          </ProductCardInformation>
        </div>
        <ProductCardAddToCart>
          <div className="overlay" title="Unable to order" />
          <form className="add-to-cart" method="post" autoComplete="off">
            <input type="number" name="cartNum" />
            <Btn type="submit">Add to Cart</Btn>
          </form>
        </ProductCardAddToCart>
      </ProductCardStyles>
    );
  }
}

export default ProductCard;
