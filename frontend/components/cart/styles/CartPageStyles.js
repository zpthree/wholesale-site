import styled from 'styled-components';

const CartPageStyles = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 10px 100px;
  }

  /* TODO: fix widths for all viewports */
  .cart-items {
    width: 100%;
    order: 2;
    border: 1px solid #eee;

    @media screen and (min-width: 768px) {
      width: 60%;
      order: 1;
      margin-right: 35px;
    }

    @media screen and (min-width: 990px) {
      width: 65%;
    }

    @media screen and (min-width: 1200px) {
      width: calc(100% - 370px);
      margin-right: 50px;
    }

    h4 {
      margin: 0 0 25px;
    }
  }

  .cart-item {
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

    &-right {
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

    &-info {
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

  .cart-info-container {
    order: 1;
    margin-top: 0;
    position: relative;
    width: 100%;
    height: 20px;

    @media screen and (min-width: 768px) {
      width: calc(40% - 35px);
      /* margin-top: 20px; */
      order: 2;
    }

    @media screen and (min-width: 990px) {
      width: calc(35% - 35px);
    }

    @media screen and (min-width: 1200px) {
      width: 320px;
    }

      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        position: fixed;
        width: inherit;
      }

    .cart-info {
      width: 100%;
    }

    .cart-info-row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      p {
        margin: 0;
      }
    }

    h6 {
      margin-bottom: 20px;
      text-align: center;
    }

    .cart-customer-list {
      padding: 20px;
      background: ${props => props.theme.offwhite};
      margin-bottom: 7.5px;
      border-radius: 3px;

      select {
        height: 100%;
        width: 100%;
        margin: 0;
      }
    }

    .cart-total-cost-container {
      display: flex;
      flex-direction: column;
      /* background: ${props => props.theme.offwhite}; */
      border: 1px solid ${props => props.theme.offwhite};
      padding: 25px 20px 30px;
      border-radius: 2px;

      .cart-numbers {
        color: ${props => props.theme.black};
        text-align: right;
        background: inherit;
        font-weight: 400;
        width: 100px;
        padding: 0;
        margin: 0;
      }

      .cart-total-cost {
        margin-top: 5px;
        padding-top: 15px;
        border-top: 1px solid ${props => props.theme.offwhite};

        .cart-numbers {
          color: ${props => props.theme.green};
        }
      }
    }
  }
`;

export default CartPageStyles;
