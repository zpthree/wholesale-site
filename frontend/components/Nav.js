import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';

const Nav = ({ dept, pathname }) => (
  <NavStyles>
    <User>
      {data => {
        console.log(data);
        return <p>User</p>;
      }}
    </User>
    <Link href="/items">
      <a className={pathname === '/items' && !dept ? 'on' : ''}>All</a>
    </Link>
    <Link href="/items?dept=dry-groceries">
      <a className={dept && dept === 'dry-groceries' ? 'on' : ''}>
        Dry Groceries
      </a>
    </Link>
    <Link href="/items?dept=non-food">
      <a className={dept && dept === 'non-food' ? 'on' : ''}>Non-Food</a>
    </Link>
    <Link href="/items?dept=refrigerated">
      <a className={dept && dept === 'refrigerated' ? 'on' : ''}>
        Refrigerated
      </a>
    </Link>
    <Link href="/items?dept=frozen">
      <a className={dept && dept === 'frozen' ? 'on' : ''}>Frozen</a>
    </Link>
    <Link href="/items?dept=produce">
      <a className={dept && dept === 'produce' ? 'on' : ''}>Produce</a>
    </Link>
  </NavStyles>
);

export default Nav;
