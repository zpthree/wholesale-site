import styled from 'styled-components';

const InvoiceItemStyles = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.offwhite};

  p {
    margin: 0;
  }
`;

export default InvoiceItemStyles;