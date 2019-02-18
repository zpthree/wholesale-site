import styled from 'styled-components';

const Btn = styled.button`
  transition: background 0.15s ease-out;
  height: 3.5rem;
  border-radius: 0.3rem;
  padding: 0.5rem 1.5rem;
  color: ${props => props.theme.white};
  border: none;
  cursor: pointer;
  font-size: 1.4rem;

  background: ${({ type, theme }) => {
    switch (type) {
      case 'submit':
        return theme.green;
      case 'cancel':
        return theme.darkgrey;
    }
  }};

  &:enabled:hover {
    background: ${({ type, theme }) => {
      switch (type) {
        case 'submit':
          return theme.lightgreen;
        case 'cancel':
          return theme.grey;
        default:
          return theme.green;
      }
    }};
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default Btn;
