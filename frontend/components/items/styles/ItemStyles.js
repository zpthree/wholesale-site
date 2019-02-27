import styled from 'styled-components';
import { relative } from 'path';

export const ItemStyles = styled.div`
  position: relative;
  width: 100%;
  background: #fff;
  margin: 0 auto 1rem;
  padding: 0;
  max-width: 45rem;
  box-shadow: 0 0 0.2rem 0.2rem rgba(0, 0, 0, 0.075);

  h2,
  h5,
  p {
    margin: 0 !important;
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

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100% - 9rem);
  }

  /* will apply to add-to-cart input as well as admin option inputs */
  input {
    outline: none;
    border: 0.1rem solid #dedede;
    height: 3.2rem;
    width: 4rem;
    padding: 0.5rem;
    margin: 0;
    border-radius: 0.3rem;
    font-size: 1.4rem;
    text-align: center;
  }

  /* Media Queries */
  @media print {
    width: calc((8.5in / 3) - 20px);
    height: calc((11in / 3) - 0.2in);
    margin-bottom: 1rem;

    &:not(:nth-child(3n + 0)) {
      margin-right: 1rem;
    }

    p,
    span {
      font-size: 12pt !important;
    }
  }

  @media screen and (min-width: 768px) {
    width: calc(50% - 10px);
    border-radius: 0.2rem;
    margin: 0 0 2rem;
    height: 50rem;

    span {
      display: flex;
      align-items: center;
    }

    &:not(:nth-child(2n + 0)) {
      margin-right: 2rem;
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

  .image-container {
    margin: auto 3.5rem auto 1rem;
    width: 7rem;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    height: 18rem;

    @media print {
      height: 18rem;
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      height: 22rem;
      width: 100%;
      margin: 0;
    }

    img {
      max-width: 16rem;
      max-height: 16rem;

      @media print {
        max-width: 10rem;
        max-height: 10rem;
      }

      @media screen and (min-width: 768px) {
        max-width: 18rem;
        max-height: 18rem;
      }
    }
  }

  .item-information {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;

    > span {
      margin-bottom: 1rem;
    }

    .card-title {
      color: ${props => props.theme.red};
      font-weight: 700;
      padding: 0;
      margin: 0 0 0.5rem;
      cursor: pointer;
      font-size: 1.8rem;
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
  }

  /* Add to Cart Styles */
  .add-to-cart {
    margin: 0;
    padding: 0;
    width: 100%;
    background: ${props => props.theme.offwhite};
    height: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    fieldset {
      border: 0;
      margin: 0;
      text-align: center;
      width: 100%;
      display: flex;
      align-items: center;

      &[disabled] {
        opacity: 0.5;

        &,
        & input,
        & button {
          cursor: not-allowed;
        }
      }

      &[aria-busy='true'] {
        opacity: 0.5;

        &,
        & input,
        & button {
          cursor: wait;
        }
      }
    }

    @media print {
      display: none;
    }

    p,
    span {
      color: ${props => props.theme.green};
      font-weight: 700;
    }

    input {
      width: 5rem;
    }

    button {
      margin: 0 0 0 1.5rem;
      height: 3rem;
      padding: 0.5rem 1.5rem;
      font-weight: 500;
    }

    .in-cart-message {
      color: ${props => props.theme.red};
      text-align: center;
      font-weight: 400;
      text-decoration: none;
      margin-top: 5px;
      margin-bottom: -10px;
    }

    &-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }

  /* Items with zero cases available */
  /* These styles are applied to the .item class */
  &.zero-cases {
    background: rgba(152, 39, 43, 0.25);

    .cases-num {
      font-weight: 700;
      color: #f00;
    }

    .add-to-cart {
      background: rgba(152, 39, 43, 0.4);

      button {
        background: rgba(152, 39, 43, 0.25);
      }
    }
  }
`;
