import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  position: relative;
  top: 50px;
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 70vw;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ articles }) => {
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.title} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
