import React from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';

// TODO get routing working / pokemonId
const Pokedex = ({ pokemonId }) => {
  console.log(pokemonId)
  return (
    <section className='container'>
      <h1>Pokedex</h1>
      <Link to='/search'>
        Search
      </Link>
      <Card isSearch={false} />
    </section>
  );
};

export default Pokedex;
