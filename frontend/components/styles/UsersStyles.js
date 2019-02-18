import styled from 'styled-components';

const UsersStyles = styled.div`
  th.admin-controls,
  td.admin-controls {
    text-align: center;
    height: 100%;

    & > span {
      margin: 0 5px;
    }

    svg {
      height: 15px;
    }
  }

  td.admin-controls {
    & > span {
      cursor: pointer;
    }

    svg path {
      fill: #646464;
    }
  }

  .user-name,
  .user-contact {
    text-align: left;
  }

  .user-name .name {
    font-weight: 600;
  }

  .user-company {
    font-size: 13px;
    font-style: italic;
    margin-top: 5px;
    min-height: 30px;
  }

  .user-phone,
  .user-can-order {
    text-align: center;
  }

  .user-contact > div {
    display: flex;
    align-items: center;
    margin: 10px 0;

    .fa-envelope,
    .fa-phone,
    .fa-map-marker-alt {
      width: 15px;
      margin-right: 10px;
    }

    .fa-envelope path {
      fill: ${props => props.theme.green};
    }

    .fa-phone path {
      fill: #46617a;
    }

    .fa-map-marker-alt path {
      fill: ${props => props.theme.red};
    }
  }

  .can-order,
  .permission-level {
    width: 10rem;
    padding: 3px 5px;
    border-radius: 100px;
    font-size: 1.4rem;
    margin: 5px auto;
    text-align: center;
    font-weight: 600;
  }

  .permission-level[data-permission='ADMIN'],
  .can-order[data-can-order='true'] {
    color: ${props => props.theme.green};
  }

  .permission-level[data-permission='CUSTOMER'],
  .can-order[data-can-order='false'] {
    color: ${props => props.theme.red};
  }

  .permission-level[data-permission='EMPLOYEE'] {
    color: rgba(brown, 0.8);
  }

  .checked,
  .unchecked {
    .fa-square,
    .fa-check-square {
      width: 14px;
      height: 14px;
      margin-left: 10px;
      margin-bottom: -2px;
    }

    .fa-square path {
      fill: #ccc;
    }

    .fa-check-square path {
      fill: #338ffc;
    }
  }
`;

export default UsersStyles;
