import styled from 'styled-components';
import Items from '../components/Items';

const ProductsPageStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const ProductsPage = props => (
  <ProductsPageStyles>
    <Items dept={props.query.dept} page={parseFloat(props.query.page) || 1} />
  </ProductsPageStyles>
);

export default ProductsPage;
