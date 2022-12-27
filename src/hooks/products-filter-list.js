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
          return (
            (title && item.title.startsWith(title) || true) &&
            (
                (menClothes && item.category === 'men_clothes') ||
                (womenClothes && item.category === 'women_clothes') ||
                (electronics && item.category === 'electronics') ||
                (jewelery && item.category === 'jewelery') || true
            ) &&
            (minPrice && item.price >= minPrice || true) &&
            (maxPrice && item.price <= maxPrice || true)
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
