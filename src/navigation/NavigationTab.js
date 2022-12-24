import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Account from '../screens/Account';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();
const NavigationTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
