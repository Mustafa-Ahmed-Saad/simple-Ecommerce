import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  // email: yup.string().strict(false).trim().required('This Field Is Required'),
  email: yup.string().email().required('This Field Is Required'),
  password: yup.string().min(8).required('This Field Is Required'),
});

export const UpdateUserInfoSchema = yup.object().shape({
  // email: yup.string().strict(false).trim().required('This Field Is Required'),
  email: yup.string().email().required('This Field Is Required'),
  password: yup.string().min(8).required('This Field Is Required'),
});
