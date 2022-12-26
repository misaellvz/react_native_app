import { useCallback, useEffect, useState } from 'react';
import useProductsListState from '../hooks/products-list';

export default function useProductsFilterListState({ title, menClothes, womenClothes, electronics, jewelery, minPrice, maxPrice }) {
  console.log('Entra acá en filter?', title);
  console.log('Entra acá en filter?', menClothes);
  console.log('Entra acá en filter?', womenClothes);
  console.log('Entra acá en filter?', electronics);
  console.log('Entra acá en filter?', jewelery);
  console.log('Entra acá en filter?', minPrice);
  console.log('Entra acá en filter?', maxPrice);
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
            (title && item.title.startsWith(title)) ||
            (
                (menClothes && item.category === "men's clothing") ||
                (womenClothes && item.category === "women's clothing") ||
                (electronics && item.category === 'electronics') ||
                (jewelery && item.category === 'jewelery')
            ) ||
            (minPrice && item.price >= minPrice) ||
            (maxPrice && item.price <= maxPrice)
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
