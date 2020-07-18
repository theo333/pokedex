import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Card from './components/Card';

function App() {
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [currentId, setCurrentId] = useState(1);

  useEffect(() => {
    getPokemon(1);
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

  const { id, name, height, weight } = currentPokemon;
  return (
    <div className="App">
      <Card
        id={id}
        name={name}
        height={height}
        weight={weight}
      />
    </div>
  );
}

export default App;
