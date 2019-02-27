import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const SignInStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  #logo {
    height: 10rem;
    display: flex;
    justify-content: center;
    margin: 2rem 0 3rem;
  }

  #logo svg {
    height: 10rem;
  }

  .alert {
    color: ${props => props.theme.red};
    font-weight: 600;
    margin: 1rem 0;
  }

  @media screen and (min-width: 768px) {
    padding: 10rem 0;
  }

  form {
    width: 100%;
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.3rem;
    background: #fff;
    box-shadow: 0 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
    margin: auto;
    padding: 2rem 3rem;

    @media screen and (min-width: 768px) {
      padding-top: 0;
    }

    fieldset {
      border: none;
      margin: 0;
      padding: 0;

      &[disabled] {
        opacity: 0.5;
      }

      &::before {
        height: 15px;
        content: '';
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-image: linear-gradient(
          to right,
          #98272b 0%,
          #cb9395 50%,
          #98272b 100%
        );
      }

      &[aria-busy='true']::before {
        background-size: 50% auto;
        animation: ${loading} 0.5s linear infinite;
      }
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

    button {
      width: 100%;
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

  h3,
  h4 {
    margin: 1rem 0;
    padding: 1rem 0;
    width: 100%;
    text-align: center;
    color: ${props => props.theme.red};
  }

  p {
    margin: 1rem 0 2.5rem;
    text-align: center;
    font-size: 1.8rem;
  }

  #resetPassword {
    margin-top: 2.5rem;
    padding-top: 1rem;
    border-top: 1px solid ${props => props.theme.lightgrey};
    text-align: center;

    a:hover {
      text-decoration: underline;
    }
  }
`;

export default SignInStyles;
