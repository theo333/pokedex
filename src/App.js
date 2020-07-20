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
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${useId}/`
    );
    const { id, height, weight } = response.data;
    const { name } = response.data.forms[0];
    const _current = {
      id,
      name,
      height,
      weight,
    };
    console.log('currentId: ', currentId);
    console.log(_current);

    setCurrentId(_current.id);
    setCurrentPokemon(_current);
  };

  // 
  const changePokemon = direction => {
    // TODO add exceptions for first and last ids
    console.log('direction: ', direction, currentId);
    const newId = direction === 'prev' ? currentId - 1 : currentId + 1;
    console.log('newId: ', newId);
    setCurrentId(newId);
  };

  const { id, name, height, weight } = currentPokemon;
  return (
    <div className="App">
      <Card
        id={id}
        name={name}
        height={height}
        weight={weight}
      />
      {/* `className='deactivate'` */}
      <button onClick={() => changePokemon('prev')} disabled={currentId === 1 ? 'true' : ''}>
        <ChevronLeft color='red' size={48} />
      </button>
      <button onClick={() => changePokemon('next')} >
        <ChevronRight color='red' size={48} />
      </button>
    </div>
  );
}

export default App;
