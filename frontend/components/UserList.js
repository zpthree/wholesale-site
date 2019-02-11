import React, { Component } from 'react';
import UserListStyles from './styles/UserListStyles';
import Table from './styles/Table';
import Icon from '../elements/Icon';

class UserList extends Component {
  render() {
    const { users } = this.props;

    return (
      <UserListStyles>
        <Table>
          <tbody>
            <tr className="header">
              <th className="user-name">Name</th>
              <th className="user-contact"> Information</th>
              <th className="user-can-order">Access</th>
            </tr>
            {users.map(user => (
              <tr className="row">
                <td class="user-name">
                  <div class="name">
                    {user.firstName}
                    {user.lastName && ` ${user.lastName}`}
                  </div>
                  <div class="user-company">{user.company}</div>
                </td>
                <td className="user-contact">
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
                  {user.address && (
                    <div>
                      <Icon name="address" />
                      {user.address}
                    </div>
                  )}
                </td>
                <td className="user-permissions">
                  <div
                    className="permission-level"
                    data-permission={user.permissions}
                  >
                    {user.permissions && user.permissions.toLowerCase()}
                  </div>
                  <div className="can-order" data-can-order={user.canOrder}>
                    {user.canOrder === true ? 'can order' : 'cannot order'}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </UserListStyles>
    );
  }
}

export default UserList;
