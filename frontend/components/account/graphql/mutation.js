import gql from 'graphql-tag';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $department: String!
    $barcode: String
    $brand: String
    $title: String
    $location: String
    $cases: Int!
    $buyingLimit: Int
    $casesPerSkid: Int
    $casesPerRow: Int
    $unitsPerCase: Float
    $size: Float
    $uom: String
    $price: Int!
    $discountPrice: Int
    $discountQty: Int
    $expiry: String
    $comments: String
    $image: String
    $largeImage: String
    $status: ItemStatus!
  ) {
    createItem(
      data: {
        barcode: $barcode
        brand: $brand
        title: $title
        department: $department
        unitsPerCase: $unitsPerCase
        size: $size
        uom: $uom
        price: $price
        discountPrice: $discountPrice
        discountQty: $discountQty
        location: $location
        cases: $cases
        buyingLimit: $buyingLimit
        casesPerRow: $casesPerRow
        casesPerSkid: $casesPerSkid
        expiry: $expiry
        comments: $comments
        image: $image
        largeImage: $largeImage
        status: $status
      }
    ) {
      id
    }
  }
`;

const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION(
    $firstName: String!
    $lastName: String
    $company: String
    $email: String
    $address: String
    $phone: String
    $username: String!
    $password: String!
    $permissions: Permission!
    $canOrder: Boolean!
  ) {
    createUser(
      data: {
        firstName: $firstName
        lastName: $lastName
        company: $company
        email: $email
        address: $address
        phone: $phone
        username: $username
        password: $password
        permissions: $permissions
        canOrder: $canOrder
        active: true
      }
    ) {
      id
    }
  }
`;

export { CREATE_ITEM_MUTATION, CREATE_USER_MUTATION };
