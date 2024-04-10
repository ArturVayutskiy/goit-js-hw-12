import { pixabayAPI } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-images');
const loader = document.querySelector('.loader');
//Кнопка Load More
const LoadBtn = document.querySelector('.load-more-button');

let page = 1;

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const value = searchInput.value.trim();
    if (value === "") {
      iziToast.error({
        message: 'Please enter a search term!',
        position: 'topRight',
      });
      return;
    }

    loader.style.display = 'block';

    pixabayAPI(value)
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.error({
            title: 'Error!',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
        }
        renderImages(data.hits);
      })

      .catch(error => {
        console.error('Error fetching images:', error);
        throw error;
      })
      .finally(() => {
        loader.style.display = 'none';
      });
    searchInput.value = '';
  });
});


// LoadBtn.addEventListener(click, async () => {
//   try {
//     const
//   }
// });