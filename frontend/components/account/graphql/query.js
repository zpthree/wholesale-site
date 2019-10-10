import gql from 'graphql-tag';

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
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
    }
  }
`;

const ALL_INVOICES_QUERY = gql`
  query ALL_INVOICES_QUERY {
    invoices(first: 25) {
      user {
        firstName
        lastName
        company
      }
      items {
        id
      }
      createdAt
      updatedAt
      pickupDate
      deliveryDate
      total
      id
      status
    }
  }
`;

const SINGLE_INVOICE_QUERY = gql`
  query SINGLE_INVOICE_QUERY($id: ID!) {
    invoice(where: { id: $id }) {
      id
      user {
        firstName
        lastName
        company
      }
      total
      pickupDate
      deliveryDate
      createdAt
      status
      items {
        department
        brand
        title
        unitsPerCase
        size
        uom
        price
        cases
      }
    }
  }
`;

export { ALL_USERS_QUERY, ALL_INVOICES_QUERY, SINGLE_INVOICE_QUERY };
