import styled from 'styled-components';

const AccountSidebarStyles = styled.aside`
  width: 100%;
  margin: auto auto 2rem auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid ${props => props.theme.offwhite};
  border-radius: 2px;

  @media print {
    display: none;
  }

  @media screen and (min-width: 990px) {
    max-width: 29rem;
    position: fixed;
    margin: 0 0 0 1rem;
  }

  @media screen and (max-height: 600px) {
    position: static;
  }

  h5 {
    padding-left: 0.8rem;
    margin: 0.5rem 0 1rem;
  }

  a {
    display: block;
    padding: 0.8rem;
    border-radius: 0.2rem;
    color: ${props => props.theme.black};

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    &.active,
    &:hover {
      background: ${props => props.theme.red};
      color: ${props => props.theme.white};
    }
  }
`;

export default AccountSidebarStyles;
