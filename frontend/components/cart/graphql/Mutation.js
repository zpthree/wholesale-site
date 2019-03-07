import gql from 'graphql-tag';

const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

const CREATE_INVOICE_MUTATION = gql`
  mutation CREATE_INVOICE_MUTATION {
    createInvoice {
      id
      total
      items {
        id
        title
      }
    }
  }
`;

export { REMOVE_FROM_CART_MUTATION, CREATE_INVOICE_MUTATION };
