import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import Link from 'next/link';
import Btn from '../_styles/Btn';
import { CURRENT_USER_QUERY } from '../auth/graphql/query';
import { ADD_TO_CART_MUTATION } from './graphql/mutation';

class AddToCart extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    cases: PropTypes.number.isRequired,
    cart: PropTypes.array.isRequired,
  };

  state = {
    orderQuantity: '',
    cartId: '',
  };

  inCartTotal = () => {
    const [item] = this.props.cart.filter(
      cartItem => cartItem.item && cartItem.item.id === this.props.id
    );

    if (item) {
      return item.quantity;
    }

    return null;
  };

  render() {
    const { id, cases } = this.props;
    const inCart = this.inCartTotal();

    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{ id, quantity: parseInt(this.state.orderQuantity) }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(addToCart, { loading, error }) => (
          <form
            method="post"
            autoComplete="off"
            className="add-to-cart"
            onSubmit={async e => {
              const form = e.target;
              e.preventDefault();
              await addToCart();
              await this.setState({ orderQuantity: '' });
              form.querySelector('button').blur();
            }}
          >
            <fieldset disabled={cases === 0} aria-busy={loading}>
              <div className="add-to-cart-inner">
                <input
                  type="number"
                  name="cartNum"
                  value={this.state.orderQuantity}
                  onChange={e => {
                    this.setState({
                      orderQuantity: e.target.value,
                    });
                  }}
                />
                <Btn type="submit">
                  Add{loading ? `ing ${this.state.orderQuantity}` : ''} to Cart
                </Btn>
              </div>

              {inCart ? (
                <Link href="/cart">
                  <a className="in-cart-message">{inCart} in your cart</a>
                </Link>
              ) : null}
            </fieldset>
          </form>
        )}
      </Mutation>
    );
  }
}

export default AddToCart;
