import styled from 'styled-components';

export const HeaderStyles = styled.div`
  background: ${props => props.theme.red};
  color: ${props => props.theme.white};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  z-index: 1000;

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
    padding: 0 15px;

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

  .header-right {
    display: flex;
    align-items: center;
    height: 100%;
  }

  #dropdownMenuContainer {
    position: relative;
    margin-right: 10px;
  }

  #dropdownMenuBtn {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #notifications.new-alert {
    background: ${props => props.theme.white};

    svg {
      fill: ${props => props.theme.lightgreen};
    }
  }

  .icon-bubble,
  #dropdownMenuBtn {
    border-radius: 50%;
    background: #791f22;
    height: 37.5px;
    width: 37.5px;
    transition: background 0.15s ease-in-out;

    &:hover {
      background: #6a1b1e;
    }

    button {
      background: transparent;
      height: 37.5px;
      width: 37.5px;
      padding: 1em;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      height: 1.7rem;
      width: 1.7rem;
      fill: ${props => props.theme.white};
    }
  }

  .icon-bubble {
    &:not(:last-child) {
      margin-right: 10px;
    }
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

  .shopping-cart {
    a {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
`;
