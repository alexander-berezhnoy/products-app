import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
        <Route path="/create">
          <ProductPage isNew />
        </Route>
      </Switch>

    </BrowserRouter>
  )
}

export default App;
