import PropTypes from 'prop-types';
import { formatMoney } from '../../lib/money';
import CartItemStyles from './styles/CartItemStyles';

const CartItem = ({ cartItem }) => {
  const { item } = cartItem;

  return (
    <CartItemStyles key={cartItem.id}>
      <div className="cart-item-image">
        <img src={item.image} alt="" />
      </div>
      <div className="cart-item-info">
        <h5 className="cart-item-title">{item.title}</h5>
        <p>
          {item.unitsPerCase &&
            item.size &&
            item.uom &&
            `${item.unitsPerCase} / ${item.size} ${item.uom}`}
        </p>
        <p className="item-cost">{formatMoney(item.price)}</p>
      </div>
      <div className="cart-item-right">
        <p className="cart-item-total-cost">
          {/* comment */}
          {/* another comment */}
        </p>
      </div>
    </CartItemStyles>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
};

export default CartItem;
