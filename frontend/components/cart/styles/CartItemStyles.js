import styled from 'styled-components';

const CartItemStyles = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 auto !important;

  @media screen and (min-width: 768px) {
    height: 150px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }

  p {
    margin: 0 0 5px !important;
    display: inline;
  }

  &:not(:last-child) {
    margin-bottom: 1px;
  }

  .cart-item-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    max-width: 100px;
    height: 100%;
    padding: 20px;
    border-left: 1px solid #eee;
    position: relative;

    &.isReceivingDiscount {
      .receiving-discount-icon {
        @media screen and (min-width: 768px) {
          display: block;
        }
      }
    }

    .cart-item-cost {
      margin: 0 0 5px;
      text-align: center;
      color: ${props => props.theme.green};
      font-weight: 600;
    }

    input {
      height: 30px;
      width: 45px;
      padding: 5px;
      text-align: center;
    }

    .cart-delete {
      font-weight: 400;
      cursor: pointer;
      padding: 0;
      margin: -5px 0 0;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .cart-item-info {
    width: calc(100% - 100px);
    padding: 20px 0 20px 20px;

    @media screen and (min-width: 768px) {
      width: calc(100% - 200px);
      padding: 20px 0;
    }

    .item-title {
      color: ${props => props.theme.red};
      margin: 0;
      display: block;
      cursor: pointer;
      font-weight: 400;

      .is-discounted-text {
        font-weight: 700;
        color: ${props => props.theme.green};

        @media screen and (min-width: 768px) {
          display: none;
        }
      }
    }

    .cart-item-cost {
      margin: 0 0 5px;
      text-align: center;
      color: ${props => props.theme.green};
    }
  }

  .cart-item-image {
    display: none;

    @media screen and (min-width: 768px) {
      margin: 0 15px 0 0;
      padding: 20px 15px;
      min-width: 150px;
      max-width: 150px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #eee;
    }

    img {
      max-width: 120px;
      max-height: 100%;
      margin: 0;
    }
  }
`;

export default CartItemStyles;
