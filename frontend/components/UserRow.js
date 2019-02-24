import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Icon from '../elements/Icon';
import Me from './Me';

const UserRow = ({ user }) => (
  <div className="trow">
    <div className="tcell user-name">
      <div className="name">
        {user.firstName}
        {user.lastName && ` ${user.lastName}`}
      </div>
      <div className="user-company">{user.company}</div>
    </div>
    <div className="tcell user-contact">
      {user.email && (
        <div>
          <Icon name="email" />
          {user.email}
        </div>
      )}
      {user.phone && (
        <div>
          <Icon name="phone" />
          {user.phone}
        </div>
      )}
    </div>
    <div className="tcell user-permissions">
      <div className="permission-level" data-permission={user.permissions}>
        {user.permissions && user.permissions.toLowerCase()}
      </div>
    </div>
    <CanOrderBtn
      user={{
        id: user.id,
        canOrder: user.canOrder,
        permissions: user.permissions,
      }}
    />
  </div>
);

const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation UPDATE_PERMISSIONS_MUTATION($id: ID!, $canOrder: Boolean!) {
    updatePermissions(userId: $id, canOrder: $canOrder) {
      id
    }
  }
`;

class CanOrderBtn extends Component {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.string,
      canOrder: PropTypes.boolean,
      permissions: PropTypes.string,
    }).isRequired,
  };

  state = {
    canOrder: this.props.user.canOrder,
    permissions: this.props.user.permissions,
  };

  render() {
    return (
      <Me>
        {({ data: { me } }) => (
          <Mutation
            mutation={UPDATE_PERMISSIONS_MUTATION}
            variables={{
              id: this.props.user.id,
              canOrder: this.state.canOrder,
            }}
          >
            {(updatePermissions, { loading, error }) => (
              <div className="tcell user-permissions">
                <div className="can-order" data-can-order={this.props.canOrder}>
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="canOrder"
                      checked={this.state.canOrder}
                      onChange={async e => {
                        if (me.permissions === 'ADMIN') {
                          await this.setState({
                            [e.target.name]: !this.state.canOrder,
                          });
                          await updatePermissions();
                        }
                      }}
                    />
                    <span className="slider" />
                  </label>
                </div>
              </div>
            )}
          </Mutation>
        )}
      </Me>
    );
  }
}

export default UserRow;
