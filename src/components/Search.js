import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SearchForm from './SearchForm';
import Card from './Card';
import getSinglePokemon from '../utils';

const Search = () => {
	const [currentPokemon, setCurrentPokemon] = useState({});
	const [error, setError] = useState('');

	const handleSubmit = async (pokemonName) => {
		try {
			const searchedPokemon = await getSinglePokemon(pokemonName);
			setCurrentPokemon(searchedPokemon);
			setError('');
		} catch (err) {
			console.log('Card err: ', err);
			setError('Sorry no results match your search terms.  Please search again.');
			setCurrentPokemon({});
		};
	};

	return (
		<section className='container'>
			<p>Search</p>
			<Link to='/'>
				Pokedex
      		</Link>
			<SearchForm onSubmit={handleSubmit} />
			{error ? <h3 className='error-msg'>{error}</h3> : ''}
			{Object.keys(currentPokemon).length ? (
				<Card isSearch={true} currentPokemon={currentPokemon} />
			) : ''}
		</section>
	);
};

export default Search;