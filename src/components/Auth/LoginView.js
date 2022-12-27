import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from '../../Styles/LoginStyles';

const LoginView = ({ formik, error }) => {
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

export default LoginView;
