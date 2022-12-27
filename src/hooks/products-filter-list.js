import { useCallback, useEffect, useState } from 'react';
import useProductsListState from '../hooks/products-list';

export default function useProductsFilterListState({ title, menClothes, womenClothes, electronics, jewelery, minPrice, maxPrice }) {
  const { loading, data, error } = useProductsListState();
  const [response, setResponse] = useState({
    loading: true,
    data: null,
    error: null,
  });

  const filter = useCallback(() => {
    let filteredData = null;
    if (data && data.length > 0) {
      if(title || menClothes || womenClothes || electronics || jewelery || minPrice || maxPrice){
        filteredData = data.filter((item) => {
          const regex = new RegExp(title, 'gi');
          return (
            (title && regex.test(item.title)) ||
            (
              (menClothes && item.category === "men's clothing") ||
              (womenClothes && item.category === "women's clothing") ||
              (electronics && item.category === 'electronics') ||
              (jewelery && item.category === 'jewelery')
            ) ||
            ((minPrice && item.price >= minPrice) ||
            (maxPrice && item.price <= maxPrice))
          )
        })
      } else {
        filteredData = data;
      }
    }
    setResponse({
      loading,
      data: filteredData,
      error,
    })
  }, [title, menClothes, womenClothes, electronics, jewelery, minPrice, maxPrice, loading, data, error, setResponse])

  useEffect(() => {
    filter()
  }, [filter]);

  return response;
}
