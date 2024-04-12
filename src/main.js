import { pixabayAPI } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-images');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-more-button');

export let page = 1;
let searchTerm = ''; // Зберігаємо ключове слово пошуку
let currentImages = []; // Зберігаємо поточну колекцію зображень

loadBtn.style.display = 'none';

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const value = searchInput.value.trim();
    if (value === '') {
      iziToast.error({
        message: 'Please enter a search term!',
        position: 'topRight',
      });
      return;
    }

    loader.style.display = 'block';
    // 1. BUG FIX Після того, як новий пошук ініційовано поданням форми, 
    // сторінка має скинутися до 1, однак змінна page не скидається у слухачі подій пошуку. 
    // Це призводить до неправильного збільшення номеру сторінки при наступних натисканнях 
    // кнопки "Завантажити більше".
    page = 1; 

    try {
      const data = await pixabayAPI(value, page); // Виклик pixabayAPI з початковою сторінкою 1
      if (data.hits.length === 0) {
        // 2. BUGFIX Коли по запиту нічого не знайдено, треба очищувати сторінку від попереднього пошуку.
        renderImages([]);
        loadBtn.style.display = 'none';
        iziToast.error({
          title: 'Error!',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        renderImages(data.hits);
        loadBtn.style.display = 'block'; // Показати кнопку після отримання результатів
        searchTerm = value; // Зберігаємо ключове слово пошуку
        currentImages = data.hits; // Зберігаємо поточну колекцію зображень
        page = 1; // Скидаємо значення сторінки для нового пошуку
      }
    } catch (error) {
      console.error('Error fetching images:', error);
      iziToast.error({
        title: 'Error!',
        message:
          'An error occurred while fetching images. Please try again later.',
        position: 'topRight',
      });
    } finally {
      loader.style.display = 'none';
    }
    searchInput.value = '';
  });
});

loadBtn.addEventListener('click', async () => {
  try {
    loader.style.display = 'block';
    const data = await pixabayAPI(searchTerm, ++page); // Використовуємо збережене ключове слово пошуку та поточну сторінку
    if (data.hits.length === 0) {
      loadBtn.style.display = 'none';
      iziToast.info({
        message: "You've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      currentImages = [...currentImages, ...data.hits]; // Додаємо нові зображення до поточної колекції
      renderImages(currentImages);
      const firstImage = document.querySelector('.gallery a');
      // Scroll
      const cardHeight = firstImage.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    console.log(error);

  } finally {
    loader.style.display = 'none';
  }
});

