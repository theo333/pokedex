import React from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';

// TODO get routing working / pokemonId
const Pokedex = ({ pokemonId }) => {
  console.log(pokemonId)
  return (
    <>
      <Link to='/search'>
        Search
      </Link>
      <Card />
    </>
  );
};

export default Pokedex;
