import React, { useState, useEffect, useContext } from 'react';
import { PokedexContext } from '../context/PokedexContext';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import Card from './Card';

const Search = () => {
	// const [idOrName, setIdOrName] = useContext(PokedexContext);
	// const [currentPokemon, setCurrentPokemon] = useState({});
	// const [currentId, setCurrentId] = useState(1);

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

	return (
		<section className='container'>
			<p>Search</p>
			<Link to='/'>
				Pokedex
      		</Link>
			<SearchForm />

			<Card isSearch={true} display={false} />
		</section>
	);
};

export default Search;