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

export { ALL_USERS_QUERY };
