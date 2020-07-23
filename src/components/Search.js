import React from 'react';
import SearchForm from './SearchForm';

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
			<SearchForm />
		</section>
	);
};

export default Search;