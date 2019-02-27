import styled from 'styled-components';

const AccountLayoutStyles = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 1.5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem;

  @media screen and (min-width: 990px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0;
  }

  .account-content {
    width: 100%;
    margin: 0;

    @media screen and (min-width: 990px) {
      max-width: calc(100% - 35rem);
      margin: 0 0 0 35rem;
    }

    @media screen and (max-height: 600px) {
      margin: 0;
    }
  }
`;

export default AccountLayoutStyles;
