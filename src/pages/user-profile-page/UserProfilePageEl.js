import styled from 'styled-components';

export const UserProfilePageStyled = styled.div`
  a {
    text-decoration: none;
    border: 1px solid red;
    padding: 5px 10px;
    background: radial-gradient(red, #333);
    color: #fff;
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 5px red;
    }
  }
`;
