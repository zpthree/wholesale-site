import styled from 'styled-components';

const PaginationStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem auto;
  padding: 0 0 1rem;
  font-weight: 700;

  #first-page {
    order: 2;

    @media screen and (min-width: 768px) {
      order: 0;
    }
  }

  a[aria-disabled='true'] {
    color: ${props => props.theme.grey};
    pointer-events: none;
  }

  /* .prev {
    order: 1;
  }

  .next {
    order: 0;

    @media screen and (min-width: 768px) {
      order: 2;
    }
  } */

  @media screen and (min-width: 768px) {
    width: auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  @media print {
    display: none;
  }

  p {
    margin: 0 1rem !important;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2.5rem;
    border: 0.2rem solid ${props => props.theme.green};
    margin: 0 1.5rem 1.5rem;
    padding: 5px 0;
    /* @include trans(background); */

    @media screen and (min-width: 768px) {
      padding: 0;
      margin-bottom: 0;

      &:hover {
        background: ${props => props.theme.green};

        a {
          color: ${props => props.theme.white};
        }
      }
    }
  }

  a {
    color: ${props => props.theme.green};
    display: flex;
    align-items: center;
    margin: 0.5rem 2rem;

    &:hover {
      text-decoration: none;
    }
  }

  .fa-angle-left,
  .fa-angle-right {
    width: 1.125rem;
    margin-left: 1.5rem;
  }
`;

export default PaginationStyles;
