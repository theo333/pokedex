import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'react-feather';

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
      setError(`Sorry there is no Pokemon with that ID.<br />Please try again.`);

    }
  };

  // navigation: move to previous or next Pokemon
  const changePokemon = direction => {
    // TODO add exceptions for first and last IDs
    const newId = direction === 'prev' ? currentId - 1 : currentId + 1;
    setCurrentId(newId);
  };

  return (
    <section className='container'>
      < article className='main' >
        <h1>Pokedex</h1>
        <div className='nav-link'>
          <Link to='/search'>
            <span><Search size={24} color={'red'} /></span> Search
          </Link>
        </div>
        {error ? <h2 className='error-msg'>{error}</h2> : ''}
        <Card
          isSearch={false}
          currentPokemon={currentPokemon}
          changePokemon={changePokemon}
        />
      </article>
    </section>
  );
};

export default Pokedex;
