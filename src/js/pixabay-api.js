import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55067612-eb9022102def9b95fd4a63101';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      page,
      per_page: PER_PAGE,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}