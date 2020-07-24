import React, { useState, useEffect, useContext } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import '../App.css';

import CardInfo from './CardInfo';
import getSinglePokemon from '../utils';
import { PokedexContext } from '../context/PokedexContext';

const Card = ({ isSearch, display }) => {
  const [idPokemon, setIdPokemon, nameSearch, setNameSearch, error, setError] = useContext(PokedexContext); // displayCard, setDisplayCard, 
  // const [displayCard, setDisplayCard] = useContext(PokedexContext);
  // const [error, setError] = useContext(PokedexContext);
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [displayCard, setDisplayCard] = useState(false); // isSearch ? false : true
  // const [currentId, setCurrentId] = useState(1);

  // console.log('match currentId | pokemonId: ', currentId, pokemonId);
  console.log('nameSearch in Card (not in useEffect): ', nameSearch)
  useEffect(() => {
    // display = isSearch ? false : true;
    // console.log('intial display: ', display)
    // if (isSearch && displayCard) {
    //   setDisplayCard(false);
    // }
  });

  useEffect(() => {
    console.log('isSearch: ', isSearch)
    console.log('display: ', display)
    console.log('nameSearch in Card: ', nameSearch)
    // setDisplayCard(false);
    if (!isSearch) {
      getPokemon(idPokemon);
    }
  }, [idPokemon]); // 

  // get single Pokemon object from API
  // used to display single Pokemon
  // pokemonIdentifier: ID (number) or name (string)
  const getPokemon = async (pokemonIdentifier) => {
    try {
      const _currentPokemon = await getSinglePokemon(pokemonIdentifier);
      setDisplayCard(true);
      setIdPokemon(_currentPokemon.id);
      setCurrentPokemon(_currentPokemon);
      // display = true;
      console.log('display after get results: ', display)
    } catch (err) {
      console.log('Card err: ', err);
      setError(err);
      setDisplayCard(false);
      // display = false;

    }
  };

  // change ID to previous or next Pokemon
  const changePokemon = direction => {
    // TODO add exceptions for first and last IDs
    console.log('direction: ', direction, idPokemon);
    const newId = direction === 'prev' ? idPokemon - 1 : idPokemon + 1;
    console.log('newId: ', newId);
    setIdPokemon(newId);
  };

  const { id, name, weight, height, image } = currentPokemon;
  return (
    <>
      {/* {!isSearch || display ? ( */}
      < article className='main' >
        <img className='img' src={image} /><br />
        <div className='nav'>
          {display}
          {/* <Link to='/3'>Go to 3</Link> */}
          {!isSearch ? (
            <>
              <button className='btn-nav' onClick={() => changePokemon('prev')} disabled={id === 1 ? `{true}` : ''}>
                <ChevronLeft color='red' size={90} />
              </button>
              <button className='btn-nav' onClick={() => changePokemon('next')} >
                <ChevronRight color='red' size={90} />
              </button>
            </>
          ) : ''}
        </div>
        <CardInfo
          id={id}
          name={name}
          weight={weight}
          height={height}
        />
      </article >
      {/* ) : ''} */}
    </>
  );
}

export default Card;
