import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';
import { PokedexContext } from '../context/PokedexContext';

// TODO get routing working / pokemonId
const Pokedex = ({ pokemonId }) => {
  console.log(pokemonId)
  // const [setDisplayCard] = useContext(PokedexContext);
  // setDisplayCard(true);

  // useEffect(() => {
  // });

  return (
    <section className='container'>
      <h1>Pokedex</h1>
      <Link to='/search'>
        Search
      </Link>
      <Card isSearch={false} display={true} />
    </section>
  );
};

export default Pokedex;
