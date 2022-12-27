import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Error from '../components/Error';
import ProductFilterDialog from '../components/Product/ProductFilterDialog';
import ProductsList from '../components/Product/ProductsList';
import Spinner from '../components/Spinner';
import useProductsFilterListState from '../hooks/products-filter-list';
import { styles } from '../Styles/HomeStyles';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState({});
  const { loading, data, error } = useProductsFilterListState(filter);

  function handleClose(dialogCloseEvent) {
    setOpen(false);
    setFilter(dialogCloseEvent);
  }
  function handleFilter() {
    setOpen(true);
  }
  return (
    <View style={styles.container}>
      <ProductFilterDialog filter={filter} open={open} onClose={handleClose} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleFilter}>
          <Text style={styles.buttonTitle}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleClose({})}>
          <Text style={styles.button}>Clean</Text>
        </TouchableOpacity>
      </View>
      {loading && <Spinner />}
      {data && <ProductsList data={data} />}
      {error && <Error error={error} />}
    </View>
  );
};

export default Home;
