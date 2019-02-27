import CartPageStyles from './styles/CartPageStyles';
import Me from '../auth/Me';
import Btn from '../_styles/Btn';
import formatMoney from '../../lib/formatMoney';

const Cart = () => {
  return (
    <Me>
      {({ data: { me } }) => {
        if (!me) return null;

        return (
          <CartPageStyles>
            <div className="cart-items">
              {me.cart.map(cartItem => {
                const { item } = cartItem;
                return (
                  <div className="cart-item" key={cartItem.id}>
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
                  </div>
                );
              })}
            </div>
            <aside className="cart-info-container">
              <form action="post">
                <div className="cart-info">
                  {/* TODO: add user dropdown menu */}
                  <div className="cart-total-cost-container">
                    <h5>Cart Information</h5>
                    <div className="cart-info-row">
                      <p>Different SKUs</p>
                      {me.cart.length}
                    </div>
                    <div className="cart-info-row">
                      <p>Total Items</p>
                      300
                    </div>
                    <div className="cart-info-row">
                      <p>Cost per Unit</p>
                      {formatMoney(423)}
                    </div>
                    <div className="cart-info-row cart-total-cost">
                      <p>Total Cost</p>
                      {formatMoney(98347)}
                    </div>
                    <Btn type="submit">Submit Order</Btn>
                  </div>
                </div>
              </form>
            </aside>
          </CartPageStyles>
        );
      }}
    </Me>
  );
};

export default Cart;
