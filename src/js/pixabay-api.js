const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43235509-ebd3145eb150405846e36d932';
import { page } from "../main.js";

export async function pixabayAPI(images) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: images,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
    per_page: 15,
  });

  const response = await fetch(`${BASE_URL}?${params}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

