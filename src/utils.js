import axios from 'axios';

// gets Pokemon data from API
// pokemonIdentifier: ID (integer) or name (string)
const getSinglePokemon = async (pokemonIdentifier) => {
	// TODO memoize data so that do not have to keep grabbing from API
	const { data } = await axios.get(
		`https://pokeapi.co/api/v2/pokemon/${pokemonIdentifier}/`
	);

	const { id, height, weight } = data;
	const { name } = data.forms[0];
	const image = data.sprites.front_default;
	return {
		id,
		name,
		height,
		weight,
		image,
	};
}

export default getSinglePokemon;