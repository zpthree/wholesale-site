import styled from 'styled-components';

const InvoiceStyles = styled.div`
  width: 100%;
  padding: 20px 0;

  @media print {
    padding: 10px;
    margin-top: 0;
  }

  .cookie-crumb {
    width: 100%;
    max-width: 8.5in;
    margin: auto;
    padding: 0 5px 20px;

    @media screen and (min-width: 1200px) {
      padding: 0 0 20px;
    }

    @media print {
      display: none;
    }

    &.customer {
      max-width: 8.5in;
    }

    .fa-chevron-left {
      width: 11px;
      margin-right: 5px;
      fill: ${props => props.theme.green};
    }

    a {
      display: flex;
      align-items: center;
      font-weight: 700;
      color: ${props => props.theme.green};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .invoice {
    width: 100%;
    max-width: 8.5in;
    margin: auto;
    padding: 25px 15px 100px;
    border-radius: 2px;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.05);
    min-height: 650px;
    position: relative;

    @media print {
      box-shadow: none;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    margin-bottom: 20px;

    img {
      height: 55px;
    }

    button {
      border: none;
      margin-left: 20px;
    }

    .fa-calendar-edit {
      width: 25px;
      cursor: pointer;

      path {
        fill: #646464;
      }
    }

    &-left {
      display: flex;
      align-items: center;
    }

    &-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      h6 {
        color: ${props => props.theme.red};

        @media print {
          font-size: 20pt;
        }
      }

      p {
        margin: 10px 0 0;
        font-weight: 600;

        @media print {
          font-size: 18pt;
        }
      }

      span {
        margin-top: 5px;

        @media print {
          font-size: 16px;
        }
      }
    }
  }

  .items-header {
    width: 100%;
    display: flex;
    padding: 10px 0;
    border-bottom: 2px solid ${props => props.theme.red};

    p {
      font-weight: 700;
      margin-bottom: 0;

      @media print {
        font-size: 16pt;
      }
    }
  }

  .description {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 50%;

    @media print {
      width: 4.7in !important;
    }
  }

  .qty {
    width: 25%;

    @media screen and (min-width: 768px) {
      width: 12.5%;
    }

    @media print {
      width: 0.95in;
    }
  }

  input.total-cost {
    height: 42px;
  }

  .total-cost {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;

    @media screen and (min-width: 768px) {
      width: 12.5%;
    }

    @media print {
      width: 0.95in;
      display: block;
    }
  }

  .location {
    overflow-x: hidden;
  }

  .admin,
  .location,
  .price {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
      width: 12.5%;
    }

    @media print {
      width: 0.95in;
      display: block;
    }
  }

  .admin.checkbox {
    display: flex;
    justify-content: center;
    padding: 10px 0 0;
  }

  .admin,
  .admin input {
    text-align: center;

    @media print {
      display: none;
    }
  }

  .admin {
    display: none;

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media print {
      display: none;
    }

    svg {
      height: 20px;
    }

    .labor,
    .delete-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      margin: 0 5px;
    }

    .labor path {
      fill: #d49e37;
    }

    .delete-item path {
      fill: ${props => props.theme.red};
    }
  }

  .location,
  .qty,
  .price,
  .total-cost {
    text-align: center;
  }
`;

export default InvoiceStyles;
