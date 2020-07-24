import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import Card from './Card';
import getSinglePokemon from '../utils';
import { PokedexContext } from '../context/PokedexContext';

// TODO get routing working / pokemonId
const Pokedex = ({ pokemonId }) => {
  console.log(pokemonId)
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [idOrName, setIdOrName] = useContext(PokedexContext);
  const [currentId, setCurrentId] = useState(1);
  // setDisplayCard(true);

  useEffect(() => {
    // console.log('isSearch: ', isSearch)
    // console.log('idOrName: ', idOrName)
    // setDisplayCard(false);
    // if (!isSearch) {
    getPokemon(currentId);
    // }
  }, [currentId]); // 

  // get single Pokemon object from API
  // used to display single Pokemon
  // pokemonIdentifier: ID (number) or name (string)
  const getPokemon = async (pokemonIdentifier) => {
    try {
      const _currentPokemon = await getSinglePokemon(pokemonIdentifier);
      // setDisplayCard(true);
      setIdOrName(_currentPokemon.id);
      setCurrentPokemon(_currentPokemon);
      // display = true;
      // console.log('display after get results: ', display)
    } catch (err) {
      console.log('Card err: ', err);
      // setError(err);
      // setDisplayCard(false);
      // display = false;

    }
  };

  // change ID to previous or next Pokemon
  const changePokemon = direction => {
    // TODO add exceptions for first and last IDs
    console.log('direction: ', direction, currentId);
    const newId = direction === 'prev' ? currentId - 1 : currentId + 1;
    console.log('newId: ', newId);
    // setIdOrName(newId);
    setCurrentId(newId);
  };

  return (
    <section className='container'>
      <h1>Pokedex</h1>
      <Link to='/search'>
        Search
      </Link>
      <Card isSearch={false} display={true} currentPokemon={currentPokemon} changePokemon={changePokemon} />
    </section>
  );
};

export default Pokedex;
