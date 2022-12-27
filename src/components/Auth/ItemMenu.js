import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../Styles/ItemMenuStyles';

const ItemMenu = ({ title, text }) => {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
};

export default ItemMenu;
