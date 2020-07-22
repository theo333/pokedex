import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronLeft, ChevronRight } from 'react-feather';
import './App.css';

import Card from './components/Card';

function App() {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [currentId, setCurrentId] = useState(1);

  useEffect(() => {
    getPokemon(currentId);
  }, [currentId]);

  const getPokemon = async (useId) => {
    const singlePokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${useId}/`
    );
    console.log('singlePokemon: ', singlePokemon.data);
    const { id, height, weight } = singlePokemon.data;
    const { name } = singlePokemon.data.forms[0];
    const image = singlePokemon.data.sprites.front_default;
    const _current = {
      id,
      name,
      height,
      weight,
      image,
    };
    // console.log('currentId: ', currentId);
    // console.log(_current);

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
    <section className='App container'>
      <h2>Pokedex</h2>
      <article className='main'>
        <img className='img' src={image} /><br />
        <div className='nav'>
          <button className='btn-nav' onClick={() => changePokemon('prev')} disabled={currentId === 1 ? `{true}` : ''}>
            <ChevronLeft color='red' size={90} />
          </button>
          <button className='btn-nav' onClick={() => changePokemon('next')} >
            <ChevronRight color='red' size={90} />
          </button>
        </div>
        <Card
          id={id}
          name={name}
          weight={weight}
          height={height}
        />
      </article>
    </section>
  );
}

export default App;
