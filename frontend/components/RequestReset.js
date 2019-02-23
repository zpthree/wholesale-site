import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';
import SignInStyles from './styles/SignInStyles';
import Logo from '../elements/Logo';
import Btn from './styles/Btn';
import Error from './ErrorMessage';

const SuccessMessage = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid ${props => props.theme.green};

  p {
    margin: 0;
    font-weight: 100;
  }

  strong {
    margin-right: 1rem;
  }
`;

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
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
                <h4>Request a new password</h4>
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
                      <em>Know Your Password?</em>
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
