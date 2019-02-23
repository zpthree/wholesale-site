import React, { Component } from 'react';
import Link from 'next/link';
import Router, { withRouter } from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';
import DropdownMenu from './DropdownMenu';
import { HeaderStyles } from './styles/HeaderStyles';
import Logo from '../elements/Logo';
import Icon from '../elements/Icon';
import User from './User';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

class Header extends Component {
  state = {
    dropdownMenuVisible: false,
  };
  render() {
    const { router } = this.props;

    if (router.pathname !== '/sign-in') {
      return (
        <HeaderStyles>
          <div className="header-inner">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
            <User>
              {({ data: { me } }) => {
                if (me) {
                  return (
                    <>
                      <Nav
                        dept={router.query.dept}
                        pathname={router.pathname}
                      />
                      <div id="dropdownMenuContainer">
                        <button
                          id="dropdownMenuBtn"
                          onClick={() => {
                            this.setState({
                              dropdownMenuVisible: !this.state
                                .dropdownMenuVisible,
                            });
                          }}
                        >
                          <Icon name="dropdownMenu" height="35px" />
                        </button>
                        {this.state.dropdownMenuVisible && (
                          <DropdownMenu me={me} />
                        )}
                      </div>
                    </>
                  );
                }

                return (
                  <Link href="/sign-in">
                    <a>Sign In</a>
                  </Link>
                );
              }}
            </User>
          </div>
        </HeaderStyles>
      );
    }

    return <></>;
  }
}

export default withRouter(Header);
