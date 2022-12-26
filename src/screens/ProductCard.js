import { Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../Styles/ProductCardStyles';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ item }) => {
  const navigation = useNavigation();
  const goToProductDetails = () => {
    navigation.navigate('ProductDetails', { id: item.id, params: JSON.stringify(item) });
  }
  return (
    <TouchableOpacity style={styles.card} onPress={goToProductDetails}>
      <Text style={styles.name}>{item.title}</Text>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
    </TouchableOpacity>
  );
};

export default ProductCard;
