import styled from 'styled-components';

export const NavBarAll = styled.div`
  background-color: #333333;
`;

export const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

export const NavBarLeft = styled.div`
  a {
    text-decoration: none;
  }
  h3 {
    margin: 0;
    color: #fff;
  }
`;

export const NavBarCartIcon = styled.div`
  position: relative;

  svg {
    font-size: 25px;
    color: #fff;
  }

  a {
    text-decoration: none;
  }

  a span {
    color: #fff;
    background-color: red;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    right: -12px;
    top: -7px;
    font-size: 12px;
  }
`;

export const NavBarRight = styled.div`
  a:not(.user-email),
  .logout {
    text-decoration: none;
    color: #fff;
    padding: 5px 10px;
    background-color: #1e9107;
    border-radius: 5px;
  }

  a:first-child {
    margin-right: 10px;
  }

  .logout {
    background-color: red;
    border: none;
  }

  .user-email {
    color: #fff;
    margin-right: 10px;
    text-decoration: none;
  }
`;
