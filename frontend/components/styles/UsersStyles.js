import styled from 'styled-components';

const UsersStyles = styled.div`
  /* tr.row:hover {
    cursor: default;
  }

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
  } */

  .tcell.user-name {
    flex-basis: 20%;
    flex-grow: 2;
  }

  .tcell.user-contact {
    flex-basis: 50%;
    flex-grow: 3;
  }

  .tcell.user-permissions {
    flex-basis: 25%;
    flex-grow: 2;
  }

  .tcell.user-name,
  .tcell.user-contact {
    text-align: left;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .user-name .name {
    font-weight: 600;
  }

  .user-company {
    font-size: 13px;
    font-style: italic;
  }

  .user-phone,
  .user-permissions {
    text-align: center;
  }

  .tcell.user-permissions {
    max-width: 12rem;
    display: none;

    @media screen and (min-width: 990px) {
      display: flex;
    }
  }

  .user-contact > div {
    display: flex;
    align-items: center;
    margin: 0;

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

  div.can-order,
  .tcell.user-permissions {
    justify-content: center;
    padding: 0;
  }

  div.can-order {
    align-items: center;
  }

  .permission-level {
    width: 100%;
    max-width: 9rem;
    border-radius: 100px;
    font-size: 1.2rem;
    margin: 5px;
    font-weight: 600;
    color: ${props => props.theme.white};
    text-align: center;
  }

  .permission-level[data-permission='ADMIN'] {
    background: ${props => props.theme.green};
  }

  .permission-level[data-permission='CUSTOMER'] {
    background: ${props => props.theme.red};
  }

  .permission-level[data-permission='EMPLOYEE'] {
    background: ${props => props.theme.brown};
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

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: flex;
    width: 46px;
    height: 14px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 0;
    bottom: -3px;
    background-color: ${props => props.theme.green};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:not(:checked) + .slider:before {
    background-color: #a9a9a9;
  }

  input:checked + .slider {
    background-color: ${props => props.theme.lightgreen};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${props => props.theme.lightgreen};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

export default UsersStyles;
