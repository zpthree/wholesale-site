import gql from 'graphql-tag';

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!, $quantity: Int) {
    addToCart(id: $id, quantity: $quantity) {
      id
      quantity
    }
  }
`;

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
      department
    }
  }
`;

export { ADD_TO_CART_MUTATION, DELETE_ITEM_MUTATION };
