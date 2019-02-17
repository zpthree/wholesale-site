import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

const Form = styled.form`
  margin: auto;

  input,
  textarea,
  select,
  option,
  label {
    font-size: 1.6rem;
  }

  input:not([type='submit']),
  textarea,
  select,
  option {
    background: ${props => props.theme.white};
    margin: 0 0 10px;
    outline: none;
    border: 2px solid #e6e6e6;
    padding: 7.5px 5px;
    border-radius: 2px;
  }

  textarea {
    resize: vertical;
  }

  /* Change Autocomplete styles in Chrome */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus input:-webkit-autofill,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: ${props => props.theme.red};
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  /* hide number input controls */
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }

    &::before {
      height: 10px;
      content: '';
      display: block;
      margin-bottom: 1rem;
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
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      margin-bottom: 30px;
    }

    input:not([type='submit']),
    textarea {
      width: 100%;
    }
  }

  .form-section {
    padding-top: 25px;

    &.update-password-section {
      h6.successully-updated {
        color: ${props => props.theme.green};
        text-align: center;
        margin-bottom: 15px;
      }
    }
  }

  .row {
    &-full {
      width: 100%;
    }

    &-half {
      width: 100%;
      margin-bottom: 30px;

      @media screen and (min-width: 768px) {
        margin-bottom: 0;
        width: 50%;
      }

      &:not(:last-child) {
        margin-right: 10px;
      }
    }

    &-third {
      width: 100%;
      margin-bottom: 30px;

      @media screen and (min-width: 768px) {
        width: 33.33333%;
        margin-bottom: 0;
      }

      &:not(:last-child) {
        margin-right: 10px;
      }
    }

    &-fourth {
      width: 100%;
      margin-bottom: 30px;

      @media screen and (min-width: 768px) {
        width: 25%;
        margin-bottom: 0;
      }

      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }

  .form-header {
    margin-bottom: 20px;
  }

  .form-footer {
    display: flex;
    justify-content: center;
    padding: 10px 0;

    button:not(:last-child) {
      margin-right: 1rem;
    }
  }

  .button-loading-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 200px;
    z-index: 2;
    display: none;

    .loading {
      display: block;
    }
  }

  #mc_embed_signup input {
    margin-top: 5px;
  }

  #mc_embed_signup .indicates-required {
    margin-bottom: 15px;
  }

  .form-section:not(:first-child) {
    margin-top: 30px;
  }

  .form-row.info,
  .form-row.editor {
    input:not([type='submit']) {
      height: 45px;
      border-radius: 0;
      border: none;
      border-bottom: 2px solid #e6e6e6;
      padding: 7.5px 5px;
    }

    .select-menu {
      border-bottom: 2px solid #eee;
      margin-top: -1px;
      margin-bottom: 17.5px;
      padding: 1px 1px 0;

      &.focused {
        padding: 0;
        border-radius: 2px 2px 0 0;
        border: 1px solid #f2f2f2;
        border-bottom: 2px solid ${props => props.theme.red};

        & ~ label p {
          color: ${props => props.theme.red};
        }
      }

      select {
        font-weight: 400;
        background: transparent;
        width: 100%;
        height: 45px;
        border: none;
        padding: 0;
        margin: -2px 0 0;
      }
    }

    input:not([type='submit']) {
      font-weight: 400;
      &:focus {
        border-radius: 2px 2px 0 0;
        border: 1px solid #eee;
        border-bottom: 2px solid ${props => props.theme.red};

        & ~ label p {
          color: ${props => props.theme.red};
        }
      }
    }

    textarea {
      font-weight: 400;
    }

    textarea:focus {
      border: 2px solid ${props => props.theme.red};
    }

    label p {
      display: flex;
      align-items: flex-end;
      height: 28px;
      font-weight: 400;
      margin-top: -10px;
      margin-left: 5px;
    }
  }

  .new-wholesale-item-form {
    padding-top: 15px;
  }

  .form-row.whs input {
    border: 2px solid #eee !important;
    margin: 0;
    height: 45px;

    &:focus {
      border-radius: 2px 2px 0 0;
      border: 2px solid ${props => props.theme.red} !important;
    }
  }

  .form-row.whs .select-menu {
    border: 2px solid #eee !important;
    margin: 0;
    height: 45px;

    &.focused {
      padding: 0;
      border-radius: 2px 2px 0 0;
      border: 2px solid ${props => props.theme.red} !important;

      & ~ label p {
        color: ${props => props.theme.red};
      }
    }
  }

  .form-row.whs p {
    padding: 5px 0;
  }

  .form-row.info .can-order {
    display: flex;
    align-items: center;

    p {
      margin: 0;
      height: 20px;
    }

    input {
      width: auto;
      height: 15px;
      margin: 0 0 0 15px;
    }
  }

  .form-row.info .user-can-order {
    height: 45px !important;
  }

  .form-row.permissions label {
    display: flex;
    align-items: center;

    p {
      width: 150px;
    }
  }
`;

const FormRow = styled.section``;

export default Form;
