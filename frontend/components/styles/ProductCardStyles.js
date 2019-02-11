import styled from 'styled-components';

export const ProductCardStyles = styled.div`
  position: relative;
  width: 100%;
  background: #fff;
  margin: 0 auto 10px;
  max-width: 450px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.075);

  /* Element Styles */
  h2,
  h5,
  p {
    margin: 0;
    padding: 0;
  }

  p {
    display: inline-block;
  }

  a {
    color: ${props => props.theme.red};

    @media screen and (min-width: 768px) {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  /* Card Content Styles */
  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100% - 90px);
  }

  /* Media Queries */
  @media print {
    width: calc((8.5in / 3) - 20px);
    height: calc((11in / 3) - 0.2in);
    margin-bottom: 10px;
    &:not(:nth-child(3n + 0)) {
      margin-right: 10px;
    }

    p,
    span {
      font-size: 12pt !important;
    }
  }

  @media screen and (min-width: 768px) {
    width: calc(50% - 10px);
    border-radius: 2px;
    margin: 0 0 20px;
    height: 500px;

    span {
      display: flex;
      align-items: center;
    }

    &:not(:nth-child(2n + 0)) {
      margin-right: 20px;
    }
  }

  @media screen and (min-width: 990px) {
    width: calc(33.33333% - 15px);
    margin: 0 0 20px;

    &:not(:nth-child(2n + 0)) {
      margin-right: 0;
    }

    &:not(:nth-child(3n + 0)) {
      margin-right: 20px;
    }
  }
`;

export const ProductCardImage = styled.div`
  margin: auto 35px auto 10px;
  width: 70px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 180px;

  @media print {
    height: 180px;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    height: 220px;
    width: 100%;
    margin: 0;
  }

  img {
    max-width: 160px;
    max-height: 160px;

    @media print {
      max-width: 100px;
      max-height: 100px;
    }

    @media screen and (min-width: 768px) {
      max-width: 180px;
      max-height: 180px;
    }
  }
`;

export const ProductCardInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  > span {
    margin-bottom: 10px;
  }

  .card-title {
    color: ${props => props.theme.red};
    font-weight: 700;
    padding: 0;
    margin: 0 0 5px;
    cursor: pointer;
    font-size: 1.8rem;
  }

  input {
    outline: none;
    border: 1px solid #dedede;
    height: 32px;
    width: 40px;
    padding: 5px;
    margin: 0;
    border-radius: 3px;
    font-size: 0.75rem;
    text-align: center;
  }

  .bold-text,
  .price {
    font-weight: 700;
  }

  .price {
    color: ${props => props.theme.green};
  }

  .price-per-unit {
    font-size: 0.9em;
  }
`;

export const ProductCardAddToCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.offwhite};
  height: 90px;
  position: relative;

  &.overlay {
    display: none;
  }

  @media print {
    display: none;
  }

  .add-to-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7.5px 0 0;

    p,
    span {
      color: ${props => props.theme.green};
      font-weight: 700;
    }

    input {
      outline: none;
      border: 1px solid #dedede;
      height: 32px;
      width: 40px;
      padding: 5px;
      margin: 0;
      border-radius: 3px;
      font-size: 0.75rem;
      text-align: center;
    }

    button {
      margin: 0 0 0 15px;
      height: 30px;
      padding: 5px 15px;
      font-weight: 500;
    }
  }
`;
