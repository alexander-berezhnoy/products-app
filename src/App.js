import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';

import './App.css';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/create" component={CreatePage} />
        <Route path="/:id/edit" component={EditPage} />
      </Switch>
  )
}

export default App;
