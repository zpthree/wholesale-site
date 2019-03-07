import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../../elements/Icon';
import DeleteItem from './DeleteItem';

const ItemOptionsStyles = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  button {
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    background: transparent;
  }

  .fa-ellipsis-h {
    height: 2rem;
    fill: ${props => props.theme.green};
  }

  ul {
    position: absolute;
    display: ${props => (props.showOptions === false ? 'none' : 'flex')};
    flex-direction: column;
    right: 0;
    top: 1rem;
    list-style: none;
    padding: 1rem;
    width: 12rem;
    border-radius: 2px;
    border: 1px solid ${props => props.theme.offwhite};
  }
`;

class ItemOptionsContainer extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  state = {
    showOptions: false,
  };

  render() {
    return (
      <ItemOptionsStyles showOptions={this.state.showOptions}>
        <button
          onClick={() =>
            this.setState({ showOptions: !this.state.showOptions })
          }
        >
          <Icon name="ellipsis" />
        </button>
        <ul>
          <li>
            <DeleteItem id={this.props.id}>Delete Item</DeleteItem>
          </li>
        </ul>
      </ItemOptionsStyles>
    );
  }
}

export default ItemOptionsContainer;
