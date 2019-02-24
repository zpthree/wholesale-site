import styled from 'styled-components';

const UserDropdownStyles = styled.div`
  position: absolute;
  width: 20rem;
  top: 5.5rem;
  left: -10.5rem;

  .dropdown-menu-header {
    padding: 0.5rem 1rem;
    color: ${props => props.theme.red};
    text-align: center;
  }

  .fa-external-link {
    height: 1.4rem;
    fill: ${props => props.theme.grey};
    margin-left: 0.75rem;
  }

  ul {
    min-width: 0;
    background: white;
    width: 100%;
    flex-direction: column;
    padding: 0 0 0.2rem;
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
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0.5rem 1rem !important;
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

  h5 {
    margin: 0;
    padding: 0 1rem;
  }

  ul li:hover a,
  ul li:hover button {
    transition: 0s !important;
    background: ${props => props.theme.red};
    color: ${props => props.theme.white} !important;
  }

  ul li:hover svg {
    fill: ${props => props.theme.white};
  }
`;

export default UserDropdownStyles;
