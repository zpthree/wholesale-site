import Link from 'next/link';
import Icon from '../elements/Icon';
import UserDropdownStyles from './styles/UserDropdownStyles';

const UserDropdown = () => (
  <UserDropdownStyles>
    <Link href="/account">
      <a>
        <Icon name="userDropdown" height="35px" />
      </a>
    </Link>
  </UserDropdownStyles>
);

export default UserDropdown;
