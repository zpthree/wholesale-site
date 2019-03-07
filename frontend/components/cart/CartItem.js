import PropTypes from 'prop-types';
import { formatMoney } from '../../lib/money';
import CartItemStyles from './styles/CartItemStyles';
import RemoveButton from './RemoveFromCart';

const CartItem = ({ cartItem }) => {
  const { item } = cartItem;
  console.log(cartItem);
  if (!item)
    return (
      <CartItemStyles>
        <div className="cart-item-image" />
        <div className="cart-item-info"><h5>Item is no longer available.</h5></div>
        <div className="cart-item-right">
        <p className="cart-item-total-cost">
          {/* comment */}
          {/* another comment */}
        </p>
      </div>
      </CartItemStyles>
    );

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
        <br />
        <RemoveButton id={cartItem.id} />
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
