import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputForm from '../../components/input-form';
import { Container } from '../../constants';
import { updateUserInfo } from '../../redux/user/user.action';
import { ToastContainer, toast } from 'react-toastify';
import { UpdateUserInfoSchema } from '../../validation';
import { UserProfileUpdatePageStyled } from './UserProfileUpdatePageEl';

const UserProfileUpdatePage = ({ loginInfo }) => {
  const { email, password } = loginInfo;

  const [initValues, setInitValues] = useState({ email: email, password: password });
  const dispatch = useDispatch();

  const handelSubmit = (values) => {
    console.log(values);
    dispatch(updateUserInfo(values));
    toast.success(`Updated succesfuly`, {
      position: 'bottom-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
    setInitValues({ email: '', password: '' });
  };

  return (
    <UserProfileUpdatePageStyled>
      <Container>
        {/* dont forget validationSchema={loginSchema} */}
        <Formik initialValues={initValues} onSubmit={handelSubmit} validationSchema={UpdateUserInfoSchema}>
          {(props) => {
            return (
              <div className="login-box">
                <h2>update info</h2>
                <Form autoComplete="off">
                  {/* email */}
                  <InputForm
                    type="email"
                    name="email"
                    id="updateEmail"
                    placeholder=" "
                    labelText="Email"
                    parantClassName="user-box"
                  />

                  {/* password */}
                  <InputForm
                    type="password"
                    name="password"
                    id="updatePassword"
                    placeholder=" "
                    labelText="Password"
                    parantClassName="user-box"
                  />

                  <button type="submit">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Update
                  </button>
                </Form>
              </div>
            );
          }}
        </Formik>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Container>
    </UserProfileUpdatePageStyled>
  );
};

export default UserProfileUpdatePage;
