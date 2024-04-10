const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43235509-ebd3145eb150405846e36d932';

export function pixabayAPI(images) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: images,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
    page: 1
  });

  return fetch(`${BASE_URL}?${params}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

