import axios from 'axios';

const getSinglePokemon = async (pokemonIdentifier) => {
	const singlePokemon = await axios.get(
		`https://pokeapi.co/api/v2/pokemon/${pokemonIdentifier}/`
	);
	console.log('singlePokemon: ', singlePokemon.data);
	const { id, height, weight } = singlePokemon.data;
	const { name } = singlePokemon.data.forms[0];
	const image = singlePokemon.data.sprites.front_default;
	return {
		id,
		name,
		height,
		weight,
		image,
	};
}

export default getSinglePokemon;