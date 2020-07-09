import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/create">
          <CreatePage />
        </Route>
        <Route path="/:id/edit">
          <EditPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
