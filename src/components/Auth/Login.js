import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import useAuth from '../../hooks/useAuth';
import initialValues from '../../utils/initialValues';
import { user, userDetails } from '../../utils/userDB';
import validationSchema from '../../utils/validationSchema';
import LoginView from './LoginView';

const Login = () => {
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: ({ username, password }) => {
      setError('');
      if (username !== user.username || password !== user.password) {
        setError('Username or password incorrect');
      } else {
        login(userDetails);
        navigation.replace('Home');
        formik.setValues(initialValues());
      }
    },
  });
  return <LoginView formik={formik} error={error} />;
};
export default Login;
