import React from 'react';
import { NavBarAll, NavBarCartIcon, NavBarLeft, NavBarRight, NavBarWrapper } from './NavBarEl';
import { Container } from './../../constants/index';
import { Link, useLocation } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/user/user.action';

const NavBar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const {
    loginInfo: { email },
  } = useSelector(({ user }) => user);

  let { pathname } = useLocation();
  const dispatch = useDispatch();

  const handelLogout = () => {
    dispatch(logout());
  };

  return (
    <NavBarAll>
      <Container>
        <NavBarWrapper>
          <NavBarLeft>
            <Link to="/">
              <h3>My Logo</h3>
            </Link>
          </NavBarLeft>

          {!email ? (
            pathname === '/login' ? null : (
              <NavBarCartIcon>
                <Link to="/cart">
                  <span>{cartItems.length}</span>
                  <TiShoppingCart />
                </Link>
              </NavBarCartIcon>
            )
          ) : (
            <NavBarCartIcon>
              <Link to="/cart">
                <span>{cartItems.length}</span>
                <TiShoppingCart />
              </Link>
            </NavBarCartIcon>
          )}

          {email ? (
            <NavBarRight>
              <Link to="/user/profile" className="user-email">
                {email}
              </Link>
              <button className="logout" onClick={handelLogout}>
                logOut
              </button>
            </NavBarRight>
          ) : (
            <NavBarRight>
              <Link to="/login">Login</Link>
              <Link to="/">Register</Link>
            </NavBarRight>
          )}
        </NavBarWrapper>
      </Container>
    </NavBarAll>
  );
};

export default NavBar;
