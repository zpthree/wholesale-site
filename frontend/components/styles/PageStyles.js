import styled, { createGlobalStyle } from 'styled-components';

export const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

export const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
  padding: 1.5rem;
`;

export const theme = {
  red: '#98272b',
  darkred: '#8e2428',
  lightred: '#ac2c31',
  green: '#84a333',
  darkgreen: '#74902d',
  lightgreen: '#94b639',
  black: '#393939',
  grey: '#aaa',
  darkgrey: '#888',
  lightgrey: '#ccc',
  offwhite: '#ededed',
  white: '#fff',
  maxWidth: '1400px',
};

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background: ${props => props.theme.white};
    padding-top: 70px;
    transition: padding 0.15s ease-in-out;
    min-height: 100vh;
    -webkit-print-color-adjust: exact !important;
    color-adjust: exact !important;
    font-size: 1.6rem;
    line-height: 2;
    font-weight: 300;
    font-family: 'Nunito Sans', sans-serif;
    
    @media print {
      padding-top: 0;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Bitter', serif;
    margin: 0;
    font-family: ${props => props.theme.red};
    font-weight: 600;
  }

  h1 { font-size: 4rem; }
  h2 { font-size: 3.5rem; }
  h3 { font-size: 3rem; }
  h4 { font-size: 2.5rem; }
  h5 { font-size: 2rem; }
  h6 { font-size: 1.25rem; }

  li,
  p,
  a,
  textarea {
    line-height: 1.35;
  }

  p {
    margin: 0;
    outline: none;
  }

  p:not(:last-child) {
    margin-bottom: 10px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input[type='submit'] {
    cursor: pointer;
    font-family: 'Nunito Sans', sans-serif;
  }

  input,
  textarea,
  select {
    font-size: 1.6rem;
  }

  .text-center {
    text-align: center;
  }

  .asterisk {
    color: ${props => props.theme.red};
  }
`;
