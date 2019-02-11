import AccountLayoutStyles from './styles/AccountLayoutStyles';
import AccountSidebar from './AccountSidebar';

const AccountLayout = ({ children, active }) => (
  <AccountLayoutStyles>
    <AccountSidebar active={active} />
    <div className="account-content">{children}</div>
  </AccountLayoutStyles>
);

export default AccountLayout;
