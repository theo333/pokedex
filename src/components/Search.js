import React, { useState, useEffect, useContext } from 'react';
import { PokedexContext } from '../context/PokedexContext';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import Card from './Card';
import getSinglePokemon from '../utils';

const Search = () => {
	// const [idOrName, setIdOrName] = useContext(PokedexContext); 
	const [nameSearch, setNameSearch] = useContext(PokedexContext);
	const [currentPokemon, setCurrentPokemon] = useState({});
	const [currentId, setCurrentId] = useState();

	// useEffect(() => {
	// 	setIdOrName('');
	// 	// getPokemonByName(currentId);
	// }); // , [currentId]

	// // get single Pokemon object from API
	// // used to display single Pokedex from search
	// // pokemonName: name (string)
	// const getPokemonByName = async (pokemonName) => {
	// 	const searchedPokemon = await getSinglePokemon(pokemonName);

	// 	setCurrentId(searchedPokemon.id);
	// 	setCurrentPokemon(searchedPokemon);
	// };
	// console.log('Search - name: ', nameSearch)

	const handleSubmit = async (pokemonName) => {
		try {
			const searchedPokemon = await getSinglePokemon(pokemonName);
			setCurrentId(searchedPokemon.id);
			setCurrentPokemon(searchedPokemon);
		} catch (err) {
			console.log('Card err: ', err);
			// setError(err);
		};
	};

	console.log('currentPokemon.length: ', currentPokemon.length)
	return (
		<section className='container'>
			<p>Search</p>
			<Link to='/'>
				Pokedex
      		</Link>
			<SearchForm onSubmit={handleSubmit} />
			{Object.keys(currentPokemon).length ? (
				<Card isSearch={true} display={false} currentPokemon={currentPokemon} />
			) : ''}
		</section>
	);
};

export default Search;