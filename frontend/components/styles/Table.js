import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  margin-top: 10px;

  @media print {
    padding-right: 20px;
    display: block;
    width: calc(11in - 40px);
  }

  td,
  th {
    padding: 7.5px;
  }

  th {
    font-weight: 600;
    font-family: ${props => props.theme.green};
  }

  tr {
    border-bottom: 1px solid #ddd;
  }

  th.customer {
    display: flex;
    align-items: center;
    text-align: left;

    svg {
      margin: 0 0 -3px 15px;
    }
  }

  tr.header {
    background: #eaeaea;
    font-family: 'Bitter', serif;
  }

  tr.row {
    cursor: pointer;

    &:hover {
      background: #fafafa;
    }
  }

  td.invoices-edit {
    position: relative;

    .invoices-edit-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding: 5px 3px;
      width: 24px 26px;
      position: relative;

      .invoices-edit-btn-click {
        cursor: pointer !important;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      &:hover {
        background: ${props => props.theme.green};
        cursor: pointer !important;

        svg path {
          fill: #fff;
        }
      }
    }

    .invoices-edit-btn-container {
      .invoices-options-container {
        position: absolute;
        width: 100px;
        background: red;
        right: 0;
        bottom: 0;
      }

      .invoice-options {
        border-radius: 3px;
        position: absolute;
        top: calc(100% - 25px);
        width: 150px;
        right: 5px;
        z-index: 500;
        border-top: 2px solid ${props => props.theme.green};
        display: block;

        li,
        a {
          font-size: 16px;
          cursor: pointer !important;
        }

        li.separator {
          padding: 0;
          height: 1px;
          background: #eee;
        }

        li {
          background: #fff;

          &:hover {
            background: ${props => props.theme.lightgrey};
          }
        }

        &.hidden {
          display: none;
        }
      }
    }

    .fa-ellipsis-v {
      width: 4px;
    }
  }

  .status > span {
    display: inline-block;
    width: 85px;
    padding: 3px 5px;
    border-radius: 100px;
    margin: 5px auto;
    font-weight: 600;

    &.draft {
      color: ${props => props.theme.grey};
    }

    &.due {
      color: ${props => props.theme.red};
    }

    &.paid {
      color: ${props => props.theme.green};
    }
  }
`;

export default Table;
