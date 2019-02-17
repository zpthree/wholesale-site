import Link from 'next/link';
import styled from 'styled-components';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/items">
      <a>All</a>
    </Link>
    <Link href="/items?dept=dry-groceries">
      <a>Dry Groceries</a>
    </Link>
    <Link href="/items?dept=non-food">
      <a>Non-Food</a>
    </Link>
    <Link href="/items?dept=refrigerated">
      <a>Refrigerated</a>
    </Link>
    <Link href="/items?dept=frozen">
      <a>Frozen</a>
    </Link>
    <Link href="/items?dept=produce">
      <a>Produce</a>
    </Link>
  </NavStyles>
);

export default Nav;
