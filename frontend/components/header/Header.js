import React, { Component } from 'react';
import Link from 'next/link';
import Router, { withRouter } from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';
import DropdownMenu from './DropdownMenu';
import { HeaderStyles } from './styles/HeaderStyles';
import Logo from '../../elements/Logo';
import Icon from '../../elements/Icon';
import Me from '../auth/Me';

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
        <Me>
          {({ data: { me } }) => (
            <HeaderStyles>
              {/* <div className="header-top-container">
                <div className="header-top">
                  <div className="header-contact">
                    <div title="Phone Number">
                      <Icon name="phone" />
                      <span>(330) 608-9153</span>
                    </div>
                    <div title="Fax Number">
                      <Icon name="fax" />
                      <span>(330) 267-1332</span>
                    </div>
                  </div>

                  {me && (
                    <div className="shopping-cart">
                      <Link href="/cart">
                        <a id="cart">
                          <Icon name="cart" />
                          <span id="inCart">{me.cart.length}</span>
                        </a>
                      </Link>
                    </div>
                  )}
                </div>
              </div> */}
              <div className="header-inner">
                <Link href="/">
                  <a>
                    <Logo />
                  </a>
                </Link>
                {me ? (
                  <>
                    <Nav dept={router.query.dept} pathname={router.pathname} />
                    <div className="header-right">
                      {me && (
                        <>
                          <div id="dropdownMenuContainer">
                            <button
                              id="dropdownMenuBtn"
                              onClick={this.toggleDropdownMenu}
                            >
                              <Icon name="user" />
                            </button>
                            {this.state.dropdownMenuVisible && (
                              <DropdownMenu
                                me={me}
                                toggleDropdownMenu={this.toggleDropdownMenu}
                              />
                            )}
                          </div>
                          <div className="icon-bubble">
                            <div className="shopping-cart">
                              <Link href="/cart">
                                <a id="cart">
                                  <button>
                                    <Icon name="cart" />
                                  </button>
                                  {/* <span id="inCart">{me.cart.length}</span> */}
                                </a>
                              </Link>
                            </div>
                          </div>
                          <div
                            id="notifications"
                            className="icon-bubble new-alert"
                          >
                            <button>
                              <Icon name="bell" />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  <Link href="/sign-in">
                    <a>Sign In</a>
                  </Link>
                )}
              </div>
            </HeaderStyles>
          )}
        </Me>
      );
    }

    return <></>;
  }
}

export default withRouter(Header);
