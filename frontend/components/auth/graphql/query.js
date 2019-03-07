import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    me {
      id
      firstName
      lastName
      company
      email
      address
      phone
      username
      permissions
      canOrder
      active
      cart {
        id
        quantity
        item {
          id
          department
          barcode
          brand
          title
          cases
          unitsPerCase
          size
          uom
          price
          discountQty
          image
        }
      }
    }
  }
`;

export { CURRENT_USER_QUERY };
