import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Form from '../_styles/Form';
import Btn from '../_styles/Btn';
import { CREATE_ITEM_MUTATION } from './graphql/query';

const CreateUserStyles = styled.div`
  h4 {
    color: ${props => props.theme.red};
  }

  h5 {
    margin-bottom: 1rem;
  }

  .form-row.permissions .row-full {
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;

      label p {
        margin-right: 1rem;
        margin-left: 0;
      }
    }
  }
`;

class UpdateUser extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    company: '',
    email: '',
    permissions: '',
    canOrder: false, // needs to be false by default
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  handleCheckbox = e => {
    const { name } = e.target;
    this.setState({ [name]: !this.state.canOrder });
  };

  resetState = e => {
    this.setState({
      firstName: '',
      lastName: '',
      username: '',
      company: '',
      email: '',
      permissions: '',
      canOrder: false, // needs to be false by default
      phone: '',
      address: '',
      password: '',
      confirmPassword: '',
    });

    window.scrollTo(0, 0);
  };

  render() {
    return (
      <CreateUserStyles>
        <Form
          id="new_user_info"
          method="post"
          onSubmit={async e => {
            e.preventDefault();
            const res = await createUser();
            this.resetState(e);
          }}
        >
          <fieldset disabled={loading} aria-busy={loading}>
            <h4>Update User Info</h4>
            <div className="form-body">
              <div className="form-section">
                <h5>User Information</h5>
                <div className="form-row info">
                  <div className="row-half">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="firstName">
                      <p>First Name</p>
                    </label>
                  </div>
                  <div className="row-half">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="lastName">
                      <p>
                        Last Name <strong>&nbsp;(Optional)</strong>
                      </p>
                    </label>
                  </div>
                </div>

                <div className="form-row info">
                  <div className="row-full">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="username">
                      <p>Username</p>
                    </label>
                  </div>
                </div>

                <div className="form-row info">
                  <div className="row-full">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={this.state.company}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="company">
                      <p>
                        Company <strong>&nbsp;(Optional)</strong>
                      </p>
                    </label>
                  </div>
                </div>

                <div className="form-row info">
                  <div className="row-full">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="email">
                      <p>
                        Email Address <strong>&nbsp;(Optional)</strong>
                      </p>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h5>Permissions</h5>
                <div className="form-row info permissions">
                  <div className="row-full">
                    <label htmlFor="customerPermissions">
                      <p>Customer</p>
                      <input
                        type="radio"
                        name="permissions"
                        id="customerPermissions"
                        value="CUSTOMER"
                        checked={
                          this.state.permissions === 'CUSTOMER' && 'checked'
                        }
                        onChange={this.handleChange}
                        required
                      />
                    </label>
                    <label htmlFor="employeePermissions">
                      <p>Employee</p>
                      <input
                        type="radio"
                        name="permissions"
                        id="employeePermissions"
                        checked={
                          this.state.permissions === 'EMPLOYEE' && 'checked'
                        }
                        value="EMPLOYEE"
                        onChange={this.handleChange}
                        required
                      />
                    </label>
                    <label htmlFor="adminPermissions">
                      <p>Administrator</p>
                      <input
                        type="radio"
                        name="permissions"
                        id="adminPermissions"
                        checked={
                          this.state.permissions === 'ADMIN' && 'checked'
                        }
                        value="ADMIN"
                        onChange={this.handleChange}
                        required
                      />
                    </label>
                  </div>
                </div>

                <div className="form-row info">
                  <div className="row-full can-order">
                    <label htmlFor="canOrder">
                      <p>Is this user allowed to create their own order?</p>
                    </label>
                    <input
                      id="canOrder"
                      name="canOrder"
                      type="checkbox"
                      checked={this.state.canOrder === true && 'checked'}
                      onChange={this.handleCheckbox}
                    />
                  </div>
                </div>
              </div>

              {/* TODO: check privileges ?? */}

              <div className="form-section">
                <h5>Contact Information</h5>
                <div className="form-row info">
                  <div className="row-full">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="phone">
                      <p>
                        Phone Number <strong>&nbsp;(Optional)</strong>
                      </p>
                    </label>
                  </div>
                </div>

                <div className="form-row info">
                  <div className="row-full">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={this.state.address}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="address">
                      <p>
                        Street Address <strong>&nbsp;(Optional)</strong>
                      </p>
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h5>Password</h5>
                <div className="form-row info">
                  <div className="row-half">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="password">
                      <p>
                        {this.props.action === 'update' ? 'New ' : ''}
                        Password
                      </p>
                    </label>
                  </div>
                  <div className="row-half">
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="confirmPassword">
                      <p>Confirm Password</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-footer">
              <Btn type="submit" id="createUser" name="createUser">
                Submit
              </Btn>
              <Btn
                type="cancel"
                id="cancelUser"
                name="cancelUser"
                onClick={this.handleCancel}
              >
                Cancel
              </Btn>
            </div>
          </fieldset>
        </Form>
      </CreateUserStyles>
    );
  }
}

export default UpdateUser;
