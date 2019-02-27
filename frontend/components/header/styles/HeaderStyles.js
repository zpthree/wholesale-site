import styled from 'styled-components';

export const HeaderStyles = styled.div`
  background: ${props => props.theme.red};
  color: ${props => props.theme.white};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 110px;
  z-index: 1000;

  /* &#login-page {
    display: none;
  } */

  #dropdownMenuBtn {
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;

    svg {
      height: 3.5rem;
      width: 3.5rem;
      fill: #fff;
    }
  }

  #dropdownMenuContainer {
    position: relative;
    height: 4.5rem;
  }

  .header-inner {
    height: 70px;
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;

    a {
      color: ${props => props.theme.white};
    }
  }

  .header-top-container {
    width: 100%;
    background: ${props => props.theme.darkred};
  }

  .header-top {
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    margin: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 40px;
    padding: 0 0 0 20px;

    > div > div {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 20px;
      border-right: 1px solid ${props => props.theme.lightred};

      &:first-child {
        border-left: 1px solid ${props => props.theme.lightred};
      }
    }

    span {
      font-size: 0.8em;
    }

    /* log in */
    .log-in {
      font-size: 0.8rem;
      color: ${props => props.theme.white};
      font-weight: 400;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .header-contact {
    display: flex;
    align-items: center;

    .fa-phone,
    .fa-fax {
      width: 16px;
      margin-right: 10px;
      fill: ${props => props.theme.white};
    }
  }

  .shopping-cart {
    height: 25px;
    /* border-left: 1px solid ${props => props.theme.lightred}; */
    position: relative;
    padding: 0 30px 0 25px;
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .fa-shopping-cart {
      margin-top: 2px;
      width: 22px;
      fill: ${props => props.theme.white};
    }
  }
`;
