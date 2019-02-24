import styled from 'styled-components';

const InvoicesStyles = styled.div`
  position: relative;

  h4 {
    color: ${props => props.theme.red};
  }

  .account-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .create-new-invoice {
      margin: 0;
    }
  }

  .filter-invoices {
    cursor: pointer;

    .customer-filter {
      height: 30px;
    }
  }

  .fa-filter {
    height: 0.8rem;
    margin-bottom: 2px;
  }

  .customer-filtered-name {
    display: flex;
    align-items: center;
    background: ${props => props.theme.darkgrey};
    color: ${props => props.theme.offwhite};
    padding: 5px 10px;
    font-size: 0.7rem;
    border-radius: 20px;
    margin-left: 10px;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme.red};
    }

    .fa-times-circle {
      width: 12.5px;
      height: 12.5px;
      margin-left: 5px;

      path {
        fill: ${props => props.theme.white};
      }
    }
  }

  .account-header p {
    cursor: pointer;
    background: ${props => props.theme.green};
    color: ${props => props.theme.white};
    padding: 5px 15px;
    border-radius: 25px;
    height: 33px;
    width: 160px;
    margin-bottom: 15px;

    .fa-plus {
      height: 0.8rem;
      margin-bottom: 2px;
    }
  }

  .trow {
    padding: 0.5rem 0;
  }

  .tcell.customer {
    flex-basis: 25%;
    flex-grow: 3;
  }

  .tcell.date-ordered {
    flex-basis: 25%;
    flex-grow: 3;
  }

  .tcell.skus {
    flex-basis: 10%;
    flex-grow: 1;
  }

  .tcell.total-cost {
    flex-basis: 15%;
    flex-grow: 2;
  }

  .tcell.status {
    flex-basis: 15%;
    flex-grow: 2;
  }

  .tcell.date-ordered,
  .tcell.skus,
  .tcell.total-cost,
  .tcell.status {
    justify-content: center;
  }

  .invoice-status {
    width: 100%;
    max-width: 7.5rem;
    border-radius: 100px;
    font-size: 1.2rem;
    padding: 0;
    margin: 5px;
    font-weight: 600;
    color: ${props => props.theme.white};
    text-align: center;
  }

  .invoice-status[data-status='paid'] {
    background: ${props => props.theme.green};
  }

  .invoice-status[data-status='due'] {
    background: ${props => props.theme.red};
  }

  .invoice-status[data-status='draft'] {
    background: ${props => props.theme.brown};
  }

  /* #show-more-invoices-container {
    td {
      text-align: center;
    }

    button {
      margin: auto;
    }
  } */

  /* #show-more-invoices {
  @include submit-btn;
  padding: 10px 20px;

  &:hover {
    background: $color-two-light;
  }
} */
`;

export default InvoicesStyles;
