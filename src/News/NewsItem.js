import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  height: 100vh;
  text-align: right;
  /* border-bottom: 1px solid gray; */

  .thumbnail {
    text-align: left;
    img {
      display: block;
      height: 50vh;
      width: 50vw;
      object-fit: cover;
    }
  }

  /* 032c */
  .contents {
    color: #fff;
    font-size: 2rem;

    a {
      color: #fff;
    }

    a:hover {
      color: #fe0000;
    }
  }

  /* .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      height: 40vh;
      width: 30vw;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;

      a {
        color: #000;
      }
    }

    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  } */
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  const validImg = (url) => {
    if (!url) return false;
    return /https/.test(url);
  };

  return (
    <NewsItemBlock>
      <div className="thumbnail">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={
              validImg(urlToImage)
                ? urlToImage
                : 'https://makitweb.com/demo/broken_image/images/noimage.png'
            }
            alt="thumbnail"
          />
        </a>
      </div>

      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
