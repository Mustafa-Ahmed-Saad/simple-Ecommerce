import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from '../../constants';
import { UserProfilePageStyled } from './UserProfilePageEl';

const UserProfilePage = () => {
  const {
    loginInfo: { email },
  } = useSelector(({ user }) => user);

  return (
    <UserProfilePageStyled>
      <Container>
        {/* TODO: make this a Formik and enable user to edit his infomation */}
        <h3>Email: {email}</h3>
        <Link to="/user/profile/update">update</Link>
      </Container>
    </UserProfilePageStyled>
  );
};

export default UserProfilePage;
