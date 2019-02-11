import styled from 'styled-components';

const InvoicesStyles = styled.div`
  position: relative;

  h4 {
    color: ${props => props.theme.red};
  }

  &-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
    position: absolute;
    background: #fff;
    top: 0;
    right: 0;
    bottom: 5px;
    left: 0;
  }

  #loading-icon {
    margin: 0;
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

  .invoice-section-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
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

  #show-more-invoices-container {
    td {
      text-align: center;
    }

    button {
      margin: auto;
    }
  }

  /* #show-more-invoices {
  @include submit-btn;
  padding: 10px 20px;

  &:hover {
    background: $color-two-light;
  }
} */
`;

export default InvoicesStyles;
