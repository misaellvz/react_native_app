import { FlatList } from 'react-native'
import React from 'react'
import ProductCard from '../../screens/ProductCard'

const ProductsList = ({ data }) => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <ProductCard item={item} />}
    />
  )
}

export default ProductsList
