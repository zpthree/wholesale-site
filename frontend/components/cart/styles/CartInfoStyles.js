import styled from 'styled-components';

const CartInfoStyles = styled.aside`
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
`;

export default CartInfoStyles;
