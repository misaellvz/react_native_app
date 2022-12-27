import Slider from '@react-native-community/slider';
import React from 'react';
import { Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../Styles/ProductFilterDialogStyles';

const ProductFilterDialogView = ({ formik }) => {
  function numberFormat(number) {
    return number.toFixed(2).toLocaleString();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by: </Text>
      <Text style={styles.text}>Name:</Text>
      <TextInput
        placeholder="Type the product name"
        style={styles.textInput}
        autoCapitalize="none"
        value={formik.values.title}
        onChangeText={formik.handleChange('title')}
        onBlur={formik.handleBlur('title')}
      />
      <Text style={styles.text}>Category:</Text>
      <View style={styles.switcherContainer}>
        <Text style={styles.text}>Men's clothing</Text>
        <Switch
          style={styles.switcher}
          trackColor={{ false: '#767577', true: '#19f157' }}
          thumbColor={formik.values.menClothes ? '#fff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => formik.setFieldValue('menClothes', value)}
          value={formik.values.menClothes}
        />
      </View>
      <View style={styles.switcherContainer}>
        <Text style={styles.text}>Women's clothing</Text>
        <Switch
          style={styles.switcher}
          trackColor={{ false: '#767577', true: '#19f157' }}
          thumbColor={formik.values.womenClothes ? '#fff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => formik.setFieldValue('womenClothes', value)}
          value={formik.values.womenClothes}
        />
      </View>
      <View style={styles.switcherContainer}>
        <Text style={styles.text}>Electronics</Text>
        <Switch
          style={styles.switcher}
          trackColor={{ false: '#767577', true: '#19f157' }}
          thumbColor={formik.values.electronics ? '#fff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => formik.setFieldValue('electronics', value)}
          value={formik.values.electronics}
        />
      </View>
      <View style={styles.switcherContainer}>
        <Text style={styles.text}>Jewelery</Text>
        <Switch
          style={styles.switcher}
          trackColor={{ false: '#767577', true: '#19f157' }}
          thumbColor={formik.values.jewelery ? '#fff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => formik.setFieldValue('jewelery', value)}
          value={formik.values.jewelery}
        />
      </View>
      <Text style={styles.price}>
        Minimum price: ${numberFormat(formik.values.minPrice)}
      </Text>
      <Slider
        style={styles.slider}
        autoCapitalize="none"
        minimumValue={0}
        maximumValue={1000}
        value={formik.values.minPrice}
        onSlidingComplete={(value) => formik.setFieldValue('minPrice', value)}
      />
      <Text style={styles.price}>
        Maximum price: ${numberFormat(formik.values.maxPrice)}
      </Text>
      <Slider
        style={styles.slider}
        autoCapitalize="none"
        minimumValue={0}
        maximumValue={1000}
        value={formik.values.maxPrice}
        onSlidingComplete={(value) => formik.setFieldValue('maxPrice', value)}
      />
      <TouchableOpacity style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonTitle}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductFilterDialogView;
