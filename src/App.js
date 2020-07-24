import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Pokedex from './components/Pokedex';
import Search from './components/Search';

const App = () => {
  return (
    <main>
      <section className='container'>
        < article className='main' >
          <Switch>
            <Route exact path='/search' component={Search} />
            <Route path='/' component={Pokedex} />
          </Switch>
        </article>
      </section>
    </main >
  );
}

export default App;
