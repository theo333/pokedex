import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import '../App.css';

import CardInfo from './CardInfo';

// displays Pokemon image and info, forward and backward navigation 
const Card = ({ isSearch, currentPokemon, changePokemon }) => {
  const { id, name, weight, height, image } = currentPokemon;

  return (
    <div className='card'>
      <img className='img' src={image} alt={`Pokemon character ${name} front`} />
      {!isSearch ? (
        <div className='nav'>
          <button className='btn-nav' onClick={() => changePokemon('prev')} disabled={id === 1 ? `{true}` : ''}>
            <ChevronLeft color='red' size={90} />
          </button>
          <button className='btn-nav' onClick={() => changePokemon('next')} >
            <ChevronRight color='red' size={90} />
          </button>
        </div>
      ) : ''}
      <CardInfo
        id={id}
        name={name}
        weight={weight}
        height={height}
      />
    </div>
  );
}

export default Card;
