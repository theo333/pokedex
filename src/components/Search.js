import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers } from 'react-feather';

import SearchForm from './SearchForm';
import Card from './Card';
import getSinglePokemon from '../utils';

const Search = () => {
	const [currentPokemon, setCurrentPokemon] = useState({});
	const [error, setError] = useState('');

	// handles submit for search form
	// gets Pokemon data from API
	const handleSubmit = async (pokemonName) => {
		try {
			const searchedPokemon = await getSinglePokemon(pokemonName);
			setCurrentPokemon(searchedPokemon);
			setError('');
		} catch (err) {
			console.log('Card err: ', err);
			setError(`Sorry no results match your search terms: ${pokemonName}.  Please search again.`);
			setCurrentPokemon({});
		};
	};

	return (
		<>
			<h1>Search</h1>
			<div className='nav-link'>
				<Link to='/'>
					<span><Layers size={24} color={'red'} /></span> Pokedex
      				</Link>
			</div>
			<SearchForm onSubmit={handleSubmit} />
			{error ? <h3 className='error-msg'>{error}</h3> : ''}
			{Object.keys(currentPokemon).length ? (
				<Card isSearch={true} currentPokemon={currentPokemon} />
			) : ''}
		</>
	);
};

export default Search;