import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';
import getSinglePokemon from '../utils';

const Pokedex = () => {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [currentId, setCurrentId] = useState(1);
  const [error, setError] = useState('');

  useEffect(() => {
    getPokemon(currentId);
  }, [currentId]);

  // get single Pokemon object from API
  // used to display single Pokemon
  // pokemonIdentifier: ID (number)
  const getPokemon = async (pokemonIdentifier) => {
    try {
      const _currentPokemon = await getSinglePokemon(pokemonIdentifier);
      setCurrentPokemon(_currentPokemon);
      setError('');
    } catch (err) {
      console.log('Card err: ', err);
      setError('Sorry there is no Pokemon with that ID.  Please try again.');

    }
  };

  // change ID to previous or next Pokemon
  const changePokemon = direction => {
    // TODO add exceptions for first and last IDs
    const newId = direction === 'prev' ? currentId - 1 : currentId + 1;
    setCurrentId(newId);
  };

  return (
    <section className='container'>
      <h1>Pokedex</h1>
      <Link to='/search'>
        Search
      </Link>
      {error ? <h3 className='error-msg'>{error}</h3> : ''}
      <Card
        isSearch={false}
        currentPokemon={currentPokemon}
        changePokemon={changePokemon}
      />
    </section>
  );
};

export default Pokedex;
