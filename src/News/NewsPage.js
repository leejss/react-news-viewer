import React from 'react';
import Categories from '../Categories/Categories';
import NewsContainer from './NewsContainer';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';
  return (
    <>
      <Categories category={category} />
      <NewsContainer category={category} />
    </>
  );
};

export default NewsPage;
