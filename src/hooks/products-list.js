import { useEffect, useState } from 'react';
import { getDataFromAPI } from '../api/api';

export default function useProductsListState() {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: undefined,
  });

  useEffect(() => {
    (async () => {
      try {
        const data = await getDataFromAPI('products?limit=20&offset=1');
        setState({ loading: false, data, error: undefined });
      } catch (error) {
        setState({ loading: false, data: null, error });
      }
    })();
  }, []);

  return state;
}
