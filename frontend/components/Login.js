import React, { Component } from 'react';
import styled from 'styled-components';
import Btn from './styles/Btn';

const LoginStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (min-width: 768px) {
    padding: 10rem 0;
  }

  form {
    width: 100%;
    max-width: 45rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.3rem;
    background: #fff;
    box-shadow: 0 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
    padding: 2rem 4rem 3rem;
    margin: auto;

    @media screen and (min-width: 768px) {
      padding: 0 4rem 3rem;
    }

    .form-row {
      width: 100%;
      flex-direction: column;

      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    }

    input {
      width: 100%;
      height: 4.5rem;
      margin: 1rem 0;
      padding: 1.5rem;
      border: 0.1rem solid ${props => props.theme.lightgrey};
      border-radius: 0.2rem;
    }

    #remember-me {
      display: flex;
      align-items: center;
      margin-top: -1rem;
      margin-bottom: 1rem;

      input {
        height: 0.9rem;
        width: 0.9rem;
        margin-right: 1rem;
      }

      p {
        color: ${props => props.theme.green};
        font-size: 1.4rem;
        font-weight: 500;
        margin: 0;
        cursor: pointer;
      }

      &:hover p {
        color: ${props => props.theme.lightgreen};
      }
    }
  }

  h3 {
    margin: 1rem 0;
    padding: 1rem 0;
    width: 100%;
    text-align: center;
    color: ${props => props.theme.red};
  }

  p {
    margin: auto 0 2rem;
  }
`;

class Login extends Component {
  state = {
    username: '',
    password: '',
    rememberMe: false,
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
      <LoginStyles>
        <form className="login" method="post">
          <h3>Login</h3>
          <p>
            Enter your username and password below to view our wholesale
            selection.
          </p>
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
            Login
          </Btn>
        </form>
      </LoginStyles>
    );
  }
}

export default Login;
