import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "55067612-eb9022102def9b95fd4a63101";

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    })
    .then(response => response.data);
}