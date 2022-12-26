import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import ProductsList from '../components/Product/ProductsList';
import Error from '../components/Error';
import ProductFilterDialog from '../components/Product/ProductFilterDialog';
import Spinner from '../components/Spinner';
import useProductsFilterListState from '../hooks/products-filter-list';
import { styles } from '../Styles/ButtonStyles';

const Home = () => {
  const [ open, setOpen ] = useState(false);
  const [ filter, setFilter ] = useState({});
  const { loading, data, error } = useProductsFilterListState(filter);

  function handleClose(dialogCloseEvent) {
    setOpen(false);
    setFilter(dialogCloseEvent);
  }
  return (
    <View style={styles.container}>
      <ProductFilterDialog open={open} onClose={handleClose} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => setOpen(true)} ><Text style={styles.button}>Filter</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => handleClose({})} ><Text style={styles.button}>Cancel</Text></TouchableOpacity>
      </View>
      {loading && <Spinner />}
      {data && <ProductsList data={data} />}
      {error && <Error error={error}/>}
    </View>
  )
}

export default Home;
