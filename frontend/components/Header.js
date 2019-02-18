import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';
import UserDropdown from './UserDropdown';
import { HeaderStyles } from './styles/HeaderStyles';
import Logo from '../elements/Logo';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = ({ page }) => (
  <HeaderStyles page={page}>
    <div className="header-inner">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Nav />
      <UserDropdown />
    </div>
  </HeaderStyles>
);

export default Header;
