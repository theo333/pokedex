import axios from 'axios';

const getSinglePokemon = async (pokemonIdentifier) => {
	const { data } = await axios.get(
		`https://pokeapi.co/api/v2/pokemon/${pokemonIdentifier}/`
	);
	console.log('singlePokemon: ', data);
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