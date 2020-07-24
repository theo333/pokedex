import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import '../App.css';

import CardInfo from './CardInfo';

const Card = ({ isSearch, currentPokemon, changePokemon }) => {
  const { id, name, weight, height, image } = currentPokemon;

  return (
    < article className='main' >
      <img className='img' src={image} />
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
    </article >
  );
}

export default Card;
