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
`;

export default CartPageStyles;
