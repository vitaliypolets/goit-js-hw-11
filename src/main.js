import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from "./js/render-functions";

const form = document.querySelector(".form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements["search-text"].value.trim();

  if (!searchQuery) {
    iziToast.warning({
      message: "Please fill in the search field!",
      position: "topRight",
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchQuery)
    .then(response => {
      const images = response.data.hits;

      if (images.length === 0) {
        iziToast.error({
          message:
            "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
        });
        return;
      }

      createGallery(images);
    })
    .catch(error => {
      iziToast.error({
        message: "Something went wrong. Please try again later!",
        position: "topRight",
      });
      console.error(error);
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
});