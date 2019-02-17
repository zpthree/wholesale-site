import React, { Component } from 'react';
import UsersStyles from './styles/UsersStyles';
import Table from './styles/Table';
import Icon from '../elements/Icon';

const User = ({ user }) => (
  <tr className="row">
    <td className="user-name">
      <div className="name">
        {user.firstName}
        {user.lastName && ` ${user.lastName}`}
      </div>
      <div className="user-company">{user.company}</div>
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
      <div className="permission-level" data-permission={user.permissions}>
        {user.permissions && user.permissions.toLowerCase()}
      </div>
      <div className="can-order" data-can-order={user.canOrder}>
        {user.canOrder === true ? 'can order' : 'cannot order'}
      </div>
    </td>
  </tr>
);

export default User;
