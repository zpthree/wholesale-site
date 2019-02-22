import Link from 'next/link';
import Router, { withRouter } from 'next/router';
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

const Header = ({ router }) => {
  if (router.pathname !== '/sign-in') {
    return (
      <HeaderStyles>
        <div className="header-inner">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <Nav dept={router.query.dept} pathname={router.pathname} />
          <UserDropdown />
          <Link href="/sign-in">
            <a>Sign In</a>
          </Link>
        </div>
      </HeaderStyles>
    );
  }

  return <></>;
};

export default withRouter(Header);
