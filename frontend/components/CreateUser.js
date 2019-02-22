import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Form from './styles/Form';
import Btn from './styles/Btn';
import isEmpty from '../lib/isEmpty';
import {
  validateFirstName,
  validateUsername,
  validatePermissions,
  validatePassword,
  validateConfirmPassword,
  comparePasswords,
} from '../lib/validation';
import Input from './Input';

const CreateUserStyles = styled.div`
  h4 {
    color: ${props => props.theme.red};
  }

  h5 {
    margin-bottom: 1rem;
  }

  .permission-options {
    display: flex;
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

const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION(
    $firstName: String!
    $lastName: String
    $company: String
    $email: String
    $address: String
    $phone: String
    $username: String!
    $password: String!
    $permissions: Permission!
    $canOrder: Boolean!
  ) {
    createUser(
      data: {
        firstName: $firstName
        lastName: $lastName
        company: $company
        email: $email
        address: $address
        phone: $phone
        username: $username
        password: $password
        permissions: $permissions
        canOrder: $canOrder
        active: true
      }
    ) {
      id
    }
  }
`;

class CreateUser extends Component {
  state = {
    firstName: 'Zach', // required
    lastName: 'Patrick',
    username: 'zpthree', // required
    company: '',
    email: 'zach@zachpatrick.com',
    permissions: 'ADMIN', // required
    canOrder: true, // required - needs to be false by default
    phone: '',
    address: '',
    password: 'thundercats', // required
    confirmPassword: 'thundercats', // required
    error: {},
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

  handleCancel = e => {
    e.preventDefault();
    this.resetState();
  };

  validateInput = e => {
    const { name, value } = e.target;
    const error = { ...this.state.error };
    if (error[name]) delete error[name];
    this.setState({ error: { ...this.state.error, ...error } });

    if (name === 'firstName' && validateFirstName(value)) {
      error.firstName = validateFirstName(value);
    }

    if (name === 'username' && validateUsername(value)) {
      error.username = validateUsername(value);
    }

    if (name === 'permissions' && validatePermissions(value)) {
      error.permissions = validatePermissions(value);
    }

    if (name === 'password' && validatePassword(value)) {
      error.password = validatePassword(value);
    }

    if (name === 'confirmPassword' && validateConfirmPassword(value)) {
      error.confirmPassword = validateConfirmPassword(value);
    } else if (
      name === 'confirmPassword' &&
      comparePasswords(this.state.password, value)
    ) {
      error.comparePasswords = comparePasswords(value);
    }

    this.setState({ error: { ...error } });
  };

  validateForm = () => {
    const error = {};

    if (validateFirstName(this.state.firstName)) {
      error.firstName = validateFirstName(this.state.firstName);
    }

    if (validateUsername(this.state.username)) {
      error.username = validateUsername(this.state.username);
    }

    if (validatePermissions(this.state.permissions)) {
      error.permissions = validatePermissions(this.state.permissions);
    }

    if (validatePassword(this.state.password)) {
      error.password = validatePassword(this.state.password);
    }

    if (validateConfirmPassword(this.state.confirmPassword)) {
      error.confirmPassword = validateConfirmPassword(
        this.state.confirmPassword
      );
    } else if (
      comparePasswords(this.state.password, this.state.confirmPassword)
    ) {
      error.comparePasswords = comparePasswords(
        this.state.password,
        this.state.confirmPassword
      );
    }

    this.setState({ error });
  };

  resetState = () => {
    this.setState({
      firstName: '', // required
      lastName: '',
      username: '', // required
      company: '',
      email: '',
      permissions: '', // required
      canOrder: false, // required - needs to be false by default
      phone: '',
      address: '',
      password: '', // required
      confirmPassword: '', // required
      error: {},
    });

    window.scrollTo(0, 0);
  };

  render() {
    const errorMessage = this.state.error;
    console.log(errorMessage);
    return (
      <Mutation mutation={CREATE_USER_MUTATION} variables={this.state}>
        {(createUser, { loading, error }) => (
          <CreateUserStyles>
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await this.validateForm();

                if (isEmpty(errorMessage)) {
                  const res = await createUser();
                  this.resetState(e);
                }
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h4>Add New User</h4>
                <div className="form-body">
                  <div className="form-section">
                    <h5>User Information</h5>
                    <div className="form-row info">
                      <Input
                        name="firstName"
                        label="First Name"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        onBlur={this.validateInput}
                        error={errorMessage.firstName}
                        size="half"
                      />

                      <Input
                        name="lastName"
                        label="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        optional={true}
                        size="half"
                      />
                    </div>

                    <div className="form-row info">
                      <Input
                        name="username"
                        label="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        onBlur={this.validateInput}
                        error={errorMessage.username}
                        size="half"
                      />

                      <Input
                        name="company"
                        label="Company"
                        value={this.state.company}
                        onChange={this.handleChange}
                        optional={true}
                        size="half"
                      />
                    </div>

                    <div className="form-row info">
                      <Input
                        type="email"
                        name="email"
                        label="Email Address"
                        value={this.state.email}
                        onChange={this.handleChange}
                        optional={true}
                        size="full"
                      />
                    </div>
                  </div>

                  <div className="form-section">
                    <h5>Permissions</h5>
                    <div className="form-row info permissions">
                      <div
                        className={`row-full ${
                          errorMessage.permissions ? 'error' : ''
                        }`}
                      >
                        <div className="permission-options">
                          <label htmlFor="customerPermissions">
                            Customer
                            <input
                              type="radio"
                              name="permissions"
                              id="customerPermissions"
                              value="CUSTOMER"
                              checked={
                                this.state.permissions === 'CUSTOMER' &&
                                'checked'
                              }
                              onChange={this.handleChange}
                              onBlur={this.validateInput}
                            />
                          </label>
                          <label htmlFor="employeePermissions">
                            Employee
                            <input
                              type="radio"
                              name="permissions"
                              id="employeePermissions"
                              checked={
                                this.state.permissions === 'EMPLOYEE' &&
                                'checked'
                              }
                              value="EMPLOYEE"
                              onChange={this.handleChange}
                              onBlur={this.validateInput}
                            />
                          </label>
                          <label htmlFor="adminPermissions">
                            Administrator
                            <input
                              type="radio"
                              name="permissions"
                              id="adminPermissions"
                              checked={
                                this.state.permissions === 'ADMIN' && 'checked'
                              }
                              value="ADMIN"
                              onChange={this.handleChange}
                              onBlur={this.validateInput}
                            />
                          </label>
                        </div>

                        <p className="error">
                          {errorMessage.permissions && errorMessage.permissions}
                        </p>
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
                      <Input
                        name="phone"
                        label="Phone Number"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        optional={true}
                        size="full"
                      />
                    </div>

                    <div className="form-row info">
                      <Input
                        name="address"
                        label="Street Address"
                        value={this.state.address}
                        onChange={this.handleChange}
                        optional={true}
                        size="full"
                      />
                    </div>
                  </div>

                  <div className="form-section">
                    <h5>Password</h5>
                    <div className="form-row info">
                      <Input
                        type="password"
                        name="password"
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        onBlur={this.validateInput}
                        error={errorMessage.password}
                        size="half"
                      />
                      <Input
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        onBlur={this.validateInput}
                        error={errorMessage.confirmPassword}
                        size="half"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-footer">
                  <Btn
                    type="submit"
                    name="createUser"
                    disabled={!isEmpty(errorMessage)}
                  >
                    Submit
                  </Btn>
                  <Btn
                    type="cancel"
                    name="cancelUser"
                    onClick={this.handleCancel}
                  >
                    Cancel
                  </Btn>
                </div>
              </fieldset>
            </Form>
          </CreateUserStyles>
        )}
      </Mutation>
    );
  }
}

export default CreateUser;
