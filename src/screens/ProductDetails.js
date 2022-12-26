import { View, Text, Image } from 'react-native';
import React from 'react';
import { styles } from '../Styles/ProductDetailsStyles';

const ProductDetails = ({ route: { params: { params } } }) => {
  const item = JSON.parse(params);
  console.log('item: ', item);
  console.log('item.title: ', item.title);
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.rate}>&#9733; {item.rating.rate}</Text>
      </View>
    </View>
  )
}

export default ProductDetails
