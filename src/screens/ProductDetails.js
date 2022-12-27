import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { styles } from '../Styles/ProductDetailsStyles';

const ProductDetails = ({ route: { params: { params } } }) => {
  const item = JSON.parse(params);
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
      <View style={styles.description}>
        <ScrollView>
          <Text>{item.description}</Text>
        </ScrollView>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.rate}>&#9733; {item.rating.rate}</Text>
      </View>
    </View>
  )
}

export default ProductDetails;
