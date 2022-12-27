import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';

const Stack = createNativeStackNavigator ();
const ProductNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductList"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ title: "", headerTransparent: true, headerBackVisible: true }}
      />
    </Stack.Navigator>
  );
};

export default ProductNavigator;
