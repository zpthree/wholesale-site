import React, { Component } from 'react';
import CartPageStyles from './styles/CartPageStyles';
import Me from '../auth/Me';
import CartItem from './CartItem';
import CartInfo from './CartInfo';

class Cart extends Component {
  componentDidMount() {
    document.querySelector('#cart button').blur();
  }

  render() {
    return (
      <Me>
        {({ data: { me } }) => {
          if (!me) return null;

          return (
            <CartPageStyles>
              <div className="cart-items">
                {me.cart.map(cartItem => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </div>
              <CartInfo cart={me.cart} />
            </CartPageStyles>
          );
        }}
      </Me>
    );
  }
}

export default Cart;
