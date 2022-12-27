import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity, View
} from 'react-native';
import * as Yup from 'yup';
import useAuth from '../../hooks/useAuth';
import { styles } from '../../Styles/LoginStyles';
import initialValues from '../../utils/initialValues';
import { user, userDetails } from '../../utils/userDB';
import validationSchema from '../../utils/validationSchema';

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
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sing in</Text>
      <TextInput
        placeholder="User name"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonTitle}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};
export default Login;
