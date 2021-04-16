import React from 'react';
import { Route } from 'react-router';
import NewsPage from './News/NewsPage';

const App = () => {
  return <Route exact path="/:category?" component={NewsPage} />;
};

export default App;
