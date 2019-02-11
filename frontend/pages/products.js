import styled from 'styled-components';
import Products from '../components/Products';

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
    <Products dept={props.query.dept} />
  </ProductsPageStyles>
);

export default ProductsPage;
