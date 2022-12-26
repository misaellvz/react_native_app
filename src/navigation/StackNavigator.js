import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../components/Auth/Login';
import NavigationTab from './NavigationTab';

const Stack = createNativeStackNavigator ();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Home"
        component={NavigationTab}
        options={{ title: "", headerTransparent: true, headerBackVisible: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
