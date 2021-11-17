import React, { useState } from 'react';
import InputForm from '../../components/input-form';
import { loginSchema } from '../../validation';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { saveLoginInfo } from '../../redux/user/user.action';
import { LoginPageStyled } from './LoginPageEl';

const LoginPage = () => {
  const [initValues, setInitValues] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const handelSubmit = (values) => {
    dispatch(saveLoginInfo(values));
    setInitValues({ email: '', password: '' });
  };
  return (
    <LoginPageStyled>
      <Formik initialValues={initValues} onSubmit={handelSubmit} validationSchema={loginSchema}>
        {(props) => {
          return (
            <Form id="login-form" autoComplete="off">
              <h2>Login</h2>
              {/* { type, name, id, placeholder, errorMessage, labelText } */}
              {/* email */}
              <InputForm
                type="email"
                name="email"
                id="LoginEmail"
                labelText="Email"
                placeholder="Email"
                errorMessage="Sorry You Should Enter Valid Email"
              />

              {/* { type, name, id, placeholder, errorMessage, labelText } */}
              {/* password */}
              <InputForm
                type="password"
                name="password"
                id="LoginPassword"
                labelText="password"
                placeholder="password"
                errorMessage="Sorry You Should Enter Valid Email"
              />

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </LoginPageStyled>
  );
};

export default LoginPage;
