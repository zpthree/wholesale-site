import gql from 'graphql-tag';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      department
      barcode
      brand
      title
      location
      cases
      buyingLimit
      casesPerSkid
      casesPerRow
      unitsPerCase
      size
      uom
      price
      discountPrice
      discountQty
      createdAt
      updatedAt
      expiry
      comments
      largeImage
    }
  }
`;

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $perPage: Int, $dept: String) {
    items(
      where: { department_contains: $dept }
      first: $perPage
      skip: $skip
      orderBy: createdAt_DESC
    ) {
      id
      department
      barcode
      brand
      title
      cases
      buyingLimit
      casesPerSkid
      casesPerRow
      unitsPerCase
      size
      uom
      price
      discountQty
      image
    }
  }
`;

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY($dept: String) {
    itemsConnection(where: { department_contains: $dept }) {
      aggregate {
        count
      }
    }
  }
`;

export { SINGLE_ITEM_QUERY, ALL_ITEMS_QUERY, PAGINATION_QUERY };
