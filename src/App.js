import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import ProductPage from './pages/ProductPage';

import './App.css';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/products" component={MainPage} />
        <Route path="/products/create" component={CreatePage} />
        <Route exact path="/products/:id" component={ProductPage} />
        <Route path="/products/:id/edit" component={EditPage} />
      </Switch>
  )
}

export default App;
