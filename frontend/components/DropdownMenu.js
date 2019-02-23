import Link from 'next/link';
import DropdownMenuStyles from './styles/DropdownMenuStyles';
import SignOut from './SignOut';

const DropdownMenu = ({ me, toggleDropdownMenu }) => (
  <DropdownMenuStyles>
    <ul>
      <div className="dropdown-menu-header">
        <h5>
          {me.firstName} {me.lastName && ` ${me.lastName}`}
        </h5>
      </div>
      <li className="separator" />
      <li>
        <Link href="/account">
          <a onClick={toggleDropdownMenu}>Account</a>
        </Link>
      </li>
      <li>
        <Link href="/account/invoices">
          <a onClick={toggleDropdownMenu}>Invoices</a>
        </Link>
      </li>
      <li className="separator" />
      <li>
        <a href="https://sommersmarket.com">sommersmarket.com</a>
      </li>
      <li className="separator" />
      <SignOut />
    </ul>
  </DropdownMenuStyles>
);

export default DropdownMenu;
