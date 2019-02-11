import Link from 'next/link';
import styled from 'styled-components';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/products">
      <a>All</a>
    </Link>
    <Link href="/products?dept=dry-groceries">
      <a>Dry Groceries</a>
    </Link>
    <Link href="/products?dept=non-food">
      <a>Non-Food</a>
    </Link>
    <Link href="/products?dept=refrigerated">
      <a>Refrigerated</a>
    </Link>
    <Link href="/products?dept=frozen">
      <a>Frozen</a>
    </Link>
    <Link href="/products?dept=produce">
      <a>Produce</a>
    </Link>
  </NavStyles>
);

export default Nav;
