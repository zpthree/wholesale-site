import AccountLayoutStyles from './styles/AccountLayoutStyles';
import AccountSidebar from './AccountSidebar';
import PleaseSignIn from '../components/PleaseSignIn';

const AccountLayout = ({ children, active }) => (
  <PleaseSignIn>
    <AccountLayoutStyles>
      <AccountSidebar active={active} />
      <div className="account-content">{children}</div>
    </AccountLayoutStyles>
  </PleaseSignIn>
);

export default AccountLayout;
