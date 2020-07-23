import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import getSinglePokemon from '../utils';
import Card from './Card';

const Search = () => {
	const [currentPokemon, setCurrentPokemon] = useState({});
	const [currentId, setCurrentId] = useState(1);

	useEffect(() => {
		getPokemonByName(currentId);
	}, [currentId]); // 

	// get single Pokemon object from API
	// used to display single Pokedex from search
	// pokemonName: name (string)
	const getPokemonByName = async (pokemonName) => {
		const searchedPokemon = await getSinglePokemon(pokemonName);

		setCurrentId(searchedPokemon.id);
		setCurrentPokemon(searchedPokemon);
	};

	return (
		<section className='container'>
			<p>Search</p>
			<Link to='/'>
				Pokedex
      		</Link>
			<SearchForm />
			<Card isSearch={true} />
		</section>
	);
};

export default Search;