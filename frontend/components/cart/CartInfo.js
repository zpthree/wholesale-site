import PropTypes from 'prop-types';
import CartInfoStyles from './styles/CartInfoStyles';
import Btn from '../_styles/Btn';
import { formatMoney, calcTotalPrice, calcAveragePrice } from '../../lib/money';

const CartInfo = ({ cart }) => (
  <CartInfoStyles>
    <form action="post">
      <div className="cart-info">
        {/* TODO: add user dropdown menu */}
        <div className="cart-total-cost-container">
          <h5>Cart Information</h5>
          <div className="cart-info-row">
            <p>Different SKUs</p>
            {cart.length}
          </div>
          <div className="cart-info-row">
            <p>Total Items</p>
            {cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}
          </div>
          <div className="cart-info-row">
            <p>Cost per Unit</p>
            {formatMoney(calcAveragePrice(cart))}
          </div>
          <div className="cart-info-row cart-total-cost">
            <p>Total Cost</p>
            {formatMoney(calcTotalPrice(cart))}
          </div>
          <Btn type="submit">Submit Order</Btn>
        </div>
      </div>
    </form>
  </CartInfoStyles>
);

CartInfo.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default CartInfo;
