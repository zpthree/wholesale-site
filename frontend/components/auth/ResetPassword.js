import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import Link from 'next/link';
import SignInStyles from './styles/SignInStyles';
import Btn from '../_styles/Btn';
import Logo from '../../elements/Logo';
import Error from '../ErrorMessage';
import { CURRENT_USER_QUERY } from './graphql/query';
import { RESET_PASSWORD_MUTATION } from './graphql/mutation';

class ResetPassword extends Component {
  static propTypes = {
    resetToken: PropTypes.string.isRequired,
  };

  state = {
    password: '',
    confirmPassword: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.props);
    return (
      <Mutation
        mutation={RESET_PASSWORD_MUTATION}
        variables={{
          resetToken: this.props.resetToken,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
        }}
        refetchQuery={[{ query: CURRENT_USER_QUERY }]}
      >
        {(resetPassword, { loading, error, called }) => (
          <SignInStyles>
            <form
              className="login"
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await resetPassword();
                this.setState({
                  password: '',
                  confirmPassword: '',
                });
                Router.push('/');
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <Logo />
                <h4>Reset your password</h4>
                <Error error={error} />
                <div className="form-row">
                  <h5>New Password</h5>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-row">
                  <h5>Confirm New Password</h5>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                  />
                </div>
                <Btn type="submit" name="submit">
                  Reset Password
                </Btn>
                <div id="resetPassword">
                  <Link href="/sign-in">
                    <a>
                      <em>Already Know Your Password?</em>
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

export default ResetPassword;
