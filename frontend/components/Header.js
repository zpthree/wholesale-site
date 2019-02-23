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

  componentDidMount = () => {
    document.body.addEventListener('click', this.handleClickOutsideMenu);
  };

  componentWillUnmount = () => {
    document.body.removeEventListener('click', this.handleClickOutsideMenu);
  };

  handleClickOutsideMenu = e => {
    const dropdownMenu = document.getElementById('dropdownMenuContainer');
    if (!dropdownMenu) return null;

    if (e.target !== dropdownMenu && !dropdownMenu.contains(e.target)) {
      this.setState({ dropdownMenuVisible: false });
    }
  };

  toggleDropdownMenu = () => {
    this.setState({
      dropdownMenuVisible: !this.state.dropdownMenuVisible,
    });
  };

  render() {
    const { router } = this.props;

    if (
      router.pathname !== '/sign-in' &&
      router.pathname !== '/request-new-password' &&
      router.pathname !== '/reset-password'
    ) {
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
                          onClick={this.toggleDropdownMenu}
                        >
                          <Icon name="dropdownMenu" height="35px" />
                        </button>
                        {this.state.dropdownMenuVisible && (
                          <DropdownMenu
                            me={me}
                            toggleDropdownMenu={this.toggleDropdownMenu}
                          />
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
