import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Account from '../screens/Account';
import Home from '../screens/Home';
import ProductNavigator from './ProductNavigator';

const Tab = createBottomTabNavigator();
const NavigationTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Store"
        component={ProductNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="store" color={color} size={size} />
          ),
          headerTitle: 'Store',
          headerTitleAlign: 'center',
          headerStatusBarHeight: 20
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          headerTitle: 'Account',
          headerTitleAlign: 'center',
          headerStatusBarHeight: 20
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
