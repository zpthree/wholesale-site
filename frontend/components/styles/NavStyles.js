import styled from 'styled-components';

const NavStyles = styled.nav`
  width: 100%;
  min-width: 600px;
  max-width: 900px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100%;

  a {
    height: 40px;
    padding: 0;
    margin: 0;
    border-radius: 3px;
    display: flex;
    align-items: center;
    height: 100%;
    font-weight: 400;
    position: relative;
    color: ${props => props.theme.white};
    padding: 20px 20px;

    &:not(.weekly-ad) {
      &:hover {
        background: ${props => props.theme.darkred};
      }
    }

    &.on {
      background: ${props => props.theme.darkred};
    }

    .alert-badge {
      position: static;
      border-radius: 50%;
      background: ${props => props.theme.green};
      height: 28px;
      width: 28px;
      margin: 0 0 0 10px;
      padding: 2.5px 0 0;
      font-size: 0.75rem;
    }
  }
`;

export default NavStyles;
