import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Pokedex from './components/Pokedex';
import Search from './components/Search';

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/search' component={Search} />
        <Route path='/' component={Pokedex} />
      </Switch>
    </main>
  );
}

export default App;
