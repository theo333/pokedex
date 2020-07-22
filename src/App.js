import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Card from './components/Card';
import Search from './components/Search';

const App = () => {
  return (
    <>
      <Switch>
        {/* TODO get ID match working */}
        {/* <Route exact path='/:pokemonId' render={({ match }) => <Card pokemonId={match.params.pokemonId} />} /> */}
        <Route exact path='/search' component={Search} />
        <Route path='/' component={Card} />
      </Switch>
    </>
  );
}

export default App;
