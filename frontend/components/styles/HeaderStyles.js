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

  /* &,
  & > * {
    ${props => props.page === 'LoginPage' && 'display: none !important'};
  } */

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
