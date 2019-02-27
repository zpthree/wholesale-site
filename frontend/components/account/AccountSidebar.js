import Link from 'next/link';
import AccountSidebarStyles from './styles/AccountSidebarStyles';

const AccountSidebar = ({ active }) => (
  <AccountSidebarStyles>
    <h5>Account Options</h5>
    <Link href="/account/invoices">
      <a className={active === 'invoices' ? 'active' : ''}>Invoices</a>
    </Link>
    <Link href="/account/sales">
      <a className={active === 'sales' ? 'active' : ''}>Sales</a>
    </Link>
    <Link href="/account/add-item">
      <a className={active === 'add-item' ? 'active' : ''}>Add Item</a>
    </Link>
    <Link href="/account/add-user">
      <a className={active === 'add-user' ? 'active' : ''}>Add User</a>
    </Link>
    <Link href="/account/users">
      <a className={active === 'users' ? 'active' : ''}>Users</a>
    </Link>
    <Link href="/account/update-user">
      <a className={active === 'update-user' ? 'active' : ''}>
        Update Account Info
      </a>
    </Link>
    <Link href="/account/print-list-with-pictures">
      <a className={active === 'print-list-with-pictures' ? 'active' : ''}>
        Print List (pictures)
      </a>
    </Link>
    <Link href="/account/print-list">
      <a className={active === 'print-list' ? 'active' : ''}>
        Print List (text only)
      </a>
    </Link>
  </AccountSidebarStyles>
);

export default AccountSidebar;
