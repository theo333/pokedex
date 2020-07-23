import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Pokedex from './components/Pokedex';
import Search from './components/Search';

const App = () => {
  return (
    <main>
      <Switch>
        {/* TODO get ID match working */}
        <Route exact path='/:pokemonId' render={({ match }) => <Pokedex pokemonId={match.params.pokemonId} />} />
        <Route exact path='/search' component={Search} />
        <Route path='/' component={Pokedex} />
      </Switch>
    </main>
  );
}

export default App;
