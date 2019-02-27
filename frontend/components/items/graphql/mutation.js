import gql from 'graphql-tag';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!, $quantity: Int) {
    addToCart(id: $id, quantity: $quantity) {
      id
      quantity
    }
  }
`;

export { ADD_TO_CART_MUTATION };
