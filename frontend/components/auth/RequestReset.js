import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import Link from 'next/link';
import SignInStyles from './styles/SignInStyles';
import Logo from '../../elements/Logo';
import Btn from '../_styles/Btn';
import Error from '../ErrorMessage';
import { REQUEST_RESET_MUTATION } from './graphql/mutation';

const SuccessMessage = styled.div`
  padding: 1rem 1.5rem;
  margin: 2rem 0;
  border-left: 5px solid #198c19;

  p {
    margin: 0;
    font-weight: 100;
    text-align: left;
  }

  strong {
    margin-right: 1rem;
  }
`;

class SignIn extends Component {
  state = {
    email: '',
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
      <Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
        {(requestReset, { loading, error, called }) => (
          <SignInStyles>
            <form
              className="login"
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await requestReset();
                this.setState({
                  email: '',
                });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <Logo />
                <h4>Request Password Reset</h4>
                <Error error={error} />
                {!error && !loading && called && (
                  <SuccessMessage>
                    <p>Success! Check your email for a reset link.</p>
                  </SuccessMessage>
                )}
                <div className="form-row">
                  <h5>Email</h5>
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <Btn type="submit" name="submit">
                  Request Password
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

export default SignIn;
