import axios from 'axios';
import React, { useEffect, useState } from 'react';

import NewsList from './NewsList';

const NewsContainer = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&apiKey=cc58e36c7c754373a1bfb1d1435c7f3f${query}`,
        );
        setArticles(response.data.articles);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);
  if (loading) return null;
  if (!articles) return null;
  return <NewsList articles={articles} />;
};

export default NewsContainer;
