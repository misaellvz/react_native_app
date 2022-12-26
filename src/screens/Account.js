import React from 'react';
import { View } from 'react-native';
import Login from '../components/Auth/Login';
import UserData from '../components/Auth/UserData';
import useAuth from "../hooks/useAuth";

const Account = () => {
  const { auth } = useAuth();
  return (
    <View>
      {auth ? <UserData /> : <Login/>}
    </View>
  )
}

export default Account;
