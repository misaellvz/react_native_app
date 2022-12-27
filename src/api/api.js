import { API_BASE } from '../utils/constants';

export async function getDataFromAPI(endpoint) {
  try {
    const response = await fetch(`${API_BASE}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Status code = ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}
