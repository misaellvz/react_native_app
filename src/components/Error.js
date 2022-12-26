import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../Styles/ErrorStyles'

const Error = ({ error }) => {
  return (
    <View>
      <Text style={styles.error}>{error && error.message || 'Sorry, something went wrong'}</Text>
    </View>
  )
}

export default Error;
