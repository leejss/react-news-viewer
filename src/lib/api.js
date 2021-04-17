import axios from 'axios';

export const getNews = (query) =>
  axios.get(
    `https://newsapi.org/v2/top-headlines?country=kr&apiKey=cc58e36c7c754373a1bfb1d1435c7f3f${query}`,
  );
