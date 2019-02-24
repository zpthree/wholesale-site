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
    height: 100%;
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
`;
