import styled from 'styled-components';

const UserDropdownStyles = styled.div`
  position: absolute;
  width: 190px;
  height: 400px;
  top: 50px;
  left: -105px;

  .fa-caret-up {
    width: 22px;
    position: absolute;
    top: -22px;
    left: 148px;

    path {
      fill: ${props => props.theme.white};
    }
  }

  .dropdown-menu-header {
    padding: 10px;
    color: ${props => props.theme.red};
    text-align: center;
  }

  ul {
    min-width: 0;
    background: white;
    width: 100%;
    flex-direction: column;
    padding: 0 0 2px;
    margin: 0;
    border-radius: 3px;
    box-shadow: -2px 3px 10px rgba(0, 0, 0, 0.09),
      2px 3px 10px rgba(0, 0, 0, 0.09);
    list-style: none;
  }

  li {
    cursor: pointer;
    width: 100%;
    margin: 0;
    text-align: left;
  }

  li button {
    background: inherit;
    border: none;
    outline: none;
    line-height: 1.35;
    font-size: 1.6rem;
  }

  li a,
  li button {
    display: block;
    width: 100%;
    height: 100%;
    padding: 5px 10px !important;
    text-align: left;
    margin: 0 !important;
    color: ${props => props.theme.black} !important;
    font-weight: 200;
  }

  li.separator {
    height: 1px;
    margin: 2px 0;
    background: ${props => props.theme.offwhite};
  }

  h3 {
    margin: 0;
    padding: 5px 10px;
  }

  ul li:hover a,
  ul li:hover button {
    transition: 0s !important;
    background: ${props => props.theme.red};
    color: ${props => props.theme.white} !important;
  }
`;

export default UserDropdownStyles;
