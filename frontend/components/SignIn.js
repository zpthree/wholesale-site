import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import SignInStyles from './styles/SignInStyles';
import Btn from './styles/Btn';
import Logo from '../elements/Logo';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './Me';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      id
      email
      username
      firstName
    }
  }
`;

class SignIn extends Component {
  state = {
    username: '',
    password: '',
    rememberMe: false,
  };

  static propTypes = {
    message: PropTypes.string,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleCheckbox = e => {
    const { name } = e.target;
    this.setState({ [name]: !this.state.rememberMe });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signIn, { loading, error }) => (
          <SignInStyles>
            <form
              className="login"
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await signIn();
                this.setState({
                  username: '',
                  password: '',
                  rememberMe: false,
                });
                Router.push('/');
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <Logo />
                {this.props.message && (
                  <p className="alert">{this.props.message}</p>
                )}
                <Error error={error} />
                <div className="form-row">
                  <h5>Username</h5>
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-row">
                  <h5>Password</h5>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div id="remember-me">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    checked={this.state.rememberMe === true && 'checked'}
                    onChange={this.handleCheckbox}
                  />
                  <label htmlFor="log_remember">
                    <p>Remember Me</p>
                  </label>
                </div>
                <Btn type="submit" name="submit">
                  Sign In
                </Btn>
                <div id="resetPassword">
                  <Link href="/request-new-password">
                    <a>
                      <em>Forgot Your Password?</em>
                    </a>
                  </Link>
                </div>
              </fieldset>
            </form>
          </SignInStyles>
        )}
      </Mutation>
    );
  }
}

export default SignIn;
