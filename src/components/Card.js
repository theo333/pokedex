import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'react-feather';
import '../App.css';

import CardInfo from './CardInfo';
import getSinglePokemon from '../utils';

const Card = ({ pokemonId }) => {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [currentId, setCurrentId] = useState(1);

  console.log('match currentId | pokemonId: ', currentId, pokemonId);

  useEffect(() => {
    getPokemon(currentId);
  }, [currentId]); // 

  // get Pokemon object from API
  // used to display single Pokedex and for search
  // pokemonIdentifier: ID (number) or name (string)
  const getPokemon = async (pokemonIdentifier) => {
    const _current = await getSinglePokemon(pokemonIdentifier);

    setCurrentId(_current.id);
    setCurrentPokemon(_current);
  };

  // change ID to previous or next Pokemon
  const changePokemon = direction => {
    // TODO add exceptions for first and last IDs
    console.log('direction: ', direction, currentId);
    const newId = direction === 'prev' ? currentId - 1 : currentId + 1;
    console.log('newId: ', newId);
    setCurrentId(newId);
  };

  const { id, name, weight, height, image } = currentPokemon;
  return (
    <section className='container'>
      <h2>Pokedex</h2>
      <Link to='/search'>
        Search
      </Link>
      <article className='main'>
        <img className='img' src={image} /><br />
        <div className='nav'>
          {/* <Link to='/3'>Go to 3</Link> */}
          <button className='btn-nav' onClick={() => changePokemon('prev')} disabled={currentId === 1 ? `{true}` : ''}>
            <ChevronLeft color='red' size={90} />
          </button>
          <button className='btn-nav' onClick={() => changePokemon('next')} >
            <ChevronRight color='red' size={90} />
          </button>
        </div>
        <CardInfo
          id={id}
          name={name}
          weight={weight}
          height={height}
        />
      </article>
    </section>
  );
}

export default Card;
