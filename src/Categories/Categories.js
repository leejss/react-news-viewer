import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const categories = [
  {
    category: 'all',
    text: 'All',
  },
  {
    category: 'business',
    text: 'Business',
  },
  {
    category: 'entertainment',
    text: 'Entertainment',
  },
  {
    category: 'health',
    text: 'Health',
  },
  {
    category: 'science',
    text: 'Science',
  },
  {
    category: 'sports',
    text: 'Sports',
  },
  {
    category: 'technology',
    text: 'Technology',
  },
];

const CategoriesBlock = styled.div`
  font-family: 'Enriqueta', serif;
  position: fixed;
  z-index: 999;
  top: 0;
  display: flex;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
  background: #fe0000;
  color: #fff;
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  padding-bottom: 0.25rem;
  font-weight: 900;
  transition: all 0.1s;
  color: #fff;

  &:hover {
    color: #000;
  }

  &.active {
    border-bottom: 5px solid #fff;
  }

  ${(props) =>
    props.active &&
    css`
      border-bottom: 5px solid #fff;
    `}

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ category }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.category}
          activeClassName="active"
          exact={c.category === 'all'}
          to={c.category === 'all' ? '/' : `/${c.category}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
